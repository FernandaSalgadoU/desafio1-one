let palabra_Usuario = "";
let palabra_Encriptada="";
let palabra_Desencriptada="";
let ventana_emergente_mensaje="";

function condicion_Inicial(){
    palabra_Usuario=document.getElementById('main_entrada_texto').value;
   /* palabra_Usuario = palabra_Usuario.toLowerCase();
    palabra_Usuario=quitar_Tildes(palabra_Usuario);
    palabra_Usuario=eliminarCaracteresEspeciales(palabra_Usuario);*/
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


function boton_Copiar(){
    palabra_Copiada=document.getElementById('main_salida_texto').value;

    if(palabra_Copiada.trim()===""){
        return;
    }

    document.getElementById('main_entrada_texto').value=palabra_Copiada;
    document.getElementById('main_salida_texto').value="";
    document.getElementById('main_salida').style.display='none';
    document.getElementById('main_salida_sin_texto').style.display='none';
    document.getElementById('main_salida_copia').style.display='flex';
}

function boton_Resetear(){
    document.getElementById('main_entrada_texto').value="";
    document.getElementById('main_salida_texto').value="";
    document.getElementById('main_salida').style.display='none';
    document.getElementById('main_salida_sin_texto').style.display='flex';
    document.getElementById('main_salida_copia').style.display='none';
}


/*function quitar_Tildes(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

function eliminarCaracteresEspeciales(texto) {
    const regex = /[^a-zA-Z0-9]/g;
    return texto.replace(regex, '');
  }*/

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