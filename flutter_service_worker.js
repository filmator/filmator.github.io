'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "76de97c26c7ee6af4337b57e136e2660",
"assets/AssetManifest.bin.json": "9d99b53d63fd4866325e241705583a13",
"assets/AssetManifest.json": "ba3808d10d0e8a68afc8936b157b26b7",
"assets/assets/fonts/YEKAN%2520BAKH%2520EN%252004%2520REGULAR.TTF": "62778b24dc8735e23ccf33bb8822cb30",
"assets/FontManifest.json": "7dcc23dfb13faed805bc1fd271aec63e",
"assets/fonts/MaterialIcons-Regular.otf": "14a376582bd946aa3f27968e4f55b78e",
"assets/images/filmbin/active.png": "01fd3bf8a249776a8019e2bfdcb02f4e",
"assets/images/filmbin/Angry.png": "d74ddb9e5af650ea56849208009a776c",
"assets/images/filmbin/aparat.png": "85c02f3dc186386965a0e174df7eaf8a",
"assets/images/filmbin/apple-icon.png": "ae7afafd7a3f1682076630acdf136937",
"assets/images/filmbin/avatar-1.png": "1667bd7d027aa2aca6b20341d41012c1",
"assets/images/filmbin/avatar-2.png": "bc27af19d85ecc7cfa886463380f9a96",
"assets/images/filmbin/avatar-3.png": "7dc9b0d91bad8cec57c48ecca61b54a1",
"assets/images/filmbin/avatar-4.png": "2a3a52a86bbde852f25beb1f5515980c",
"assets/images/filmbin/back.png": "a1fef4a439de6a04412e5795f56d4fdf",
"assets/images/filmbin/bannemovielist1.png": "96b19943f94ff2c12d5e2d443ae0e210",
"assets/images/filmbin/bannemovielist2.png": "85925fd9230bc55e89d699b967a5b74d",
"assets/images/filmbin/bannemovielist3.png": "ebf784bd460be08ce5b196db708d556d",
"assets/images/filmbin/bell.png": "86410614d5882abfa81ca690b7bcd432",
"assets/images/filmbin/carton-title-1.png": "567d67e663be16698aae68456ac6da03",
"assets/images/filmbin/carton-title-2.png": "7f00d360f9832bfe9189618be649e6bc",
"assets/images/filmbin/carton-title-3.png": "0793ac353305bff65a9d5210a547af89",
"assets/images/filmbin/cat1.png": "9f01af090ee212542bbb89ea1d445d06",
"assets/images/filmbin/cat2.png": "c3959792c3189cf5ddd9223083811e0f",
"assets/images/filmbin/cat3.png": "5ab044d66bd85fafa06ff7fac6cbc08b",
"assets/images/filmbin/cat4.png": "619927481c9b27984ac42171b69af503",
"assets/images/filmbin/category.png": "3cb701ed7b1c4c03ee5bdcbe871019d8",
"assets/images/filmbin/close-square.png": "0df87411abe0acc14e1e3be986ca5710",
"assets/images/filmbin/comment.png": "1652e59e65c60c29bd9b5c2441e8355e",
"assets/images/filmbin/dislike.png": "34d09b4a1ab118f7136a4f055d14ea05",
"assets/images/filmbin/disliked.png": "7d38c5dfcd160fede6643b32e15cccbc",
"assets/images/filmbin/facebook.png": "026933cdf00c6e10a08c932ff1353a37",
"assets/images/filmbin/fail.png": "8c19c539b4714e9b27d6c1ca84f5fe7c",
"assets/images/filmbin/field.png": "70ebc90ce25ca27cbaa7a15cff493cc7",
"assets/images/filmbin/film-title-1.png": "8be6a5a204fd5e70aad2fa4d2bd66164",
"assets/images/filmbin/film-title-2.png": "ae5df71e9b6ef0b1eb85f66940686451",
"assets/images/filmbin/film-title-3.png": "188915b05d0e8b911949856946c47f2f",
"assets/images/filmbin/film-title-4.png": "b771688398bff7416a8d5ac24494dd40",
"assets/images/filmbin/film-title-5.png": "38997492b42ea7292e762b9f52aa212d",
"assets/images/filmbin/filter.png": "d087df46b203cf54893d2826ec24e9d3",
"assets/images/filmbin/google-icon.png": "c256edc5429e8362983449bd9b09cb20",
"assets/images/filmbin/google-play.png": "dbe6ce71c33521ee2e65ad3ce8dd08ed",
"assets/images/filmbin/heart.png": "829cec9b5b56fcd61c0cc4542bdd65e4",
"assets/images/filmbin/help.png": "5af267575758f551952f4c0e8e29ffad",
"assets/images/filmbin/icon-1.png": "42cf03ef62cbfc81a443431921d5d19c",
"assets/images/filmbin/imdb.png": "1f8898b0f2ef93f8406732c7d363c504",
"assets/images/filmbin/import-2.png": "30d7d1b8647a49b8329ce2448241e761",
"assets/images/filmbin/import.png": "fa130f09047d1fb916cdef90a2a7cb04",
"assets/images/filmbin/instagram-inline.png": "a8133f449a4c82f480f39912c94cb1d1",
"assets/images/filmbin/instagram.png": "339a107df0f96279f991c0bfbb1d01ca",
"assets/images/filmbin/James-Marsden-3.jpg": "115f6dedd6790abd7b719fdf0183e06d",
"assets/images/filmbin/like-2.png": "a69fbf92ce25e5cb610db97e067973ad",
"assets/images/filmbin/like.png": "beadafa396bd099c095020ffaac7e6cd",
"assets/images/filmbin/liked-2.png": "acdae8c502a55a435d1da574b284e21f",
"assets/images/filmbin/line.png": "5e1169acb57058bd6e305b02265cf6fd",
"assets/images/filmbin/link.png": "765739534c6806cc4b2e84a2f5846eb8",
"assets/images/filmbin/lock-icon.png": "3a2fbcbf9e6f0c2838e2f3aaf410efef",
"assets/images/filmbin/lock-icon.svg": "453f99b5208cb0698e237c5151635e62",
"assets/images/filmbin/logo-2.png": "1eed8c1661f7760c571b9719897c16c1",
"assets/images/filmbin/logo.png": "72b48f825541215f9e5462250b8e03c4",
"assets/images/filmbin/logout.png": "fe85077a4ce6a1d44e3bb11bdc3a5629",
"assets/images/filmbin/Love.png": "7d7ec0cdc75512056e7cd4c360e67242",
"assets/images/filmbin/menu.png": "f2ce904e7e99f0e0cd66691847c228b3",
"assets/images/filmbin/mic.png": "1fc313a5904059d112f001a70d56962e",
"assets/images/filmbin/more-2.png": "430a5c3199e21b8eb872e2604074f36a",
"assets/images/filmbin/more.png": "df477b58a68f996d125a594bd0a3fed8",
"assets/images/filmbin/nav_bookmark.png": "15cae4635e8b169b3b4deb456646902f",
"assets/images/filmbin/nav_category.png": "dd6fd2ad6d0d88fc5673d3f324b9fa38",
"assets/images/filmbin/nav_home.png": "0f4fbc892e9c2602d338cbbb658e6bda",
"assets/images/filmbin/nav_user.png": "f083c32b154844133907d9a5b6258783",
"assets/images/filmbin/password-flatline.png": "9510e70dc5c5ff160aff326e624ddceb",
"assets/images/filmbin/personal-avatar.png": "20cc8925e663f8598fdf6a6da996bb15",
"assets/images/filmbin/pintres.png": "d09b6911bab3a27fd64c9f51e6c608a4",
"assets/images/filmbin/play-2.png": "5f17be647b026f868b1f236af639bbae",
"assets/images/filmbin/play-movie.png": "483349660ba6ea58fd2eb3c0540ce992",
"assets/images/filmbin/play.png": "ae2af112d7d31dcd857d21329e8647b7",
"assets/images/filmbin/Pocker.png": "6eea814ab36bd295b2f0876be8a7bcf0",
"assets/images/filmbin/premium-account.png": "021fdec394d9e37bb1fb48c97226bda7",
"assets/images/filmbin/premium.png": "be2beefa60ecef94a38d933c8bb75340",
"assets/images/filmbin/profile.jpg": "16f9758935af0decab5419782e529c37",
"assets/images/filmbin/save.png": "28e70a65d4614f2b3cd8d92a8f06dca9",
"assets/images/filmbin/saved.png": "ea933e37c539f38af78d79af613d7e10",
"assets/images/filmbin/search-normal.png": "60b030dc36c950575ce98121c3428724",
"assets/images/filmbin/search.png": "3b556c07e7fb9177641a348e02fc34a9",
"assets/images/filmbin/serial-banner.png": "2b40e766a0a7f8f50ab85e6f9436f4bc",
"assets/images/filmbin/share.png": "4170a1f053baaf9bf9402f21e55a125a",
"assets/images/filmbin/slid1.png": "7a61829f2137327f5104a833419095ce",
"assets/images/filmbin/slid2.png": "3b90d4a8103001f98a23ce7a98131ac4",
"assets/images/filmbin/Smiling.png": "968158400fabc39f0f89d93f75d17b32",
"assets/images/filmbin/sort.png": "35aa1a106955b5def41693afecf55e30",
"assets/images/filmbin/subtitle.png": "2a120faca314594d30453fb3f30ee404",
"assets/images/filmbin/succes.png": "e774142655b68eba6c0dc1225ceb4e2b",
"assets/images/filmbin/success.png": "eb21bae63da9e57e7c82a0e0389178c1",
"assets/images/filmbin/telegram-inline.png": "8b25ff4308dae7cf8e79e9fa375cc12d",
"assets/images/filmbin/Tierd.png": "788532c7c6c2405c217304f54f63c6ae",
"assets/images/filmbin/twitter-icon.png": "03400e7c874d016ea6b7d71fb922a659",
"assets/images/filmbin/twitter-inline.png": "a0a13a2518ce5f767e42e9318a55fb40",
"assets/images/filmbin/twitter.png": "88e823488df6ae97aa7ff3a67983cccf",
"assets/images/filmbin/update-1.png": "2c7dc075dc42aba57cca390545142356",
"assets/images/filmbin/update-2.png": "ac041deaf45a8d85a6c77f06b3b9d832",
"assets/images/filmbin/update-3.png": "ccf07f994a45432c0564623230c11c25",
"assets/images/filmbin/warning.png": "faadcb77605a728d18ba13da8e15f335",
"assets/images/filmbin/whatsup-inline.png": "5a9493708478c85ccfa7e4638f8a589c",
"assets/images/filmbin/yellow-line.png": "39306fe1b8c2e37cdd519bddf55f9604",
"assets/NOTICES": "90068549aef4e5dead787513247a7ec2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a1f38a0d9bdd5f9cb8d8a04bc50a8dde",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d1b6f33326c168d99444fffcc9ed5000",
"/": "d1b6f33326c168d99444fffcc9ed5000",
"main.dart.js": "a07a7977d42e0fd16a276cd700ccb6c4",
"manifest.json": "21e38963820921fbda07cd88bb4adc1b",
"version.json": "73b781f6d6eada87a148db5f3ae4536a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
