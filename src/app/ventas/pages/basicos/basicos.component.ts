import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent{

  nombreLower = 'santiago';
  nombreUpper = 'santiago';
  nombreCompleto = 'sAnTIaGO MarTiNeZ';

  fecha: Date = new Date(); //Fecha de hoy

}
