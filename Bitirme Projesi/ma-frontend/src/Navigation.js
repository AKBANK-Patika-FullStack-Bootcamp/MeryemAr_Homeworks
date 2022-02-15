import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav>
                <NavLink to="/Home">
                    Home
                </NavLink>
                <NavLink  to="/dairebilgileri">
                    DaireBilgileri
                </NavLink>
                <NavLink  to="/KullaniciBilgileri">
                    KullaniciBilgileri
                </NavLink>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}