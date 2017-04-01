import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
<H3>SUCCESS!</H3>
`,
  styles: [`
h3 {
color: green;
}
`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
