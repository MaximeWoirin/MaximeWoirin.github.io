//animation Ready set Go
(() => {
    var animProps = {};
    animProps.opacityIn = [0, 1];
    animProps.scaleIn = [0.2, 1];
    animProps.scaleOut = 3;
    animProps.durationIn = 800;
    animProps.durationOut = 600;
    animProps.delay = 500;

    anime.timeline({ loop: false })
        .add({
            targets: '#animated-container .text1',
            opacity: animProps.opacityIn,
            scale: animProps.scaleIn,
            duration: animProps.durationIn
        }).add({
            targets: '#animated-container .text1',
            opacity: 0,
            scale: animProps.scaleOut,
            duration: animProps.durationOut,
            easing: "easeInExpo",
            delay: animProps.delay
        }).add({
            targets: '#animated-container .text2',
            opacity: animProps.opacityIn,
            scale: animProps.scaleIn,
            duration: animProps.durationIn
        }).add({
            targets: '#animated-container .text2',
            opacity: 0,
            scale: animProps.scaleOut,
            duration: animProps.durationOut,
            easing: "easeInExpo",
            delay: animProps.delay
        }).add({
            targets: '#animated-container .text3',
            opacity: animProps.opacityIn,
            scale: animProps.scaleIn,
            duration: animProps.durationIn
        }).add({
            targets: '#animated-container .text3',
            opacity: 0,
            scale: animProps.scaleOut,
            duration: animProps.durationOut,
            easing: "easeInExpo",
            delay: animProps.delay
        }).add({
            targets: '#animated-container .animated-text',
            scale: 0,
            opacity: 0,
            duration: 500,
            delay: 500
        });
})();