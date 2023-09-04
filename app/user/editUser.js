"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const EditUser = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState( user );

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.patch(`/api/users/${user.id}`, inputs).then((res) => {
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

  async function getData() {
    const res = await fetch("http://localhost:3000/api/users");
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }

  return (
    <div>
      <button className="btn text-white bg-green-400 hover:bg-green-500 duration-300 btn-sm" onClick={handleModal}>
        <HiOutlinePencilSquare size={20} />
      </button>
      <div
        className={isOpen ? "modal mt-0 pt-0 modal-open fixed" : "modal mt-0 pt-0 fixed"}
      >
        <div className="modal-box fixed flex flex-col my-0 h-max pt-3">
          <h3 className="font-bold text-lg text-black pb-3 mt-0">Edit User</h3>
          <form onSubmit={handleSubmit} className="w-full text-black">
            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Nama"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                className="input input-bordered mb-3"
                placeholder="Username"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="password"
                className="input input-bordered mb-3"
                placeholder="Password"
                name="password"
                value={inputs.password || ""}
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

export default EditUser;
