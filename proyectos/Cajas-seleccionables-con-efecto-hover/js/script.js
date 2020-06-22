document.querySelector(".box1").addEventListener("click", box_seleted1);
document.querySelector(".box2").addEventListener("click", box_seleted2);
document.querySelector(".box3").addEventListener("click", box_seleted3);

//declarando variables

//box1
box1 = document.querySelector(".box1");
check_bg1 = document.querySelector(".box1 .check");
check_icon1 = document.querySelector(".box1 .fa-check");

//box2
box2 = document.querySelector(".box2");
check_bg2 = document.querySelector(".box2 .check");
check_icon2 = document.querySelector(".box2 .fa-check");

//box3
box3 = document.querySelector(".box3");
check_bg3 = document.querySelector(".box3 .check");
check_icon3 = document.querySelector(".box3 .fa-check");

value_box = 0;


function box_seleted1() {

    box2.classList.remove('box-selected');
    check_bg2.classList.remove('check-selected');
    check_icon2.classList.remove('icon-check');

    box3.classList.remove('box-selected');
    check_bg3.classList.remove('check-selected');
    check_icon3.classList.remove('icon-check');

    box1.classList.toggle('box-selected');
    check_bg1.classList.toggle('check-selected');
    check_icon1.classList.toggle('icon-check');

    //Verificar a cual caja está seleccionando
    value_box = 1;
    console.log(value_box);

}

function box_seleted2() {

    box1.classList.remove('box-selected');
    check_bg1.classList.remove('check-selected');
    check_icon1.classList.remove('icon-check');

    box3.classList.remove('box-selected');
    check_bg3.classList.remove('check-selected');
    check_icon3.classList.remove('icon-check');

    box2.classList.toggle('box-selected');
    check_bg2.classList.toggle('check-selected');
    check_icon2.classList.toggle('icon-check');

    value_box = 2;
    console.log(value_box);

}

function box_seleted3() {
    box1.classList.remove('box-selected');
    check_bg1.classList.remove('check-selected');
    check_icon1.classList.remove('icon-check');

    box2.classList.remove('box-selected');
    check_bg2.classList.remove('check-selected');
    check_icon2.classList.remove('icon-check');

    box3.classList.toggle('box-selected');
    check_bg3.classList.toggle('check-selected');
    check_icon3.classList.toggle('icon-check');

    value_box = 3;
    console.log(value_box);

    
}