
const navicon = document.querySelector('.nav-icon');
let navlist = document.querySelector(".nav-list");
let check = 1;
navicon.addEventListener('click', function(){
    if(check == 1){
       navlist.style.display = "flex"
        check = 2; 
    }else{
        navlist.style.display = "none"
            check = 1;
    }
    
   
})
    

