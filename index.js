//setting up modules
const fs = require("fs")
const prompt = require("prompt")
const svgdom = require("svgdom")
//using prompt to get values and generate custom logo
prompt.get(
  {
    properties: {
      logoText: {
        description: 'Enter any 3 characters to use in your logo',
        required: true
      },
      textColor: {
        description: 'Enter the color for your text (name of color, or hexadecimal value)',
        required: true
      },
      shape: {
        description: 'Choose your desired shape (circle, triangle, or square)',
        pattern: /^(circle|triangle|square)$/,
        message: 'Available options: circle, triangle, square',
        required: true
      },
      shapeColor: {
        description: 'Enter the color for your shape (name of color, or hexadecimal value)',
        required: true
      },
    }
  })

// prompt user {
//   desired Text to generate (up to 3 characters)
//   text color (enter color keyword, or hexadecimal)
//   desired shape (list of: circle, triangle, and square)
//   color of the shape
//   GENERATES SVG FILE named logo.svg 
//   console.log generated logo 
//   pic size 300x200
// }
