const registerForm = document.getElementById('frmRegister');
const btnSubmit = document.getElementById('btnSubmit');
let businessName = document.getElementById('businessName');
let contactName = document.getElementById('contactName');
let contactPhone = document.getElementById('contactPhone');
let street = document.getElementById('street');
let city = document.getElementById('city');
let state = document.getElementById('state');
let zip = document.getElementById('zip');
let other = document.getElementById('other');
let otherIndustry = document.getElementById('otherIndustry');
let result = "";
let checked = "";
let dataDisplay = document.getElementById('dataDisplay');
let regText = document.getElementById('reg')
const editBtn = document.getElementById('edit');
const final = document.getElementById('final');
const home = document.getElementById('homePg');
let myModal = document.getElementById('myModal');
let span = document.getElementsByClassName('close')[0];
let aRegistration = [];
let bookApt = ``

function showBox(){
    otherIndustry.classList.remove('hide');
    if(otherIndustry.value != ""){
      result += " " + otherIndustry.value;
    }
  }
  
  //The next 4 functions show and hide the modal and data review section
  function openModal() {
    myModal.style.display = "block";
  }
  function closeModal(){
    myModal.style.display = "none"
  }
  function getDataDisplay(){
    dataDisplay.classList.remove('hide');
  }
  function hideDisplayData(){
    dataDisplay.classList.add('hide');
  }
  
  //loops through radio buttons to determine value and then adds it to the registration data
  function getNumber() {
    let radio = document.getElementsByName('numEmp');
    checked = "";
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            checked += radio[i].value;
        }
    }
  }
  
  //looks at the check boxes and determines which ones are check -1 because we dont want other to display
  function getValue() {
    let checkboxes = document.getElementsByName('industry');
    for (var i = 0; i < checkboxes.length - 1; i++) {
        if (checkboxes[i].checked) {
          result += checkboxes[i].value;
        }
    }
  }
  
  
  //class for data and method for adding data to dataDisplay
  class Registration{
    constructor(businessName, contactName, contactPhone, street, city){
        this.businessName = businessName;
        this.contactName = contactName;
        this.contactPhone = contactPhone;
        this.street = street;
        this.city = city;
        this.state = state.value;
        this.zip = zip.value;
        this.radio = checked;
        this.checkboxes = result;    
    }
    booking(){
      bookApt = 
      `<p>Business Name: ${this.businessName}</p>
      <p>Contact Name: ${this.contactName}</p>
      <p>Contact Phone: ${this.contactPhone}</p>
      <p>Street: ${this.street}</p>
      <p>Zip: ${this.zip}</p>
      <p>Number of Employees: ${this.radio}</p>
      <p>Industry Afilliations: ${this.checkboxes}</p>`;
      return bookApt
      }
  }
  
  // creates the finalize data button and adds event listener to it
  function createButton(){
    const final = document.createElement('BUTTON');
    let btntext = document.createTextNode('Finalize Data');
    final.appendChild(btntext);
    final.classList.add('formBtn')
    dataDisplay.appendChild(final);
  
    final.addEventListener('click', function(e){
      openModal();
    })
  }
  
  //calling finalize data button I had to put it outside the event listener to keep it from making multiple buttons
  createButton();
  
  // submit the form data to a class
  btnSubmit.addEventListener('click', function(e){
    aRegistration = new Registration(
        businessName.value,
        contactName.value,
        contactPhone.value,
        street.value,
        city.value,
        state.value,
        zip.value,
        getNumber(),
        getValue(),
        showBox(),
    );
    //transitions to data review page and hides the form
    getDataDisplay();
    regText.innerHTML = aRegistration.booking();
    document.getElementById('frmBox').classList.add('hide');
  })
  
  // allows to transition back to original page and edit inputs
  editBtn.addEventListener('click', function(e){
    result = "";
    document.getElementById('frmBox').classList.remove('hide');
    document.getElementById('frmBox').classList.add('show');
    hideDisplayData();
  })
  
  //navigate to home page from modal
  home.addEventListener('click', function(e){
    location.href = 'home.html';
  })
  
  //close the modal upon hitting X
  span.addEventListener('click', function(e){   
    closeModal();
  })