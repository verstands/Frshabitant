import React, { useState } from "react";
import { ComplementInterface } from "../../Interfaces/ComplementInterface";

type DataItem = {
  value: string;
  montant: number;
  input: boolean;
  name: string; // Ajout du champ name
};

type Data = {
  [key: string]: DataItem;
};

const data: Data = {
  raccordement_reseau_chaleur: {
    value: "raccordement_reseau_chaleur",
    montant: 5000,
    input: false,
    name: "Raccordement Réseau à Chaleur",
  },
  chauffe_eau_thermodynamique: {
    value: "chauffe_eau_thermodynamique",
    montant: 1500,
    input: false,
    name: "Chauffe-eau Thermodynamique",
  },
  pompe_chaleur_air_eau: {
    value: "pompe_chaleur_air_eau",
    montant: 4000,
    input: false,
    name: "Pompe à Chaleur Air-Eau",
  },
  pompe_chaleur_geothermique: {
    value: "pompe_chaleur_geothermique",
    montant: 6000,
    input: false,
    name: "Pompe à Chaleur Géothermique",
  },
  chauffe_eau_solaire_metro: {
    value: "chauffe_eau_solaire_metro",
    montant: 2000,
    input: false,
    name: "Chauffe-eau Solaire Métro",
  },
  chauffe_eau_solaire_outre_mer: {
    value: "chauffe_eau_solaire_outre_mer",
    montant: 2500,
    input: false,
    name: "Chauffe-eau Solaire Outre-mer",
  },
  systeme_solaire_combine: {
    value: "systeme_solaire_combine",
    montant: 3500,
    input: false,
    name: "Système Solaire Combiné",
  },
  partie_thermique_pvt: {
    value: "partie_thermique_pvt",
    montant: 3000,
    input: false,
    name: "Partie Thermique PVT",
  },
  poele_buches: {
    value: "poele_buches",
    montant: 1000,
    input: false,
    name: "Poêle à Bûches",
  },
  poele_granules: {
    value: "poele_granules",
    montant: 1200,
    input: false,
    name: "Poêle à Granulés",
  },
  chaudiere_bois_manuelle: {
    value: "chaudiere_bois_manuelle",
    montant: 1800,
    input: false,
    name: "Chaudière à Bois Manuelle",
  },
  chaudiere_bois_auto: {
    value: "chaudiere_bois_auto",
    montant: 2200,
    input: false,
    name: "Chaudière à Bois Auto",
  },
  foyer_ferme_insert: {
    value: "foyer_ferme_insert",
    montant: 800,
    input: false,
    name: "Foyer Fermé Insert",
  },
  remplacement_fenetres: {
    value: "remplacement_fenetres",
    montant: 1000,
    input: false,
    name: "Remplacement Fenêtres",
  },
  /*immo1: {
    value: "immo1",
    montant: 1000,
    input: true,
    name: "immo1",
  },
  immo2: {
    value: "immo2",
    montant: 1000,
    input: true,
    name: "immo2",
  },*/
};

