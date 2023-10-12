import { getQueryParams } from './addQueryParams';

describe('Tests for addQueryParams function', () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  test('With only one param', () => {
    const params = {
      one: 'test',
    };

    jest.spyOn(window, 'location', 'get').mockReturnValue({
      ...window.location,
      search: '?init=abc',
    });

    expect(getQueryParams(params)).toBe('?init=abc&one=test');
  });
  test('With 2 params', () => {
    const params = {
      one: 'test',
      second: 'test2',
    };

    jest.spyOn(window, 'location', 'get').mockReturnValue({
      ...window.location,
      search: '?init=abc',
    });

    expect(getQueryParams(params)).toBe('?init=abc&one=test&second=test2');
  });
  test('Without initial params', () => {
    const params = {
      one: 'test',
      second: 'test2',
    };
    expect(getQueryParams(params)).toBe('?one=test&second=test2');
  });
  test('With undefined params', () => {
    const params = {
      one: 'test',
      second: undefined,
    };
    expect(getQueryParams(params)).toBe('?one=test');
  });
});
