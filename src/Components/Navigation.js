import React from 'react'; 
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <ButtonGroup color="orange" aria-label="outlined primary button group">
                <Button>
                    <Link to="/Search">Search</Link> 
                </Button>
                <Button>
                    <Link to="/MySubs">My Subs</Link> 
                </Button>
                <Button>
                    <Link to="/Saved">Saved</Link>
                </Button>
            </ButtonGroup>

        </div>
    );
}

export default Navigation