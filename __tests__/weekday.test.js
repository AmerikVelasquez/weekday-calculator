import { weekdayCalculator } from './../src/weekday.js'

describe('weekday', () => {

  test('it should recive a date string and return the day of the week that corresponds',() =>{
     expect( weekdayCalculator("05,22,1997")).toEqual("Thursday"); 
  });
});