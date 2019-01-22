class Event {
  constructor(title, text, dateTime) {
    this.title = title;
    this.text = text;
    this.dateTime = dateTime;
  }
  getTitle(){
    return this.title;
  }

  getText(){
    return this.text;
  }

  getDateTime(){
    return this.dateTime;
  }

}