import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

private mediaMatcher: MediaQueryList= matchMedia("(max-width:720px)");

  constructor() { }

  ngOnInit() {
  }

  pantallaSmall(){
     return this.mediaMatcher.matches;
  }

}
