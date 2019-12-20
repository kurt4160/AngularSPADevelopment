import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FoodsComponent } from "./foods/foods.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "foods",
    component: FoodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
