const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      },
      less: {
        modifyVars: {
          red: "red",
          blue: "#000",
          orange: "red",
          "active-color": "#FE872B",
          "text-color": "#000"
        }
      }
    }
  },
  baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    open: true,
    proxy: {
      "/index": {
        target: "http://bafang.intexh.com"
      }
    },
    host: "0.0.0.0"
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false
};
