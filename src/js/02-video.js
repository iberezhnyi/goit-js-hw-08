import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const videoplayerCurrentTime = Number(localStorage.getItem(STORAGE_KEY)) ?? 0;

player.setCurrentTime(videoplayerCurrentTime);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}
