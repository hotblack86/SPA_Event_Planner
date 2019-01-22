class Event {
  constructor(text, dateTime) {
    this.text = text;
    this.dateTime = dateTime;
  }

  getText(){
    return this.text;
  }

  getDateTime(){
    return this.dateTime;
  }

}