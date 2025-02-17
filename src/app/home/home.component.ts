import { Component } from '@angular/core';
import { ChartsComponent } from "../charts/charts.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
