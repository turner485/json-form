 async function getData() {
     const response = await fetch('./data.json');
     return response.json();
 }
 async function init() {
     const data = await getData();
     const titleHT = document.querySelectorAll(".title");
     for (t = 0; t < titleHT.length; t++) {
         // populating the titles
         titleHT[t].innerHTML = data.forms[t].name;
         // populating the title text to the form action att
         document.getElementsByTagName('form')[t].action = data.forms[t].name
     }
     const optionsTextF1 = document.querySelectorAll("#form-1 option")
     // populating the options to form one
     for (ot1 = 0; ot1 < data.forms[0].options.length; ot1++) {
         optionsTextF1[ot1 + 1].innerHTML = data.forms[0].options[ot1];
     }
     const optionsTextF2 = document.querySelectorAll("#form-2 option")
     // populating the options to form two
     for (ot2 = 0; ot2 < data.forms[1].options.length; ot2++) {
         optionsTextF2[ot2 + 1].innerHTML = data.forms[1].options[ot2];
     }
     const optionsTextF3 = document.querySelectorAll("#form-3 option")
     // populating the options to form three
     for (ot3 = 0; ot3 < data.forms[2].options.length; ot3++) {
         optionsTextF3[ot3 + 1].innerHTML = data.forms[2].options[ot3];
     }
     const radio1 = document.querySelectorAll(".rad1");
     const radio2 = document.querySelectorAll(".rad2");
     const radio3 = document.querySelectorAll(".rad3");
     let contact = data.forms[0].contact
     for (r1 = 0; r1 < contact.length; r1++) {
         //populating all the radio buttons with content text
         radio1[r1].innerHTML = contact[r1];
         radio2[r1].innerHTML = contact[r1];
         radio3[r1].innerHTML = contact[r1];
         document.getElementsByName("radioBtn")[r1].value = contact[r1];
         document.getElementsByName("radioBtn2")[r1].value = contact[r1];
         document.getElementsByName("radioBtn3")[r1].value = contact[r1];
     }
 }
 // selection of both dropdown and radio shows form
 let selectChange = false;
 let inputChange = false;
 var showButton = function() {
     if (selectChange && inputChange) {
         let button = document.getElementById('form-wrapper');
         button.classList.remove('d-none')
     }
 }
 document.querySelectorAll(".form-select").forEach(item => {
     item.addEventListener('change', function handleChange(event) {
         selectChange = true;
         showButton();
     })
 });
 document.querySelectorAll("input").forEach(item => {
     item.addEventListener('change', function handleChange(event) {
         inputChange = true;
         showButton();
     })
 });
 init()