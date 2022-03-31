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

function SchoolList() {
    const navigate = useNavigate();
    const sampleSchools = [{
        "Name": "School 1",
        " County": "WS",
        "Phone Number": "8173936701",
        "Address": "1001 UTA blvd, campus edge"
    }, {
        "Name": "School 2",
        "County": "Tarrant",
        "Phone Number": "6923937753",
        "Address": "1001 UTA blvd, campus edge"

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
                                <h1 class="page-title">Schools</h1>
                                <button class="button" style={btnStyle} onClick={() => navigate("/new/school")}>Add New School</button>
                            </div>
                            <div class="page-card">
                                <Table dataList={sampleSchools} showActionHeader={showActionHeader} showAction={showAction} register={!showAction} />
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


export default SchoolList;

