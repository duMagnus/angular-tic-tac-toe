import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value" [disabled]="winner">{{ value }}</button>
    <button *ngIf="value === 'X'" class="x">{{ value }}</button>
    <button *ngIf="value === 'O'" class="o">{{ value }}</button>
  `,
  styleUrls: ['./square.component.css']

})
export class SquareComponent {
  
  @Input() value: 'X' | 'O';

  @Input() winner: string;

}
