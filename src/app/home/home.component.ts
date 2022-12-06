import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productsList: any[] = [
    {
    id: 1,
    name: 'manzana de agua'
  },
  {
    id: 2,
    name: 'durazno rey negro'
  },
  {
    id: 3,
    name: 'fresas'
  },
  {
    id: 4,
    name: 'papa'
  },
  {
    id: 5,
    name: 'lechuga'
  },
  {
    id: 6,
    name: 'papa dulce'
  },
  {
    id: 7,
    name: 'maíz'
  },
  {
    id: 8,
    name: 'alcachofa'
  },
  {
    id: 9,
    name: 'arverja'
  }
  ,
  {
    id: 10,
    name: 'habichuela'
  }


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
