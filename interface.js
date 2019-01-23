var list = document.getElementById("eventlist");
var dateTime = document.querySelector('input[type="datetime-local"]');
var textbox = document.getElementById("textbox");
//var eventTime = document.getElementById("event-time");
var button = document.getElementById("button");

//var newDate = new Date();

function add_event_1_class() {
  let event1 = new Event(textbox.value, dateTime.value);
  let newEvent = document.createElement("ul");
  newEvent.innerText = `${event1.text} \n ${event1.time}`;
  list.append(newEvent);
  textbox.value = "";
}

function add_event_2_classes() {
  let event1 = new Event(textbox.value, dateTime.value);
  let eventList = new EventList();
  eventList.addEvent(event1);
  events = eventList.elementToDisplay();
  //list.innerHTML = "";
  list.append(events);
  textbox.value = "";
}



button.addEventListener("click", add_event_2_classes);