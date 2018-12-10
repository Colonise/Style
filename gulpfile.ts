import browserSync from 'browser-sync';
import gulp from 'gulp';
import gulpSass from 'gulp-sass';

gulp.task('build', () => {
    return gulp
        .src('src/**/*.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest('build'))
        .pipe(
            browserSync.reload({
                stream: true
            })
        );
});

gulp.task('html', () => {
    return gulp
        .src('src/**/*.html')
        .pipe(gulp.dest('build'))
        .pipe(
            browserSync.reload({
                stream: true
            })
        );
});

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: 'build'
        }
    });

    gulp.watch('src/**/*.scss', gulp.series('build'));
    gulp.watch('src/**/*.html', gulp.series('html'));
});
