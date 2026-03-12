import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getHello().subscribe(res => this.message = res);
  }
}
