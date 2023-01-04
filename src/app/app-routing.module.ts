import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFrameComponent } from './layout/item-frame/item-frame.component';

const routes: Routes = [{path:'', component: ItemFrameComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
