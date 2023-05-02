class MobileNavbar{
    constructor(mobileMenu, navlist, navLinks){
        this.mobileMenu = document.querySelector (mobileMenu);
        this.navlist = document.querySelector (navlist);
        this.navLinks = document.querySelectorAll (navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind();
    }


handleClick() {
    console.log(this);
this.navList.classList.toggle(this.activeClass);
}

addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
}

Init(){
    if (this.mobileMenu){
        this.addClickEvent ();

    }
   return this;
}


}