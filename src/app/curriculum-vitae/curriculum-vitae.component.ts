import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { experiencesEn} from '../api/experiencesEn';
@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']

})
export class CurriculumVitaeComponent implements OnInit {
  experiences:any=experiencesEn;
  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;

  constructor() {
     this.experiences=experiencesEn; 
  }

  ngOnInit(): void {
    this.planeIcon=awesom.faPlane;
    this.gameIcon=awesom.faGamepad;
    this.volleyBallIcon=awesom.faFootballBall;
  }
  
  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }
 

}
