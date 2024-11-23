
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
let k=document.getElementById('k');
let l=document.getElementById('l');
let m=document.getElementById('m');
let n=document.getElementById('n');
let o=document.getElementById('o');
let p=document.getElementById('p');
let q=document.getElementById('q');
let r=document.getElementById('r');
let s=document.getElementById('s');
let t=document.getElementById('t');
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
         
    
  