import { precacheAndRoute } from 'workbox-precaching';

// 👇 จะถูกแทนที่ตอน build
precacheAndRoute(self.__WB_MANIFEST);