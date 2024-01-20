import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vehiculo } from '../../models/vehiculo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {


  cantidadGalones:number=0;
  costoGalones:number=0;
  horasViaje: number=0;

  calcularViaje(vehiValue:Vehiculo){
    
    this.cantidadGalones= vehiValue.KilometroDestino/vehiValue.kGalon
    this.costoGalones= this.cantidadGalones*vehiValue.costoGalon
    this.horasViaje= Math.round(vehiValue.KilometroDestino/60 ) 

    console.log(this.costoGalones)
    console.log(this.horasViaje)
  }

}
