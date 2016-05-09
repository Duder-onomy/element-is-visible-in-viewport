'use strict';

module.exports = function elementIsVisibleInViewport(element, threshold, mode) {
    threshold = threshold || 0;
    mode = mode || 'visible';

    var rect = element.getBoundingClientRect(),
        viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight),
        above = rect.bottom - threshold < 0,
        below = rect.top - viewHeight + threshold >= 0;

    return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
};
