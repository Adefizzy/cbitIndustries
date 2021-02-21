import { createContext, useContext} from 'react';

export const BannerContext = createContext(0);
export const UseBannerContext = () => useContext(BannerContext);