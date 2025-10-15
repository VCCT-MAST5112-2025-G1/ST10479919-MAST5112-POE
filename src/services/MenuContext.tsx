// This whole section is a doozy
// (Adedotun, n.d.) 

import React, {createContext, useContext, useState } from "react";
import { MENU } from '../services/menuItems';

interface MenuContext {
    menuList: MENU[];
    addToMenu: (item: MENU) => void;
    removeFromMenu: (itemName: string) => void;
}

const MenuContext = createContext<MenuContext | undefined>(undefined);

export const MenuProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [menuList, setMenuList] = useState<MENU[]>([]);

    const addToMenu = (item: MENU) => {
        console.log('Adding item to context:', item.Name);
        try {
            setMenuList(current => {
                console.log('Current menuList length:', current.length);
                return [...current, item];
            });
        } catch (error) {
            console.error('Error in addToMenu:', error);
        }
    }

    const removeFromMenu = (itemName: string) => {
        console.log('Removing item from context:', itemName);
        try {
            setMenuList(current => current.filter(item => item.Name !== itemName));
        } catch (error) {
            console.error('Error in removeFromMenu:', error);
        }
    }

    const contextValue = {
        menuList,
        addToMenu,
        removeFromMenu
    };

    return(
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error("useMenu must be used within MenuProvider");
    }
    return context;
}