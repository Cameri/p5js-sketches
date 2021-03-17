let drawAnchors = true
let drawSize = true
let drawPosition = true
let screenWidth = 600
let screenHeight = 800
let viewportWidth = 400
let viewportHeight = 600
let viewport
let planet

function setup() {
  createCanvas(screenWidth, screenHeight)
  
  viewport = new Rectangle(100, 100, viewportWidth, viewportHeight)
  planet = new Circle(300, 700, 300)
  mountain = new Triangle(100, 100, 150, 150, 100, 150)
}

function draw() {
  background(220)
  
  
  viewport.draw(color(100,50,50))
  planet.draw(color(10,100,20))
  mountain.draw(color(10,10,100))
}

class Shape2D {
  constructor(x, y, w, h, e1, e2) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
  
  draw() {
    if (drawAnchors) {
      strokeWeight(1)
      stroke(color(0, 0, 0))
      noFill()
      ellipse(this.x, this.y, 16)
      line(this.x - 8, this.y, this.x + 8, this.y)
      line(this.x, this.y - 8, this.x, this.y + 8)
    }
  }
}


class Rectangle extends Shape2D {
  constructor(x,y,w,h) {
    super(x, y, w, h)
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
  
  draw(strokeColor, fillColor) {
    super.draw()
    blendMode(SCREEN)
    if (strokeColor !== undefined) {
      strokeWeight(1)
      stroke(strokeColor)
    } else {
      noStroke()
    }
    
    if (fillColor !== undefined) {
      fill(fillColor)
    } else {
      noFill()
    }

    blendMode(BLEND)
    
    rect(this.x, this.y, this.w, this.h)
    
    let drawTexts = []
    
    if (drawPosition) {
      drawTexts.push(`x: ${this.x} y: ${this.y}`)
    }
    
    if (drawSize) {
      drawTexts.push(`w: ${this.w} h: ${this.h}`)
    }
    
    if (drawTexts.length) {
      textSize(10)
      fill(color(0,0,0))
      for (let i = 0; i < drawTexts.length; i++) {
        text(drawTexts[i], this.x + 16, this.y + 16 + i * 10)
      }
    }
  }
}

class Circle extends Shape2D {
  constructor(x, y, r) {
    super(x, y, r*2, r*2)
    this.x = x
    this.y = y
    this.r = r
  }
  
  draw(strokeColor, fillColor) {
    super.draw()
    ellipseMode(CENTER);
    if (strokeColor !== undefined) {
      strokeWeight(1)
      stroke(strokeColor)
    } else {
      noStroke()
    }
    
    if (fillColor !== undefined) {      
      fill(255);
    } else {
      noFill();
    }
    
    
    blendMode(BLEND)
    
    ellipse(
      this.x,
      this.y,
      this.r
    )
    
   let drawTexts = []
    
    if (drawPosition) {
      drawTexts.push(`x: ${this.x} y: ${this.y}`)
    }
    
    if (drawSize) {
      drawTexts.push(`w: ${this.w} h: ${this.h}`)
    }
    
    if (drawTexts.length) {
      textSize(10)
      fill(color(0,0,0))
      for (let i = 0; i < drawTexts.length; i++) {
        text(drawTexts[i], this.x + 16, this.y + 16 + i * 10)
      }
    }
  }
}

class Triangle extends Shape2D {
  constructor(x1, y1, x2, y2, x3, y3) {
    super(x1, y1)
    this.x = x1
  }
  
  draw() {
    super.draw()
    
    triangle()
  }
}
