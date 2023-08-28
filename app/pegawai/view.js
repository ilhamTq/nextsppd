"use client";
import { useState, SyntheticEvent } from "react";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const View = ({ pegawai }) => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(pegawai);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="btn text-white bg-blue-400 hover:bg-blue-500 duration-300 btn-sm"
        onClick={handleModal}
      >
        View
      </button>
      <div
        className={isOpen ? "modal mt-0 pt-0 modal-open" : "modal mt-0 pt-0"}
      >
        <div className="modal-box fixed flex-col my-0 h-fit pt-3 top-4">
          <h3 className="font-bold text-lg text-black pb-3 mt-0">
            Detail Pegawai
          </h3>
          <table className="table w-full">
            <tbody>
              <tr>
                <th>NIP</th>
                <td>: {pegawai.nip}</td>
              </tr>
              <tr>
                <th>Nama</th>
                <td>: {pegawai.nama}</td>
              </tr>
              <tr>
                <th>Tempat Lahir</th>
                <td>: {pegawai.tmptlahir}</td>
              </tr>
              <tr>
                <th>Tanggal Lahir</th>
                <td>: {moment(pegawai.tgllahir).format("LL")}</td>
              </tr>
              <tr>
                <th>Golongan</th>
                <td>
                  : {pegawai.golongan.ruang} ({pegawai.golongan.nama})
                </td>
              </tr>
              <tr>
                <th>Jabatan</th>
                <td>: {pegawai.jabatan.nama}</td>
              </tr>
              <tr>
                <th>Agama</th>
                <td>: {pegawai.agama}</td>
              </tr>
            </tbody>
          </table>
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

export default View;
