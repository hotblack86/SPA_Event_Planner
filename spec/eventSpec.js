describe('Event Class', function(){


  it('Returns the text of the Event', function(){
    var event1 = new Event('Event 1', '07/08/2019, 14:30')
    expect(event1.text).toEqual('Event 1')
  })

  it('Returns the datetime of the Event', function(){
    var event1 = new Event('Event 1', '07/08/2019, 14:30')
    expect(event1.time).toEqual('07/08/2019, 14:30')
  })

  it('Returns the first 20 characters of the Event text', function(){
    var event1 = new Event('1234567890123456789012345', '07/08/2019, 14:30')
    expect(event1.getEvent()).toEqual('12345678901234567890 at 07/08/2019, 14:30')
  })

})