const ComplementDiscour = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [inputValues, setInputValues] = useState<{ [key: string]: number }>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [dataPrime, setdataPrime] = useState<DataItem[]>([]);
  const [TotalPrime, setTotalPrime] = useState(0);
  const [complementdata, setCompletementdata] = useState<ComplementInterface>({
    surface: "",
    hauteur: "",
    typemaison: "",
    coefficient: "",
    temperatureinterieur: "",
    departement: "",
    correction: "",
    temperatureexterieur: "",
    typeoccupation: "",
    nombreoccupant: "",
    anneeconstruction: "",
    surfacehabitable: "",
    nombrepiece: "",
    positionmaison: "",
    formemaisonn: "",
    nombreniveauhabitant: "",
    hauteurmoyenne: "",
    typetoit: "",
    typecouverture: "",
    inclinaison: "",
    typecomble: "",
    combleisole: "",
    typemurs: "",
    mursisole: "",
    typevitrage: "",
    jardin: "",
    surfacejardin: "",
    typesoussol: "",
    garage: "",
    typeinstallation: "",
    sensibiliteenvironnement: "",
  });

  const handleCheckboxChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems({
        ...checkedItems,
        [key]: event.target.checked,
      });
    };

  const handleInputChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValues({
        ...inputValues,
        [key]: Number(event.target.value),
      });
    };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompletementdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCalculate = () => {
    let totalAmount = 0;
    const selectedItems = Object.keys(data).filter((key) => checkedItems[key]);
    const result = selectedItems.map((key) => {
      const item = data[key];
      const inputAmount = inputValues[key] || item.montant; // Utilise le montant saisi ou le montant par défaut
      totalAmount += inputAmount;
      return { ...item, montant: inputAmount, input: checkedItems[key] };
    });

    setdataPrime(result);
    setTotalPrime(totalAmount);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCalculateDebut = () => {
    if(complementdata.surface !== "" &&
      complementdata.hauteur !== "" &&
      complementdata.typemaison > "0" &&
      complementdata.coefficient !== "" &&
      complementdata.temperatureinterieur !== "" &&
      complementdata.departement !== "" 

    ){
    setIsDropdownOpen2(!isDropdownOpen2);

    }
  };

  const closeDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const volume =
    parseInt(complementdata.surface) * parseInt(complementdata.hauteur);
  const perteChaleur =
    volume *
    parseInt(complementdata.coefficient) *
    (parseInt(complementdata.temperatureexterieur) -
      parseInt(complementdata.temperatureinterieur));
  return (
    <>
      <div className="border-white  bg-white p-4 rounded-[10px] shadow  h-96 overflow-y-scroll">
        <div className="grid md:grid-cols-1 xl:grid-cols-1 gap-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Surface au sol (m²)
            </label>
            <input
              type="number"
              name="surface"
              value={complementdata.surface}
              onChange={handleChange}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Hauteurs (m)
              </label>
              <input
                type="number"
                id="email"
                name="hauteur"
                value={complementdata.hauteur}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type de maison
              </label>
              <select
                name="typemaison"
                value={complementdata.typemaison}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Maison_individuelle">Maison individuelle</option>
                <option value="Maison_mitoyenne">Maison mitoyenne</option>
                <option value="Appartement">Appartement</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Coefficient G
              </label>
              <input
                type="number"
                name="coefficient"
                value={complementdata.coefficient}
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Température intérieure de confort (°C)
              </label>
              <input
                type="number"
                name="temperatureinterieur"
                value={complementdata.temperatureinterieur}
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Departement
              </label>
              <input
                type="text"
                name="departement"
                value={complementdata.departement}
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Correction f(altitude)
              </label>
              <input
                type="number"
                name="correction"
                value={complementdata.correction}
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Température extérieure du site (°C)
              </label>
              <input
                type="number"
                name="temperatureexterieur"
                value={complementdata.temperatureexterieur}
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type d'occupation
              </label>
              <select
                name="typeoccupation"
                value={complementdata.typeoccupation}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Propriétaire_occupant">
                  Propriétaire occupant
                </option>
                <option value="Propriétaire_résidence_secondaire">
                  Propriétaire d'une résidence secondaire
                </option>
                <option value="Propriétaire_bailleur">
                  Propriétaire bailleur
                </option>
                <option value="Locataire">Locataire</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Nombre d'occupants
              </label>
              <input
                type="number"
                name="nombreoccupant"
                value={complementdata.nombreoccupant}
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Année de construction
              </label>
              <input
                type="number"
                name="anneeconstruction"
                value={complementdata.anneeconstruction}
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Surface habitable (m²)
              </label>
              <input
                type="number"
                name="surfacehabitable"
                value={complementdata.surfacehabitable}
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Nombre de pièces
              </label>
              <input
                type="number"
                name="nombrepiece"
                value={complementdata.nombrepiece}
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Positionnement de la maison
              </label>
              <select
                name="positionmaison"
                value={complementdata.positionmaison}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Indépendant">Indépendant</option>
                <option value="Moyen_1_côté">Moyen 1 côté</option>
                <option value="Moyen_2_côtés">Moyen 2 côtés</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Forme de la maison
              </label>
              <select
                name="formemaisonn"
                value={complementdata.formemaisonn}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Carrée">Carrée</option>
                <option value="Allongée">Allongée</option>
                <option value="Développée">Développée</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Nombre de niveaux habitables (hors combles)
              </label>
              <select
                name="nombreniveauhabitant"
                value={complementdata.nombreniveauhabitant}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Hauteur moyenne sous plafond (m)
              </label>
              <input
                type="number"
                name="hauteurmoyenne"
                value={complementdata.hauteurmoyenne}
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type de toit
              </label>
              <select
                name="typetoit"
                value={complementdata.typetoit}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Toiture à 2 versants">
                  Toiture à 2 versants
                </option>
                <option value="Toiture à 4 versants">
                  Toiture à 4 versants
                </option>
                <option value="Toit à une pente">Toit à une pente</option>
                <option value="Toit plat">Toit plat</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type de couverture de la toiture
              </label>
              <select
                name="typecouverture"
                value={complementdata.typecouverture}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Tuile">Tuile</option>
                <option value="Ardoise">Ardoise</option>
                <option value="Tôle">Tôle</option>
                <option value="Fibrociment">Fibrociment</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Inclinaison du pan
              </label>
              <select
                name="inclinaison"
                value={complementdata.inclinaison}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="0°">0°</option>
                <option value="70°">70°</option>
                <option value="45°">45°</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type de combles
              </label>
              <select
                name="typecomble"
                value={complementdata.typecomble}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Comble_aménagés">Combles aménagés</option>
                <option value="Combles_perdus">Combles perdus</option>
                <option value="Pas_de_combles">Pas de combles</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Combles isolés
              </label>
              <select
                name="combleisole"
                value={complementdata.combleisole}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
                <option value="Je ne sais pas">Je ne sais pas</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type de murs de la maison (Extérieur)
              </label>
              <select
                name="typemurs"
                value={complementdata.typemurs}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Pierre">Pierre</option>
                <option value="Béton">Béton</option>
                <option value="Brique">Brique</option>
                <option value="Bois">Bois</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Murs isolés
              </label>
              <select
                name="mursisole"
                value={complementdata.mursisole}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Oui">Oui</option>
                <option value="A rénover">A rénover</option>
                <option value="Je ne sais pas">Je ne sais pas</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type de vitrage
              </label>
              <select
                name="typevitrage"
                value={complementdata.typevitrage}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Simple">Simple</option>
                <option value="Double">Double</option>
                <option value="Triple">Triple</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Jardin
              </label>
              <select
                name="jardin"
                value={complementdata.jardin}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Surface du jardin (m²)
              </label>
              <input
                type="number"
                name="surfacejardin"
                value={complementdata.surfacejardin}
                onChange={handleChange}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type de sous-sol
              </label>
              <select
                name="typesoussol"
                value={complementdata.typesoussol}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Cave ou Sous-sol">Cave ou Sous-sol</option>
                <option value="Garage">Garage</option>
                <option value="Vide sanitaire">Vide sanitaire</option>
                <option value="Terre-plein">Terre-plein</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Avez-vous un garage?
              </label>
              <select
                name="garage"
                value={complementdata.garage}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type d'installation électrique
              </label>
              <select
                name="typeinstallation"
                value={complementdata.typeinstallation}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Monophasé">Monophasé</option>
                <option value="Triphasé">Triphasé</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Sensibilité à l'environnement
              </label>
              <select
                name="sensibiliteenvironnement"
                value={complementdata.sensibiliteenvironnement}
                onChange={handleChange}
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">choisir</option>
                <option value="Pas_sensible">Pas sensible</option>
                <option value="Peu_sensible">Peu sensible</option>
                <option value="Sensible">Sensible</option>
                <option value="Très_sensible">Très sensible</option>
                <option value="Extrêmement_sensible">
                  Extrêmement sensible
                </option>
              </select>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="border border-green-500 bg-green-500 py-3 text-white rounded-lg w-full"
                onClick={handleCalculateDebut}
              >
                Calculer
              </button>
            </div>
            <hr />
            <h1 className="text-[20px] py-3">
              Formulaire de Prime de Rénovation
            </h1>
            <fieldset className="border p-4 rounded-lg mb-4">
              <legend className="text-lg mb-2">Situation de précarité</legend>
              <div className="mb-4">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td>
                        <label
                          htmlFor="revenus_tres_modestes"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Revenus très modestes :
                        </label>
                      </td>
                      <td></td>
                      <td>
                        <input
                          type="radio"
                          id="revenus_tres_modestes"
                          name="situation_precarite"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label
                          htmlFor="revenus_modestes"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Revenus modestes :
                        </label>
                      </td>
                      <td></td>
                      <td>
                        <input
                          type="radio"
                          id="revenus_modestes"
                          name="situation_precarite"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label
                          htmlFor="revenus_intermediaires"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Revenus intermédiaires :
                        </label>
                      </td>
                      <td></td>
                      <td>
                        <input
                          type="radio"
                          id="revenus_intermediaires"
                          name="situation_precarite"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label
                          htmlFor="revenus_superieurs"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Revenus supérieurs :
                        </label>
                      </td>
                      <td></td>
                      <td>
                        <input
                          type="radio"
                          id="revenus_superieurs"
                          name="situation_precarite"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </fieldset>

            <fieldset className="border p-4 rounded-lg mb-4">
              <legend className="text-lg mb-2">Localisation</legend>
              <div className="mb-4">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td>
                        <label
                          htmlFor="ile_de_france"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Île-de-France :
                        </label>
                      </td>
                      <td></td>
                      <td>
                        <input
                          type="radio"
                          id="ile_de_france"
                          name="localisation"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label
                          htmlFor="hors_ile_de_france"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Hors Île-de-France :
                        </label>
                      </td>
                      <td></td>
                      <td>
                        <input
                          type="radio"
                          id="hors_ile_de_france"
                          name="localisation"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </fieldset>

            <fieldset className="border p-4 rounded-lg mb-4">
              <legend className="text-lg mb-2">Produit souhaité</legend>
              <div className="mb-4">
                <table className="min-w-full">
                  <tbody>
                    {Object.keys(data).map((key) => (
                      <React.Fragment key={key}>
                        <tr>
                          <td>
                            <label
                              htmlFor={key}
                              className="block text-sm font-medium text-gray-700"
                            >
                              {data[key].name} :
                            </label>
                          </td>
                          <td></td>
                          <td>
                            <input
                              type="checkbox"
                              id={key}
                              name={key}
                              checked={checkedItems[key] || false}
                              onChange={handleCheckboxChange(key)}
                            />
                          </td>
                        </tr>
                        {data[key].input && checkedItems[key] && (
                          <tr>
                            <td colSpan={3}>
                              <input
                                type="number"
                                value={inputValues[key] || ""}
                                onChange={handleInputChange(key)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              />
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </fieldset>
            <div className="pt-2">
              <button
                type="submit"
                className="border border-green-500 bg-green-500 py-3 text-white rounded-lg w-full"
                onClick={handleCalculate}
              >
                Calculer
              </button>
            </div>
          </div>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-lg">
            <br />
            <div>
              {dataPrime.length > 0 && (
                <>
                  <h1 className="text-[25px] font-bold">
                    Résultats des primes :
                  </h1>
                  <h1 className="text-[20px]">
                    Situation de précarité : très modestes
                  </h1>
                  <h1 className="text-[20px]">
                    Produits <span className="font-bold">souhaités</span>
                  </h1>
                  <ul className="list-disc pl-5">
                    {dataPrime.map((item, index) => (
                      <li key={index}>
                        {item.name}: {item.montant}€
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <span className="font-bold">Total</span> : {TotalPrime}€
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                type="button"
                onClick={closeDropdown}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {isDropdownOpen2 && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-lg">
            <br />
            <div>
              <span className="font-bold">Résultat du Dimensionnement</span>
            </div>
            <p>
              Pour une surface de {complementdata.surface} m² avec une hauteur
              de {complementdata.hauteur} m, le type de maison{" "}
              {complementdata.typemaison}, un coefficient G de{" "}
              {complementdata.coefficient}, une température intérieure de
              confort de {complementdata.temperatureinterieur} °C, dans le
              département {complementdata.departement} à une altitude de{" "}
              {complementdata.correction} m avec une température extérieure de{" "}
              {complementdata.temperatureexterieur} °C, la perte de chaleur
              estimée est de {perteChaleur} W.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                type="button"
                onClick={handleCalculateDebut}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComplementDiscour;
