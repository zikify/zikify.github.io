import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  isVisibleAccueil:boolean;
  isVisibleSpotify:boolean;
  @Input() token: String;

  constructor() { }

  ngOnInit(): void {
    this.isVisibleAccueil = true;
    this.isVisibleSpotify = false;
    console.log("ACCUEIL-COMPONENT Token = " + this.token);
  }

  hide(): void{
    this.isVisibleAccueil = false;
  }

  accederSpotify(): void{
    this.hide()
    this.isVisibleSpotify = true;
  }

  accederInfos(): void{
    this.hide()
    this.isVisibleAccueil = false;
  }

  accederConcert(): void{
    this.hide()
    this.isVisibleAccueil = false;
  }

  accederLyrics(): void{
    this.hide()
    this.isVisibleAccueil = false;
  }

}
