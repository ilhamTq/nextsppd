"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { VscCheck } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";

const BiayaPerjalanan = ({ biayaa, sppd }) => {
    // console.log(biayaa.sppd)
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  return (
    <div>
      <button
        className="btn btn-sm bg-sky-600 hover:bg-blue-500 text-white normal-case"
        onClick={handleModal}
      >
        Biaya Perjalanan
      </button>
      <div
        className={isOpen ? "modal mt-0 pt-0 modal-open" : "modal mt-0 pt-0"}
      >
        <div className="overflow-y-auto modal-box fixed flex-col my-0 h-auto pt-2 top-0 w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-black pb-3 mt-0">Biaya Perjalanan</h3>
          <div className="flex w-full">
            <table className="table w-full">
              <tbody>
                <tr>
                    <th>Nama</th>
                    <td>{sppd.spt.pegawai.nama}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-action mt-3">
            <button type="button" className="btn" onClick={handleModal}>
              Tutup
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BiayaPerjalanan;
