/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","73914c482319e93a9e3869f05495d041"],["/about/离职申请书.html","f375129d655e8a7b1147ef152e2cc07c"],["/archives/2020/07/index.html","79f198099c6afb2ba4ee0d95c2a1a417"],["/archives/2020/08/index.html","b65051d5b19ef6c2584f08b2880c08e1"],["/archives/2020/08/page/2/index.html","1d3caa155bde286bb22d99153ff4e1b4"],["/archives/2020/08/page/3/index.html","5d675f290fa2fb82243438ff8ca9a20c"],["/archives/2020/09/index.html","5aeff3e1715ff17dba9f8ea7e1dec68c"],["/archives/2020/index.html","2c9145cc1f8817c574cec1b4056ca578"],["/archives/2020/page/2/index.html","ac693f841617437f20d6fa4e6f17ed74"],["/archives/2020/page/3/index.html","f8fc77b29a16740f116cbb2b37884549"],["/archives/2020/page/4/index.html","b6401957d59a37601c3a3dd5466abb0e"],["/archives/2021/03/index.html","75bc49c4bec29d8e0642dff0d7597984"],["/archives/2021/04/index.html","a8d219408dac2f5a36cbac5cd932d6cc"],["/archives/2021/05/index.html","d3c946313fa7787e2b1919e0ac01c21a"],["/archives/2021/06/index.html","21355014b089d058a361ce7be8e440a9"],["/archives/2021/07/index.html","7b1e22ed0b5f31780f86e79fc4a3890e"],["/archives/2021/07/page/2/index.html","020323465d9ec78f63fceb4b931cc8ba"],["/archives/2021/07/page/3/index.html","093e4ba36641f081ef6e8b88f9e45d0f"],["/archives/2021/08/index.html","11c90b6dc201551e342ce235624c96e1"],["/archives/2021/09/index.html","f4bb6f8420423e14cf3ad7742d4f42e5"],["/archives/2021/11/index.html","33629a38fbc0f024345b5a94a987905d"],["/archives/2021/12/index.html","e40011245682e93d8eec0b5152e19332"],["/archives/2021/index.html","0035edb92e17f64bd1359514a37e1463"],["/archives/2021/page/2/index.html","fb14edd809adf60c40e80dd75ec01aab"],["/archives/2021/page/3/index.html","6a6ed99e9803a59222ea8712b6647b6a"],["/archives/2021/page/4/index.html","3f092979fe3ae0484223783e03b7f1aa"],["/archives/2021/page/5/index.html","45b5d3cb3949fe2559c4b184f1ca8a73"],["/archives/2022/01/index.html","d9079373fea71f924779a671524dd34e"],["/archives/2022/03/index.html","84f911c67797afcf15d0a25cab8ed080"],["/archives/2022/08/index.html","b608187e095e3a0ffe436fe62a68516b"],["/archives/2022/11/index.html","e281555fb73d65f96a0966c66ad83ae5"],["/archives/2022/index.html","8bafd5811de99aa2aafcd757fb683eb9"],["/archives/2023/02/index.html","0222bad7e7e01b1023a296cbee76e800"],["/archives/2023/03/index.html","8cac492142bfd75b10e2db101a4ab072"],["/archives/2023/index.html","4d18e5cd5e0240405138ecf2393a522c"],["/archives/index.html","381fbe81e2987156324a140f6570c68b"],["/archives/page/2/index.html","d7201622a65798586f14a2a815640664"],["/archives/page/3/index.html","0ba63b8d8abb5944bf2d6a6a17c97195"],["/archives/page/4/index.html","fdac7904c5ac4077b3fb8a39c871aa17"],["/archives/page/5/index.html","498e3806c87e5848bb24608c0207da74"],["/archives/page/6/index.html","29d61896b0c13776b2e273375c80fcb2"],["/archives/page/7/index.html","1038419e63bb7b8efc03ed30bbd3137e"],["/archives/page/8/index.html","7e3ac0cb45538160ca796e21efc014cf"],["/archives/page/9/index.html","2d6699a06dcdf724b39a9ab579141bfb"],["/bb/index.html","be5663631224c76e9b4cfabe590f79a8"],["/board/index.html","2e82adca7b3fe98fd4e433b6e5cffc02"],["/categories/Hexo/index.html","d2b6ec8c1c5fdd2760a5f50fd90d955d"],["/categories/IT碎片/index.html","57c16fef450f439ada2d1bc646a20514"],["/categories/index.html","41ed064281d31ff3a33f88e2cfeb09ed"],["/categories/前端/index.html","a4530809b723dd432948926299d8d12e"],["/categories/大数据/index.html","f251854510470a442f257b1096ef338a"],["/categories/大数据/page/2/index.html","2767286d18db69d0fde98a45ab085447"],["/categories/学习笔记/index.html","e85ce5d2f6ebce648d93afaa0d07d56d"],["/categories/工作实战/index.html","1d05bc14a6306f44167652907a453cc5"],["/categories/开发手册/index.html","ce4e69ecc9b4dbc4ac19ec3136d0d33a"],["/categories/数据结构/index.html","56853a3488127eee179b7f5f11448d47"],["/categories/案例/index.html","1218e73dc626b6b9abb6dd5178a2f1c4"],["/categories/源码分析/index.html","f914c77697ea78c5bc16698d87be6ead"],["/categories/设计模式/index.html","4d5d2d766e74be50e0fa3fe0a16f4b8f"],["/categories/设计模式/page/2/index.html","0a3ad548cd246a1d3526fd8f1532112d"],["/categories/设计模式/page/3/index.html","b1ed6a7afa80c4e3e2bdf39f92cb3b59"],["/categories/面试/index.html","6a262e4f32592232d5920a9689852b00"],["/categories/项目/index.html","989d4fa0b04f157da441b6f606b2b950"],["/categories/高级/index.html","4068eaea9f5d891773d51350464ac957"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","d617e31e41e990439877b60f75c93825"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","6ffd66cc4ca9b4ac6cda451ad096f0ff"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","cbaac5dc466c15a0590a0dca880a2936"],["/page/10/index.html","9a547c2ca2846b16f68743bdeaa9a142"],["/page/11/index.html","3ec2a5391cdf1ef45ed4e66e18991cd2"],["/page/2/index.html","1bfa979e2b711b4a16f4c8f15cf0eea4"],["/page/3/index.html","aa873e145f82d9c6f78e7822b59648df"],["/page/4/index.html","99134b6055d5c647b1a9cc4eb3f5116b"],["/page/5/index.html","135e8c6ff6384e4aafca64df38f7b238"],["/page/6/index.html","62ac68bb9a22ae8a5700a42f062973d9"],["/page/7/index.html","46c23eac78473ce714ebe6b7e12096bd"],["/page/8/index.html","d4d2c615f53cc866d60ec9054aebce47"],["/page/9/index.html","5b2e8c30cc9ad8c2bb9179eb846cbca8"],["/post/121bde1d.html","05c4068710c9d3011338a6e77c01d560"],["/post/153083dc.html","ea0d7d9b17a6ffe0799c0ae7e39afdf8"],["/post/164eee11.html","e0f6e268017d88ffd321545ecaee1e8b"],["/post/1a7b7abf.html","c3d7e47177e9931a4d7a9b88e76d437d"],["/post/1baa3967.html","cb304f9d4ca9644025ec1829244c08c9"],["/post/1f4ac2fb.html","d07ce9ed9960422d3b0e08342df80220"],["/post/22580020.html","49aea74581d2c8cec4f06fd6a64ab9cb"],["/post/286296.html","18a170a5a64749155d9add667a0e005d"],["/post/2cd418c2.html","d8463e85fa58b9a7e3ee6de0827c0dd6"],["/post/30cf0cd2.html","afbaceb8674269d7310669f477336964"],["/post/317f8360.html","f6faccd40d954390881941af956a0275"],["/post/33cb1151.html","48b386c3f24cc15a717c8cbeb60b6105"],["/post/34e57ffd.html","944a6f86d04a777a6cfd3e909eec2f12"],["/post/3d20c1d7.html","fc50c3cd2de0ba161c5aea176ea4e778"],["/post/3d24dcf9.html","ffddf53695a557bb5512be539230aca1"],["/post/3f6c447b.html","e7ffbdd3e93916af8d5ae7bc356387a1"],["/post/490cdff9.html","81035319af76e0fdea34f09e973ca455"],["/post/4a1111be.html","094b66ab2d35a8eb7c970c0ef92767d0"],["/post/4fa8e0c4.html","cdef5f054195497c7ab2bf76cb807b61"],["/post/524e74d7.html","7cc01a17b9e9e6dfc6e923df12106c81"],["/post/539343bf.html","5af406c3597c4afcaca0c7bd67f7a8d3"],["/post/54788f73.html","b4570d770cf92799947e19e99882e406"],["/post/563268dc.html","3f06172d6e6a3a792617c9ea80c0eaf8"],["/post/5ac88c70.html","02f75d81bf9f63c6d0c5b9074b56ae42"],["/post/5bf55f4.html","629d7abe665ba6a3a08baedcc2319554"],["/post/5e87465f.html","be60cd4e22a7f1162d3204f726dbec89"],["/post/6016428b.html","dd451090899dd88e0cffe7527dc2a10b"],["/post/6208627e.html","c822749465856af609c9214a9e5b46d9"],["/post/64b51ed9.html","8364356d87ee614ac712feed560f4a73"],["/post/659da5b.html","3093eea831c4dad0560f13287dbd7651"],["/post/6c429b75.html","07abf0c20412f064bf359952b29bd737"],["/post/721d4875.html","909d52490ca0d4a7cc818deedda170d5"],["/post/72e3b671.html","8992a8cfa05db273af8a812d9d4ccccf"],["/post/730d8d6c.html","b4c1aad36cc792be6b4d918c4bab6b99"],["/post/74fc969.html","e5b03889bb58fec9bd6d6106092e0f3c"],["/post/78134e07.html","4474561af540121314124fc489bc7747"],["/post/78c07335.html","f06b7199ae37c1b1442f1c19bed6a1d3"],["/post/7901ad89.html","82953518999e066b35cf563d2ed7264c"],["/post/7a2a0c9f.html","7656d863c509ab3cf9c6a5d6d7125190"],["/post/7b216a3b.html","fe96c1a47e25a9849e2c10d4d82ab4ee"],["/post/7b510e10.html","f1339fee8e773886eca582e0442f4758"],["/post/7db2942d.html","9870a65b254285b9a1c498cd91ad825a"],["/post/7e6c6990.html","7b63c497bd6e20c2ecfdd8e5bf27c694"],["/post/7fa79d96.html","5a0888d082783851453ec7a9ee7fc550"],["/post/855673ad.html","b4c23519e31e608c69699e4bfdbe6196"],["/post/892a2328.html","4f6f221e3788cb396d38477d69106317"],["/post/8acb1976.html","6e2eede093b62af7dbb414be24bb47f0"],["/post/8e4fa41e.html","ea545f0cf736c55f955cf784980b8417"],["/post/8f488ef0.html","67f585103855eab0244c52d13cecb1a4"],["/post/8ff08e27.html","37266c69f52eefc5d8fb544ffb50a412"],["/post/9055d217.html","93fe16b60a475ab513a5c2a6d31e2330"],["/post/91ad9ce3.html","8749322f036d13701422bd70c59edc93"],["/post/96131cab.html","dfc8e5ec291221ca33677e68abbf9d09"],["/post/96b5906.html","7aed7d7a95345be29860785c59d42783"],["/post/970fcca5.html","71c7e0a22b136a265fd2793449ad12c5"],["/post/9a246216.html","a67a4c13fbafb4c8406eb1c939d3e7fb"],["/post/a10c77a7.html","45badbde20cde86d47160c540e775ecd"],["/post/a708a60d.html","aac967eddd527ecb86a412808992d27d"],["/post/ad27c5a8.html","b9756332b804c26265bec7f59df7d773"],["/post/b6c47025.html","947d83e81a024c844bef88a07aa45463"],["/post/bd69ba8b.html","c53580bd3883278f010d1ed373633876"],["/post/bf7f3b65.html","c592d9acb327974a3d96f6b63ed1df00"],["/post/c3176455.html","3ba4dfd7072324738a1663ea8fb11035"],["/post/cb80ff62.html","692ce9d99d8d02ed75ce45d87127a540"],["/post/ce0e685a.html","1d378611d27b853eb2b3c93e08c3f9a4"],["/post/ceb39ac4.html","18733b70f11057ba1e6767a8acd6b996"],["/post/cf413e35.html","385a77f2b44ae292bd987d978af2240c"],["/post/d036071c.html","0e114cce2403dd759ad6c9b3f5cd0403"],["/post/d39191a5.html","bf4677fe6219fcf1917a97fc902934f7"],["/post/de3bac1b.html","cb348718764a23940b77bed379967ba1"],["/post/df879792.html","af26d0e7d037a625bf37cc40c293d47b"],["/post/e008fc33.html","af266d3f1850a08b7ca81f9d584f0559"],["/post/e19da94a.html","861a476102ab0c878eed70d708233bec"],["/post/eb04e0a.html","001e393050c3558eb9bd5deec662ef30"],["/post/ecd67acc.html","65d3f57b4edacf5f52c24b417fac3f84"],["/post/ee040603.html","54ad6ee2e7af0c5637e50f785fd7bfc0"],["/post/f1601c3e.html","604cc8357695cfa2727a44c5c0bbc5ed"],["/post/f31a5a5b.html","313e3f31b55a289ee3fc30f5580919f9"],["/post/f5c535ea.html","52dc7c6c4d8f605d976ea79528cd69ee"],["/post/f7500981.html","f3fbc84f62ee900643f37a6327b2aa6b"],["/post/f79807ee.html","44de38821c5b6f1372ddaa3f270516cf"],["/post/f7de8aa8.html","32b146b08ae38f900e0442badf522f32"],["/post/f8239d66.html","a1bdba9c28b1a885351e2308f793e947"],["/post/f9f5e0c2.html","c894d0a83f68d266cd67ded19f50a1ec"],["/post/fb77661f.html","34cb36edc0c88bc17b58df9560451ab8"],["/post/fe1f88a1.html","635a9fc194cce56514f3e54acdb7dfa3"],["/post/fe57b0e4.html","658dfe4ff03bc24f86cd4868ed286e7f"],["/post/fe816c3c.html","53224fb57cb44d61576571cbd86b8825"],["/sw-register.js","8b5962d1bb0b0c56b61a3f3665b00c5a"],["/tags/Butterfly/index.html","b1aa361a9ba934393d8ee72bd46fc831"],["/tags/Hexo/index.html","26eb72c30e66b594d3e0fd0674a62123"],["/tags/JVM/index.html","c1179e5135a0cb042a1f188beb2e7d4a"],["/tags/Linux/index.html","365083174a3f395e332a27c6cd9adadd"],["/tags/SSH/index.html","4b1d7a314c89182d8f7872e5c9c3c2cd"],["/tags/index.html","af9aaae82c703422e6a2baba319261a8"],["/tags/spring/index.html","b35181a139751fec15b2e498212482ab"],["/tags/vue/index.html","2c0c91c3ce0ffe17cc2b99e730de510e"],["/tags/一问一答/index.html","40f06c23ddefbdbdcc8394633e884947"],["/tags/个人见解/index.html","9ced08f3dacb9de374b97290e4fbcf87"],["/tags/大数据/index.html","d55e8ca597fd43b5501c590308123646"],["/tags/大数据/page/2/index.html","f3ed4c896285cfc4acb2a949375cb241"],["/tags/大数据/page/3/index.html","4dd27adbfd258f42b48d8c6e6677fe9d"],["/tags/学习笔记/index.html","8d8bc28f1b2f900c69fed76d18c7fc11"],["/tags/安装教程/index.html","81604052dd5d864fa740fe7316bcaa98"],["/tags/实战/index.html","a0a38f471833a3e0b37f96e6b6f2a930"],["/tags/并发编程/index.html","1077e953ccea8ab39cb069392124f41c"],["/tags/数据库设计/index.html","f7a1edb973e4388515e7213e95c355e6"],["/tags/数据结构/index.html","cde1e8074dabd01181c07f87bd1522eb"],["/tags/案例/index.html","94c6a87ee214de045768e7af440091f2"],["/tags/注解/index.html","18c246a26e3c800b21907e3c66a3219f"],["/tags/源码分析/index.html","e17af571fe6782ff587450b9b8b7b401"],["/tags/程序员/index.html","e1e9efbd4c7d48a7f702482301a5989b"],["/tags/笔记/index.html","7551986a5ef66375ae750c3a8ee2b81b"],["/tags/算法/index.html","13026e23454cb89e8edd98bc468bca1f"],["/tags/设计模式/index.html","919c46861a123815fb9d3682892631dd"],["/tags/设计模式/page/2/index.html","8a7bb5425ee6d5c51d333634c48f807d"],["/tags/设计模式/page/3/index.html","8f25f163cd7690fc6c6310c1f733c769"],["/tags/软技能/index.html","a7a75ef0b8cedb54f0a9e59241e54b72"],["/tags/软考/index.html","b0ec057bcb021b22328f248a0ac0ad66"],["/talk/index.html","01d93a43e115dd6d105d241a495d1185"]];
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
