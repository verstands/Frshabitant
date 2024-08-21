const hasAccess = (role: string) => {
    const roleAcce = JSON.parse(sessionStorage.getItem("role") || "[]");
    return roleAcce.some((item: { role: { initule: string; }; }) => item.role.initule === role);
};
  
export default hasAccess;