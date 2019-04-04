import React from 'react';
const Block = props => 
<div style={{marginBottom:"10px",display:"flex",flexDirection:"column",border:"2px solid black",padding:"3px"}}>
	
	<span style={{marginBottom:"2px",display:"flex",flexDirection:"row"}}>Block Id: {props.blockId && 
		<div>{props.blockId.hash}</div>}
	</span>

	<span style={{marginBottom:"2px",display:"flex",flexDirection:"row"}}>
	Time Created: 
	{props.blockHeader && 
		<div>{props.blockHeader.time}</div>}
	</span>

	<span style={{display:"flex",flexDirection:"row"}}>
	Height: {props.blockHeader && 
		<div>{props.blockHeader.height}</div>}
	</span>

</div>;


export default Block;



/// things for info page to include:
	// total_txs
	// num_txs
	// proposer_address
	// consensus_hash
	// validators_hash
	// heightblock_id.hash