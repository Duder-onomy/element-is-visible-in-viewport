# Element is visible in viewport.

Tells you if an element is visible (vertically only) in the viewport.

### Use it like

The method exported takes 3 arguments:
* The element in question.
* OPTIONAL - The Mode.
    * 'above' - Tells you if the viewport is above the element.
    * 'below' - Tells you if the viewport is below the element.
    * 'visible' - DEFAULT - Tells you if the element is totally within the viewport.
    * 'any' - Tells you if any part of the element is visible in the viewport.
* OPTIONAL - 'threshold' - in pixels around the element from which you want to determine if it is visible. Useful if you want to do something right before the element comes into view. Default = 0.


```javascript
// Using no Mode.
checkVisible(document.querySelector('.something')) && console.log('ELEMENT IS TOTALLY VISIBLE IN THE VIEWPORT');

// Using the MODE.
checkVisible(document.querySelector('.something'), 'above') && console.log('ELEMENT IS ABOVE THE VIEWPORT');
checkVisible(document.querySelector('.something'), 'below') && console.log('ELEMENT IS BELOW THE VIEWPORT');
checkVisible(document.querySelector('.something'), 'visible') && console.log('ELEMENT IS TOTALLY THE VIEWPORT');
checkVisible(document.querySelector('.something'), 'any') && console.log('SOME PART OF THE ELEMENT IS VISIBLE');
```

[Inspired by](http://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen)
thanks to stack overflow user [Tokimon](http://stackoverflow.com/users/351835/tokimon).

I made this lib because lately I have been writing a ton of stuff that needs to know if it is in the viewport or not.
I got tired or copy and pasting that code mentioned above.
