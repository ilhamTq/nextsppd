import AddPejabat from "./addPejabat";
import DeletePejabat from "./deletePejabat";
import EditPejabat from "./editPejabat";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getPjspt() {
  return await prisma.pjspt.findMany({
    include: {
      pegawai: {include: {
        jabatan: true,
      }},
    },
  });
}

async function getPegawai() {
  return await prisma.pegawai.findMany()
}

const Pejabat = async () => {
  const pjsptt = await getPjspt();
  const pegawaii = await getPegawai();
  return (
    <div className="bg-white rounded-lg p-5 outline-purple-950 drop-shadow h-full">
      <div className="justify-between items-center flex p-2">
        <h3 className="text-3xl ">Pegawai Penanda tangan SPT</h3>
        <div className="mb-2 justify-between items-center flex">
          <AddPejabat pjsptt={pjsptt} pegawaii={pegawaii} />
        </div>
      </div>
      <div className="rounded-lg shadow overflow-auto">
        <table className="w-full overflow-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-2 text-sm font-semibold w-content text-left">
                No
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                NIP
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Nama
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Jabatan
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {pjsptt.map((pjspt, index) => (
              <tr key={pjspt.id} className="bg-white">
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {pjspt.pegawai.nip}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {pjspt.pegawai.nama}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {pjspt.pegawai.jabatan.nama}
                </td>
                <td className="justify-start items-center flex">
                  <EditPejabat pjspt={pjspt} pegawaii={pegawaii} />
                  <DeletePejabat pjspt={pjspt} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pejabat;
