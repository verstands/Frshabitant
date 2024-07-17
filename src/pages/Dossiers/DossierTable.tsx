import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

const DossierTable = () => {
    const TABLE_HEAD = [
        "Action",
        "#",
        "Produit",
        "Nom",
        "Prenom",
        "Provenance",
        "Status RDV",
        "Adresse",
        "Surface",
        "Crée le",
        "Utilisateur",
        "Installateur",
        "Campagne",
        "",
      ];
  return (
    <>
      <div className="">
        <Card className="h-full w-full">
          <CardHeader className="rounded-none p-4">
            <div className="flex items-center md:w-80 px-4">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Recherche"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-1">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                  ))}
                </tr>
              </thead>
            </table>
          </CardBody>
          <CardFooter className="flex items-center gap-1 border-t border-blue-gray-50 p-4">
            <Button variant="outlined" size="sm">
              Precedent
            </Button>
            <Button variant="outlined" size="sm">
              Suivant
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default DossierTable;
