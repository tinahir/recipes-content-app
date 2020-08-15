export function replaceWhiteSpace(str: string, replaceValue: string) {
  return str.replace(/\s/g, replaceValue);
}

export function getSeoTitle(id: string, title: string) {
  return `${id}-${replaceWhiteSpace(title, "-")}`;
}
