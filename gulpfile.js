var gulp = require('gulp'),
	inject = require('gulp-inject'),
	mainBowerFiles = require('gulp-main-bower-files');

gulp.task('copyBowerFilesToLibFolder', copyBowerFilesToLibFolder);
gulp.task('injectDependencies', ['copyBowerFilesToLibFolder'], injectDependencies);

gulp.task('default', ['copyBowerFilesToLibFolder', 'injectDependencies']);
//gulp.task('injectAngularApp', injectAngularApp);
//gulp.task('injectCss', injectCss);

function copyBowerFilesToLibFolder() {
	return gulp.src('./bower.json')
		.pipe(mainBowerFiles())
		.pipe(gulp.dest('./lib'));
}

function injectDependencies() {
	gulp.src('./index.html')
		.pipe(inject(gulp.src(['./lib/**/*',
			'./css/app.css',
			'./app.js',
			'./app.config.js',
			'./constants.js',
			'./**/*.module.js',
			'./**/*.config.js',
			'./**/services.js',
			'./**/*.service.js',
			'./**/directives.js',
			'./**/*.directive.js',
			'./**/filters.js',
			'./**/*.filter.js',
			'./**/*.controller.js'], { read: false })))
		.pipe(gulp.dest('./'));
}

function injectCss() {
	gulp.src('./index.html')
		.pipe(inject(gulp.src(['./css/app.css'], {read: false }), { name: 'custom' }))
		.pipe(gulp.dest('./'));
}