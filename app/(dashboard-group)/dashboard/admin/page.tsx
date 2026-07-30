import { getAllBookings } from "../_action/getAllBookings";
import { getAllUsers } from "../_action/getAllUserAction"
import GetAllBookings from "./_components/GetAllBookings";
import GetAllUsers from "./_components/GetAllUsers"

const AdminDashboardPage = async () => {

  const res = await getAllUsers();
  const bookings = await getAllBookings();

  return (
    <div className="">
      <GetAllUsers users={res.data} />
      <GetAllBookings bookings={bookings.data} />
    </div>
  )
}

export default AdminDashboardPage
