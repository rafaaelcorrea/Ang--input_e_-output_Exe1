import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  valor: number = 0;
  valorMaximoInputadoPeloPai: number = 5;

  ngOnInit(){

  }

  atualizarValor( valor: number): any{
    console.log(`valor atual do contador é ${valor}`);
    this.valor = valor;
  }

  reiniciar(){
    this.valor = 0;
    console.log(`contador reiniciado ${this.valor}`);
    
  }

}
