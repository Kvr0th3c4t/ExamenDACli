import { Component } from '@angular/core';
import { IPublicaciones } from '../../interfaces/IPublicaciones';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

arrayPublicaciones: IPublicaciones[];
newPublicacion: IPublicaciones;


constructor(){
  this.arrayPublicaciones = [];
  this.newPublicacion = {
    titulo: "",
    urlImagen:"",
    texto:"",
    fecha: new Date()
  }
}

guardarPublicacion():void {
  this.arrayPublicaciones.push(this.newPublicacion);
  this.newPublicacion = {
    titulo: "",
    urlImagen:"",
    texto:"",
    fecha: new Date()
  }
}

cargarPublicacion(): string{
let html: string = "";
this.arrayPublicaciones.forEach(element => {
  html +=   `<p>${element.titulo}</p>
            <img src="${element.urlImagen}">
            <p>${element.texto}</p>
            <p>${new Date(element.fecha).toLocaleDateString()}</p>`
})
return html;

}

}
