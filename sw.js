/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","3d78dd3b0fe81fe143d28fbffcf60d81"],["/about/离职申请书.html","dffbdac0072997b481fa8f2a50a730b9"],["/archives/2020/07/index.html","c7753879a1cffecdea37bc4e208aee86"],["/archives/2020/08/index.html","67e4c9d17814c6a156976c9d12ecf334"],["/archives/2020/08/page/2/index.html","0463a1ba0a2772f2a8875fe2ccd58fed"],["/archives/2020/08/page/3/index.html","5dd7c7a279fd77868edd040e62060b9c"],["/archives/2020/09/index.html","46edfb23badf33b59220b2dd99aa0f96"],["/archives/2020/index.html","6a976cca86535477794b33b4fa80c30c"],["/archives/2020/page/2/index.html","5112ce91d03b130550fe5ee80cedd153"],["/archives/2020/page/3/index.html","10838b12965cd7a9eaaa118213bdc57a"],["/archives/2020/page/4/index.html","75136f37d43db7ba9b9961524151712d"],["/archives/2021/03/index.html","ec73c92641012f19afe35900d88c9555"],["/archives/2021/04/index.html","fe657eff2e6c03d2e9b26bb4711142f7"],["/archives/2021/05/index.html","842d1016ced16af6143ffadd2b53b772"],["/archives/2021/06/index.html","fc731d276e8761b6c29701990798f5a7"],["/archives/2021/07/index.html","daef31f343f45f3768730c411afeaf73"],["/archives/2021/07/page/2/index.html","e1d7d3dccb20c729fb25c69c7b7247ab"],["/archives/2021/07/page/3/index.html","98c50ef0c00ac52c134006cd4436a1fc"],["/archives/2021/08/index.html","9be8256d9fe6a612dda5ac13772714e4"],["/archives/2021/09/index.html","31feff06cfd45901bb3eba4bd675632a"],["/archives/2021/11/index.html","59082d5dfc582341aadd0fa995cfcae5"],["/archives/2021/12/index.html","79018de1b3a3be1a8972c64df170a327"],["/archives/2021/index.html","b311439c4c888d27e6324367a6f4445b"],["/archives/2021/page/2/index.html","db6c5289c6119c34adf2af839ceb6f67"],["/archives/2021/page/3/index.html","d40db3f01bd795b875b7f87b4eb83cdf"],["/archives/2021/page/4/index.html","262b98006d2f744ec25c350ee0327a37"],["/archives/2021/page/5/index.html","06e6729ea636005397b2f24a12074353"],["/archives/2022/01/index.html","d4c862669c709844e248bbe29c65ea77"],["/archives/2022/03/index.html","984798b5aa9d3e60eb4c27f2d5955196"],["/archives/2022/08/index.html","95c94c362b4c827841ad4611a4e8b1d3"],["/archives/2022/11/index.html","f1b12bae38cc1710bab81e8a97d82688"],["/archives/2022/index.html","33f05245eebfea6e4669dccbd5acc8cc"],["/archives/2023/02/index.html","d98b809a160765712a0dd8658ce037dc"],["/archives/2023/03/index.html","a0f6e260a2ce3f29f21a360619d51a4e"],["/archives/2023/index.html","a0e32a40a4cd0a5d6d52420b3440c5f9"],["/archives/index.html","2c0e0b4ce80af99b18d44ec9e60b22bf"],["/archives/page/2/index.html","53b88001963be4f64e1c00d7533cab7c"],["/archives/page/3/index.html","5c2fad45b66dfd56e048c566b337e0b3"],["/archives/page/4/index.html","4e182ab0898865d3ddb8cfbf4d40bb57"],["/archives/page/5/index.html","1c01ab6805e29a0601f0720bb4edb4d2"],["/archives/page/6/index.html","cafe408ad1ff22894663ecd8aeb291af"],["/archives/page/7/index.html","50ec1df6aba6f4c4310418fd9e864903"],["/archives/page/8/index.html","fec70da8ec6f5cbcac1c7bea8ed0b7c1"],["/archives/page/9/index.html","a4891694addada405c5676185de87189"],["/bb/index.html","1e930d82358bc865fb34b1d17d8e7617"],["/board/index.html","a6bb05dc687cd18b6f6d9f8082718bc4"],["/categories/Hexo/index.html","8b6925311758b8b40b8158b45921294d"],["/categories/IT碎片/index.html","0161922ff3c22451045284189bb3e8ac"],["/categories/index.html","41ed064281d31ff3a33f88e2cfeb09ed"],["/categories/前端/index.html","6aab8007ba7f358d786dc2a30a4306a2"],["/categories/大数据/index.html","ddc8b2944270a18892e311ba7660a068"],["/categories/大数据/page/2/index.html","4fb0503c8c7e4dd435ed0400cb0d849a"],["/categories/学习笔记/index.html","6ba1833d60448c77830976be3ca3efc2"],["/categories/工作实战/index.html","719281f084318cf2af4d4ed9bb69ecd3"],["/categories/开发手册/index.html","56026c1ae68298a6dfadacc0bd717c76"],["/categories/数据结构/index.html","8403384aaf68b32e86b3ff978d0e0996"],["/categories/案例/index.html","4cab4c4347d12fc1cf69135afc1d47b4"],["/categories/源码分析/index.html","a70bbed4898d9fd8f639a3abdd1e7548"],["/categories/设计模式/index.html","641a8a59dba93116865b286a056fc8d9"],["/categories/设计模式/page/2/index.html","0b0d685e492ad8a00407050e93056f15"],["/categories/设计模式/page/3/index.html","6c10f4cf1b2d35635dbf22b88486fcab"],["/categories/面试/index.html","0b0310021c2b8f60934115276bdd62d7"],["/categories/项目/index.html","3cb3c51516c7ca250c34e2f88a6dbf85"],["/categories/高级/index.html","4120ba4305b38289e76b7938fb372c0b"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","69f28a03121ac89580334fd4efc9ad7f"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","3106da9eeda34340efcda361463050b2"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","cbaac5dc466c15a0590a0dca880a2936"],["/page/10/index.html","fba5bdf684ea971318b64dc77bb242c2"],["/page/11/index.html","df47ee724bad993f57dca151329f5c4d"],["/page/2/index.html","24205ce299e7891f6349d7482aa4b0ea"],["/page/3/index.html","372f853bf34c8b440faa1e5c9a7abe7b"],["/page/4/index.html","6e70ed6da621290726ca4fc172618465"],["/page/5/index.html","0e4d2320b3ca56f9e4483c197c8e5500"],["/page/6/index.html","1ce222ef76bc67a0e5a876d504be7d94"],["/page/7/index.html","ac7312f3f2f79387415fdeb8ccd574a1"],["/page/8/index.html","127729b7f677765b7f97ecef64f748a5"],["/page/9/index.html","3b6aba01737b5c7a2ac93daf41f020d4"],["/post/121bde1d.html","6eec061c566e9aef82cf75ce27bed28a"],["/post/153083dc.html","db61b7f111464156a16f7c949a722013"],["/post/164eee11.html","bbd3ae8c788c7f0c8bdad16f91e8fccb"],["/post/1a7b7abf.html","13fcaef893fa4ffaf6ea8a72e23a39d7"],["/post/1baa3967.html","43a970874de0e7e49ba5bd5cf3587b06"],["/post/1f4ac2fb.html","05777523dd3dad3610ef097380082e7d"],["/post/22580020.html","00c0e90980780432064bc9ee13cd26b9"],["/post/286296.html","d3dfa89f6521a996f4f0b2e8f67e5ff7"],["/post/2cd418c2.html","864561122c738964b2cc564f5402f480"],["/post/30cf0cd2.html","e0036a2a8233d3425c1a8fdb85cc94b0"],["/post/317f8360.html","a352e36bd5fb849817663342c1f2d8c6"],["/post/33cb1151.html","8bdf1f05c38ca6c1464f867c98f10d18"],["/post/34e57ffd.html","f0819031daf5d20b67e321bfd15255fe"],["/post/3d20c1d7.html","d9c70e5273151ff6383af28622ba911c"],["/post/3d24dcf9.html","6012c0001612fdacd1003b337ad2826b"],["/post/3f6c447b.html","dbc47d4010c7689701f03ed055403fb8"],["/post/490cdff9.html","5a758c556da991addf11558e199629a9"],["/post/4a1111be.html","25b8fdaff410725096daa7f594782b38"],["/post/4fa8e0c4.html","c027e616d1ceb8f83b035888318a4f0d"],["/post/524e74d7.html","7cc01a17b9e9e6dfc6e923df12106c81"],["/post/539343bf.html","b0b57d63719d13bd2d013ce2e44d67e3"],["/post/54788f73.html","f51c09e476d3e5393fb73affba9584b5"],["/post/563268dc.html","064311a6ed011042eaa001c552f92c64"],["/post/5ac88c70.html","caa0d6672fb8f63bcbc5dac4a56dc5ee"],["/post/5bf55f4.html","4c4b2af3d1e54c572a084ab5b2c78ad0"],["/post/5e87465f.html","5071b5fd2120a814c9c5747cbc9ca101"],["/post/6016428b.html","dd451090899dd88e0cffe7527dc2a10b"],["/post/6208627e.html","d86d0d2cfc61991d62d103ad321611bd"],["/post/64b51ed9.html","2957d1c9333981cd483ed9c80469ed4a"],["/post/659da5b.html","2c8c25e9f8d6de3d31d20db89ec80eb6"],["/post/6c429b75.html","a7790a211a708949db0bc0f3cec4d291"],["/post/721d4875.html","33fce663b2d1a8ccb591c6a47d95014d"],["/post/72e3b671.html","487ace77f8d3e98b5afd4cb98afce90b"],["/post/730d8d6c.html","4a2c62ce558606b6c3e6f2457c1c929a"],["/post/74fc969.html","70ef611b0647c72ec4b738457f6a943a"],["/post/78134e07.html","3ec4d91434c16822a31a7910b1d7be55"],["/post/78c07335.html","c7501403ba5ba362ef7b1c9f72a2e7e6"],["/post/7901ad89.html","ef09b3f9370ac0182842531f8b9a6235"],["/post/7a2a0c9f.html","f22cd188ea7aaf255cd7dde2ae512236"],["/post/7b216a3b.html","06e18e653707a8568b72e47e2a781090"],["/post/7b510e10.html","b35cff54e0f6125aa8ed08b687e5ddea"],["/post/7db2942d.html","0ce09df0569db83bf3c10177c43af8be"],["/post/7e6c6990.html","2f621340dc757a7ec18d504619527782"],["/post/7fa79d96.html","af9d277ebd3c2a0570d8535397779a20"],["/post/855673ad.html","933c342105164e8356bb7cae45317929"],["/post/892a2328.html","094b932b82f88dbd8eb4bcc46e85a3ad"],["/post/8acb1976.html","320f18c8439394ed56568b8b44085a02"],["/post/8e4fa41e.html","add33355e724a0ce7eacb729137fce4b"],["/post/8f488ef0.html","d599eecf8a3ab8a0cb359c232c991f70"],["/post/8ff08e27.html","dd449362977775541d2c30f10f380440"],["/post/9055d217.html","53d8341595435a949f50bfc513f47ef6"],["/post/91ad9ce3.html","cbe383e00deece44059ddcba5ec43ba6"],["/post/96131cab.html","d74dfde6347b89f08efcecd143d7fdcb"],["/post/96b5906.html","33538d70e279d3460f3ef7e665172b64"],["/post/970fcca5.html","6afc942c8af65fe2b15406ad2881ade4"],["/post/9a246216.html","7476b893d327c12fc6241f762d9fb545"],["/post/a10c77a7.html","e979b02152ff04ea5207cd0fb5c6a778"],["/post/a708a60d.html","3c4c978c9ba9a5bc644f046382633557"],["/post/ad27c5a8.html","42adc1f86d269fe7fc931e20e64838f4"],["/post/b6c47025.html","abfad5c895ee8e47f96735c384526846"],["/post/bd69ba8b.html","3b8edf97b92b626f13aa03d2eb71abb7"],["/post/bf7f3b65.html","6abb3b27db75f309b410055a0325da84"],["/post/c3176455.html","548317f617260a01ba02e5c7de4db1e2"],["/post/cb80ff62.html","36f01eb60aace014487dc420a2562a99"],["/post/ce0e685a.html","098d96c01b7eaa9a20c780be7bc359fb"],["/post/ceb39ac4.html","110a6da87ad1e8f0b23095de0c4bd327"],["/post/cf413e35.html","55bb80eef1f3f5a424f4194279bc4f02"],["/post/d036071c.html","2b3c3a4bfd01003b79dea16467f5b14a"],["/post/d39191a5.html","e79e7fc205559ace500d49d47f4c7623"],["/post/de3bac1b.html","09ab3a19e0a79a0292dec70433cfab34"],["/post/df879792.html","ce29daa2436de8eb5c99db325e2ee781"],["/post/e008fc33.html","693a8339f94c7ecb84450269b9d54313"],["/post/e19da94a.html","a32ed35f0b40b0f50584bc2727b69d3e"],["/post/eb04e0a.html","606c8338a82ea774217428863b61b8f4"],["/post/ecd67acc.html","f982fa940f17ab648d3722c7633b31e4"],["/post/ee040603.html","3479e1208eb5c408342532d12a70c652"],["/post/f1601c3e.html","2697a9fac003054c12204c3949c53b21"],["/post/f31a5a5b.html","f93e7d41beabb5542a9c516a69c008ea"],["/post/f5c535ea.html","6313f6f4ba5f9bdc60cdeda5d2a3932f"],["/post/f7500981.html","6a3c24201087acd96c572ac48c2b1054"],["/post/f79807ee.html","44de38821c5b6f1372ddaa3f270516cf"],["/post/f7de8aa8.html","798dc5b8bee5b2b51ca1a400042c2a19"],["/post/f8239d66.html","7745456eb277dcb2d16595b5a3966fcd"],["/post/f9f5e0c2.html","47711127ad9e57d1a19f37665be6d2df"],["/post/fb77661f.html","d641a442b8e454da649afafaf345829a"],["/post/fe1f88a1.html","54990cda77d5ce61548f4c2a742417f9"],["/post/fe57b0e4.html","0b7fc0e086713d1c8a8c3998bfe52486"],["/post/fe816c3c.html","99f49a462fffcbfa4994a1d04248d830"],["/sw-register.js","6210cf17fab8fc91f339de0d9f9bdaf3"],["/tags/Butterfly/index.html","90e63c2029228a730cc1baa6c7aa662c"],["/tags/Hexo/index.html","3e746364e303f3e0ffaa29185f75919c"],["/tags/JVM/index.html","8904915e67e5d9b8e9d81e5c94d909d4"],["/tags/Linux/index.html","82a791320532b0a8f299e8f13dd41e9c"],["/tags/SSH/index.html","2be1b328e9a41034a510fb17ffd467bb"],["/tags/index.html","86433d29af756c3933edb6a1a54e1d7a"],["/tags/spring/index.html","544256031278d7ea63f53d3e54ed5428"],["/tags/vue/index.html","879985db582f18ba3a02d854988a9b6b"],["/tags/一问一答/index.html","eccc129f125af476f0c534a3db28e352"],["/tags/个人见解/index.html","99fe9c76cb3e66f7e35decfba2b2ccb1"],["/tags/大数据/index.html","78997672779110d308b130dd1bfb29ea"],["/tags/大数据/page/2/index.html","007f3293f454886213f31317644f3ee8"],["/tags/大数据/page/3/index.html","993b18810ee6e1e1759fd532d3fe48dd"],["/tags/学习笔记/index.html","9673f0f163a82ad9260dcd44e0207859"],["/tags/安装教程/index.html","bdf6677095706868c517c5872dc8eb59"],["/tags/实战/index.html","16e669549a639e2f29d02f7cd58ad89e"],["/tags/并发编程/index.html","9b8e6ef0f36e11df20a546a63b51f1a6"],["/tags/数据库设计/index.html","198bb0bb2879b2e65eb3ac4363eb1be5"],["/tags/数据结构/index.html","cebbb7609a1aad39cf38e38c75e34715"],["/tags/案例/index.html","09ca5a0869b3aeab671fc8f244aa6334"],["/tags/注解/index.html","c055af33d45a535f24dbaac89c14b086"],["/tags/源码分析/index.html","59f612a7e9a3a916658b3393de7d230f"],["/tags/程序员/index.html","fac743d8511207b7aedd7a7a224d75d0"],["/tags/笔记/index.html","26141352715e7ad073ac9a99bb4fa975"],["/tags/算法/index.html","4393e46745e3781fee09a62838b4695c"],["/tags/设计模式/index.html","979153e63c2feade56865bc4eefd7bcd"],["/tags/设计模式/page/2/index.html","3ae49dda9f5e7ed2e2a311e0fa6b1cce"],["/tags/设计模式/page/3/index.html","621589173a91407ff141a1cab6487a0e"],["/tags/软技能/index.html","940245113f5cb510db99c34f7ace867c"],["/tags/软考/index.html","bab16125c9f7e63b1824df6b7e0070bc"],["/talk/index.html","52c50b651d5b27d6e196ebcfb0649636"]];
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
