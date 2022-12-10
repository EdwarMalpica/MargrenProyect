import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

   personList: any;

  constructor() {
    this.personList = [ {
      path: "assets/imgNatalia.png",
      name: "Natalia Africano",
      rol: "Frontend"
    }, {
      path: "assets/imgViviana.png",
      name: "Viviana Casteblanco",
      rol: "Frontend"
    }, {
      path: "assets/imgAlexandra.png",
      name: "Alexandra Infante",
      rol: "Frontend"
    }]
  }

  ngOnInit(): void {
  }

}
