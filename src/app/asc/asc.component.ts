import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-asc',
  templateUrl: './asc.component.html',
  styleUrls: ['./asc.component.scss']
})
export class AscComponent implements OnInit {

  asc$: object;
  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getPresAsc().subscribe(
      data => this.asc$ = data
    );
  }

}
