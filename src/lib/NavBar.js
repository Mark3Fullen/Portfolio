import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const NavBar = () => {


    return (

        <div>
            <Stack alignItems="center" direction="row">
                <Button varient="outlined" href="/" style={{ color: "white" }}>About Me</Button>
                <Button varient="outlined" href="/resume" style={{ color: "white" }}>Resume</Button>
                <Button varient="outlined" href="/contact" style={{ color: "white" }}>Links</Button>
            </Stack>
        </div>
    )

}

export default NavBar