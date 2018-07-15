import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coffee-detail',
  template: `
    <div class="container mt-5">
        <div class="bg-dark text-white p-5">
            <h3>You selected coffee with id {{coffeeId}}</h3>
        </div>
    </div>
  `,
  styles: []
})
export class CoffeeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public coffeeId;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.coffeeId = id;
  }

}
