function magnify(imgID) {
    $(".img-magnifier-glass").remove();
    var img, glass, w, h, bw, zoom;
    zoom = 5;
    img = document.getElementById(imgID.id);
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("onmouseout", "stopMagnify()");
    glass.setAttribute("ondblclick", "stopMagnify()")
    glass.setAttribute("class", "img-magnifier-glass");
    //glass.setAttribute("style", "zIndex: 10;");
    glass.style.zIndex = 10;
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + imgID.src + "')";
    //glass.style.backgroundImage = "url(" + imgID.src + ")";
    //glass.style.backgroundImage = "imgID.src";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y + pos.z;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height + pos.z - (h / zoom)) {y = img.height + pos.z - (h / zoom);}
      if (y < pos.z - (h / zoom)) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + (((y - pos.z) * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0, z = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;      
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      if(a.y > y) {
        z = a.y;
      }
      else {
          z = 0;
      }
      
      return {x : x, y : y, z : z};
    }
  }

  function stopMagnify() {     
      $(".img-magnifier-glass").remove();
  }