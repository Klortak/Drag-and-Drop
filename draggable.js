var drop = document.getElementById("drop-zone");
var drag = document.getElementById("draggable");

dragElement(drag);

function dragElement(ele) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  ele.onmousedown = mouseDown

  function mouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    // Get mouse position on startup
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeElement;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();

    // Calculate new position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Set new pos
    ele.style.left = (ele.offsetLeft - pos1) + "px";
    ele.style.top = (ele.offsetTop - pos2) + "px";
    touches(drop, drag, true);
  }

  function closeElement() {
    // Resets the mouse functions when mouse buton is released
    document.onmouseup = null;
    document.onmousemove = null;
    touches(drop, drag, false);
  }
}

function touches(ele1, ele2, moving) {
  a = ele1.getBoundingClientRect();
  b = ele2.getBoundingClientRect();

  if (((a.y + a.height) < (b.y)) ||
  (a.y > (b.y + b.height)) ||
  ((a.x + a.width) < b.x) ||
  (a.x > (b.x + b.width))) {
     console.log("not touching") 
    } else {
      console.log("touching")
    }
}
