import React from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Search() {

 return (
	<div
		className="container mx-auto">
			<div className="object-center">
				<h2>Search</h2>
			{/* <FormControl>
				<InputLabel htmlFor="my-input">Enter an ingredient</InputLabel>
				<Input id="my-input" aria-describedby="my-helper-text" />
				<FormHelperText id="my-helper-text">Find an alternative to an ingredient you are looking for!</FormHelperText>
			</FormControl> */}

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
