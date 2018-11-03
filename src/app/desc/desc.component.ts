import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.scss']
})
export class DescComponent implements OnInit {

  desc$: object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPresDesc().subscribe(
      data => this.desc$ = data
    );
  }

}
