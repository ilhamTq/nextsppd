import AddPejabat from "./addPejabat";
import DeletePejabat from "./deletePejabat";
import EditPejabat from "./editPejabat";
import { PrismaClient } from "@prisma/client";
import View from "./view";
const prisma = new PrismaClient();

async function getPjsppd() {
  return await prisma.pjsppd.findMany({
    include: {
      golongan: true,
    },
  });
}

async function getGolongan() {
  return await prisma.golongan.findMany();
}

const Pegawai = async () => {
  const pejabat = await getPjsppd();
  const golongann = await getGolongan();
  return (
    <div className="bg-white rounded-lg p-5 outline-purple-950 drop-shadow h-full">
      <div className="justify-between items-center flex p-2">
        <h3 className="text-3xl ">Pejabat Penanda Tangan SPPD</h3>
        <div className="mb-2 justify-between items-center flex">
          <AddPejabat pejabat={pejabat} golongann={golongann} />
        </div>
      </div>
      <div className="rounded-lg shadow oveflow-auto">
        <table className="w-full overflow-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-2 text-sm font-semibold w-content text-left">
                No
              </th>
              <th className="p-3 text-sm font-semibold text-left">NIP</th>
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
            {pejabat.map((pejabatt, index) => (
              <tr key={pejabatt.id} className="bg-white">
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {pejabatt.nip}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {pejabatt.nama}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {pejabatt.jabatan}
                </td>
                <td className="justify-start items-center flex">
                  <View pejabatt={pejabatt}/>
                  <EditPejabat pejabatt={pejabatt} golongann={golongann}/>
                  <DeletePejabat pejabatt={pejabatt} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pegawai;
