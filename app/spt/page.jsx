import moment from "moment/moment";
import AddSpt from "./addSpt";
import DeleteSpt from "./deleteSpt";
import EditSpt from "./editSpt";
import { PrismaClient } from "@prisma/client";
import "moment/locale/id";
import View from "./view";
import PaginationSpt from "@/components/PaginationControls/PaginationSpt";
moment.locale("id");
const prisma = new PrismaClient();

async function getSpt() {
  return await prisma.spt.findMany({
    include: {
      pjspt: {
        include: {
          pegawai: {
            include: {
              golongan: true,
              jabatan: true,
            },
          },
        },
      },
      pjsppd: true,
      pegawai: {
        include: {
          jabatan: true,
          golongan: true,
        },
      },
    },
  });
}

async function getPjspt() {
  return await prisma.pjspt.findMany({
    include: {
      pegawai: true,
    },
  });
}

async function getPegawai() {
  return await prisma.pegawai.findMany();
}

async function getPjsppd() {
  return await prisma.pjsppd.findMany();
}

const Pegawai = async ({ searchParams }) => {
  const sptugass = await getSpt();
  const pegawaii = await getPegawai();
  const pjsptt = await getPjspt();
  const pjsppdd = await getPjsppd();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "7";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const sptugas = sptugass.slice(start, end);

  return (
    <div className="bg-white rounded-lg mr-2 p-2 outline-purple-950 drop-shadow h-max">
      <div className="justify-between items-center flex p-2">
        <h3 className="text-3xl ">Surat Perintah Tugas</h3>
        <div className="mb-2 justify-between items-center flex h-fit">
          <AddSpt
            pegawaii={pegawaii}
            sptugas={sptugas}
            pjsptt={pjsptt}
            pjsppdd={pjsppdd}
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
                No. SPT
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Tanggal SPT
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Nama Pegawai
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sptugas.map((spt, index) => (
              <tr key={spt.id} className="bg-white">
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {spt.nospt}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {moment(spt.tglspt).format("LL")}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {spt.pegawai.nama}
                </td>

                <td className="justify-start items-center flex">
                  <View spt={spt} />
                  {/* <Generate spt={spt} /> */}
                  <EditSpt
                    spt={spt}
                    pegawaii={pegawaii}
                    pjsptt={pjsptt}
                    pjsppdd={pjsppdd}
                  />
                  <DeleteSpt spt={spt} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationSpt
          hasNextPage={end < sptugas.length}
          hasPrevPage={start > 0}
        />
    </div>
  );
};

export default Pegawai;
