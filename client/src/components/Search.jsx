import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		
	}

handleInputChange(e) {
	
  //console.log(this.props.searchInput)
  this.props.searchInput(e.target.value);
  this.setState({
  	value: e.target.value
  });
  //this.props.searchInput(this.state.value);
  }

render() {
  	return (
      <div style={{margin:"2px"}}>
  	   <form>
       <input style={{width:"60vw"}}type="text"/>
       <button>Search for Block</button>
       </form>
      </div>
  	);
  }
}
export default Search;