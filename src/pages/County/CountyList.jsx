// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)

/* Developed by Manasa Mohan Kumar */
import "./CountyList.css"
import Sidebar from "../Sidebar/Sidebar.js";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router';
import Table from "../../components/Table/Table";


function CountyList() {
    const navigate = useNavigate();
    const sampleFerrys = [{
        "Name": "County 1",
        "Address": "1001 UTA blvd, campus edge",

    }, {
        "Name": "County 2",
        "Address": "1001 UTA blvd, campus edge",


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
                                <h1 class="page-title">Counties</h1>
                                <button class="button" onClick={() => navigate("/new/county")}>Add New County</button>
                            </div>
                            <div class="page-card">

                                <Table dataList={sampleFerrys} showActionHeader={showActionHeader} showAction={showAction} register={!showAction}/>

                            </div>
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );

}

export default CountyList;

