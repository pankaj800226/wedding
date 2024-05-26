import { useState } from "react";
import { FiEdit2 } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { cameraData } from "../../components/data";
import SideBarMenu from '../../components/SidebarMenu'
const ProductManage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <div className="dashboard_container">
                <SideBarMenu />
                <main>
                    <div className="manage_container">
                        <div className="search_baar">
                            <div className="bar">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />

                            </div>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cameraData.length === 0 ? (
                                    <tr>
                                        <td colSpan="5">Data Not Found</td>
                                    </tr>
                                ) : (
                                    cameraData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td><img src={data.imgUrl} alt="" /></td>
                                            <td>{data.name}</td>

                                            <td>
                                                <FiEdit2 title="Edit" />

                                            </td>
                                            <td>
                                                <AiFillDelete title="Delete" />
                                            </td>

                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>

                    </div>
                </main>
            </div>
        </>
    );
}

export default ProductManage;
