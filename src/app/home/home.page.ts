import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  value ='0';
  readyFornewinput = true;
  oldValue ='0';
  lastOperator ='';
  numberGroups =[
   [7,8,9,'x']
  ,[4,5,6,'-']
  ,[1,2,3,'+']
  ,[0,'c','/','=']];
  OnButtonPress(symbol)

  {
    console.log(symbol);
    if(isNumber(symbol))
    {
      console.log("is a number");
      if(this.readyFornewinput)
      {
        this.value = ''+symbol;
      }else
      {
        this.value += '' + symbol;
      }
      this.readyFornewinput =false;
    }
    else if(symbol === 'c')
    {
      this.value ='0';
      this.readyFornewinput = true;
    }else if(symbol ==='=')
    {
      if(this.lastOperator === 'x')
      this.value ='' +(parseInt(this.oldValue )* parseInt(this.value));
      else if(this.lastOperator === '+')
      this.value = ''+ (parseInt(this.oldValue) +parseInt(this.value));
      else if(this.lastOperator === '/')
      this.value =''+(parseInt(this.oldValue)/parseInt(this.value));
      else if(this.lastOperator === '-') 
      this.value = ''+(parseInt(this.oldValue) - parseInt(this.value));
      this.readyFornewinput = true;


    }
    else{
      this.readyFornewinput = true;
      this.oldValue =this.value;
      this.lastOperator = symbol;
    }
      
    }
}

