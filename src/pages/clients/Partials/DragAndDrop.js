// import { set } from "js-cookie";
import React, { useState, useEffect } from "react"
import "./drag.css";

// import UploadFilesService from "../../Apis/activities/UploadFilesService"
import { Modal, ModalBody, Button, ModalFooter, ModalHeader } from 'reactstrap';
// import AlertV1 from "../Common/AlertV1"
const AcceptedFileTypes = ["png", "jpeg", "jpg", "pdf", 'doc', "docx", 'ppt', 'pptx', 'txt']

const ImageLimit = 25;
const DocumentLimit = 1

const DragDropUpload = ({ type, files = [], onFileUpload, onRemoveFile }) => {
  let [currentFile, setCurrentFile] = useState("");
  let [progress, setProgress] = useState(0);
  let [image, setImage] = useState(0);
  let [modal, setModal] = useState(false);
  let [alert, setAlert] = useState("");
  let [imageCount, setImageCount] = useState(0);
  let [documentCount, setDocumentCount] = useState(0);

  useEffect(() => {
    // console.log("files changed");
  }, [files]);

  let file = null;
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };
  function handleFileUpload(e) {
    const files = e.target.files;
    if (typeof files[0] !== "undefined") {
      upload(files[0]);
    }
  }
  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (typeof files[0] !== "undefined") {
      upload(files[0]);
    }
  };
  // async function handleUpload(files) {
  //     let form_data = new FormData();
  //     form_data.append("file", files[0]);
  //     let response = await uploadNotes(form_data);
  //     if (response) {

  //         onFileUpload(response)
  //     }
  // }
  function upload(file) {
    let ext = file.name.split(".").slice(-1).pop().toLowerCase();
    if (file.size / 1024 / 1024 > 25) {
      setAlert("File upload size limit exceeded");
      return;
    }
    if (imageCount >= 25) {
      setAlert("Image upload limit exceeded");
      return;
    }
    if (documentCount == 1) {
      setAlert("Document upload limit exceeded");
      return;
    }

    if (AcceptedFileTypes.includes(ext.toLowerCase())) {
      if (["png", "jpeg", "jpg"].includes(ext)) {
        setImageCount(imageCount + 1)
      } else {
        setDocumentCount(documentCount + 1)
      }
      setProgress(0)
      setCurrentFile(file.name)
    //   UploadFilesService.upload(file, (event) => {
    //     setProgress(Math.round((100 * event.loaded) / event.total))
    //   })
        .then((response) => {
          onFileUpload(response.data.data.name)
          setProgress(0)
          setCurrentFile("")
        })
        .catch(() => {
          setProgress(0);
          setCurrentFile("")
        });
    } else {
      setAlert("File type not supported")
    }
  }
  function hanglePreview(e, index) {
    e.preventDefault();
    let img = files[index];
    setImage(img);
    setModal(true);
  }

  return (
    <div
      className="drop-zone text-center"
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
    >
      {type == "create" ? (
        <>
          <span className="file-image-icon">
            <i className="fa fa-image" aria-hidden="true"></i>
            <i className="fa fa-arrow-up" aria-hidden="true"></i>
          </span>
          <h2 className="head5">Drag and drop the attachment here</h2>
          <p className="or">or</p>
          <button className="btn btns-coral btn-browse">
            <input
              type="file"
              name="file"
              ref={(ref) => {
                file = ref;
              }}
              onChange={handleFileUpload}
              accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
            />
            Browse
          </button>
          <small>Upload jpeg, jpg, png, txt, ppt, pptx, doc, docx or PDF files</small>
        </>
      ) : null}
      {currentFile !== "" && progress < 100 ? (
        <div className="progress-alert">
          <div className="thumbnail">
            <img src="img/language_hover.png" alt="" />
          </div>
          <div className="filename">{currentFile}</div>
          <div className="fileprevprog">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: progress + "%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <small>{progress < 100 ? "Uploading..." : "Completed"}</small>
          </div>
        </div>
      ) : null}
      {files.length
        ? files.map((item, index) => (
            <div className="progress-alert" key={index}>
              <div className="thumbnail">
                <img src="img/language_hover.png" alt="" />
              </div>
              <div className="filename">{item}</div>
              {["png", "jpeg", "jpg"].includes(
                item.split(".").slice(-1).pop().toLowerCase()
              ) ? (
                <div className="fileprevprog">
                  {/* <a onClick={(e) => hanglePreview(e, index)}>Show Preview</a> */}
                </div>
              ) : null}
              <div
                className="cancle-upload"
                onClick={() => {
                  onRemoveFile(index);
                }}
              >
                <span>&times;</span>
              </div>
            </div>
          ))
        : null}

      {alert == "" ? null : (<h3>fh</h3>
        // <AlertV1
        //   display={true}
        //   title={alert}
        //   handleModal={() => {
        //     setAlert("");
        //   }}
        // />
      )}

      <Preview modal={modal} image={image} setModal={setModal} />
    </div>
  );
};
export default DragDropUpload;
const Preview = ({ image, modal = false, setModal, className }) => {
  useEffect(() => {}, [image]);

  function toggle() {
    setModal(!modal);
  }
  return (
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader>
        <h2>Image Preview</h2>
      </ModalHeader>
      <ModalBody>
        <img className="img-fluid" src={image.path} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};
