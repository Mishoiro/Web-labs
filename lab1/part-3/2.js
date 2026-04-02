const defaults = {
  mode: "test",
  debugLevel: "error",
  logFolder: "root",
};

const userSetting = {
  mode: "production",
  debugLevel: "trace",
};

const merge1 = (a, b) => ({ ...a, ...b });

const merge2 = (a, b) => Object.assign({}, a, b);

const merge3 = (a, b) => {
  const result = { ...a };
  for (let key in b) {
    result[key] = b[key];
  }
  return result;
};

console.log(merge1(defaults, userSetting));
