/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","73914c482319e93a9e3869f05495d041"],["/about/离职申请书.html","44c534a6d492c906b1a724a39192dd5d"],["/archives/2020/07/index.html","756647c256a7a64ecdcc3d037c0e978f"],["/archives/2020/08/index.html","e2ccb0495c8d5e4787dd85cc6f997976"],["/archives/2020/08/page/2/index.html","f0d71c2e61577c32781860af69b3b553"],["/archives/2020/08/page/3/index.html","4d0d82802073ede275aa486078927e84"],["/archives/2020/09/index.html","ef538a0c0af0f1af1e6a9c969c4a6d49"],["/archives/2020/index.html","36f97bf04c05598a89977ed8fe35ef5f"],["/archives/2020/page/2/index.html","c7c613cf34cf142f005d5e5e06317506"],["/archives/2020/page/3/index.html","a261e9a19d5b488359d21372c12610ae"],["/archives/2020/page/4/index.html","8135f85430fbfef19910b957d705569f"],["/archives/2021/03/index.html","79d6f9c644f038d7d9dbeecabc905799"],["/archives/2021/04/index.html","27fc6113fb0a6c3b7ed2867551d97245"],["/archives/2021/05/index.html","0e8e9707db51f397be9ba060aa2f8b5b"],["/archives/2021/06/index.html","aaf36394a4a16856b8d200b12654b4d2"],["/archives/2021/07/index.html","202676d245a9e60d9bc1dead100db704"],["/archives/2021/07/page/2/index.html","dd3ac0cf43833c045e0f63e58e63b1b4"],["/archives/2021/07/page/3/index.html","3ea57fb48bf07bce72602bdd2bbfca02"],["/archives/2021/08/index.html","efe25e1c1e98340a57a36ad089f68c7a"],["/archives/2021/09/index.html","08df1531436bef2ff661392cdecb868f"],["/archives/2021/11/index.html","bab2a2d0331a352a1fd98ae56ff06812"],["/archives/2021/12/index.html","844cfb3c697e75312f70679bce2597a5"],["/archives/2021/index.html","a795e2ec9882c6e44ba1269a00f6001d"],["/archives/2021/page/2/index.html","4e80dce98c7ec0edc5c54591fd74f4bd"],["/archives/2021/page/3/index.html","bfc8ea9251f6cb7f8f2c52d3548be621"],["/archives/2021/page/4/index.html","376d85e239c1bdc87e9106fb65efd672"],["/archives/2021/page/5/index.html","432e261a10f9c269e12712f41be493f3"],["/archives/2022/01/index.html","ad7ae97a75d42670cfe5fe2208342d75"],["/archives/2022/03/index.html","d9aafa68e7ee66799ecb3060efd5da09"],["/archives/2022/08/index.html","c247275da07551e9f35d4474fe9eb3fa"],["/archives/2022/11/index.html","90ae53058b7e76bea27431acda0a9af4"],["/archives/2022/index.html","9675b5e7a7512f9b0e583a436e3e3a75"],["/archives/2023/02/index.html","47c0f2df1dbed12d542de888abfedaaf"],["/archives/2023/03/index.html","a512fc0328aeeeb2bd698f79d861852a"],["/archives/2023/index.html","64f53876af9219e55e6ae783abc94d2e"],["/archives/index.html","d5fb803de728794252b1a66f3365f9e1"],["/archives/page/2/index.html","30e88d19e3372c8e3894fc2beaf4caba"],["/archives/page/3/index.html","77b7335540375da2b6242874e97833aa"],["/archives/page/4/index.html","d12d756bffe2e8b0b6ddf484f02ca093"],["/archives/page/5/index.html","cd137bd22db8a88084aed8d655bc892d"],["/archives/page/6/index.html","be6e6efd31b989f056de631e29a95f83"],["/archives/page/7/index.html","49f186515a28a4777f49833cbbd042ad"],["/archives/page/8/index.html","92c6399544fdb7d53f7b59980423f7d0"],["/archives/page/9/index.html","733e31f1e54c8ff251a0668c15952c72"],["/bb/index.html","3bc363fce667b83811fab0c297c1332b"],["/board/index.html","984621d6f4275628679cfeff9f388304"],["/categories/Hexo/index.html","f60c3a831cbed6f992fbd7c4ef48cf02"],["/categories/IT碎片/index.html","32b9ef08109add7459b2f802d649a6e6"],["/categories/index.html","41ed064281d31ff3a33f88e2cfeb09ed"],["/categories/前端/index.html","b10a7ea81c616971b4aa1364e2d1d079"],["/categories/大数据/index.html","8e480549022e3bccb1174ba98c92c549"],["/categories/大数据/page/2/index.html","1cb345bc896d74ba0149a9ce3e7ba51e"],["/categories/学习笔记/index.html","55685880cbf1bc5229115590129aee7a"],["/categories/工作实战/index.html","10eb98e70b99dc339992909e56cafa16"],["/categories/开发手册/index.html","d991ebeb75a6f760bf23f623932d95de"],["/categories/数据结构/index.html","536ea38b995883bd9896b29c7351a69c"],["/categories/案例/index.html","7e0120c10e3db1fa5db5364be7f450f2"],["/categories/源码分析/index.html","11000bb471d7ac7aeff1e4fa9b03fb24"],["/categories/设计模式/index.html","b8d31f98ac1fb272bc42342a91a44cab"],["/categories/设计模式/page/2/index.html","82015f948294c4078002e2a9edd7a1f1"],["/categories/设计模式/page/3/index.html","690a5fdf4fd3cadd0808bfebb886da80"],["/categories/面试/index.html","0424a48fea10aa87ed0d063384dcecc3"],["/categories/项目/index.html","8647c7322d4d41d7d1f6e3381324b0b4"],["/categories/高级/index.html","8f1f3f5551e7a5f82531401a998787b3"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","7c8fbd642977bd3c1ec0128dd3fdf7af"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","a89885ed4e7418fd9030b7b841cf89b0"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","214f8d54af818e5204ad7f6d38bd2193"],["/page/10/index.html","a9e6c99f1234d72c7ab2ac13ca709732"],["/page/11/index.html","657677496d179f0df32c9c86a3ea702a"],["/page/2/index.html","bb74e729eaf8615d2abc3c86ff826276"],["/page/3/index.html","c4af65f1709bbe7bd00e66d88c4c3502"],["/page/4/index.html","b48bd85bb572f9fa0cf5ee85e9c5759e"],["/page/5/index.html","970120374d115b8a4430120d0f1ce853"],["/page/6/index.html","9ab30975aa6ecfa8855da1bf23db10e3"],["/page/7/index.html","6f63798115a94ad8ef484109fc3a391a"],["/page/8/index.html","0eb6a0014e830df8620345d481d3b80e"],["/page/9/index.html","c0cf96f11664174dee474439318296ea"],["/post/121bde1d.html","f41d457bd58151a281a4fd63b27f2bd9"],["/post/153083dc.html","d47c0542f260c565940e39b22bcf97f5"],["/post/164eee11.html","895fae7a1c8379306c25c0e3665559d8"],["/post/1a7b7abf.html","68177e7286f35e55619d2251f0e20354"],["/post/1baa3967.html","cb304f9d4ca9644025ec1829244c08c9"],["/post/1f4ac2fb.html","d8b8dcf3049ca70c14e824c5cf755b61"],["/post/22580020.html","980cfd0a2ff6d257a2b185b63c6a6583"],["/post/286296.html","49f728c3595fc9f7992eb788f4f36e7c"],["/post/2cd418c2.html","4c54e9cc8b4a958c3da3c79db404bacf"],["/post/30cf0cd2.html","59f9be7dfe07313b72b698232a1875d9"],["/post/317f8360.html","2def885b72a5807f5b56e4ad2ae0dfd9"],["/post/33cb1151.html","8bdf1f05c38ca6c1464f867c98f10d18"],["/post/34e57ffd.html","bae2085542488708cedec833089e525c"],["/post/3d20c1d7.html","58f07e49597e7edb7ca04a91ac780883"],["/post/3d24dcf9.html","6012c0001612fdacd1003b337ad2826b"],["/post/3f6c447b.html","dbc47d4010c7689701f03ed055403fb8"],["/post/490cdff9.html","6cce2a70abf54b05456b0838218ad854"],["/post/4a1111be.html","1d75c100a27b6b87d91b264210446d6a"],["/post/4fa8e0c4.html","0db2afa2789ef6398436d8e20eaa7397"],["/post/524e74d7.html","3c9cff8699f3062eae8856ee80bf9c06"],["/post/539343bf.html","8413ef8f5bad6405484f7446d052e863"],["/post/54788f73.html","0be426377ef973f4aeb42f08d98752ef"],["/post/563268dc.html","107756f905f4a1fe357f871ba143a8cf"],["/post/5ac88c70.html","15aa36b64effd638efc3446aae8532e5"],["/post/5bf55f4.html","1f7fb097c8eddc82a990407e49736ad9"],["/post/5e87465f.html","80d32ec0a1db059ee5afe3792aa3c3d1"],["/post/6016428b.html","dd451090899dd88e0cffe7527dc2a10b"],["/post/6208627e.html","c822749465856af609c9214a9e5b46d9"],["/post/64b51ed9.html","8364356d87ee614ac712feed560f4a73"],["/post/659da5b.html","47ee33bdd7072fd356f76dc93219c873"],["/post/6c429b75.html","7619a49da90d98635de571534b366c59"],["/post/721d4875.html","0ecb67e8394d881da05da495ca7c7a3a"],["/post/72e3b671.html","21de01aa1854edf92c067a89a5b21647"],["/post/730d8d6c.html","b4c1aad36cc792be6b4d918c4bab6b99"],["/post/74fc969.html","fb151913f9684d2592d2ad9ba924fea6"],["/post/78134e07.html","d9f29ea17d4e30acf760992322c8b1c3"],["/post/78c07335.html","2bc15d8c79015763b1a47a986c13fbdd"],["/post/7901ad89.html","25edff1ed8f1210d75cb47aeb4bb5593"],["/post/7a2a0c9f.html","f22cd188ea7aaf255cd7dde2ae512236"],["/post/7b216a3b.html","9df20ef2313cbef37007ec5906d8bf94"],["/post/7b510e10.html","40ad0bc87a48630563ea878da1bbd904"],["/post/7db2942d.html","6af5b49fbbc28ad824c73e411e72fcdb"],["/post/7e6c6990.html","2dd56f62857ce75189a9e824ea711b9b"],["/post/7fa79d96.html","568fdc34f2f97506bc40143d2d782cfa"],["/post/855673ad.html","5cd6fb14bea54ec957e04e13abde68b6"],["/post/892a2328.html","094b932b82f88dbd8eb4bcc46e85a3ad"],["/post/8acb1976.html","6c001ec8d39b25cf8525d2368bbc250f"],["/post/8e4fa41e.html","3653a3489d6f14057ed33ac85fc92f3e"],["/post/8f488ef0.html","c201aff31dde0d7a71e924262c655a45"],["/post/8ff08e27.html","dd449362977775541d2c30f10f380440"],["/post/9055d217.html","93fe16b60a475ab513a5c2a6d31e2330"],["/post/91ad9ce3.html","28aa6f91677b9e7ceddb59a6cbe32eca"],["/post/96131cab.html","f280587b6ff85047b8e52df49ca77113"],["/post/96b5906.html","19c38a5fdae1c52ed832b84f173608b3"],["/post/970fcca5.html","5aafbf0d75204cc6457551ba599d6a02"],["/post/9a246216.html","a67a4c13fbafb4c8406eb1c939d3e7fb"],["/post/a10c77a7.html","b53e5b158f9956c7e21dcb3753cb559c"],["/post/a708a60d.html","284c0c1e2dd1ae783813e5c93eb59662"],["/post/ad27c5a8.html","95fd8d6aefb8c7546bfa319bd2c3f548"],["/post/b6c47025.html","6374a1a8d4ed70b8620a03dd0c826579"],["/post/bd69ba8b.html","3b8edf97b92b626f13aa03d2eb71abb7"],["/post/bf7f3b65.html","d014935e9155444706daaaae2cfdc9e6"],["/post/c3176455.html","d133c6fba3de06a52ad8a91164d183ac"],["/post/cb80ff62.html","36f01eb60aace014487dc420a2562a99"],["/post/ce0e685a.html","dffeb55a3752fbae23a48d9bd707ebfb"],["/post/ceb39ac4.html","e379b237bc6bafaa00b3a6f2b18769a6"],["/post/cf413e35.html","d125fcd78974f0a344334ed228b53c73"],["/post/d036071c.html","9ee7673cbbf6e243ce033d7271324bd9"],["/post/d39191a5.html","544e1edbac7dda1b25132cdfcde54a8e"],["/post/de3bac1b.html","6f390a7936182397246db13e860f76ef"],["/post/df879792.html","e5b1830f279cfc7d2cf2dda5eb038f76"],["/post/e008fc33.html","3e9bdd5f8d4a9ccfa3300a2fd9379a0a"],["/post/e19da94a.html","8b75bbad9dcecb48c3a4dd4e300899ed"],["/post/eb04e0a.html","c5f269db9f2c853ce5d1c98f7a86798e"],["/post/ecd67acc.html","100521a252503ae79f123ae5fde2551b"],["/post/ee040603.html","3479e1208eb5c408342532d12a70c652"],["/post/f1601c3e.html","539ad78dc79073a0b5fc59c3a1b0deb1"],["/post/f31a5a5b.html","313e3f31b55a289ee3fc30f5580919f9"],["/post/f5c535ea.html","ccf4194b20995b32e2b670b4336665fa"],["/post/f7500981.html","74f00ef312d8175cda8ed56df7595f67"],["/post/f79807ee.html","80a0c5f66d8beca6d0b6a0c82edede30"],["/post/f7de8aa8.html","c61fb1e4d37c1bde75a2ce40205aa0b4"],["/post/f8239d66.html","690476b9f5ca8fb5da029bd95e2b8f0f"],["/post/f9f5e0c2.html","d616ffab039dcf6beb30dd91f04bfbe3"],["/post/fb77661f.html","8f72851bb99197a3c601df7429393569"],["/post/fe1f88a1.html","acfd7ab86e3a340fe2fca5494d5c5390"],["/post/fe57b0e4.html","6fabc92897cae4e5de33160114cb1720"],["/post/fe816c3c.html","25124c2dc90cad158d929fdf71e3b8c4"],["/sw-register.js","2abb46eb706a8512f0b906069d798a81"],["/tags/Butterfly/index.html","95e4261ab54e3b4bf46ad0de55c88ff7"],["/tags/Hexo/index.html","4ada31e12f76237843d49c1b57634c1d"],["/tags/JVM/index.html","93171582b401a3910f2bd4688b9e49d9"],["/tags/Linux/index.html","9cf44e7731e0396c3b423b75cf07d10f"],["/tags/SSH/index.html","a8471a12b3bb96e39b6df6fff037afef"],["/tags/index.html","34ee14e4b2012c152922f0d3403a2f34"],["/tags/spring/index.html","edc7d317518d6b1164b7b24f021a665e"],["/tags/vue/index.html","30cb7585552a7b78ce8f5f7242d98cd1"],["/tags/一问一答/index.html","6de2123d2c57ef03b267e9f1a173a623"],["/tags/个人见解/index.html","f6589988290b7f54c3c3b85620b80676"],["/tags/大数据/index.html","28ee4438c924da1f8048e76ddf0b01da"],["/tags/大数据/page/2/index.html","c4a8a80987925fe24cf8e298c18def53"],["/tags/大数据/page/3/index.html","a1cfb147170593e2f04145ea888e03be"],["/tags/学习笔记/index.html","174f6fea04030021b1913533aa9e1831"],["/tags/安装教程/index.html","f05a244f751a0b9227e4f08864b51ad1"],["/tags/实战/index.html","b21cfb4975d4dbb7aa9ef3be51645cca"],["/tags/并发编程/index.html","227897854ccdf9dd559aba903d1adcaf"],["/tags/数据库设计/index.html","a3e0db3d6782308cd14b98309a1313e8"],["/tags/数据结构/index.html","b5dbd2bd4a0c068522f77c8916ad6137"],["/tags/案例/index.html","aeb771f85a5ba57680914345a9d13c93"],["/tags/注解/index.html","a39c5e763bf53e635af2442a46692841"],["/tags/源码分析/index.html","9fed809e902b469887060b61aba06d8b"],["/tags/程序员/index.html","19bc4a685f9e231b13e6f17a5477b849"],["/tags/笔记/index.html","e746e6e37e9f220a703cdf01dec59636"],["/tags/算法/index.html","39ee789beba9f8c45f3ca33c2c47c697"],["/tags/设计模式/index.html","aa6ad6cfe3d1e84a0e3717b4e9c7a4d3"],["/tags/设计模式/page/2/index.html","224ed5aec5cbcc1e89886304b5cdd7bb"],["/tags/设计模式/page/3/index.html","5f7cc97b982528b2f7aad199ddb4f7a8"],["/tags/软技能/index.html","74c10307fcd8c579d7c4c0564e89fa24"],["/tags/软考/index.html","c101d2c41f275b6bbfd7137b49b6a9ff"],["/talk/index.html","d6410b6f2ae2478e4d03ba6cba7d35a5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
