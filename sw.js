/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","84f29487442e42e7e92c45d22711f393"],["/about/离职申请书.html","6be40d70813569756ce6554ac8b268a8"],["/archives/2020/07/index.html","0066a535fe7d920cd1dc5fc1243ac035"],["/archives/2020/08/index.html","81834e29df7a85a8f3ea710b377a2c03"],["/archives/2020/08/page/2/index.html","1db97b4890597343946732fd9777044f"],["/archives/2020/08/page/3/index.html","769834643ab1c946dc2df9b515018e8b"],["/archives/2020/09/index.html","ba81aab730be0b2675c1c6ea26afae47"],["/archives/2020/index.html","99c1a38ef0ee485a2c08a71e61941605"],["/archives/2020/page/2/index.html","3c135b904749f1c3524f91702a9c87eb"],["/archives/2020/page/3/index.html","d92e0193b0177cc259b4d93acdc13cba"],["/archives/2020/page/4/index.html","1e55596d7428f66809d494fb8dd2f5a3"],["/archives/2021/03/index.html","8fc31a040e172186b77229a702b51c78"],["/archives/2021/04/index.html","401431815567393477a3bd07caa250ee"],["/archives/2021/05/index.html","56af6b925728b8dd607e290b9f7348fb"],["/archives/2021/06/index.html","570b49a11d38d5c6552e65178bec32f1"],["/archives/2021/07/index.html","8908e546719c458a3f57dfece69e30d4"],["/archives/2021/07/page/2/index.html","45edcfe24c90501367f1b4296ac43e3b"],["/archives/2021/07/page/3/index.html","05cc280a35afa278de5e1c9a623e947e"],["/archives/2021/08/index.html","30618938c803a16f386ea003aa9fa4d7"],["/archives/2021/09/index.html","7b347bef8187a024c4a4d8b08881ce64"],["/archives/2021/11/index.html","717215d1ecc5f41fc1e21b8997641a08"],["/archives/2021/12/index.html","58240cab4e7faa84c42d5fd1066de0ca"],["/archives/2021/index.html","44ddc7ca0f240cf9e9c7ef4661c7a225"],["/archives/2021/page/2/index.html","4e67c9621b4fe7fcab2ec142b561c95a"],["/archives/2021/page/3/index.html","46a44c169afe7dbce40bd92941faa51d"],["/archives/2021/page/4/index.html","afdb81c1b30cdfbd8fda48e24e694743"],["/archives/2021/page/5/index.html","ef02e3067366fabb5a58f58b6c94270e"],["/archives/2022/01/index.html","6ce5165de4e0d19955101a66af539f65"],["/archives/2022/03/index.html","24c202b69cce1bdaedb5086bc89fc76c"],["/archives/2022/08/index.html","6d20e5c5384a6df2ae20e0e08eccd29c"],["/archives/2022/11/index.html","d47b1eac32c19e3327601c967e69c511"],["/archives/2022/index.html","7c2518fcec2428781d0cd0d2ec491fc5"],["/archives/index.html","2fbb28db2515749c4c12b0f2ee7f3962"],["/archives/page/2/index.html","84db6946938974990f3645ec4d4761b5"],["/archives/page/3/index.html","12e9f5375796d87f89a876b70358c316"],["/archives/page/4/index.html","4514264ebf391976894c7bb1de39b9e5"],["/archives/page/5/index.html","7694a4237d86e55e06cb54c63810cf17"],["/archives/page/6/index.html","7f35657c6f97c2e1320053991ef8b93d"],["/archives/page/7/index.html","cf330d1d647702d300a48d72210a1ef4"],["/archives/page/8/index.html","b762d449c75354d89d41e19a34dd7799"],["/archives/page/9/index.html","bfd9696731e79c336188c769032a31df"],["/bb/index.html","2ba68dcac49c587080bce8318e396eb5"],["/board/index.html","13c4d6ed2668fbadf212f91c5ab1795a"],["/categories/Hexo/index.html","f213c32b83a8442b292b7918a32fbaf7"],["/categories/IT碎片/index.html","d7d5d40b9e79c0693e935f13c96e820e"],["/categories/index.html","f32f3ad40e7e337d7905295707b94839"],["/categories/前端/index.html","219d0a8836fec4b0e4667ff7ad0411fc"],["/categories/大数据/index.html","01329f6d64c1ca7db1d98b67a09bdaeb"],["/categories/大数据/page/2/index.html","8d06afa5e0274cdb3ee293211714ef0f"],["/categories/学习笔记/index.html","325e6b0f6e4f940f902ed99e9906c696"],["/categories/工作实战/index.html","dda6f1091d6774a7d2e18c836b6e38b3"],["/categories/开发手册/index.html","7908ba4e370fabcc75d38ce1c20f43fe"],["/categories/数据结构/index.html","657ecf178c71fdbf6c3bb1e58d6603b7"],["/categories/案例/index.html","85e13cbc483b3f51e4d7a555f74e7139"],["/categories/源码分析/index.html","74e6ee9a0e5333c670f793baa6e0689f"],["/categories/设计模式/index.html","af00218b224a9c87ad581c203b775575"],["/categories/设计模式/page/2/index.html","fba99eeb1a6071af32b2ce2d81cb1a2c"],["/categories/设计模式/page/3/index.html","759d5f9f0ceae9840e3e6cbbc749d667"],["/categories/面试/index.html","c4d8d83fcab8c592d4197f701d3760ed"],["/categories/项目/index.html","98bfaf849594223fa351e9599623cb76"],["/categories/高级/index.html","4b4e5ab8e7f87ff282ce84d4104c3201"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","65edb221c8c59eeb2fe3bff054244441"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","a69e2d7f8202f03d60ea12fd85d2d023"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","2c6a0cd539aaa3c9249ffd5b8189b398"],["/page/10/index.html","6482ae805a872b49d3c651bb9db97c9a"],["/page/11/index.html","92db0b5e22ca63fec3f9bd858501be41"],["/page/2/index.html","0d552f38e29ccbaafb17d324a8b854ee"],["/page/3/index.html","c0f2965b33543500d83db677d1e26bdd"],["/page/4/index.html","9dcc82e2d08fadf0849903ca6b40b0c9"],["/page/5/index.html","9fdc76c80074b704d561153c768d73ab"],["/page/6/index.html","914cd73c2ee307e16f90c5c2b0b34d2b"],["/page/7/index.html","1ac8025e3cd36f9b01db4665fb2cc3e0"],["/page/8/index.html","e926b7575c95584704462e2c40046e08"],["/page/9/index.html","e6f2f50a0b87c5aca99b5437a37eec06"],["/post/121bde1d.html","9524ec541d26d39abf437ae45622b955"],["/post/153083dc.html","831f79f571a3e76d439b7847f8fda99b"],["/post/164eee11.html","9825c3266d14adf1e84426ae717136be"],["/post/1a7b7abf.html","7738721d67b2ad585e6fa44fa11d2c5e"],["/post/1baa3967.html","12d006eb5663e956b39ef4b44f877bf8"],["/post/1f4ac2fb.html","1c147e45b5f62b42dac5cd40c45750af"],["/post/22580020.html","68fc7beedd16528312c67d4d7ed84060"],["/post/286296.html","a1eb305dfe3dc9aa35cc570e974b9c03"],["/post/2cd418c2.html","a4942284a708fafe67c3a62d6591f952"],["/post/30cf0cd2.html","71ffbac1d7ccfe44a762bc3f96842744"],["/post/317f8360.html","02c46f3751266fca6e7457cd2a838d76"],["/post/33cb1151.html","f909bc05d1b73c2e1a6dd3a4187b05a0"],["/post/34e57ffd.html","8ce57ed2096a3ad67b0cf7603fb31971"],["/post/3d20c1d7.html","626f9fdb0208bf848148ff3c094d6b0f"],["/post/3d24dcf9.html","91d804c61a0d455b29538fe01069aa7c"],["/post/3f6c447b.html","16953c94f9053f64f801a59cfd4e62c4"],["/post/490cdff9.html","74a2d98526f154be5c64f25c13f52d83"],["/post/4a1111be.html","5bd2c98ef3df34cdce263dee079f79cd"],["/post/4fa8e0c4.html","cd0710a7312279060b7d0191bb1023b8"],["/post/524e74d7.html","3f53edaa96de5796decb8f5efcf2954a"],["/post/539343bf.html","90e4130da29fbdabbf373b6447565311"],["/post/54788f73.html","a85cff3ff58d140ac9f43c507d2b95b2"],["/post/563268dc.html","a7ca445888904e910861650c9f18fa70"],["/post/5ac88c70.html","9c34646954ff1227f8c9d9bef087c82e"],["/post/5bf55f4.html","8e51caf4d25ab4cb5624beac0a696853"],["/post/5e87465f.html","20700b9a560a5b086305067d92380137"],["/post/6016428b.html","2ee9358fd6fb5273f3d9c19fd5033a89"],["/post/6208627e.html","a51f4564df6dfa2c0a729d291a1091a2"],["/post/64b51ed9.html","f119c125798eb61037d5edd292cc4526"],["/post/659da5b.html","8bcb59361d73034b05660422e3e0e4d0"],["/post/6c429b75.html","3b7657e54759327148c4f23980206cb6"],["/post/721d4875.html","f229ff3e9749015d3f19c61b710de18f"],["/post/72e3b671.html","0588b47102b0193ec7091cc3a530d374"],["/post/730d8d6c.html","e38b52faa7be9ec0cc34de74bc0dfcfa"],["/post/74fc969.html","eff8ac06860695261fa783838f75c960"],["/post/78134e07.html","ea1b6456179fea331ac07bb9f7e39649"],["/post/78c07335.html","38f7ddb25d31ab1cec50e8684a07ed96"],["/post/7901ad89.html","e0c2b36688d2c9cb02bb952c83e2418e"],["/post/7b216a3b.html","46ba77da2976478952c41c611555b823"],["/post/7b510e10.html","89ff3bbff4bf2986c5e00758a0250da3"],["/post/7db2942d.html","df487d68d0d94ad073158f09ea8d7216"],["/post/7e6c6990.html","8bd633ca01160074e04a6de8401c037a"],["/post/7fa79d96.html","c8863e4926d7d704c7f9083fe9988b1e"],["/post/855673ad.html","6022073777ae31c2d14675666de39f85"],["/post/892a2328.html","99565925ce71df6d3b70bc019bc6997a"],["/post/8acb1976.html","120eb3db424bc0f6c27bfe93ba71d161"],["/post/8e4fa41e.html","b43ab89fc89783162aa3c22b77cca5b4"],["/post/8f488ef0.html","e7b41468010a948eb0a27aa68b9b0571"],["/post/8ff08e27.html","e46151216dcec5c338068d79a5cdf6f8"],["/post/9055d217.html","91a865de01a1a0e63361efd7b6d37872"],["/post/91ad9ce3.html","1967d77822735b87caf9098cc96a8ff9"],["/post/96131cab.html","115c778fe9ec4aca698ccb5cdcead043"],["/post/96b5906.html","4e1aca03f0434ce73b2bb34bee4b077a"],["/post/970fcca5.html","2916e1ed5306233e0b31c211b61bf2f4"],["/post/9a246216.html","deaaef66d2267f849792630276ff4f62"],["/post/a10c77a7.html","3808f0691908b7d44b018a85033b9c92"],["/post/a708a60d.html","f036511307a42151d1db925cd9a8e7a5"],["/post/ad27c5a8.html","69a698367556acb9ef8dd2de49bfd094"],["/post/b6c47025.html","67e7565f8b1fb192b4fea9363ca8f99e"],["/post/bd69ba8b.html","a586eacdfc67e664535f79d5dcc0c50e"],["/post/bf7f3b65.html","0b9ff580abb3ec360ea9db18b7a3b308"],["/post/c3176455.html","6e5f5add453aefe011767da0377d2f3f"],["/post/cb80ff62.html","07a29c316c3a6305f04143c59fdcde15"],["/post/ce0e685a.html","c6342e8eab0337e8249f09664eb8a1ad"],["/post/ceb39ac4.html","2e5a6db25c7626c93c60a27a4f1bb98c"],["/post/cf413e35.html","d251d220face6f7476f212add5b1b32e"],["/post/d036071c.html","28c1368389bf2b1961014c5eae7fbe85"],["/post/de3bac1b.html","13e995e448eeb6b8d5d026cb55bd3626"],["/post/df879792.html","02e42810808bcc8c8d0058211a1793c9"],["/post/e008fc33.html","d149fd105e0c9b1fbc24ba7920232cae"],["/post/e19da94a.html","4c8eea955c73dc1c56babdf7f4d4627f"],["/post/eb04e0a.html","f54a6ed9acae2803544e84b1dde5a81a"],["/post/ecd67acc.html","ffcc95ea99b9bd1743a3d20dcf234d2a"],["/post/ee040603.html","cd789bc2ee865e79ccf088306ad776f6"],["/post/f1601c3e.html","d23d1bb7295d0660abd237ba223e445d"],["/post/f31a5a5b.html","068591d70bc328c0a4fd9378af65437e"],["/post/f5c535ea.html","d1d34eafa6474d90974b7d97c5e15613"],["/post/f7500981.html","4df0b8eb8432457cae6ee2f270d999fb"],["/post/f79807ee.html","506a0ed93e81d91b67f9e1a794d06626"],["/post/f7de8aa8.html","675de094f60081392e02b7893d3d92de"],["/post/f8239d66.html","98b114250f5c83a2580c22835f4451d4"],["/post/f9f5e0c2.html","2410fa4d4d4081061c6e187d41a704c5"],["/post/fb77661f.html","b8ac01002c967152dee6d6a5e5e68a37"],["/post/fe1f88a1.html","bcf282a86f1ccf42e59ca867e6d7695a"],["/post/fe57b0e4.html","4eb1e3043b8afa4b4d7697cc98fed743"],["/post/fe816c3c.html","ac98f30dc3d33e54f1ca60fa5caaafaf"],["/sw-register.js","5c4307600480ea71d7bd5a7196c2f835"],["/tags/Butterfly/index.html","c25d0184e21fe6646d70e42746137945"],["/tags/Hexo/index.html","2a06aad32f66fb302b4a1ff085a8cbd1"],["/tags/JVM/index.html","454e3670420a32dfa663c13191577300"],["/tags/Linux/index.html","7e792c86740c59cb7807be536428252b"],["/tags/SSH/index.html","f2dafadb49e7db6720530d6fc145f118"],["/tags/index.html","e93573558e36d2dc1247bf26add668e5"],["/tags/spring/index.html","055c1956abc5c7f02d18229762e9249a"],["/tags/vue/index.html","7c090d8362d2c931d38bf5b4e823795b"],["/tags/一问一答/index.html","933574dbbecc1dd7f7d728c0e21b01b8"],["/tags/个人见解/index.html","60d3986ff5d5a9b046a74b7dd1453541"],["/tags/大数据/index.html","223640ef350e1c3792261fb1d62a7341"],["/tags/大数据/page/2/index.html","a5b355461b8f5b07af802b6f64d60a21"],["/tags/大数据/page/3/index.html","5b1fa057b7775545d943a5f8d05218b5"],["/tags/学习笔记/index.html","ffe92a7efe5407c04b9698588b28258c"],["/tags/安装教程/index.html","8655e68eeb12101a334f9f47aa198ccd"],["/tags/实战/index.html","7a96debbc353ff3cd13f406a8894f862"],["/tags/并发编程/index.html","d67f8d7a8268f14979ab99999fa37ca3"],["/tags/数据库设计/index.html","1c782f531a7be2460890901bba671063"],["/tags/数据结构/index.html","ee67c9ac0af56c9895558088377066ec"],["/tags/案例/index.html","d4e94e2ec5a2149de961f1ba2bdf6531"],["/tags/注解/index.html","f72c37fa9543c674c7acb075abed885f"],["/tags/源码分析/index.html","e92898c7505616d5fceecf02bce4cda9"],["/tags/程序员/index.html","72b2534d819c7d257e825e811cdd0638"],["/tags/笔记/index.html","84f596d1ba29ea5d955bd3b2f4262f6f"],["/tags/算法/index.html","e90a43e035985084a37fdf290aef7884"],["/tags/设计模式/index.html","111effac1e16e02ef179a9dc67f7e451"],["/tags/设计模式/page/2/index.html","ae634900d65be38f6053710e02f29c6a"],["/tags/设计模式/page/3/index.html","713e40f2055a7c833cdab6a9dca05294"],["/tags/软技能/index.html","66345ac3270e1559e4d5d81fa49b012e"],["/tags/软考/index.html","45b2c7bfead44071bcbaa58f934f171d"],["/talk/index.html","c4fac3d1abda197e40b8c35f7c3e056f"]];
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
