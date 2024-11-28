import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-pizze',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css'
})
export class ListaPizzeComponent {
  @Input() pizze: { id: number, nome: string, prezzo: number, ingredienti: string[]}[] = [];

  @Output() selectPizza = new EventEmitter();

  onDettagli(id: number){
    this.selectPizza.emit(id);
  }

  



}
