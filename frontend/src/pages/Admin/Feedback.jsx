import SidebarMenu from "../../components/SidebarMenu"

const Feedback = () => {
  return (
    <div className="dashboard_container">
      <SidebarMenu />
      <main>
        <div className="feedback_container">
          <h2>Comment Your Feedback</h2>
          <textarea name="" id="" placeholder="Comment Your Feedback"></textarea>
          <button>Send</button>
        </div>
      </main>
    </div>
  )
}

export default Feedback