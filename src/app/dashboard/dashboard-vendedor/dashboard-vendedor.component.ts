import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../../models/entities/user.interface";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-dashboard-vendedor',
  templateUrl: './dashboard-vendedor.component.html',
  styleUrls: ['./dashboard-vendedor.component.css']
})
export class DashboardVendedorComponent implements OnInit {

  public searchText: string = "";
  public filteredUser: User[] = [];
  public user: User[] = [];

  constructor(private modalService: NgbModal,
              private userService: UserService) { }

  public filterRecipe(): void {
    const text: string = this.searchText.toLocaleLowerCase();
    this.filteredUser = this.user.filter(user => user.name.toLowerCase().includes(text));
  }

  public removeUser(user: User, modal: any): void {
    const modalRef = this.modalService.open(modal, { centered: true, scrollable: true })
    modalRef.result.then((result: boolean) => {
      if (result) {
        for (let i = 0; i < this.user.length; i++) {
          if (this.user[i].id == user.id) {
            this.user.splice(i, 1);
            break;
          }
        }
        this.filteredUser = this.user.filter(user => user.name.includes(""));
        this.searchText = "";
      }
    });
  }
  ngOnInit(): void {
  }

}
