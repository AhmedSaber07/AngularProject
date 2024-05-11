import { IProduct } from './../../Models/iproduct';
import { Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeOpacityOFImageDirective } from '../../Directives/change-opacity-ofimage.directive';
import { QuantityStatePipe } from '../../Pipes/quantity-state.pipe';
import { ProductNavComponent } from '../product-nav/product-nav.component';
import { ProductService } from '../../Services/product.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FormsModule,CommonModule,ChangeOpacityOFImageDirective,QuantityStatePipe,ProductNavComponent,RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent  {
  currentDate = new Date();
Categories:ICategory[];
Products:IProduct[];
private _txtSearch:string="";
private _categoryId:number=0;

constructor(private _productService:ProductService) {
this.Categories = _productService.GetAllCategories();
this.Products = _productService.GetAllProducts();
}

handleSearchChange(search: string) {
  this._txtSearch = search;
  this.Products =  this._productService.GetProductsByName(this._txtSearch,this._categoryId);
}

handleCategoryChange(categoryId: number) {
  this._categoryId = categoryId;
  this.Products= this._productService.GetProductsByCategoryId(this._txtSearch,this._categoryId)
}
}
