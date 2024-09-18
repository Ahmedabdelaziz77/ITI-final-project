import { useAuth } from "../contexts/AuthContext";
import { deleteUser, getUsers } from "../utils/usersLocalStorage";
import { CiCircleRemove } from "react-icons/ci";
function UsersDashboard() {
  const users = getUsers();
  const getRoleBadgeColor = (role) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-yellow-200 text-yellow-800";
      case "user":
        return "bg-green-200 text-green-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };
  return (
    <div className="pt-32 pb-12 lg:py-32 h-[150vh] flex  justify-start">
      <div className="max-w-[1300px] mx-auto">
        <div className="container mx-auto w-full">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
                User Management
              </h1>
              <div className="shadow overflow-hidden rounded-lg border-b border-gray-200">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Password
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.email} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.password}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadgeColor(
                              user.role
                            )}`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td
                          onClick={() => deleteUser(user.email)}
                          className="flex justify-center items-center py-6 cursor-pointer"
                        >
                          <CiCircleRemove width={20} height={20} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersDashboard;
