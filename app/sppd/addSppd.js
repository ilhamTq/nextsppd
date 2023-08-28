"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { VscCheck } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";

const AddSpt = ({ sppdinas, sptugas }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  // console.log(jurusann)

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    // inputs.tmtGolongan = new Date(inputs.tmtGolongan).toISOString()
    inputs.tglsppd = new Date(inputs.tglsppd).toISOString();
    inputs.idSpt = parseInt(inputs.idSpt);
    e.preventDefault();
    axios
      .post("/api/sppd", inputs)
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
        <div className="modal-box fixed flex-col my-0 h-fit pt-3 top-4">
          <form onSubmit={handleSubmit} className="w-full">
            <h3 className="font-bold text-lg pb-3 mt-0">
              Surat Perintah Perjalanan Dinas
            </h3>
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
