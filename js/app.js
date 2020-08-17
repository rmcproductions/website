$(document).ready(() => {
    let position = 1;
    let entries = [
        ['About me', () => {}, 'My name is Rene and I\'m 19 years old. I\'m a hobby shitcoder and music producer. Feel free to check out some of my content.'],
        ['Dribbble', () => { window.open('https://dribbble.com/rmcproductions', '_blank'); }],
        ['Discord', () => { window.open('http://discord.rmcprod.me', '_blank'); }],
        ['Github', () => { window.open('https://github.com/rmcproductions', '_blank'); }],
        ['Soundcloud', () => { window.open('https://soundcloud.com/rmc_productions', '_blank'); }],
        ['Spotify', () => { window.open('https://open.spotify.com/artist/5UcCjBjJO8npLgdOUmkEG6?si=ruWgLdSEQWiGrEkOIg1r7Q', '_blank'); }],
        ['Instagram', () => { window.open('https://instagram.com/rene.vlg', '_blank'); }],
        ['Youtube', () => { window.open('https://youtube.com/rmc_productions', '_blank'); }],
        ['Email', () => { window.open('mailto: info@rmcprod.me', '_blank'); }],
        ['Tellonym', () => { window.open('https://tellonym.me/rene.vlg', '_blank'); }],
        
        ['Mini', () => { window.open('https://mini.rmcprod.me/', '_blank'); }, 'Fast and efficient URL shortener.'],
        ['Nitrogen', () => { window.open('https://rmcprod.me/nitrogen/', '_blank'); }, '[DEPRECATED] A beautiful web browser, written in javascript.'],
        ['Azuma', () => { window.open('https://github.com/azuma-chat', '_blank'); }, 'A public chatroom for everyone'],
        ['Rhodium', () => { window.open('https://github.com/RhodiumBot/Rhodium', '_blank'); }, '[UNMAINTAINED] A multi-purpose Discord Bot']
    ];

    $('.selectable').each((i, e) => {
        e.onclick = entries[i][1];
    });

    let markOption = () => {
        $('.selectable').css('background', 'transparent');
        $('.selectable').css('color', 'white');
        $('.selectable').each((i, e) => {
            if(i == position){
                $(e).css('background', '#eee');
                $(e).css('color', 'black');
                if(entries[i][2]) document.getElementById('description').innerHTML = '> ' + entries[i][0] + '<br>> ' + entries[i][2];
                else document.getElementById('description').innerHTML = '> ' + entries[i][0] + '<br>> Link to ' + entries[i][0].toUpperCase();
            }
        });
    };

    let switchSelection = key => {
        switch(key){
            case 38:
                if(position > 0) position--;
                markOption();
                break;
            case 40:
                if(position < document.getElementsByClassName('selectable').length - 1) position++;
                markOption();
                break;
            case 13:
                entries[position][1].call();
                break;
        }
    };

    switchSelection(38);

    $(document).on('keydown', e => {
        // 38 UP
        // 40 DOWN
        switchSelection(e.which);
    });


    let clock = () => {
        let time = new Date();

        let h = (time.getHours() < 10 ? '0' + time.getHours() : time.getHours());
        let m = (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes());
        let s = (time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds());

        $('#clock').text(`${h}:${m}:${s}`);
    };

    setInterval(clock, 100);

    $(document).focus();
});
