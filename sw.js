/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","688d4221f8190fe63692cc6506942958"],["/about/index.html","c05ce8408f0d7ff34a0ab0a5daabbf0d"],["/about/离职申请书.html","b56bf9fa004bdeee70914afdc8403b9c"],["/archives/2020/07/index.html","8c98775fee43bf0fd19cc703876a49dc"],["/archives/2020/08/index.html","531eea48e7f2829b61e33f4b30f18f3c"],["/archives/2020/08/page/2/index.html","8b3d884a77327a49ccc9d7da29f0edaa"],["/archives/2020/08/page/3/index.html","b26a0ebe495774981c47cb061f72a126"],["/archives/2020/09/index.html","0122e05cb0bb9f3f4a4165e21383375a"],["/archives/2020/index.html","73914e82c7b556676dcd31139656fc8f"],["/archives/2020/page/2/index.html","0d9adfee47f4e030b80d7913295f0b83"],["/archives/2020/page/3/index.html","8d9dae78fb9434b5b4d5c89bf2b1a27b"],["/archives/2020/page/4/index.html","b49305f91de4d6bbf5a99bc4f6710f22"],["/archives/2021/03/index.html","cbead72ab38a1f8c188308958c202e8b"],["/archives/2021/04/index.html","2bb10a8858132185cc52531fe5af360b"],["/archives/2021/05/index.html","954e7680f8e56459821c1ee42b0c59e0"],["/archives/2021/06/index.html","284f255e97a4798f683095e49dc7b004"],["/archives/2021/07/index.html","8db88f5b01997160597234541ce212f0"],["/archives/2021/07/page/2/index.html","0a9a293a79101e15ee7491eb01e90f97"],["/archives/2021/07/page/3/index.html","9342f242288dbfc18804a6cd030849dc"],["/archives/2021/08/index.html","0e2d9c45a70bc201f029e145461f9ea7"],["/archives/2021/09/index.html","559729e913a05b5f975cfa7cbb7cd26c"],["/archives/2021/11/index.html","87faa5f17792709063361576393e0727"],["/archives/2021/12/index.html","f86fe24a355666487937e17245124c69"],["/archives/2021/index.html","acf1cfc9a19cb0f8b96db6c1632ec16b"],["/archives/2021/page/2/index.html","d25eb6787d5b064d3600bb08788b5bec"],["/archives/2021/page/3/index.html","8476f4cfd2241cf56a2ce5adafede3ac"],["/archives/2021/page/4/index.html","b664c6e9bace1b58a8590ab28333de90"],["/archives/2021/page/5/index.html","436a93cdd193278fab8eb7e986f4756a"],["/archives/2022/01/index.html","abf5f23da67438f55f6d5b184f8a7cd3"],["/archives/2022/03/index.html","63d0b6ad43edac499a7588d7488346e4"],["/archives/2022/08/index.html","dfd820d4702a4e9dec8fb5c1544f8d11"],["/archives/2022/11/index.html","1ba6efb057eee5a1a265d400d2f1de9b"],["/archives/2022/index.html","4a7c575bc8e6b1c179a979a24a213657"],["/archives/2023/02/index.html","97d7f825ccd36aab3a625baee5302e56"],["/archives/2023/index.html","b7c234031f92fed239e4e142ffc84d26"],["/archives/index.html","7beac835902846e0d2c16a1e04f889d7"],["/archives/page/2/index.html","ea4b4c78c365460736b72cf5c7d3ab0b"],["/archives/page/3/index.html","de552d8a666103e03f3a631f73e4e36b"],["/archives/page/4/index.html","3e031461b68b04d849cad3b30d981f1d"],["/archives/page/5/index.html","5eebde00213fd8872c64b110ba4b2e84"],["/archives/page/6/index.html","4b0ee7aeae635001324e623c4c59d1fd"],["/archives/page/7/index.html","438c08c6bfd6d119799864462f5d5e5c"],["/archives/page/8/index.html","25e2660210c15f8024809c55aa5a524d"],["/archives/page/9/index.html","8164b80e1c5fc1efdd54d3d0eb393d7e"],["/bb/index.html","732d124d818e8958f8d84cf32ac927e5"],["/board/index.html","a90ba251602d222420e9d57adf19f62d"],["/categories/Hexo/index.html","4becfa8125cd321a208b7e58f046fd98"],["/categories/IT碎片/index.html","9d404d0ba8608caddadba479266a5001"],["/categories/index.html","289caf459b7e2cbde4c586727a6de8c9"],["/categories/前端/index.html","006b0ecb4735ce593576046200d8858e"],["/categories/大数据/index.html","f8c1957989e0270938c96911bae9ad73"],["/categories/大数据/page/2/index.html","c2674614570f6398beb69e3d180567f5"],["/categories/学习笔记/index.html","2b98ece3b4af678c495066f9e4a5e4ff"],["/categories/工作实战/index.html","20688df697298b823dc0daef2bc2ef76"],["/categories/开发手册/index.html","7cdf3e0414a4042e0d8e37311699eeb9"],["/categories/数据结构/index.html","70edc05d8f81cb0cc866f0cd10cf24bc"],["/categories/案例/index.html","7f27246d789c485b6e216668a11d9408"],["/categories/源码分析/index.html","9ce6dfa84223a54a25d6bed0195c297e"],["/categories/设计模式/index.html","40ee2e562acc12a11f1ac8ea785de68a"],["/categories/设计模式/page/2/index.html","4c037d4960e5ef146cb5767b836ca121"],["/categories/设计模式/page/3/index.html","888e55a3c4b88529ef6ed484d66fc5ab"],["/categories/面试/index.html","8ebb62405661a8848eac2cd9aba063dd"],["/categories/项目/index.html","fda6c746313510e7f729dbac30f35df0"],["/categories/高级/index.html","6a8f14b009b1e09d735197754167b196"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","9aabbfa377ec20d07002065d89c8e39e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","1378259d2b72bf7372cff6ee72faf23e"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","e9c36198e16a00ea278df6214283dffc"],["/page/10/index.html","e698e009c7ab9fe305eef974c225b1e6"],["/page/11/index.html","49edcb6f03ec4b6e02e88ec2b4bed3ac"],["/page/2/index.html","207355b819c64c57ab586d5294948309"],["/page/3/index.html","aa17de157f0d69cc1e39035193d671a1"],["/page/4/index.html","a737a97b82b30e620651526058730069"],["/page/5/index.html","7be69686d8eb5a700243708afbdc1d2b"],["/page/6/index.html","0bca1665d21195e47fd6e3d76ac562aa"],["/page/7/index.html","fef206ff5c9788dba1a3a6e76dc4b594"],["/page/8/index.html","e2a2236750e4913354aad931dd0bfb73"],["/page/9/index.html","c876fbd1a47b56b5084e509e30b7d03d"],["/post/121bde1d.html","05c101cdb41460f66ec944a1ba854fbf"],["/post/153083dc.html","ca4fc0e6f941f1634db61d5d60a74852"],["/post/164eee11.html","be6351c834a0bf2829d633a35e1cfb3c"],["/post/1a7b7abf.html","d8443158dc7a9009a21453c5a4dbdfe8"],["/post/1baa3967.html","b7aa2e0f39e3e9bda2eefe41dc5701ae"],["/post/1f4ac2fb.html","9174c326140c7aaa88282d3df6d33834"],["/post/22580020.html","1db85f424afcdcd26d521c8b7ef3606b"],["/post/286296.html","86127b3bb5900049ddbd238d2f52a6f3"],["/post/2cd418c2.html","c6158a0d2590bb66ee633dcd97425db6"],["/post/30cf0cd2.html","61dd1363d0b129e10dc6afe14bd8f43b"],["/post/317f8360.html","4b4eeaaf5b6a886eb899b47b98b8e625"],["/post/33cb1151.html","90e08d1b207b82508e9d09621a2e1ce1"],["/post/34e57ffd.html","960758bea819b59eaabb9a908cd56d57"],["/post/3d20c1d7.html","0fd4346d84056d979bdc2aea455296e5"],["/post/3d24dcf9.html","186cb223fb16453e0c5d7a6b3153b7fe"],["/post/3f6c447b.html","9ba7ebb4385826c1fa8e0c0006d2ad91"],["/post/490cdff9.html","9b68e7e45c5962855c3111adcfba01ac"],["/post/4a1111be.html","904f9c5630228bd8d5108eaa6f9fc94f"],["/post/4fa8e0c4.html","7a5311d299c3051a0fe99d171b2365c1"],["/post/524e74d7.html","cf9a0cded39f77267293a01f6b687378"],["/post/539343bf.html","2d938179f3f31eca1cc91bbbeec94d24"],["/post/54788f73.html","60be2b43ca8c7a87156512d7c1c0fa3c"],["/post/563268dc.html","41e55dcb6d0a8588b98abda5b71e2587"],["/post/5ac88c70.html","627be3e3a248864ba4925386fbf4d1dd"],["/post/5bf55f4.html","29c335390865db36f8c1c437094de76f"],["/post/5e87465f.html","052e461e5ffecfa5d08b42f6d4ad3afa"],["/post/6016428b.html","f363d7481265780036804bd367e6740f"],["/post/6208627e.html","696df8874eafe2bf05b79f2783b4d320"],["/post/64b51ed9.html","528264ced67ab869b0eca436b37a63cb"],["/post/659da5b.html","2bdadd34dcbcc2e1351d2422d5f3f770"],["/post/6c429b75.html","f39530c6eb0bcddd925e87ad9ea0f922"],["/post/721d4875.html","7c95295320d1e94d8d6e03c3b425f7eb"],["/post/72e3b671.html","e5c18572b3671e26174e7a8ecadde61d"],["/post/730d8d6c.html","0bd07e1f3795d7221b4816bb0ab85772"],["/post/74fc969.html","da6a83e481915e2b7968f4b807440622"],["/post/78134e07.html","7d5a295063b74b8eb24a2e4aed8969f2"],["/post/78c07335.html","4a0c4f9b24e032508856b8266033f677"],["/post/7901ad89.html","e6f0b9c6633cbaaedbdd01ba89fe65ce"],["/post/7b216a3b.html","033a8dd7346ddd061bf75c5313c3e4ab"],["/post/7b510e10.html","8802664a2f5d8ead9ff9603952d016b2"],["/post/7db2942d.html","6920bee2d5a9b215e6f3573fd48679a9"],["/post/7e6c6990.html","d350705e4a2031df6ef6335779a66d96"],["/post/7fa79d96.html","02cffa01d821d8270ca774dd049e5154"],["/post/855673ad.html","b3e63ca6c98f69fcf463a370c1e54e51"],["/post/892a2328.html","466d90cfbe6922703ff1cfdb385db64f"],["/post/8acb1976.html","6e8a4c89c4146f8128ffb14423fd5f4a"],["/post/8e4fa41e.html","e90525383711fdd668c59a77d4cf3d56"],["/post/8f488ef0.html","89fe20d3f7f76d0c9f7aeafd94c3fcc1"],["/post/8ff08e27.html","806c8a283c0b39782a23c2b2910e1e21"],["/post/9055d217.html","7f5315ef87beec4771f88ada3cda283c"],["/post/91ad9ce3.html","b79123860454b016a6dc298b0e6b3f49"],["/post/96131cab.html","46ff42d0780cf1af14c355462d844c8a"],["/post/96b5906.html","ac6c47a493289338a7399dfbe0d53449"],["/post/970fcca5.html","430514c89e46908d1ad80164da4d989e"],["/post/9a246216.html","22f7ac633040702b5f4f8f28420cbce9"],["/post/a10c77a7.html","ab493e835eb83faca034ad735a62078e"],["/post/a708a60d.html","206aba3a51016788522d78d4e4895ab0"],["/post/ad27c5a8.html","6b09d046a29381e578d60123d987fc69"],["/post/b6c47025.html","88c6a24e6f4f2066000f1a990d0f8c1a"],["/post/bd69ba8b.html","2d6ac9cbaeaaebe52c02bb7b9aecef01"],["/post/bf7f3b65.html","2fac7059814da57053129d6bd8fc9e43"],["/post/c3176455.html","39f1da7f621b3e110d2bf8bb2766bcb6"],["/post/cb80ff62.html","5c5afc3f624e43bd84ceb2fc9cc31b2f"],["/post/ce0e685a.html","1fd952dda24259f70aef11e8854b2174"],["/post/ceb39ac4.html","2f2cf7d94eb0319b6ac253ee97f209c7"],["/post/cf413e35.html","76ecdec4e88fe9115bc3af77cbc06415"],["/post/d036071c.html","ef3034b6a5694208d11074c5a4f3d1f4"],["/post/d39191a5.html","a754cd499a843c524cdbebfba3c264c3"],["/post/de3bac1b.html","3ac9435d6e2ba451ba0ea1a8cbee35db"],["/post/df879792.html","f649e68aff6b7c7745717b4c6a79dc31"],["/post/e008fc33.html","4eca1666a0b66c162cec46ff85945d06"],["/post/e19da94a.html","7a34371fbaaf566912aeac0874e4da23"],["/post/eb04e0a.html","12f4fa16422d6cabe4d60ea1976f0ed1"],["/post/ecd67acc.html","c1c1271d81a51fc5e99d46ccaddcf410"],["/post/ee040603.html","406a3ce7a1ddcae11dfee1e17092dcb0"],["/post/f1601c3e.html","87313d4190da83f7460ea47210f70c5b"],["/post/f31a5a5b.html","a0ef0287e7780f8055499bacc244daf1"],["/post/f5c535ea.html","c1bd847d444577f99d90ff8c85e9c4c8"],["/post/f7500981.html","e85b91f1d7a95d257919016dc315eb20"],["/post/f79807ee.html","f822d3c06d2e6dfa9b56a92c64f474cf"],["/post/f7de8aa8.html","1924d2de8c113ac0cb4cb247113f55ab"],["/post/f8239d66.html","31d35819537f505ecb40e6ee106e2444"],["/post/f9f5e0c2.html","4b79fa784c8c7e5df9d8a6d12a33a167"],["/post/fa143992.html","692ca9a171ebcf4932e9547a06c9fa58"],["/post/fb77661f.html","731c1792d4058b34caa208cffffa2e91"],["/post/fe1f88a1.html","1b774520208a62ef8d47882f5ea11608"],["/post/fe57b0e4.html","9d4bb2a2b51d9ef395eb8076547705cd"],["/post/fe816c3c.html","adb14bc774f976328e1e33861dd0dc4a"],["/sw-register.js","57d56c1267111ef2dd53278bb264b06e"],["/tags/Butterfly/index.html","6676f8174602db7f02fc0e11c0a43f8f"],["/tags/Hexo/index.html","b957467194cedd61426695a833d0c1ff"],["/tags/JVM/index.html","5eed4b891c8a7944c7a587874c1f92ec"],["/tags/Linux/index.html","9b449ce4d2fb211d09214ceab620d98e"],["/tags/SSH/index.html","ebe8b751b193751621f1ea999a93f7d4"],["/tags/index.html","1d4592f42197e202f9014072c9747a39"],["/tags/spring/index.html","14d5da687c880137ef4dede7e18c55c1"],["/tags/vue/index.html","47b6e36d0e29fb4660a784e69d44707c"],["/tags/一问一答/index.html","8a98a46c2b24facfd24cf9840c78efc2"],["/tags/个人见解/index.html","51e176998803a5b49fca738ebd02fe38"],["/tags/大数据/index.html","6e3e9f56be10116ca029714fa17ab56f"],["/tags/大数据/page/2/index.html","373b891600a0a658e37afaf508b6cbe3"],["/tags/大数据/page/3/index.html","fc5c5c14073291c049ab82e687cbff57"],["/tags/学习笔记/index.html","7a032df9ed46e574d2ca6412d6f853e6"],["/tags/安装教程/index.html","947818e942ee4810e92c2801b55d6b42"],["/tags/实战/index.html","b4f39702a0d221ffb3c28bf82248eb32"],["/tags/并发编程/index.html","99a4d4ea8391a84befd2af13ff087b56"],["/tags/数据库设计/index.html","51707eadb2aa81733b3af50ce13329b5"],["/tags/数据结构/index.html","0b4abc22acb289e0ff05956a595ca41c"],["/tags/案例/index.html","dca9201c72a87a670567261dece50be7"],["/tags/注解/index.html","32ecd5fa852d82a596da5af2efc116b3"],["/tags/源码分析/index.html","f062a4c77f32873c591aad6a75808e06"],["/tags/程序员/index.html","2b5879898a7a61fff174161b2c02032b"],["/tags/笔记/index.html","24727584ef013b3c96d5a8400f5eed10"],["/tags/算法/index.html","49cada543a5e0ed76eb9b342d13412b9"],["/tags/设计模式/index.html","62d6acf6ad9e6754f449a6f996026b07"],["/tags/设计模式/page/2/index.html","4529e31e6d4fc37949ec81753be435a6"],["/tags/设计模式/page/3/index.html","c538df3d301c57f2dcbd069afc7dc7f7"],["/tags/软技能/index.html","24b2f63308bae78ae7fd6e5875c0a705"],["/tags/软考/index.html","e9b0cff1cd0e33e65948509d2682511b"],["/talk/index.html","835150cc3838cb5ea153300bde98d0e1"]];
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
