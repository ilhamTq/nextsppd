// "use client";
// import jsPDF from "jspdf";
// import React, { PureComponent } from "react";
// import "jspdf-autotable";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const Generate = async ({ user }) => {
//   const router = useRouter();

//   const generate = async () => {
//     const doc = new jsPDF();
//     const result = await fetch(`/api/users/${user.id}`, { method: "GET" });

//     // doc.addImage("/images/spt.png", "png", 23, 30, 32, 32);
//     doc.addImage("/images/spt.png", "JPEG", 23, 23, 32, 32);
//     doc.text(72, 30, "PEMERINTAH KABUPATEN BERAU");
//     doc.text(85, 37, "SEKRETARIAT DAERAH");
//     doc.text(61, 44, "Jl. APT. Pranoto No. 01 Telp. (0554) 2024306");
//     doc.text(95, 51, "Tanjung Redeb");
//     doc.setLineWidth(0.1);
//     doc.line(10, 58, 200, 58);
//     doc.setLineWidth(1.5);
//     doc.line(10, 60, 200, 60);
//     doc.text(69, 80, "SURAT PERINTAH TUGAS");
//     doc.setLineWidth(0.1);
//     doc.line(69, 81, 139, 81);
//     doc.text(69, 89, `Nomor : ${user.nama}`);
//     // doc.text(69, 94, `Nomor : ${user.nama}`);
//     // doc.text(75, 94, {users.nama});

//     doc.save("users.pdf");
//   };

//   return (
//     <div>
//       <button
//         className="btn btn-sm bg-sky-600 hover:bg-blue-500 text-white normal-case"
//         onClick={generate}
//       >
//         Generate PDF
//       </button>
//     </div>
//   );
// };

// export default Generate;
