type Mods = Record<string, boolean | string>

export const classNames = (cls: any, mods: Mods, additional: string[]): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}
