import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  categories = ['Creative', 'Education', 'Health', 'Lifestyle', 'Extra', 'Extra', 'Extra', 'Extra', 'Extra', 'Extra', 'Extra'];

  constructor() { }

  ngOnInit() {
  }

}
