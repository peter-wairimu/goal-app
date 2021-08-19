import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date() //get current date
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value-todayWithNoTime) // returns value in milliseconds
    const secondsInDay = 86400; // 60 secs * 60 min in an hour * 24 hrs in a day
    var dateDifferenceSeconds = dateDifference*0.001 // converting milliseconds to seconds 
    var DateCounter = dateDifferenceSeconds/secondsInDay;
    if(DateCounter >= 1 && value > todayWithNoTime){
      return DateCounter;
    }else{
      return 0
    }
    
  }

}
