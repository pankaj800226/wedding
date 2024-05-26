import SidebarMenu from "../../components/SidebarMenu"

const Upload = () => {
    return (
        <div className="dashboard_container">
            <SidebarMenu />
            <main>
                <div className="upload_container">
                    <h2>Upload</h2>
                    <form>
                        <div>
                            <input type="text" placeholder="Name"/>
                        </div>

                        <div>
                            <input type="text" placeholder="**********"/>
                        </div>

                        <div>
                            <input type="text" placeholder="************"/>
                        </div>

                        <div>
                            <input type="file"/>
                        </div>
                        <button>Upload</button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Upload