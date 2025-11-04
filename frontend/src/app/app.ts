import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [Header, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
