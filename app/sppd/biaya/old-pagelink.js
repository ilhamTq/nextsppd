"use client";
import { useRouter } from "next/navigation";
const Biaya = ({ biayaa }) => {
  const router = useRouter();
  // const { biayaa } = router.query;

  return (
    <div className="bg-white rounded-lg w-85 mr-2 p-2 outline-purple-950 drop-shadow">
      <div className="justify-between items-center flex p-2">
        <h3 className="text-3xl ">Biaya Perjalanan Dinas</h3>
      </div>
      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full overflow-auto">
          <tbody>
            <tr>
              <th>Nama</th>
              <td>{biayaa.uang_saku}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Biaya;
