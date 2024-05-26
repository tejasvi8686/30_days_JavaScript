// Create a JavaScript Function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. : Area = Square root of√s(s - a)(s - b)(s - c) where s is half the perimeter, or (a + b + c)/2.

// input: area_of_triangle(5, 6, 7);

// output: 14.69;

function areaOfTriangle(a, b, c) {
 let  s = (a + b + c) / 2;

 let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

 return area.toFixed(2);
}

console.log(areaOfTriangle(5, 6, 7));
