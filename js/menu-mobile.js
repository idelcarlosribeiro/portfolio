var menuMob = document.getElementById("menu-mobile");
var content = document.getElementById("tudo");
var menuBur = document.getElementById("menu-burg");
var topo = document.getElementById('texto')
var siderbar = false;

function fechar(){
  siderbar = !siderbar;
  if (siderbar){
    menuMob.style.marginLeft = '-0vw';
    menuMob.style.animationName = "showSidebar";
    menuBur.style.display = 'none'
    content.style.filter = 'blur(3px)';
    topo.style.filter = "blur(3px)";
    
  }else{
    menuMob.style.marginLeft = "-100vw";
    menuBur.style.display = "block";
    menuMob.style.animationName = "";
    content.style.filter = "";
    topo.style.filter = "";
  }
}
function closeSidebar() {
  if(siderbar){
    fechar();
  }
}
window.addEventListener('resize', function(event){
  if (window.innerWidth > 604 && siderbar){
    fechar();
  }
});
