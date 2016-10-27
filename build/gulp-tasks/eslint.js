module.exports = function () {
    const gulp = require("gulp");
    const eslint = require("gulp-eslint");

    return gulp.src(["../**/*.js", "!../**/node_modules/**", "!build/dist/**"])
                .pipe(eslint())
                .pipe(eslint.format())
                .pipe(eslint.failAfterError());
};
