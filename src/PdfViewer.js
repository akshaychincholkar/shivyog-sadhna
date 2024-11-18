import React from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// Specify the worker source
// pdfjs.GlobalWorkerOptions.workerSrc = `./pdf.worker.js `;

const PdfViewer = () => {
    return (
        <div>
        {/* <div style={{ margin: "20px auto", maxWidth: "800px" }}> */}
            {/* <Document file="./contents/dss.pdf">
                <Page pageNumber={1} />
            </Document> */}
            {/* <iframe src="D:/workspace/reactjs/shivyog-sadhna/src/contents/dss.pdf"
                            width="100%"
                            height="750px"
                            title="PDF Viewer"/> */}
            <iframe src="dss.pdf"/>
            {/* <iframe src="/sample.pdf" width="100%" height="750px" title="PDF Viewer"></iframe> */}

        </div>
    );
};

export default PdfViewer;

// import React from "react";
// // import PDFViewer from "pdf-viewer-reactjs";

// const PdfViewer = ({ file }) => {
// // const PdfViewer = () => {
//   return (
//     // <div style={{ margin: "20px auto", maxWidth: "800px" }}>
//     //   {/* <PDFViewer
//     //     document={{
//     //       url: file,
//     //     }}
//     //     css="customViewer"
//     //     navbarOnTop
//     //     hideRotation
//     //     scale={1.5}
//     //   /> */}
//     // </div>
//     <div>
//         {/* <iframe src="./contents/test.pdf"></iframe> */}
//         <iframe src={file}></iframe>
//     </div>
    
//   );
// };

// export default PdfViewer;
