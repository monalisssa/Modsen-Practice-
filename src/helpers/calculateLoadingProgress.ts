function parseTimeString(timeString: string) {
  const parts = timeString.split(' ');
  let minutes = 0;

  parts.forEach((part) => {
    if (part.includes('ч')) {
      const hours = parseInt(part.replace('ч', ''));
      minutes += hours * 60;
    } else if (part.includes('мин')) {
      const mins = parseInt(part.replace('мин', ''));
      minutes += mins;
    }
  });

  return minutes;
}

export const calculateLoadingProgress = (duration: string) => {
  const totalTime = parseTimeString(duration);
  if (totalTime <= 60) {
    return 100 - Math.ceil((totalTime / 60) * 100);
  } else {
    return 0;
  }
};
