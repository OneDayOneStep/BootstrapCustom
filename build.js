const sass = require("sass");
const fs = require("fs");
sass.render({ file: "./index.scss" }, (err, result) => {
    fs.existsSync("./output") || fs.mkdirSync("./output");
    fs.writeFile("./output/bootstrap.custom.css", result.css, err => {
        err && console.log("编译出错：" + err);
    });
});
