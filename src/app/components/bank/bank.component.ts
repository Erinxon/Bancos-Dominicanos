import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bank } from 'src/app/models/bank.model';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  @Input() bank?: Bank;
  @Output() selectbank: EventEmitter<Bank> = new EventEmitter();

  onSeleted(){
    this.selectbank.emit(this.bank);
  }

}