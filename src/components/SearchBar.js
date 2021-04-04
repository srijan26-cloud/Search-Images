import React from 'react';
class SearchBar extends React.Component{
	/*onInputChange(event){
		console.log(event.target.value);
	}*/
	
	state={term:''};
	
	onInputClick(event){
		console.log('Input was clicked');
	}
	onFormSubmit = (event) => {//onSubmit={event => this.onFormSubmit(event)}
		event.preventDefault();
		this.props.onSubmitToApp(this.state.term);//this is used in class not in fun component
	}
	render(){
		return(
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="search">Search</label>
						<input 
							type="text"
							name="search"
							value={this.state.term}
							onChange={e => this.setState({term : e.target.value})}
							//onChange={this.onInputChange}
							//onChange={e => console.log(e.target.value)}
							onClick={this.onInputClick}/>
					</div>
				</form>
			</div>
		);
	};
}
export default SearchBar;