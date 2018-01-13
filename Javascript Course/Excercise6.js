/*function triangleArea(base, height) {
   return base * height / 2;
}

var traingle1 = triangleArea(5, 6);

console.log(traingle1 + " is the triangle area");*/

/*function circleArea(radius) {
    return (radius * radius) * Math.PI ;
}

var circle1 = circleArea(50);

console.log(circle1);*/

/*function shapeArea(base, height, width, radius) {
    if (base >= 1 && height >=1 && width ==0 && radius ==0) {
        return base * height / 2 + " This is the area of a triangle";
    }
    else if (base ==0 && height ==0 && width ===0 && radius >=1) {
        return (radius * radius) * Math.PI + " This is the area of a cricle";
    }
    else if (base ==0 && height >=1 && width >=1 && radius ==0) {
        return height * width + " This is the area of a rectangle";
    }
    else {
        return "Shape Undefine!"
    }
}
var ex1 = shapeArea(0,0,0,0);
console.log(ex1); */

function shapeArea(shape, x, y){
    if (shape == "triangle" || shape == "Triangle"){
        return x * y /2 + " is the area of this Triangle";
    }
    else if (shape == "circle" || shape =="Circle") {
        return (x * x) * Math.PI + " is the area of this Circle";
    }
    else if (shape == "rectangle" || shape == "Rectangle") {
        return x * y + " is the area of this Rectangle";
    }
    else {
        return "Undefine Shape";
    }
}
console.log(shapeArea("triangle",5,6));
console.log(shapeArea("Triangle",5,6));
console.log(shapeArea("circle",5));
console.log(shapeArea("square",5,6));
console.log(shapeArea("rectangle",9,9));
