import  { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import * as XLSX from "xlsx"
import { useNavigate } from "react-router-dom";

const CreateCampagne = () => {
  const [selectedFile, setSelectedFile] = useState<null | File>(null);
  const [titre, setTitre] = useState<string>("");
  const [excelData, setExcelData] = useState<any[][]>([]);
  const navigate = useNavigate();



  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFile(files && files[0]);
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitre(event.target.value);
  };

  const handleCreateClick = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const workbook = XLSX.read(reader.result, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data: never[]  = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const filteredData = data.filter((row: any[]) => row.length > 0);
        setExcelData(filteredData);
        sessionStorage.setItem('titre', titre);
        sessionStorage.setItem('dataexcel', JSON.stringify(filteredData));
        navigate('/mapping-campagne')
      };
      reader.readAsBinaryString(selectedFile);
    } else {
      console.log('No file selected');
    }
  };

  useEffect(() => {
    console.log('excelData:', excelData);
  }, [excelData]);

  return (
    <>
      <Otbar title="Espace Campagne" />
      <div className="px-20">
        <div className="flex items-center p-2 justify-between">
          <div className="flex p-4">
            <h1 className="text-[#b3b4b6]">Campagnes / </h1>
            <h1 className="font-bold">Création</h1>
          </div>
        </div>
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <h2 className="font-bold text-[20px]">Nouvelle campagne</h2>
          <hr />
          <br />
          <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right"
           onClick={handleCreateClick}
          >
            Créer
          </button>
          <br />
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Title
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleTitleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="file"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                File
              </label>
              
              <input
                type="file"
                name="file"
                id="fiel"
                 accept=".xlsx"
                 onChange={handleFileChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCampagne;
