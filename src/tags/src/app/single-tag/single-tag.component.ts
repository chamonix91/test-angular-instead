import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-tag',
  templateUrl: './single-tag.component.html',
  styleUrls: ['./single-tag.component.scss']
})
export class SingleTagComponent implements OnInit {

  @Input()
  text!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
