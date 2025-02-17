import { Component,signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent,ButtonModule,AccordionModule,MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SaudiGold';
  readonly panelOpenState = signal(false);

  toggleOverlay(isOpen: boolean) {
    const overlay = document.getElementById('overlay');
    if (overlay) {
      overlay.classList.toggle('active', isOpen);
    }
  }
}
