import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Mini Projet';
  constructor(){
    this.Ghassen();
  }
  Ghassen(){
    let first = 0;
    console.log(first);
    first = first + 1;
    console.log(first);
    const list: Array<string> = ['Angular', 'React', 'Vue', 'Node'];
    for ( const p of list){
      if ( p === 'Node'){
        console.log( 'Node pour le backend');
      } else if (p === 'Angular'){
        console.log( 'Angular pour frontend');
      } else if (p === 'React'){
        console.log( 'React pour frontend');
      } else {
        console.log( 'Vue pour frontend');
      }
    }


  }

}
