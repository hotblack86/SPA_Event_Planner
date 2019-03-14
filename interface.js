var list = document.getElementById("eventlist");
var dateTime = document.querySelector('input[type="datetime-local"]');
var textbox = document.getElementById("textbox");

var button1 = document.getElementById("event-button");
var button4 = document.getElementById("clear-event-button");

var eventList = new EventList();
var events = eventList.elementToDisplay();

function add_event_1_class() {
  let event1 = new Event(textbox.value, dateTime.value);
  let newEvent = document.createElement("div");
  newEvent.innerText = `${event1.text} \n ${event1.time}`;
  list.append(newEvent);
  textbox.value = "";
}

function add_event_2_classes() {
  var event1 = new Event(textbox.value, dateTime.value);
  eventList.addEvent(event1);
  var events = eventList.elementToDisplay();
  list.appendChild(events);
  eventList.storeUpComingEvents();
  eventList.loadUpComingEvents();
  textbox.value = "";
}

function clear_events() {
  eventList.deleteEvents()
  list.remove(events)
}


//Click Button or press enter to submit Event
button1.addEventListener("click", add_event_2_classes);
textbox.addEventListener("keyup", enterPressed);

button4.addEventListener("click", clear_events);

function enterPressed(event) {
  if (event.key === "Enter") {
    add_event_2_classes()
  }
}




