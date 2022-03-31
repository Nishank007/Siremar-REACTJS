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
import Piechart from '../../components/Table/Piechat';

function SchoolReportList() {
    const navigate = useNavigate();
    const sampleSchoolsForGraph = [{
        "Name": "School 1",
        "Number of Residents registered": "20",
        "no": 20,
        "color": "color-green"
    }, {
        "Name": "School 2",
        "Number of Residents registered": "50",
        "no": 50,
        "color": "color-primary"
    }]
    let sampleSchools = [{
        "Name": "School 1",
        "Number of Residents registered": "20",

    }, {
        "Name": "School 2",
        "Number of Residents registered": "50",

    }]
    const totalResidents = "120";
    const totalResidentsRegistered = "70";
    const message = "Not registered";
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let role = urlParams.getAll('role')[0];
    let title = "School Report";
    let showAction = true;
    if (role == "inspector") {
        title = "School Report for county 1";
    } else if (role == "resident") {
        title = "Registerd schools history";
        if (role == "inspector") {
            title = "Flight Report for county 1";
        } else if (role == "resident") {
            title = "Availed benefits history for flights";
            showAction = false;
            sampleSchools = [{
                "Name": "School 1",
                "Date": "03/12/2021",
                "Availed Benefit": "Free meal "
            }, {
                "Name": "School 2",
                "Date": "08/12/2020",
                "Availed Benefit": "10% on fees"

            }]
        }
    }
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
                                {/* <button class="button" onClick={() => navigate("/new/school")}>Add New School</button> */}
                            </div>
                            <div class="pie-chart-section" style={graphStyle}>
                                <Piechart dataList={sampleSchoolsForGraph} totalItems={totalResidents} totalItemsInChart={totalResidentsRegistered} message={message} />
                            </div>
                            <div class="page-card">
                                <Table dataList={sampleSchools} report={showAction} showActionHeader={showAction} path="report/insights" />
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


export default SchoolReportList;

