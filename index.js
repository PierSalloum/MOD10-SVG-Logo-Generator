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
  },
  console.log('Logo saved to logo.svg')
  (err, result) => {
    if (err) {
      console.error(err)
      return
    }

    let shape
    if (result.shape === 'circle') {
      shape = new Circle(result.shapeColor)
    }
    else {
      console.error('Unsupported shape:', result.shape)
      return
    }

    const svg = svgdom.createSVGDocument()
    const shapeElement = svg.createElement(shape.render())
    svg.appendChild(shapeElement)
    const svgString = svg.serialize()

    fs.writeFile('logo.svg', svgString, err => {
      if (err) {
        console.error(err)
        return
      }

      console.log('Logo saved to logo.svg')
    })
  }
)
