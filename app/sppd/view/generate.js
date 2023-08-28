import DownloadPDF from "./downloadPDF";
import "jspdf-autotable";

const Generate = ({ sppd }) => {

  return(
  <div>
    <DownloadPDF sppd={sppd}/>
  </div>
  )
}

export default Generate;
