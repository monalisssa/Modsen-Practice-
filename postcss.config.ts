import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';

module.exports = {
  plugins: ['postcss-preset-env', tailwindcss, cssnano],
};
