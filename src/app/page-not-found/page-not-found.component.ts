import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="container mt-5">
        <div class="bg-dark text-white p-5">
            <h1>Oops 404 page not found!!</h1>
        </div>
    </div>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
