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

function InspectorList() {
    const navigate = useNavigate();

    const sampleInspectors = [{
        "Name": "Inspector 1",
        "Gender": "Male",
        "Assigned County": "WS",
        "Phone Number": "8173936701",
        "Verified": "Yes"
    }, {
        "Name": "Inspector 2",
        "Gender": "Female",
        "Assigned County": "Tarrant",
        "Phone Number": "6923937753",
        "Verified": "No"

    }];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let role = urlParams.getAll('role')[0];
    const showActionHeader = true;
    let showAction = role == "admin" ? true : false;
    return (
        <div class="layer">
            <div class="flex-container">
                <Sidebar />
                <div class="main-wrapper">
                    <Navbar />
                    <main class="main users chart-page" id="skip-target">
                        <div class="page-container">
                            <div class="flex-column">
                                <h1 class="page-title">Inspectors</h1>
                                <button class="button" onClick={() => navigate("/new/inspector")}>Add New Inspector</button>
                            </div>
                            <div class="page-card">
                                <Table dataList={sampleInspectors} showActionHeader={showActionHeader} showAction={showAction} register={!showAction}/>
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


export default InspectorList;

