describe('Events list', function() {

    it('Adds an event', function() {
        let list = new EventList()
        let event = new Event('Event 1', '07/08/2019, 14:30')
        list.addEvent(event)
        expect(list.planner.length).toEqual(1)
    })
    
    it('Check that event has been added', function() {
        let list = new EventList()
        let event = new Event('Event 1', '07/08/2019, 14:30')
        list.addEvent(event)
        expect(list.planner[0]).toEqual(event)
    })

    it('Only shows upcoming events', function() {
        let list = new EventList()
        let event1 = new Event('Event 1', '07/01/2019, 14:30')//Past Date
        let event2 = new Event('Event 2', '07/08/2019, 14:30')//Future Date
        list.addEvent(event1)
        list.addEvent(event2)
        expect(list.upcomingEvents().length).toEqual(2)
    })

    it('Removes the events from the planner array', function() {
        let list = new EventList()
        let event1 = new Event('Event 1', '07/01/2019, 14:30')
        let event2 = new Event('Event 2', '07/08/2019, 14:30')
        list.addEvent(event1)
        list.addEvent(event2)
        list.deleteEvents()
        expect(list.planner.length).toEqual(0)
    })

})