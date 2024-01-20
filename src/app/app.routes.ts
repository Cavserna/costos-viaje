import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CarroComponent } from './components/carro/carro.component';


export const routes: Routes = [
    {path:"moto", component: BodyComponent},
    {path:"carro", component:CarroComponent}
];
