/**
 * Created by donpage on 4/1/14.
 */
(function () {

//    $(document).ready(function (e) {
//
//
//    });


    //There is an better way to do this but I'm passing time while waiting for Lunar eclipse 4/15/14
    var toggleButton1 = document.querySelector('.toggleSlider1');
    var slide1 = document.querySelector('.project-table1');
    toggleButton1.addEventListener('click', toggleSlider1, false);
    function toggleSlider1(){
        if(slide1.classList.contains('slide-up')){
            slide1.classList.remove('slide-up');
            console.log("slide-down");
        } else {
            slide1.classList.add('slide-up');
            console.log("slide-up");
        }
    }

    var toggleButton2 = document.querySelector('.toggleSlider2');
    var slide2 = document.querySelector('.project-table2');
    toggleButton2.addEventListener('click', toggleSlider2, false);
    function toggleSlider2(){
        if(slide2.classList.contains('slide-up')){
            slide2.classList.remove('slide-up');
            console.log("slide-down");
        } else {
            slide2.classList.add('slide-up');
            console.log("slide-up");
        }
    }

    var toggleButton3 = document.querySelector('.toggleSlider3');
    var slide3 = document.querySelector('.project-table3');
    toggleButton3.addEventListener('click', toggleSlider3, false);
    function toggleSlider3(){
        if(slide3.classList.contains('slide-up')){
            slide3.classList.remove('slide-up');
            console.log("slide-down");
        } else {
            slide3.classList.add('slide-up');
            console.log("slide-up");
        }
    }

    var toggleButton4 = document.querySelector('.toggleSlider4');
    var slide4 = document.querySelector('.project-table4');
    toggleButton4.addEventListener('click', toggleSlider4, false);
    function toggleSlider4(){
        if(slide4.classList.contains('slide-up')){
            slide4.classList.remove('slide-up');
            console.log("slide-down");
        } else {
            slide4.classList.add('slide-up');
            console.log("slide-up");
        }
    }

    var toggleButton5 = document.querySelector('.toggleSlider5');
    var slide5 = document.querySelector('.project-table5');
    toggleButton5.addEventListener('click', toggleSlider5, false);
    function toggleSlider5(){
        if(slide5.classList.contains('slide-up')){
            slide5.classList.remove('slide-up');
            console.log("slide-down");
        } else {
            slide5.classList.add('slide-up');
            console.log("slide-up");
        }
    }

    var toggleButton6 = document.querySelector('.toggleSlider6');
    var slide6 = document.querySelector('.project-table6');
    toggleButton6.addEventListener('click', toggleSlider6, false);
    function toggleSlider6(){
        if(slide6.classList.contains('slide-up')){
            slide6.classList.remove('slide-up');
            console.log("slide-down");
        } else {
            slide6.classList.add('slide-up');
            console.log("slide-up");
        }
    }


})();
