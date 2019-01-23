describe('Event Class', function(){


  it('Returns the description of the Event', function(){
    var event1 = new Event('Event 1', '07/08/2019, 14:30')
    expect(event1.text).toEqual('Event 1')
  })

  it('Returns the datetime of the Event', function(){
    var event1 = new Event('Event 1', '07/08/2019, 14:30')
    expect(event1.time).toEqual('07/08/2019, 14:30')
  })

})