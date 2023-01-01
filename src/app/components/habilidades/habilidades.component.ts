import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { Soft } from 'src/app/model/soft';
import { Tecnica } from 'src/app/model/tecnica';
import { DatosService } from 'src/app/servicios/datos.service';
import { IdiomaService } from 'src/app/servicios/idioma.service';
import { SoftService } from 'src/app/servicios/soft.service';
import { TecnicaService } from 'src/app/servicios/tecnica.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  tecnica: Tecnica[] = []
  idioma: Idioma[] =[]
  soft: Soft[] = []
  constructor(public tecnicaService: TecnicaService, public idiomaService: IdiomaService, public softService: SoftService) { }

  ngOnInit(): void {
  this.tecnicaService.verTecnicas().subscribe(data => {this.tecnica = data});
  this.idiomaService.verIdiomas().subscribe(data => {this.idioma = data});
  this.softService.verSofts().subscribe(data => {this.soft = data})
  }

}
