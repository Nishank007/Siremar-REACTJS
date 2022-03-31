// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)

// Developed by Nishank Gujar

import { Component } from 'react';
import './Chat.css';
import Sidebar from '../Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';

class Chat extends Component {
    render() {
        return (

            <div class="layer">
                <div class="flex-container">
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
                                            <a href="/adminchat">Admin</a>
                                            <a href="/inspectorchat">Inspector</a>
                                            <a href="/resChat">Resident</a>
                                        </div>

                                    </div>
                                    <div class="discussion message-active">
                                        <div class="photo">
                                            <div class="online"></div>
                                        </div>
                                        <div class="desc-contact">
                                            <p class="name">Resident 1</p>
                                            <p class="message">There was an issue1</p>
                                        </div>
                                        <div class="timer">12 sec</div>
                                    </div>

                                    <div class="discussion">
                                        <div class="photo">
                                            <div class="online"></div>
                                        </div>
                                        <div class="desc-contact">
                                            <p class="name">Resident 2</p>
                                            <p class="message">Hi how to register for school?</p>
                                        </div>
                                        <div class="timer">3 min</div>
                                    </div>

                                    {/* <div class="discussion">
                                        <div class="photo" >
                                        </div>
                                        <div class="desc-contact">
                                            <p class="name">Jerome Seiber</p>
                                            <p class="message">I've sent you the annual report</p>
                                        </div>
                                        <div class="timer">42 min</div>
                                    </div>

                                    <div class="discussion">
                                        <div class="photo">
                                            <div class="online"></div>
                                        </div>
                                        <div class="desc-contact">
                                            <p class="name">Thomas Dbtn</p>
                                            <p class="message">See you tomorrow ! 🙂</p>
                                        </div>
                                        <div class="timer">2 hour</div>
                                    </div> */}

                                    <div class="discussion">
                                        <div class="photo" >
                                        </div>
                                        <div class="desc-contact">
                                            <p class="name">Resident 3</p>
                                            <p class="message">Hello</p>
                                        </div>
                                        <div class="timer">1 day</div>
                                    </div>

                                    <div class="discussion">
                                        <div class="photo" >
                                        </div>
                                        <div class="desc-contact">
                                            <p class="name">Resident 4</p>
                                            <p class="message">Emergency</p>
                                        </div>
                                        <div class="timer">4 days</div>
                                    </div>

                                    {/* <div class="discussion">
                                        <div class="photo" >
                                            <div class="online"></div>
                                        </div>
                                        <div class="desc-contact">
                                            <p class="name">Paul Walker</p>
                                            <p class="message">You can't see me</p>
                                        </div>
                                        <div class="timer">1 week</div>
                                    </div> */}
                                </section>
                                <section class="chat">
                                    <div class="header-chat">
                                        <i class="icon fa fa-user-o" aria-hidden="true"></i>
                                        <p class="name">Resident 1</p>
                                        <i class="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
                                    </div>
                                    <div class="messages-chat">
                                        <div class="message">
                                            <div class="photo">
                                                <div class="online"></div>
                                            </div>
                                            <p class="text"> Hi </p>
                                        </div>
                                        <div class="message text-only">
                                            <p class="text"> Can I speak to an agent?</p>
                                        </div>
                                        <p class="time"> 14h58</p>
                                        <div class="message text-only">
                                            <div class="response">
                                                <p class="text">Hello </p>
                                            </div>
                                        </div>
                                        <div class="message text-only">
                                            <div class="response">
                                                <p class="text">No we only have chat services available right now.</p>
                                            </div>
                                        </div>
                                        <p class="response-time time"> 15h04</p>
                                        <div class="message">
                                            <div class="photo">
                                                <div class="online"></div>
                                            </div>
                                            <p class="text">There was an issue1</p>
                                        </div>
                                        <p class="time"> 15h09</p>
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


export default Chat;