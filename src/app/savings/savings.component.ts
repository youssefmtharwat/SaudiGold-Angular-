import { Component } from '@angular/core';
import { ChartsComponent } from "../charts/charts.component";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-savings',
  standalone: true,
  imports: [ChartsComponent,  
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,RouterLink],
  templateUrl: './savings.component.html',
  styleUrl: './savings.component.css'
})
export class SavingsComponent {

}
