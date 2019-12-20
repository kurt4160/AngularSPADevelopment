import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import { Food } from "../food";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-foods-list",
  templateUrl: "./foods-list.component.html",
  styleUrls: ["./foods-list.component.scss"]
})
export class FoodsListComponent implements OnInit {
  dataSource: MatTableDataSource<Food>;
  displayedColumns = ["id", "name", "price", "calories", "action"];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  @Input() foods: Food[];
  @Output() selectedFood: EventEmitter<Food> = new EventEmitter();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(this.foods);
    this.dataSource.sort = this.sort;
  }

  selectFood(f: Food) {
    this.selectedFood.emit(f);
  }

  addFood() {
    var newFood = <Food>{ id: 99, name: "", price: 0, calories: 0 };
    this.selectFood(newFood);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
