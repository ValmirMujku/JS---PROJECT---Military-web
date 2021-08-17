
//Database
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
var submitInfo = firebase.database().ref('submitForm_INFO');


//get element by id
const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const birthday = document.getElementById('birthday');
const idCard = document.getElementById('idCard');
const phoneNumber = document.getElementById('phoneNumber');
const radios = document.getElementsByName('gender');
const ssNumber = document.getElementById('ssecurity');
const radioDieseases = document.getElementById('NO');
const subjectArea = document.getElementById('YES');
const state = document.getElementById('state');
const email = document.getElementById('email');

//terms and conditions
const terms = document.getElementById('terms');
const terms2 = document.getElementById('terms2');
//forma
const forma = document.getElementById('forma');

//erros
const firstNameError = document.getElementById('fNameError');
const lastNameError = document.getElementById('lNameError');
const birthdayError = document.getElementById('birthdayerror');
const idCardError = document.getElementById('idCardError');
const phoneNumberError = document.getElementById('phnError');
const genderError = document.getElementById('genderError');
const ssError = document.getElementById('ssError');
const diseaseError = document.getElementById('diseasError');
const termsError = document.getElementById('termsError');
const termsError2 = document.getElementById('terms2Error');
const emailError = document.getElementById('emailError');

//if NO is checked, block textArea
 radioDieseases.onclick = function(){
     subjectArea.placeholder = '';
    subjectArea.classList.add('stopTextArea');

 }


