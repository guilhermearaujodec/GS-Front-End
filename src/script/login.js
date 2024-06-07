// Alerta na página login
window.onload = function() {
    alert("Faça o seu login");
  }

// Disposição para dispositivos móveis
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "ativo";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".menu-mobile",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

// Validação do login
function validar(){

    // Declarando as variáveis 
    let usuario =document.getElementById("usuario").value;
    let senha =document.getElementById("senha").value;
  
    if(usuario ==="Admin" && senha ==="12345"){
        window.open("index.html")                 // Retorna para a página home após feito o login
    }else{
        alert("usuario e senha inválidos")
    }
  }