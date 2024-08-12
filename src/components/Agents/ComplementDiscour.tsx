import React, { useState } from "react";

const ComplementDiscour = () => {
  const [IsolationToiture, setIsolationToiture] = useState(false);
  const [IsolationThermique, setIsolationThermique] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState("");

  const handleCheckboxChangeIsolationToiture = () => {
    setIsolationToiture(!IsolationToiture);
  };

  const handleCheckboxChangeIsolationThermique = () => {
    setIsolationThermique(!IsolationThermique);
  };

  const handleCheckboxChange = (event) => {
    // Met à jour la valeur de la case à cocher dans l'état local
    if (event.target.checked) {
      setCheckboxValue(event.target.value);
    } else {
      setCheckboxValue(""); // Réinitialise si la case est décochée
    }
  };

  const handleButtonClick = () => {
    console.log(checkboxValue);
  };

  return (
    <>
      <div className="grid md:grid-cols-1 xl:grid-cols-1 gap-2">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Surface au sol (m²)
          </label>
          <input
            type="text"
            name="titre"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Hauteur (m)
            </label>
            <input
              type="text"
              name="titre"
              id="email"
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Maison individuelle">Maison individuelle</option>
              <option value="Maison mitoyenne">Maison mitoyenne</option>
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
              name="titre"
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
              name="titre"
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
              name="titre"
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
              name="titre"
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
              name="titre"
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Propriétaire occupant">
                Propriétaire occupant
              </option>
              <option value="Propriétaire résidence secondaire">
                Propriétaire d'une résidence secondaire
              </option>
              <option value="Propriétaire bailleur">
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
              name="titre"
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
              name="titre"
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
              name="titre"
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
              name="titre"
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Indépendant">Indépendant</option>
              <option value="Moyen 1 côté">Moyen 1 côté</option>
              <option value="Moyen 2 côtés">Moyen 2 côtés</option>
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name="titre"
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Toiture à 2 versants">Toiture à 2 versants</option>
              <option value="Toiture à 4 versants">Toiture à 4 versants</option>
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Combles aménagés">Combles aménagés</option>
              <option value="Combles perdus">Combles perdus</option>
              <option value="Pas de combles">Pas de combles</option>
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name="titre"
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
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
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Pas sensible">Pas sensible</option>
              <option value="Peu sensible">Peu sensible</option>
              <option value="Sensible">Sensible</option>
              <option value="Très sensible">Très sensible</option>
              <option value="Extrêmement sensible">Extrêmement sensible</option>
            </select>
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="border border-green-500 bg-green-500 py-3 text-white rounded-lg w-full"
            >
              Calculer
            </button>
          </div>
          <hr />
          <h1 className="text-[20px] py-3">
            Formulaire de Prime de Rénovation
          </h1>
          <fieldset className="border p-4 rounded-lg">
            <legend className="text-lg mb-2">Situation de précarité</legend>
            <div className="mb-4">
              <table>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Revenus très modestes :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input type="radio" id="name" name="name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Revenus modestes :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input type="radio" id="name" name="name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Revenus intermédiaires :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input type="radio" id="name" name="name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Revenus supérieurs :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input type="radio" id="name" name="name" />
                  </td>
                </tr>
              </table>
            </div>
          </fieldset>
          <fieldset className="border p-4 rounded-lg">
            <legend className="text-lg mb-2">Localisation</legend>
            <div className="mb-4">
              <table>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Île-de-France :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input type="radio" id="name" name="name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Hors Île-de-France :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input type="radio" id="name" name="name" />
                  </td>
                </tr>
              </table>
            </div>
          </fieldset>
          <fieldset className="border p-4 rounded-lg">
            <legend className="text-lg mb-2">Produit souhaité</legend>
            <div className="mb-4">
              <table>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Raccordement à un réseau de chaleur et/ou de froid :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="raccordement_reseau_chaleur"
                      value="raccordement_reseau_chaleur"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Chauffe-eau thermodynamique :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="chauffe_eau_thermodynamique"
                      value="chauffe_eau_thermodynamique"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pompe à chaleur air/eau :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="pompe_chaleur_air_eau"
                      value="pompe_chaleur_air_eau"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pompe à chaleur géothermique :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="pompe_chaleur_geothermique"
                      value="pompe_chaleur_geothermique"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Chauffe-eau solaire individuel en Métropole :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="chauffe_eau_solaire_metro"
                      value="chauffe_eau_solaire_metro"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Chauffe-eau solaire individuel en Outre-mer :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="name"
                      value="chauffe_eau_solaire_outre_mer"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Système solaire combiné :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="systeme_solaire_combine"
                      value="systeme_solaire_combine"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Partie thermique d’un équipement PVT eau :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="partie_thermique_pvt"
                      value="partie_thermique_pvt"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Poêle à bûches et cuisinière à bûches :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="poele_buches"
                      value="poele_buches"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Poêle à granulés et cuisinière à granulés :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="poele_granules"
                      value="poele_granules"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Chaudière bois à alimentation manuelle (bûches) :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="chaudiere_bois_manuelle"
                      value="chaudiere_bois_manuelle"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Chaudière bois à alimentation automatique (granulés,
                      plaquettes) :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="name"
                      value="chaudiere_bois_auto"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Foyer fermé et insert à bûches ou à granulés :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="name"
                      value="foyer_ferme_insert"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Isolation thermique des murs (intérieur/extérieur) :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="name"
                      checked={IsolationThermique}
                      onChange={handleCheckboxChangeIsolationThermique}
                    />
                  </td>
                </tr>
                <div>
                  {IsolationThermique && (
                    <div>
                      <input
                        type="text"
                        name="titre"
                        id="titre"
                        placeholder="Nombre de m²"
                        onChange={handleCheckboxChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  )}
                </div>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Isolation de la toiture/combles :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="name"
                      checked={IsolationToiture}
                      onChange={handleCheckboxChangeIsolationToiture}
                    />
                  </td>
                </tr>
                <div>
                  {IsolationToiture && (
                    <div>
                      <input
                        type="text"
                        name="titre"
                        id="titre"
                        placeholder="Nombre de m²"
                        onChange={handleCheckboxChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  )}
                </div>
                <tr>
                  <td>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Remplacement des fenêtres/portes-fenêtress :
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <input
                      type="checkbox"
                      id="name"
                      name="name"
                      value="remplacement_fenetres"
                      onChange={handleCheckboxChange}
                    />
                  </td>
                </tr>
                <tr>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Autres (précisez) :
                    </label>
                    <input
                      type="text"
                      name="titre"
                      id="email"
                      onChange={handleCheckboxChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </tr>
              </table>
            </div>
          </fieldset>
          <div className="pt-2">
            <button
              type="submit"
              className="border border-green-500 bg-green-500 py-3 text-white rounded-lg w-full"
              onClick={handleButtonClick}
            >
              Calculer la prime
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplementDiscour;
