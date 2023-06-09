const mix = require('laravel-mix');
const config = require('./webpack.config');
require('laravel-mix-svg-sprite');

const RESOURCE_PUBLIC_PATH = 'assets';
const PUBLIC_ROOT_DIRECTORY = 'public';

const RESOURCE_ROOT_PREFIX = '';

mix
  .options({
    fileLoaderDirs: {
      images: `${RESOURCE_PUBLIC_PATH}/images`,
      fonts: `${RESOURCE_PUBLIC_PATH}/fonts`,
    },
  })
  .webpackConfig(config)
  .ts('assets/js/app.ts', `${RESOURCE_PUBLIC_PATH}/js`)
  .sass('assets/scss/app.scss', `${RESOURCE_PUBLIC_PATH}/css`)
  .setPublicPath(PUBLIC_ROOT_DIRECTORY)
  .setResourceRoot(RESOURCE_ROOT_PREFIX)
  .svgSprite(
    'assets/icons', // The directory containing your SVG files
    `${RESOURCE_PUBLIC_PATH}/sprite.svg` // The output path for the sprite
  )
  .version();

mix.babelConfig({
  presets: ['@babel/preset-env'],
});
