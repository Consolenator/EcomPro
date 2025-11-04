import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,  ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    { id: 1, name: 'Quantum Laptop X1', price: 1499.00, description: 'Ultra-light and powerful for professionals.', imageUrl: 'assets/images/laptop.jpg', inStock: true },
    { id: 2, name: 'Chronos Smart Watch', price: 199.99, description: 'Track your fitness and stay connected.', imageUrl: 'assets/images/watch.jpg', inStock: true },
    { id: 3, name: 'Aura Headphones', price: 299.00, description: 'Industry-leading noise cancellation.', imageUrl: 'assets/images/headphones.jpg', inStock: false },
    { id: 4, name: 'EcomPro Wireless Mouse', price: 49.99, description: 'Ergonomic, silent, and reliable.', imageUrl: 'assets/images/mouse.jpg', inStock: true }
  ];
}
