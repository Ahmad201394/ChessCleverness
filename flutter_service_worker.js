'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "89ee2d67fd9ca2a2041f30d8afaf393d",
"assets/AssetManifest.bin.json": "8fb2722a08e18b3a0d42dc845bfadb83",
"assets/AssetManifest.json": "1b79d01199c36560ef18b7938a04cf41",
"assets/assets/black_bishop.png": "95e1b0cb19facdf4615ca6e08ba0bd6c",
"assets/assets/black_king.png": "86c3967a19a686f35594913b12165907",
"assets/assets/black_knight.png": "39c365c1027b667e7cb2b2577dc9602f",
"assets/assets/black_pawn.png": "6a0d3c587d704c268f7adde8aaa6dce3",
"assets/assets/black_pawn1.png": "6a0d3c587d704c268f7adde8aaa6dce3",
"assets/assets/black_queen.png": "a534752061705d4f0bb61e15f722e565",
"assets/assets/black_rook.png": "47ec7d3542bab547d77363b25fb15da3",
"assets/assets/chess.png": "8447c06783dae45c277d91428221f995",
"assets/assets/ChessPiece/black_bishop.svg": "d66d34082aed5c028ae73000b639fe2b",
"assets/assets/ChessPiece/black_horse.svg": "92003a74ca7c97d84ae4c880f3d0da83",
"assets/assets/ChessPiece/black_king.svg": "e3451fff6ecf0fcd6de9217ccec6ba84",
"assets/assets/ChessPiece/black_pawn.svg": "876f1ece4514c9b19b748e5b985e74f2",
"assets/assets/ChessPiece/black_queen.svg": "8e8aadb6f4a4229d3cb0650301f5a9fd",
"assets/assets/ChessPiece/black_rook.svg": "9a79237a3c4acee7893525f1bfc456ca",
"assets/assets/ChessPiece/white_bishop.svg": "7303be2e871fbd2e3bc84a06edfaac83",
"assets/assets/ChessPiece/white_horse.svg": "797dbcf42c59d80f11fd863118250716",
"assets/assets/ChessPiece/white_king.svg": "27fd3307056d10dae685faf4ca8f4488",
"assets/assets/ChessPiece/white_pawn.svg": "e38a4f66149924b57e4617dbbfe10ef7",
"assets/assets/ChessPiece/white_queen.svg": "518cd5f8585dbdb35199fa1edf31979f",
"assets/assets/ChessPiece/white_rook.svg": "80202a6fdfb25e1c648f14cdc6306c02",
"assets/assets/chessss.png": "40d5d060e16537042ea8be4c5b8aa600",
"assets/assets/images/back_login.png": "044a0451734b3c2dfa0bb380d7243458",
"assets/assets/images/back_login_aa.png": "0564f0efc65e890faf6bbe53c68ddf83",
"assets/assets/images/back_login_aam.png": "937126bb684cfbd2a34e67872fe4e494",
"assets/assets/images/back_login_sss.png": "6b2764e73dbff1209fd7ea8a6a4f3618",
"assets/assets/images/back_register.png": "8acfc389e6543c9a161f7d37e140f3e1",
"assets/assets/images/back_register_s.png": "1700f3c3fe35a6cbbbfdeca4d0209e22",
"assets/assets/images/back_register_sm.png": "221b7b476af7551bf4cf8380e9f30a08",
"assets/assets/images/back_register_smmm.png": "50c1429e8c446ee8419a8878afe7f23a",
"assets/assets/images/back_ssssss.png": "61ab0bbdb0a15eda715ebd5a983af84b",
"assets/assets/images/back_ssssssm.png": "d5576ec7d1ae369d00375aa9f8ba6105",
"assets/assets/images/li_back_login_aam.png": "9359ccbf61eb2bce5dc96ff4b323086d",
"assets/assets/images/li_back_register_smmm.png": "b9f53840a2ac3d18ee185bf6d73bbc50",
"assets/assets/images/li_back_ssssssm.png": "32054723ae48d429b6adac8d452fdfe4",
"assets/assets/images/li_back_ssssssmaa.png": "b273c42677ad68a13069551deb08c77f",
"assets/assets/images/li_logo_b_ss.png": "389b962afde184b12e71051fe6dc3444",
"assets/assets/images/logo_b_ss.png": "54844eaf6e85b28ef342cfa717c4775f",
"assets/assets/images/logo_b_ssb.png": "3f24caea59fe4d1f1b6f9d4cde545e77",
"assets/assets/images/logo_b_ssb_n.png": "13e0133be1ffa046fb6f7490dd600cb9",
"assets/assets/white_bishop.png": "35d1427a3fe5134008934504860d424e",
"assets/assets/white_king.png": "92271801a5bd8ac6334c5755f52c0753",
"assets/assets/white_knight.png": "e050cecdc9de5c3c2886bb2117165bda",
"assets/assets/white_pawn.png": "166ea8dfda70af4d0b815a28eb180382",
"assets/assets/white_pawn1.png": "166ea8dfda70af4d0b815a28eb180382",
"assets/assets/white_queen.png": "6bbf7affe7b78bf09ea072a627fa5a13",
"assets/assets/white_rook.png": "a9a56e1bf38c10dd2def49b7186a9e3c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "d105fcbf512922ffa41e8a568d46df69",
"assets/NOTICES": "6f9a6b656f538f85d6f54af329fd5253",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "879447c15bf9b57a57db3c4701ef9307",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0145a0f2c3c877a5d9a8f67fa2cb1910",
"/": "0145a0f2c3c877a5d9a8f67fa2cb1910",
"main.dart.js": "4bbfe14c991c0e1710d76bd886fffefd",
"manifest.json": "09c0e4d17f37a1b7a60b884de86286d7",
"version.json": "728f2eeae92e204938731eeffe158ac2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
