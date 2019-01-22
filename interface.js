//var messages = document.getElementById("messages");

var textbox = document.getElementById("textbox");
var eventTime = document.getElementById("event-time");
var button = document.getElementById("button");

function add_event() {
  let event = new Event(textbox.value, eventTime.value);
  let eventList = new EventList();
  let newEvent = document.createElement("ul");
  newEvent.innerText = `${event.text} \n ${event.time}`;
  //eventList.addEvent(event);

  textbox.value = "";
}