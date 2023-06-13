import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  private _value: string = '';

  @Input() set value(val: string) {
    this._value = val;
    this.valueChange.emit(val);
  }
  get value() {
    return this._value;
  }
  @Output() valueChange = new EventEmitter<string>();

  search: string = '';

  ngOnInit(): void {}
}
