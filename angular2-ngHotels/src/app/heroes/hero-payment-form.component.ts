import {Component, OnInit} from '@angular/core'


@Component({
 selector: "payment-summary-form",
  templateUrl: "./hero-payment-form.component.html",
  styles: [`
    .summary-full-width {
      width: 100%;
    }
    select{
        background-color: transparent;
        border: 1px solid #aaa;;
        color: #ff6a3a;
        font-weight: 600;
    }
  `],
})
export class HeroPaymentFormComponent{
selectedValue: string;

  cards = [
    {value: 'Visa', viewValue: 'Visa'},
    {value: 'Mastercard', viewValue: 'Mastercard'},
    {value: 'American Express', viewValue: 'American Express'},
    {value: 'Diners Club', viewValue: 'Diners Club'}
  ];
 
}