
//Ocultar el div cuando aun no se encripta un mensaje
document.getElementById('btn-encriptar').addEventListener('click', function() {
    document.getElementById('posicion').classList.add('hidden');
});
   // funcion permite validar que no se pueda ingresar mayusculas, espacio en blanco y caracteres especiales
    function validarTexto (texto) {
    
        let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
        let mayusculas = /[A-Z]/g;  
        let vacio="";  
          
        if(texto.match(mayusculas)||texto.match(caracteres)){
            alert("No se permiten caracteres especiales ni mayusculas");
            return true; 
        }else if(texto==vacio){
           alert("Ingrese un mensaje para encriptar");
            return true;
       }else {
            return false;
        }
    }
    
    // funcionilidad del boton encriptar
    let btnEncriptar = document.querySelector("#btn-encriptar");
    
    btnEncriptar.addEventListener("click",function ()  {
        let textInput = document.querySelector("#input-texto").value;
        let textoIngresado = textInput;
       
        if (validarTexto (textoIngresado) == false) {       
            let Encriptado = encriptar(textoIngresado);
            let resultado = document.querySelector("#msg");
            resultado.value = Encriptado;
        } else {        
            textInput = "";     
         
        }
                   
    })
    
    // objeto con las letras que seran encriptadas
    const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat","r":"rrar", "t":"tta","l":"llse","s":"ssas","p":"ppd","m":"mmmq","q":"qqqs","n":"nnnas","g":"ggg","c":"cccc"};
    
    function encriptar (textoIngresado) {
        let Encriptado = "";
        for (const obj in reglas) {
            Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
            textoIngresado = Encriptado;        
        }
        return (Encriptado);
    }
    
    // funcionalidad del boton copias
    let btnCopiar = document.querySelector("#btn-copy");
    
    btnCopiar.addEventListener("click",function(){        
        let Copiado = document.querySelector("#msg").value;
        navigator.clipboard.writeText(Copiado);
        document.querySelector("#input-texto").value="";
    
    });
    // funcionalidad del boton desencriptar
    let btnDesencriptar = document.querySelector("#btn-desencriptar");
    
    btnDesencriptar.addEventListener("click", function(){
        let textoIngresado = document.querySelector("#input-texto").value;
        let Desencriptado = desencriptar(textoIngresado);
    
        let resultado = document.querySelector("#msg");
        resultado.value = Desencriptado;
    })
    
    function desencriptar (textoIngresado) {
        let Encriptado = "";
        for (const obj in reglas) {
            Encriptado = textoIngresado.replaceAll(reglas[obj],obj);
            textoIngresado = Encriptado;        
        }
        return (Encriptado);
    }
