

export type MENU = {
    Name: string;
    Type: menuType;
    Description: string;
    Price: number;
}

export type menuType = "Starter" | "Main" | "Dessert"

// Name, Des, Price
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

// Testing button
export const populateTestData = () => {
    
    resetMenuAdded()

    menuData.Starter = [
        {
            Name: "Garlic Bread",
            Type: "Starter",
            Description: "Freshly baked bread with garlic butter and herbs",
            Price: 45
        },
        {
            Name: "Caesar Salad",
            Type: "Starter",
            Description: "Crisp romaine lettuce with parmesan and caesar dressing",
            Price: 65
        },
        {
            Name: "Spring Rolls",
            Type: "Starter",
            Description: "Crispy vegetable spring rolls with sweet chili sauce",
            Price: 55
        }
    ];

    menuData.Main = [
        {
            Name: "Grilled Steak",
            Type: "Main",
            Description: "250g prime beef steak with roasted vegetables",
            Price: 185
        },
        {
            Name: "Chicken Alfredo",
            Type: "Main",
            Description: "Creamy pasta with grilled chicken and parmesan",
            Price: 120
        },
        {
            Name: "Vegetable Curry",
            Type: "Main",
            Description: "Spicy coconut curry with seasonal vegetables and rice",
            Price: 95
        },
        {
            Name: "Fish and Chips",
            Type: "Main",
            Description: "Beer-battered hake with thick-cut chips and tartar sauce",
            Price: 110
        }
    ];

    menuData.Dessert = [
        {
            Name: "Chocolate Lava Cake",
            Type: "Dessert",
            Description: "Warm chocolate cake with molten center and vanilla ice cream",
            Price: 75
        },
        {
            Name: "Cheesecake",
            Type: "Dessert",
            Description: "New York style cheesecake with berry compote",
            Price: 65
        },
        {
            Name: "Tiramisu",
            Type: "Dessert",
            Description: "Classic Italian dessert with coffee and mascarpone",
            Price: 70
        }
    ];
}