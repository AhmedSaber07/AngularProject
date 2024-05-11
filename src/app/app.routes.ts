import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Shared/Components/not-found/not-found.component';
import { ProductApiComponent } from './Components/product-api/product-api.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { authUserGuard } from './Guards/auth-user.guard';

export const routes: Routes = [
    {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'Home',component:IndexComponent,title:'Home Page'},
    {path:'AboutUs',component:AboutUsComponent,title:'About-Us Page'},
    {path:'ContactUs',component:ContactUsComponent,title:'Contact-Us Page'},
    {path:'ProductsApi',component:ProductApiComponent,title:'ProductsApi Page'},
    {path:'Products/:id',component:ProductDetailsComponent,title:'Product Details Page'},
    {path:'ShoppingCart',component:ShoppingCartComponent,title:'Shopping Cart Page',canActivate:[authUserGuard]},
    {path:'Register',component:RegisterComponent,title:'Register Page'},
    {path:'Login',component:LoginComponent,title:'Login Page'},
    {path:'**',component:NotFoundComponent,title:'NotFound Page'},
];
