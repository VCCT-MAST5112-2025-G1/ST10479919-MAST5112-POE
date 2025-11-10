

export type MENU = {
    Name: string;
    Type: menuType;
    Description: string;
    Price: number;
}

export type menuType = "Starter" | "Main" | "Dessert"

// Name, Des, Price
// Filter list from selected items in menuData
export var menuList: MENU[] = [];

export var menuData: Record<menuType, MENU[]> = {

    "Starter": [

    ],
    "Main": [

    ],
    "Dessert": [

    ],

}

export const resetMenuAdded = () => {
    menuData.Starter = [];
    menuData.Main = [];
    menuData.Dessert = [];
}