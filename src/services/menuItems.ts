export type MENU = {
    Name: string;
    Type: menuType;
    Description: string;
    Price: number;
}

export type menuType = "Starter" | "Main" | "Dessert"

export var menuList: MENU[] = [];

export var menuData: Record<menuType, MENU[]> = {

    "Starter": [

    ],
    "Main": [

    ],
    "Dessert": [

    ],

}