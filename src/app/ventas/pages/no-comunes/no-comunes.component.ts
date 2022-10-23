import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {

  //i18nSelect Pipe
  nombre: string = 'Santiago';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  disabled: string = "";

  //i18nPlural Pipe
  clientes: string[] = ['Maria', 'Jose', 'Pepe', 'Luis', 'Santiago'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  cambiarNombre(){
    if (this.nombre == 'Santiago'){
      this.nombre = 'Sofia'
      this.genero = 'femenino';
    }else{
      this.nombre = 'Santiago'
      this.genero = 'masculino';
    }
  }

  eliminarClientes(){
    if(this.clientes.length > 1){
      this.clientes.shift();
    }else{
      this.clientes.shift();
      this.disabled = "true";
    }

  }


  persona = {
    nombre : 'Santiago',
    edad: 35,
    direccion: 'Falan',
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
    {
      nombre: 'Flash',
      vuela: false,
    },
    {
      nombre: 'Wonder Woman',
      vuela: false,
    }
  ]


  //Async Pipe
  miObservable = interval(1000);

  miPromesa = new Promise((resolve, reject) => {

    setTimeout(()=>{
      resolve('Se obtuvo la data');
    }, 1000);

  })


}
