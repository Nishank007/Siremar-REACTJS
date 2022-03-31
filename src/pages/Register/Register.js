// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)

/* Developed by Nishank */
import { Component } from 'react';
import './Register.css'
import MainFooter from '../Footer/MainFooter';
import MainNavBar from '../../components/Navbar/MainNavBar';

class Register extends Component {

    render() {
        return (
            <div class="register-container flex-column">
                <MainNavBar />

                <div class="register-section">
                    <div class="register-card">
                        <h1 class="register-title">Register</h1>
                        <form class="register-form" action="" method="">
                            <div class="flex-row">
                                <label class="custom-form-label-wrapper">
                                    <p class="custom-form-label">First Name</p>
                                    <input type="text" placeholder="Enter your email" required />
                                </label>
                                <label class="custom-form-label-wrapper">
                                    <p class="custom-form-label">Last Name</p>
                                    <input type="text" placeholder="Enter your email" required />
                                </label>
                                <label class="custom-form-label-wrapper">
                                    <p class="custom-form-label">Date of birth</p>
                                    <input type="date" placeholder="Enter your email" required />
                                </label>
                                <label class="register-form-select-label-wrapper">
                                    <p class="register-form-select-label">Gender</p>
                                    <select class="register-form-select">
                                        <option value="0">Select gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">Other</option>
                                    </select>
                                </label>
                                <label class="custom-form-label-wrapper">
                                    <p class="custom-form-label">Street 1</p>
                                    <input type="text" placeholder="Enter your email" required />
                                </label>
                                <label class="custom-form-label-wrapper">
                                    <p class="custom-form-label">Street 2</p>
                                    <input type="text" placeholder="Enter your email" required />
                                </label>

                                <label class="custom-form-label-wrapper">
                                    <p class="custom-form-label">Phone number</p>
                                    <input type="number" placeholder="Enter your password" required />
                                </label>
                                <label class="custom-form-label-wrapper">
                                    <p class="custom-form-label">Email</p>
                                    <input type="email" placeholder="Enter your password" required />
                                </label>
                                <div>
                                    <p class="register-form-label">Roles</p>
                                    <label class="container">Resident
                                    <input type="radio" checked="checked" name="radio" />
                                    <span class="checkmark"></span>
                                    </label>
                                    <label class="container">Inspector
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                    </label>
                                </div>
                                <label class="custom-form-label-wrapper">
                                    <p class="custom-form-label">Password</p>
                                    <input type="password" placeholder="Enter your password" required />
                                </label>
                                <label class="custom-form-label-wrapper">
                                    <p class="custom-form-label">Retype Password</p>
                                    <input type="password" placeholder="Enter your password" required />
                                </label>
                            </div>


                            <button class="register-form-btn primary-default-button ">Sign up</button>
                        </form>
                    </div>
                </div>

                <MainFooter />
            </div>
        );
    }
}

export default Register;