import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { IproductApi } from '../../Models/iproduct-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-api',
  standalone: true,
  imports: [],
  templateUrl: './product-api.component.html',
  styleUrl: './product-api.component.css'
})
export class ProductApiComponent implements OnInit,OnDestroy {
productsApi:IproductApi[];
sub!:Subscription
constructor(private _productService:ProductService)
{
  this.productsApi=[];
}
getProducts(): void{
this.sub =  this._productService.getProductsFromApi().subscribe(
    (data)=>{
      this.productsApi = data;
    },
    (err)=>{
      console.log(err);
    }
    )
}
  ngOnInit(): void {
    this.getProducts();
    console.log(this.getProducts());
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
