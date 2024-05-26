import { useState } from "react";
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
                                <img src='userprofile.jpg' alt="User Profile" />
                            </div>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {cameraData.length === 0 ? (
                                    <tr>
                                        <td colSpan="4">Data Not Found</td>
                                    </tr>
                                ) : (
                                    cameraData.map((data) => (
                                        <tr key={data._id}>
                                            <td>{data.id}</td>
                                            <td><img src={data.imgUrl} alt="" /></td>
                                            <td>{data.name.substring(0, 20)}</td>
                                            <td>{data.stock}</td>
                                          
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
