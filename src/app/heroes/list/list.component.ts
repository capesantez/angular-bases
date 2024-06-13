import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // crea listado de super heroes
  public heroNames: string[]= ['Spideman', 'Ironman', 'Hulk', 'Thor'];
  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
    console.log('Deleted hero: ', this.deleteHero);
  }
}
