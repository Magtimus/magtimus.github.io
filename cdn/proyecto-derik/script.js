document.getElementById("nombre").addEventListener("focus", enfoqueNombre);
document.getElementById("nombre").addEventListener("blur", desenfoqueNombre);
document.getElementById("nombre").addEventListener("keyup", presionarTecla);


document.getElementById("apellido").addEventListener("focus", enfoqueApellido);
document.getElementById("apellido").addEventListener("blur", desenfoqueApellido);
document.getElementById("apellido").addEventListener("keyup", presionarTecla);


document.getElementById("documento").addEventListener("focus", enfoqueDocumento);
document.getElementById("documento").addEventListener("blur", desenfoqueDocumento);
document.getElementById("documento").addEventListener("keyup", presionarTecla);


document.getElementById("no__celular").addEventListener("blur", desenfoqueCelular);
document.getElementById("no__celular").addEventListener("focus", enfoqueCelular);
document.getElementById("no__celular").addEventListener("keyup", presionarTecla);


document.getElementById("email").addEventListener("blur", desenfoqueEmail);
document.getElementById("email").addEventListener("focus", enfoqueEmail);
document.getElementById("email").addEventListener("keyup", presionarTecla);



input_nombre = document.getElementById("nombre");
input_apellido = document.getElementById("apellido");
input_documento = document.getElementById("documento");
input_noCelular = document.getElementById("no__celular");
input_email = document.getElementById("email");
/*---->*/
label_nombre = document.getElementById("fnombre");
label_apellido = document.getElementById("fapellido");
label_documento = document.getElementById("fdocumento");
label_noCelular = document.getElementById("fno__celular");
label_email = document.getElementById("femail");
/*------->*/
msgNombre = document.getElementById("msgNombre");
msgApellido = document.getElementById("msgApellido");
msgDocumento = document.getElementById("msgDocumento");
msgCelular = document.getElementById("msgCelular");
msgEmail = document.getElementById("msgEmail");
/**------------>*/
btn_continuar = document.getElementById("btn_continuar");



function enfoqueNombre(){

   if (input_nombre.value.length == 0 || 
       input_nombre.value.length > 0)  {
           
        label_nombre.style.fontSize= "14px";
        input_nombre.style.marginTop= "35px";
    }
}

function enfoqueApellido(){
    if (input_apellido.value.length == 0 || 
        input_apellido.value.length > 0)  {
            
         label_apellido.style.fontSize= "14px";
         input_apellido.style.marginTop= "35px";
     }
}

function enfoqueDocumento(){
    if (input_documento.value.length == 0 || 
        input_documento.value.length > 0)  {
            
         label_documento.style.opacity= "0";
     }
}

function enfoqueCelular(){
     if (input_noCelular.value.length == 0 || 
        input_noCelular.value.length > 0)  {
            
         label_noCelular.style.fontSize= "14px";
         input_noCelular.style.marginTop= "35px";
     }
}

function enfoqueEmail(){
     if (input_email.value.length == 0 || 
        input_email.value.length > 0)  {
            
         label_email.style.fontSize= "14px";
         input_email.style.marginTop= "35px";
     }
}


function desenfoqueNombre(){

    if (input_nombre.value.length == 0) {

         label_nombre.style.fontSize= "16px";
         input_nombre.style.marginTop= "0px";
         input_nombre.style.borderBottomColor= "#BB0A30";
         label_nombre.style.color= "#BB0A30";
         msgNombre.style.visibility = "visible";
     }else if (input_nombre.value.length > 0){
        input_nombre.style.borderBottomColor= "";
        label_nombre.style.color= "";
        msgNombre.style.visibility = "hidden";
     }


}

function desenfoqueApellido(){
     if (input_apellido.value.length == 0) {

        label_apellido.style.fontSize= "16px";
        input_apellido.style.marginTop= "0px";
        input_apellido.style.borderBottomColor= "#BB0A30";
        label_apellido.style.color= "#BB0A30";
        msgApellido.style.visibility = "visible";
    }else if (input_apellido.value.length > 0){
       input_apellido.style.borderBottomColor= "";
       label_apellido.style.color= "";
       msgApellido.style.visibility = "hidden";
    }

}

function desenfoqueDocumento(){
    if (input_documento.value.length == 0) {
       label_documento.style.opacity= "1";
       label_documento.style.color= "#BB0A30";
       input_documento.style.borderBottomColor= "#BB0A30";
       msgDocumento.style.visibility = "visible";
   }else if (input_documento.value.length > 0){
      input_documento.style.borderBottomColor= "";
      label_documento.style.color= "";
      msgDocumento.style.visibility = "hidden";
   }

}

function desenfoqueCelular(){
    if (input_noCelular.value.length == 0) {

        label_noCelular.style.fontSize= "16px";
        input_noCelular.style.marginTop= "0px";
        label_noCelular.style.color= "#BB0A30";
        input_noCelular.style.borderBottomColor= "#BB0A30";
        msgCelular.style.visibility = "visible";
    }else if (input_noCelular.value.length > 0){
       input_noCelular.style.borderBottomColor= "";
       label_noCelular.style.color= "";
       msgCelular.style.visibility = "hidden";
    }

}

function desenfoqueEmail(){
    if (input_email.value.length == 0) {

        label_email.style.fontSize= "16px";
        input_email.style.marginTop= "0px";
        label_email.style.color= "#BB0A30";
        input_email.style.borderBottomColor= "#BB0A30";
        msgEmail.style.visibility = "visible";
    }else if (input_email.value.length > 0){
       input_email.style.borderBottomColor= "";
       label_email.style.color= "";
       msgEmail.style.visibility = "hidden";
    }

}
 


function presionarTecla(){

     if(input_nombre.value.length == 0 || input_apellido.value.length == 0 || input_documento.value.length == 0 || input_noCelular.value.length == 0 || input_email.value.length == 0){
        btn_continuar.style.opacity = "0.2";
        btn_continuar.style.cursor = "not-allowed";
    }else{
        btn_continuar.style.opacity = "1";
        btn_continuar.style.cursor = "pointer";
    }


}



if(input_nombre.value.length == 0 || input_apellido.value.length == 0 || input_documento.value.length == 0 || input_noCelular.value.length == 0 || input_email.value.length == 0){
    btn_continuar.style.opacity = "0.2";
    btn_continuar.style.cursor = "not-allowed";
}else{
    btn_continuar.style.opacity = "1";
    btn_continuar.style.cursor = "pointer";
}







    if (input_nombre.value.length > 0)  {
            
         label_nombre.style.fontSize= "14px";
         input_nombre.style.marginTop= "35px";
     }

 
     if (input_apellido.value.length > 0)  {
             
          label_apellido.style.fontSize= "14px";
          input_apellido.style.marginTop= "35px";
      }
 
     if (input_documento.value.length > 0)  {
             
          label_documento.style.opacity= "0";
      }

 
      if (input_noCelular.value.length > 0)  {
             
          label_noCelular.style.fontSize= "14px";
          input_noCelular.style.marginTop= "35px";
      }


      if (input_email.value.length > 0)  {
             
          label_email.style.fontSize= "14px";
          input_email.style.marginTop= "35px";
      }
