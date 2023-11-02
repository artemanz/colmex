import gulp from "gulp";
import newer from "gulp-newer";
import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import { resolve } from "path";

const { src, dest, watch, task, series } = gulp;

const input = {
  images: resolve("assets/src/images"),
};
const output = {
  images: resolve("assets/dist/images"),
  webp: resolve("assets/dist/images/webp"),
};

function toWebp() {
  return src(resolve(input.images, "**/*"))
    .pipe(newer(output.webp))
    .pipe(webp())
    .pipe(dest(output.webp));
}

function images() {
  return src(resolve(input.images, "**/*"))
    .pipe(newer(output.images))
    .pipe(imagemin())
    .pipe(dest(output.images));
}

function watcher() {
  watch(input.images, images);
  watch(input.images, toWebp);
}

task("default", series(toWebp, images, watcher));
task("build", series(toWebp, images));
