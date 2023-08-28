"use client";
import { useState, SyntheticEvent } from "react";
import moment from "moment";
import Generate from "./view/generate";
import "moment/locale/id";
moment.locale("id");

const View = ({ spt }) => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(pegawai);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="btn text-white bg-blue-400 hover:bg-blue-500 normal-case duration-300 btn-sm"
        onClick={handleModal}
      >
        View
      </button>
      <div
        className={isOpen ? "modal mt-0 pt-0 modal-open" : "modal mt-0 pt-0"}
      >
        <div className="overflow-y-auto modal-box fixed flex-col my-0 h-fit pt-2 top-0 w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-black pb-3 mt-0">Detail</h3>
          <div className="flex w-full">
            <table className="table w-full">
              <tbody>
                <tr>
                  <th>No SPT</th>
                  <td>: {spt.nospt}</td>
                </tr>
                <tr>
                  <th>Tanggal SPT</th>
                  <td>: {moment(spt.tglspt).format("LL")}</td>
                </tr>
                <tr>
                  <th>Nama Pegawai</th>
                  <td>: {spt.pegawai.nama}</td>
                </tr>
                <tr>
                  <th>Transportasi</th>
                  <td>: {spt.angkutan}</td>
                </tr>
                <tr>
                  <th>Dari</th>
                  <td>: {spt.dari}</td>
                </tr>
                <tr>
                  <th>Tujuan</th>
                  <td>: {spt.tujuan}</td>
                </tr>
                <tr>
                  <th>Tgl. Berangkat</th>
                  <td>: {moment(spt.berangkat).format("LL")}</td>
                </tr>
                <tr>
                  <th>Tgl. Kembali</th>
                  <td>: {moment(spt.kembali).format("LL")}</td>
                </tr>
              </tbody>
            </table>
            <div className="divider divider-horizontal"></div>
            <table className="table w-full">
              <tbody>
                <tr>
                  <th>Lama Perjalanan</th>
                  <td>: {spt.lama}</td>
                </tr>
                <tr>
                  <th>Maksud Perjalanan Dinas</th>
                  <td>: {spt.keperluan}</td>
                </tr>
                <tr>
                  <th>Anggaran</th>
                  <td>: {spt.anggaran}</td>
                </tr>
                <tr>
                  <th>Mata Anggaran</th>
                  <td>: {spt.mt_anggaran}</td>
                </tr>
                <tr>
                  <th>Ditetapkan di</th>
                  <td>: {spt.tempat}</td>
                </tr>
                <tr>
                  <th>Penanda Tangan SPT</th>
                  <td>: {spt.pjspt.pegawai.nama}</td>
                </tr>
                <tr>
                  <th>Penanda Tangan SPPD</th>
                  <td>: {spt.pjsppd.nama}</td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-action mt-3">
            <button type="button" className="btn" onClick={handleModal}>
              Tutup
            </button>
            <Generate spt={spt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
