

export interface Column<T> {
    title: string;
    id: string;
    sorting?: boolean;
    center?: boolean;
    templateBy?: string;
    resolve?: (row: T) => string;
}
export interface Options {
    selection?: boolean;
    index?: boolean;
    search?: boolean | string;
    sorting?: boolean;
    filterComponent?: any;
}
export interface Data<T> {
    length: number;
    pageSize: number;
    pageIndex: number;
    rows: T[];
}
export interface Source<T> {
    label: string;
    options?: Options;
    columns: Column<T>[];
    data: Data<T>;
}
export type OptionType = 'SEARCH' | 'FILTER' | 'PAGINATION' | 'SORT';
export interface OptionData {
    searchText: string;
    filterData: any;
    pagingData: any;
    sortingData: any;
}
export interface OptionEvent {
    type: OptionType;
    data: OptionData;
}
export type SearchHintType = 'DEFAULT' | 'SEARCHED' | 'INVALID';

