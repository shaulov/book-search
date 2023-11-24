export enum NameSpace {
  Data = 'DATA',
  Search = 'SEARCH',
}

export const SortingOptions = [
  {value: 'Relevance', name: 'Relevance'},
  {value: 'Newest', name: 'Newest'},
];

export const FilterOptions = [
  {value: '', name: 'All'},
  {value: 'Art', name: 'Art'},
  {value: 'Biography', name: 'Biography'},
  {value: 'Computers', name: 'Computers'},
  {value: 'History', name: 'History'},
  {value: 'Medical', name: 'Medical'},
  {value: 'Poetry', name: 'Poetry'},
];

export const MaxResult = 30;