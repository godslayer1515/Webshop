import { Component } from '@angular/core';
const Rows_height: {[id:number]: number}= {
  1: 400,
  3: 335,
  4: 350,
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 cols = 3;
 category: string | undefined;
 rowHeight = Rows_height[this.cols];
 onColumsCountChange(count: number): void{
  this.cols = count
  this.rowHeight = Rows_height[this.cols]
 }
 onShowCategory(newCategory: string): void {
  this.category = newCategory
 }
}
