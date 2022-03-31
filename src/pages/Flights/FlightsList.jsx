// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)


/* Developed by Manasa Mohan Kumar */
import { useNavigate } from 'react-router';
import "../County/CountyList.css"
import Sidebar from '../Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Table from '../../components/Table/Table';

function FlightList() {

    const navigate = useNavigate();
        const sampleFlights = [{
            "Name": "Flight 1",
            "Flight Number": "093",
            "Source": "Dallas",
            "Destination": "Sanfranscisco",
            "Airport": "DFW",
            "Discounts/Benefits": "20% discount on tickets"
        }, {
            "Name": "Flight 2",
            "Flight Number": "063",
            "Source": "Dallas",
            "Destination": "Newyork",
            "Airport": "DFW",
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
                                    <h1 class="page-title">Flights</h1>
                                    <button class="button" style={btnStyle}  onClick={() => navigate("/new/flight")}>Add New Flight</button>
                                </div>
                                <div class="page-card">
                                    <Table dataList={sampleFlights} showActionHeader={showActionHeader} showAction={showAction} register={!showAction}/>
                                </div>
                                <Footer />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }


export default FlightList;

