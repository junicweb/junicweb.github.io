import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faAd } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faPencilAlt = faPencilAlt;
  faAd = faAd;
  faHandsHelping = faHandsHelping;
  faChevronCircleDown = faChevronCircleDown;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  constructor() { }

  ngOnInit(): void {
  }

}
