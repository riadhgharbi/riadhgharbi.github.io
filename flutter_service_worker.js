'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1901997c807be7192aa2d66a9c121dbc",
"assets/assets/background/background.gif": "cdaa1ee9aa7fcd86a98151fd99b9b78f",
"assets/assets/background/unsplash.jpg": "c34af054a9dbd4b4191761f962f8eaa0",
"assets/assets/fonts/Lora-Italic-VariableFont_wght.ttf": "fd66db567c00ec17273d45b729a36ead",
"assets/assets/fonts/Lora-VariableFont_wght.ttf": "337fa370c6ba675d1c9d3ba0d1444145",
"assets/assets/icons/facebook.png": "b36613f890106058176aeadb99248b78",
"assets/assets/icons/github.png": "04fae54e5016ce0fd17199f9b247197e",
"assets/assets/icons/linkedin.png": "85ecbddaafdc372d8913ae11736de87c",
"assets/assets/icons/phone.png": "103fc46b9b1a688536adaadd941cae7f",
"assets/assets/icons/youtube.png": "d647784a84be1b52daac127bf3ddb6bf",
"assets/assets/images/image1.jpg": "07fc111fccb2a78461b075e2e04b1f98",
"assets/assets/images/image2.jpg": "175493817d7ed9ca5a05a09f7142a989",
"assets/assets/images/profpic.jpg": "1f0931e93a8c8e3342bcb3a7be5aeae4",
"assets/assets/mywork/jattends.jpg": "591c019e8dddcd54c344d9904aeb48c5",
"assets/assets/mywork/mystore.jpg": "05084fd08923ae3254fc06a20a8d652c",
"assets/assets/mywork/office.jpg": "c32ba07693ab82142d1c0038b41dee69",
"assets/FontManifest.json": "f11a9654ba2cb51d298ba0fa9482cc6d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "e3e547daa7c1bf6085babc7d130b950d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bf1803fb8d20d6ec07becfbcd9675c3a",
"/": "bf1803fb8d20d6ec07becfbcd9675c3a",
"main.dart.js": "d0624098994e5576f7b4c5b5ca5501f7",
"manifest.json": "9f905d08be07721210cf139f907a2a7b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
