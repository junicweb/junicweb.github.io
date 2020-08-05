import { Component, OnInit } from '@angular/core';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faChevronCircleDown = faChevronCircleDown;
  
  constructor() { }

  ngOnInit(): void {
  }

}
