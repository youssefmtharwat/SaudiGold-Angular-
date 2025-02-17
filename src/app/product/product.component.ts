import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  images: string[] = [
    '/assets/Gold1.png',
    '/assets/Gold2.png',
    '/assets/Gold3.png',
    '/assets/Gold1.png',
    '/assets/Gold2.png'
    
    
  ];

  selectedImage: string = this.images[0];

  selectImage(image: string): void {
    this.selectedImage = image;
  }
}
