import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  featuredProduct: Product[] = this.productService.getFeatured(true)
    .slice(0, 5);

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
  }

}
