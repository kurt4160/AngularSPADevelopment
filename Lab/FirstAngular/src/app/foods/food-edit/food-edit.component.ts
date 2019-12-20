import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Food } from "../food";

@Component({
  selector: "app-food-edit",
  templateUrl: "./food-edit.component.html",
  styleUrls: ["./food-edit.component.scss"]
})
export class FoodEditComponent implements OnInit {
  @Input() food: Food;
  @Input() editMode: boolean;
  @Output() saveFood: EventEmitter<Food> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  foodForm: FormGroup;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.foodForm = this.fb.group({
      id: [this.food.id],
      name: [this.food.name, [Validators.required, Validators.minLength(3)]],
      price: [this.food.price, [Validators.required, Validators.min(0.1)]],
      calories: [this.food.calories, [Validators.required, Validators.min(0.1)]]
    });
  }

  saveFoodForm(foodForm): void {
    if (foodForm.valid) {
      this.saveFood.emit(foodForm.value);
    }
  }
}
