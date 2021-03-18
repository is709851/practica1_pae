let gulp = require('gulp');
let sass = require('gulp-sass')
let typescript = require('gulp-typescript')
//EJECUTA LAS TAREAS EN UN ORDEN
gulp.task('html', function(){
    return gulp.src('src/index.html') //Origen
    .pipe(gulp.dest('dist')); //Destino
});

//Función para transformar mis estilos con SASS
// Utilizando gulp-sass
gulp.task('styles', function(){
   return gulp.src('src/**/*.scss') //Donde estan
   .pipe(sass()) //Transformar
   .pipe(gulp.dest('dist/assets/styles'));
});

gulp.task('watch:styles', gulp.series('styles', function(done){
    gulp.watch('src/**/*.scss', gulp.series('styles'));
    done();
}))
//Tarea para el typescript
gulp.task('scripts', function(){
    let tsConfig = typescript.createProject('tsconfig.json');
    return tsConfig.src() //Origen
    .pipe(tsConfig()) //Transformacion especificada en config
    .pipe(gulp.dest('dist/assets/scripts')); //Destino
});

//Primero se registran las tareas y después el default
gulp.task('default', gulp.parallel(('styles', 'html', 'scripts')));


