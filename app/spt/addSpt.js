"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { VscCheck } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const AddSpt = ({ pegawaii, sptugas, pjsptt, pjsppdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  // console.log(jurusann)

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    inputs.tglspt = new (inputs.tglspt).toISOString();
    inputs.berangkat = new Date(inputs.berangkat).toISOString();
    inputs.kembali = new Date(inputs.kembali).toISOString();
    inputs.idPegawai = parseInt(inputs.idPegawai);
    inputs.idPjspt = parseInt(inputs.idPjspt);
    inputs.idPjsppd = parseInt(inputs.idPjsppd);
    e.preventDefault();
    axios
      .post("/api/spt", inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
        router.refresh();
        setIsOpen(false);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <button
        className="btn btn-sm bg-sky-600 hover:bg-blue-500 text-white normal-case"
        onClick={handleModal}
      >
        Add <MdOutlinePersonAddAlt1 size={20} />
      </button>
      <div
        className={isOpen ? "modal mt-0 pt-0 modal-open" : "modal mt-0 pt-0"}
      >
        <div className="modal-box fixed flex-col my-0 min-h-fit pt-3 top-4">
          <form onSubmit={handleSubmit} className="w-full">
            <h3 className="font-bold text-lg pb-3 mt-0">
              Surat Perintah Tugas
            </h3>
            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="No. SPT"
                name="nospt"
                value={inputs.nospt}
                onChange={handleChange}
              />
            </div>

            <label className="my-2 ml-1">Tanggal SPT</label>
            <div className="form-control w-full">
              <input
                type="date"
                className="input input-bordered mb-3"
                placeholder="Tanggal SPT"
                name="tglspt"
                value={inputs.tglspt || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <select
                className="select select-bordered mb-3"
                name="idPegawai"
                value={inputs.idPegawai}
                onChange={handleChange}
              >
                <option value="" selected disabled>
                  Pilih Pegawai SPT
                </option>
                {pegawaii.map((pegawai) => (
                  <option value={pegawai.id} key={pegawai.id}>
                    {pegawai.nama}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Transportasi"
                name="angkutan"
                value={inputs.angkutan}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Tempat Berangkat"
                name="dari"
                value={inputs.dari}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Tempat Tujuan"
                name="tujuan"
                value={inputs.tujuan}
                onChange={handleChange}
              />
            </div>

            <label className="my-2 ml-1">Tanggal Berangkat</label>
            <div className="form-control w-full">
              <input
                type="date"
                className="input input-bordered mb-3"
                placeholder="Tanggal Berangkat"
                name="berangkat"
                value={inputs.berangkat || ""}
                onChange={handleChange}
              />
            </div>

            <label className="my-2 ml-1">Tanggal Kembali</label>
            <div className="form-control w-full">
              <input
                type="date"
                className="input input-bordered mb-3"
                placeholder="Tanggal Kembali"
                name="kembali"
                value={inputs.kembali || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Lama Perjalanan Dinas"
                name="lama"
                value={inputs.lama}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Keperluan"
                name="keperluan"
                value={inputs.keperluan}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Anggaran"
                name="anggaran"
                value={inputs.anggaran}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Mata Anggaran"
                name="mt_anggaran"
                value={inputs.mt_anggaran}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Ditetapkan di"
                name="tempat"
                value={inputs.tempat}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <select
                className="select select-bordered mb-3"
                name="idPjspt"
                value={inputs.idPjspt}
                onChange={handleChange}
              >
                <option value="" selected disabled>
                  Pilih Penanda Tangan SPT
                </option>
                {pjsptt.map((pjspt) => (
                  <option value={pjspt.id} key={pjspt.id}>
                    {pjspt.pegawai.nama}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full">
              <select
                className="select select-bordered mb-3"
                name="idPjsppd"
                value={inputs.idPjsppd}
                onChange={handleChange}
              >
                <option value="" selected disabled>
                  Pilih Penanda Tangan SPPD
                </option>
                {pjsppdd.map((pjsppd) => (
                  <option value={pjsppd.id} key={pjsppd.id}>
                    {pjsppd.nama}
                  </option>
                ))}
              </select>
            </div>

            <div className="modal-action mt-3">
              <button
                type="button"
                className="btn bg-red-500 hover:bg-red-700 duration-300 btn-sm"
                onClick={handleModal}
              >
                <CgClose size={23} />
              </button>
              <button
                type="submit"
                className="btn text-white bg-green-400 hover:bg-green-500 duration-300 btn-sm"
              >
                <VscCheck size={23} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSpt;
