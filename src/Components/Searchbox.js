import React from 'react';


const Searchbox = ({searchfield,searchChange}) =>{

		return(
				<div > 
					<p className= "i silver db"> These are the attendees at your class' 10-year re-union party. Can't find yourself? Use the searchbar. </p>
					<input className='pa3 ba b--silver bw1 br2 bg-lighest-blue ma2'
						type='search' 
						placeholder='Search wierdo'
						onChange={searchChange}
					/>
				</div>
			);
}

export default Searchbox;