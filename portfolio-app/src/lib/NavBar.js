import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const NavBar = () => {


    return (

        <div>
            <Stack alignItems="center" direction="row">
                <Button varient="outlined" href="/">About Me</Button>
                <Button varient="outlined" href="/resume">Resume</Button>
                <Button varient="outlined" href="/contact">Links</Button>
            </Stack>
        </div>
    )

}

export default NavBar