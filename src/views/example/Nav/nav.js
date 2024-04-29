import React from 'react'; 
import './nav.scss'; 
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component{
    render(){
        return(
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                <NavLink to="/todos" activeClassName="active">Todos</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/user" activeClassName="active">User</NavLink>
             
            </div>
        )
    }

}

export default Nav; 