module.exports = function () {
    const gulp = require("gulp");
    const eslint = require("gulp-eslint");
	const fs = require("fs");
	const path = require("path");
	const reportsDir = "reports";
	
	if (!fs.existsSync(reportsDir)){
		fs.mkdirSync(reportsDir);
	}
	
    return gulp.src(["../**/*.js", "!../**/node_modules/**", "!build/dist/**"])
                .pipe(eslint())
                .pipe(eslint.format())
				.pipe(eslint.format('checkstyle', fs.createWriteStream(path.join(reportsDir, 'checkstyle.xml'), { flags: 'w' })))
                .pipe(eslint.failAfterError());
};
