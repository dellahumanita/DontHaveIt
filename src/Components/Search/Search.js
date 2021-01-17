import React from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Search() {

 return (
	<div
		className="container mx-auto">
			<div className="object-center">
				<h2>Search</h2>

				<TextField id="filled-basic" label="Search" variant="filled" />
				<div>
					<Button variant="contained" color="teal">
						Find Substitute
					</Button>
				</div>
			</div>

	</div>
	);
}
