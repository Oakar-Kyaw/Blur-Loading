const loadingText=document.querySelector('.loadingtext');
const circle=document.getElementById('circle');
const bg=document.querySelector('.bg');

let loading=0;
let int =setInterval(Loading,100);

function Loading(){
  loading++;
  
  if(loading>99){
    clearInterval(int)
   
    
  }
 loadingText.innerText=`${loading}%`;
loadingText.style.opacity=scale(loading,0,100,1,0); 
circle.style.opacity=scale(loading,0,100,1,0); 
  bg.style.filter=`blur(${scale(loading,0,100,40,0)}px)`
}

const scale=(num,in_min,in_max,out_min,out_max)=>{return ((num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min);};
