var gulp = require("gulp");
var bower = require("gulp-bower");
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');
var minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');




gulp.task("clean",function(){
    return gulp.src(['./dist/js','./dist/css','./dist/images'])
        .pipe(clean())
});

gulp.task("bower",function(){
     bower('./bower_components')
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('js',function(){
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('image',function(){
    gulp.src('./src/images/*')
        .pipe(imagemin({
            progressive:true,
            optimizationLevel:5,
            use:[pngquant()]
        }))
        .pipe(gulp.dest('./dist/images'))
});

gulp.task('css',function(){
    gulp.src('./src/css/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist/css'))
        .pipe(rename({suffix:'.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('default',['clean'],function(){
    gulp.start('bower','css','js','image')
});

gulp.task('watch',function(){
    gulp.watch('./src/css/*.styl',function(){
        gulp.run('css')
    });
    gulp.watch('./src/images/**/*',function(){
        gulp.run('image')
    });
    gulp.watch('./src/js/*.js',function(){
        gulp.run('js')
    });
});