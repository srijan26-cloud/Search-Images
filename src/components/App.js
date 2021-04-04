import React from 'react';
import unsplash from '../Api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component{
		state = {images :[]};
		getSearchBarTerm = async (term)=> {
			const response = await unsplash.get('/search/photos',{
				params:{query : term }
			});
			
			console.log(response.data.results);
			this.setState({
				images: response.data.results
			});
			//promise statement
			/*.then(response => {
				console.log(response.data.results);
			});*/
		}
		render(){
		return (
			<div className="ui container" style={{marginTop:'10px'}}>
			<SearchBar onSubmitToApp={this.getSearchBarTerm}/>
			Found: {this.state.images.length} images.
			<ImageList image={this.state.images}/>
			</div>
			);
	}
}
	export default App;