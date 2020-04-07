import React from 'react';
import Face from './Face';


const Facelist = ({ robots }) =>{

	

	return (
		<div>
	{		robots.map( (user,i)=>{ 
				return (
							<Face 
						key={i} 
					  	id={robots[i].id} 
					  	name={robots[i].name} 
					  	email={robots[i].email}
					  	/>
				 )

			})
	}
		

    	</div>
		)
}

export default Facelist;