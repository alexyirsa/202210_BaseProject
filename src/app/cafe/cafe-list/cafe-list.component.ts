import { Component, Input, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  @Input() tipo!: string;
  cantidad: number = 0;

  cafes: Array<Cafe>=[];

  constructor(private cafeService: CafeService) { }

  getCafes(): void{
    this.cafeService.getCafes().subscribe((cafes)=>{
      this.cafes = cafes;
    });
  }

  getCantidad(tipo:string): number{
    this.cantidad = 0;
    for(let i=0; i<this.cafes.length; i++){
      if(this.cafes[i].tipo==tipo){
        this.cantidad=this.cantidad+1;
      }
    }
    return this.cantidad
  }

  ngOnInit() {
    this.getCafes();
  }

}
