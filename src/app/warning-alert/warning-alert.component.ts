import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
<H3>WARNING!</H3>
`,
  styles: [`
h3 {
color: red;
}
`]
})
export class WarningAlertComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
