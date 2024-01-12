import React, { useState } from "react";
import { FaPaste } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";

const Cart = ({ item }) => {
  const { clientName, desc } = item;
  const [isModalOpen, setModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setUploadedFiles(files);
  };

  return (
    <div className="card w-72 glass m-1 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{clientName}</h2>
          <h2 className="card-title">User Name</h2>
        </div>
        <div className="flex justify-between items-center">
          <p>{desc}</p>
          <div>
            <FaPaste />
          </div>
        </div>
        <div className="card-actions flex justify-around items-center">
          <button>
            <AiFillLike />
          </button>
          <button>
            <AiOutlineComment />
          </button>

          <div>
            <input
              type="file"
              onChange={handleFileChange}
              multiple
              className="hidden"
              id="fileInput"
            />
            <label htmlFor="fileInput">
              <GrAttachment />
            </label>
          </div>
          <button>
            <MdOutlineDateRange />
          </button>
        </div>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Attachment Modal</h2>
              <button onClick={closeModal}>Close Modal</button>
            </div>
          </div>
        )}
        {uploadedFiles.length > 0 && (
          <div>
            <h3>Uploaded Files:</h3>
            <ul>
              {Array.from(uploadedFiles).map((file, index) => (
                <li key={index}>{`${file.name} (${file.type})`}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

<div className="card-actions flex justify-around items-center">
  
</div>;
