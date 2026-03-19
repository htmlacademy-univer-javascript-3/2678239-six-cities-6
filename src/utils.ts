import dayjs from 'dayjs';

export function findItemById<T extends { id: string }>(array: T[], id: string): T | undefined {
  return array.find((el) => el.id === id);
}

export function humanizeDateDay(date: string) {
  return date ? dayjs(date).format('YYYY-MM-DD') : '';
}

export function humanizeDateMonth(date: string) {
  return date ? dayjs(date).format('MMMM YYYY') : '';
}
