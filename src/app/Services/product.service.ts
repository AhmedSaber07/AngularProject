import { IproductApi } from './../Models/iproduct-api';
import { Injectable, OnInit } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { ICategory } from '../Models/icategory';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  AllProducts:IProduct[];
  ProductsFilter:IProduct[];
  AllCategories:ICategory[];
  private baseUrl:string='https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { 
    this.AllProducts= [
      {
        ID:1,
        Name:'Samsung Galaxy A05s',
        Description:'        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:70,
        ReleaseDate: new Date("2022-02-01"),
        Image:'https://m.media-amazon.com/images/I/61jBR+KUEDL._AC_UL320_.jpg',
        Quantity:9,
        CategoryID:1
      },
      {
        ID:2,
        Name:'Lenovo V15 Laptop',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:120,
        ReleaseDate:new Date("2027-03-05"),
        Image:'https://m.media-amazon.com/images/I/512rfPA6vgL._AC_UL320_.jpg',
        Quantity:0,
        CategoryID:2
      },
      {
        ID:3,
        Name:'HP Pavilion X360',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:70,
        ReleaseDate: new Date("2022-03-01"),
        Image:'https://m.media-amazon.com/images/I/51+XYss2w3L._AC_UL320_.jpg',
        Quantity:1,
        CategoryID:2
      },
      {
        ID:4,
        Name:'Itel A58 PRO',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2025-03-05"),
        Image:'https://m.media-amazon.com/images/I/41-h5jK4PlL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:1
      },
      {
        ID:5,
        Name:'Lenovo Legion 5 Gaming',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2015-03-05"),
        Image:'https://m.media-amazon.com/images/I/51M5LTNoZ4L._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:2
      },
      {
        ID:6,
        Name:'JAC 32 Inch HD LED Smart',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2011-03-05"),
        Image:'https://m.media-amazon.com/images/I/61UxiHD7VXL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:3
      },
      {
        ID:7,
        Name:'realme C53',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2025-03-05"),
        Image:'https://m.media-amazon.com/images/I/71TULGodSqL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:1
      },
      {
        ID:8,
        Name:'Xiaomi Redmi Note 12',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2025-03-05"),
        Image:'https://m.media-amazon.com/images/I/61p79A67kPL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:1
      },
      {
        ID:9,
        Name:'Samsung 43 Inch Full HD Smart LED TV',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2025-03-05"),
        Image:'https://m.media-amazon.com/images/I/61DOcUmc0EL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:3
      },
      {
        ID:10,
        Name:'LG 65 Inch UHD 4K Smart AI ThinQ TV With Magic Remote',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2025-03-05"),
        Image:'https://m.media-amazon.com/images/I/61oWd7JG82L._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:3
      },
      {
        ID:11,
        Name:'American Eagle',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2025-03-05"),
        Image:'https://m.media-amazon.com/images/I/516yJpG-EKL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:4
      },
      {
        ID:12,
        Name:'Tempo',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2025-03-05"),
        Image:'https://m.media-amazon.com/images/I/71v1k2GzVRL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:4
      },
      {
        ID:13,
        Name:'Romba',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2011-03-05"),
        Image:'https://m.media-amazon.com/images/I/61vHEHGeLJL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:4
      },
      {
        ID:14,
        Name:'Hero Basic',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2017-03-05"),
        Image:'https://m.media-amazon.com/images/I/41LBSp9LGKL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:4
      },
      {
        ID:15,
        Name:'activ SPACIAL SPORT,SNEAKER',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2015-03-05"),
        Image:'https://m.media-amazon.com/images/I/51TKDQ5B1fL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:5
      },
      {
        ID:16,
        Name:'adidas ADVANTAGE BASE',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2022-03-05"),
        Image:'https://m.media-amazon.com/images/I/61gs5VywX+L._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:5
      },
      {
        ID:17,
        Name:'Testa Toro TESTA',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2025-03-05"),
        Image:'https://m.media-amazon.com/images/I/61JBStDTeyL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:5
      },
      {
        ID:18,
        Name:'Desert Basic Lace-Up Knit Ankle Sneakers For Men',
        Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim voluptas tempore in modi et temporibus illum asperiores, natus vel dolore aliquid sint cum quo facilis. Iste explicabo labore harum.',
        Price:90,
        ReleaseDate: new Date("2021-03-05"),
        Image:'https://m.media-amazon.com/images/I/51s0rNEY3YL._AC_UL320_.jpg',
        Quantity:50,
        CategoryID:5
      },
    ]
    this.AllCategories= [
      {
        ID:1,
        Name:'Mobile'
      },
      {
        ID:2,
        Name:'Laptop'
      },
      {
        ID:3,
        Name:'TV'
      },
      {
        ID:4,
        Name:'T-Shirt'
      },
      {
        ID:5,
        Name:'Shoes'
      }
    ]
    this.ProductsFilter = [];
  }
    
getProductsFromApi():Observable<IproductApi[]>{
return this.http.get<IproductApi[]>(this.baseUrl)
.pipe(
  catchError(this.handleError<IproductApi[]>('getProducts', []))
);
}

GetProductsByName(txt:string,catId:number):IProduct[]{ 
        if(txt.length>0)
        {
          this.ProductsFilter =this.AllProducts.filter((product: IProduct)=> product.Name.includes(txt));
          if(catId!=0)
          this.ProductsFilter = this.ProductsFilter.filter((product: IProduct)=> product.CategoryID==catId) 
          return this.ProductsFilter;
        }
        if(catId!=0)
        return this.AllProducts.filter((product: IProduct)=> product.CategoryID==catId)
        return this.AllProducts;
}
      
GetProductsByCategoryId(txt:string,cateoryId:number):IProduct[]{
        if(cateoryId!=0)
        {
          this.ProductsFilter =this.AllProducts.filter((product: IProduct)=> product.CategoryID==cateoryId);
          if(txt.length>0)
           this.ProductsFilter = this.ProductsFilter.filter((product: IProduct)=> product.Name.includes(txt))
         return this.ProductsFilter;
        }
        if(txt.length>0)
        return this.AllProducts.filter((product: IProduct)=> product.Name.includes(txt))
        return this.AllProducts;
}

GetAllCategories():ICategory[]
{
  return this.AllCategories;
}

GetAllProducts():IProduct[]
{
  return this.AllProducts;
}

GetProductById(id:number):IProduct|undefined{
  return this.AllProducts.find((product)=>product.ID===id);
}


private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

}
