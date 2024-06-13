import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string ='ironman';
  public age: number = 45;

  get capitalizedName(): string {
    // return this.name.toUpperCase();
    return this.name.toUpperCase();
  }

   getHeroDecription(): string {
    return `${this.name} tiene ${this.age} años`;
  }

  changeHero(): void {
    //TODO:
    // throw 'Metodo no implementado';
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }

  resetForm():void {
    this.name ='ironman';
    this.age = 45;
  }
}
