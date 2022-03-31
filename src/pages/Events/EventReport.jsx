// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)


/* Developed by K S Pavan Krishna */
import "../County/CountyList.css"
import Sidebar from '../Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Table from '../../components/Table/Table';
import Piechart from '../../components/Table/Piechat';

function EventReportList() {
    const sampleEventsForGraph = [{
        "Name": "Event 1",
        "Number of Residents availed the discount": "20",
        "no": 20,
        "color": "color-green"
    }, {
        "Name": "Event 2",
        "Number of Residents availed the discount": "20",
        "no": 20,
        "color": "color-primary"
    }]
    let sampleEvents = [{
        "Name": "Event 1",
        "Number of Residents availed the discount": "20",

    }, {
        "Name": "Event 2",
        "Number of Residents availed the discount": "20",

    }]
    const totalResidents = "100";
    const totalResidentsRegistered = "40";
    const message = "Not availed the discount";
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let role = urlParams.getAll('role')[0];
    let title="Event Report";
    let  showAction=true;
    if(role=="inspector"){
        title="Event Report for county 1";
    }else if(role=="resident"){
        title="Availed benefits history for events";
        showAction=false;
        sampleEvents = [{
           "Name": "Event 1",
           "Date": "03/12/2021",
           "Availed Benefit":"Insurance"
       }, {
           "Name": "Event 2",
           "Date": "08/12/2020",
           "Availed Benefit":"Insurance"
   
       }]
   }
   let graphStyle = { display: role=="resident"? "none" : "" };
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
                                {/* <button class="button" onClick={() => navigate("/new/Event")}>Add New Event</button> */}
                            </div>
                            <div class="pie-chart-section" style={graphStyle}>
                                <Piechart dataList={sampleEventsForGraph} totalItems={totalResidents} totalItemsInChart={totalResidentsRegistered} message={message} />
                            </div>
                            <div class="page-card">
                                <Table dataList={sampleEvents} report={showAction} showActionHeader={showAction} path="report/insights" />
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


export default EventReportList;

