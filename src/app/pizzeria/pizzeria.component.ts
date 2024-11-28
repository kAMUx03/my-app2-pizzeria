import { Component } from '@angular/core';
import { ListaPizzeComponent } from "./lista-pizze/lista-pizze.component";
import { PizzaComponent } from './pizza/pizza.component';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzeComponent, PizzaComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})
export class PizzeriaComponent {
 pizze = [
    {
        id: 1,
        nome: "Margherita",
        prezzo: 6.50,
        ingredienti: ["pomodoro", "mozzarella"]
    },
    {
        id: 2,
        nome: "Marinara",
        prezzo: 5.50,
        ingredienti: ["pomodoro", "aglio", "origano"]
    },
    {
        id: 3,
        nome: "Diavola",
        prezzo: 7.50,
        ingredienti: ["pomodoro", "mozzarella", "salame piccante"]
    },
    {
        id: 4,
        nome: "Quattro Formaggi",
        prezzo: 8.00,
        ingredienti: ["mozzarella", "gorgonzola", "grana", "provola"]
    },
    {
        id: 5,
        nome: "Capricciosa",
        prezzo: 8.50,
        ingredienti: ["pomodoro", "mozzarella", "prosciutto", "funghi", "carciofi", "olive"]
    },
    {
        id: 6,
        nome: "Vegetariana",
        prezzo: 7.50,
        ingredienti: ["pomodoro", "mozzarella", "zucchine", "melanzane", "peperoni"]
    },
    {
        id: 7,
        nome: "Tonno e Cipolla",
        prezzo: 8.00,
        ingredienti: ["pomodoro", "mozzarella", "tonno", "cipolla"]
    },
    {
        id: 8,
        nome: "Bufalina",
        prezzo: 9.00,
        ingredienti: ["pomodoro", "mozzarella di bufala", "basilico"]
    },
    {
        id: 9,
        nome: "Valdostana",
        prezzo: 7.50,
        ingredienti: ["pomodoro", "mozzarella", "prosciutto", "Fontina"]
    },
    {
        id: 10,
        nome: "Boscaiola",
        prezzo: 8.50,
        ingredienti: ["pomodoro", "mozzarella", "salsiccia", "funghi"]
    }
  ];
}
