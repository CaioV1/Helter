import React, { useRef, useState } from "react";

import "./style.scss";
import song from './test.mp3';

interface SongPlayerProps {
  songPath: string;
}

const SongPlayer: React.FC<SongPlayerProps> = ({songPath}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [volume, setVolume] = useState<number>(1);
  const [totalTime, setTotalTime] = useState<string>('0:00');
  const [currentTime, setCurrentTime] = useState<string>('0:00');
  const [songProgress, setSongProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayPauseClick = () => {
    if(audioRef.current && !isPlaying) audioRef.current.play();
    if(audioRef.current && isPlaying) audioRef.current.pause();
    setIsPlaying((currentValue) => !currentValue)
  }

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempVolume = parseFloat(event.target.value);
    if(audioRef.current) audioRef.current.volume = tempVolume;
    setVolume(tempVolume);
  }

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempProgress = parseFloat(event.target.value);
    if(audioRef.current) {
      const duration = audioRef.current.duration;
      const tempCurrentTime = tempProgress * duration / 100;
      audioRef.current.currentTime = tempCurrentTime;
    }
    setSongProgress(tempProgress);
  }

  const handleTimeUpdate = () => {
    if(audioRef.current){
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;

      const currentMinutes = Math.floor(currentTime / 60);
      const currentSeconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
      const totalMinutes = Math.floor(duration / 60);
      const totalSeconds = Math.floor(duration % 60).toString().padStart(2, '0');

      setCurrentTime(`${currentMinutes}:${currentSeconds}`);
      setTotalTime(`${totalMinutes}:${totalSeconds}`);

      setSongProgress(currentTime * 100 / duration);
    }
  }

  return (
    <div className='audio-container'>
      <audio 
        controls 
        ref={audioRef} 
        preload="metadata"
        onTimeUpdate={handleTimeUpdate} 
        onLoadedMetadata={handleTimeUpdate} 
      >
        <source src={song} type="audio/mpeg" />
      </audio>
      <div className="controls">
        {
          isPlaying 
          ? <button onClick={handlePlayPauseClick}>Pause</button>
          : <button onClick={handlePlayPauseClick}>Play</button>
        }
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={handleVolumeChange}
        />
      </div>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={songProgress} 
        onChange={handleProgressChange}
      />
      <div className="progress">
        <div className="progress-bar" style={{width: `${songProgress}%`}}></div>
      </div>
      <div>{currentTime}</div>
      <div>{totalTime}</div>
    </div>
  );
}

export default SongPlayer;