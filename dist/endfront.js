"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "project": [
        {
            "id": 0,
            "name": "Endfront",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "state": [
        {
            "id": 0,
            "project_id": 0,
            "name": "State-0 Mobile",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 1,
            "project_id": 0,
            "name": "State-1 Tablet",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 2,
            "project_id": 0,
            "name": "State-2 Screen",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "route": [
        {
            "id": 0,
            "project_id": 0,
            "name": "Route-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "path": "home",
            "attr": ""
        },
        {
            "id": 1,
            "project_id": 0,
            "name": "Route-1",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "path": "dashboard",
            "attr": ""
        }
    ],
    "routeToView": [
        {
            "id": 0,
            "name": "RouteToView-0",
            "route_id": 0,
            "view_id": 0,
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 1,
            "name": "RouteToView-1",
            "route_id": 1,
            "view_id": 0,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "view": [
        {
            "id": 0,
            "project_id": 0,
            "name": "View-1",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "level": [
        {
            "id": 0,
            "project_id": 0,
            "view_id": 0,
            "name": "Level-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
        }
    ],
    "levelToLayout": [
        {
            "id": 0,
            "name": "LevelToLayout-0",
            "level_id": 0,
            "layout_id": 0,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "layout": [
        {
            "id": 0,
            "project_id": 0,
            "name": "Layout-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "layoutToPosition": [
        {
            "id": 0,
            "name": "LayoutToPosition-0",
            "layout_id": 0,
            "position_id": 0,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "position": [
        {
            "id": 0,
            "project_id": 0,
            "name": "Position-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "component": [
        {
            "id": 0,
            "project_id": 0,
            "name": "Component-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "content": [
        {
            "id": 0,
            "project_id": 0,
            "name": "Content-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "payload": 0 // translation_id
        }
    ],
    "documents": [
        {
            "id": 0,
            "project_id": 0,
            "name": "Document-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "image": [
        {
            "id": 0,
            "project_id": 0,
            "name": "Image-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "video": [
        {
            "id": 0,
            "project_id": 0,
            "name": "Video-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "audio": [
        {
            "id": 0,
            "project_id": 0,
            "name": "Audio-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
        }
    ],
    "translation": [
        {
            "id": 0,
            "project_id": 0,
            // "translation_id": null,
            "name": "Translation-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 1,
            // "project_id": null,
            "translation_id": 0,
            "name": "Translation-1",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 2,
            // "project_id": null,
            "translation_id": 0,
            "name": "Translation-2",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
    ],
};
