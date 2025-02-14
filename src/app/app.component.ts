import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ProductsListComponent } from "./features/product/components/products-list/products-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FreshCart';
}
