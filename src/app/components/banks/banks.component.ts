import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bank, BankStatus } from 'src/app/models/bank.model';
import { Pagination } from 'src/app/models/pagination.model';
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
  pagination: Pagination = {
    currentPage: 1,
    pageSize: 6,
    totalPages: 0
  };
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
        this.pagination.totalPages = Math.ceil(res?.data?.length / this.pagination.pageSize);
        this.banks = [...res?.data?.slice(0, this.pagination.pageSize)];
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

  previous(){
    this.pagination.currentPage -= 1;
    this.setPagination();
  }

  next(){
    this.pagination.currentPage += 1;
    this.setPagination();
  }

  private setPagination(){
    const end = this.pagination.pageSize * this.pagination.currentPage;
    const start = end - this.pagination.pageSize;
    this.banks = [...this.banksListOriginal?.slice(start, end)];
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}