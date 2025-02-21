import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  productID!: string | null;
  productDetails!: Product;
  constructor(private readonly productService: ProductsService) {}
  getProductDetails() {
    // Call an API to get the product
    this.productService.getProductById(this.productID!).subscribe({
      next: ({ data }) => {
        this.productDetails = data;
      },
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productID = params.get('id');
      },
    });
    this.getProductDetails();
  }
}
