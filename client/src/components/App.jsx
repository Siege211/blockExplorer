import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockList: ["pretest 1","pretest2"]
    }
  }
    componentWillMount() {
    this.setState({blockList: ["test 1","test2"]})
  }
  render() {
  	return (
  	<div>
      React Renders
      {this.state.blockList.map(yo=>
        <p>{yo}</p>
      )}
  	</div>
  	)
  }
}

export default App;

