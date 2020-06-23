import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _current: string;

  categories$: Observable<any[]>;

  get current() {
    return this._current;
  }

  set current(value: string) {
    this._current = value;
    this.categoryChanged.emit(this.current);
  }

  @Output() categoryChanged = new EventEmitter<string>();

  constructor(private dbService: FirebaseService) {}

  ngOnInit(): void {
    this.categories$ = this.dbService.getCategories();
  }
}
