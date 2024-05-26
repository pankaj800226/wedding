import Banner from "./Banner"
import { cameraData } from '../components/data'

const Home = () => {

  return (
    <>
      <Banner />
      <div className="home_text">
        <h1>Best Pre-Wedding</h1>

        <div className="home_container">
          <div className="home">
            {cameraData.length === 0 ? (
              <div>
                <h2 style={{ textAlign: "center", marginTop: "3rem" }}> 🙃 Item Not yet  🙃</h2>
              </div>
            ) : (
              cameraData.map((item) => (
                  <div className="home_section" key={item.id}>
                    <div>
                      <img src={item.imgUrl} alt="" />
                    </div>
                    <h2>{item.name}</h2>
                  </div>
              ))
            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default Home