import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service'  

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
