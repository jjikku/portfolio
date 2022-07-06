import { Component, OnInit } from '@angular/core';
import { referencesEn} from '../api/referencesEn';
@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  references:any=referencesEn;
  constructor() {
        this.references=referencesEn;
      
    
  }

  ngOnInit(): void {
  }

}
