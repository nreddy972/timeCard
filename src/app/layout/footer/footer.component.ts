import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
copyRight:string = "ALCOR TECHNICAL SOLUTIONS, LLC (USA)";
  constructor() { }

  ngOnInit(): void {
  }

}
