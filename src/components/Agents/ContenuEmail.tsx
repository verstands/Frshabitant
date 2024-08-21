import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Assurez-vous d'importer les styles de ReactQuill

const ContenuEmail = ({ formData, handleForm4Change, handleDescriptionChange }) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <>
      <div className="border-white bg-white p-4 rounded-[10px] shadow">
        <h2 className="font-bold">Contenu</h2>

        <div className="w-full mb-6">
          <div className="border-b border-gray-200 pb-2 mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="-mb-px flex gap-3" aria-label="Tabs">
                {/* Les éléments de navigation peuvent être ajoutés ici */}
              </nav>
            </div>
          </div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Sujet du mail: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="sujet"
            value={formData.sujet}
            onChange={handleForm4Change}
            id="id_typerevenu"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="form-group col-md-12 editor">
          <ReactQuill
            theme="snow"
            value={formData.contenue}
            onChange={handleDescriptionChange}
            placeholder={"Ecrire un message..."}
            modules={modules}
            formats={formats}
          />
        </div>
      </div>
    </>
  );
};

export default ContenuEmail;
