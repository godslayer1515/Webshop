import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>()
  categories = ['shoes','sports']
  onShowCategory(category: string): void {
    this.showCategory.emit(category)
    console.log(category)
  }
}
