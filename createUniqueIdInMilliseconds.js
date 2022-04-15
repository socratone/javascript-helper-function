const createUniqueIdInMilliseconds = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const milliseconds = d.getMilliseconds();
  return `${year}-${month}-${date}/${hours}:${minutes}:${seconds}.${milliseconds}`;
};
