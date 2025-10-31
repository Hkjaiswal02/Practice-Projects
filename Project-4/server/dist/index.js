"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boiled Egg",
            price: 10,
            text: "A simple and healthy breakfast option, perfectly boiled to keep your morning light and full of protein.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "Ramen",
            price: 25,
            text: "A warm bowl of Japanese-style noodles in a rich broth, topped with veggies and a soft-boiled egg.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "Grilled Chicken",
            price: 45,
            text: "Juicy and tender chicken grilled to perfection, served with flavorful spices for a hearty dinner.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "Cake",
            price: 18,
            text: "A soft and moist dessert layered with creamy frosting — perfect to satisfy your sweet cravings.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "Burger",
            price: 23,
            text: "A classic burger stacked with fresh veggies, melted cheese, and a juicy patty between toasted buns.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "Pancake",
            price: 25,
            text: "Fluffy golden pancakes drizzled with honey and butter — a delicious way to end your day.",
            image: "/images/pancake.png",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map