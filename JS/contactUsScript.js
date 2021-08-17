






function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  //mere elementin me defaultopen edhe kliko nto
  document.getElementById("defaultOpen").click();

  // /Database
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD5strrJIO8t2pQg2OgaKzblggmUF8eeJc",
    authDomain: "web-js-6d848.firebaseapp.com",
    databaseURL: "https://web-js-6d848-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "web-js-6d848",
    storageBucket: "web-js-6d848.appspot.com",
    messagingSenderId: "1021889514923",
    appId: "1:1021889514923:web:c11eabb1311d36d244d6ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference submitform infor


//referimi ne tabele ne db
var submitInfo = firebase.database().ref('submitForma-Technical');

//   validimi

function validate(element, minLength) {
    var span = element.parentNode.querySelector('span');

    if (element.value.length < minLength) {
        if (span.className.indexOf('no-display') !== -1) {
            span.classList.toggle('no-display');
        }
        span.textContent =
           '*' + element.id +
            ' should be greater than ' +
            minLength +
            ' characters long.';
    } else {
        if (span.className.indexOf('no-display') === -1) {
            span.classList.toggle('no-display');
        }
    }
}

var inputs = document.getElementsByClassName('validate-length');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        validate(this, this.getAttribute('data-min-length'));
    });
}

var inputfname = document.getElementById('First Name');
var inputlname = document.getElementById('Last Name');
var inputemail = document.getElementById('email');
var inputphone = document.getElementById('PhoneNumber');

(function validateFirstName(){
    
    var spanfname = document.getElementById('spanfname');

    inputfname.addEventListener('keyup',function(){
        if((/^[a-zA-Z]+$/.test(inputfname.value)) === false){
            if(spanfname.className.indexOf('no-display')!== -1){
                spanfname.classList.toggle('no-display');
            }
            spanfname.textContent = `*First Name should contains only letters`;
        } else{
            if(spanfname.className.indexOf('no-display') === -1){
                spanfname.classList.toggle('no-display');
            }
        }
    });
}());

(function validateLastName(){
    

    var spanlname = document.getElementById('spanlname');

    inputlname.addEventListener('keyup', function(){
        if((/^[a-zA-Z]+$/.test(inputlname.value)) === false){
            if(spanlname.className.indexOf('no-display')!== -1){
                spanlname.classList.toggle('no-display');
            }
            spanlname.textContent = `*First Name should contains only letters`;
        } else{
            if(spanlname.className.indexOf('no-display') === -1){
                spanlname.classList.toggle('no-display');
            }
        }
    });
}());

(function validateEmail(){
   
    var spanemail = document.getElementById('spanemail');

    inputemail.addEventListener('keyup', function(){
        function validateEmail(g) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(g).toLowerCase());
        }
        var emailvalidate = validateEmail(inputemail.value);

        if(emailvalidate === false){
            if(spanemail.className.indexOf('no-display')!== -1){
                spanemail.classList.toggle('no-display');
            }
            spanemail.textContent = `*Wrong email format`;
        } else{
            if(spanemail.className.indexOf('no-display') === -1){
                spanemail.classList.toggle('no-display');
            }
        }
    });
}());



(function validatePhoneNumber(){
    
var spanphone = document.getElementById('spanphone');
inputphone.addEventListener('keyup',function(){
    if(!(inputphone.value.startsWith('+1')) || ((/[a-zA-Z]/g.test(inputphone.value)) === true) || !(inputphone.value.length === 12)){
        if(spanphone.className.indexOf('no-display')!== -1){
            spanphone.classList.toggle('no-display');
        }
        spanphone.textContent = `*Phone Number should start with \'+1\' and contains exact 10 other numbers`;
    } else{
        if(spanphone.className.indexOf('no-display') === -1){
            spanphone.classList.toggle('no-display');
        }
    }
}) ;
}());



var xxx = document.getElementsByTagName('span');
var inputtitle = document.getElementById('title');
var inputExtra = document.getElementById('subject');



//submit forma per technical
var forma1 = document.getElementById('forma1');

forma1.addEventListener('submit',function(e){
    var count = 0;

    for(var i=0;i<xxx.length;i++){
        if(xxx[i].className.indexOf('no-display') === -1 ){
            count++;
        }
    }
    
     
    if(count == 0){
        e.preventDefault(); 

        window.location.href = "TechnicalFormSubmitted.html";

        var sFirstName = inputfname.value;
        let sLastName = inputlname.value;
        let sEmail = inputemail.value;
        let sPhoneNumber = inputphone.value;
        let sExactTitle = inputtitle.value;
        let sExtra = inputExtra.value;
        var g = document.getElementsByTagName('option');
        for(var i=0;i<g.length;i++){
            if(g[i].selected === true){
                 var sReason = g[i].value;
            }
        }

        saveSubmitInfo(sFirstName,sLastName,sEmail,sPhoneNumber,sExactTitle,sExtra,sReason ) ;

        var elements = document.getElementsByTagName('input');

        //clear all fields.
        for(var i=0;i<elements.length;i++){
            if(elements[i].type == 'text'){
                elements[i].value = '';            
            }else if(elements[i].type == 'radio'){
                elements[i].checked = false;
            }else if(elements[i].type == 'checkbox' ){
                elements[i].checked = false;
            }
        }

        inputExtra.value = '';

    }else{
       e.preventDefault();
            alert('Something wrong with your DATA-format');
          
    }

    function saveSubmitInfo(sFirstName,sLastName,sEmail,sPhoneNumber,sExactTitle,sExtra,sReason ){

        let newSubmitContanct = submitInfo.push();

        var d = new Date();

        newSubmitContanct.set({

            First_Name : sFirstName,
            Last_Name: sLastName,
            Email: sEmail,
            Phone_Numbet: sPhoneNumber,
            Reason: sReason,
            Title: sExactTitle,
            Extra_explanation: sExtra,
            created_on:d.toLocaleString()
        });
    }
});


