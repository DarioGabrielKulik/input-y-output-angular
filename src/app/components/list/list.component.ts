import { Component } from '@angular/core';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listEmpleado: Empleado[] = [
    {
      legajo:1, 
      nombre: "juan", 
      apellido: "perez", 
      sexo: "Masculino", 
      salario: 25000 
    },
    {
      legajo:2, 
      nombre: "Dario", 
      apellido: "kulik", 
      sexo: "Masculino", 
      salario: 95000 
    },
    {
      legajo:3, 
      nombre: "Mabel", 
      apellido: "Godoy", 
      sexo: "Femenino", 
      salario: 55000 
    },
    {
      legajo:4, 
      nombre: "Kevin", 
      apellido: "kulik", 
      sexo: "Masculino", 
      salario: 15000 
    },
    {
      legajo:5, 
      nombre: "Sabrina", 
      apellido: "kulik", 
      sexo: "Femenino", 
      salario: 17500 
    },
    {
      legajo:6, 
      nombre: "Gusti", 
      apellido: "Santillan", 
      sexo: "Masculino", 
      salario: 34500 
    }
  ]

  radioBtn = "Todos";
  
  obtenerEmpleados():number{
    return this.listEmpleado.length;
  }
  
  obtenerFemenino():number{
  return this.listEmpleado.filter(list => list.sexo === "Femenino").length;
  }
  
  obtenerMasculino():number{
    return this.listEmpleado.filter(list => list.sexo === "Masculino").length;
    }

    radioSelect(radioBtn:string){
      this.radioBtn = radioBtn;
    }
}
