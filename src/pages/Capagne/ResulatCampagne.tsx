import { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import { FaDropbox } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ResulatCampagne = () => {
  const [dataMapping, setDataMapping] = useState([]);
  const [mobileCount, setMobileCount] = useState<number>(0);
  const [fixedCount, setFixedCount] = useState<number>(0);
  const [unknownTypeCount, setUnknownTypeCount] = useState<number>(0);
  const [duplicateCount, setDuplicateCount] = useState<number>(0);
  const [checkedItems, setCheckedItems] = useState({
    mobile: true,
    fixed: true,
    unknown: true,
    duplicate: true,
  });
  const navigate = useNavigate();
  
  useEffect(() => {
    const dataFromSessionStorage = JSON.parse(sessionStorage.getItem('dataexcel')) || [];
    setDataMapping(dataFromSessionStorage);

    const countMobileNumbers = () => {
      let count = 0;
      dataFromSessionStorage.forEach((row: any) => {
        const phoneNumber = row[4];
        if (phoneNumber && /^33\d{9}$/.test(phoneNumber)) {
          count++;
        }
      });
      return count;
    };

    const countFixedNumbers = () => {
      let count = 0;
      dataFromSessionStorage.forEach((row: any) => {
        const phoneNumber = row[4];
        if (phoneNumber && /^(0[1-9]\d{8}|[1-5]\d{8})$/.test(phoneNumber)) {
          count++;
        }
      });
      return count;
    };

    const countUnknownTypeNumbers = () => {
      let count = 0;
      dataFromSessionStorage.forEach((row: any) => {
        const phoneNumber = row[4];
        if (phoneNumber && !/^33\d{9}$/.test(phoneNumber) && !/^(0[1-9]\d{8}|[1-5]\d{8})$/.test(phoneNumber)) {
          count++;
        }
      });
      return count;
    };

    const countDuplicateNumbers = () => {
      let duplicateNumbers = new Set();
      let count = 0;
      dataFromSessionStorage.forEach((row: any) => {
        const phoneNumber = row[4];
        if (phoneNumber && duplicateNumbers.has(phoneNumber)) {
          count++;
        } else {
          duplicateNumbers.add(phoneNumber);
        }
      });
      return count;
    };

    setMobileCount(countMobileNumbers())
    setFixedCount(countFixedNumbers());
    setUnknownTypeCount(countUnknownTypeNumbers());
    setDuplicateCount(countDuplicateNumbers());
  }, []);

  const handleCheckboxChange = (category: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const calculateTotalProspects = () => {
    let total = 0;
    if (checkedItems.mobile) total += mobileCount;
    if (checkedItems.fixed) total += fixedCount;
    if (checkedItems.unknown) total += unknownTypeCount;
    if (checkedItems.duplicate) total += duplicateCount;
    return total;
  };

  const filterProspects = () => {
    let filteredProspects: any[] = [];

    if (checkedItems.mobile) {
      filteredProspects = filteredProspects.concat(
        dataMapping.filter((row: any) => /^33\d{9}$/.test(row[4]))
      );
    }
    if (checkedItems.fixed) {
      filteredProspects = filteredProspects.concat(
        dataMapping.filter((row: any) => /^(0[1-9]\d{8}|[1-5]\d{8})$/.test(row[4]))
      );
    }
    if (checkedItems.unknown) {
      filteredProspects = filteredProspects.concat(
        dataMapping.filter(
          (row: any) =>
            !/^33\d{9}$/.test(row[4]) &&
            !/^(0[1-9]\d{8}|[1-5]\d{8})$/.test(row[4])
        )
      );
    }
    if (checkedItems.duplicate) {
      let duplicateNumbers = new Set();
      dataMapping.forEach((row: any) => {
        const phoneNumber = row[4];
        if (phoneNumber && duplicateNumbers.has(phoneNumber)) {
          filteredProspects.push(row);
        } else {
          duplicateNumbers.add(phoneNumber);
        }
      });
    }

    return filteredProspects;
  };

  const handleImport = () => {
    const selectedProspects = filterProspects();
    sessionStorage.setItem('selectedProspects', JSON.stringify(selectedProspects));
    navigate('/reaprtilead');
  };

  return (
    <>
      <Otbar title="Espace campagne" />
      <div className="p-4">
        <div className="border border-gray-500 rounded-lg">
          <div className="border bg-green-600 border-green-600 rounded-t-lg">
            <div className="px-10 py-3 flex items-center justify-between">
              <h5 className="text-white size-9 font-bold w-full">
                {" "}
                Résultat du scan de votre fichier
              </h5>
              <p>
                <FaDropbox />
              </p>
            </div>
          </div>
          <br />
          <div className="mx-auto flex items-center justify-center">
            <div className=" border border-gray-800 bg-gray-800 p-4 text-center rounded-lg w-80">
              <span className="text-[3rem] text-white">{calculateTotalProspects()}</span>
              <br />
              <i className="text-[20px] text-white ">Prospect trouvés</i>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-4 gap-4 m-4">
          <div
              className={`border border-green-800 p-4 rounded-lg w-50 ${checkedItems.mobile ? "bg-green-700" : "bg-gray-700"}`}
            >
              <div className="flex items-center gap-4">
                <div>
                <input
                    type="checkbox"
                    checked={checkedItems.mobile}
                    onChange={() => handleCheckboxChange("mobile")}
                  />
                </div>
                <div>
                  <span className="font-bold text-white">{mobileCount} mobiles</span>
                  <p className="text-[15px] text-white ">
                    Selectionnz les numeros mobiles
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`border border-green-800 p-4 rounded-lg w-50 ${checkedItems.fixed ? "bg-green-700" : "bg-gray-700"}`}
            >
              <div className="flex items-center gap-4">
                <div>
                <input
                    type="checkbox"
                    checked={checkedItems.fixed}
                    onChange={() => handleCheckboxChange("fixed")}
                  />
                </div>
                <div>
                  <span className="font-bold text-white">{fixedCount} Fixe</span>
                  <p className="text-[15px] text-white ">
                    Selectionnz les numeros fixe
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`border border-green-800 p-4 rounded-lg w-50 ${checkedItems.unknown ? "bg-green-700" : "bg-gray-700"}`}
            >
              <div className="flex items-center gap-4">
                <div>
                <input
                    type="checkbox"
                    checked={checkedItems.unknown}
                    onChange={() => handleCheckboxChange("unknown")}
                  />
                </div>
                <div>
                  <span className="font-bold text-white">{unknownTypeCount} type inconnu</span>
                  <p className="text-[15px] text-white ">
                    Selectionnz les numeros de type inconnus
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`border border-green-800 p-4 rounded-lg w-50 ${checkedItems.duplicate ? "bg-green-700" : "bg-gray-700"}`}
            >
              <div className="flex items-center gap-4">
                <div>
                <input
                    type="checkbox"
                    checked={checkedItems.duplicate}
                    onChange={() => handleCheckboxChange("duplicate")}
                  />
                </div>
                <div>
                  <span className="font-bold text-white">{duplicateCount} doublons global</span>
                  <p className="text-[15px] text-white ">
                    Selectionnz les numeros en doublons dans toutes les campagnes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <center>
               <button className="border p-3 rounded-[12px] border-blue-600 bg-blue-600 text-center text-white" onClick={handleImport}>Lancer l'importation</button>
            </center>
            <br />
        </div>
      </div>
    </>
  );
};

export default ResulatCampagne;
