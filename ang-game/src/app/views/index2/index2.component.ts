import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovidadesService } from 'src/app/services/novidades.service';
import { Novidade } from 'src/app/models/novidade';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {

  constructor(private novidadeService: NovidadesService) { }
  listaNovidades = [] as Novidade[]


  ngOnInit(): void {
    this.carregarNovidades()
  }

  carregarNovidades(){
    this.novidadeService.getNovidades().subscribe((novidadesRecebidas: Novidade[]) => {
      this.listaNovidades = novidadesRecebidas;
      console.log(this.listaNovidades);
    }
    
    )
  }


}
