import { LibroservService } from './libroserv.service';
import { Component } from '@angular/core';
import { Libro } from './libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  libro : Libro = {
    codLibro: 1,
    titolo: "dwwwsw ",
    costo: 11,
    genere: " ",
    pagine: 11,
    codCasaEdl: 11,
    codAutoreL: 1
    
  };
  constructor(private libroserv: LibroservService){ }

  ngOnInit(){
    this.libroserv.getlibri().subscribe(res=>{ this.libro = res});

  }
}
