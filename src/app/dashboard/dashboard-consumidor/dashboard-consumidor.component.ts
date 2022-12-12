import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserConsumidor} from "../../models/entities/userConsumidor.interface";
import {UserCService} from "../../services/userC.service";

@Component({
  selector: 'app-dashboard-consumidor',
  templateUrl: './dashboard-consumidor.component.html',
  styleUrls: ['./dashboard-consumidor.component.css']
})
export class DashboardConsumidorComponent implements OnInit {

  public searchText: string = "";
  public filteredUser: UserConsumidor[] = [];
  public userConsumidor: UserConsumidor[] = [];

  constructor(private modalService: NgbModal,
              private userService: UserCService) { }

  public filterUser(): void {
    const text: string = this.searchText.toLocaleLowerCase();
    this.filteredUser = this.userConsumidor.filter(user => user.name.toLowerCase().includes(text));
  }

  public removeUser(user: UserConsumidor, modal: any): void {
    const modalRef = this.modalService.open(modal, { centered: true, scrollable: true })
    modalRef.result.then((result: boolean) => {
      if (result) {
        for (let i = 0; i < this.userConsumidor.length; i++) {
          if (this.userConsumidor[i].id == user.id) {
            this.userConsumidor.splice(i, 1);
            break;
          }
        }
        this.filteredUser = this.userConsumidor.filter(user => user.name.includes(""));
        this.searchText = "";
      }
    });
  }
  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    // this.productsService.getProducts().subscribe((products: Product[]) => {
    //   this.products = products;
    // });
    this.userConsumidor = [
      { id: 1, name: "Usuario 1", lastname: "Apellido 1", typeDocument: "C.C", numDocument: 135234000, email: "bhjakqsq@gmail.com" },
      { id: 2, name: "Usuario 2", lastname: "Apellido 1", typeDocument: "C.C", numDocument: 135234000, email: "bhjakqsq@gmail.com" },
      { id: 3, name: "Usuario 3", lastname: "Apellido 1", typeDocument: "C.C", numDocument: 135234000, email: "bhjakqsq@gmail.com" },
      { id: 4, name: "Usuario 4", lastname: "Apellido 1", typeDocument: "C.C", numDocument: 135234000, email: "bhjakqsq@gmail.com" },
      { id: 5, name: "Usuario 5", lastname: "Apellido 1", typeDocument: "C.C", numDocument: 135234000, email: "bhjakqsq@gmail.com" },
      { id: 6, name: "Usuario 6", lastname: "Apellido 1", typeDocument: "C.C", numDocument: 135234000, email: "bhjakqsq@gmail.com" },
      { id: 7, name: "Usuario 7", lastname: "Apellido 1", typeDocument: "C.C", numDocument: 135234000, email: "bhjakqsq@gmail.com" },
      { id: 8, name: "Usuario 8", lastname: "Apellido 1", typeDocument: "C.C", numDocument: 135234000, email: "bhjakqsq@gmail.com" },
      { id: 9, name: "Usuario 9", lastname: "Apellido 1", typeDocument: "C.C", numDocument: 135234000, email: "bhjakqsq@gmail.com" },
      { id: 10, name: "Usuario 10" }
    ];
    this.filteredUser = this.userConsumidor.filter(user => user.name.includes(""));
  }
}
