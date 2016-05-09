# Element is visible in viewport.

Tells you if an element is visible (vertically only) in the viewport.

### Use it like

The method exported takes 3 arguments:
* The element in question.
* OPTIONAL - The buffer in pixels around the element from which you want to determine if it is visible. Useful if you want to do something right before the element comes into view. Default = 0.
* OPTIONAL - The Mode. 'above' or 'below' will tell if the element is specifically above or below the viewport.

```javascript
// Using no Mode.
checkVisible(document.querySelector('.something'), 100) && console.log('ELEMENT IS VISIBLE IN THE VIEWPORT');

// Using the MODE.
checkVisible(document.querySelector('.something'), 50, 'above') && console.log('ELEMENT IS ABOVE THE VIEWPORT');
checkVisible(document.querySelector('.something'), 50, 'below') && console.log('ELEMENT IS BELOW THE VIEWPORT');
```


This is a complete copy and paste from : http://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen
All credit go to stack overflow user [Tokimon](http://stackoverflow.com/users/351835/tokimon).

I made this lib because lately I have been writing a ton of stuff that needs to know if it is in the viewport or not.
I got tired or copy and pasting that code mentioned above.
