import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesDataService } from '../service/services-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: any = null;
  constructor(private router: Router, private servicesData: ServicesDataService) { }
  message: string = "";
  ngOnInit() {
    this.loadAllData();
  }
  loadAllData() {
    this.servicesData.getDataTable().subscribe(
      data => {
        this.data = data;
      },
      error => {
        console.error('Error al obtener todos los datos', error);
        this.message = "Error al cargar los datos";
      }
    );
  }
}
