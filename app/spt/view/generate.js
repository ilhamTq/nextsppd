import DownloadPDF from "./downloadPDF";
import "jspdf-autotable";

const Generate = ({ spt }) => {

  return(
  <div>
    <DownloadPDF spt={spt}/>
  </div>
  )
}

export default Generate;
