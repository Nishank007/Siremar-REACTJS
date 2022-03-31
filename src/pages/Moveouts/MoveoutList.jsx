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

function MoveoutList() {
    const navigate = useNavigate();
    const sampleMoveouts = [{
        "Name": "Resident 1",
        "Movout date": "09/8/2021",
        "Move out Address": "1001 UTA blvd, campus edge"
    }, {
        "Name": "Resident 2",
        "Movout date": "04/7/2021",
        "Move out Address": "1001 UTA blvd, campus edge"
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
                                <h1 class="page-title">Moveouts</h1>
                                <button class="button" onClick={() => navigate("/new/moveout")}>Add New Moveout</button>
                            </div>
                            <div class="page-card">
                                <Table dataList={sampleMoveouts} showActionHeader={true} showAction={true} register={false} />
                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


export default MoveoutList;

