'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3b596ebd80ddde0b56367aa5a7a2ed02",
"assets/assets/fonts/BalooTammudu2/BalooTammudu2-Bold.ttf": "b2071516bd57b59035ad848cda457b7c",
"assets/assets/fonts/BalooTammudu2/BalooTammudu2-Medium.ttf": "201a87bdb18d8ab5ab7782fcfa95721d",
"assets/assets/fonts/BalooTammudu2/BalooTammudu2-Regular.ttf": "0edb362707ef5f49b349ee2a4525995c",
"assets/assets/fonts/iconfont/iconfont.ttf": "8c1540328d5cafb02ca9a0d4b0f7991e",
"assets/assets/fonts/SourceHanSansCN/SourceHanSansCN-Normal.otf": "35df35f7cd5b2426e9e25397505f0c9a",
"assets/assets/icons/common/1414def5": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/146846ae": "5e1c87ecc447e41b235f3e6b0d15a900",
"assets/assets/icons/common/14bc0cbf": "3770b8dca902787a39c9e1ceded8c96b",
"assets/assets/icons/common/1c7f35f5": "bd7167bfa016735fb8651718e4a8bc35",
"assets/assets/icons/common/256de4bc": "a644ad7893c94ee9deb7eca445973ca8",
"assets/assets/icons/common/258ed0e8": "cbbd70835d9cf93bd710bddc88b4be03",
"assets/assets/icons/common/2731e836": "c659eaa15c2f9930854c452c8ed131e5",
"assets/assets/icons/common/2c50a0da": "88a6297941f44d0eae1869b905313b49",
"assets/assets/icons/common/3525c568": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/398b3d55": "d58a9feb124d3b8f35465f34da6eb418",
"assets/assets/icons/common/56656b88": "67bd2eeaffbf87325195a15d2d878092",
"assets/assets/icons/common/57b4b5a": "6f17c333736912ce1d9271f41ae8002c",
"assets/assets/icons/common/5ae72b25": "af14bcb5fe832ddb3974176e5666f98d",
"assets/assets/icons/common/63da5a8c": "cea47fcda921e686ab551bffcc46e7b8",
"assets/assets/icons/common/6631791f": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/685c14a0": "e6d586fc16b15d49ad14971b961428cc",
"assets/assets/icons/common/68677d7f": "2582c255f5e5277cb7d8274fccfc81a6",
"assets/assets/icons/common/7d98fe45": "5eaa00a998fe69f4f1b950badc571df1",
"assets/assets/icons/common/7e64ba12": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/87374b53": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/8e14d925": "85c1f854684c9574106fa0aa4e4171ea",
"assets/assets/icons/common/8f1d94ba": "e4460d0c81123ec2ca4b4ac48c042bfc",
"assets/assets/icons/common/953ac9d2": "6905c16e3fd2480d95279b0c100d47d5",
"assets/assets/icons/common/anquan.svg": "e6d586fc16b15d49ad14971b961428cc",
"assets/assets/icons/common/at.svg": "aee9af74419216b8c3bc621abb7e142f",
"assets/assets/icons/common/bangong.svg": "6905c16e3fd2480d95279b0c100d47d5",
"assets/assets/icons/common/baocun.svg": "31622e348e6fd54a584e0064fdae125c",
"assets/assets/icons/common/baohu.svg": "b533b4b86798767961a19e03fa9ae090",
"assets/assets/icons/common/biaoqian.svg": "6f17c333736912ce1d9271f41ae8002c",
"assets/assets/icons/common/biaoqing.svg": "e11cb21e759b431243ea31d7f94d2c0d",
"assets/assets/icons/common/cb5b6d92": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/cc6d32b2": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/cf415bba": "39a6fd01d5cfc6fca9eaca46d6fdf570",
"assets/assets/icons/common/d6de0bc2": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/d7eca43": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/dayin.svg": "564fda94489d265199a512235b3f7c8f",
"assets/assets/icons/common/dingwei.svg": "8d4feef0d774eecb25acded7c43925a8",
"assets/assets/icons/common/e56f201a": "ff889fa757b51d36dd2bb3ac7b3c64d6",
"assets/assets/icons/common/e917f02c": "aee9af74419216b8c3bc621abb7e142f",
"assets/assets/icons/common/ee87145c": "401beb66dc030ca3754157b52ed3e358",
"assets/assets/icons/common/efcb5f80": "a1cee104f762e2b982d4b42d5e33e991",
"assets/assets/icons/common/faxian.svg": "401beb66dc030ca3754157b52ed3e358",
"assets/assets/icons/common/fenlei.svg": "9e81481cd9795b31083df4a4b05dfabf",
"assets/assets/icons/common/fenxiang.svg": "2582c255f5e5277cb7d8274fccfc81a6",
"assets/assets/icons/common/fujian.svg": "88a6297941f44d0eae1869b905313b49",
"assets/assets/icons/common/fukuan.svg": "e4460d0c81123ec2ca4b4ac48c042bfc",
"assets/assets/icons/common/gailv.svg": "ff889fa757b51d36dd2bb3ac7b3c64d6",
"assets/assets/icons/common/gouwuche.svg": "67bd2eeaffbf87325195a15d2d878092",
"assets/assets/icons/common/guanbi.svg": "17a39c5991dfdfc632177fa5842d5868",
"assets/assets/icons/common/guanjun.svg": "85c1f854684c9574106fa0aa4e4171ea",
"assets/assets/icons/common/hongbao.svg": "3770b8dca902787a39c9e1ceded8c96b",
"assets/assets/icons/common/huiyuan.svg": "66d81cd69a08ab646acd10bf58e6cfac",
"assets/assets/icons/common/jiasu.svg": "5e1c87ecc447e41b235f3e6b0d15a900",
"assets/assets/icons/common/jiesuo.svg": "d58a9feb124d3b8f35465f34da6eb418",
"assets/assets/icons/common/jiushui.svg": "bd7167bfa016735fb8651718e4a8bc35",
"assets/assets/icons/common/kabao.svg": "39a6fd01d5cfc6fca9eaca46d6fdf570",
"assets/assets/icons/common/kefu.svg": "5eaa00a998fe69f4f1b950badc571df1",
"assets/assets/icons/common/liwu.svg": "a644ad7893c94ee9deb7eca445973ca8",
"assets/assets/icons/common/lvhang.svg": "cbbd70835d9cf93bd710bddc88b4be03",
"assets/assets/icons/common/man.svg": "af14bcb5fe832ddb3974176e5666f98d",
"assets/assets/icons/common/mark.svg": "cea47fcda921e686ab551bffcc46e7b8",
"assets/assets/icons/common/meishi.svg": "a1cee104f762e2b982d4b42d5e33e991",
"assets/assets/icons/common/mima.svg": "c659eaa15c2f9930854c452c8ed131e5",
"assets/assets/icons/common/pisa.svg": "30055068bbd5b6f785fc37c80eedec33",
"assets/assets/icons/common/qingjie.svg": "149bcc4c9a456903d3f5a986a3fa64c4",
"assets/assets/icons/common/renwu.svg": "c0175c6c1d0e890171549c11b83d71a6",
"assets/assets/icons/common/rili.svg": "04608706328d70a64369bd33cb466627",
"assets/assets/icons/common/riyong.svg": "cddb94de60149861b0a65970bd21cbea",
"assets/assets/icons/common/saomiao.svg": "d97a3bab8f161e04239f3188b15aeeb4",
"assets/assets/icons/common/shanchu.svg": "ff8300f5ef05589d8585be1c3c846df4",
"assets/assets/icons/common/shangchuan.svg": "b0fa2400a20084e7590c5812932beaa1",
"assets/assets/icons/common/shangpin.svg": "b2c5dd71566969dd9188063e05c6c4e7",
"assets/assets/icons/common/shezhi.svg": "06ce07516f5c62f4db14ca0e32e3e6d4",
"assets/assets/icons/common/shijian.svg": "29ef68cbc864e32a428716cedd13dbf8",
"assets/assets/icons/common/shipin.svg": "a74f91f3d1d2bc1b202fc9f37035cbc2",
"assets/assets/icons/common/shiyan.svg": "c547dbc510f4c69d02dbe41af3a15163",
"assets/assets/icons/common/shouji.svg": "3bc4febec8070676f6a25fe011f60bd3",
"assets/assets/icons/common/shouye.svg": "5d112d351cb20b6449aed022bed98cbf",
"assets/assets/icons/common/shuaxin.svg": "e1b9c9427422b694cc3be38ee04c8804",
"assets/assets/icons/common/sousuo.svg": "4668e8173f34af91a8f26a382f7d92ce",
"assets/assets/icons/common/tupian.svg": "43fc200de3d61d45a8169d88eba4382b",
"assets/assets/icons/common/wenjian.svg": "d96118ec2e033053d41cc5f1aca88f0f",
"assets/assets/icons/common/wode.svg": "9781cb8ca30ba450cfe1e046d73150c1",
"assets/assets/icons/common/woman.svg": "ecd232fab9227358b698a956702780fe",
"assets/assets/icons/common/xiangji.svg": "25b89fc883587ba48e71bcedcb7dd531",
"assets/assets/icons/common/xiaoxi.svg": "0efb3d1c0c48ecc02aea5fd966809b3c",
"assets/assets/icons/common/xiazai.svg": "7821aa2c9f352b2131dc8e20d7bfecd3",
"assets/assets/icons/common/xihuan.svg": "ea1cc7662671a57872f0c56cf709f8c1",
"assets/assets/icons/common/xinxi.svg": "bd91d9ede92d89928683b3135d319443",
"assets/assets/icons/common/xinyongka.svg": "b59b2a3a0e5f91f8e1b859919118ef08",
"assets/assets/icons/common/xuanxiang.svg": "8d390b3431aee7a9f425a3e562f97dcb",
"assets/assets/icons/common/xuanzhong.svg": "d093d46600a20221baf4ee91cd91c67f",
"assets/assets/icons/common/xunzhang.svg": "21da103bf43a2db1a88c278a804ff573",
"assets/assets/icons/common/yiliao.svg": "c8de042e3b92d7aff1965cd94b67ae88",
"assets/assets/icons/common/yingshi.svg": "ca226a39ac20b0b9be4b15bf1b3e799d",
"assets/assets/icons/common/yinle.svg": "1cca4c832ed9c23bfb30c76e04695ab4",
"assets/assets/icons/common/yinliao.svg": "edbd15bd948cffa2cdac8319a4f457a2",
"assets/assets/icons/common/yiwen.svg": "6d5312214badfb55d85f7507e8e323f5",
"assets/assets/icons/common/youhuiquan.svg": "5471d6b218ea7106dd43587ae194398f",
"assets/assets/icons/common/yujing.svg": "2c003e92a199207777ec3ead161d172e",
"assets/assets/icons/common/yundong.svg": "9155bc469f3a44e6eb0da4e0b884c364",
"assets/assets/icons/common/zhuangbei.svg": "f43ab8f2dfb079eed635b2911e375b34",
"assets/assets/icons/common/zhuangxiu.svg": "7b5c83c4ad1ba2a40a407f01a28139d2",
"assets/assets/icons/events/notice.png": "6b9c411bc0855922c0fc26c8d2c5b5b7",
"assets/assets/icons/events/participation.png": "112f44f3e594187464acc845e705f26e",
"assets/assets/icons/events/sortition.png": "ed2dbd2450a34d1dabec26327ecae64d",
"assets/assets/icons/events/vote.png": "c21960c7a3d4668021bb2011d7226837",
"assets/assets/icons/logo/logo.png": "14c61e7834c752ba4a4457aeafda852f",
"assets/assets/icons/logo/logo.svg": "ad8f61aadf1410a2798fe28238c0d94d",
"assets/assets/icons/tools/email.png": "4acb884bf1b71d7a4eb06c26d896b200",
"assets/assets/icons/tools/emoji.png": "a3ddef40af575069b70ca078a8c1e29b",
"assets/assets/icons/tools/emoji.svg": "418806a58276720a1287eac347cd291e",
"assets/assets/icons/tools/safety.png": "6bc42cefc3a596004ef49a0bb9eeff6f",
"assets/assets/icons/tools/theme.png": "a5ff725f29508bb9b29daa190a19cf91",
"assets/assets/images/avatar.jpg": "8e90e6fa491bb2f22bf9db09ecf8b254",
"assets/FontManifest.json": "91a5cca4abc3ca7759747a033ef4f2de",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "187f92421c8a2a111dcc6d0f4de0efce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "95b8d8f326ab81a41496255380a39e55",
"/": "95b8d8f326ab81a41496255380a39e55",
"main.dart.js": "25b7279122212eeb3ed6d70c62b08a3b",
"manifest.json": "3d388d3b4779d897161d7be27719933b",
"splash/img/dark-1x.png": "aee2eaa44b512f79e823d77194da2033",
"splash/img/dark-2x.png": "38fd9c9deb64f7554b375aee6dce13ad",
"splash/img/dark-3x.png": "0664d77d686753e6266255cc969f9194",
"splash/img/light-1x.png": "aee2eaa44b512f79e823d77194da2033",
"splash/img/light-2x.png": "38fd9c9deb64f7554b375aee6dce13ad",
"splash/img/light-3x.png": "0664d77d686753e6266255cc969f9194",
"splash/style.css": "86126e7e4072786170390b7ceee604b3",
"version.json": "09734434f39353da0ae8e8d0384c199d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
