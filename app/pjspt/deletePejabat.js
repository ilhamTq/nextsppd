"use client";
import { useState, SyntheticEvent } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { FiTrash } from "react-icons/fi";

const DeletePejabat = ({ pjspt }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    console.log('hapus',pjspt.id)
    const result = await fetch(`/api/pjspt/${pjspt.id}`,{method:"DELETE"})
    setIsOpen(false);
    router.refresh();
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn bg-red-500 hover:bg-red-700 duration-300 btn-sm" alt="Delete" onClick={handleModal}>
        <FiTrash size={20} className="text-white"/>
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box my-0 mb-8">
          <h3 className="font-bold text-lg">Hapus Pejabat?</h3>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Tidak
              </button>
              <button type="button" className="btn btn-primary" onClick={handleDelete}>
                Ya
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePejabat;
