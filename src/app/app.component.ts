import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'simple-pizza-ordering-system';

  smallTomatoes = false;
  mediumTomatoes = false;
  largeTomatoes = false;
  extraLargeTomatoes = false;
  
  smallOnions = false;
  mediumOnions = false;
  largeOnions = false;
  extraLargeOnions = false;

  smallBell = false;
  mediumBell = false;
  largeBell = false;
  extraLargeBell = false;

  smallMushrooms = false;
  mediumMushrooms = false;
  largeMushrooms = false;
  extraLargeMushrooms = false;

  smallPineapple = false;
  mediumPineapple = false;
  largePineapple = false;
  extraLargePineapple = false;

  smallSausage = false;
  mediumSausage = false;
  largeSausage = false;
  extraLargeSausage = false;

  smallPepperoni = false;
  mediumPepperoni = false;
  largePepperoni = false;
  extraLargePepperoni = false;

  smallChicken = false;
  mediumChicken = false;
  largeChicken = false;
  extraLargeChicken = false;

  smallTotal = 0;
  mediumTotal = 0;
  largeTotal = 0;
  extraLargeTotal = 0;

  smallToppingsCount = 0;
  mediumToppingsCount = 0;
  largeToppingsCount = 0;
  extraLargeToppingsCount = 0;

  offer1 = false;
  offer2 = false;
  offer3 = false;

  onClickSmallPizza(event: any, value: boolean){
    if(value && this.smallTotal == 0){
      this.smallTotal = 5;
    }

    if(value){
      this.smallTotal += this.addToppings(event.target.name);
      this.smallToppingsCount++;
    }else{
      this.smallTotal -= this.addToppings(event.target.name);
      this.smallToppingsCount--;
    }

    if(this.smallTotal <= 5){
      this.smallTotal = 0;
    }
  }

  onClickMediumPizza(event: any, value: boolean){
    if(value && this.mediumTotal == 0){
      this.mediumTotal = 7;
    }

    if(value){
      this.mediumTotal += this.addToppings(event.target.name);
      this.mediumToppingsCount++;
    }else{
      this.mediumTotal -= this.addToppings(event.target.name);
      this.mediumToppingsCount--;
    }

    if(this.mediumTotal <= 7){
      this.mediumTotal = 0;
    }

    if(this.mediumToppingsCount == 2){
      this.offer1 = true;
    }else{
      this.offer1 = false;
    }
  }

  onClickLargePizza(event: any, value: boolean){
    if(value && this.largeTotal == 0){
      this.largeTotal = 8;
    }

    if(value){
      this.largeTotal += this.addToppings(event.target.name);
      this.largeToppingsCount++;
      if(event.target.name.toLowerCase().includes('pepperoni') ||
        event.target.name.toLowerCase().includes('chicken')
      ){
        this.largeToppingsCount++;
      }
    }else{
      this.largeTotal -= this.addToppings(event.target.name);
      this.largeToppingsCount--;
      if(event.target.name.toLowerCase().includes('pepperoni') ||
        event.target.name.toLowerCase().includes('chicken')
      ){
        this.largeToppingsCount--;
      }
    }

    if(this.largeTotal <= 8){
      this.largeTotal = 0;
    }

    if(this.largeToppingsCount == 4){
      this.offer3 = true;
    }else{
      this.offer3 = false;
    }
  }

  onClickExtraLargePizza(event: any, value: boolean){
    if(value && this.extraLargeTotal == 0){
      this.extraLargeTotal = 9;
    }

    if(value){
      this.extraLargeTotal += this.addToppings(event.target.name);
      this.extraLargeToppingsCount++;
    }else{
      this.extraLargeTotal -= this.addToppings(event.target.name);
      this.extraLargeToppingsCount--;
    }

    if(this.extraLargeTotal <= 9){
      this.extraLargeTotal = 0;
    }
  }

  addToppings(name: string){
    if(name.toLowerCase().includes('tomatoes')){
      return 1;
    }else if(name.toLowerCase().includes('onions')){
      return 0.5;
    }else if(name.toLowerCase().includes('bell')){
      return 1;
    }else if(name.toLowerCase().includes('mushroom')){
      return 1.2;
    }else if(name.toLowerCase().includes('pineapple')){
      return 0.75;
    }else if(name.toLowerCase().includes('sausage')){
      return 1;
    }else if(name.toLowerCase().includes('pepperoni')){
      return 2;
    }else if(name.toLowerCase().includes('chicken')){
      return 3;
    }else{
      return 0;
    }
  }

}
