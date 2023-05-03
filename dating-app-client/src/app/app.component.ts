import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kalins first app';
  number = 10
  getMyName() {
    return "Kalin Javorov"
  }

  users = [
    {id: 1, name: "Kalin"},
    {id: 1, name: "Ivan"},
    {id: 1, name: "Gosho"},
    {id: 1, name: "Pesho"}

  ]

  public alert() {
    alert('hello')
  }
}
