const urlsearch = new URLSearchParams(window.location.search);
let option = urlsearch.get('opt');
option = parseInt(option);
//console.log(option)
let main=document.getElementById('main-contanier');
if (option==1) {
    contanierr .innerHTML=home();
}else if(option==2){
    contanierr.innerHTML=manu();
}else if(option==3){
    contanierr.innerHTML=product();
}else if(option==4){
    rowleft.innerHTML=formleft(); 
    rowrightt.innerHTML = listcourse();
}else if(option==5){
    contanierr .innerHTML=listcourse();
}else if (option==6) {
    
}