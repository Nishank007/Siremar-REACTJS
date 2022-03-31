// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)

// Developed by Nishank Gujar

import { Component } from 'react';
import ReactDOM from 'react-dom';
import './Chat.css';
import Sidebar from '../Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';

class Adminchat extends Component {
    render() {
        return (
            <div class="layer">
                <div class="flex-container ">
                    <Sidebar />
                    <div class="main-wrapper">
                        <Navbar />
                        <div class="containers">
                            <h1 class="page-title">Messages</h1>

                            <div class="flex chat-wrapper">
                                <nav class="menus">

                                    <ul class="items">
                                        <li class="item">
                                            <i class="fa fa-home" aria-hidden="true"></i>
                                        </li>
                                        <li class="item">
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                        </li>
                                        <li class="item">
                                            <i class="fa fa-pencil" aria-hidden="true"></i>
                                        </li>
                                        <li class="item item-active">
                                            <i class="fa fa-commenting" aria-hidden="true"></i>
                                        </li>
                                        <li class="item">
                                            <i class="fa fa-file" aria-hidden="true"></i>
                                        </li>
                                        <li class="item">
                                            <i class="fa fa-cog" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                </nav>

                                <section class="discussions">
                                    <div class="chat-dropdown">
                                        <button class="dropbtn">Chat with</button>
                                        <div class="chat-dropdown-content">
                                            <a href="/Adminchat">Admin</a>
                                            <a href="/Inspectorchat">Inspector</a>
                                            <a href="/Reschat">Resident</a>
                                        </div>
                                    </div>
                                    <div class="discussion message-active">
                                        <div class="photo">
                                            <div class="online"></div>
                                        </div>
                                        <div class="desc-contact">
                                            <p class="name">Admin</p>
                                            <p class="message">I cannot upload my documents.</p>
                                        </div>
                                        <div class="timer">12 sec</div>
                                    </div>

                                </section>
                                <section class="chat">
                                    <div class="header-chat">
                                        <i class="icon fa fa-user-o" aria-hidden="true"></i>
                                        <p class="name">Admin</p>
                                        <i class="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
                                    </div>
                                    <div class="messages-chat">
                                        <div class="message">
                                            <div class="photo">
                                                <div class="online"></div>
                                            </div>
                                            <p class="text"> Hello Admin</p>
                                            <p class="time"> 14h58</p>
                                        </div>

                                        <div class="message text-only">
                                            <div class="response">
                                                <p class="text">Hello, How may I help you?.</p>
                                                <p class="response-time time"> 15h04</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <div class="photo">
                                                <div class="online"></div>
                                            </div>
                                            <p class="text">I am unable to upload my documents.</p>
                                            <p class="time"> 16h58</p>
                                        </div>

                                    </div>
                                    <div class="footer-chat">
                                        <i class="icon fa fa-smile-o clickable" aria-hidden="true"></i>
                                        <input type="text" class="write-message" placeholder="Type your message here"></input>
                                        <i class="icon send fa fa-paper-plane-o clickable" aria-hidden="true">Send</i>
                                    </div>
                                </section>
                            </div>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>

        )
    }
}


export default Adminchat;