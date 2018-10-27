let player_pp = false;

$(document).ready(() => {
    anime_init();
    $("#developing-button").click(e => {
        anime({
            targets: '.department-skill.left',
            bottom:{
                value:0
            }
        })
    });
    $("#musicproduction-button").click(e => {
        anime({
            targets: '.department-skill.right',
            bottom:0,
            complete: () => {
                anime({
                    targets: ".player-button",
                    translateX: [70, 0],
                    delay: (e, i) => {
                        return i*50
                    },
                    duration:1000
                })
            }
        });
    });

    $(".xbtn").click(e => {
        anime.remove(".department-skill")
        anime({
            targets: '#' + e.target.id.substr(2),
            bottom: '-110%'
        })
    })

    if(localStorage.getItem("volume")){
        document.getElementById("preview").volume = localStorage.getItem("volume");
        document.getElementById("volume_slider").value = 100 - localStorage.getItem("volume") *100;
    }
});

function anime_init(){
    //particlesJS('particles-js', particles_config);
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
            //document.getElementById("background-image").style.filter = "blur(10px) brightness(0.5)"
            /*$(".department-banner").hover(
                e => {
                    document.getElementById("background-image").style.filter = "blur(20px) brightness(0.2)"
                },
                e  => {
                    document.getElementById("background-image").style.filter = "blur(10px) brightness(0.5)"
            });*/
            anime({
                targets: '.department',
                right: 0,
                opacity: 1,
                complete: () => {
                    $('.department-banner').css("transition", "0.3s ease")
                }
            });
            anime.remove('.department.left');
            anime({
                targets: '.department.left',
                left: 0,
                opacity: 1
            })
            anime({
                targets: '.social-button',
                translateY: ['70px', 0],
                duration: 500,
                delay: (el, i) => {return i*20},
                /*complete: () => {

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

                }*/
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
        opacity: anime.random(0.5,0.7),
        scale: [0, function() { return anime.random(1, 1.1); }],
        duration: function() { return anime.random(1200, 1800); },
        delay: function() { return 300+anime.random(0, 500); },
        direction: 'alternate'
    });

}


function play_pause(arg){
    player_pp = !player_pp;
    (arg ? player_pp = false : true)
    if(player_pp) {
        document.getElementById("preview").play();
        document.getElementById("pp_path").innerHTML = "<path fill=\"#fff\" d=\"M14,19H18V5H14M6,19H10V5H6V19Z\" />";
    }
    else {
        document.getElementById("preview").pause();
        document.getElementById("pp_path").innerHTML = "<path fill=\"#fff\" d=\"M8,5.14V19.14L19,12.14L8,5.14Z\" />";
    }
}

$('input[type=range]').on('input', function () {
    document.getElementById("preview").volume = 1 - document.getElementById("volume_slider").value /100
    localStorage.setItem("volume", 1 - document.getElementById("volume_slider").value / 100)
});
