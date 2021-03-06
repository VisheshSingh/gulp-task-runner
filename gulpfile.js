const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
-- TOP LEVEL FUNCTIONS

gulp.task - define tasks
gulp.src - Point to files to use
gulp.dest - Points to folder to output
gulp.watch - watch files and folder for changes

*/

// LOGS MESSAGE
gulp.task('message', () => {
    return console.log('Gulp is running...');
})

gulp.task('default', ['message', 'copyHTML', 'imagemin', 'sass', 'scripts']
)

//COPY ALL HTML FILES
gulp.task('copyHTML', ()=>{
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
})

//OPTIMIZE IMAGES
gulp.task('imagemin', () =>{
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
})

//OPTIMIZING JS
gulp.task('minify', ()=>{
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

//COMPILE SASS
gulp.task('sass', ()=>{
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
})

//SCRIPTS
gulp.task('scripts', ()=>{
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

//GULP WATCH
gulp.task('watch', ()=>{
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*.js', ['imagemin']);
    gulp.watch('src/sass/*.js', ['sass']);
    gulp.watch('src/*.html', ['copyHTML']);
})