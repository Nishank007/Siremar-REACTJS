// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)


/* Developed by K S Pavan Krishna */
import { useNavigate } from 'react-router';
import "../County/CountyList.css"
import Sidebar from '../Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Table from '../../components/Table/Table';

function BusinessList() {
    const navigate = useNavigate();

    const sampleBusinesss = [{
        "Name": "Business 1",
        "Type": "Bank",
        "Phone Number": "8173936701",
        "Address": "1001 UTA blvd, campus edge",
        "Discounts/Benfitis": "free insurance for 5 years"
    }, {
        "Name": "Business 2",
        "Type": "Housing",
        "Phone Number": "6923937753",
        "Address": "1001 UTA blvd, campus edge",
        "Discounts/Benfitis": "claim the property damages investment upto 8000usd"

    }];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let role = urlParams.getAll('role')[0];
    const showActionHeader = true;
    let showAction = role == "admin" ? true : false;
    let btnStyle = { display: role == "resident" ?"none" : "" };

    return (
        <div class="layer">
            <div class="flex-container">
                <Sidebar />
                <div class="main-wrapper">
                    <Navbar />
                    <main class="main users chart-page" id="skip-target">
                        <div class="page-container">
                            <div class="flex-column">
                                <h1 class="page-title">Business</h1>
                                <button class="button" style={btnStyle} onClick={() => navigate("/new/business")}>Add New Business</button>
                            </div>
                            <div class="page-card">
                                <Table dataList={sampleBusinesss} showActionHeader={showActionHeader} showAction={showAction} register={!showAction} />
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


export default BusinessList;

