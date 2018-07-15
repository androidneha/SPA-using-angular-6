import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe-list',
  template: `
    <div class="container">
        <div class="p-5 m-5 card bg-dark">
            <h1 class="text-center text-white"><strong>Welcome to CAFE 24*7</strong></h1>
        </div>
    </div>
  `,
  styles: []
})
export class CafeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
