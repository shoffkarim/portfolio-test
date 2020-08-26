const gulp = require("gulp");

const pug = require("gulp-pug");

const sass = require("gulp-sass");

let src = {
  dev: {
    pug: "waxom/dev/pug/*.pug",

    sass: "waxom/dev/sass/*.sass",

    js: "waxom/dev/js/*.js",
  },

  prod: {
    html: "waxom/prod/",

    css: "waxom/prod/css/",

    js: "waxom/prod/js/",
  },
};

gulp.task("pug", function () {
  return gulp

    .src(src.dev.pug)

    .pipe(
      pug({
        pretty: true,
      })
    )

    .pipe(gulp.dest(src.prod.html));
});

gulp.task("sass", function () {
  return gulp

    .src(src.dev.sass)

    .pipe(sass().on("error", sass.logError))

    .pipe(gulp.dest(src.prod.css));
});
