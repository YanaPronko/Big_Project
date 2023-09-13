export type Mods = Record<string, boolean | string | undefined>

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    cls,
    ...additional.filter((cls) => !!cls),
    ...Object.entries(mods)
      .filter(([_, value]) => !!value)
      .map(([cls, _]) => cls),
  ].join(' ');
  // Вариант с Object.keys()
  // ...Object.keys(mods).filter(cls=> !!mods[cls])

  // Вариант с reduce
  //  ...Object.entries(mods)
  // .reduce((cls, [key, value]) => !!value ? cls = [...cls, key] : cls, []).join(' ')
}
