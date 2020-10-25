import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChildren,
  QueryList,
  EventEmitter,
  ContentChildren,
  ViewChild,
  ElementRef,
  TemplateRef,
  AfterViewInit
} from '@angular/core';
// import { MatTableDataSource, MatCheckboxChange, MatCheckbox, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import * as Table from '../table.types';
import { ForDirective } from '../../for';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  exportAs: 'DataTable'
})
export class TableComponent implements OnInit, AfterViewInit {
  private $disabled = false;
  @Input()
  set disabled(state: boolean) {
    this.$disabled = coerceBooleanProperty(state);
    if (!this.$disabled && this.searchRef) {
      setTimeout(() => {
        this.searchRef.nativeElement.focus();
      });
    }
  }
  get disabled(): boolean {
    return this.$disabled;
  }
  private $tableSource: Table.Source<any>;
  @Input()
  set tableSource(source: Table.Source<any>) {
    if (source) {
      this.$tableSource = source;
      const { rows, pageIndex, pageSize } = source.data;
      this.dataSource.data = rows || [];
      this.optionEvent.data.pagingData = {pageIndex, pageSize};
    }
  }
  get tableSource() {
    return this.$tableSource;
  }
  @Output() selectChange: EventEmitter<any> = new EventEmitter();
  @Output() optionChange: EventEmitter<any> = new EventEmitter();
  get label(): string {
    return this.tableSource ? this.tableSource.label : 'Data List';
  }
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  get length(): number {
    return (this.$tableSource && this.$tableSource.data && this.$tableSource.data.length) || 0;
  }
  get pageSize(): number {
    return (this.$tableSource && this.$tableSource.data && this.$tableSource.data.pageSize) || 0;
  }
  get pageIndex(): number {
    return (this.$tableSource && this.$tableSource.data && this.$tableSource.data.pageIndex) || 0;
  }
  get isInactive(): boolean {
    return this.length === 0 || !this.isLoaded || this.disabled;
  }
  get isLoaded(): boolean {
    // return !!this.$tableSource.data;
    return this.$tableSource && this.$tableSource.data && !!this.$tableSource.data.rows;
  }

