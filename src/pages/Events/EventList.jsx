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

function EventList() {

    const navigate = useNavigate();
    const sampleEvents = [{
        "Name": "Event 1",
        "Date": "09/03/2022",
        "Phone Number": "4567837896",
        "Address": "DFW",
        "Discounts/Benefits": "20% discount on tickets"
    }, {
        "Name": "Event 2",
        "Date": "09/03/2022",
        "Phone Number": "7864534567",
        "Address": "Newyork",
        "Discounts/Benefits": "10% discount on tickets"

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
                                <h1 class="page-title">Events</h1>
                                <button class="button" style={btnStyle}  onClick={() => navigate("/new/event")}>Add New Event</button>
                            </div>
                            <div class="page-card">
                                <Table dataList={sampleEvents} showActionHeader={showActionHeader} showAction={showAction} register={!showAction}/>
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


export default EventList;

