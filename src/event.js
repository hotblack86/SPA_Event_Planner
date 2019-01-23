class Event {
  constructor(text, dateTime) {
    this.text = text;
    this.time = dateTime;
  }

  getText(){
    return this.text;
  }

  getDateTime(){
    return this.time;
  }

  eventToDisplay() {
    let div = document.createElement('div')
    div.innerText = `${this.text} at ${this.time}`
    return div;
}

}