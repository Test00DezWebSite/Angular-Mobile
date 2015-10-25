var gulp = require('gulp'),
	inject = require('gulp-inject'),
	mainBowerFiles = require('gulp-main-bower-files'),
	angularFilesort = require('gulp-angular-filesort');

gulp.task('copyBowerFilesToLibFolder', copyBowerFilesToLibFolder);
gulp.task('injectDependencies', ['copyBowerFilesToLibFolder'], injectDependencies);

gulp.task('default', ['copyBowerFilesToLibFolder', 'injectDependencies']);

function copyBowerFilesToLibFolder() {
	return gulp.src('./bower.json')
		.pipe(mainBowerFiles())
		.pipe(gulp.dest('./lib'));
}

function injectDependencies() {
	gulp.src('./index.html')
		.pipe(inject(gulp.src(['./lib/**/*', './css/**/*'], {read: false})))
		.pipe(inject(gulp.src('./app/**/*.js').pipe(angularFilesort()), {name: 'angular'}))
		.pipe(gulp.dest('./'));
}