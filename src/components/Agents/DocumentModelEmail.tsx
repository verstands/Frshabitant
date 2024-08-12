import React, { useState } from "react";

type Tab = "tab1" | "tab2";

interface DocumentModelEmailProps {
  formData: { fichier: File | null };
  handleForm3Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DocumentModelEmail: React.FC<DocumentModelEmailProps> = ({
  formData,
  handleForm3Change,
}) => {
  const [activeTab, setActiveTab] = useState<Tab>("tab1");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      handleForm3Change(e); // Call the parent change handler
    }
  };

  const renderFilePreview = () => {
    if (!selectedFile) {
      return <p className="text-gray-600">Aucun fichier sélectionné.</p>;
    }

    const fileType = selectedFile.type;
    const fileUrl = URL.createObjectURL(selectedFile);

    switch (true) {
      case fileType.startsWith("image/"):
        return (
          <img
            src={fileUrl}
            alt="Aperçu du fichier"
            className="mt-2 max-h-64 object-contain"
          />
        );
      case fileType === "application/pdf":
        return (
          <div className="mt-2 flex items-center">
            <img
              src="/icons/pdf-icon.png"
              alt="Icone PDF"
              className="h-8 w-8 mr-2"
            />
            <span className="text-gray-600">{selectedFile.name}</span>
          </div>
        );
      case fileType.includes("word"):
        return (
          <div className="mt-2 flex items-center">
            <img
              src="/icons/word-icon.png"
              alt="Icone Word"
              className="h-8 w-8 mr-2"
            />
            <span className="text-gray-600">{selectedFile.name}</span>
          </div>
        );
      case fileType.includes("excel"):
        return (
          <div className="mt-2 flex items-center">
            <img
              src="/icons/excel-icon.png"
              alt="Icone Excel"
              className="h-8 w-8 mr-2"
            />
            <span className="text-gray-600">{selectedFile.name}</span>
          </div>
        );
      default:
        return (
          <div className="mt-2 flex items-center">
            <img
              src="/icons/file-icon.png"
              alt="Icone Fichier"
              className="h-8 w-8 mr-2"
            />
            <span className="text-gray-600">{selectedFile.name}</span>
          </div>
        );
    }
  };

  return (
    <>
      <div className="border-white bg-white p-4 rounded-[10px] shadow">
        <h2 className="font-bold">Les documents par défaut</h2>
        <br />
        <hr />
        <br />
        <div className="w-full mb-6">
          <div className="border-b border-gray-200 pb-2 mb-4">
            <nav className="-mb-px flex gap-2" aria-label="Tabs">
              <button
                onClick={() => handleTabClick("tab1")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab1"
                    ? "border-blue-500 border rounded bg-blue-500 text-white"
                    : "border-gray-400 border rounded bg-gray-400 text-white hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Joindre un document
              </button>
              <button
                onClick={() => handleTabClick("tab2")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                  activeTab === "tab2"
                    ? "border-blue-500 border rounded bg-blue-500 text-white"
                    : "border-gray-400 border rounded bg-gray-400 text-white hover:border-gray-300"
                }`}
              >
                Joindre des documents
              </button>
            </nav>
            {activeTab === "tab2" && (
              <div className="flex flex-col items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">
                        Cliquez pour télécharger
                      </span>{" "}
                      ou glissez-déposez
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG ou GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    name="fichier"
                    id="dropzone-file"
                    onChange={handleFileChange}
                    type="file"
                    className="hidden"
                  />
                </label>
                {renderFilePreview()}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentModelEmail;
