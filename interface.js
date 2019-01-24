var list = document.getElementById("eventlist");
var dateTime = document.querySelector('input[type="datetime-local"]');
var textbox = document.getElementById("textbox");
//var eventTime = document.getElementById("event-time");
var button1 = document.getElementById("event-button");

var button2 = document.getElementById("store-event-button");
var button3 = document.getElementById("load-event-button");
var button4 = document.getElementById("clear-event-button");

// Sets event time default to today (Attempted, not working)
  //document.getElementById('event-time').value = new Date().toISOString().substring(0, 10);
//


// let eventsArray = [];
// localStorage.setItem('events', JSON.stringify(eventsArray));
// const data = JSON.parse(localStorage.getItem('events'));


// function add_event_1_class() {
//   let event1 = new Event(textbox.value, dateTime.value);
//   let newEvent = document.createElement("ul");
//   newEvent.innerText = `${event1.text} \n ${event1.time}`;
//   list.append(newEvent);
//   textbox.value = "";
// }

function add_event_2_classes() {
  let event1 = new Event(textbox.value, dateTime.value);
  let eventList = new EventList();
  eventList.addEvent(event1);
  events = eventList.elementToDisplay();
  list.append(events);
  textbox.value = "";
}

function store_events() {
  localStorage.setItem();
}

function load_events() {
  localStorage.getItem();
}

function clear_events() {
  localStorage.clear();
}


//Click Button or press enter to submit Event
button1.addEventListener("click", add_event_2_classes);
textbox.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    add_event_2_classes()
  }
}
//Click Buttons 2,3,4 to Store,Load,Clear events respectively
// button2.addEventListener("click", store_events);
// button3.addEventListener("click", load_events);
// button4.addEventListener("click", clear_events);


