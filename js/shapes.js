/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */

function Rectangle (left, top, width, height, stylesMap) {
    this.left = left;
    this.top = top;
    this.width = width;
    this. height = height;
    this.stylesMap = stylesMap;

    this.renderShape = function(canvasCtx) {
        return canvasCtx.fillRect(this.left, this.top, this.width, this.height, this.stylesMap);
    };
}
Rectangle.prototype = new Shape();
registerClassicalShape('Rectangle', Rectangle);

function Circle (left, top, width, height, stylesMap) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.stylesMap = stylesMap;

    this.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc(this.left, this.top, this.height, 0, 2*Math.PI, this.stylesMap);
        return canvasCtx.fill();
    };
}
Circle.prototype = new Shape();
registerClassicalShape('Circle', Circle);

function Text (left, top, width, height, stylesMap) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.stylesMap = stylesMap;

    this.renderShape = function(canvasCtx) {
        var c = document.getElementById('shapes-canvas');
        canvasCtx.font="30px Georgia";
        canvasCtx.fillText("Big smile!",320,220);

        canvasCtx.font="30px Verdana";
        // Create gradient
        var gradient=canvasCtx.createLinearGradient(0,0,c.width,0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("1.0","red");
        // Fill with gradient
        canvasCtx.fillStyle=gradient;
        canvasCtx.fillText("Hello World",300,280)
    };
}

Text.prototype = new Shape();
registerClassicalShape('Text', Text);

