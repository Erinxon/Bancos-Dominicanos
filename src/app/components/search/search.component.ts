import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup<{ searchTerm: FormControl<string>; }> = this.fb.nonNullable.group({
    searchTerm: ['', {
      validators: Validators.required
    }]
  });

  constructor(private fb: FormBuilder, private searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  search() {
    const searchTerm = this.form?.getRawValue()?.searchTerm;
    this.searchService.setsearchTerm(searchTerm?.trim()?.toLocaleLowerCase());
  }

}