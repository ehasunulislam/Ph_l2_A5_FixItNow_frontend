import { getAllUsers } from "../_action/getAllUserAction"
import GetAllUsers from "./_components/GetAllUsers"

const AdminDashboardPage = async () => {

  const res = await getAllUsers();

  return (
    <div className="">
      <GetAllUsers users={res.data} />
    </div>
  )
}

export default AdminDashboardPage
