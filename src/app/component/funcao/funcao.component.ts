import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-funcao',
  templateUrl: './funcao.component.html',
  styleUrls: ['./funcao.component.css']
})

export class FuncaoComponent implements OnInit {

  constructor() { }

  public valueTeste: string = '';
  public clearChar: string = '<'
  public backValue: string = '' ;
  public limitCaracteres = '4';
  public numeroDigitado: number = 0;

  public selector() {
     var numero = document.getElementById('resultado')?.innerHTML;
  }

  public insert(num: string){
    this.valueTeste += num;
  }

  public clean(){
    this.valueTeste = '';
  }

  public back(){

  }

  public calcular(num: string){
    this.valueTeste = eval(this.valueTeste)
}
   public limitNumber() {
     this.valueTeste = this.limitCaracteres
   }


ngOnInit() {

}


}
