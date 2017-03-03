neimoe theme for ghost


1. Make sure you have [Node.js](http://nodejs.org), [Bower](http://bower.io) and [Gulp](gulpjs.com) installed on your system.
2. Copy theme folder to Ghost themes directory `/content/themes`. Open your terminal and make the theme's folder your current working directory.
3. Run `bower install` to install package dependencies.
4. Run `npm install` to install Gulp components.
5. Restart Ghost and switch the theme to use `moe` in the Ghost's Settings.
7. Make your changes by updating `/sass/*`, `/assets/*`, and `*.hbs` files of the theme.
6. Run `gulp watch` to start watching for file changes or run `gulp` to build your latest changes.
7. If you have new images for the theme, just place them inside `image_sources` folder and Gulp will handle the optimisation automatically and store the optimised version inside `assets/images/`.
8. Update the social media icon links by updating `partials/social.hbs`.
9. Update gravatar by updating URL in `partials/gravatar.hbs`.

