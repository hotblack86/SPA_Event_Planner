class Event {
  constructor(text, dateTime) {
    this.text = text;
    this.time = dateTime;
  }

  getDateObject() {
    return Date.parse(this.time)
}

  getEvent() {
    return `${this.text.substring(0,20)} at ${this.time}`
  }


  eventToDisplay() {
    let div = document.createElement('div')
    div.innerText = `${this.text.substring(0,20)} at ${this.time}`
    return div;
}

}