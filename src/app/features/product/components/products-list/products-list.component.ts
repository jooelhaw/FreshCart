import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  allProducts: Product[] = [];
  productService = inject(ProductsService);
  getAllProducts() {
    this.productService.getProducts().subscribe({
      next: ({ data }) => {
        this.allProducts = data;
      },
    });
  }

  ngOnInit() {
    this.getAllProducts();
  }
}
