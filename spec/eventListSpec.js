describe('Events list', function() {
    it('starts with an empty list', function(){
        var list = new EventList()
        expect(list.planner.length).toEqual(0)
    })


    it('can add event', function() {
        var list = new EventList()
        list.addEvent('jasminesbday')
        expect(list.planner.length).toEqual(1)

    }) 

})