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

const AddPegawai = ({ pegawaii, golongann, jabatann }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  // console.log(jurusann)

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    inputs.tgllahir = new Date(inputs.tgllahir).toISOString();
    inputs.idGolongan = parseInt(inputs.idGolongan);
    inputs.idJabatan = parseInt(inputs.idJabatan);
    e.preventDefault();
    axios
      .post("/api/pegawai", inputs)
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
            <h3 className="font-bold text-lg pb-3 mt-0">Pegawai</h3>
            <div className="flex w-full">
              <div className="form-control w-full">
                <input
                  type="number"
                  className="input input-bordered mb-3"
                  placeholder="NIP"
                  name="nip"
                  value={inputs.nip}
                  onChange={handleChange}
                />
              </div>

              <div className="divider divider-horizontal"></div>

              <div className="form-control w-full">
                <input
                  type="text"
                  className="input input-bordered mb-3"
                  placeholder="Nama"
                  name="nama"
                  value={inputs.nama || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            
              <div className="divider border-white">Tempat dan Tanggal Lahir</div>
            

            <div className="flex w-full">
              <div className="form-control">
                <input
                  type="text"
                  className="input input-bordered mb-3"
                  placeholder="Tempat Lahir"
                  name="tmptlahir"
                  value={inputs.tmptlahir || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="divider divider-horizontal"></div>
                
              <div className="form-control w-full">
                <input
                  type="date"
                  placeholder="Tanggal Lahir"
                  className="input input-bordered mb-3"
                  name="tgllahir"
                  value={inputs.tgllahir || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-control w-full">
              <select
                className="select select-bordered mb-3"
                name="idGolongan"
                value={inputs.idGolongan}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Pilih Golongan
                </option>
                {golongann.map((golongan) => (
                  <option value={golongan.id} key={golongan.id}>
                    {golongan.nama}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full">
              <select
                className="select select-bordered mb-3"
                name="idJabatan"
                value={inputs.idJabatan}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Pilih Jabatan
                </option>
                {jabatann.map((jabatan) => (
                  <option value={jabatan.id} key={jabatan.id}>
                    {jabatan.nama}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full mb-3">
              <select
                name="agama"
                value={inputs.agama || ""}
                onChange={handleChange}
                className="select select-bordered"
              >
                <option value="" disabled selected>
                  Agama
                </option>
                <option value="Islam">Islam</option>
                <option value="Kristen Protestan">Kristen Protestan</option>
                <option value="Kristen Katolik">Kristen Katolik</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddha">Buddha</option>
                <option value="Khonghucu">Khonghucu</option>
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

export default AddPegawai;
