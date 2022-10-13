import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(videoplayerCurrentTime);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(data.seconds);
  }, 1000)
);
