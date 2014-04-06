var gulp    = require('gulp');
var jasmine = require('gulp-jasmine');
var cover   = require('gulp-coverage');

gulp.task('default', function () {
	gulp.src('spec/test.js')
	.pipe(jasmine());
});

gulp.task('jasmine', function () {
	gulp.src('srcjasmine.js')
		.pipe(cover.instrument({
			pattern: ['**/test*'],
			debugDirectory: 'debug'
		}))
		.pipe(jasmine())
		.pipe(cover.report({
			outFile: 'jasmine.html'
		}));
});