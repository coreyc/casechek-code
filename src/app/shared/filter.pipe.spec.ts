import { FilterPipe } from './filter.pipe';

describe('Filter Pipe', () => {
  let filter: FilterPipe;

  beforeEach(() => {
    filter = new FilterPipe();
  });

  it('should return empty array when no items available to be searched', () => {
    expect(filter.transform([], 'test').length).toBe(0);
  });

  it('should return original array when no text is entered in the filter', () => {
    const originalArray = ['app', 'dev'];
    expect(filter.transform(originalArray, '')).toBe(originalArray);
  });

  it('should filter the list with search term', () => {
    const originalArray = [{name: 'pizza place', results: 'fail', violations: 'some'},
      {name: 'bagel place', results: 'pass', violations: 'none'}];
    expect(filter.transform(originalArray, 'pizza')).toEqual([{name: 'pizza place', results: 'fail', violations: 'some'}]);
  });
});
