import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BanksComponent } from './components/banks/banks.component';
import { BankComponent } from './components/bank/bank.component';
import { BankDetailComponent } from './components/bank-detail/bank-detail.component';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    BanksComponent,
    BankDetailComponent,
    SearchComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.rectangleBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffff', 
      secondaryColour: '#ffff', 
      tertiaryColour: '#ffff'
  }),
  FormsModule,
  ReactiveFormsModule,
  NgOptimizedImage,
  NgxPaginationModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
