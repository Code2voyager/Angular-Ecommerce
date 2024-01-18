import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
// import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit() {
  }

}
