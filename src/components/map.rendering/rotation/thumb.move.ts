export const thumbMove = (event: any, cx: number, cy: number, radius: number) => {
  const boundingRect = event.currentTarget.getBoundingClientRect();
  const containerCenterX = boundingRect.left + boundingRect.width / 2;
  const containerCenterY = boundingRect.top + boundingRect.height / 2;

  const mouseX = event.clientX - containerCenterX;
  const mouseY = event.clientY - containerCenterY;

  // Calculate the angle between the center of the track and the mouse position
  let angle = Math.atan2(mouseY, mouseX);

  // Calculate the new thumb position using the angle and radius
  const x = cx + Math.cos(angle) * radius;
  const y = cy + Math.sin(angle) * radius;

  // Compute rotation angle for the map
  let degrees = (angle * 180) / Math.PI;

  // Adjust the angle to be between 0 and 360
  if (degrees < 0) {
    degrees = 360 + degrees;
  }

  // Adjust the angle by 90 degrees to make 0 start at the top (north)
  degrees += 90;
  if (degrees >= 360) {
    degrees -= 360;
  }

  return { x, y, degrees };
};
