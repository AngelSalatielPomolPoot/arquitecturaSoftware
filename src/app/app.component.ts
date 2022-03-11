import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalComponent } from './componentes/paginas/principal/principal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  activarBarra=false;
  contador=0;
  
  constructor( private router: Router){
    
  }

  ngOnInit(): void {
    
    
    this.router.events.subscribe(value => {
      if(this.router.url.toString()!="/" && this.router.url.toString()!="/principal" ){
        this.activarBarra=true;
      }
      else{
        this.activarBarra=false;
      }
    });
  }

  title = 'arquitecturaSoftware';

  

  

}
