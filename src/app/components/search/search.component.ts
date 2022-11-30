import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form?: FormGroup;

  constructor(private fb: FormBuilder, private searchService: SearchService){
    this.builkForm();
  }

  private builkForm(){
    this.form = this.fb.group({
      searchTerm: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  search(){
    const searchTerm = this.form?.value?.searchTerm as string; 
    this.searchService.setsearchTerm(searchTerm?.trim()?.toLocaleLowerCase());
  }

}