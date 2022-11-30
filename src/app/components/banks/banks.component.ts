import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bank, BankStatus } from 'src/app/models/bank.model';
import { BanksService } from 'src/app/services/banks.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit, OnDestroy {
  banksListOriginal: Bank[] = [];
  banks: Bank[] = [];
  bank?: Bank;
  currentPage: number = 1;
  private subscription?: Subscription;

  constructor(private banksService: BanksService, private searchService: SearchService){

  }


  ngOnInit(): void {
    this.getBanks();
    this.getSearchTerm();
  }

  getBanks(){
    this.banksService.getBanks().subscribe({
      next: res => {
        this.banksListOriginal = [...res?.data];
        this.banks = [...res?.data];
      }
    });
  }

  onSeleted(bank?: Bank){
    this.bank = bank;
  }

  getSearchTerm(){
    this.subscription = this.searchService.getSearchTerm.subscribe({
      next: value => {
        if(value.length > 0){
          this.banks = [...this.banksListOriginal.filter(bank => bank?.name?.toLocaleLowerCase()?.indexOf(value) !== -1)];
          return;
        }
        this.banks = [...this.banksListOriginal];
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}