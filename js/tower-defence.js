! function() {
    'use strict';

    var rafId,
    	cancleBtn = document.getElementById('cancel'),
    	startBtn = document.getElementById('start'),
    	timer;

    cancleBtn.addEventListener('click', function( e ) {
    	e.preventDefault();
        window.cancelAnimationFrame(rafId);
    });

    startBtn.addEventListener('click', function( e ) {
        e.preventDefault();
        timer();
    });


    timer = function() {
        rafId = window.requestAnimationFrame(timer);
        console.log('what is going on');
    };

}();
