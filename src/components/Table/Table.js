// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)


/* Developed by Manasa Mohan Kumar */
import { Component } from 'react';
import "../../pages/County/CountyList.css";


class Table extends Component {
    render() {
        let reportStyle = { display: this.props.report ? "" : "none" };
        let showActionHeader = { display: this.props.showActionHeader ? "" : "none" };
        let showAction = { display: this.props.showAction ? "" : "none" };
        let registerStyle = { display: this.props.register ? "" : "none" };
        return (

            <div class="users-table table-wrapper">

                <table class="posts-table">
                    <thead class="table-head-wrapper">

                        <tr key={"header"}>
                            {Object.keys(this.props.dataList[0]).map((key) => (
                                <th class="table-head">{key}</th>
                            ))}
                            <th class="table-head" style={showActionHeader}>Actions</th>

                        </tr>

                    </thead>
                    <tbody>

                        {this.props.dataList.map((item) => (
                            <tr key={item.id}>
                                {Object.values(item).map((val) => (
                                    <td>{val}</td>

                                ))}
                                <td >

                                    <ul style={showAction}>
                                        <a href="##" class="icon table-action edit" ></a>
                                        <a href="##" class="icon table-action delete" ></a>

                                    </ul>
                                    <a href={this.props.path} class="dashboard-click-btn" style={reportStyle}>Click to know more</a>
                                    <a style={registerStyle} class="dashboard-click-btn" >Click to register</a>
                                    {/* <ul class="users-item-dropdown dropdown">
                                            <span class="icon setting" ></span>
                                            <li><a href="##">Edit</a></li>
                                            <li><a href="##">Quick edit</a></li>
                                            <li><a href="##">Trash</a></li>
                                        </ul> */}


                                </td>

                            </tr>
                        ))}




                        <tr>

                        </tr>


                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;

