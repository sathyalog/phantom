
var phantom = require('phantom');
phantom.create(function (ph) {
                ph.createPage(function (page) {
                                page.open("http://www.sathyalog.wordpress.com", function (status) {
                                                console.log("opened page? ", status);
                                                
                                                // page.viewportSize = { width: 1024, height: 768 };
                                                // //the clipRect is the portion of the page you are taking a screenshot of
                                                // page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };
                                                // //the rest of the code is the same as the previous example
                                                page.evaluate(function () { return document.title; }, function (result) {
                                                                console.log('Page title is: ' + result);
                                                                page.render(result+'.png');
                                                                ph.exit();
                                                });
                                });
                });
}, {
                dnodeOpts: {
                                weak: false
                }
});