import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent  implements OnInit{


    valor:number = 0;
    @Input() valorMaximo: number  = 10;
    @Output() valorAtualizado = new EventEmitter<number>();
    statusDoBloqueio: boolean = false ;

  ngOnInit(): void {
    
  }

  incrementar() :any{
    this.valor === this.valorMaximo ?  this.statusDoBloqueio = true : 
    this.valorAtualizado.emit(this.valor++) ;

  }
}
