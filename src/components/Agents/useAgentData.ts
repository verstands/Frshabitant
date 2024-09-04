import { useState, useEffect } from 'react';

const useAgentData = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);
  
  useEffect(() => {
    const agentData = JSON.parse(sessionStorage.getItem("user") || "{}");
    const adminStatus = agentData.fonction?.initule === "Administrateur";
    setIsAdmin(adminStatus);
    setAccessDenied(!adminStatus);
  }, []);
  
  return { isAdmin, accessDenied };
};

export default useAgentData;
