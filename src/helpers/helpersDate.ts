import { addMinutes, format } from 'date-fns';

export function calculateArrivalDateTime(
  departureDate: Date,
  departureTime: string,
  durationMinutes: number,
): { arrivalDate: string; arrivalTime: string } {
  // Convert departure time to Date object
  const [hours = 0, minutes = 0, seconds = 0] = departureTime.split(':').map(Number);
  departureDate.setHours(hours);
  departureDate.setMinutes(minutes);
  departureDate.setSeconds(seconds);

  // Calculate arrival time using date-fns
  const arrivalDateTime = addMinutes(departureDate, durationMinutes);

  // Format arrival date and time
  const arrivalDate = format(arrivalDateTime, 'yyyy-MM-dd');
  const arrivalTime = format(arrivalDateTime, 'HH:mm:ss');

  return { arrivalDate, arrivalTime };
}
