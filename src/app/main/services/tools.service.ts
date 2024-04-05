import { Injectable } from '@angular/core';

// Carlos Manuel Cedeño Barrera 2022-0018


@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  private _data: any[] = []

  get data() {
    return [...this._data];
  }

  constructor() {
    this._data = JSON.parse(localStorage.getItem('formulario') || '[]')
  }


  saveToDivice(data: any, image: any) {
    this._data.unshift({
      titulo: data.titulo,
      fecha: data.fecha,
      descripcion: data.descripcion,
      foto: image.changingThisBreaksApplicationSecurity

    })
    localStorage.setItem('formulario', JSON.stringify(this._data));

  }

  borrar(item: any){
    this._data = this._data.filter( i => i !== item)
  }

}
