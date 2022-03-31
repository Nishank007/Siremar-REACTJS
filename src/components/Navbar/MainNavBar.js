// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)


/* Developed by K S Pavan Krishna */
import { Component } from 'react';
import "./MainNavBar.css"

class MainNavBar extends Component {
    render() {
        return (
            <nav class="navbar">
                <div class="navbar-content">
                    <a href="#">
                    </a>
                    <a data-toggle="toggle-nav" data-target="#nav-items" href="#"
                    >
                    </a>
                </div>
                {/* Menus on the main website */}
                {/* Blogs will be developed in next phase */}
                <div id="nav-items" class="navbar-menu">
                    <a href="/#home" class="navbar-menu-item">Home</a>
                    <a href="/#about" class="navbar-menu-item">About</a>
                    <a href="/#services" class="navbar-menu-item">Services</a>
                    <a href="/#blog" class="navbar-menu-item">Blog</a>
                    <a href="/#contact-us" class="navbar-menu-item">Contact</a>
                    <a href="/login" class="navbar-menu-item">Login</a>
                    <a href="/register" class="primary-default-button">Register</a>
                </div>
            </nav>
        )
    }
}

export default MainNavBar;