"use client";
import { useState, SyntheticEvent } from "react";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/user", {
      nama: nama,
      email: email,
      telp: telp,
      username: username,
      password: password,
    });
    setNama("");
    setEmail("");
    setUsername("");
    setTelp("");
    setPassword("");
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Tambah User
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box my-0 mb-8">
          <h3 className="font-bold text-lg">Add User</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                name=""
                className="input input-bordered"
                placeholder="Nama"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                placeholder="Email"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">No. Telp</label>
              <input
                type="text"
                value={telp}
                onChange={(e) => setTelp(e.target.value)}
                className="input input-bordered"
                placeholder="No. Telp"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered"
                placeholder="Username"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                placeholder="Password"
              />
            </div>

            <div className="modal-action">
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

export default AddUser;
