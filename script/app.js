(() => {
	// set up the puzzle pieces and boards
	// put variables (connections to the web page / DOM) at the top

	// const is the same as let, but it cannot be redefined
	const puzzleSelectors = document.querySelectorAll ("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board");

	// this function runs when the bottom nav bottons are clicked
	// it changes the bg image of the drop zone div when click on the small image below
	function changeBGImage() {
		// get the custom data attribute from the clicked button
		let imageRef = this.dataset.imageref;
		// `` is NOT a quote. it's a JS templete string
		dropZoneContainer.style.backgroundImage = `url(images/backGround${imageRef}.jpg)`;
		// another way (do not need "let imageRef =" line )
		//dropZoneContainer.style.backgroundImage = `url(images/backGround${this.dataset.imageref}.jpg)`;
		debugger;
	}

	// event handling at the bottom
	puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));

	// emulate a click on the first botton and run the bg img function
	changeBGImage.call(puzzleSelectors[0]);

})();
