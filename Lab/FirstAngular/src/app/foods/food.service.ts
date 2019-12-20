import { Injectable } from "@angular/core";
import { Food } from "./food";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor() {}

  data: Food[] = [
    {
      id: 1,
      name: "Pommes",
      price: 3.5,
      calories: 3200
    },
    {
      id: 2,
      name: "Nudeln",
      price: 1.5,
      calories: 1600
    },
    {
      id: 3,
      name: "Suppe",
      price: 2.5,
      calories: 1200
    }
  ];

  getFoods(): Observable<Food[]> {
    return of(this.data).pipe(delay(1000));
  }
}
