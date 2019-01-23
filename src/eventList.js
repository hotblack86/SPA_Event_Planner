class EventList {
  constructor() {
		this.planner = [];
	}

  addEvent(event){
    this.planner.push(event)
  }

  showPlanner() {
    return this.planner;
  }

  elementToDisplay() {       
    let div = document.createElement('div');
    this.planner.forEach((event) => {            
        let eventHtml = event.eventToDisplay();
        div.appendChild(eventHtml);
    })
    return div 
  }
}