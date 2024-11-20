
let menu =document.querySelector('#menu-bars');
var input = document.getElementById("search1");
let narvbar = document.querySelector('.navbar');
let a=document.getElementById('a');
let b=document.getElementById('b');
let c=document.getElementById('c');
let d=document.getElementById('d');
let e=document.getElementById('e');
let f=document.getElementById('f');
let g=document.getElementById('g');
let h=document.getElementById('h');
let i=document.getElementById('i');
let j=document.getElementById('j');
  var contain = document.getElementsByClassName('items')[0];
  var Allitem = contain.getElementsByClassName('item');
  var name1= contain.getElementsByTagName('h1');
  function search(){
    var searchitem=document.getElementById('search1').value.toUpperCase();
    for(var i=0;i<Allitem.length;i++){
      if(name1[i].innerText.toLocaleUpperCase().indexOf(searchitem)>=0 ){
        Allitem[i].style.display="flex".flexDirection="column";
      }else{
        Allitem[i].style.display="none";
      }
    }
  }
  document.getElementById('search1').addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
      search();
    }
  });
  const profileImage = document.getElementById('profileImage');
    const profilePopup = document.getElementById('profilePopup');
  function profileImage(){
  
    profileImage.addEventListener('click', () => {
      profilePopup.classList.toggle('hidden');
  });
  }
         
    
  