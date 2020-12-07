export const getFilmDuration = (duration) => {
  const SECONDS_PER_MINUTE = 60;
  const MINUTES_PER_HOUR = 60;
  const minutes = duration % SECONDS_PER_MINUTE;
  const hours = (duration - minutes) / MINUTES_PER_HOUR;
  return hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`;
};
