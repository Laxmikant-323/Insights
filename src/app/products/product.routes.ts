import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailGuard } from "./product-detail.guard";
import { AddEditProductComponent } from "./add-edit-product/add-edit-product.component";

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductListComponent },
  {
      path: ':id',
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent
  },
  {
    path: 'id/:id',
    canActivate: [ProductDetailGuard],
    component: AddEditProductComponent
}
];