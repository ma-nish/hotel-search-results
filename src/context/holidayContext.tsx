import React from 'react';
import { HolidaysContextType, HolidayData } from '../constants/types';

interface BaseHolidaysProps {
  children?: React.ReactNode;
}

export const HolidayContext = React.createContext<HolidaysContextType | null>(null)

const HolidayProvider: React.FunctionComponent<BaseHolidaysProps> = ({ children }) => {
  const [holidays, setHolidays] = React.useState<HolidayData[]>([]);

  const saveHolidays = (option: HolidayData[]) => {
    setHolidays([...option]);
  };

  return <HolidayContext.Provider value={{ holidays, saveHolidays }}>{children}</HolidayContext.Provider>;
};

export default HolidayProvider;