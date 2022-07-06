import { Component, OnInit } from '@angular/core';
import { projectsEn} from '../api/projectsEn';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any[] = projectsEn;
  venobox: any;
  constructor() {
    
  }

  ngOnInit(): void {
    
  }
  detailOnClick(project: any) {
    this.projects.filter(item=>item.detailIsDisplayed && item.id!=project.id).map(elem=>elem.detailIsDisplayed=false);
    project.detailIsDisplayed=!project.detailIsDisplayed;
  }
  
  
}
