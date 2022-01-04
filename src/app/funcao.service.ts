import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncaoService {

  calcular = new EventEmitter<string>();

  constructor() { }
}
