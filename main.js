window.addEventListener("load", function(){
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
});




var counterRoot = new Vue({

	el: "#counter",

	data: {

		counter: 1

	}

});

var counterRoot = new Vue({

	el: "#counter1",

	data: {

		counter1: 1

	}

});

//zero
var modal = document.getElementById('simpalmodal');
//Get open button
var modalBtn = document.getElementById('modalBtn');

var closebtn =document.getElementById('closebtn');

modalBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display='block';
}
function appearmod(){
    document.getElementById("simpalmodal").style.display= 'block';
}

function closeModal(){
    modal.style.display='none';
}
function closemod(){
    document.getElementById("simpalmodal").style.display= 'none';
}

//one
var modal = document.getElementById('simpalmodal1');
//Get open button
var modalBtn = document.getElementById('modalBtn1');

var closebtn =document.getElementById('closebtn1');

//modalBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display='block';
}
function appearmod(){
    document.getElementById("simpalmodal1").style.display= 'block';
}

function closeModal(){
    modal.style.display='none';
}
function closemod(){
    document.getElementById("simpalmodal1").style.display= 'none';
}


//two

var modal = document.getElementById('simpalmodal2');
//Get open button
var modalBtn2 = document.getElementById('modalBtn2');

var closebtn =document.getElementById('closebtn2');

modalBtn2.addEventListener('click', openModal);

function openModal(){
    modal.style.display='block';
}
function appearmod(){
    document.getElementById("simpalmodal2").style.display= 'block';
}

function closeModal(){
    modal.style.display='none';
}
function closemod(){
    document.getElementById("simpalmodal2").style.display= 'none';
}

//three

var modal = document.getElementById('simpalmodal3');
//Get open button
var modalBtn3 = document.getElementById('modalBtn3');

var closebtn =document.getElementById('closebtn3');

modalBtn3.addEventListener('click', openModal);

function openModal(){
    modal.style.display='block';
}
function appearmod(){
    document.getElementById("simpalmodal3").style.display= 'block';
}

function closeModal(){
    modal.style.display='none';
}
function closemod(){
    document.getElementById("simpalmodal3").style.display= 'none';
}

//four


var modal = document.getElementById('simpalmodal4');
//Get open button
var modalBtn4 = document.getElementById('modalBtn4');

var closebtn =document.getElementById('closebtn4');

modalBtn4.addEventListener('click', openModal);

function openModal(){
    modal.style.display='block';
}
function appearmod(){
    document.getElementById("simpalmodal4").style.display= 'block';
}

function closeModal(){
    modal.style.display='none';
}
function closemod(){
    document.getElementById("simpalmodal4").style.display= 'none';
}


//five

var modal = document.getElementById('simpalmodal5');
//Get open button
var modalBtn = document.getElementById('modalBtn5');

var closebtn =document.getElementById('closebtn5');

modalBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display='block';
}
function appearmod(){
    document.getElementById("simpalmodal5").style.display= 'block';
}

function closeModal(){
    modal.style.display='none';
}
function closemod(){
    document.getElementById("simpalmodal5").style.display= 'none';
}





// function val(){
//     if(frm.email.value==""){
//         alert("Please enter your Email Address");
//         frm.email.focus();
//         return focus;
//     }
//     var reg =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     
//     if(reg.test(frm.email.value) == false)
//         {
//             alert('Invalid Email Address');
//             frm.eamil.focus();
//             return false;
//         }
//     return tr;
// }
                    