  get isSearchApplied(): boolean {
    return this.optionEvent.data.searchText && this.optionEvent.data.searchText.length > 0;
  }
  get isFilterApplied(): boolean {
    const filterData = this.optionEvent.data.filterData;
    return (function recursiveCheck(value: any): boolean {
      if (value) {
        if (typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date)) {
          return Object.keys(value).some(key => {
            return recursiveCheck(value[key]);
          });
        }
        return true;
      }
      return false;
    })(filterData);
  }
  get displayedColumns(): string[] {
    if (this.tableSource) {

      const columns = this.tableSource.columns.map(column => column.id);
      const indexedColumns = this.tableSource.options && this.tableSource.options.index ? ['index', ...columns] : columns;
      return this.tableSource.options && this.tableSource.options.selection ? ['selection', ...indexedColumns] : indexedColumns;
    }
    return [];
  }
  @ContentChildren(ForDirective) templates: QueryList<ForDirective>;
  get headerTemplate(): TemplateRef<any> {
    if (this.templates) {
      const header = this.templates.find((template: ForDirective) => template.name === 'header');
      if (header) {
        return header.ref;
      }
    }
    return null;
  }
  @ViewChild('searchInput', { static: true}) searchRef: ElementRef<HTMLInputElement>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @ViewChildren(MatCheckbox) checkBoxList: QueryList<MatCheckbox>;
  get checkBoxes(): MatCheckbox[] {
    return this.checkBoxList ? this.checkBoxList.toArray() : [];
  }
  get rowCheckBoxes(): MatCheckbox[] {
    return this.checkBoxes.filter((_, index: number) => index > 0);
  }
  get selection() {
    return this.rowCheckBoxes.reduce((total, checkBox, index) => {
      if (checkBox.checked) {
        return [...total, { ...this.tableSource.data[index] }];
      }
      return total;
    }, []);
  }
  get skipRows(): number {
    // console.log(this.paginator);
    const { pageIndex = 0, pageSize = 10 } = this.$tableSource && this.$tableSource.data || {};
    return pageIndex * pageSize;
  }
  // search handler
  private $searchHintType: Table.SearchHintType = 'DEFAULT';
  isSearchError = false;
  get searchHint(): string {
    let hint: string;
    switch (this.$searchHintType) {
      case 'SEARCHED': {
        hint = 'Search is already done.';
        break;
      }
      case 'INVALID': {
        hint = 'At least 3 charactor required to search.';
        break;
      }
      case 'DEFAULT':
      default: {
        hint = 'Please tap enter to search.';
        break;
      }
    }
    return hint;
  }
  get placeholder() {
    const search = this.tableSource && this.tableSource.options && this.tableSource.options.search;
    if (search && typeof search === 'string') {
      return search;
    }
    return 'Search';
  }
  get hasSorting(): boolean {
    return this.$tableSource && this.$tableSource.options && this.$tableSource.options.sorting;
  }
  optionEvent: Table.OptionEvent = {
    type: null,
    data: {
      searchText: null,
      filterData: null,
      pagingData: null,
      sortingData: null
    }
  };
  get titleTemplate() {
    if (this.templates) {
      const template = this.templates.find(query => query.name === 'header-title');
      return template ? template.ref : null;
    }
    return null;
  }

  private $serarchText: string;
  @Input()
  set customSearchText(searchText: string) {
    this.$serarchText = searchText;
  }

  get customSearchText(): string {
    return this.$serarchText || '';
  }
  constructor(private $dialog: MatDialog) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor = this._sortResolver.bind(this);
    }
  }
  private _sortResolver(row, key): string | number {
    const column = this.tableSource.columns.find(({ id }: Table.Column<any>) => id === key);
    if (column.resolve) {
      return column.resolve(row);
    }
    return 0;
  }
  templateOutlet(column: Table.Column<any>) {
    if (this.templates) {
      const template = this.templates.find(query => query.name === column.templateBy);
      return template ? template.ref : null;
    }
    return null;
  }
  onHeadSelectionChangeHandler(event: MatCheckboxChange) {
    this.rowCheckBoxes.forEach((checkBox: MatCheckbox) => {
      if ((event.checked && !checkBox.checked) || (!event.checked && checkBox.checked)) {
        checkBox.toggle();
      }
    });
    this._emitSelectEvent();
  }
  onSelectionChangeHandler(event: MatCheckboxChange) {
    const someUnChecked = this.rowCheckBoxes.some(checkBox => !checkBox.checked);
    const everyChecked = this.rowCheckBoxes.every(checkBox => checkBox.checked);
    if ((someUnChecked && this.checkBoxList.first.checked) || (everyChecked && !this.checkBoxList.first.checked)) {
      this.checkBoxList.first.toggle();
    }
    this._emitSelectEvent();
  }
  private _emitSelectEvent() {
    this.selectChange.emit(this.rowCheckBoxes.reduce((total, checkBox, index) => {
      if (checkBox.checked) {
        return [...total, this.dataSource.data[index]];
      }
      return total;
    }, []));
  }


  // filter option
  onFilterHandler() {
    if (this.tableSource && this.tableSource.options && this.tableSource.options.filterComponent) {
      console.log(this.optionEvent);
      const subscription = this.$dialog.open(this.tableSource.options.filterComponent, {
        disableClose: true,
        position: {
          right: '20px'
        },
        autoFocus: false,
        data: this.optionEvent.data.filterData
      }).afterClosed().subscribe((filterData) => {
        console.log(this.optionEvent);
        if (filterData !== undefined) {
          this.optionEvent = {
            type: 'FILTER',
            data: {
              ...this.optionEvent.data,
              filterData
            }
          };
          this._emitOptionEvent();
        }
        subscription.unsubscribe();
      });
    }
  }

  // search handler
  onFormFieldClickHandler(event: MouseEvent) {
    event.stopPropagation();
  }
  onSearchHandler(event: KeyboardEvent) {
    this.isSearchError = false;
    this.$searchHintType = 'DEFAULT';
    const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
    const key = event.code || event.key;
    if (key === 'Enter') {
      const value = target.value.trim();
      if (value.length >= 3 || (value.length === 0 && this.optionEvent.data.searchText)) {
        if (value !== this.optionEvent.data.searchText) {

          // Set page to first page for the search operation.
          this.optionEvent.data.pagingData = {
            pageIndex: 0,
            pageSize: this.pageSize
          };
          this.optionEvent = {
            type: 'SEARCH',
            data: {
              ...this.optionEvent.data,
              searchText: value || null
            }
          };
          this._emitOptionEvent();
        } else {
          this.$searchHintType = 'SEARCHED';
        }
      } else {
        this.$searchHintType = 'INVALID';
        this.isSearchError = true;
      }
    } else if (key === 'Space' && !target.selectionStart) {
      event.preventDefault();
      // const value = (currentTarget as HTMLInputElement).value;
      // if (value !== value.trimLeft()) {
      //   preventDefault();
      // }

    }
  }
  onPasteHandler({ target }: KeyboardEvent) {
    const input = target as HTMLInputElement;
    input.value = input.value.trim();
  }
  // pagination handle
  onPageHandler(event) {
    this.optionEvent = {
      type: 'PAGINATION',
      data: {
        ...this.optionEvent.data,
        pagingData: {
          pageIndex: event.pageIndex,
          pageSize: event.pageSize
        }
      }
    };
    this._emitOptionEvent();
  }

  onSortHandler(event) {
    console.log('event', event);
    this.optionEvent = {
      type: 'SORT',
      data: {
        ...this.optionEvent.data,
        sortingData: {
          active: event.active,
          direction: event.direction || 'asc'
        }
      }
    };
    this._emitOptionEvent();
  }

  private _emitOptionEvent() {
    this.optionChange.emit(this.optionEvent);
  }
}
