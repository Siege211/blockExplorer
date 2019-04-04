import React from 'react';
import Block from './Block.jsx';
import Search from './Search.jsx';
import { RpcClient } from "tendermint";
import axios from 'axios';
const client = RpcClient("wss://rpc.cosmos.network:26657");
// client.subscribe({ query: "tm.event = 'NewBlock'" }, event => {
// console.log(event.block);
// });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockList: ["pretest 1","pretest2"]
    }
  }
    componentWillMount() {
      client.blockchain({ })
        .then((res) => {
          //most recent 10 blocks
          // time of their creation

          console.log(res);
          this.setState({blockList:res.block_metas.slice(0,10)});
          console.log(this.state);
          }

        )
  }

getBlockView(query) {
 axios.get(`/blockDetailsView:${query}`, {
  params: {
    blockHeight: query
  }
})
}

getYouTubeVideos(query) {
    // var options = {
    //   key: 'AIzaSyDVn3K43Hlq18xq5NN0i7vpgNu7669tdX8',
    //   query: query
    //   }
    // ^ get the string


    // searchYouTube(options,(data) =>
    //   this.setState({
    //     vids: data
    //   }))
    // ^initiate the search with that string

    //the key: put the query argument into a block search function
  };

  render() {
  	return (
  	<div>
       <Search searchInput={this.getYouTubeVideos.bind(this)}/>
      {this.state.blockList.map( (block,i) =>
        <Block key={i} 
        blockHeader={block.header} 
        blockId={block.block_id}
        blockDetailsView={this.getBlockView.bind(this)}>
          {i}
        </Block>
      )}
  	</div>
  	)
  }
}

export default App;

//to do:
  // instead of rendering regular elements in the .map, render instances of a "block" 
  // component which i will define in a seperate file



  //possible approach
    // find the current height to determinute the 10 most recent blocks
    // possibly the 10 highest is the same as 10 most recent


    // // i need to a way to access the "last height" variable so 
    // // that it becomes part of the query in this url:
    //     https://rpc.cosmos.network:26657/blockchain?minHeight=0&maxHeight=10
    // the maxx height will be "last height" and the min height will be that minus 10