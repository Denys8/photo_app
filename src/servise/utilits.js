export const getParamsString = (params, baseUrl) => {
  const keys = Object.keys(params);
  if (!keys.length) {
    return baseUrl;
  }
  return keys.reduce((accum, key, index) => {
    let param = `${key}=${params[key]}`;
    if (index === keys.length - 1) {
      return (accum += param);
    }
    return (accum += `${param}&&`);
  }, `${baseUrl}/?`);
};
