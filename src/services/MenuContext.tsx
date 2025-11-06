// This whole section is a doozy
// (Adedotun, n.d.) 

/* 

*  Global State Management for Menu System
*  Enables consistent menu state handling

*/

import React, { createContext, useContext, useState } from "react";
import { MENU } from '../services/menuItems';

// Sets what each screen should expect
interface MenuContext {
    menuList: MENU[];
    addToMenu: (item: MENU) => void;
    removeFromMenu: (itemName: string) => void;
    resetMenu: () => void;
}

const MenuContext = createContext<MenuContext | undefined>(undefined);

// React.FC for props, everything breaks if I do normal functions for some reason
export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [menuList, setMenuList] = useState<MENU[]>([]);

    // Grabs element from MENU
    const addToMenu = (item: MENU) => {
        console.log('Adding item to context:', item.Name);
        try {
            // "Push" the new item into curent state
            setMenuList(current => {
                return [...current, item];
            });
        } catch (error) {
            console.error('Error in addToMenu:', error);
        }
    }

    const removeFromMenu = (itemName: string) => {
        console.log('Removing item from context:', itemName);
        try {
            // Select and "pop" item from list by checking for a name that matches
            setMenuList(current => current.filter(item => item.Name !== itemName));
        } catch (error) {
            console.error('Error in removeFromMenu:', error);
        }
    }

    const resetMenu = () => {
        // Zeros the list
        setMenuList([]);
    }


    const contextValue = {
        menuList,
        addToMenu,
        removeFromMenu,
        resetMenu,
    };

    return (
        //
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    );
};

// Use this as states. Shouldn't cause errors but if it does i have no idea how to fix
export const useMenu = () => {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error("Error in using context");
    }
    return context;
}
