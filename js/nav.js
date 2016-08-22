function getWidth() {
  
  if (self.innerWidth) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}

function openNav() {
  var width = getWidth();

  if(width>=300 && width<=700){
    document.getElementById("mySidenav").style.width = "50vw";}
  else if(width>=701 && width <=1040){
    document.getElementById("mySidenav").style.width = "28vw";}
  else{
    document.getElementById("mySidenav").style.width = "23vw";}
  
}

 function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("dropdown").checked = false;
}
  




