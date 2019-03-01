const blowson = require('blowson');

const userCount = 50;
const commentCount = 250;

var data = {
    "projects": [
                    
        {
            id: 0,
            name: "ForgeTech",
            createdAt: "",
            updatedAt: ""
        }
    ],
    "target": [
        {
            id: 0,
            createdAt: "",
            updatedAt: "",
            name: "NGX",
            description: "Export project based on Angular2+",
            project_id: 0
        }
    ],
    "views": [
        {
            id: 0,
            createdAt: "",
            updatedAt: "",
            name: "Home",
            route: "/view/home",
        }
    ],
    "states": [
        {
            id: 0,
            createdAt: "",
            updatedAt: "",
            name: 'mobile'
        }
    ],
    "levels": [
        {
            id: 0,
            createdAt: "",
            updatedAt: ""
        }
    ],
    "layouts": [
        {
            id: 0,
            createdAt: "",
            updatedAt: ""
            
        }
    ],
    "positions": [
        {
            id: 0,
            createdAt: "",
            updatedAt: ""
            
        }
    ],
    "components": [
        {
            id: 0,
            createdAt: "",
            updatedAt: ""  
        }
    ],
    "contents": [
        {
            id: 0,
            createdAt: "",
            updatedAt: ""
        }
    ],
    "images": [
        {
            id: 0,
            createdAt: "",
            updatedAt: ""
        }
    ],
    "audios": [
        {
            id: 0,
            createdAt: "",
            updatedAt: ""
        }
    ],
    "videos": [
        {
            id: 0,
            createdAt: "",
            updatedAt: ""
        }
    ]
};

const extendedData = blowson(data);

console.log(extendedData);