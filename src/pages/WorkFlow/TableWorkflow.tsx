import React, { useEffect, useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { FaEdit, FaThumbsUp, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import WorkFlowInterService from "../../Services/Workflow.service";
import Spinner from "../../components/Spinner";
import { EtapeWorkFlowInterface } from "../../Interfaces/EtapeWorkFlowInterface";

const WorkflowTable = () => {
  const [role, setRole] = useState<EtapeWorkFlowInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const config = { appConfig: {}, dialog: {} };
  const workflowservice = new WorkFlowInterService(config);

  useEffect(() => {
    const getRoleUser = async () => {
      try {
        const response = await workflowservice.getWorkFlow();
        setRole(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getRoleUser();
  }, []);

  const moveRow = (dragIndex: number, hoverIndex: number) => {
    const draggedItem = role[dragIndex];
    const updatedRole = [...role];
    updatedRole.splice(dragIndex, 1); // remove dragged item
    updatedRole.splice(hoverIndex, 0, draggedItem); // insert it at hover index
    setRole(updatedRole);
  };

  const DraggableRow = ({ data, index, moveRow }) => {
    const ref = React.useRef(null);

    const [, drop] = useDrop({
      accept: "row",
      hover(item: { index: number }) {
        if (item.index !== index) {
          moveRow(item.index, index);
          item.index = index;
        }
      },
    });

    const [{ isDragging }, drag] = useDrag({
      type: "row",
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    drag(drop(ref));

    return (
      <tr ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-bold">
            {data.ordre}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-bold">
            {data.libelle}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-bold">
            <div>
              <label className="inline-flex items-center me-5 cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
          </Typography>
        </td>
        <td className="p-4">
          <div className="flex gap-2">
            <button
              className="border p-2 rounded-lg bg-red-600 text-white border-red-600"
              onClick={() => handleDelete(data.id)}
            >
              <FaTrash />
            </button>
            <button className="border p-2 rounded-lg bg-blue-600 text-white border-blue-600">
              <FaEdit />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous ne pourrez pas récupérer cette categorie status !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
    });

    if (result.isConfirmed) {
      try {
        Swal.fire(
          "Supprimé !",
          "Votre categorie status a été supprimée.",
          "success"
        );
      } catch (error) {
        Swal.fire(
          "Erreur !",
          "Une erreur est survenue lors de la suppression.",
          "error"
        );
      }
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="pt-2">
        <center>{loading && <Spinner />}</center>
        <Card className="h-full w-full">
          <CardHeader className="rounded-none p-4">
            <div className="flex items-center md:w-80 px-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Recherche"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>
          </CardHeader>
          <CardBody className="px-1">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    Ordre
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    Libelle
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    Status
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {role?.map((data, index) => (
                  <DraggableRow
                    key={data.id}
                    index={index}
                    data={data}
                    moveRow={moveRow}
                  />
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </DndProvider>
  );
};

export default WorkflowTable;
