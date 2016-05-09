'use strict';

module.exports = function elementIsVisibleInViewport(element, mode, threshold) {
    threshold = threshold || 0;
    mode = mode || 'visible';

    var rect = element.getBoundingClientRect(),
        viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight),
        windowScroll = window.scrollY,
        above = rect.bottom - threshold < 0,
        below = rect.top - viewHeight + threshold >= 0;

    switch(mode) {
        case 'visible':
            return !above && !below;
            break;
        case 'above':
            return above;
            break;
        case 'below':
            return below;
            break;
        case 'any':
            return rect.bottom - threshold > 0 && rect.top - threshold < (window.innerHeight || document.documentElement.clientHeight);
            break;
    }
};