//Import
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//Code
console.log(throttle);
console.log(Player);

const iframe = document.querySelector('.iframe');
console.log(iframe);

const player = new Player(iframe);
const currentTime = localStorage.getItem('player_current_time');
player.on('timeupdate', throttle(onPlay, 1000));

if (currentTime) {
    player.setCurrentTime(currentTime);
}

function onPlay({seconds}) {
    console.log(seconds);
    localStorage.setItem('player_current_time', JSON.stringify(seconds));
}
