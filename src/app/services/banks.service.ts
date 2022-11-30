import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { Bank, BankDetail } from '../models/bank.model';

@Injectable({
  providedIn: 'root'
})
export class BanksService {
  private readonly APIURL: string = 'https://banks.fly.dev/api';

  constructor(private readonly http: HttpClient) { }

  getBanks(): Observable<ApiResponse<Bank[]>> {
    return this.http.get<ApiResponse<Bank[]>>(`${this.APIURL}/Banks`);
  }

  getBankDetail(url: string): Observable<ApiResponse<BankDetail>> {
    return this.http.get<ApiResponse<BankDetail>>(`${this.APIURL}/Banks/Detail?URL=${url}`);
  }
  
}