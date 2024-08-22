export default function getHoursDifference(dateISO1: string, dateISO2: string): number {
  // Преобразуем строки ISO в объекты Date
  const date1 = new Date(dateISO1);
  const date2 = new Date(dateISO2);

  // Проверяем, что даты корректны
  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    throw new Error('Некорректный формат даты');
  }

  // Получаем разницу в миллисекундах
  const differenceInMillis = Math.abs(date2.getTime() - date1.getTime());

  // Переводим разницу в часы
  const millisecondsInAnHour = 1000 * 60 * 60;
  const differenceInHours = differenceInMillis / millisecondsInAnHour;

  return differenceInHours;
}
