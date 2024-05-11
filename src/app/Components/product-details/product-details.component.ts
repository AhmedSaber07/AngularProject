import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule,DatePipe,CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  implements OnInit {
productId:number;
Product!:IProduct|undefined;
  constructor(private _productService:ProductService,private ActivateRoute:ActivatedRoute,private route:Router){
    this.productId=0;;
  }
  ngOnInit(): void {
    this.productId = Number(this.ActivateRoute.snapshot.paramMap.get('id'));
    this.Product= this._productService.GetProductById(this.productId);
}
BactToList()
{
  return this.route.navigate(['/Home']);
}
}
