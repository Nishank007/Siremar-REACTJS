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

function FerryReportList() {
    const sampleFerrysForGraph = [{
        "Name": "Ferry 1",
        "Number of Residents availed discount": "35",
        "no": 35,
        "color": "color-green"
    }, {
        "Name": "Ferry 2",
        "Number of Residents availed discount": "65",
        "no": 65,
        "color": "color-primary"
    }]
    let sampleFerrys = [{
        "Name": "Ferry 1",
        "Number of Residents availed discount": "35",

    }, {
        "Name": "Ferry 2",
        "Number of Residents availed discount": "65",

    }]
    const totalResidents = "100";
    const totalResidentsRegistered = "100";
    const message = "Not availed discount";
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let role = urlParams.getAll('role')[0];
    let title="Ferry Report";
    let   showAction=true;
    if(role=="inspector"){
        title="Ferry Report for county 1";
    }else if(role=="resident"){
        title="Availed benefits history for ferry";
        showAction=false;
        sampleFerrys = [{
           "Name": "Ferry 1",
           "Date": "03/12/2021",
           "Availed Benefit":"Insurance"
       }, {
           "Name": "Ferry 2",
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
                                {/* <button class="button" onClick={() => navigate("/new/Ferry")}>Add New Ferry</button> */}
                            </div>
                            <div class="pie-chart-section" style={graphStyle}>
                                <Piechart dataList={sampleFerrysForGraph} totalItems={totalResidents} totalItemsInChart={totalResidentsRegistered} message={message} />
                            </div>
                            <div class="page-card">
                                <Table dataList={sampleFerrys} report={showAction} showActionHeader={showAction} path="report/insights" />
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


export default FerryReportList;

