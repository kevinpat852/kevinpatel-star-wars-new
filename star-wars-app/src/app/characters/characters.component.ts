import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(public charServ: CharactersService) { }

  ngOnInit() {
  }

  // clicked on Luke
  clickedLuke(){
    this.charServ.getLukeInfo();
  }

  // clicked on Vader
  clickedVader(){
    this.charServ.getVaderInfo();
  }

  // clicked on Kenobi
  clickedKenobi(){
    let response = this.charServ.getKenobiInfo();
  }

  // clicked on R2D2
  clickedR2D2(){
    this.charServ.getR2D2Info();
  }

}
