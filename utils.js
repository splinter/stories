var fs = require('fs');
var YAML = require('yamljs');
exports.loadStories = function() {
    var content;
    var parsedContent;
    var stories = [];
    var files = fs.readdirSync('./stories', {
        encoding: 'UTF-8'
    });
    files.forEach(function(file) {
        content = fs.readFileSync('./stories/' + file, {
            encoding: 'UTF-8'
        });       
        parsedContent = YAML.parse(content);
        parsedContent.date = file.split('.')[0];
        stories.push(parsedContent);
        console.log(parsedContent);
    });
    return stories;
};
exports.watchStories = function() {};
