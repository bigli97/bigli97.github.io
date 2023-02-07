/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","0968be91f873a032a46634e660ec6037"],["/about/离职申请书.html","7ac7b53e66e0e08f27d2b27e07871213"],["/archives/2020/07/index.html","7db2151eff0f3042f6be60cee4310b6f"],["/archives/2020/08/index.html","7b8e84cfc5c39acf611e3a08ab2c6dca"],["/archives/2020/08/page/2/index.html","c5b0f056988eb61b14eda0ebe242958f"],["/archives/2020/08/page/3/index.html","5e86ab93b7604b2231d77b946be5b65d"],["/archives/2020/09/index.html","5f5dfdebef8d5ccbb518edc85ee75dca"],["/archives/2020/index.html","b84cd36ec0e7e85eb48f88b2c2f7460e"],["/archives/2020/page/2/index.html","cc14416028e1b67fa2af01ee0dadc88e"],["/archives/2020/page/3/index.html","8cedcbf4909c4a06e425f9217b4e0e0f"],["/archives/2020/page/4/index.html","344eea6ce524d3b7ff7b5f10bcd3dcec"],["/archives/2021/03/index.html","9748981c7872838d8096092e162169bf"],["/archives/2021/04/index.html","a304faceef888583ae8085ba5ddf06a1"],["/archives/2021/05/index.html","84ae3f5a863e70288a98361d0e7b7113"],["/archives/2021/06/index.html","a66bd9b7a0e1ea7da637403a2a7b897f"],["/archives/2021/07/index.html","78917447f72b33f39ef15b7c919befb5"],["/archives/2021/07/page/2/index.html","613e6153029ff1845e6ee753fc9864a3"],["/archives/2021/07/page/3/index.html","4d223f8c60916b168fe61614a51aacbd"],["/archives/2021/08/index.html","fdded13f219ff6036ad50ce7b803139d"],["/archives/2021/09/index.html","e9b960634a363f3dd10e7bfe05c8c072"],["/archives/2021/11/index.html","594a94a692a0bb510535ce092b226b8e"],["/archives/2021/12/index.html","d6047a97d3968ffe8b9b488598818aac"],["/archives/2021/index.html","e0449cc5115890817866ba98e494fa88"],["/archives/2021/page/2/index.html","4bb1b80af0c6d13c76d70c00d14d3da4"],["/archives/2021/page/3/index.html","a222cdf40701b5ceb83cff2c3ebb6c22"],["/archives/2021/page/4/index.html","b3cf973011ecc6db20d259007a6f41dc"],["/archives/2021/page/5/index.html","cd95be14d6f928e7a4f153e83a895ff5"],["/archives/2022/01/index.html","c5dd65850142baff446ba7a94031fe4c"],["/archives/2022/03/index.html","64c5e3a75fdf7c5a84f8bb38bc0547d0"],["/archives/2022/08/index.html","b1f98b31752b5f97b45ce7fb30e98d64"],["/archives/2022/11/index.html","db34ed87b66b5869db8bccb859c4372f"],["/archives/2022/index.html","c76d3b8b48c222f32222ea28edc69bc9"],["/archives/index.html","e877417d9b5413b204703949ff5431fb"],["/archives/page/2/index.html","91c75675509c85765390678929e02825"],["/archives/page/3/index.html","11c0847b0f93b96cdd81aac10dec8e06"],["/archives/page/4/index.html","e9a5ec405b6404c401cee8b1e86586e1"],["/archives/page/5/index.html","d31bd7572dba585844b80530a367483e"],["/archives/page/6/index.html","797a6475a82b1f8b8b5d9fcdb32e2453"],["/archives/page/7/index.html","8921dd938a5f2962b0490e73a132f23c"],["/archives/page/8/index.html","5544e55a81651d15685b415b03d55b02"],["/archives/page/9/index.html","4312fde9f4820bb2f817996fa978bb5d"],["/bb/index.html","36561797791f894f559cd29ca1ff66b8"],["/board/index.html","66cd6bc53f6d129ab8784415336d45d6"],["/categories/Hexo/index.html","64ded1f6a56d9cd813ca9b1b15a1177f"],["/categories/IT碎片/index.html","4cf6db4524156ec896ca536c8b4aa315"],["/categories/index.html","45e34e0e22bfce4762237df098ce2dff"],["/categories/前端/index.html","5422677a95642f8987ab7a563e2ce2a2"],["/categories/大数据/index.html","92e5e5c454152d4df01a6d3ad9df0746"],["/categories/大数据/page/2/index.html","5e873a3894d6e47f492b3443ff4f601a"],["/categories/学习笔记/index.html","934c11a3f42bfdce1973dd65a34ceabf"],["/categories/工作实战/index.html","8f4d578cd08a664d0f9d61685031d7a0"],["/categories/开发手册/index.html","36a60972c178a1cd5e71daec55d3c11b"],["/categories/数据结构/index.html","9db58bd1dff21b72a0be71e02c9378eb"],["/categories/案例/index.html","0d6ab6343a944a99387d25253b9d5713"],["/categories/源码分析/index.html","55e5950d4fde2e1543c6e69264a3f3fb"],["/categories/设计模式/index.html","1afad6b410ae8e6b7eea3e34bb75bb63"],["/categories/设计模式/page/2/index.html","395c642737f4fc0b4f3f864d84a024dd"],["/categories/设计模式/page/3/index.html","37d5832f9c6bd9f147dca610ceb56c11"],["/categories/面试/index.html","cf13892369b652491ee9996670c8d2ac"],["/categories/项目/index.html","d3a1618de1bd6a73aa8802a95cd015ed"],["/categories/高级/index.html","f41d75bd1a68de152fb4a83e8e572070"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","5fa07928af1f10553b80fd7817cde4c4"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","0e3364b39005499a20c679de5dacdb35"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","69c62dfa8e4f2095a8249cb949208488"],["/page/10/index.html","e2665ad62d9708f08d3e36f5f74c9f76"],["/page/11/index.html","e5b0225335ac9913a3ab2476fa2c1b71"],["/page/2/index.html","25f83d825a6aecafc6f39e6ff266c550"],["/page/3/index.html","763c6b367de46074bb2fb6f52dd55bfe"],["/page/4/index.html","8bc71630290f6f565cecda2f3f7c6670"],["/page/5/index.html","5e04a493252915e0a7bd852d93d853fd"],["/page/6/index.html","a8069d95ffcc0e9a98014b9e547ff401"],["/page/7/index.html","c0ec9bdc57f249295ead82092ee490cc"],["/page/8/index.html","6c47edce09963e3d2a27dd7e3fd64685"],["/page/9/index.html","39ac0049fde492cf4d60075b05320a82"],["/post/121bde1d.html","76175f10f8cbf24b7e3baee591944aa8"],["/post/153083dc.html","bb573187067febe37fa5b2897fedb576"],["/post/164eee11.html","6e9acac869d3a698599d57d1b2234602"],["/post/1a7b7abf.html","a215dacfd27a5d27c7ce98a95d7caebf"],["/post/1baa3967.html","699cac718134cd6558070c2408204eaa"],["/post/1f4ac2fb.html","143dceda7f2e8721911457827b2dcf27"],["/post/22580020.html","5a70fd3201432f5e57178736e2603204"],["/post/286296.html","2423af4e400882042c994ee6ea4f1e58"],["/post/2cd418c2.html","64b3424ae606a1da74a4ddb9b03392c2"],["/post/30cf0cd2.html","a1628dbbf5251d6c3fcd397b04290a9e"],["/post/317f8360.html","52ea2ab71723c53a6c014f3efef0641b"],["/post/33cb1151.html","d1b74a2674f14d59131b6862294a97aa"],["/post/34e57ffd.html","9e3c357b9e7da574fbab8b9bd328f550"],["/post/3d20c1d7.html","180fca0efccb444482f131a16bad01d8"],["/post/3d24dcf9.html","148c507927c681568656d03166742773"],["/post/3f6c447b.html","04aa5adb4be79503715b6eaf2b94d089"],["/post/490cdff9.html","8c3e21c4c733797979d4743b8f35b9ce"],["/post/4a1111be.html","b6eec9d41a44bad863bfec8aac777b96"],["/post/4fa8e0c4.html","a22660c28daf8d6096f82a990f624dea"],["/post/524e74d7.html","f3bde6ec68716650e4b4cfd430c1d013"],["/post/539343bf.html","1349bc69332e70f1dae6e5e47be9534a"],["/post/54788f73.html","45d62b534570dd61f9076985a8b065ef"],["/post/563268dc.html","9be99355b5de4c663206c67b5eb43713"],["/post/5ac88c70.html","16ba8bf8f122daebfe4bc9bdf6ff4e73"],["/post/5bf55f4.html","1746837f24807a623c33c505ec748952"],["/post/5e87465f.html","5662e7d8987e4df0f4c7dd6b9cd73c99"],["/post/6016428b.html","7dce08b516a499574f03616c36acea7c"],["/post/6208627e.html","6a2ab130d4107597a16de478feb25cc0"],["/post/64b51ed9.html","70564667c2b9253ccb5c0ab5cbcb5463"],["/post/659da5b.html","ef6a6b2a2e7cfbbca5f745b550a202f4"],["/post/6c429b75.html","7ec508d135f89f3533ec60d9132c5ebe"],["/post/721d4875.html","40269ebd349b76348e2a272cb9c268b8"],["/post/72e3b671.html","1d65fde3301d4e9f4f3e6765bc80b688"],["/post/730d8d6c.html","c69521bfceb722fd2b510fb2825b7cff"],["/post/74fc969.html","f68a61a57bd0fa2948a3162785bd9f46"],["/post/78134e07.html","50946354fb31bf5ea058b0d6cd6ed760"],["/post/78c07335.html","2ab8d53f171e5ca75c9ef48843ec9636"],["/post/7901ad89.html","1dadb0136604dec0b558e4f14f0cbc2a"],["/post/7b216a3b.html","347cb0c80333536201431aa87f010d47"],["/post/7b510e10.html","20a767d8b9a68c2b01f75e96268ab286"],["/post/7db2942d.html","2536482ff7291d0cb9c5ae2855fec432"],["/post/7e6c6990.html","8ac8488b2ee022df74b62b0ab393e2ba"],["/post/7fa79d96.html","5c602d829da315b9fbba6ef196c0d47f"],["/post/855673ad.html","59e17750a46ddf3c261dc43e9b09800f"],["/post/892a2328.html","e95965ade601aee247e638876c9b5958"],["/post/8acb1976.html","88f2f7eb61df84e7b6a59ec613d51778"],["/post/8e4fa41e.html","9128675311afc7c07cfbcc618df4b727"],["/post/8f488ef0.html","9d791a2675ef105ceb7ede7d1f85b957"],["/post/8ff08e27.html","fa207d590848f705e3d261349b59f69d"],["/post/9055d217.html","09af5f5dafd8d097cb8cf3d718de164a"],["/post/91ad9ce3.html","1156342be835ed31b2721527688dc157"],["/post/96131cab.html","aaea9c9686e618ce77d98811b9988c31"],["/post/96b5906.html","a3883e3ddd910ba97ea4c9641c8a1873"],["/post/970fcca5.html","4f4c5c98c6df2ff585f8c29e2a419844"],["/post/9a246216.html","3670a52af4d22c64848c77f949d42ccd"],["/post/a10c77a7.html","86b9ffb1a247fb18030a8f6bdecdf8c8"],["/post/a708a60d.html","c6a7397d98205117463d15602cfc1d6e"],["/post/ad27c5a8.html","759a75986f31ad1043c6d2d7f5fe33dd"],["/post/b6c47025.html","32c6681f911eee522a399223e069124c"],["/post/bd69ba8b.html","7558d136ea0e79617fe5580383110f0d"],["/post/bf7f3b65.html","dbfa78a244c17b1c8690b3b247756931"],["/post/c3176455.html","61adb6ea07b4d182bc905f90b9b6c884"],["/post/cb80ff62.html","f6b2971a7392635e5f7f6fead2e9022e"],["/post/ce0e685a.html","40ce1f7bac82cf2017155f80c6480094"],["/post/ceb39ac4.html","f8a813ccb207da8d441e156feb83ae67"],["/post/cf413e35.html","ea25de6c08b010ba13f6a1b1958f0111"],["/post/d036071c.html","a9f18b4c1dbbab0dd7c5082ee3232334"],["/post/de3bac1b.html","26df6651f8a957634f41c2cd46c8d1aa"],["/post/df879792.html","f7f2acdb980811cf6c5c93b597bd51b9"],["/post/e008fc33.html","28bafef79ae16ec730d683de3971c3f6"],["/post/e19da94a.html","0683b9ac6764ad35d04a49c9ecf03fe8"],["/post/eb04e0a.html","7aed924ac02ac7732f05781cb194202b"],["/post/ecd67acc.html","0f3f708a9746d2cdeec2b3af5d0b607a"],["/post/ee040603.html","43af43a78d4c01ba9a891b46f793bac6"],["/post/f1601c3e.html","2ff7ee1fbafbe63a2094e42a519fec31"],["/post/f31a5a5b.html","0937498028e20e8a2dfab95dbd74a5c7"],["/post/f5c535ea.html","786cb09a01131673f49c1964e1391a80"],["/post/f7500981.html","85992e1f9c5cf73446f57a2c0333c256"],["/post/f79807ee.html","70d50c8fdb830ef144aa8d33e1c2fa23"],["/post/f7de8aa8.html","b4a69cc8564377991aee3e8af4802477"],["/post/f8239d66.html","fbeaaeb4ffe6cf8211c50c5823fd0d14"],["/post/f9f5e0c2.html","e533b2b481b2d12511907c4c7e12ae0c"],["/post/fb77661f.html","a4e363ced252fffd324cb6b12164d078"],["/post/fe1f88a1.html","11043ad715a5155e7ed2a2eb4091d53b"],["/post/fe57b0e4.html","f5145c1f7c8861c70ee9542028eff52b"],["/post/fe816c3c.html","1174150c9371f17c187bb6f07061237a"],["/sw-register.js","30c557d115a631cccdfc024f88df7257"],["/tags/Butterfly/index.html","812c0944894ca10590586a13eaf52296"],["/tags/Hexo/index.html","416e2670838278b2216ccca22948811c"],["/tags/JVM/index.html","457610dabada723bbba0772efc44bd8e"],["/tags/Linux/index.html","da35144567a7a737b450f6226593f891"],["/tags/SSH/index.html","428d86feb68484781c8fc2a68226f299"],["/tags/index.html","55b084ff77c7a1c6b735ac11afec3912"],["/tags/spring/index.html","64e2ce608a7e138f46529a8608bc031d"],["/tags/vue/index.html","633c3fca314b23ef39ca44d2b406835a"],["/tags/一问一答/index.html","7311954702139889cf4e84395c893437"],["/tags/个人见解/index.html","cbe5d64d7b82688248e06ebe24531380"],["/tags/大数据/index.html","2e166125c669c5c6d9e22c9e9dd6ba5e"],["/tags/大数据/page/2/index.html","9ff1c9c7a2a4524c82c36c906ed7387d"],["/tags/大数据/page/3/index.html","a46782c818de9d4b35b4e0c012e4df3d"],["/tags/学习笔记/index.html","608eac2a9950b481c22111901f1c8f1f"],["/tags/安装教程/index.html","35e1b079a92325248ec85da2794dacda"],["/tags/实战/index.html","c20b004681ac0c434e90b35ebca01661"],["/tags/并发编程/index.html","a54d0ff8bfbf1deea7c36c803e1af483"],["/tags/数据库设计/index.html","bd9368c5a4f8e3ceb3ea6d7e65341dce"],["/tags/数据结构/index.html","d6728948648327c723472bb04db5f08d"],["/tags/案例/index.html","3079af615217f0952367e148ff51b9e3"],["/tags/注解/index.html","81b8edf0977bad378a55747cf78f4770"],["/tags/源码分析/index.html","530d41a4f1199377c04b4254eb02fe18"],["/tags/程序员/index.html","a417b1955138ac04486897c1f7ce802c"],["/tags/笔记/index.html","a0b0b63d09c94f135460725da6efe62a"],["/tags/算法/index.html","fba1e87ca0bd06a5d626188df3ffd01f"],["/tags/设计模式/index.html","d76def4c310f4f2c10906e644196f535"],["/tags/设计模式/page/2/index.html","f07e158b71ff6eb67aea79d79eaeb571"],["/tags/设计模式/page/3/index.html","f9d776e4968724cb440816c03a9ea8f8"],["/tags/软技能/index.html","46a09bf25a4536294353e54353cae92e"],["/tags/软考/index.html","b1a50fbc06691143351df1c845c7d940"],["/talk/index.html","9ad3fa3a953b283acd906ee238e8d380"]];
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
