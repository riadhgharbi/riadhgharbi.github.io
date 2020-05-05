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
"manifest.json": "9f905d08be07721210cf139f907a2a7b",
"riadhgharbi.github.io/.git/COMMIT_EDITMSG": "0f7aa82a13deccba66b6815f0994b5f6",
"riadhgharbi.github.io/.git/config": "424d6c3f7110abacea60fd938e5d92ab",
"riadhgharbi.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"riadhgharbi.github.io/.git/FETCH_HEAD": "336d2167bbcafc380bad45ed1283d2f7",
"riadhgharbi.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"riadhgharbi.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"riadhgharbi.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"riadhgharbi.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"riadhgharbi.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"riadhgharbi.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"riadhgharbi.github.io/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"riadhgharbi.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"riadhgharbi.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"riadhgharbi.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"riadhgharbi.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"riadhgharbi.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"riadhgharbi.github.io/.git/index": "6e325c1ba4a8229306e7c370eb7cbad4",
"riadhgharbi.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"riadhgharbi.github.io/.git/logs/HEAD": "ba470c40fb329255ad8db0df8582a3fb",
"riadhgharbi.github.io/.git/logs/refs/heads/master": "ba470c40fb329255ad8db0df8582a3fb",
"riadhgharbi.github.io/.git/logs/refs/remotes/origin/master": "ff6d2a80c6d89b445f15dcc57b4cfc18",
"riadhgharbi.github.io/.git/objects/0a/5154a375cd0fce427187ed873524e5c36ebb1f": "94fdf2ad7b0f089187682add96c69aeb",
"riadhgharbi.github.io/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"riadhgharbi.github.io/.git/objects/10/ae2cade4c9817cad23cfc8396877fd16c1ebbc": "ad92a1eaabd191f9446adc9ac0d580ae",
"riadhgharbi.github.io/.git/objects/14/14172f969c4ed597a8094f9965d7f197569b3b": "b860cdeb419aedac00d23d7c19b85313",
"riadhgharbi.github.io/.git/objects/15/935d2f69bab216a34846308bbf11740fcd2452": "59cc97706b01f57728237a83ac97b74a",
"riadhgharbi.github.io/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"riadhgharbi.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"riadhgharbi.github.io/.git/objects/26/f318a8aa245dfb4fed18c27a7eb74644902be0": "bbb9b9efd5077cb1b267b5fa18475fa7",
"riadhgharbi.github.io/.git/objects/3f/8b6df3dedea69d3daf2e6b7bcf0d2a040e96a5": "64d36975395b7ef430f87f1684552bdf",
"riadhgharbi.github.io/.git/objects/41/6af6642c5563784d8781fa9ff823e6bc555384": "ec50ca949dae1a014d8eea9d3956b1e3",
"riadhgharbi.github.io/.git/objects/4c/47e9693334213b0eb3a21260bee2643120b790": "f261687a98bcfe79b15cfc42268b38d9",
"riadhgharbi.github.io/.git/objects/51/a7b78e028da4f001a1133edb3704514c8b00a2": "db7b883d19d10ea84653d7fa321c3fff",
"riadhgharbi.github.io/.git/objects/57/a7aa8420960c70c5991fa4d25f664156bbd1bc": "597f5b2f8cc0e38a25b3dadf3d589053",
"riadhgharbi.github.io/.git/objects/5d/9f850587dc0738f4a34fdc3bf965d99003f5ca": "0498deeb3caff8da3831267e4a05f854",
"riadhgharbi.github.io/.git/objects/61/ec29c8c8936c885124a2e7d83555aeea92863e": "944c2e6a15ccc83a57868157ac055ad7",
"riadhgharbi.github.io/.git/objects/68/4c418539c7c3f2aab273f8fba3887295285e6b": "0ba70e00a721a92d8c187d4c768afcc5",
"riadhgharbi.github.io/.git/objects/6f/67712ddff049721838ccdb68f1c355fdcaf6af": "593606f3f7e3efad985d8176f7a5b23b",
"riadhgharbi.github.io/.git/objects/71/1ac3a337743d6e30c90e0855ea72069e99a154": "dd08a5c2b29985754713dcda6c6bdcd2",
"riadhgharbi.github.io/.git/objects/7b/9f305c637d21ce7fbed87d40f2f89ba483113f": "53edf2479ab2179675726a47b6bd5ced",
"riadhgharbi.github.io/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"riadhgharbi.github.io/.git/objects/82/6e71b5036a00d994f9984fddd60757a2ddf09f": "c4eae91d828d40978f0ab328b1fbbd95",
"riadhgharbi.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"riadhgharbi.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"riadhgharbi.github.io/.git/objects/8b/5d1955b764c3ed0df9c75a2dbb67d7bc000a37": "4474fe12b65e1df599947ece6e13abe9",
"riadhgharbi.github.io/.git/objects/93/a94851194234421cc22a36f334e6f2cb2d1fd1": "af3ced36b6ccdf135ed55b6ac9765304",
"riadhgharbi.github.io/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"riadhgharbi.github.io/.git/objects/a1/c04b4807aac5a5de498aa625eb424273ae4167": "d410acf00c8c76a0bf39f683f9b54227",
"riadhgharbi.github.io/.git/objects/a5/21ae529248858cd59b9a06a102fcc083c2003c": "9fd7ba92e7306ce74516e6a5aa363ae5",
"riadhgharbi.github.io/.git/objects/b2/3ce7498cd6ccc03fd784e80d596e7b4d636a3e": "3333bc15448fc5bdcb4a201148757a94",
"riadhgharbi.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"riadhgharbi.github.io/.git/objects/b9/6e1cd43abce20c8c062c61c2cad205fb7f45ec": "c9a6a55d1471c7af2c540275a49a87f3",
"riadhgharbi.github.io/.git/objects/ba/17f5830f725b1feafe8ed0128621876909bb76": "52ce2a2d0775d5eb0caea6f2ce2b3f04",
"riadhgharbi.github.io/.git/objects/c4/11685651b80d7c485adc93ff56f424256ff813": "2a25e02bf28e0a6b060bc59a74fb9a5c",
"riadhgharbi.github.io/.git/objects/ca/e5f5fd98ec58dec7adcb20dcc24c0b14a40524": "07ddde3badd42296837dbc621bf70c58",
"riadhgharbi.github.io/.git/objects/ce/543e7bdf7a89e026778842f46f30bb64e5cfa0": "759140308d53f62d00073af82868bdd9",
"riadhgharbi.github.io/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"riadhgharbi.github.io/.git/objects/de/991d6317bba442f9ecd8dbe575e2dabc94dc09": "6aa9368cb912db013a7b175281c8ebb0",
"riadhgharbi.github.io/.git/objects/e5/0285ff291056b5569ac4dea723ff8a8731d997": "8dac41e09f3dcab1364ff6c4ae428f61",
"riadhgharbi.github.io/.git/objects/e8/1f02880759f82e67d9e358206ec83a5813cb0c": "29578ed52793a9f692259a0e12ba71d7",
"riadhgharbi.github.io/.git/objects/ed/53b72456d606c9476b1c976befe93c0f93e954": "a12029382f9bcae92edbdc11de42e9e3",
"riadhgharbi.github.io/.git/objects/ee/8462e3719302e84b50811c34604f6ddcb36a52": "0eab8b2cec09eb4c87b22e3576fe75cd",
"riadhgharbi.github.io/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"riadhgharbi.github.io/.git/refs/heads/master": "fa9145bbd73a8e9707e5e5d35db4f8dc",
"riadhgharbi.github.io/.git/refs/remotes/origin/master": "fa9145bbd73a8e9707e5e5d35db4f8dc",
"riadhgharbi.github.io/assets/AssetManifest.json": "1901997c807be7192aa2d66a9c121dbc",
"riadhgharbi.github.io/assets/assets/background/background.gif": "cdaa1ee9aa7fcd86a98151fd99b9b78f",
"riadhgharbi.github.io/assets/assets/background/unsplash.jpg": "c34af054a9dbd4b4191761f962f8eaa0",
"riadhgharbi.github.io/assets/assets/fonts/Lora-Italic-VariableFont_wght.ttf": "fd66db567c00ec17273d45b729a36ead",
"riadhgharbi.github.io/assets/assets/fonts/Lora-VariableFont_wght.ttf": "337fa370c6ba675d1c9d3ba0d1444145",
"riadhgharbi.github.io/assets/assets/icons/facebook.png": "b36613f890106058176aeadb99248b78",
"riadhgharbi.github.io/assets/assets/icons/github.png": "04fae54e5016ce0fd17199f9b247197e",
"riadhgharbi.github.io/assets/assets/icons/linkedin.png": "85ecbddaafdc372d8913ae11736de87c",
"riadhgharbi.github.io/assets/assets/icons/phone.png": "103fc46b9b1a688536adaadd941cae7f",
"riadhgharbi.github.io/assets/assets/icons/youtube.png": "d647784a84be1b52daac127bf3ddb6bf",
"riadhgharbi.github.io/assets/assets/images/image1.jpg": "07fc111fccb2a78461b075e2e04b1f98",
"riadhgharbi.github.io/assets/assets/images/image2.jpg": "175493817d7ed9ca5a05a09f7142a989",
"riadhgharbi.github.io/assets/assets/images/profpic.jpg": "1f0931e93a8c8e3342bcb3a7be5aeae4",
"riadhgharbi.github.io/assets/assets/mywork/jattends.jpg": "591c019e8dddcd54c344d9904aeb48c5",
"riadhgharbi.github.io/assets/assets/mywork/mystore.jpg": "05084fd08923ae3254fc06a20a8d652c",
"riadhgharbi.github.io/assets/assets/mywork/office.jpg": "c32ba07693ab82142d1c0038b41dee69",
"riadhgharbi.github.io/assets/FontManifest.json": "f11a9654ba2cb51d298ba0fa9482cc6d",
"riadhgharbi.github.io/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"riadhgharbi.github.io/assets/LICENSE": "e3e547daa7c1bf6085babc7d130b950d",
"riadhgharbi.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"riadhgharbi.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"riadhgharbi.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"riadhgharbi.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"riadhgharbi.github.io/index.html": "bf1803fb8d20d6ec07becfbcd9675c3a",
"riadhgharbi.github.io/main.dart.js": "d0624098994e5576f7b4c5b5ca5501f7",
"riadhgharbi.github.io/manifest.json": "9f905d08be07721210cf139f907a2a7b"
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
