import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent{

  nombreCompleto = 'sAnTIaGO MarTiNeZ';

  fecha: Date = new Date(); //Fecha de hoy

}
