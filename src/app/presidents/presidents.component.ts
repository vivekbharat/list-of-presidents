import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-presidents',
  templateUrl: './presidents.component.html',
  styleUrls: ['./presidents.component.scss']
})
export class PresidentsComponent implements OnInit {

  pres$: object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPres().subscribe(
        data => this.pres$ = data
    );
  }

}
