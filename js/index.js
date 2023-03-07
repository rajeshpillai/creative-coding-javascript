function render() {
  console.clear();

  const canvas = document.querySelector("#canvas");
  console.log(canvas);
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const text = "Canvasy!";
  const tx = canvas.width / 2;
  const ty = canvas.height / 2;

  // Draw vertical line
  ctx.lineWidth = 1;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke(); //IMP

  // Draw horizontal line
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke(); //IMP

  ctx.fillStyle = "red";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 1;

  ctx.font = "80px Helvetica";

  // For Horizontal position (along the axis)
  ctx.textAlign = "center";

  // For vertical position (along the axis)
  // bottom = ideographic,  hanging= top, middle
  ctx.textBaseline = "middle"; // BOttom of descenders like (p, q, y) touches the axis

  ctx.fillText(text, tx, ty);
  ctx.strokeText(text, tx, ty); // Outline
}

render();

window.addEventListener("resize", render);