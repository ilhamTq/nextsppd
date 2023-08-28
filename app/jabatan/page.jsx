import AddJabatan from "./addJabatan";
import DeleteJabatan from "./deleteJabatan";
import EditJabatan from "./editJabatan";
import { PrismaClient } from "@prisma/client";
import PaginationJabatan from "@/components/PaginationControls/PaginationJabatan";

const prisma = new PrismaClient();

async function getJabatan() {
  return await prisma.jabatan.findMany();
}

const Jabatan = async ({ searchParams }) => {
  const jabatans = await getJabatan();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "7";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const jabatann = jabatans.slice(start, end);
  return (
    <div className="bg-white rounded-lg p-5 outline-purple-950 drop-shadow min-h-fit">
      <div className="justify-between items-center flex p-2">
        <h3 className="text-3xl ">Jabatan</h3>
        <div className="mb-2 justify-between items-center flex">
          <AddJabatan />
        </div>
      </div>
      <div className="rounded-lg shadow">
        <table className="w-full overflow-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-2 text-sm font-semibold w-content text-left">
                No
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Nama
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jabatann.map((jabatan, index) => (
              <tr key={jabatan.id} className="bg-white">
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {jabatan.nama}
                </td>
                <td className="justify-start items-center flex">
                  <EditJabatan jabatan={jabatan} />
                  <DeleteJabatan jabatan={jabatan} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <PaginationJabatan
          hasNextPage={end < jabatans.length}
          hasPrevPage={start > 0}
        />
    </div>
  );
};

export default Jabatan;
