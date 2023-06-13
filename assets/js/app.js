const screen = document.querySelector(".calc-screen")
const btn = document.querySelectorAll(".calc-row button")


let str=""

for (let index = 0; index < btn.length; index++) {
    btn[index].onclick=function(){
        str= str + btn[index].innerHTML
        screen.innerHTML=str
      

        if (btn[index].innerHTML=="C") {
            str=""

            screen.innerHTML="0"
        }

        if (btn[index].innerHTML=="←") {
            
            str= str.slice(0,str.length-2 )
            
            screen.innerHTML=str

            if (str.length==0) {
                screen.innerHTML="0"
                
            }

            
            
        }

         if (btn[index].classList.contains("sign")) {
            c
            

            
         }

        
    }
    

   

   
    

    
    
}

