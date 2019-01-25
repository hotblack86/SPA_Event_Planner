var list = document.getElementById("eventlist");
var dateTime = document.querySelector('input[type="datetime-local"]');
var textbox = document.getElementById("textbox");

var button1 = document.getElementById("event-button");
var button4 = document.getElementById("clear-event-button");


//Storage
// let eventsArray = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
// localStorage.setItem('events', JSON.stringify(eventsArray));
// const data = JSON.parse(localStorage.getItem('events'));


function add_event_1_class() {
  let event1 = new Event(textbox.value, dateTime.value);
  let newEvent = document.createElement("div");
  newEvent.innerText = `${event1.text} \n ${event1.time}`;
  list.append(newEvent);
  textbox.value = "";
}

function add_event_2_classes() {
  let event1 = new Event(textbox.value, dateTime.value);
  let eventList = new EventList();
  eventList.addEvent(event1);
  events = eventList.elementToDisplay();
  list.appendChild(events);
  textbox.value = "";
}

// function store_events() {
//   eventsArray.push(events);
//   localStorage.setItem('events', JSON.stringify(eventsArray));
 
// }


// function clear_events() {
//   localStorage.clear();
//   while (div.firstChild) {
//     div.removeChild(div.firstChild);
//   }
// }


//Click Button or press enter to submit Event
button1.addEventListener("click", add_event_2_classes);
textbox.addEventListener("keyup", enterPressed);

// //button4.addEventListener("click", clear_events);

function enterPressed(event) {
  if (event.key === "Enter") {
    add_event_2_classes()
  }
}




