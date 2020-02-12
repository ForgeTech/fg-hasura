"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
exports.default = {
    /** A registered slaughter-house customer */
    "vlvUser": [
        { "id": 0, "name": "VlvSystem", "pass": null },
        { "id": 1, "name": "Florian", "pass": "test" },
    ],
    /** This is a message to be displayed to all or a specific vlv-user */
    "vlvMessages": [
        { "id": 0, "vlvUser_id": 0, "message": "This is a general vlv-Msg test!" },
        { "id": 1, "vlvUser_id": 1, "message": "This is a vlv-Msg directed at a specific user!" }
    ],
    /** A user can be registered ad multiple slaughter-houses */
    "vlvUserToSlaughterhouse": [
        { "id": 0, "vlvUser_id": 1, "vlvSlaughterHouse_id": 0, "preferedWeekDay": 'Mo' },
    ],
    /** A customer sends this request to get a date for bringing his live-stock to the slaughter house */
    "vlvUserSlaughterDateRequest": [
        { "id": 0, "vlvUser_id": 1, "vlvSlaughterHouse_id": 0, /*vlvRequestSlaughterDate_id,*/ /*vlvResponseSlaughterDateReRequest_id,*/ "liveStockCount": 30, "message": "Hallo, VLV-Team! An den Ausweichtermin kann ich nur Vormittags!" }
    ],
    /** A request for slaughter-date contains a list of slaughter-dates the customer is avaible to bring in his live-stock  */
    "vlvRequestSlaughterDate": [
        { "id": 0, "vlvUserSlaughterDateRequest_id": 0, "vlvSlaughterDate_id": 0, "vlvRequestedSlaughterDateState_id": 2, "prefered": true },
        { "id": 1, "vlvUserSlaughterDateRequest_id": 0, "vlvSlaughterDate_id": 1, "vlvRequestedSlaughterDateState_id": 1, "prefered": false },
        { "id": 2, "vlvUserSlaughterDateRequest_id": 0, "vlvSlaughterDate_id": 2, "vlvRequestedSlaughterDateState_id": 1, "prefered": false },
    ],
    /** Vlv-Response to the request for a slaughter-date, detailing the approved slaughter date/time and additional infromation to the customer */
    "vlvResponseSlaughterDateReRequest": [
        { "id": 0, "vlvUserSlaughterDateRequest_id": 0, "vlvSlaughterDate_id": 0 }
    ],
    /** A registered vlv slaughter-house */
    "vlvSlaughterHouse": [
        { "id": 0, "name": "Baden bei Wien", "pass": "test" },
    ],
    /** Available slaughter-dates at a slaughter-house */
    "vlvSlaughterDate": [
        { "id": 0, "vlvSlaughterHouse_id": 0, "year": 2018, "week": 11, "date": moment(new Date()).toISOString() },
        { "id": 1, "vlvSlaughterHouse_id": 0, "year": 2018, "week": 11, "date": moment(new Date()).add(1, 'day').toISOString() },
        { "id": 2, "vlvSlaughterHouse_id": 0, "year": 2018, "week": 11, "date": moment(new Date()).add(2, 'day').toISOString() },
        { "id": 3, "vlvSlaughterHouse_id": 0, "year": 2018, "week": 11, "date": moment(new Date()).add(3, 'day').toISOString() },
        { "id": 4, "vlvSlaughterHouse_id": 0, "year": 2018, "week": 11, "date": moment(new Date()).add(4, 'day').toISOString() },
        { "id": 5, "vlvSlaughterHouse_id": 0, "year": 2018, "week": 10, "date": moment(new Date()).add(-7, 'day').toISOString() },
        { "id": 6, "vlvSlaughterHouse_id": 0, "year": 2018, "week": 10, "date": moment(new Date()).add(-6, 'day').toISOString() },
        { "id": 7, "vlvSlaughterHouse_id": 0, "year": 2018, "week": 12, "date": moment(new Date()).add(7, 'day').toISOString() },
        { "id": 8, "vlvSlaughterHouse_id": 0, "year": 2018, "week": 12, "date": moment(new Date()).add(8, 'day').toISOString() },
        { "id": 9, "vlvSlaughterHouse_id": 0, "year": 2018, "week": 12, "date": moment(new Date()).add(9, 'day').toISOString() },
    ],
    /** Content to be displayed on vlv news-site */
    "vlvNewsContent": [
        { "id": 0, "text": "blabablasdfasdfasdfsafdfsaffdsf", "imageUrl": "test" },
    ],
};
