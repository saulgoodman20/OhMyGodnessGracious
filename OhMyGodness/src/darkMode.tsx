import React, { createContext, useState, useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';

export const DarkmodeContext = createContext({
    darkmode: false,
    handleDarkmode: () => {}
});

export const DarkmodeProvider = ({ children }:any) => {
  const [cookies, setCookie] = useCookies(['preferences', 'darkmode']);
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    setDarkmode(cookies.darkmode === 'true');
  }, [cookies.darkmode]);

  const handleDarkmode = () => {
    const newDarkMode = !darkmode;
    setDarkmode(newDarkMode);
    setCookie('darkmode', String(newDarkMode), { path: '/' });
  };

  return (
    <DarkmodeContext.Provider value={{ darkmode, handleDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};

