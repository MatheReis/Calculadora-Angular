import { Component, OnInit, Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-funcao',
  templateUrl: './funcao.component.html',
  styleUrls: ['./funcao.component.css'],
  template: ''
})

export class FuncaoComponent implements OnInit {

  constructor() { }

  @Output() eventHistoricos = new EventEmitter<Array<string>>();
  @Output() eventChamarModal = new EventEmitter<void>();


  public historicos: Array<string> = [];
  public historico: string = '';

  public valueTeste: string = '';
  public clearChar: string = '<';

  public insert(num: string){
  console.log('Número inserido pelo usuário:', num);
   this.valueTeste += num;
   console.log('Conta:', this.valueTeste)

  }

  public clean(){
    this.valueTeste = '';
  }

  public back(){
   this.valueTeste = this.valueTeste.substring(1)
  }

  // Função calcular e histórico
   public calcular(num: string){
    this.historico = this.valueTeste + '='; // 9+9=

    //Calcula os números inseridos no insert
    this.valueTeste = eval(this.valueTeste); // 18

    console.log('Valor depois de calculado:', this.valueTeste); // 18

    //Exibi o histórico
    this.historico += this.valueTeste // 9+9=18

    console.log('Histórico', this.historico); // 9+9=18

    this.historicos.push(this.historico);

    console.warn('this.historicos dentro do funcao component', this.historicos);
    this.eventHistoricos.emit(this.historicos);
  }

  chamarModal(){
   this.eventChamarModal.emit();
  }


  ngOnInit(): void {

  }

}
