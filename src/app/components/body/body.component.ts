import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  mostrar = true

  frase: any = {
    mensaje: 'Con un gran poder puedes hacer bastente plata',
    autor: 'Ben Parker'
  };

  personajes: string[] = ['Spiderman' , 'verde', 'Dr.pulpo']

}
