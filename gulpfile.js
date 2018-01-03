const exec = require('child_process').exec;
const gulp = require('gulp');
const Server = require('karma').Server;

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();
});

gulp.task('build', cb => {
  exec('ng build --prod', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('start', cb => {
  exec('ng serve', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// gulp.task('test', cb => {
//   exec('ng test', (err, stdout, stderr) => {
//     console.log(stdout);
//     console.log(stderr);
//     cb(err);
//   });
// });