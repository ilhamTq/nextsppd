"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const EditGolongan = ({ golongan }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState( golongan );

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.patch(`/api/golongan/${golongan.id}`, inputs).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
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
      <button className="btn text-white bg-green-400 hover:bg-green-500 duration-300 btn-sm" onClick={handleModal}>
        <HiOutlinePencilSquare size={20} />
      </button>
      <div
        className={isOpen ? "modal mt-0 pt-0 modal-open" : "modal mt-0 pt-0"}
      >
        <div className="modal-box absolute flex-col my-0 h-fit pt-3 top-3 overflow-auto">
          <h3 className="font-bold text-lg text-black pb-3 pt-2 mt-0">Edit Golongan</h3>
          <form onSubmit={handleSubmit} className="w-full text-black">
            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Nama Golongan"
                name="nama"
                value={inputs.nama || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Ruang"
                name="ruan"
                value={inputs.ruang || ""}
                onChange={handleChange}
              />
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

export default EditGolongan;
