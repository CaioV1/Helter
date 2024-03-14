import React, { useRef, useState } from "react";

import "./style.scss";
import { convertSecondToTimeString } from "../../utils/StringUtil";

// import song from './test.mp3';

interface SongPlayerProps {
  songPath: string;
}

const SongPlayer: React.FC<SongPlayerProps> = ({songPath}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [volume, setVolume] = useState<number>(1);
  const [duration, setDuration] = useState<number>(0);
  const [durationLabel, setDurationLabel] = useState<string>('0:00');
  const [currentTimeLabel, setCurrentTimeLabel] = useState<string>('0:00');
  const [songProgress, setSongProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

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
    if(audioRef.current) audioRef.current.currentTime = tempProgress;
    setSongProgress(tempProgress);
  }

  const onAudioLoaded = () => {
    if(audioRef.current){
      setDuration(audioRef.current.duration);
      audioRef.current.play();
      handleTimeUpdate();
    }
  }

  const handleTimeUpdate = () => {
    if(audioRef.current){
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;

      setSongProgress(currentTime);
      setDurationLabel(convertSecondToTimeString(duration));
      setCurrentTimeLabel(convertSecondToTimeString(currentTime));
    }
  }

  return (
    <div className='audio-container'>
      <audio 
        controls 
        ref={audioRef} 
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={onAudioLoaded} 
      >
        <source src={songPath} type="audio/mpeg" />
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
      {
        duration && 
        <input 
          type="range" 
          min="0" 
          max={duration}
          value={songProgress} 
          onChange={handleProgressChange}
        />
      }
      <div className="progress">
        <div className="progress-bar" style={{width: `${(songProgress * 100) / duration}%`}}></div>
      </div>
      <div>{currentTimeLabel}</div>
      <div>{durationLabel}</div>
    </div>
  );
}

export default SongPlayer;