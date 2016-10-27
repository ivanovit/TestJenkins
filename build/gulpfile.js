const util = require("gulp-util");
const argv = require("yargs").argv;

require("gulp-task-loader")({
    util,
    argv
});
