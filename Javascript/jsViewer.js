//Global variable for mouse position
var mouseDownPos;

function startUp() {
    loadParts(0);
    //var slider1Elem = document.querySelector("#slider1");
    //document.body.appendChild(slider1Elem);
    //var divContent = document.getElementById("divContent");
    //console.log(divContent.scrollWidth);
    //var partsTable = document.getElementById("partsTable");
    //partsTable.rows[1].classList.remove("partsDivHidden");
    //topTocElem.rows.selected = 1;
    //console.log(topTocElem.rows.selected);
}

//slider1.onmousedown = function(e) {
//    console.log("Hi");
//}

function slider1MouseDown(e) {
    var elem = document.querySelector("#slider1");
    mouseDownPos = getMousePos(e, elem);        
    document.addEventListener("mousemove", slider1MouseMove);    
    document.addEventListener("mouseup", slider1MouseUp);
}

function slider1MouseUp(e) {
    document.removeEventListener("mousemove", slider1MouseMove);   
    document.removeEventListener("mouseup", slider1MouseUp);
}

function slider1MouseMove(e) {
    //e.preventDefault();
    var elem = document.querySelector("#slider1");
    var currentMousePos = getMousePos(e, elem)    
    var left = Number(elem.style.left.substr(0, elem.style.left.length -2));
    var diff = currentMousePos.x - mouseDownPos.x;
    var newLeft = left + diff;
    elem.style.left = newLeft + "px";
    var tocDiv = document.querySelector(".tocDiv");
    var newWidth = Number(tocDiv.style.width.substr(0, tocDiv.style.width.length - 2)) + diff;
    tocDiv.style.width = newWidth + "px";
    var imgDiv = document.querySelector("#divImgContainer");
    var imgLeft = Number(imgDiv.style.left.substr(0, imgDiv.style.left.length -2));
    imgDiv.style.left = imgLeft + diff + "px";
    var newImgWidth = Number(imgDiv.style.width.substr(0, imgDiv.style.width.length - 2)) - diff;   
    imgDiv.style.width = newImgWidth + "px";
}

function slider2MouseDown(e) {
    var elem = document.querySelector("#slider2");
    mouseDownPos = getMousePos(e, elem);        
    document.addEventListener("mousemove", slider2MouseMove);    
    document.addEventListener("mouseup", slider2MouseUp);
}

function slider2MouseUp(e) {
    document.removeEventListener("mousemove", slider2MouseMove);   
    document.removeEventListener("mouseup", slider2MouseUp);
}

function slider2MouseMove(e) {
    //e.preventDefault();
    var elem = document.querySelector("#slider2");
    var currentMousePos = getMousePos(e, elem)    
    var left = Number(elem.style.left.substr(0, elem.style.left.length -2));
    var diff = currentMousePos.x - mouseDownPos.x;
    var newLeft = left + diff;
    elem.style.left = newLeft + "px";
    var tocDiv = document.querySelector("#divImgContainer");
    var newWidth = Number(tocDiv.style.width.substr(0, tocDiv.style.width.length - 2)) + diff;
    tocDiv.style.width = newWidth + "px";
    var imgDiv = document.querySelector("#divPartsContainer");
    var imgLeft = Number(imgDiv.style.left.substr(0, imgDiv.style.left.length -2));
    imgDiv.style.left = imgLeft + diff + "px";
    //var newImgWidth = Number(imgDiv.style.width.substr(0, imgDiv.style.width.length - 2)) - diff;   
    //imgDiv.style.width = newImgWidth + "px";
}

function getMousePos(e, elem) {
    var a, x = 0, y = 0, z = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = elem.getBoundingClientRect();
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