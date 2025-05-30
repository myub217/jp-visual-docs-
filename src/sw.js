"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var workbox_precaching_1 = require("workbox-precaching");
// 👇 จะถูกแทนที่ตอน build
(0, workbox_precaching_1.precacheAndRoute)(self.__WB_MANIFEST);