forma.addEventListener('submit', function (e) {
    var messageErrors = [];
    var messageErrors2 = [];
    var messageErrors3 = [];
    var messageErrors4 = [];
    var messageErrors5 = [];
    var messageErrors6 = [];
    var messageErrors7 = [];
    var messageErrors8 = [];
    var messageErrors9 = [];
    var messageErrors10 = [];
    var messageErrors11 = [];
    // firstName Validate
    if (firstName.value.length == 1) {
        messageErrors.push(`\"First Name should be longer than one letter.\"`);
    } else if (firstName.value.length > 50) {
        messageErrors.push(`\"First Name is longer than 50 letters.\"`);
    } else if ((/^[a-zA-Z]+$/.test(firstName.value)) === false) {
        messageErrors.push('\"First Name should contains only letters.\"')
    }

    //lastNaem Validate
    if (lastName.value.length == 1) {
        messageErrors2.push(`\"Last Name should be longer than one letter.\"`);
    } else if (lastName.value.length > 50) {
        messageErrors2.push(`\"Last Name is longer than 50 letters.\"`);
    } else if ((/^[a-zA-Z]+$/.test(lastName.value)) === false) {
        messageErrors2.push(`\"Last Name should contains only letters.\"`);
    }

    //Birthday Validate
    if (!birthday) {
        messageErrors3.push(`\"Birthday is not filled.\"`);
    }

    //idCard Validate
    if (!(idCard.value.length == 11) || ((/^\d+$/.test(idCard.value)) === false))  {
        messageErrors4.push(`\"ID Card Number should be exactly with 11 numbers.\"`);
    }



    //check phone Validation
    if (!(phoneNumber.value.length == 12)  ) {
        messageErrors5.push('\"Phone Number should contain 12 characters and start with prefix +1.\".');

    } else if (!(phoneNumber.value.startsWith('+1'))) {
        messageErrors5.push(`\"Phone Number should start with \"+1\" \".`);
    } else if ((/[a-zA-Z]/g.test(phoneNumber.value)) === true) {
        messageErrors5.push(`\"Phone Number should contain only number.\"`);

    }

    //funksioni per email
    function validateEmail(g) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(g).toLowerCase());
    }


    //check email
    var emailvalidate = validateEmail(email.value);

    if(emailvalidate === false){
        messageErrors11.push(`\"This email address is not correct.\"`);
    }



    function genderValidation() {
        var count = 0;
        var select;
        for (var i = 0; i < radios.length; i++) {
            if ((radios[i].checked) === false) {
                count++;
            }else{
                return select = radios[i].value;
            }
        }
        if (count === 3) {
            return false;

        }
        return true;
    }
    var x = genderValidation();

    //testo gender

    if (x == false) {
        messageErrors6.push(`\"Please select Gender\"`);

    }

    //check SSNumber
    if (!(ssNumber.value.length == 10) ) {
        messageErrors7.push(`\"SS Card Number should be exactly with 10 numbers.\"`);
    } else if ((/[a-zA-Z]/g.test(ssNumber.value)) === true) {

        messageErrors7.push(`\"SS Number should contains only NUMBERS.\"`);
    }


    //check for diseases.
    if ((radioDieseases.checked === false) && (subjectArea.value.length === 0)) {
        messageErrors8.push(`\"If answer is NO, Please fill the details\".`);
    } else if ((radioDieseases.checked === false) && (subjectArea.value.length < 20)) {
        messageErrors8.push(`\"Not Enough Information.".`);
    }

    function checkDiseases(){
        var x;
        if(radioDieseases.checked === true){
            return x = radioDieseases.value;
        }else{
            return x =subjectArea.value;
        }
    }

    // give me back the result
    var diseasesresult = checkDiseases();

    //tersm and conditions
    if (terms.checked === false) {
        messageErrors9.push('\"Check the box, if you accept Military terms and conditions.\"');
    }

    if (terms2.checked === false) {
        messageErrors10.push('\"Check the box, if you accept Data Protection terms and conditions.\"');
    }
    if (messageErrors.length > 0 || messageErrors2.length > 0 || messageErrors3.length > 0 || messageErrors4.length > 0 || messageErrors5.length > 0 || messageErrors6.length > 0 || messageErrors7.length > 0 || messageErrors8.length > 0 || messageErrors9.length > 0 || messageErrors10.length > 0 || messageErrors11.length >0) {
        e.preventDefault();
        firstNameError.innerText = messageErrors.join();
        lastNameError.innerText = messageErrors2.join();
        birthdayError.innerText = messageErrors3.join();
        idCardError.innerText = messageErrors4.join();
        phoneNumberError.innerText = messageErrors5.join();
        emailError.innerText = messageErrors11.join();
        genderError.innerText = messageErrors6.join();
        ssError.innerText = messageErrors7.join();
        diseaseError.innerText = messageErrors8.join();
        termsError.innerText = messageErrors9.join();
        termsError2.innerText = messageErrors10.join();
        
    }else{


        e.preventDefault();
        

        window.location.href = "FormSubmitted.html";
        
        let sFirstName = firstName.value;
        let sLastName = lastName.value;
        let sBirthday = birthday.value;
        let sIdCard = idCard.value;

        var g = document.getElementsByTagName('option');
        for(var i=0;i<g.length;i++){
            if(g[i].selected === true){
                 var sState = g[i].value;
            }
        }

        let sPhoneNumber = phoneNumber.value;
        let sEmail = email.value;
        let sSsNumber = ssNumber.value;


        saveSubmitInfo(sFirstName, sLastName, sBirthday, sIdCard, sState, sPhoneNumber, sEmail, x, sSsNumber, diseasesresult) ;

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
         
        

    }

    function saveSubmitInfo(sFirstName, sLastName, sBirthday, sIdCard, sState, sPhoneNumber, sEmail, x, sSsNumber, diseasesresult){

        let newSubmitContanct = submitInfo.push();

        var d = new Date();
        newSubmitContanct.set({

            First_Name : sFirstName,
            Last_Name: sLastName,
            Date_of_Birthday: sBirthday,
            ID_Card: sIdCard,
            State: sState,
            Phone_Number: sPhoneNumber,
            e_mail: sEmail,
            Gender: x,
            Social_Security_Number: sSsNumber,
            Diseases: diseasesresult,
            created_on:d.toLocaleString()
        });
    }

});

 













