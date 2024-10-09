const myForm = document.getElementById('invitation');
let meetingTitle = document.getElementById('title');
let month = document.getElementById('month');
let day = document.getElementById('day');
let year = document.getElementById('year');
const time = document.getElementById('time');
let room = document.getElementById('room');
let message = document.getElementById('message');
const addText = document.getElementById('addText');
const fontSelect = document.getElementById('fontSelect')
let invTitle = document.getElementById('invTitle');
let dateTime = document.getElementById('dateTime');
let roomName = document.getElementById('roomName');
let invMsg = document.getElementById('invMsg');
const firstDisplay = document.getElementById('invText');
const fontDisplay = document.getElementById('pickFont');
const nextToBg = document.getElementById('nextToBg');
const backgroundDisplay = document.getElementById('pickBg');
let cover = document.getElementById('cover');
let font = document.getElementsByClassName('font');
let backGround = document.getElementsByName('background');
const beginning = document.getElementById('return');
const previewBg = document.getElementById('preSelect');
const submit = document.getElementById('submit');
const home = document.getElementById('homePg');
let span = document.getElementsByClassName('close')[0];
let card = document.getElementById('card');
let checked = "";

//Corrects the value of the year on the page to the correct year.
window.addEventListener('DOMContentLoaded', event => {
    year.value = date.getFullYear();
});

//function to get the time to allow you to select the time that you would like
function processTime(timeValue) {
    var hours = timeValue.split(':');
    var hour;
    if (hours[0] > 12) {
      hour = hours[0] - 12;
      newTime = hour + ':' + hours[1] + ' PM';
    } else if (hours[0] < 12) {
      newTime = hours[0] + ':' + hours[1] + ' AM';
    } else {
      newTime = hours[0] + ':' + hours[1] + ' PM';
    }
    return newTime;
}

//function gets the checked radio button
function getNumber() {
    checked = "";
    for (let i = 0; i < backGround.length; i++) {
        if (backGround[i].checked) {
            checked += backGround[i].value;
        }
    }
}

//sets the font on the font page
function setFont(font){
    cover.style.fontFamily = font.replace(/\s+/g, '_');
}

//Sets the background chosen
function setBackground(checked){
    card.classList.remove('dkRedLin');
    card.classList.add(checked);
}

//functions to open and close the modal upon submission
function openModal() {
    myModal.style.display = "block";
}
function closeModal(){
    myModal.style.display = "none";
}

//class of form data, method to present the form data
class Announcement{
    constructor(meetingTitle, month, day, year, time, room, message){
        this.meetingTitle = meetingTitle
        this.month = month
        this. day = day
        this.year = year
        this.time = newTime;
        this.room = room
        this.message = message
    }
    presentation(){
        invTitle.innerHTML = this.meetingTitle;
        dateTime.innerHTML = `${this.month} ${this.day}, ${this.year} at ${this.time}.`; 
        roomName.innerHTML = this.room;
        invMsg.innerHTML = this.message;
    }
}

//Event listener to preview the selected form input
addText.addEventListener('click', function(e){
    e.preventDefault();
    aAnnouncement = new Announcement(
        meetingTitle.value,       
        month.value,
        day.value,
        year.value,
        processTime(time.value),
        room.value,
        message.value
    );
    aAnnouncement.presentation();
})

//Event listener to transition to the fonts page
fontSelect.addEventListener('click', function(e){
    e.preventDefault()
    firstDisplay.classList.add('hide');
    fontDisplay.classList.remove('hide');
    fontDisplay.classList.add('show');
})

//Event listener to transition to background page
nextToBg.addEventListener('click', function(e){
    e.preventDefault();
    fontDisplay.classList.remove('show');
    fontDisplay.classList.add('hide');
    backgroundDisplay.classList.remove('hide');
    backgroundDisplay.classList.add('show');
})

//event listener to return to the beginning page without resetting form data
beginning.addEventListener('click', function(e){
    e.preventDefault();
    backgroundDisplay.classList.add('hide');
    firstDisplay.classList.remove('hide');
})

//button to apply the background
previewBg.addEventListener('click', function(e){
    e.preventDefault();
    if (checked != ""){
        card.classList.remove(checked);
    }
    getNumber();
    setBackground(checked);
})

//submit data and open confirmation modal
submit.addEventListener('click', function(e){
    e.preventDefault();
    openModal();
})

//navigate to home page from modal
home.addEventListener('click', function(e){
    location.href = 'home.html';
})

//close the modal upon hitting X
span.addEventListener('click', function(e){   
    closeModal();
  })