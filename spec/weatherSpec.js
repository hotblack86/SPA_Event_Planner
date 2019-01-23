describe('Weather Class', function(){


  it('Returns the Location input', function(){
    var weather = new Weather('London')
    expect(weather.city).toEqual('London')
  })


})