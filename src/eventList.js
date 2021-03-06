class EventList {
  constructor() {
    this.planner = [];
    this.now = new Date();
	}

  addEvent(event){
    this.planner.push(event)
  }

  upcomingEvents() {
    let upcoming = [];
    this.planner.forEach((event) => {
        let now = this.now;
        let eventDate = event.getDateObject();
        if (eventDate > now) {
            upcoming.push(event);
        }
    })
    return upcoming;
}

  sortedUpcomingEvents() {
  // return all future events, sorted by dates
    let result = this.upcomingEvents();
    result.sort((e1, e2) => {
        let date1 = e1.getDateObject()
        let date2 = e2.getDateObject()

        if (date1 < date2) {
          return -1;
        }
        if (date2 < date1) {
          return 1;
        }
        return 0;
    });
    return result;
  }

  storeUpComingEvents() {
    let eventsArray = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
    localStorage.setItem('events', JSON.stringify(eventsArray));
    
    eventsArray.push(this.sortedUpcomingEvents());
    localStorage.setItem('events', JSON.stringify(eventsArray));
  }

  loadUpComingEvents() {
    var retrievedData = JSON.parse(localStorage.getItem('events'));
    let div = document.createElement('div');
    retrievedData.forEach((item) => {            
        div.appendChild(item);
    })
    return div 
  }


  elementToDisplay() {  
    let div = document.createElement('div');
    this.sortedUpcomingEvents().forEach((event) => {            
      let eventHtml = event.eventToDisplay();
      div.appendChild(eventHtml);
    })
    return div 
  }

  deleteEvents() {
    let events = this.elementToDisplay()
    events.innerHTML = (" ");
    this.planner.length = 0;
  }

}