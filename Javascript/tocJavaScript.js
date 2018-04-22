function tocTogglePlusMinus(collapseChildrenEL) {
  var elemImgs = collapseChildrenEL.getElementsByTagName("img");
  if(elemImgs[0].className === "tocElemHidden") {
    elemImgs[0].classList.remove("tocElemHidden");
    elemImgs[1].classList.add("tocElemHidden");
    collapseChildren(collapseChildrenEL);
  }
  else {
    elemImgs[1].classList.remove("tocElemHidden");
    elemImgs[0].classList.add("tocElemHidden");
    expandChildren(collapseChildrenEL);
  }
}

function tocTogglePlus(tocTogglePlusEl) {
    try
    {
        var elem = tocTogglePlusEl.children[0].children[1].children;
        for(tocTogglePlusi = 0; tocTogglePlusi < elem.length; tocTogglePlusi++) {
            //console.log(elem[tocTogglePlusi].getAttribute("src"));
            if(elem[tocTogglePlusi].getAttribute("src") === "../../Images/TreePlus.gif") {
                elem[tocTogglePlusi].classList.remove("tocElemHidden");
            }
            if(elem[tocTogglePlusi].getAttribute("src") === "../../Images/TreeMinus.gif") {
             elem[tocTogglePlusi].classList.add("tocElemHidden");
            }
            if(elem[tocTogglePlusi].getAttribute("src") === "../../Images/FolderOpening.gif") {
               elem[tocTogglePlusi].classList.add("tocElemHidden");
            }
        }
    }
    catch(err){}
  }

  function tocToggleMinus(tocToggleMinusEl) {
    try
    {
        /*var elem = tocToggleMinusEl.children[0].children[1].children;
        for(tocToggleMinusi = 0; tocToggleMinusi < elem.length; tocToggleMinusi++) {
            //console.log(elem[tocToggleMinusi].getAttribute("src"));
            if(elem[tocToggleMinusi].getAttribute("src") === "../../Images/TreePlus.gif") {
                elem[tocToggleMinusi].classList.add("tocElemHidden");
            }
            if(elem[tocToggleMinusi].getAttribute("src") === "../../Images/TreeMinus.gif") {
             elem[tocToggleMinusi].classList.add("tocElemHidden");
            }
            if(elem[tocToggleMinusi].getAttribute("src") === "../../Images/FolderOpening.gif") {
               elem[tocToggleMinusi].classList.add("tocElemHidden");
            }
        }*/
        tocToggleMinusEl.classList.add("tocElemHidden");
    }
    catch(err){}
  }

function expandChildren(expandChildrenEl) {
  var father = expandChildrenEl.parentElement;
  var grandParent = expandChildrenEl.parentElement.parentElement;
  var greatGreatGrandParent = expandChildrenEl.parentElement.parentElement.parentElement.parentElement;
  var rowCount = Number(grandParent.id.substr(3));
  var fatherRowImgs = father.firstElementChild.firstElementChild.getElementsByTagName("img");
  var currentRowImgs;
  for(expandChildrenI = 0; expandChildrenI < greatGreatGrandParent.rows.length; expandChildrenI++) {
    if(expandChildrenI > rowCount) {      
      currentRowImgs = greatGreatGrandParent.rows[expandChildrenI].firstElementChild.firstElementChild.getElementsByTagName("img");
      if(currentRowImgs.length === fatherRowImgs.length + 1) {
        greatGreatGrandParent.rows[expandChildrenI].classList.remove("tocElemHidden");
      }      
      if(currentRowImgs.length <= fatherRowImgs.length) {
        break;
      }
      tocTogglePlus(greatGreatGrandParent.rows[expandChildrenI]);
    }
  }
}

