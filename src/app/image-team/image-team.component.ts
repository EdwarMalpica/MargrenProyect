import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-team',
  templateUrl: './image-team.component.html',
  styleUrls: ['./image-team.component.css']
})
export class ImageTeamComponent implements OnInit {

  @Input() name:String = '';

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
