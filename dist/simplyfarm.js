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
    "breakpoint": [
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
    "layoutType": [
        {
            "id": 0,
            "name": "FlexBox"
        },
        {
            "id": 1,
            "name": "FlexGrid"
        },
        {
            "id": 2,
            "name": "3d"
        },
        {
            "id": 3,
            "name": "Anim"
        },
        {
            "id": 4,
            "name": "Default"
        },
    ],
    "layout": [
        {
            "id": 0,
            "project_id": 0,
            "name": "Layout-0",
            "layoutTypeId": 0,
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 1,
            "project_id": 0,
            "name": "Layout-1",
            "layoutTypeId": 1,
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 2,
            "project_id": 0,
            "name": "Layout-2",
            "layoutTypeId": 2,
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 3,
            "project_id": 0,
            "name": "Layout-3",
            "layoutTypeId": 3,
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 4,
            "project_id": 0,
            "name": "Layout-4",
            "layoutTypeId": 4,
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "layoutToLayout3D": [
        {
            "id": 0,
            "layout_id": 0,
            "layout3d_id": 0,
            "name": "LayoutToLayout3D-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
        }
    ],
    "layout3d": [
        {
            "id": 0,
            "name": "Layout3d-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "perspective": "400px",
            "perspective-origin": "25% 75%",
            "translateX": "34",
            "scaleX": "56",
            "rotateX": "45",
            "translateY": "34",
            "scaleY": "56",
            "rotateY": "45",
            "translateZ": "34",
            "scaleZ": "56",
            "rotateZ": "45",
            "angel": "46",
        }
    ],
    "layout3dItem": [
        {
            "id": 0,
            "layout3d_id": 0,
            "name": "Layout3dItem-0",
            "createdAt": new Date(),
            "updateAt": new Date(),
            "translateX": "34",
            "scaleX": "56",
            "rotateX": "45",
            "translateY": "34",
            "scaleY": "56",
            "rotateY": "45",
            "translateZ": "34",
            "scaleZ": "56",
            "rotateZ": "45",
            "angel": "46",
        },
        {
            "id": 1,
            "layout3d_id": 0,
            "name": "Layout3dItem-1",
            "createdAt": new Date(),
            "updateAt": new Date(),
            "translateX": "34",
            "scaleX": "56",
            "rotateX": "45",
            "translateY": "34",
            "scaleY": "56",
            "rotateY": "45",
            "translateZ": "34",
            "scaleZ": "56",
            "rotateZ": "45",
            "angel": "46",
        },
        {
            "id": 2,
            "layout3d_id": 0,
            "name": "Layout3dItem-2",
            "createdAt": new Date(),
            "updateAt": new Date(),
            "translateX": "34",
            "scaleX": "56",
            "rotateX": "45",
            "translateY": "34",
            "scaleY": "56",
            "rotateY": "45",
            "translateZ": "34",
            "scaleZ": "56",
            "rotateZ": "45",
            "angel": "46",
        },
    ],
    "layoutToLayoutAnim": [
        {
            "id": 0,
            "layout_id": 0,
            "layoutAnim_id": 0,
            "name": "LayoutToLayoutAnim-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "layoutParallax": [
        {
            "id": 0,
            "name": "LayoutParallax-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "relativeInput": false,
            "clipRelativeInput": false,
            "hoverOnly": false,
            "inputElement": null,
            "calibrateX": false,
            "calibrateY": true,
            "invertX": true,
            "invertY": true,
            "limitX": false,
            "limitY": false,
            "scalarX": 10,
            "scalarY": 10,
            "frictionX": 0.1,
            "frictionY": 0.1,
            "originX": 0.5,
            "originY": 0.5,
            "precision": 1,
            "selector": null,
            "pointerEvents": false,
            "onReady": null,
        },
    ],
    "layoutParallaxItem": [
        {
            "id": 0,
            "layoutParallax_id": 0,
            "name": "LayoutParallax-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "depth": 1
        },
        {
            "id": 1,
            "layoutParallax_id": 0,
            "name": "LayoutParallax-1",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "depth": 0.8
        },
        {
            "id": 2,
            "layoutParallax_id": 0,
            "name": "LayoutParallax-2",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "depth": 0.6
        },
        {
            "id": 3,
            "layoutParallax_id": 0,
            "name": "LayoutParallax-3",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "depth": 0.4
        },
        {
            "id": 4,
            "layoutParallax_id": 0,
            "name": "LayoutParallax-4",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "depth": 0.2
        },
        {
            "id": 5,
            "layoutParallax_id": 0,
            "name": "LayoutParallax-5",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "depth": 0
        },
    ],
    "layoutAnim": [
        {
            "id": 0,
            "name": "LayoutAnim-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "layoutAnimToKeyFrame": [
        {
            "id": 0,
            "layoutAnim_id": 0,
            "layoutAnimKeyFrame_id": 0,
            "name": "LayoutAnim-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "layoutAnimKeyFrame": [
        {
            "id": 0,
            "name": "LayoutKeyFrame-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "layout_id": 0
        }
    ],
    "layoutToLayoutGrid": [
        {
            "id": 0,
            "layout_id": 0,
            "layoutGrid_id": 0,
            "name": "LayoutToLayoutGrid-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "layoutGrid": [
        {
            "id": 0,
            "name": "LayoutGrid-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "display": "grid",
            "grid-template-columns": "40px 50px auto 50px 40px",
            "grid-template-rows": "25% 100px auto",
            "grid-template-areas": [
                "header header header header",
                "main main . sidebar",
                "footer footer footer footer",
            ],
            "grid-template": [
                ["[row1-start]", "header header header", "25px", "[row1-end]"],
                ["row2-start]", "footer footer footer", "25px", "[row2-end]"],
                ["/", "auto", "50px", "auto"]
            ],
            "grid-column-gap": "10px",
            "grid-row-gap": "20px",
            // "grid-gap": "5px 10px",
            "justify-items": "center",
            "align-items": "center",
            // "place-items": "stretch stretch", // align-items justify-items
            "justify-content": "space-around",
            "align-content": "",
            // "place-content": "center center", // align-content justify-content
            "grid-auto-columns": "50px",
            "grid-auto-rows": "50px",
            "grid-auto-flow": "row",
        }
    ],
    "layoutGridItem": [
        {
            "id": 0,
            "layoutGrid_id": 0,
            "name": "LayoutGridItem-0",
            "createdAt": new Date(),
            "updateAt": new Date(),
            "grid-area": "header",
            "justify-self": "start",
            "align-self": "start",
            // place-self: align-self justify-self;
            "grid-column-start": "1",
            "grid-column-end": "2",
            "grid-row-start": "1",
            "grid-row-end": "2",
        },
        {
            "id": 1,
            "layoutGrid_id": 0,
            "name": "LayoutGridItem-1",
            "createdAt": new Date(),
            "updateAt": new Date(),
            "grid-area": "footer",
            "justify-self": "end",
            "align-self": "end",
            // place-self: align-self justify-self;
            "grid-column-start": "5",
            "grid-column-end": "8",
            "grid-row-start": "5",
            "grid-row-end": "9" // <number> | <name> | span <number> | span <name> | auto
        },
        {
            "id": 2,
            "layoutGrid_id": 0,
            "name": "LayoutGridItem-2",
            "createdAt": new Date(),
            "updateAt": new Date(),
            "grid-area": "main",
            "justify-self": "center",
            "align-self": "stretch",
            // place-self: align-self justify-self;
            "grid-column-start": "1",
            "grid-column-end": "span-col4-start",
            "grid-row-start": "1",
            "grid-row-end": "span 3" // <number> | <name> | span <number> | span <name> | auto
        }
    ],
    "layoutToLayoutFlex": [
        {
            "id": 0,
            "layout_id": 0,
            "layoutFlex_id": 0,
            "name": "LayoutToLayoutFlex-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "layoutFlex": [
        {
            "id": 0,
            "name": "LayoutFlex-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "flex-direction": "row",
            "flex-wrap": "wrap",
            // flex-flow: <‘flex-direction’> || <‘flex-wrap’>
            "justify-content": "flex-start",
            "align-items": "stretch",
            "align-content": "flex-start" // flex-start | flex-end | center | space-between | space-around | stretch
        }
    ],
    "layoutFlexItem": [
        {
            "id": 0,
            "layoutFlex_id": 0,
            "name": "LayoutFlexItem-0",
            "createdAt": new Date(),
            "updateAt": new Date(),
            "align-self": "auto",
            "flex-basis": "auto",
            "order": 0,
            "flex-grow": 0,
            "flex-shrink": 0 // <number>; /* default 0 */
        },
        {
            "id": 1,
            "layoutFlex_id": 0,
            "name": "LayoutFlexItem-1",
            "createdAt": new Date(),
            "updateAt": new Date(),
            "align-self": "flex-start",
            "flex-basis": "20%",
            "order": 1,
            "flex-grow": 1,
            "flex-shrink": 1,
        },
        {
            "id": 2,
            "layoutFlex_id": 0,
            "name": "LayoutFlexItem-2",
            "createdAt": new Date(),
            "updateAt": new Date(),
            "align-self": "auto",
            "flex-basis": "75px",
            "order": 2,
            "flex-grow": 1,
            "flex-shrink": 2,
        },
    ],
    "layoutToLayoutDefault": [
        {
            "id": 0,
            "layout_id": 0,
            "layoutDefault_id": 0,
            "name": "LayoutToLayoutDefault-0",
            "createdAt": new Date(),
            "updatedAt": new Date()
        }
    ],
    "layoutDefault": [
        {
            "id": 0,
            "name": "LayoutDefault-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "display": "block",
            "position": "relative",
            "width": "100%",
            "height": "100%",
            "top": "auto",
            "bottom": "auto",
            "left": "auto",
            "right": "auto"
        },
        {
            "id": 2,
            "name": "LayoutDefault-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "display": "block",
            "position": "relative",
            "width": "100%",
            "height": "100%",
            "top": "auto",
            "bottom": "auto",
            "left": "auto",
            "right": "auto"
        },
        {
            "id": 3,
            "name": "LayoutDefault-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "display": "block",
            "position": "relative",
            "width": "100%",
            "height": "100%",
            "top": "auto",
            "bottom": "auto",
            "left": "auto",
            "right": "auto"
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
            "updatedAt": new Date(),
            "height": "100px",
            "width": "100px",
        }
    ],
    "item": [
        {
            "id": 0,
            "position_id": 0,
            "component_id": 0,
            "name": "Position-0",
            "createdAt": new Date(),
            "updatedAt": new Date(),
        }
    ],
    "component": [
        {
            "id": 0,
            "project_id": 0,
            "position_id": 0,
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
