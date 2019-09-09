const gulp = require('gulp');
const compilaSass = require ('gulp-sass')
const concat = require ('gulp-concat');

const entradaCss = ['src/scss/**/*.scss']
const destinoCss = ['./build/css']

gulp.task('compilarSass', () =>{
  return gulp
  .src(entradaCss)
  .pipe(compilaSass().on("error", sass.logError))
  .pipe(concat('app.css'))
  .pipe(gulp.dest(destinoCss))
})

gulp.task('monitorar', () =>{
  gulp.watch(entradaCss, gulp.parallel('compilarSass'))
})

gulp.task('default', gulp.parallel(['monitorar']),  () =>{})