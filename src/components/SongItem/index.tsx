import React from "react";
import { Song } from "../../interfaces/Song"

interface SongItemComponentProps {
	song: Song;
	onPlayClick: () => void;
}

const SongItemComponent: React.FC<SongItemComponentProps> = ({ song, onPlayClick }) => (
	<div className="song-item">
		<div className="song-info">
			<div className="song-play" onClick={onPlayClick}>
				<i className="fa fa-play"></i>
			</div>
			<span className="song-title">{song.title}</span>
			<span className="song-author">{song.authors.map((author) => (author.name))}</span>
		</div>
		<div className="song-action">
			<i className="fa fa-heart"></i>
			<i className="fa fa-plus"></i>
		</div>
	</div>
)

export default SongItemComponent;