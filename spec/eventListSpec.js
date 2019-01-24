describe('Events list', function() {
    it('starts with an empty list', function(){
        let list = new EventList()
        expect(list.planner.length).toEqual(0)
    })


    it('can add event', function() {
        let list = new EventList()
        let event = new Event('Event 1', '07/08/2019, 14:30')
        list.addEvent(event)
        expect(list.planner.length).toEqual(1)

    })
    
    it('can check added event', function() {
        let list = new EventList()
        let event = new Event('Event 1', '07/08/2019, 14:30')
        list.addEvent(event)
        expect(list.planner[0]).toEqual(event)

    })

    it('only shows upcoming events', function() {
        let list = new EventList()
        //let event1 = {text: 'Event 1', getDateObject:() => {}}
        let event1 = new Event('Event 1', '07/01/2019, 14:30')//Past Date
        let event2 = new Event('Event 2', '07/08/2019, 14:30')//Future Date
        list.addEvent(event1)
        list.addEvent(event2)
        expect(list.upcomingEvents().length).toEqual(1)

    })

})