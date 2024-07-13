import React from 'react'
import { useLocation } from 'react-router-dom';

const MappingCampagne = () => {
    const location = useLocation();
  const excelData = location.state?.excelData || [];
  console.log("sssssss", excelData);
    return (
        <table>
          <thead>
            <tr>
              <th>Maison</th>
              <th>Entre 100e et 150e Propriétaire</th>
              <th>Fioul</th>
              <th>Planning RDV</th>
              <th>Dossiers</th>
              <th>Prospects</th>
              <th>CDR</th>
              <th>Appel</th>
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, index) => (
              <tr key={index}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
                <td>{row[5]}</td>
                <td>{row[6]}</td>
                <td>{row[7]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

export default MappingCampagne