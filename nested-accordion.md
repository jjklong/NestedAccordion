<!--
	• What does it do?
        What interactive elements exist?
    		How do you interact with them?
    		What visual effects are produced by interacting?
	• How does it do it?
    		What existing HTML elements are changed?
    		What new HTML elements are created?
        What CSS styles are used to produce the effect? -->

##What does it do?
---
###What interactive elements exist?
* **Arrow icons** *next to header list*
* **1st paragraph content** *beneath header*
* **Circle arrow icons** *within the sub-list beneath the header*
* **2nd paragraph content** *beneath sub-list*

###How do you interact with them and what visual effects are produced by interacting?
**Arrow Icons**
Hover:
* changes arrow color from grey to blue
* rotates arrow 45deg clockwise
Click:
* changes arrow color to blue
* rotates another 45deg clockwise to point down

**List Content**
Click:
* displays paragraph content below header
* displays another sub-list of options below paragraph content

#How does it do it?
**Arrow Icons**
Hover:
* JS assigns a function to rotate and change icon color when the mouse **hovers** over the element
Click:
* JS assigns a function to change arrow to point down when **clicked** (keeping the same color as **hover**)
* JS assigns a function to display paragraph and sublist content when **clicked**

---

###What existing HTML elements are changed?
* The HTML paragraph and sublist content becomes visible when header is clicked

##What new HTML elements are created?
* The HTML elements should already exist in the HTML file, however, when the user interacts with the page via hover or mouse click, the content is revealed.

##What CSS styles are used to produce the effect?
* CSS could be used to change the icon with **().hover**, but could also be done in JS. 
