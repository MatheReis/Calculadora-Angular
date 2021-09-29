import { Output } from '@angular/core';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora-Angular';
  historicos: any[] = [];

  public acaoPrimaria: any;

  calcular($event: any){
    console.log($event);
    this.historicos.push($event);
  }

  public receberHistorico(historico: Array<string>){
    this.historicos = historico;
    console.warn('historico vindo do evento', historico)
    console.warn('this historicos dentro do component pai', this.historicos);
  }

  }

