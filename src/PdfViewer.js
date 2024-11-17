import React from "react";
// import PDFViewer from "pdf-viewer-reactjs";

const PdfViewer = ({ file }) => {
// const PdfViewer = () => {
  return (
    // <div style={{ margin: "20px auto", maxWidth: "800px" }}>
    //   {/* <PDFViewer
    //     document={{
    //       url: file,
    //     }}
    //     css="customViewer"
    //     navbarOnTop
    //     hideRotation
    //     scale={1.5}
    //   /> */}
    // </div>
    <div>
        {/* <iframe src="./contents/test.pdf"></iframe> */}
        <iframe src={file}></iframe>
    </div>
    
  );
};

export default PdfViewer;
