import { classNames } from './classNames';

describe('Tests for classnames function', () => {
  test('With only first param', () => {
    expect(classNames('mainClass')).toBe('mainClass');
  });
  test('With additional params', () => {
    const expectedClass = 'mainClass class1 class2';
    expect(classNames('mainClass', {}, ['class1', 'class2']))
      .toBe(expectedClass);
  });
  test('With mods params are equal true', () => {
    const expectedClass = 'mainClass class1 class2 hovered scrollable';
    expect(classNames(
      'mainClass',
      { hovered: true, scrollable: true },
      ['class1', 'class2'],
    )).toBe(expectedClass);
  });
  test('With mod param are equal false', () => {
    const expectedClass = 'mainClass class1 class2 hovered';
    expect(
      classNames('mainClass', { hovered: true, scrollable: false }, [
        'class1',
        'class2',
      ]),
    ).toBe(expectedClass);
  });
});
