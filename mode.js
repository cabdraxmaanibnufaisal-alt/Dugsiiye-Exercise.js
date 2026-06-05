 const togglebutton = document.querySelector('#togglebutton')

 togglebutton.addEventListener('click',switchMode)
 
 function switchMode(){
    document.body.classList.toggle('dark-mode')
    togglebutton.classList.toggle('dark-mode')
    // togglebutton.textContent='🌛'

    if(document.body.classList.contains('dark-mode')){
         togglebutton.textContent='🌛'
         localStorage.setItem('mode','🌛')
    }else{
        togglebutton.textContent='🌞'
        localStorage.setItem('mode','🌞')
    }
 }

 window.addEventListener('DOMContentLoaded',function(){
   const saveMode = localStorage.getItem('mode')
   if(saveMode === '🌛'){
    document.body.classList.add('dark-mode')
   togglebutton.classList.add('dark-mode')
   togglebutton.textContent='🌛'
   }else{
    togglebutton.textContent='🌞'
   }
    
 })