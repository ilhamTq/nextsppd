"use client";
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const downloadPDF = ({ spt }) => {
  const generate = () => {
    // const doc = new jsPDF("l", "mm", [210, 330]);
    const doc = new jsPDF("p");
    const splitText = doc.splitTextToSize(`${spt.pjspt.pegawai.jabatan.nama}`, 80
    );

    // doc.addImage("/images/spt.png", "png", 23, 30, 32, 32);
    doc.addImage("/images/sekda-min-bw.png", "PNG", 31, 23, 46, 32);

    doc.setFontSize(15);
    doc.setFont("arial", "bold");
    doc.text(78, 30, "PEMERINTAH KABUPATEN BERAU");

    doc.setFontSize(24);
    doc.setFont("times", "bold");
    doc.text(73, 39, "SEKRETARIAT DAERAH");

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text(83, 46, "Jl. APT. Pranoto No. 01 Telp. (0554) 2024306");
    doc.text(106, 52, "Tanjung Redeb");
    doc.setLineWidth(0.1);
    doc.line(20, 58, 190, 58);
    doc.setLineWidth(1.5);
    doc.line(20, 60, 190, 60);

    doc.setFontSize(16);
    doc.setFont("times", "bold");
    doc.text("SURAT PERINTAH TUGAS ", 105, 76, null, null, "center");
    doc.setLineWidth(0.2);
    doc.line(69, 77, 140, 77);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`Nomor : ${spt.nospt}`, 105, 84, null, null, "center");
    // doc.text(69, 89, `Nomor : ${spt.nospt}`);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(20, 98, "Kepada");
    doc.text(65, 98, ":");

    doc.text(20, 108, "1.");
    doc.text(25, 108, "a.");
    doc.text(30, 108, "Nama");
    doc.text(65, 108, ":");
    doc.text(67, 108, `${spt.pegawai.nama}`);

    doc.text(25, 115, "b.");
    doc.text(30, 115, "Jabatan");
    doc.text(65, 115, ":");
    doc.text(67, 115, `${spt.pegawai.jabatan.nama}`);

    doc.text(20, 129, "Untuk");
    doc.text(65, 129, ":");
    doc.text(67, 129, `${spt.keperluan}`);

    doc.text(20, 136, "Tujuan");
    doc.text(65, 136, ":");
    doc.text(67, 136, `${spt.tujuan}`);

    doc.text(20, 143, "Beban Anggaran");
    doc.text(65, 143, ":");
    doc.text(67, 143, `${spt.anggaran}`);

    doc.text(20, 150, "Berangkat Tanggal");
    doc.text(65, 150, ":");
    doc.text(67, 150, `${moment(spt.berangkat).format("LL")}`);

    doc.text(20, 157, "Kembali Tanggal");
    doc.text(65, 157, ":");
    doc.text(67, 157, `${moment(spt.kembali).format("LL")}`);

    doc.text(
      20,
      171,
      "Setelah melaksanakan tugas agar membuat laporan kepada yang memerintahkan."
    );
    doc.text(
      20,
      178,
      "Demikian Surat Tugas ini diberikan untuk dipergunakan sebagaimana mestinya."
    );

    doc.text(130, 190, "Diberikan di");
    doc.text(154, 190, ":");
    doc.text(156, 190, `${spt.tempat}`);

    doc.text(130, 195, "Pada Tanggal");
    doc.text(154, 195, ":");
    doc.text(156, 195, `${moment(spt.tglspt).format("LL")}`);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text(155, 204, splitText, "center");

    doc.text(155, 234, `${spt.pjspt.pegawai.nama}`, "center");
    doc.setLineWidth(0.4);
    doc.line(134, 235, 176, 235);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(
      155,
      240,
      `${spt.pjspt.pegawai.golongan.ruang} (${spt.pjspt.pegawai.golongan.nama})`,
      "center"
    );
    doc.text(155, 245, `NIP. ${spt.pjspt.pegawai.nip}`, "center");

    doc.save(`SPT_${spt.pegawai.nama}.pdf`);
  };

  return (
    <div>
      <button
        className="btn bg-sky-600 hover:bg-blue-500 text-white normal-case duration-300"
        onClick={generate}
      >
        Download PDF
      </button>
    </div>
  );
};

export default downloadPDF;
