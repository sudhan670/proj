function Download() {
  const service = document.getElementById("service");
  const opt = {
    margin: 1,
    filename: "you name it",
    img: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  window.html2pdf().from(service).set(opt).save();
}
export default Download;
