var openMenu=document.querySelector('.menu_bar');
var listOpen=document.querySelector('.menu_items');
var topp=document.querySelector('.top');
openMenu.addEventListener('click',()=>{
    openMenu.classList.toggle('open');
    listOpen.classList.toggle('menu_open');
});
window.addEventListener('scroll',activeNavbar)
function activeNavbar(){
var x = this.pageYOffset;
    if(x>80){
        topp.classList.add('active');
    }
    else{
        topp.classList.remove('active');
    }    
};
const menuTile=document.querySelector('.menu_title');
menuTile.addEventListener('click',function(x){
    if(x.target.classList.contains('menu_btn')){
        const Target =x.target.getAttribute('data-a');
        menuTile.querySelector('.active').classList.remove('active');
        x.target.classList.add('active');

        const menuItem=document.querySelector('.menu');
        menuItem.querySelector('.menu_item_content.active').classList.remove('active');
        menuItem.querySelector(Target).classList.add('active');
       
    }
});
