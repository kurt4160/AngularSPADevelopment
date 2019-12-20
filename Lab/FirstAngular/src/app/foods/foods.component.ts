import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Food } from "../foods/food";
import { FoodService } from "../foods/food.service";

@Component({
  selector: "app-foods",
  templateUrl: "./foods.component.html",
  styleUrls: ["./foods.component.scss"]
})
export class FoodsComponent implements OnInit {
  constructor(private fs: FoodService) {}

  foods: Food[];
  selectedFood: Food;

  ngOnInit() {
    this.fs.getFoods().subscribe(data => {
      this.foods = data;
    });
  }

  onFoodSelected(f: Food) {
    this.selectedFood = { ...f };
  }

  onFoodSaved(f: Food) {
    console.log("saving to service: ", f);
    this.foods = this.foods.filter((v, i, a) => v.id != f.id);
    this.foods.push({ ...f });
  }
}
