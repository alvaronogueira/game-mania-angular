import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';


@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {
listaNovidades: any;

  constructor(private noticiaService: NoticiasService) { }

  listaNoticias = [] as Noticia[]


  ngOnInit(): void {  
    this.carregarNoticias()
  }

  carregarNoticias(){
    this.noticiaService.getNoticias().subscribe( (noticiasRecebidas: Noticia[]) => {
      this.listaNoticias = noticiasRecebidas;
      console.log(this.listaNoticias);
    }
    )
  }

}
