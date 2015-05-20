	/**
   * This can be done with jQuery much easily but since I was asked if I know pure (vanilla) js here you go. 
   *
   */

   
// Crate our variables
var range = document.getElementsByClassName("input-range");
var resultedValue = document.getElementsByClassName("input-value");
var starElem = document.getElementById('star');


// Strip a vendor prefix function to take care of vendoring for us.
function setVendor(element, property, value) {
  element.style["webkit" + property] = value;
  element.style["moz" + property] = value;
  element.style["ms" + property] = value;
  element.style["o" + property] = value;
}


// Change the value to the fields
function changeValue(val, rev) {
	resultedValue[0].value=val;

	x = parseInt(val);
	y = 80; // This is to get the blue.

	z = x + y; // We create the 180deg by adding the slider value and 80

	setVendor(starElem, 'Filter', 'hue-rotate(' + z + 'deg)');

	// Check if we are negative.
	if(rev === true) {
		range[0].value=val;
	}

	// Set up blur to the negative and original values.
	if (x === 0) {
		setVendor(starElem, 'Filter', 'hue-rotate(0deg)blur(1px)');
	} else if(x <= 0) {
		setVendor(starElem, 'Filter', 'hue-rotate(' + z + 'deg)blur(3px)');
	}

}