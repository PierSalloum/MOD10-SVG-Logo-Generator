class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error('render method not implemented');
  }
}

class Triangle extends Shape {
  render() {
    return `<svg height="100" width="100">
      <polygon points="50,0 0,100 100,100" style="fill:${this.color};stroke-width:1;stroke:black" />
    </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg height="100" width="100">
      <circle cx="50" cy="50" r="50" style="fill:${this.color};stroke-width:1;stroke:black" />
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg height="100" width="100">
      <rect x="0" y="0" width="100" height="100" style="fill:${this.color};stroke-width:1;stroke:black" />
    </svg>`;
  }
}

module.exports = { Triangle, Square, Circle };
