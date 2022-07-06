import { Component, OnInit } from '@angular/core';
import { locale as english } from '../shared/i18n/en';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"Verilog",percent:90,remark:'excellent'}, {name:"Python,Perl",percent:70,remark:'good'},{name:"Angular",percent:70,remark:'good'},{name:"Node, Express",percent:70,remark:'very-good'}, {name:"JavaScript, BootStrap", percent:80,remark:'very good'}],
    tools:[{name:"Git, Synchronicity",percent:90,remark:'excellent'},{name:"Office",percent:90,remark:'excellent'},{name:"Linux, Windows, Mac",percent:70,remark:'very-good'},{name:"Mongo DB",percent:90,remark:'excellent'}],
    methodologies:[{name:"System Design",percent:70,remark:'very-good'},{name:"RTL",percent:90,remark:'excellent'},{name:"Synthesis",percent:70,remark:'good'},{name:"STA",percent:90,remark:'excellent'},{name:"ATPG",percent:70,remark:'good'}]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}

    
    
  
