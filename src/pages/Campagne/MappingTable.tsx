import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MappingTable = () => {
  const [dataMapping, setDataMapping] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState({});
  const NomChamps = [
    "Prénom",
    "Nom",
    "Email",
    "Téléphone",
    "Adresse",
    "Code postal",
    "Ville",
    "Surface",
  ];

  useEffect(() => {
    const dataFromSessionStorage = JSON.parse(sessionStorage.getItem('dataexcel')) || [];
    setDataMapping(dataFromSessionStorage);
  }, []);

  const handleSelectChange = (e, index) => {
    const { value } = e.target;
    setSelectedColumns((prevState) => ({
      ...prevState,
      [index]: value,
    }));
  };

  const renderTableHeaders = () => {
    const headers = [];
    for (let i = 0; i < 10; i++) {
      headers.push(
        <th
          key={i}
          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
        >
          <Typography
            variant="small"
            color="blue-gray"
            className="font-bold leading-none opacity-70"
          >
            <select
              name={`select-${i}`}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
              id={`select-${i}`}
              value={selectedColumns[i] || ""}
              onChange={(e) => handleSelectChange(e, i)}
            >
              <option value="">---</option>
              {NomChamps.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </Typography>
        </th>
      );
    }
    return headers;
  };

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader className="rounded-none"></CardHeader>
        <CardBody className="overflow-scroll px-1">
          <table>
            <thead>{renderTableHeaders()}</thead>
            <tbody>
              {dataMapping.map((data, index) => (
                <tr key={index}>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal font-bold"
                    >
                      {data[0]}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data[1]}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data[2]}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data[3]}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data[4]}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data[5]}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data[6]}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data[7]}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data[8]}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data[9]}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        <CardFooter>
          <center>
            <Link to="/resultatcampagne" className="border border-blue-600 bg-blue-600 p-2 text-white rounded-xl">Lancer le scan</Link>
          </center>
        </CardFooter>
      </Card>
    </>
  );
};

export default MappingTable;
