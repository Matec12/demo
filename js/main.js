var sign_in =document.getElementsByClassName("section_login");
sign_in.setAttribute("hidden")

var accMode =document.getElementsByName("account");

Array.from(accMode).forEach(element=>{
    element.addEventListener("click",(ev)=>{
        if(ev.target.id=="signup"){
          log.setAttribute("hidden",true)
               Array.from(document.getElementsByClassName("section_login")).forEach(element=>{
                   element.setAttribute("hidden",true)
               })
        }
        else if(ev.target.id =="login"){
           sign.removeAttribute("hidden")
            Array.from(document.getElementsByClassName("section_signup")).forEach(element=>{
                element.removeAttribute("hidden")
            })
        }

        else{
            log.removeAttribute("hidden")
             Array.from(document.getElementsByClassName("login")).forEach(element=>{
                 element.removeAttribute("hidden")
             })
         }
    })
})
