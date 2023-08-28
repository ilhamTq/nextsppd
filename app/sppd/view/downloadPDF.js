"use client";
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const downloadPDF = ({ sppd }) => {
  const generate = () => {
    const doc = new jsPDF("l", "mm", [210, 330]);
    const splitText = doc.splitTextToSize(
      "Asisten Pembangunan dan Perekonomian Sekretariat Daerah Berau",
      110
    );
    const splitText1 = doc.splitTextToSize(`${sppd.spt.keperluan}`, 170);

    doc.setDrawColor("black");

    //line
    doc.setLineWidth(1 / 72);
    doc.line(5, 5, 5, 205);
    doc.line(325, 5, 325, 205);

    //page divider
    doc.line(165, 5, 165, 205);
    doc.line(5, 5, 325, 5);
    doc.line(5, 205, 325, 205);

    //logo sekda
    doc.addImage("/images/sekda-min.png", "PNG", 10, 7, 25, 18);

    //kop
    doc.setFont("book antiqua", "bold");
    doc.setFontSize(11);
    doc.text("PEMERINTAH KABUPATEN BERAU", 55, 10);

    doc.setFont("bookman old style", "bold");
    doc.setFontSize(12);
    doc.text("SEKRETARIAT DAERAH", 62, 15);

    doc.setFont("arial", "bold");
    doc.setFontSize(10);
    doc.text("Jalan APT. PRANOTO NO.01 TELP.(0554) 2024306", 49, 20);
    doc.text("TANJUNG REDEB", 72, 25);

    //garis pembatas kop surat
    doc.setLineWidth(0.1);
    doc.line(5, 28, 165, 28);
    doc.setLineWidth(1.0);
    doc.line(5, 27, 165, 27);

    //nomor surat
    doc.setFont("arial", "bold");
    doc.setFontSize(14);
    doc.text("SURAT PERINTAH PERJALANAN DINAS", 35, 35);
    doc.setLineWidth(0.1);
    doc.line(35, 36, 130, 36);

    doc.setFont("arial", "bold");
    doc.setFontSize(10);
    doc.text(`Nomor : ${sppd.nosppd}`, 53, 41);

    //isi
    doc.setLineWidth(0.1);
    doc.line(5, 46, 325, 46);

    doc.setFont("arial narrow", "normal");
    doc.setFontSize(9);
    doc.text("1", 7, 50);
    doc.text("Pejabat yang berwenang memberikan perintah", 11, 50);
    doc.text(":", 75, 50);
    doc.text(`${sppd.spt.pjsppd.jabatan}`, 78, 50);

    //+2
    doc.setLineWidth(0.1);
    doc.line(5, 52, 165, 52);

    //+4
    doc.text("2", 7, 56);
    doc.text("Nama pegawai yang diperintahkan", 11, 56);
    doc.text(":", 75, 56);
    doc.text(`${sppd.spt.pegawai.nama}`, 78, 56);

    //+2
    doc.setLineWidth(0.1);
    doc.line(5, 58, 165, 58);

    //+4
    doc.text("3", 7, 61);
    doc.text("a.", 11, 61);
    doc.text("NIP", 14, 61);
    doc.text(":", 75, 61);
    doc.text(`${sppd.spt.pegawai.nip}`, 78, 61);

    doc.text("b.", 11, 65);
    doc.text("Pangkat dan golongan menurut PGSP, 1968", 14, 65);
    doc.text(":", 75, 65);
    doc.text("", 78, 65); //isi disini

    doc.text("c.", 11, 69);
    doc.text("Jabatan", 14, 69);
    doc.text(":", 75, 69);
    doc.text(`${sppd.spt.pjspt.pegawai.jabatan.nama}`, 78, 69);

    doc.text("d.", 11, 73);
    doc.text("Tingkat menurut Peraturan Perjalanan Dinas", 14, 73);
    doc.text(":", 75, 73);
    doc.text("", 78, 73); //isi disini

    //+2
    doc.setLineWidth(0.1);
    doc.line(5, 75, 165, 75);

    //+4
    doc.text("4", 7, 79);
    doc.text("Maksud Perjalanan Dinas", 11, 79);
    doc.text(":", 75, 79);
    doc.text(splitText1, 78, 79);

    //+2
    doc.setLineWidth(0.1);
    doc.line(5, 85, 165, 85);

    doc.text("5", 7, 89);
    doc.text("Alat Angkut yang digunakan", 11, 89);
    doc.text(":", 75, 89);
    doc.text(`${sppd.spt.angkutan}`, 78, 89);

    //+2
    doc.setLineWidth(0.1);
    doc.line(5, 91, 325, 91);

    //+4
    doc.text("6", 7, 95);
    doc.text("a.", 11, 95);
    doc.text("Tempat Berangkat", 14, 95);
    doc.text(":", 75, 95);
    doc.text(`${sppd.spt.dari}`, 78, 95);

    doc.text("b.", 11, 99);
    doc.text("Tempat Tujuan", 14, 99);
    doc.text(":", 75, 99);
    doc.text(`${sppd.spt.tujuan}`, 78, 99);

    //+2
    doc.setLineWidth(0.1);
    doc.line(5, 101, 165, 101);

    //+4
    doc.text("7", 7, 105);
    doc.text("a.", 11, 105);
    doc.text("Lamanya Perjalanan Dinas", 14, 105);
    doc.text(":", 75, 105);
    doc.text(`${sppd.spt.lama}`, 78, 105);

    doc.text("b.", 11, 109);
    doc.text("Tanggal Berangkat", 14, 109);
    doc.text(":", 75, 109);
    doc.text(`${moment(sppd.spt.berangkat).format("LL")}`, 78, 109);

    doc.text("c.", 11, 113);
    doc.text("Tanggal harus kembali", 14, 113);
    doc.text(":", 75, 113);
    doc.text(`${moment(sppd.spt.kembali).format("LL")}`, 78, 113);

    //+2
    doc.setLineWidth(0.1);
    doc.line(5, 115, 165, 115);

    doc.text("8", 7, 119);
    doc.text("Pengikut : Nama", 11, 119);
    doc.text(":", 75, 119);
    doc.text("", 78, 119); //isi disini

    //+2
    doc.setLineWidth(0.1);
    doc.line(5, 121, 165, 121);

    //+4
    doc.text("9", 7, 125);
    doc.text("Pembebanan Anggaran", 11, 125);
    doc.text(":", 75, 125);

    doc.text("a.", 11, 129);
    doc.text("Instansi", 14, 129);
    doc.text(":", 75, 129);
    doc.text(`${sppd.spt.anggaran}`, 78, 129);

    doc.text("b.", 11, 133);
    doc.text("Mata Anggaran", 14, 133);
    doc.text(":", 75, 133);
    doc.text(`${sppd.spt.mt_anggaran}`, 78, 133);

    //+2
    doc.setLineWidth(0.1);
    doc.line(5, 135, 165, 135);

    doc.text("10", 6, 139);
    doc.text("Keterangan Lain - lain", 11, 139);
    doc.text(":", 75, 139);
    doc.text("", 78, 139); //isi disini

    //+2
    doc.setLineWidth(0.1);
    doc.line(5, 141, 325, 141);

    //pengesahan
    doc.setFont("arial narrow", "bold");
    doc.setFontSize(9);
    doc.text("Ditetapkan di", 80, 149);
    doc.text(":", 101, 149);
    doc.text(`${sppd.spt.tempat}`, 103, 149);

    doc.text("Pada Tanggal", 80, 152);
    doc.text(":", 101, 152);
    doc.text(`${moment(sppd.tglsppd).format("LL")}`, 103, 152);

    doc.setLineWidth(0.1);
    doc.line(80, 153, 129, 153);

    doc.text(splitText, 108, 158, "center");

    doc.text(`${sppd.spt.pjsppd.nama}`, 91, 177);
    doc.setLineWidth(0.1);
    doc.line(90, 178, 125, 178);

    doc.setFont("arial narrow", "normal");
    doc.setFontSize(9);
    doc.text(`${sppd.spt.pjsppd.golongan.ruang}`, 93, 181);

    doc.setFont("arial narrow", "bold");
    doc.setFontSize(9);
    doc.text(`NIP. ${sppd.spt.pjsppd.nip}`, 90, 184.5);

    doc.setLineWidth(0.1);
    doc.line(5, 186, 325, 186);

    doc.setFont("arial narrow", "normal");
    doc.setFontSize(9);
    doc.text("Catatan :", 6, 189);
    doc.setLineWidth(0.1);
    doc.line(6, 189, 17, 189);

    doc.setFont("arial", "normal");
    doc.setFontSize(9);
    doc.text("I.", 6, 193);
    doc.text(
      "SPPD harus diketahui tanggal dan berangkat oleh Pejabat setempat yang",
      11,
      193
    );
    doc.text("dilengkapi setelah sampai tempat tujuan", 11, 197);

    doc.text("II.", 6, 201);
    doc.text(
      "2 (dua) hari setelah tiba kembali ditempat semula SPPD harus diserahkan",
      11,
      201
    );
    doc.text("kembali kepada yang memberi biaya", 11, 204);

    //Right side of page
    doc.text("Berangkat dari tempat kedudukan", 168, 10);

    doc.text("Pada tanggal", 168, 14);
    doc.text(":", 203, 14);
    doc.text(`${moment(sppd.spt.berangkat).format("LL")}`, 205, 14);

    doc.text("Ke", 168, 18);
    doc.text(":", 203, 18);
    doc.text(`${sppd.spt.tujuan}`, 205, 18);

    doc.text("Kepala", 168, 22);
    doc.setFont("arial", "bold");
    doc.text(splitText, 233, 22, "center");
    doc.text(`${sppd.spt.pjsppd.nama}`, 216, 37);
    doc.setLineWidth(0.1);
    doc.line(215, 38, 250, 38);

    doc.setFont("arial", "normal");
    doc.text(`${sppd.spt.pjsppd.golongan.ruang}`, 219, 41);
    doc.setFont("arial", "bold");
    doc.text(`NIP. ${sppd.spt.pjsppd.nip}`, 214.5, 44.5);

    //First Segment
    doc.setFont("arial", "normal");
    doc.text("I.", 168, 50);
    doc.text("Tiba di", 171, 50);
    doc.text(":", 203, 50);

    doc.text("Pada Tanggal", 171, 54);
    doc.text(":", 203, 54);

    doc.text("Kepala", 171, 58);
    doc.text(":", 203, 58);

    doc.text("Berangkat dari", 245, 50);
    doc.text(":", 270, 50);

    doc.text("Ke", 245, 54);
    doc.text(":", 270, 54);

    doc.text("Pada Tanggal", 245, 58);
    doc.text(":", 270, 58);

    doc.text("Kepala", 245, 62);
    doc.text(":", 270, 62);

    //second segment
    doc.text("II.", 167, 95);
    doc.text("Tiba di", 171, 95);
    doc.text(":", 203, 95);

    doc.text("Pada Tanggal", 171, 99);
    doc.text(":", 203, 99);

    doc.text("Kepala", 171, 103);
    doc.text(":", 203, 103);

    doc.text("Berangkat dari", 245, 95);
    doc.text(":", 270, 95);

    doc.text("Ke", 245, 99);
    doc.text(":", 270, 99);

    doc.text("Pada Tanggal", 245, 103);
    doc.text(":", 270, 103);

    doc.text("Kepala", 245, 107);
    doc.text(":", 270, 107);

    //third segment
    doc.text("III.", 166, 145);
    doc.text("Tiba kembali di", 171, 145);
    doc.text(":", 203, 145);

    doc.text("Tempat Kedudukan", 171, 149);
    doc.text(":", 203, 149);

    doc.text("Pejabat yang memberi perintah", 171, 153);
    doc.text(":", 203, 153);

    doc.text(
      "Telah tiba dengan keterangan bahwa perjalanan tersebut diatas",
      240,
      145
    );
    doc.text(
      "benar dilakukan dan atas semata-mata untuk kepentingan",
      240,
      149
    );
    doc.text("jabatan dalam waktu sesingkat-singkatnya.", 240, 153);

    doc.setFont("arial", "bold");
    doc.text(splitText, 268, 157, "center");
    doc.text("Drs. H. Mansyah Kelana", 251, 172);
    doc.setLineWidth(0.1);
    doc.line(250, 173, 285, 173);

    doc.setFont("arial", "normal");
    doc.text("Pembina Utama Muda", 253, 176);
    doc.setFont("arial", "bold");
    doc.text("NIP. 196009121990031008", 250, 179.5);

    //fourth segment
    doc.line(165, 180, 325, 180);
    doc.setFont("arial", "normal");
    doc.text("IV.", 166, 184);
    doc.text("Catatan Lain-lain", 171, 184);

    doc.text("V.", 167, 190);
    doc.text("Perhatian:", 171, 190);
    doc.text(
      "Apabila perintah berpergian diberikan untuk berpergian yang tidak perlu untuk berpergian",
      171,
      194
    );
    doc.text(
      "ongkosnya menurut peraturan tidak dapat diberikan/dibayar oleh Pemerintah Daerah, maka",
      171,
      198
    );
    doc.text(
      "yang memerintahkan bertanggung jawab atas ongkos yang dikeluarkan (Artikel No. 74 dan UU.ICW)",
      171,
      202
    );

    doc.save(`SPPD_${sppd.spt.pegawai.nama}.pdf`);
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
