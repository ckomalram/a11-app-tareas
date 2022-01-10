import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = [];
  nombreTarea: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    console.log(this.nombreTarea);
      //Crear Obj Tarea
      const tarea: Tarea = {
        nombre: this.nombreTarea,
        estado: false
      }


      //Agregar obj tarea al array listatareas
      this.listaTareas.push(tarea);
      //resetear Form
      this.nombreTarea ='';
  }

  eliminarTarea(index:number): void{
    // console.log(index);

    this.listaTareas.splice(index,1);
  }

  actualziarTarea(tarea: Tarea, index: number):void{
    this.listaTareas[index].estado = !tarea.estado;
  }

}
