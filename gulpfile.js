const gulp = require("gulp");
const pug = require("gulp-pug");

let src = {
  dev: {
    pug: "polymedia/src/pug/*.pug",
  },

  build: {
    html: "polymedia/build/",
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

    .pipe(gulp.dest(src.build.html));
});
