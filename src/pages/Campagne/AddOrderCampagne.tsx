import React from 'react'
import useHasModule from '../../components/Agents/useHasModule';

const AddOrderCampagne = () => {
    const hasModule = useHasModule('Ajouterleadcampagne');

  if (!hasModule) {
    return <div className="font-bold"><center> <br /> Accès refusé</center></div>;
  }
  return (
    <div>AddOrderCampagne</div>
  )
}

export default AddOrderCampagne