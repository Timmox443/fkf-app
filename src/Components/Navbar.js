import React from 'react'
import {
    Nav,
    NavLink, 
    Bars,
    NavMenu, 
    MyImage,
} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <MyImage to = './' >North Imenti<span> Football League Statistics</span></MyImage>
                <Bars />
                <NavMenu >
                    <NavLink to = './Players'>
                        Players
                    </NavLink>  
                    <NavLink to = './Fixtures.js'>
                        Fixtures    
                    </NavLink>                 
                </NavMenu>
            </Nav>
        </> 
    )
}

export default Navbar