// I am using sessionStorage for cache management.
export const setCache = (key: string, data: any): boolean => {
  const cacheSetTime = new Date();
  const cacheData = {
    data,
    cacheSetTime,
  };
  try {
    sessionStorage.setItem(key, JSON.stringify(cacheData));
    return true;
  } catch (error) {
    return false;
  }
};

export const getCache = (key: string): { isCache: boolean; data?: any } => {
  const cacheData = sessionStorage.getItem(key);
  if (cacheData) {
    const { data, cacheSetTime } = JSON.parse(cacheData);
    const currentTime = new Date();
    const cacheTime = new Date(cacheSetTime);
    const timeDiff = currentTime.getTime() - cacheTime.getTime();
    const minutes = Math.floor(timeDiff / 60000);
    if (minutes < 300) {
      return { isCache: true, data };
    }
  }
  return { isCache: false };
};

export const clearCache = (key: string): void => {
  sessionStorage.removeItem(key);
};
