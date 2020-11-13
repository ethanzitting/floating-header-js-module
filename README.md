# floating-header-js-module

I created this JavaScript module for my own use. It adds a floating header to a webpage.

Both the .js and .css files are needed for the desired effect.

It can be used with the following commands:

First, make sure there is a <header> element in the DOM.

floatingHeader.load(); - adds the floating header to the <header> element
floatingHeader.addDiv(yourDivId, yourDivText); - adds a menu item to the left side of the existing floating header.
floatingHeader.removeDiv(yourDivId); - removes the specified menu item from the floating header.
floatingHeader.removeAll(); - removes all menu items from the left side of the floating header.
