const myForm = document.querySelector('form');
let topic = document.getElementById('topic');
let speaker = document.getElementById('speaker');
const time = document.getElementById('time');
let response = document.getElementById('response');
const formButton = document.getElementById('frmButton');
const sep = document.createElement('hr')
const roomDropdown = document.getElementById("room");
const durationDropdown = document.getElementById("duration");
const roomOptions = ["Cedar", "Dogwood", "Hickory", "Oak", "Redbud", "Sycamore", "Walnut"];
const durationOptions= ["0.5", "1.0", "1.5", "2.0", "2.5", "3.0"];

addOptions();//immediate call of this function as it is part of the form
//function using for loops to add options to the dropdown menus for selection 
function addOptions(){
  for (i = 0;i < roomOptions.length; i++){
    const element = document.createElement("option");
    element.text = roomOptions[i];
    roomDropdown.add(element);
  }
  for (i = 0;i < durationOptions.length; i++){
    const element = document.createElement("option");
    element.text = durationOptions[i];
    durationDropdown.add(element);
  }
}

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

//class that takes form values and creates a method to output the values on the screen
class Breakout{
    constructor(topic, speaker, newTime, room, duration){
        this.topic = topic;
        this.speaker = speaker;
        this.time = newTime;
        this.room = room;
        this.duration = duration;
    }
    booking(){
        let bookApt = 
        `<p><strong>${this.topic}</strong></p>
        <p>Speaker: ${this.speaker}</p>
        <p>Meeting Time: ${this.time}</p>
        <p>Room: ${this.room}</p>
        <p>Duration: ${this.duration}</p>`;
        return bookApt
    }
}

//event listener that calls the functions to get the values from the form and create a class
formButton.addEventListener('click', function(e){
    e.preventDefault();
    const aBreakout = new Breakout(
        topic.value,
        speaker.value,
        processTime(time.value),
        roomDropdown.value,
        durationDropdown.value
    );
    //adds the form data to the other side of the screen for preview 
    response.innerHTML += aBreakout.booking();
    response.appendChild(sep);
    resetForm();
})

//erases the form and puts the focus on the first form item topic
function resetForm(){
    myForm.reset();
    topic.focus();
}