import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import resume from '../../assets/Resume/Saurabh.pdf'; // Update the path as per your project structure
import "./resume.css";

const Resume = () => {
    return (
      <div id="resume">
        <div class="resumeDivider"></div>
        <div className="resume-container">
            <h1 className="resume-title">My Resume</h1>
            <div className="resume-viewer">
                {/* PDF Viewer */}
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={resume} />
              </Worker>

            </div>
            <div className="download-button">
                <a href={resume} download="Saurabh_Resume.pdf" className="btn-download">
                    Download Resume
                </a>
            </div>
        </div>
        </div>
    );
};

export default Resume;
