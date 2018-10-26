$(document).ready(() => {
    init()
});

function init(){
    particlesJS('particles-js', particles_config);
    anime({
        targets: '.loading-logo',
        translateY: {
            value: 100,
            duration: 1000
        },
        scale:{
            value:1.5,
            delay: 4200
        },
        rotate:{
            value:'1turn'
        },
        complete: () => {
            document.getElementById("background-image").style.filter = "blur(10px) brightness(0.5)"
            $(".department-banner").hover(
                e => {
                    document.getElementById("background-image").style.filter = "blur(20px) brightness(0.2)"
                },
                e  => {
                    document.getElementById("background-image").style.filter = "blur(10px) brightness(0.5)"
            });
            anime({
                targets: '.department-banner',
                right: 0,
                opacity: 1,
                duration: 1500,
                complete: () => {
                    $('.department-banner').css("transition", "0.3s ease")
                }
            });
            anime.remove('.department-banner.left');
            anime({
                targets: '.department-banner.left',
                left: 0,
                opacity: 1,
                duration: 1500
            })
            anime({
                targets: '.social-button',
                translateY: ['70px', 0],
                duration: 500,
                delay: (el, i) => {return i*20},
                complete: () => {

                    $(".social-button.outer").hover((e) => {
                        anime({
                            targets: e.target,
                            scale: 1.3
                        })
                    },
                    (e) => {
                        anime.remove(e.target)
                        anime({
                            targets: e.target,
                            scale: 1
                        })
                    })

                }
            })
        }
    });
    anime({
        targets: '.loading-circle',
        translateY: [100,function(el, i) {
            return anime.random(000, 400);
        }],
        translateX: function(el, i) {
            return anime.random(-200, 200);
        },
        opacity: anime.random(0.5,0.8),
        scale: [0, function() { return anime.random(1, 1.1); }],
        duration: function() { return anime.random(1200, 1800); },
        delay: function() { return 300+anime.random(0, 500); },
        direction: 'alternate'
    });

}
