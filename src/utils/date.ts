import dayjs from 'dayjs';

export function humanizeDateDay(date: string) {
  return date ? dayjs(date).format('YYYY-MM-DD') : '';
}

export function humanizeDateMonth(date: string) {
  return date ? dayjs(date).format('MMMM YYYY') : '';
}
