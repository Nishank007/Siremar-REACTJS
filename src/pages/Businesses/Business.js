// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)


/* Developed by K S Pavan Krishna */
import { Component } from 'react';
import "../County/CountyList"
import Sidebar from '../Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';


class Business extends Component {

    render() {
        return (
            <div class="layer">
                <div class="flex-container">
                    <Sidebar />
                    <div class="main-wrapper">
                        <Navbar />
                        <h1 class="page-title">New Business</h1>
                        <div class="form-section">
                            <div class="form-save-card">

                                <form class="register-form" action="" method="">
                                    <div class="flex-row">
                                        <label class="custom-form-label-wrapper">
                                            <p class="custom-form-label">Name</p>
                                            <input type="text" placeholder="Enter the name" required />
                                        </label>
                                        <label class="custom-form-label-wrapper">
                                            <p class="custom-form-label">Type</p>
                                            <input type="date" placeholder="Enter the type" required />
                                        </label>
                                        <label class="custom-form-label-wrapper">
                                            <p class="custom-form-label">Phone number</p>
                                            <input type="number" placeholder="Enter the phone no" required />
                                        </label>

                                        <label class="custom-form-label-wrapper">
                                            <p class="custom-form-label">Street 1</p>
                                            <input type="text" placeholder="Enter the street 1" required />
                                        </label>

                                        <label class="custom-form-label-wrapper">
                                            <p class="custom-form-label">Street 2</p>
                                            <input type="text" placeholder="Enter the street 2" required />
                                        </label>
                                        <label class="custom-form-label-wrapper">
                                            <p class="custom-form-label">County</p>
                                            <input type="text" placeholder="Enter the street 2" required />
                                        </label>

                                        <label class="custom-form-label-wrapper">
                                            <p class="custom-form-label">Pincode</p>
                                            <input type="text" placeholder="Enter the pincode" required />
                                        </label>
                                        <label class="custom-form-label-wrapper">
                                            <p class="custom-form-label">Discount/Benefits</p>
                                            <input type="number" placeholder="Enter the discount" required />
                                        </label>
                                    </div>

                                    <div class="save-button">
                                        <button class="save-form-btn primary-default-button ">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;

