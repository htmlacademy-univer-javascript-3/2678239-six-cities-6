export function findItemById<T extends { id: string }>(array: T[], id: string): T | undefined {
  return array.find((el) => el.id === id);
}
