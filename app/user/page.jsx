import PaginationUser from "@/components/PaginationControls/PaginationUser";
import AddUser from "./addUser";
import DeleteUser from "./deleteUser";
import EditUser from "./editUser";
// import Generate from "./generate";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getUser() {
  return await prisma.user.findMany();
}

const User = async ({ searchParams }) => {
  const userss = await getUser();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "7";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const users = userss.slice(start, end);
  return (
    <div className="bg-white rounded-lg mr-2 p-2 outline-purple-950 drop-shadow h-max">
      <div className="justify-between items-center flex p-2">
        <h3 className="text-3xl ">User</h3>
        <div className="mb-2 z-50 justify-between items-center flex h-fit">
          <AddUser />
        </div>
      </div>
      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full overflow-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                No
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Nama
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Email
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Username
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user, index) => (
              <tr key={user.id} className="bg-white">
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {user.username}
                </td>
                <td className="justify-start items-center flex">
                  {/* <Generate user={user} /> */}
                  <EditUser user={user} />
                  <DeleteUser user={user} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationUser 
      hasNextPage={end < userss.length}
      hasPrevPage={start > 0}/>
    </div>
  );
};

export default User;
