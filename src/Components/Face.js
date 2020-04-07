import React from 'react'
import './face.css'


const Face = ({name, email, id}) =>{
	
	return (
		<div className="tc ba bw1 b--gold  bg-black dib br3 pa3 ma2 grow ">
			<img alt="faces" src={`https://robohash.org/${id}0?set=set5`}/>
			<div>
				<h2 className="gold">{name}</h2>
				<p className="i silver "> {email}</p>
			</div>

		</div>

		);
}

export default Face; 