import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductGridComponent],
  imports: [CommonModule, ProductsRoutingModule, RouterModule],
})
export class ProductsModule {}
