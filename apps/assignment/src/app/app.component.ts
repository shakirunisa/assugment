import { Component } from '@angular/core';

@Component({
  selector: 'sample-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assignment';
  showFiller = false;
  submit(){
    console.log("hello")
  }
  one(){
    console.log("hellooo2")
  }
}
