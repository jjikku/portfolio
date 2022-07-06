import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {  }
  ngOnInit(): void {
    var options = {
      strings: ['','ASIC Design' , 'Logic Synthesis', 'Static Timing Analysis' ,  'Full Chip Validation', 'MEAN Stack', 'Options Trader', 'Algo Trading'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }
}
