import { createContext, useContext } from 'react';

const PREFIX = '/assets/sounds/';

const SOUNDS = {
  'sound-1': PREFIX + 'sound-1.mp3',
  'sound-2': PREFIX + 'sound-2.mp3',
  'sound-3': PREFIX + 'sound-3.mp3',
};

export const SoundProviderContext = createContext({ audio: new Audio() });

export const useSoundEffect = () => {
  const { audio } = useContext(SoundProviderContext);

  const play = (soundName: keyof typeof SOUNDS) => {
    audio.loop = false;
    audio.src = SOUNDS[soundName];
    audio.pause();
    audio.play();
  };

  return { play };
};
