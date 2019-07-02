import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, animate, style, query, stagger, state } from '@angular/animations';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('div, form',[
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MainPageComponent implements OnInit {
  @HostBinding('@pageAnimations') test=true;
  constructor() { }

  ngOnInit() {
  }

}
