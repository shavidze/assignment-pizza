import { Component, Input } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-pizza-viewer',
  styleUrls: ['pizza-viewer.component.scss'],
  templateUrl: './pizza-viewer.component.html'
})
export class PizzaViewerComponent {
  @Input()
  pizzas: FormArray;

  @Input()
  activePizza: number;
}
