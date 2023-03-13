/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","58e69964e99dbc68f0a0edc45dd43cff"],["/about/离职申请书.html","db699a411afa6632386befed6c1297fd"],["/archives/2020/07/index.html","aa476b65c61753692edebefd11fffe87"],["/archives/2020/08/index.html","607022cc16db960beb89ffd38a84079b"],["/archives/2020/08/page/2/index.html","99d1c65b27452f9a2dbe0aabbea0d724"],["/archives/2020/08/page/3/index.html","af7d772ae0f975d7bb4ecb76aa363bd9"],["/archives/2020/09/index.html","250e60c6666e1abced3598d2b69be56b"],["/archives/2020/index.html","aa6299aaa1accc3988127552bdc8cafa"],["/archives/2020/page/2/index.html","13b76f97f6bfc511c8623ac545eb404e"],["/archives/2020/page/3/index.html","a86277e83c9fed79503dc92905a12fe4"],["/archives/2020/page/4/index.html","f59fa09efe8ee08a4c71088be3355933"],["/archives/2021/03/index.html","6426b45e87cb0484ae51a920e3855741"],["/archives/2021/04/index.html","b7a8da704aacb946bc4c3923b1baefa8"],["/archives/2021/05/index.html","684123f3319d8fa76b387efc3a8d66a0"],["/archives/2021/06/index.html","169953052d41ac05c2d441b68e714336"],["/archives/2021/07/index.html","1f682023c30b43ff15edce7abc9c6ff5"],["/archives/2021/07/page/2/index.html","aae0a580aac48d1985d4603fd197607a"],["/archives/2021/07/page/3/index.html","48bd894ead9cab717a2b7c03d30e12a9"],["/archives/2021/08/index.html","28d76fbbf824477c4d6186425d0754dd"],["/archives/2021/09/index.html","b441a625adea4e9dc0c981ba784be8a6"],["/archives/2021/11/index.html","d06c31fbf202f386bf681df9162fa4a2"],["/archives/2021/12/index.html","57c8419cc7245d704902f28c0c799539"],["/archives/2021/index.html","5ccf8e0c30667fa12e17a75b78b3d267"],["/archives/2021/page/2/index.html","84c6c26112d178432bcb717b4791148c"],["/archives/2021/page/3/index.html","fbfdae5d3f1ef82c519edade925f3b4e"],["/archives/2021/page/4/index.html","62810072d4a377b3f3e55b24d0647c5f"],["/archives/2021/page/5/index.html","7aa5a227ce810e7790524f752f1a1b1c"],["/archives/2022/01/index.html","c43ed9c21a90e01305e4342033202a45"],["/archives/2022/03/index.html","d0042068c74f9aa251e4e25d88b3429e"],["/archives/2022/08/index.html","df6da87a0a58df2aa59129777d1434db"],["/archives/2022/11/index.html","f408878e37f190b7fcb8cc1e40a32679"],["/archives/2022/index.html","066eaab52766c21acfd224b1f2ae383a"],["/archives/2023/02/index.html","0425f1b4a366b96e2d8ea4a03345c365"],["/archives/2023/index.html","f73bb1fed30925183bff9e4a24558c32"],["/archives/index.html","2c984f5e5b9febc3717417add0732409"],["/archives/page/2/index.html","90c06174cc8e3679ccf83f2c98d0cc4f"],["/archives/page/3/index.html","1796088cc6037eee4c9203042ca6f789"],["/archives/page/4/index.html","5480a94088f76ebdde54317b199c4045"],["/archives/page/5/index.html","ba4262823e54bf6b63d36562b1a0c369"],["/archives/page/6/index.html","9b845b086fa613552a8fb3345ce195c0"],["/archives/page/7/index.html","1c931c92e854f0e1131e69e0a5561bf5"],["/archives/page/8/index.html","b6f021397d8cdffaba40882ff248dc90"],["/archives/page/9/index.html","bac8eb87804ebb9f76550aebc6f0b8e4"],["/bb/index.html","07f69463f9817638e6bb942b661a777b"],["/board/index.html","3912b292239a2b81303436761e7b3939"],["/categories/Hexo/index.html","9f1a3536883687defdba186d3c47c36c"],["/categories/IT碎片/index.html","05baeb0095a28ea0b72e9bb46b1a929d"],["/categories/index.html","d7e94db7abc6993c7b6f273d13e9cdc3"],["/categories/前端/index.html","142c766a3ebb69fcfb70c9fbc5410d60"],["/categories/大数据/index.html","ecf9e8956353b49e63fe5d5239654faa"],["/categories/大数据/page/2/index.html","21e7db1c17084b239e525c05d404cb85"],["/categories/学习笔记/index.html","59bd428914a08ee6aa626f39a5f38730"],["/categories/工作实战/index.html","ef5859fcbe2c38758b36cf93815162e7"],["/categories/开发手册/index.html","8e377dcfe8442f483eee9df8b2dd5de9"],["/categories/数据结构/index.html","595d2b0888b40a6d8e678a3a8cd5a366"],["/categories/案例/index.html","812bf2b76f3b4888cfcea18834a728f3"],["/categories/源码分析/index.html","e9fd24740ac3c810d3199417c668ba76"],["/categories/设计模式/index.html","f19aad5651937dc288c946b668861c7f"],["/categories/设计模式/page/2/index.html","a10f30bf2253e58c784cc58a288bd69d"],["/categories/设计模式/page/3/index.html","121fac9884addebf74e797064be04c42"],["/categories/面试/index.html","e2c8f63eabcec4c7d9144e9090235cd8"],["/categories/项目/index.html","3482e939eec51d87d3b3bbb27b2646c9"],["/categories/高级/index.html","a1ff1f0226ac5eb4ac31c6d4eb27b4ce"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","649defdd9d313a918119accc8bcba79a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","9f5cbb6f4013f010d48ca7cfe08af8d4"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","2ba61014c77da02bbb5725ba7a98ba5a"],["/page/10/index.html","1edd90931713bc46ec40b767b6b7827c"],["/page/11/index.html","7f3033284d3cf31e32560003e494b13f"],["/page/2/index.html","5aafa70847322248dc2f33490dacb68b"],["/page/3/index.html","435c1c7eb3c2a9aa233db34673908fa0"],["/page/4/index.html","4ed8144f949ae96fd60a2ba97ec5c88e"],["/page/5/index.html","a8da60d3426dee4c9922bd57a3d88171"],["/page/6/index.html","c2320bc035ad7a899f45d8cfaac6b488"],["/page/7/index.html","dddfac44907c981ca3fa12af3292bf6d"],["/page/8/index.html","3b27374b971a8e42bb985bf8354922b3"],["/page/9/index.html","7326eb0ddc0c936e21e0310a771c1f65"],["/post/121bde1d.html","19adf1219ff6b54de8570fa30a0063fc"],["/post/153083dc.html","c787a9dc8493f6df2a46528817fb47db"],["/post/164eee11.html","bb9a526977f6f95e2a9559e6409194ff"],["/post/1a7b7abf.html","6cbfb798cadd52fdd891d264f05b0bca"],["/post/1baa3967.html","f400fff49ef001154b0e2dc77ccedb19"],["/post/1f4ac2fb.html","6eb14539d9be1c11aa9a7404d0bb68f1"],["/post/22580020.html","abc139f44e3f22c04cb6f97a80a92e48"],["/post/286296.html","f52f8bf7b42b691dced49deda099b5b5"],["/post/2cd418c2.html","5d9cb07f6723283f57d043d83f87dfd7"],["/post/30cf0cd2.html","b4e80607635da0027ae2f8ecaf3cd068"],["/post/317f8360.html","d762253cb6d0ea2ebdf1c64b0fc5cab2"],["/post/33cb1151.html","8b3c216f015cb76e0d658660536095c5"],["/post/34e57ffd.html","91e69e5d7d5785ea8d70ca1979f4d92c"],["/post/3d20c1d7.html","482d618372ae870599eec5d6bf77ff08"],["/post/3d24dcf9.html","b8544826f3fa7079a84dec0ead5355b1"],["/post/3f6c447b.html","db07e78109664112a43e1779eecc19c8"],["/post/490cdff9.html","13fb69a1151368a74c2f5f7a06e16d7f"],["/post/4a1111be.html","06dbb73d8704d52fb43188c3b572d976"],["/post/4fa8e0c4.html","28caf12d775b8272a4be1694e6bad8af"],["/post/524e74d7.html","3787622c4460898601b50cc9cd3b834f"],["/post/539343bf.html","7863822f5010e785429e0f73441bfe2b"],["/post/54788f73.html","2999ccb95d46fe637661b48f4f10e5ed"],["/post/563268dc.html","980f460e7b7f34a2bbede5612e953499"],["/post/5ac88c70.html","a664425882d01c44811067de1743b7fc"],["/post/5bf55f4.html","806b0ab169780271b6108d707b08e8c3"],["/post/5e87465f.html","edfb370d51888a5930c470fbca074ac9"],["/post/6016428b.html","969fe700f06dda0f1c00457245709f00"],["/post/6208627e.html","dc93e15ef266eb602538810bf0498933"],["/post/64b51ed9.html","838f549d5c777b50cd67c2adc66e8232"],["/post/659da5b.html","ff1241efc09aa5eb06f1876dc0a7f9fc"],["/post/6c429b75.html","ca4231b12d6bd29171d8c0bdab16a442"],["/post/721d4875.html","277e67282aa1f1d60561f74625e94a74"],["/post/72e3b671.html","6df852effe5f21f18e86f5496175ffa0"],["/post/730d8d6c.html","b96d530cd89e8d7def50bf8c6e58f1f1"],["/post/74fc969.html","d427f2df1e46e05a9467f1083ec20097"],["/post/78134e07.html","5f585e401200f9d76aa187e8a602e602"],["/post/78c07335.html","fc58c4110f39e5de383355d256e127c0"],["/post/7901ad89.html","a18aeea6f3b9bf2661e31cea38975fac"],["/post/7b216a3b.html","9215c911ba8d7bea20a45f56ebf5f7ab"],["/post/7b510e10.html","c04c09edf3ade0f125dc826c84bb465c"],["/post/7db2942d.html","11e2a60d389aefe02f3bf504b48bb031"],["/post/7e6c6990.html","6bed9528c144fcb196e085c7c70903ff"],["/post/7fa79d96.html","012c378ae8298f233c49277f3f14442b"],["/post/855673ad.html","d8f08dd9d5af989114b363dc97e0462e"],["/post/892a2328.html","475f20b6222cd64b22d43eee897b7f60"],["/post/8acb1976.html","c66586194eff25bc9c247f10ed2504d6"],["/post/8e4fa41e.html","bbbb137acace7a93b1fd980bf0dbf823"],["/post/8f488ef0.html","9d36d62e6145449b16132bcba2e580b8"],["/post/8ff08e27.html","88055943cadc8247faeac314c3914215"],["/post/9055d217.html","6d6c7ac04a27d6f87be0f1b62dd1b4d3"],["/post/91ad9ce3.html","b0865adcce4ecbace41a8ba72366e8dc"],["/post/96131cab.html","125ad3610469d35265b527a9a6dd7128"],["/post/96b5906.html","60082adc6379a39667b0af6917dcbd42"],["/post/970fcca5.html","91118ff78d498cb35b687cc0ec7de7e0"],["/post/9a246216.html","b4f1044d50e07ee921b935a4175461e3"],["/post/a10c77a7.html","1d92d906da6655eef66b6a2696251639"],["/post/a708a60d.html","126710bac55e9c6abca984aa18edb2ed"],["/post/ad27c5a8.html","8d58944a0de3056a08cd26c64148a79a"],["/post/b6c47025.html","4b66b4504d0a330868daf8e248cf3ffd"],["/post/bd69ba8b.html","e0a7771f5a77c4475970fb2785d962ae"],["/post/bf7f3b65.html","6bc754c837a59e5ae984770715dc8d9c"],["/post/c3176455.html","cc581943fa3be5015f90244728617dff"],["/post/cb80ff62.html","25adc43bb3f406b4e6a94c5405ad1c80"],["/post/ce0e685a.html","f7f69bb41642ce9694a8df49a2e4f0da"],["/post/ceb39ac4.html","8b298a583e2fbf4a116a856bf36f246d"],["/post/cf413e35.html","212d3816afaff7c24461985391ac30c0"],["/post/d036071c.html","f2ddc27cbe6afe31a5c4525b65b6e8b7"],["/post/d39191a5.html","c75be1d55bf0f022802b8c2b497dc236"],["/post/de3bac1b.html","e75982f4387c5b13c0c182fb4ecaf1d2"],["/post/df879792.html","337b1c26f547441eadbdfb04cc40ae77"],["/post/e008fc33.html","5cc4a3ba5499c90f736c1ab312047cdd"],["/post/e19da94a.html","bc277016795fbb411a6dfdd6eb276ffc"],["/post/eb04e0a.html","d289e4415cf9f2610003315091ab9df1"],["/post/ecd67acc.html","bb66dc436179eae8162168d3ac934a19"],["/post/ee040603.html","510282b2df2bc56404851a363f05f6c0"],["/post/f1601c3e.html","80ca64b668afe872ae9c6592f7f01b57"],["/post/f31a5a5b.html","d52c2c3e37f6040a796c571ed10b66ea"],["/post/f5c535ea.html","2075c09a9b4c5ff5ce48b4eaca6753b9"],["/post/f7500981.html","eb1e9b36dd45c0c63ae809b908d0d427"],["/post/f79807ee.html","c947182cb79fc1b9ff9e3a0be28b62fe"],["/post/f7de8aa8.html","ec562219fc87f7f761aa8f64cdda0659"],["/post/f8239d66.html","6d9de9ab769b8192b00af8b26eeb9840"],["/post/f9f5e0c2.html","6bdb5096ecd80329af35284cfb2af95e"],["/post/fb77661f.html","80055e1ef8cc30f5c6c8b367b02de4d1"],["/post/fe1f88a1.html","1a686a997284dddc672e8ccbc6790255"],["/post/fe57b0e4.html","4a85503912f1e442a35ce68839a15a7a"],["/post/fe816c3c.html","b95cca62b6b38284954876459e4cbd27"],["/sw-register.js","5a9975b3555a0021a43ea3754a996d83"],["/tags/Butterfly/index.html","a0bc1c6dd7bb9111d693978e552a929f"],["/tags/Hexo/index.html","2bf200c674fd1f8f2d0e8359843efe79"],["/tags/JVM/index.html","f038682105174b7861fcff1f841d5da3"],["/tags/Linux/index.html","b77a9e30324cd6393972c24fae91119d"],["/tags/SSH/index.html","64530c975f3518a110148105c9094de5"],["/tags/index.html","d3741fc588962ee350fc397bcdaad9b9"],["/tags/spring/index.html","5671f5da1f60b4451650fbbc9a3e044e"],["/tags/vue/index.html","35b33e2ca7b799107fec695ffed1a455"],["/tags/一问一答/index.html","a7201e47b6c450ff2a4cb3bcfb7b09bf"],["/tags/个人见解/index.html","2a91fa5e00f73d7e3dfb38bc7a6ddc8e"],["/tags/大数据/index.html","4f67f24023bdbf492085990963032f3a"],["/tags/大数据/page/2/index.html","58a4849db2e50d969b68fb6a9290e8e8"],["/tags/大数据/page/3/index.html","7a8e8adcdd0418ba693e6275cff42a5b"],["/tags/学习笔记/index.html","f7b7585a55dc3bc90b4c51c7ab234e51"],["/tags/安装教程/index.html","e64fc9929b6d08b4e20a51a683b026dd"],["/tags/实战/index.html","95e235e175b7a0d825bc04da629d389e"],["/tags/并发编程/index.html","413b2492b072f5e1089347acdb57a30d"],["/tags/数据库设计/index.html","3631b66c4694b327167c16fc66de76f2"],["/tags/数据结构/index.html","b1f7b0879813f63bd82c4101830de337"],["/tags/案例/index.html","57fef9f0fdf25bf69a2f28c3bbe2a947"],["/tags/注解/index.html","0198f3bb7f3e11565d25960dd733daee"],["/tags/源码分析/index.html","b319ac89863099a2956291c235bbf2dc"],["/tags/程序员/index.html","fca5aa17c9c7b836941ceab4beb539d9"],["/tags/笔记/index.html","9fdfaa92d0093e39be49c5642bf2dfb8"],["/tags/算法/index.html","b7b2a114daaa8b1908eff244ff086716"],["/tags/设计模式/index.html","75b23d532e79a7697d378f770e0795ad"],["/tags/设计模式/page/2/index.html","e49e4b260288e7426a02d1ab619da5b9"],["/tags/设计模式/page/3/index.html","8523dfff02a25be6d15156dbc85669a9"],["/tags/软技能/index.html","96d3fde9ba2bd808024fdabd506b84d2"],["/tags/软考/index.html","231656052da89ab68983513ca1859b7d"],["/talk/index.html","70f878e00efe43baba35fe782b5ea131"]];
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
