var wH    = $(window).height(),
    wW    = $(window).width(),
    $im   = $('img'),
    iH    = $im.height(),
    iW    = $im.width(),
    scale = Math.min(wH / iH, wW / iW),
    abs   = true,
    pad   = 30;

var setPosition = function() {
    return $im.css({
        top     : (wH - iH * scale) / 2 + pad,
        left    : (wW - iW * scale) / 2 + pad ,
        width   : (iW - 2 * pad) * scale,
        height  : (iH - 2 * pad) * scale,
        position: 'absolute'
    }).attr('class', 'zoomed-out');
};

if (scale < 1) {
    setPosition().click(function() {
        if (abs){
            $im.css({
                position: 'static',
                width   : iW,
                height  : iH
            }).attr('class', 'zoomed-in');
        }
        else {
            setPosition();
        }

        abs = !abs;
    });
}