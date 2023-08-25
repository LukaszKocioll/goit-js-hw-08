import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new VimeoPlayer('vimeo-player');

const saveCurrentTime = (currentTime) => {
  localStorage.setItem('videoplayer-current-time', currentTime);
};

const restoreCurrentTime = () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime !== null) {
    player.setCurrentTime(savedTime);
  }
};

const throttledSaveTime = throttle(saveCurrentTime, 1000);

player.on('timeupdate', (data) => {
  const currentTime = data.seconds;
  throttledSaveTime(currentTime);
});

restoreCurrentTime();
