"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { VscCheck } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";

const AddJabatan = ({ jabatan }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/api/jabatan", inputs)
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

  async function getData() {
    const res = await fetch("http://localhost:3000/api/jabatan");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

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
            <h3 className="font-bold text-lg pb-3 mt-0">Add Jabatan</h3>
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

export default AddJabatan;
