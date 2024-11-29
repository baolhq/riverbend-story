// src/utils/formatDatetime.ts

/**
 * Formats a given datetime string or Date object into a readable format.
 *
 * @param date - The date to format (either a Date object or a datetime string).
 * @param locale - Optional locale to format the date in. Default is 'en-US'.
 * @param options - Optional formatting options (e.g., weekday, time style).
 *
 * @returns The formatted date string.
 */
const formatDatetime = (
  date: string | Date,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions = {}
): string => {
  // Ensure the date is a valid Date object
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  // If the date is invalid, return an error message
  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format");
  }

  // Default options if none are provided
  const defaultOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
    ...options,
  };

  // Format and return the date
  return parsedDate.toLocaleString(locale, defaultOptions);
};

export default formatDatetime;
