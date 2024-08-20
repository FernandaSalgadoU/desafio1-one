let palabra_Usuario = "";
let palabra_Encriptada="";
let palabra_Desencriptada="";
let ventana_emergente_mensaje="";

function condicion_Inicial(){
    palabra_Usuario=document.getElementById('main_entrada_texto').value;
}


function boton_Encriptar(){
    condicion_Inicial();
    palabra_Encriptada=encriptar_Texto(palabra_Usuario);

    if(palabra_Usuario.trim()===""){
        Swal.fire({
            position: "center",
            icon: "error",
            titleText:"¡Cuidado!",
            text: "Por favor, ingrese texto que desee encriptar",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar:true,
            customClass: {
                popup: 'swal-popup-custom'
              }
          });
        return;
    }
    else{
        if(verificar_Minusculas(palabra_Usuario)==false || verificar_Tilde(palabra_Usuario)==true || contieneCaracteresEspeciales(palabra_Usuario)==true){
            Swal.fire({
                title: 'Cuidado!',
                text:  "No es posible desencriptar el texto debido a que tiene mayúsculas, acentos o carácteres especiales. Por favor, corrija e intente nuevamente.",
                icon: 'error',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar:true,
                customClass: {
                  popup: 'swal-popup-custom'
                }
              });
            return;
        }
        else{
            document.getElementById('main_salida_texto').value=palabra_Encriptada;
            document.getElementById('main_salida').style.display='flex';
            document.getElementById('main_salida_sin_texto').style.display='none';
            document.getElementById('main_salida_copia').style.display='none';
        }
    }
}

function boton_Desencriptar(){
    condicion_Inicial();
    palabra_Desencriptada=desencriptar_Texto(palabra_Usuario);
    
    if(palabra_Usuario.trim()===""){
        Swal.fire({
            position: "center",
            icon: "error",
            titleText:"¡Cuidado!",
            text: "Por favor, ingrese texto que desee desencriptar",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar:true,
            customClass: {
                popup: 'swal-popup-custom'
              }
          });
        return;
    }
    else{
        if(verificar_Minusculas(palabra_Usuario)==false || verificar_Tilde(palabra_Usuario)==true || contieneCaracteresEspeciales(palabra_Usuario)==true){
            Swal.fire({
                position: "center",
                icon: "error",
                titleText:"¡Cuidado!",
                text: "No es posible desencriptar el texto debido a que tiene mayúsculas, acentos o carácteres especiales. Por favor, corrija e intente nuevamente.",
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar:true,
                customClass: {
                    popup: 'swal-popup-custom'
                  }
              });
            return;
        }
        else{
        document.getElementById('main_salida_texto').value=palabra_Desencriptada;
        document.getElementById('main_salida').style.display='flex';
        document.getElementById('main_salida_sin_texto').style.display='none';
        document.getElementById('main_salida_copia').style.display='none';
        }
    }
}

function boton_Copiar() {
    var palabra_Copiada = document.getElementById('main_salida_texto').value;
    navigator.clipboard.writeText(palabra_Copiada).then(() => {
        mostrarMensaje("El mensaje fue copiado con éxito");
        document.getElementById('main_entrada_texto').value = palabra_Copiada;
        document.getElementById('main_salida_texto').value = "";
        document.getElementById('main_salida').style.display = 'none';
        document.getElementById('main_salida_sin_texto').style.display = 'none';
        document.getElementById('main_salida_copia').style.display = 'flex';

    }).catch(err => {
        mostrarMensaje("No fue posible copiar el mensaje en el portapapeles",err);
    });
}

function mostrarMensaje(mensaje) {
    const elementoMensaje = document.getElementById('mensaje_portapapeles');
    elementoMensaje.textContent = mensaje;
    elementoMensaje.style.display = 'block';

    elementoMensaje.style.animation = 'none'; 
    elementoMensaje.offsetHeight;
    elementoMensaje.style.animation = 'subirYdesaparecer 3s ease-in-out forwards';
}

function boton_Resetear(){
    document.getElementById('main_entrada_texto').value="";
    document.getElementById('main_salida_texto').value="";
    document.getElementById('main_salida').style.display='none';
    document.getElementById('main_salida_sin_texto').style.display='flex';
    document.getElementById('main_salida_copia').style.display='none';
}

function verificar_Minusculas(texto){
    if( texto=== texto.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
}

function verificar_Tilde(texto) {
    if (/[áéíóúÁÉÍÓÚ]/.test(texto)) {
      return true; 
    } 
    else {
      return false;
    }
  }

  function contieneCaracteresEspeciales(texto) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(texto);
}

function encriptar_Texto(texto){
    texto= texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    return texto;    
}

function desencriptar_Texto(texto){
    texto = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    return texto;
}

function abrirEnNuevaPestaña(link) {
    window.open(link, '_blank');
}

const githubButton = document.getElementById("icon_Github");
githubButton.addEventListener('click', () => {
     abrirEnNuevaPestaña('https://github.com/FernandaSalgadoU');
});

const linkedinButton = document.getElementById("icon_LinkedIn");
linkedinButton.addEventListener('click', () => {
    abrirEnNuevaPestaña('https://www.linkedin.com/in/fernanda-salgado-ulloa');
});

const githubButton_f = document.getElementById("icon_Github_footer");
githubButton_f.addEventListener('click', () => {
     abrirEnNuevaPestaña('https://github.com/FernandaSalgadoU');
});

const linkedinButton_f = document.getElementById("icon_LinkedIn_footer");
linkedinButton_f.addEventListener('click', () => {
    abrirEnNuevaPestaña('https://www.linkedin.com/in/fernanda-salgado-ulloa');
});



const typed=new Typed('.typed',{
    //strings:[
       // '<i class="texto_titulo">Encriptado</i>', 
       // '<i class="texto_titulo">Desencriptado</i>'
    //],
    stringsElement:'#cadenas-texto',
	typeSpeed: 75,
	startDelay: 300, 
	backSpeed: 75, 
    smartBackspace:true,
	backDelay: 1500,
	loop: true, 
	loopCount: false,
	showCursor: false,
	cursorChar: '', 
	contentType: 'html',

})
