import AddGolongan from "./addGolongan";
import DeleteGolongan from "./deleteGolongan";
import EditGolongan from "./editGolongan";
import { PrismaClient } from "@prisma/client";
import PaginationControls from "@/components/PaginationControls/PaginationGolongan";
const prisma = new PrismaClient();

async function getGolongan() {
  return await prisma.golongan.findMany();
}

const Golongan = async ({ searchParams }) => {
  const golongans = await getGolongan();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "7";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const golongann = golongans.slice(start, end);

  return (
    <div className="bg-white rounded-lg p-5 outline-purple-950 drop-shadow min-h-fit">
      <div className="justify-between items-center flex p-2">
        <h3 className="text-3xl ">Golongan</h3>
        <div className="mb-2 justify-between items-center flex">
          <AddGolongan />
        </div>
      </div>
      <div className="rounded-lg shadow overflow-x-auto">
        <table className="w-full overflow-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-2 text-sm font-semibold w-content text-left">
                No
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Nama Golongan
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Ruang
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {golongann.map((golongan, index) => (
              <tr key={golongan.id} className="bg-white">
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {golongan.nama}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {golongan.ruang}
                </td>
                <td className="justify-start items-center flex">
                  <EditGolongan golongan={golongan} />
                  <DeleteGolongan golongan={golongan} />
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
            <PaginationControls
              hasNextPage={end < golongans.length}
              hasPrevPage={start > 0}
            />
    </div>
  );
};

export default Golongan;
