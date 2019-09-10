module.exports = {
  productionSourceMap: false,
  runtimeCompiler: process.env.NODE_ENV === "production" ? false : true
};
