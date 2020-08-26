# Travel Site
A ficticious website for a travel agency.
## About
This project is a prototype of a standard web application. 
It is meant to serve as a model for future application.
It is built with:
- The VueJS Framework
- Webpack
- Bootstrap 
- PostCSS
- BabelJS

It features:
- CSS Architecture
- JavaScript Architecture
- Mobile Design
- Image Optimization
## Development Notes 
- Clone the repository
- Install the packages
- Run the `make` script to begin watching for changes to the codebase.
- Run the `dev` script to display the app in the browser.

## Production Notes

### Remove the script tag
---
Remove the script tag from the `index.html` file before running the `build` script.
Later, in the `dist` directory, the CSS and JavaScript files will be added automatically.

### Adjust the index.html file 
---
You will need to adjust the `index.html` file in the `dist` directory.
- Add `<div id="app></div>` within the body tag otherwise, the content will not display
- Adjust the relative paths to the CSS and JavaScript files.
- Update the title of the page.

