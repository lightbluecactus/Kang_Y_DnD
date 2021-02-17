(() => {
	// set up the puzzle pieces and boards
	// put variables (connections to the web page / DOM) at the top

	// const is the same as let, but it cannot be redefined
	const puzzleSelectors = document.querySelectorAll ("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragZone = document.querySelector(".puzzle-pieces"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	function dragStart(event){
		console.log('started draggin');
		// take the dragged image and move it into the drop Zone
		// move it from the left container to the drop zone (reparent it)
		event.dataTransfer.setData("savedID", this.id);
		}

	function draggedOver(event){
		event.preventDefault();
		console.log('dragged over me');

		// allow an element to be dragged over and then dropped
	}

	function dropped(event){
		// override the browser / element's default behavior, and do what i say
		event.preventDefault();

		//check to see if there's an element here already, if so, kill this function
		if (this.childElementCount > 0) {return; } //to exit function
		// same as 	if (this.childNodes.length > 0) {return; }

		let targetID = event.dataTransfer.getData("savedID");
		console.log("i dragged this image:", targetID);
		// put the dragged image into this container
		event.target.appendChild(document.querySelector(`#${targetID}`));
	}


	// this function runs when the bottom nav bottons are clicked
	// it changes the bg image of the drop zone div when click on the small image below
	function changeBGImage() {
		// 1. check all the drop zones
		// 2. if a drop zone has an img in it, then it needs to go back where it came from
		// 3. append it back into the drag Zone
		dropZones.forEach(zone => {
			if (zone.childElementCount > 0){
				dragZone.appendChild(zone.firstElementChild);
			}
		})

		// get the custom data attribute from the clicked button
		let currentImage = this.dataset.imageref;
		// `` is NOT a quote. it's a JS templete string
		dropZoneContainer.style.backgroundImage = `url(images/backGround${currentImage}.jpg)`;
		// another way (do not need "let imageRef =" line )
		//dropZoneContainer.style.backgroundImage = `url(images/backGround${this.dataset.imageref}.jpg)`;
		// debugger;
	}

	// event handling at the bottom
	puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));

	dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));

	dropZones.forEach(zone =>{
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", dropped);
	})

	// emulate a click on the first botton and run the bg img function
	changeBGImage.call(puzzleSelectors[0]);

})();
