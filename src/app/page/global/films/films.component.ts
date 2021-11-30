import { Component, Input, OnInit, } from '@angular/core';
import {filmsFantasy, filmsInfantil } from '../Models/netflix-model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  @Input() public  filmsFantasy: filmsFantasy;
  @Input() public filmsInfantil: filmsInfantil;


  constructor() {}

  ngOnInit(): void {}
}