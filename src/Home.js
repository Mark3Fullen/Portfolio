import Stack from '@mui/material/Stack';

const Home = () => {


    return (

        <Stack>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" integrity="sha512-i8+QythOYyQke6XbStjt9T4yQHhhM+9Y9yTY1fOxoDQwsQpKMEpIoSQZ8mVomtnVCf9PBvoQDnKl06gGOOD19Q==" crossorigin="anonymous" />

            <h2 className="heading">Mark Fullen</h2>

            <div className="heading">
                <p>JavaScript - Ruby - React - Rails - HTML - CSS</p>
            </div>
            
            <nav>
                <input checked='checked' className='menu-toggler' id='menu-toggler' type='checkbox'/>
                <ul>
                    <li className="menu-item">
                        <a className="fa fa-linkedin" href='https://www.linkedin.com/in/mark-fullen-412a73158/' target='_blank' rel="noreferrer"></a>
                    </li>
                    <li className="menu-item">
                        <a className='fa fa-medium' href='https://medium.com/@mark3fullen' target='_blank' rel="noreferrer"></a>
                    </li>
                    <li className="menu-item">
                        <a className='fa fa-github' href='https://github.com/Mark3Fullen' target='_blank' rel="noreferrer"></a>
                    </li>
                    <li className="menu-item">
                        <a className='fa fa-file' href='https://docs.google.com/document/d/1tc6DgPdToboIcybJaSVZBZfWQnboYFbUSK57O2aC060/edit?usp=sharing' target='_blank' rel="noreferrer"></a>
                    </li>
                    <li className="menu-item">
                        <a className='fa fa-instagram' href='https://www.instagram.com/markfullen/?hl=en' target='_blank' rel="noreferrer"></a>
                    </li>
                    <li className="menu-item">
                        <a className='fa fa-envelope' href='mailto:mark3fullen@gmail.com' target='_blank' rel="noreferrer"></a>
                    </li>
                </ul>
            </nav>

        </Stack>
    
    )

}

export default Home