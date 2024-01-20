import { Component } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.css'
})
export class CarroComponent {
  cantidadGalones:number=0;
  costoGalones:number=0;
  costoPeajes:number=0;
  costoTotal: number=0;
  horasViaje: number=0;

  calcularViaje(vehiValue:Vehiculo){
    
    this.cantidadGalones= vehiValue.KilometroDestino/vehiValue.kGalon
    this.costoGalones= this.cantidadGalones*vehiValue.costoGalon
    this.costoPeajes= vehiValue.costoPeaje*vehiValue.cantidadPeajes
    this.costoTotal= this.costoPeajes+this.costoGalones
    this.horasViaje= Math.round(vehiValue.KilometroDestino/60 ) 
 
  }

}