function collapseChildren(collapseChildrenEl) {
    var father = collapseChildrenEl.parentElement;
    var grandParent = collapseChildrenEl.parentElement.parentElement;
    var greatGreatGrandParent = collapseChildrenEl.parentElement.parentElement.parentElement.parentElement;
    var rowCount = Number(grandParent.id.substr(3));
    var fatherRowImgs = father.firstElementChild.firstElementChild.getElementsByTagName("img");
    var currentRowImgs;
    for(collapseChildrenI = 0; collapseChildrenI < greatGreatGrandParent.rows.length; collapseChildrenI++) {
      if(collapseChildrenI > rowCount) {
        //console.log(greatGreatGrandParent.rows[collapseChildrenI].firstElementChild.firstElementChild.firstElementChild);
        currentRowImgs = greatGreatGrandParent.rows[collapseChildrenI].firstElementChild.firstElementChild.getElementsByTagName("img");
        if(currentRowImgs.length === fatherRowImgs.length + 1) {
          greatGreatGrandParent.rows[collapseChildrenI].classList.add("tocElemHidden");
        }
        if(currentRowImgs.length <= fatherRowImgs.length) {
          break;
        }
        tocToggleMinus(greatGreatGrandParent.rows[collapseChildrenI]);
      }
    }
    //grandParent.classList.add("tocElemHidden");
  }

  //function loadImage(loadImageA) {
  //  var father = loadImageA.parentElement;
  //  var grandParent = loadImageA.parentElement.parentElement;
  //  var grandParentIdNo = Number(grandParent.id.substr(3) - 1);
  //  var imgDivContainer = document.getElementById("divImgContainer")
  //  var imgDivContainerDivs = imgDivContainer.getElementsByTagName("div");
  //  for(loadImageI = 0; loadImageI < imgDivContainerDivs.length; loadImageI++) {
  //    imgDivContainerDivs[loadImageI].classList.add("imgDivHidden")
  //  }
  //  var imgToMakeCurrent = document.getElementById("divImg" + grandParentIdNo)
  //  imgToMakeCurrent.classList.remove("imgDivHidden")
  //}

  function loadImage(loadImageA) {
    var father = loadImageA.parentElement;
    var grandParent = loadImageA.parentElement.parentElement;
    var greatGrandParent = loadImageA.parentElement.parentElement.parentElement;
    var loadImageTocTable = document.getElementById("tocTable")
    for(loadImageAZ = 0; loadImageAZ < loadImageTocTable.rows.length; loadImageAZ++) {
      loadImageTocTable.rows[loadImageAZ].classList.remove("tocSelected");
    }
    grandParent.classList.add("tocSelected");
    var grandParentIdNo = Number(grandParent.id.substr(3) - 1);    
    var imgDivContainer = document.getElementById("divImgContainer")
    var imgDivContainerDivs = imgDivContainer.getElementsByTagName("div");
    for(loadImageI = 0; loadImageI < imgDivContainerDivs.length; loadImageI++) {
      if(imgDivContainerDivs[loadImageI].id.substr(0, 6) == "divImg") {
        imgDivContainerDivs[loadImageI].classList.add("imgDivHidden")
      }      
    }
    if(grandParentIdNo !== 0) {
      var imgToMakeCurrent = document.getElementById("divImg" + grandParentIdNo)
      imgToMakeCurrent.classList.remove("imgDivHidden")
    } 
    
    if(imgToMakeCurrent != undefined)
    {
    if(imgToMakeCurrent.getElementsByTagName("img").length === 0) {    
    // get all the span elements to convert them to img elements.
      var loadImageSpans = imgToMakeCurrent.getElementsByTagName("span");
      var loadImageSpansImg;
      for(loadImageI = 0; loadImageI < loadImageSpans.length; loadImageI++) {
          loadImageSpansImg = document.createElement("img");
          loadImageSpansImg.id = loadImageSpans[loadImageI].id;
          loadImageSpansImg.classList = loadImageSpans[loadImageI].classList;
          loadImageSpansImg.setAttribute("ondblclick", loadImageSpans[loadImageI].getAttribute("ondblclick"));
          loadImageSpansImg.setAttribute("src", loadImageSpans[loadImageI].getAttribute("src"));
          imgToMakeCurrent.insertBefore(loadImageSpansImg, imgToMakeCurrent.children[loadImageI]);
          //$(loadImageSpansImg).insertAfter(father.children[father.children.length]);
      }
    }
    loadParts(grandParentIdNo);
  }
}

function loadParts(grandParentIdNo) {
var partsDivContainer = document.getElementById("divPartsContainer")
    var partsDivContainerDivs = partsDivContainer.getElementsByTagName("tr");
    for(loadImageI = 0; loadImageI < partsDivContainerDivs.length; loadImageI++) {
      if(partsDivContainerDivs[loadImageI].id.substr(0, 8) == "divParts") {
        partsDivContainerDivs[loadImageI].classList.add("partsDivHidden")
      }      
    }
       
    //var partToMakeCurrent = document.getElementById("divParts" + grandParentIdNo)
    //partToMakeCurrent.classList.remove("partsDivHidden")
    var partsTable = document.getElementById("partsTable");
    for(partsTableI = 0; partsTableI < partsTable.rows.length; partsTableI++) {
      if(Number(partsTable.rows[partsTableI].id.substr(8)) == grandParentIdNo) {
        partsTable.rows[partsTableI].classList.remove("partsDivHidden");
      }
    }
  }

  //function to highlight toc items when mouse over
  function tocMouseOver(tocMouseOverElem) {
    tocMouseOverElem.classList.add("tocMouseOver");
  }

  //function to UNhighlight toc items when mouse out
  function tocMouseOut(tocMouseOverElem) {
    tocMouseOverElem.classList.remove("tocMouseOver");
  }