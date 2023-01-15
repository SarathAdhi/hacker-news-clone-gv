export function getTimestampUsingDates(days: string) {
  var timeStamp = Math.round(new Date().getTime() / 1000);
  var timeStampYesterday = timeStamp - 24 * 3600 * parseInt(days);

  return `created_at_i>=${timeStampYesterday}`;
}
