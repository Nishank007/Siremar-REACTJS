// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)


/* Developed by Manasa Mohan Kumar */
import "../County/CountyList.css"
import Sidebar from '../Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Table from '../../components/Table/Table';
import Piechart from '../../components/Table/Piechat';

function FlightReportList() {
    const sampleFlightsForGraph = [{
        "Name": "Flight 1",
        "Number of Residents availed the discount": "20",
        "no": 20,
        "color": "color-green"
    }, {
        "Name": "Flight 2",
        "Number of Residents availed the discount": "20",
        "no": 20,
        "color": "color-primary"
    }]
    let sampleFlights = [{
        "Name": "Flight 1",
        "Number of Residents availed the discount": "20",

    }, {
        "Name": "Flight 2",
        "Number of Residents availed the discount": "20",

    }]
    const totalResidents = "100";
    const totalResidentsRegistered = "40";
    const message = "Not availed the discount";
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let role = urlParams.getAll('role')[0];
    let title = "Flight Report";
    let showAction = true;
    if (role == "inspector") {
        title = "Flight Report for county 1";
    } else if (role == "resident") {
        title = "Availed benefits history for flights";
        showAction = false;
        sampleFlights = [{
            "Name": "Flight 1",
            "Date": "03/12/2021",
            "Availed Benefit": "5%"
        }, {
            "Name": "Flight 2",
            "Date": "08/12/2020",
            "Availed Benefit": "10%"

        }]
    };
    let graphStyle = { display: role == "resident" ? "none" : "" };

    return (
        <div class="layer">
            <div class="flex-container">
                <Sidebar />
                <div class="main-wrapper">
                    <Navbar />
                    <main class="main users chart-page" id="skip-target">
                        <div class="page-container">
                            <div class="flex-column">
                                <h1 class="page-title">{title}</h1>
                                {/* <button class="button" onClick={() => navigate("/new/Flight")}>Add New Flight</button> */}
                            </div>
                            <div class="pie-chart-section" style={graphStyle}>
                                <Piechart dataList={sampleFlightsForGraph} totalItems={totalResidents} totalItemsInChart={totalResidentsRegistered} message={message} />
                            </div>
                            <div class="page-card">
                                <Table dataList={sampleFlights} report={showAction} showActionHeader={showAction} path="report/insights" />
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


export default FlightReportList;

