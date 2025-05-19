class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.acceleration = 0.2;
    this.maxSpeed = 5;
    this.friction = 0.05;
    this.angle = 0;
    this.controls = {
      left: false,
      right: false,
      gas: false,
      brake: false,
    };
  }

  update() {
    if (this.controls.gas) this.speed += this.acceleration;
    if (this.controls.brake) this.speed -= this.acceleration;

    if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
    if (this.speed < -this.maxSpeed / 2) this.speed = -this.maxSpeed / 2;

    if (this.speed > 0) this.speed -= this.friction;
    if (this.speed < 0) this.speed += this.friction;
    if (Math.abs(this.speed) < this.friction) this.speed = 0;

    if (this.controls.left) this.x -= 2;
    if (this.controls.right) this.x += 2;

    this.y -= this.speed;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillStyle = "#e74c3c";
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.restore();
  }
}