// PJESA 2, MILITARY SUBMIT FORM
var inputfname2 = document.getElementById('First name');
(function validateFirstName2(){
    
    var spanfname2 = document.getElementById('spanfname2');

    inputfname2.addEventListener('keyup',function(){
        if((/^[a-zA-Z]+$/.test(inputfname2.value)) === false){
            if(spanfname2.className.indexOf('no-display')!== -1){
                spanfname2.classList.toggle('no-display');
            }
            spanfname2.textContent = `*First Name should contains only letters`;
        } else{
            if(spanfname2.className.indexOf('no-display') === -1){
                spanfname2.classList.toggle('no-display');
            }
        }
    });
}());

var inputlname2 = document.getElementById('Last name');
(function validateLastName2(){
    

    var spanlname2 = document.getElementById('spanlname2');

    inputlname2.addEventListener('keyup', function(){
        if((/^[a-zA-Z]+$/.test(inputlname2.value)) === false){
            if(spanlname2.className.indexOf('no-display')!== -1){
                spanlname2.classList.toggle('no-display');
            }
            spanlname2.textContent = `*First Name should contains only letters`;
        } else{
            if(spanlname2.className.indexOf('no-display') === -1){
                spanlname2.classList.toggle('no-display');
            }
        }
    });
}());

var inputemail2 = document.getElementById('email2');
(function validateEmail2(){
   
    var spanemail2 = document.getElementById('spanemail2');

    inputemail2.addEventListener('keyup', function(){
        function validateEmail(g) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(g).toLowerCase());
        }
        var emailvalidate = validateEmail(inputemail2.value);

        if(emailvalidate === false){
            if(spanemail2.className.indexOf('no-display')!== -1){
                spanemail2.classList.toggle('no-display');
            }
            spanemail2.textContent = `*Wrong email format`;
        } else{
            if(spanemail2.className.indexOf('no-display') === -1){
                spanemail2.classList.toggle('no-display');
            }
        }
    });
}());

var inputphone2 = document.getElementById('phoneNumber2');

(function validatePhoneNumber2(){
    
    var spanphone2 = document.getElementById('spanphone2');
    inputphone2.addEventListener('keyup',function(){
        if(!(inputphone2.value.startsWith('+1')) || ((/[a-zA-Z]/g.test(inputphone2.value)) === true) || !(inputphone2.value.length === 12)){
            if(spanphone2.className.indexOf('no-display')!== -1){
                spanphone2.classList.toggle('no-display');
            }
            spanphone2.textContent = `*Phone Number should start with \'+1\' and contains exact 10 other numbers`;
        } else{
            if(spanphone2.className.indexOf('no-display') === -1){
                spanphone2.classList.toggle('no-display');
            }
        }
    }) ;
    }());

    // addeventi per submitformen e military

    //referimi ne tabele ne db
var submitInfo2 = firebase.database().ref('submitForma-MILITARY');

var inputExtra2 = document.getElementById('Extra explain');
    var forma2 = document.getElementById('forma2');

   

    forma2.addEventListener('submit', function(e){
        var count = 0;

    for(var i=8;i<xxx.length;i++){
        if(xxx[i].className.indexOf('no-display') === -1 ){
            count++;
        }
    }

    if(count ===0){
        e.preventDefault();

        window.location.href = "MilitaryFormSubmitted.html";

        var sFirstName = inputfname2.value;
        let sLastName = inputlname2.value;
        let sEmail = inputemail2.value;
        let sPhoneNumber = inputphone2.value;
        let sExtra = inputExtra2.value;
        var g = document.getElementsByTagName('option');
        for(var i=0;i<g.length;i++){
            if(g[i].selected === true){
                 var sReason = g[i].value;
            }
        }

        saveSubmitInfo2(sFirstName,sLastName,sEmail,sPhoneNumber,sExtra,sReason ) ;

        var elements = document.getElementsByTagName('input');

        //clear all fields.
        for(var i=0;i<elements.length;i++){
            if(elements[i].type == 'text'){
                elements[i].value = '';            
            }else if(elements[i].type == 'radio'){
                elements[i].checked = false;
            }else if(elements[i].type == 'checkbox' ){
                elements[i].checked = false;
            }
        }

        inputExtra2.value = '';

    }else{
        e.preventDefault();

        alert('Something is wrong with you Data-Format.')
    }

    function saveSubmitInfo2(sFirstName,sLastName,sEmail,sPhoneNumber,sExtra,sReason ){

        let newSubmitContanct = submitInfo2.push();

        var d = new Date();

        newSubmitContanct.set({

            First_Name : sFirstName,
            Last_Name: sLastName,
            Email: sEmail,
            Phone_Numbet: sPhoneNumber,
            Reason: sReason,
            Extra_explanation: sExtra,
            created_on:d.toLocaleString()
        });
    }


    });

    
    



