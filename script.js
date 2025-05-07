const logIn = document.querySelector(".logIn")
const logOut = document.querySelector(".logOut")
const button = document.querySelector(".button")
let container_usuarios = JSON.parse(localStorage.getItem("list"));
const form1 = document.querySelector(".form1")
const div = document.querySelector(".div")
const title = document.querySelector(".title")
const ingresar = document.querySelector(".Ingresar")
const botones = document.querySelector(".botones")
let confirmacion = false
const regla = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
botones.classList.toggle("ocultar");
div.classList.toggle("ocultar");

ingresar.onclick=()=>{
    botones.classList.toggle("ocultar");
    div.classList.add("ocultar");
    
    
}
logOut.onclick=()=>{
    
    document.querySelector(".email").value = ""; 
    document.querySelector(".contraseña").value = "";
    div.classList.toggle("ocultar");
    title.innerHTML="cree un usuario"
  
    button.onclick=()=>{
        
        div.classList.toggle("ocultar");

    let mail = document.querySelector(".email").value;
    let contraseña = document.querySelector(".contraseña").value;
    if((mail ==="")||(contraseña==="")){
        
        div.classList.toggle("ocultar");
        alert("porfavor rellene los campo ")
    }else{
        container_usuarios.push({email:mail,password:contraseña})
        localStorage.setItem("list",JSON.stringify(container_usuarios))
    
        alert("Usuario registrado correctamente");
    

    }
}
}

logIn.onclick=()=>{
    document.querySelector(".email").value = ""; 
    document.querySelector(".contraseña").value = "";
    title.innerHTML="inicia sesion"
    div.classList.toggle("ocultar");
    button.onclick=()=>{

        

        let mail = document.querySelector(".email").value;
        let contraseña = document.querySelector(".contraseña").value;
        if((mail ==="")||(contraseña==="")){
            div.classList.toggle("ocultar");
            alert("porfavor rellene los campo ")
        }else{
        let container_usuarios = JSON.parse(localStorage.getItem("list")) || [];
        for(let i = 0;i<container_usuarios.length;i++){
            
            if((mail === container_usuarios[i].email)&&(contraseña === container_usuarios[i].password)){
                confirmacion =true;
                break;
            }
        }if(confirmacion===true){
             alert("has iniciado sesion")
        }else{
            alert("no se ha podido iniciar sesion")
        }
        confirmacion = false} }
}
function mostrarUsuarios() {
    let container_usuarios = JSON.parse(localStorage.getItem("list")) || [];
    console.log("Usuarios guardados:", usuariosGuardados);
}
