import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SeachRoutingModule } from './search-routing.module';
import { ItensComponent } from './itens/itens.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SearchComponent, ItensComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SeachRoutingModule,
    RouterModule,
  ]
})
export class SearchModule { }