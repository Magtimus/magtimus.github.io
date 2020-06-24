//BUSCADOR DE CONTENUDO


//declarando variables
bars_search = document.getElementById("bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById('inputSearch');
box_search = document.getElementById("box-search");



//este primer codigo a continuacion lo puedo poner donde ejecuto las funciones para que el codigo sea más limpio
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

//Funcion para el filtrado de la busqueda

function buscador_interno() {

    //creando variables

    //para convertir el valor de input en mayuscula
    filter = inputSearch.value.toUpperCase();
    //para obtener todos los elementos dentro de la caja de busqueda, que en este caso le especifico que es el "li"
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los li
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            box_search.style.display = "block";
            cover_ctn_search.style.display = "block";

            if (inputSearch.value === "") {
                box_search.style.display = "none";
                cover_ctn_search.style.display = "none";
            }

        } else {
            li[i].style.display = "none";
        }
    }
}
