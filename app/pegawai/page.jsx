import AddPegawai from "./addPegawai";
import DeletePegawai from "./deletePegawai";
import EditPegawai from "./editPegawai";
import { PrismaClient } from "@prisma/client";
import PaginationPegawai from "@/components/PaginationControls/PaginationPegawai";
import View from "./view";
const prisma = new PrismaClient();

async function getPegawai() {
  return await prisma.pegawai.findMany({
    include: {
      golongan: true,
      jabatan: true,
    },
  });
}

async function getGolongan() {
  return await prisma.golongan.findMany();
}

async function getJabatan() {
  return await prisma.jabatan.findMany();
}

const Pegawai = async ({ searchParams }) => {
  const pegawaiii = await getPegawai();
  const golongann = await getGolongan();
  const jabatann = await getJabatan();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "7";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const pegawaii = pegawaiii.slice(start, end);

  return (
    <div className="bg-white rounded-lg mr-2 p-2 outline-purple-950 drop-shadow min-h-fit">
      <div className="justify-between items-center flex p-2">
        <h3 className="text-3xl ">Pegawai</h3>
        <div className="mb-2 justify-between items-center flex">
          <AddPegawai
            pegawaii={pegawaii}
            golongann={golongann}
            jabatann={jabatann}
          />
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
                NIP
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Nama
              </th>

              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Jabatan
              </th>

              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Agama
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {pegawaii.map((pegawai, index) => (
              <tr key={pegawai.id} className="bg-white">
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {pegawai.nip}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {pegawai.nama}
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {pegawai.jabatan.nama}
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {pegawai.agama}
                </td>
                <td className="justify-start items-center flex">
                  <View pegawai={pegawai} />
                  <EditPegawai
                    pegawai={pegawai}
                    golongann={golongann}
                    jabatann={jabatann}
                  />
                  <DeletePegawai pegawai={pegawai} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <PaginationPegawai
              hasNextPage={end < pegawaiii.length}
              hasPrevPage={start > 0}
            />
    </div>
  );
};

export default Pegawai;
