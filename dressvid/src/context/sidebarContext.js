import { createContext, useContext, useState } from "react";

const SidebarContext = createContext({ sidebarState: false });

const SidebarProvider = ({ children }) => {
  const [sidebarState, setSidebarState] = useState(false);
  return (
    <SidebarContext.Provider value={{ sidebarState, setSidebarState }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebar = () => useContext(SidebarContext);

export { useSidebar, SidebarProvider, SidebarContext };
