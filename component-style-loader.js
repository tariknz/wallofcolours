
/*
 * This is a custom loader for getting css content into raw content to be used
 * in an Angular component. It's sort of a hack for dealing with the css-loader.
 * Ideally we would like to go straight from the less-loader into the raw-loader,
 * but because the less-loader doesn't support loading url() image paths, we need
 * to first go through the css-loader, and then extract out the raw css into an
 * export statement.
 *
 * This loader should be called in a chain in front of the css-loader.
 * Example:
 *   component-style-loader!css-loader!less-loader
 *
 * This loader is designed to be used by Angular components.
 * Example:
 *   @Component({
 *     selector: '...',
 *     template: '...',
 *     styles: [ require('./style.less') ],
 *   })
 */
module.exports = function(content) {

    var prefix = 'exports.push([module.id, "';
    var postfix = '", ""]);';
    var css = '';

    // Split on line break and look for actual css content
    content.split('\n').forEach(function(line) {
        if (line.startsWith(prefix)) {

            var i = line.indexOf(postfix);

            // Find css content
            var content = line.slice(prefix.length, i);

            // Replace returns
            css += content.replace(/(\\n|\\r)/g, '');
        }
    });

    // Wrap in module export
    css = 'module.exports = "' + css + '";'

    // Return the css module
    return css;
};
