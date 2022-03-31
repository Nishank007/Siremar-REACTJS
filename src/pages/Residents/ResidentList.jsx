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

function ResidentList() {
    const navigate = useNavigate();
    const sampleResidents = [{
        "Name": "Resident 1",
        "Gender": "Male",
        "Age": 24,
        "Phone Number": "8173936701",
        "Address": "1001 UTA blvd, campus edge"
    }, {
        "Name": "Resident 2",
        "Gender": "Female",
        "Age": 24,
        "Phone Number": "5674348876",
        "Address": "Arlington,Texas,76012"
    }];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let role = urlParams.getAll('role')[0];
    const showActionHeader = true;
    let showAction = role == "resident" ? false : true;


    return (
        <div class="layer">
            <div class="flex-container">
                <Sidebar />
                <div class="main-wrapper">
                    <Navbar />
                    <main class="main users chart-page" id="skip-target">
                        <div class="page-container">
                            <div class="flex-column">
                                <h1 class="page-title">Residents</h1>
                                <button class="button" onClick={() => navigate("/new/resident")}>Add New Resident</button>
                            </div>
                            <div class="page-card">
                                <Table dataList={sampleResidents} showActionHeader={showActionHeader} showAction={showAction} register={!showAction} />
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


export default ResidentList;

