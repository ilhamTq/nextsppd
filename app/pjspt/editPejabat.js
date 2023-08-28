"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const EditPejabat = ({ pjspt, pegawaii }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState( pjspt );

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  inputs.idPegawai = parseInt(inputs.idPegawai);
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.patch(`/api/pjspt/${pjspt.id}`, inputs).then((res) => {
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

  // async function getData() {
  //   const res = await fetch("http://localhost:3000/api/pjspt");
  
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch data");
  //   }
  
  //   return res.json();
  // }

  return (
    <div>
      <button className="btn text-white bg-green-400 hover:bg-green-500 duration-300 btn-sm" onClick={handleModal}>
        <HiOutlinePencilSquare size={20} />
      </button>
      <div
        className={isOpen ? "modal mt-0 pt-0 modal-open fixed" : "modal mt-0 pt-0 fixed"}
      >
        <div className="modal-box fixed flex flex-col my-0 h-max pt-3">
          <h3 className="font-bold text-lg text-black pb-3 mt-0">Edit Penanda Tangan SPT</h3>
          <form onSubmit={handleSubmit} className="w-full text-black">
            <div className="form-control w-full">
              <select
                className="select select-bordered mb-3"
                name="idPegawai"
                value={inputs.idPegawai}
                onChange={handleChange}
              >
                <option value="" selected disabled>
                  Penanda Tangan SPT
                </option>
                {pegawaii.map((pejabat) => (
                  <option value={pejabat.id} key={pejabat.id}>
                    {pejabat.nama}
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

export default EditPejabat;
