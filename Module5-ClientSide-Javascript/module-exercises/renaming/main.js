import * as Shapes from './shapes.js'
// create the canvas and reporting list
let myCanvas = Shapes.create('myCanvas', document.body, 480, 320);
let reportList = Shapes.createReportList(myCanvas.id);
// draw a square
let square1 = Shapes.drawSquare(myCanvas.ctx, 50, 50, 100, 'blue');
Shapes.reportSquareArea(square1.length, reportList);
Shapes.reportSquarePerimeter(square1.length, reportList);
// draw a circle
let circle1 = Shapes.drawCircle(myCanvas.ctx, 75, 200, 100, 'green');
Shapes.reportCircleArea(circle1.radius, reportList);
Shapes.reportCirclePerimeter(circle1.radius, reportList);
// draw a triangle
let triangle1 = Shapes.drawTriangle(myCanvas.ctx, 100, 75, 190, 'yellow');
Shapes.reportTriangleArea(triangle1.length, reportList);
Shapes.reportTrianglePerimeter(triangle1.length, reportList);
