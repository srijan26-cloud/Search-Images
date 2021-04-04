import React from 'react';
import ImageCard from './ImageCard';
import './imageList.css';
const ImageList = props => {
	const imagesdisplay = props.image.map(img => {
		return <ImageCard key={img.id} img={img} />
	});
	return <div className="image-list">{imagesdisplay}</div>;
	};
export default ImageList;