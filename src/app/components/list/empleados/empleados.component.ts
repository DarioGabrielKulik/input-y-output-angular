import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Empleado } from '../../../models/Empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  @Input() todos:number;
  @Input() masculino:number;
  @Input() femenino:number;
  @Output() btn = new EventEmitter<string>();


  constructor(){
    this.todos = 0;
    this.masculino = 0;
    this.femenino = 0;
  }

  radioBtn = "Todos";

ngOnInit():void{ 
}
  radioChange():void{
    this.btn.emit(this.radioBtn);
  }
}
