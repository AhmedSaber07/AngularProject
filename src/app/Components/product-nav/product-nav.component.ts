import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-nav.component.html',
  styleUrl: './product-nav.component.css'
})
export class ProductNavComponent {
  TxtSearch: string="";
  FuncategoryId: number=0;
  @Input() Categories: ICategory[]=[];
 
  @Output() searchChange = new EventEmitter<string>();
   @Output() categoryChange = new EventEmitter<number>();
 
   onTxtSearchChange() {
     this.searchChange.emit(this.TxtSearch);
   }
 
   onFuncategoryIdChange() {
     this.categoryChange.emit(this.FuncategoryId);
   }
}
