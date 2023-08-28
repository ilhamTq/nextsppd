"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const EditSppd = ({ sppd, sptugas }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState(sppd);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const handleSubmit = async (e) => {
    inputs.tglsppd = new Date(inputs.tglsppd).toISOString();
    inputs.idSpt = parseInt(inputs.idSpt);
    e.preventDefault();
    axios
      .patch(`/api/sppd/${sppd.id}`, inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
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
        className="btn text-white bg-green-400 hover:bg-green-500 duration-300 btn-sm"
        onClick={handleModal}
      >
        <HiOutlinePencilSquare size={20} />
      </button>
      <div
        className={
          isOpen ? "modal mt-0 pt-0 modal-open fixed" : "modal mt-0 pt-0 fixed"
        }
      >
        <div className="modal-box fixed flex flex-col my-0 h-fit pt-3">
          <h3 className="font-bold text-lg text-black pb-3 mt-0">Edit SPPD</h3>
          <form onSubmit={handleSubmit} className="w-full text-black">
            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="No. SPPD"
                name="nosppd"
                value={inputs.nosppd}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="date"
                className="input input-bordered mb-3"
                placeholder="Tanggal SPPD"
                name="tglsppd"
                value={inputs.tglsppd || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <select
                className="select select-bordered mb-3"
                name="idSpt"
                value={inputs.idSpt}
                onChange={handleChange}
              >
                <option value="" selected disabled>
                  Pilih SPT berdasarkan pegawai
                </option>
                {sptugas.map((spt) => (
                  <option value={spt.id} key={spt.id}>
                    {spt.pegawai.nip} : {spt.pegawai.nama}
                  </option>
                ))}
              </select>
            </div>

            <div className="modal-action mt-3">
              <button type="button" className="btn" onClick={handleModal}>
                Tutup
              </button>
              <button type="submit" className="btn btn-primary">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSppd;
