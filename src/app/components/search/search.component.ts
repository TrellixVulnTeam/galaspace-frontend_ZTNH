import { FormBuilder } from '@angular/forms';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, DoCheck {

  searchForm = this.fb.group(
    {
      searchPerson: [''],
    }
  );

  showResults = false;

  showDeleteButton = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngDoCheck(){
    if(this.searchForm.get('searchPerson')!.value.length > 0){
      this.showResults = true;
      this.showDeleteButton = true;
    }
    if(this.searchForm.get('searchPerson')!.value.length == 0){
      this.showResults = false;
      this.showDeleteButton = false;
    }
  }

  deleteSearchContent(): void {
    this.searchForm.patchValue(
      {
        searchPerson: '',
      }
    );
  }

}
