import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Bank, BankDetail } from 'src/app/models/bank.model';
import { BanksService } from 'src/app/services/banks.service';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.css']
})
export class BankDetailComponent implements OnChanges {
  @Input() bank?: Bank;
  bankDetail?: BankDetail;
  constructor(private readonly banksService: BanksService){

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.bank = changes?.['bank']?.['currentValue'];
    this.bankDetail = undefined;
    if(this.bank){
      this.getDetailt();
    }
  }

  private getDetailt(){
    this.banksService.getBankDetail(this.bank?.linkDetail || '').subscribe({
      next: res => {
        this.bankDetail = {
          ...res?.data,
          webPage: res?.data.webPage.replace('https://sb.gob.do', '')
        }
      }
    })
  }

}