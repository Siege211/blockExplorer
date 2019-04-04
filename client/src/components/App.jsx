import React from 'react';
import Block from './Block.jsx';
import { RpcClient } from "tendermint";
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
  render() {
  	return (
  	<div>
      {this.state.blockList.map( (block,i) =>
        <Block key={i} blockHeader={block.header} blockId={block.block_id}>{i}</Block>
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