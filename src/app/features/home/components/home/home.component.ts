import { Component } from '@angular/core';
import { ProductsListComponent } from "../../../product/components/products-list/products-list.component";
import { MainSliderComponent } from "../main-slider/main-slider.component";
import { CategoriesSliderComponent } from "../categories-slider/categories-slider.component";

@Component({
  selector: 'app-home',
  imports: [MainSliderComponent, ProductsListComponent, CategoriesSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
