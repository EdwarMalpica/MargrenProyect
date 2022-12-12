import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserVendedor} from "../../models/entities/userVendedore.interface";
import {UserVService} from "../../services/userV.service";


@Component({
  selector: 'app-dashboard-vendedor',
  templateUrl: './dashboard-vendedor.component.html',
  styleUrls: ['./dashboard-vendedor.component.css']
})
export class DashboardVendedorComponent implements OnInit {

  public searchText: string = "";
  public filteredUser: UserVendedor[] = [];
  public userVendedor: UserVendedor[] = [];

  constructor(private modalService: NgbModal,
              private userService: UserVService) { }

  public filterUser(): void {
    const text: string = this.searchText.toLocaleLowerCase();
    this.filteredUser = this.userVendedor.filter(user => user.name.toLowerCase().includes(text));
  }

  public removeUser(user: UserVendedor, modal: any): void {
    const modalRef = this.modalService.open(modal, { centered: true, scrollable: true })
    modalRef.result.then((result: boolean) => {
      if (result) {
        for (let i = 0; i < this.userVendedor.length; i++) {
          if (this.userVendedor[i].id == user.id) {
            this.userVendedor.splice(i, 1);
            break;
          }
        }
        this.filteredUser = this.userVendedor.filter(user => user.name.includes(""));
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
    this.userVendedor = [
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
    this.filteredUser = this.userVendedor.filter(user => user.name.includes(""));
  }

}
