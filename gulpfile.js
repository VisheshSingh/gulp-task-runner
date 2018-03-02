const gulp = require('gulp');

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

gulp.task('default', () => {
    return console.log('Default: Gulp is running...');
})