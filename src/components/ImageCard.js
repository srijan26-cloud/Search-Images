import React from 'react';
class ImageCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {spans : 0};
		this.imageRef = React.createRef();
	}
	componentDidMount(){
		console.log(this.imageRef);
		this.imageRef.current.addEventListener('load',this.setSpan);
	}
	setSpan = () =>{
		console.log(this.imageRef.current.clientHeight);
		const height =this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10+ 1);
		this.setState({spans})
	};
	render(){
		return(
			<div style={{gridRowEnd : `span ${this.state.spans}`}}>
				<img 
					ref={this.imageRef}
					alt={this.props.img.description}
					src={this.props.img.urls.regular}
				/>
			</div>
		);
	}
}
export default ImageCard;