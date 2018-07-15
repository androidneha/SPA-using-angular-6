import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-coffee-list',
  template: `
      <div class="container">
          <div class="p-5 m-5 card bg-dark border-dark">
              <h1 class="text-white"><strong>Here is some popular coffee list</strong></h1>
              <ul class="list-unstyled">
                  <li (click)="onSelect(coffe)" class="m-3" *ngFor="let coffe of coffee">
                      <span class="label bg-light text-dark rounded p-2">{{coffe.id}}. {{coffe.name}}</span>
                  </li>
              </ul>
          </div>
      </div>
  `,
  styles: []
})
export class CoffeeListComponent implements OnInit {

  coffee = [
      {'id': 1, 'name': 'Black Coffee'},
      {'id': 2, 'name': 'Cappuccino'},
      {'id': 3, 'name': 'Espresso'},
      {'id': 4, 'name': 'FLat White'},
      {'id': 5, 'name': 'Irish Coffee'},
      {'id': 6, 'name': 'Macchiato'},
      {'id': 7, 'name': ' Piccolo Latte'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(coffee) {
      this.router.navigate(['/coffee', coffee.id]);
  }
}
