import AddSppd from "./addSppd";
import DeleteSppd from "./deleteSppd";
import EditSppd from "./editSppd";
import { PrismaClient } from "@prisma/client";
// import Generate from "./view/generate";
import View from "./view";
import moment from "moment";
import PaginationSppd from "@/components/PaginationControls/PaginationSppd";
import Link from "next/link";
import "moment/locale/id";
moment.locale("id");
const prisma = new PrismaClient();

async function getSppd() {
  return await prisma.sppd.findMany({
    include: {
      spt: {
        include: {
          pjsppd: {
            include: {
              golongan: true,
            },
          },
          pjspt: {
            include: {
              pegawai: {
                include: {
                  jabatan: true,
                },
              },
            },
          },
          pegawai: {
            include: {
              golongan: true,
              jabatan: true,
            },
          },
        },
      },
    },
  });
}

async function getSpt() {
  return await prisma.spt.findMany({
    include: {
      pegawai: true,
    },
  });
}

const Sppd = async ({ searchParams }) => {
  const sppdinass = await getSppd();
  const sptugas = await getSpt();
  // console.log;
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "7";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const sppdinas = sppdinass.slice(start, end);

  return (
    <div className="bg-white rounded-lg mr-2 p-2 outline-purple-950 drop-shadow min-h-fit">
      <div className="justify-between items-center flex p-2">
        <h3 className="text-3xl ">Surat Perintah Perjalanan Dinas</h3>
        <div className="mb-2 justify-between items-center flex">
          <AddSppd sppdinas={sppdinas} sptugas={sptugas} />
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
                No. SPPD
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Tanggal SPPD
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Pegawai ditugaskan
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Aksi
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sppdinas.map((sppd, index) => (
              <tr key={sppd.id} className="bg-white">
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {sppd.nosppd}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {moment(sppd.tglsppd).format("LL")}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {sppd.spt.pegawai.nip} : {sppd.spt.pegawai.nama}
                </td>
                <td className="justify-start items-center p-3 text-sm flex whitespace-nowrap">
                  {/* <Generate sppd={sppd} /> */}
                  <View sppd={sppd} />
                  <EditSppd sppd={sppd} sptugas={sptugas} />
                  <DeleteSppd sppd={sppd} />
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <Link href="/sppd/biaya">
                    <button className="btn btn-sm bg-sky-600 hover:bg-blue-500 text-white normal-case">
                      Biaya Perjalanan
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationSppd
          hasNextPage={end < sppdinass.length}
          hasPrevPage={start > 0}
        />
    </div>
  );
};

export default Sppd;
