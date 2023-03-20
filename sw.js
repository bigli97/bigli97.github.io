/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","ab24efa856cf820e453dc80b30afd1f8"],["/about/离职申请书.html","2cd9129e6f708f42613ae9fba060ce42"],["/archives/2020/07/index.html","c968baf2128acf839b3d6bf53d5b33de"],["/archives/2020/08/index.html","00ee7f62005b1c9d7869dfda12948958"],["/archives/2020/08/page/2/index.html","4f48df680467f41b7161b9a354f3b235"],["/archives/2020/08/page/3/index.html","2f7697b70c06522d13eca363707f874f"],["/archives/2020/09/index.html","a55064b00493fd591f284d6a16820ad7"],["/archives/2020/index.html","a9bcc6e4f779e801581af157f0d42a61"],["/archives/2020/page/2/index.html","7d2c97017b4d9c9b8cfcba97a35c64d6"],["/archives/2020/page/3/index.html","e91781eb7e8bd61a026f764e6a644a2c"],["/archives/2020/page/4/index.html","03c0f33964171e20955cb84adaf52b79"],["/archives/2021/03/index.html","689f249b86f485a916cf4cb89970d8b9"],["/archives/2021/04/index.html","c4c11d1dc93da8c2e1484fffc1e7ef14"],["/archives/2021/05/index.html","fc6708ea3a7ca0d561d7e528e7cb8c87"],["/archives/2021/06/index.html","ebe61d9075e2e9bbf364ed8faf30f98f"],["/archives/2021/07/index.html","9836f45f0e9898db3e122ce9c3efa99f"],["/archives/2021/07/page/2/index.html","6a1d0761ce3f392fa1e07c78160eff51"],["/archives/2021/07/page/3/index.html","d6b9ef59f7392125dea756cec4e5039a"],["/archives/2021/08/index.html","f48e892fda3641bd605574ef648f888a"],["/archives/2021/09/index.html","b7e91677ab66f36c1e6464a79bd2afcb"],["/archives/2021/11/index.html","c0122f3f5eac8deb32a148ba0d491f01"],["/archives/2021/12/index.html","f82e5c5e4227508be5f03222067fc48c"],["/archives/2021/index.html","15c5d43eb162b8cdfe096ba50061f034"],["/archives/2021/page/2/index.html","bd33f3e501b4eb0c1e1543a977e31155"],["/archives/2021/page/3/index.html","592fea1257716ed48e395723e4b9baa0"],["/archives/2021/page/4/index.html","caee75611e100cf0d49fb5b4622cfa4a"],["/archives/2021/page/5/index.html","4231509d473dcc8ba7de20927caec14b"],["/archives/2022/01/index.html","6738020022f882040485608bec8ef728"],["/archives/2022/03/index.html","b1256b8b5634a2001a0b1a3676ba52d9"],["/archives/2022/08/index.html","b4092a9ad8307bb5b7bc2ef53cc67abe"],["/archives/2022/11/index.html","399f517265964209dfe90bb8665eecec"],["/archives/2022/index.html","14030d771d3e1cfaa3e7e3185c104374"],["/archives/2023/02/index.html","6041f246653211aa46c2b926d43709bb"],["/archives/2023/03/index.html","184af4f37f83900e41e2719882b3b2cf"],["/archives/2023/index.html","b6a000076f525424025ec54b42441707"],["/archives/index.html","1d82b4ce5dc2f8041f81e569d51627ca"],["/archives/page/2/index.html","136405cd133d0f116a2aba794012f9b7"],["/archives/page/3/index.html","6f02294404f43c55d133dc6ceeaaf3ff"],["/archives/page/4/index.html","ba1bb93b30f4189787fc81cb26b41027"],["/archives/page/5/index.html","591a4149f35d1e702eccf2b891cace79"],["/archives/page/6/index.html","098f67fe6b91623969c3eed466756b80"],["/archives/page/7/index.html","e59bd1171bfbd1380644b64920199ce1"],["/archives/page/8/index.html","c8e950db46a70cb66e703434d1b74ff3"],["/archives/page/9/index.html","bba7c66d9fc085666db0c5a50b57478a"],["/bb/index.html","1e930d82358bc865fb34b1d17d8e7617"],["/board/index.html","6490ac1e046b9a64544036467a405fd2"],["/categories/Hexo/index.html","1cf55f3b173fa3cda0dbfa0775ed54a5"],["/categories/IT碎片/index.html","d57efecbec34c9a714d625f271efc807"],["/categories/index.html","96225da3eed9ace2cea401f1c4a7fa2a"],["/categories/前端/index.html","4d3f489069ada2166186a16d3dae2842"],["/categories/大数据/index.html","303e95dc97ba30e41a481ca51006ce7a"],["/categories/大数据/page/2/index.html","93b1bbc60e9177a42042fe4082718610"],["/categories/学习笔记/index.html","a15648c2ec13ba2f27803f525696f21f"],["/categories/工作实战/index.html","2cec40267f2de0706303c280650f9f83"],["/categories/开发手册/index.html","107936888ff42ebabc049b8e3b9ec818"],["/categories/数据结构/index.html","e138e95ffbff3c16cca16d52d2173399"],["/categories/案例/index.html","baa882a73f6978373a8d446da3ee3239"],["/categories/源码分析/index.html","4e5a1761d0e08fc3e533a9629ab75e94"],["/categories/设计模式/index.html","8dbbc9314cc8ab2850ba4381f0dc70fa"],["/categories/设计模式/page/2/index.html","400705cee38e6f9f985f9cd5a816cb7d"],["/categories/设计模式/page/3/index.html","cdac74c3647d424f34204ea96e6f1fae"],["/categories/面试/index.html","560d5eb43bbbc3a0ed72dacb32e86966"],["/categories/项目/index.html","111af5ace5b34418d321a0622e043d7e"],["/categories/高级/index.html","3c7acb1edd49ee3d7e7c1a93bc496979"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","a312cafb71b58eba1a999fd1bc70d9e2"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","4f89a784e778eef87377034a05442e74"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","8b4f2b33022695645376e5ce844eba1f"],["/page/10/index.html","a95153fecfe956a6994487ed3c1bbcd6"],["/page/11/index.html","6c25fff967d27c65244c5812b5c727c2"],["/page/2/index.html","4dd110e8bc62f76a86c049e377a2e45a"],["/page/3/index.html","a11fd2dd027d49ddbb2acad20cabb5b4"],["/page/4/index.html","6e4ecb27d975fe9ca10386c372a6b7fb"],["/page/5/index.html","d4055344d3aa30149eb2c42c9cab7f6a"],["/page/6/index.html","96150f1f10da1a6ad4987cb9811e7c31"],["/page/7/index.html","1947355128859a40746dab10d3203151"],["/page/8/index.html","e097792649c079b7e638603d7f8ae7a8"],["/page/9/index.html","9af9c215a093026c2ccf7a95a3a67902"],["/post/121bde1d.html","344ab29608c48ce7fc6f3ba8b7fa1e34"],["/post/153083dc.html","38747f66cd27cdf8c25a4d78754aef55"],["/post/164eee11.html","a0d74f1d8645d25e48a70a6a7fcc85fd"],["/post/1a7b7abf.html","8adaa08f9123d16abc7b557d52c2831a"],["/post/1baa3967.html","b6ea81c0d2db1bee5ce95f8524110170"],["/post/1f4ac2fb.html","ef31349c37291a232c5e9f6983838e0b"],["/post/22580020.html","6791a843bfc25915b4a3f52a676a489c"],["/post/286296.html","2ae61394c324efb3de2660169adc5b52"],["/post/2cd418c2.html","b61b41e7b09ec12faffee967300fe238"],["/post/30cf0cd2.html","733bb96aebfed41bf0ca9416071d11ae"],["/post/317f8360.html","f6faccd40d954390881941af956a0275"],["/post/33cb1151.html","52c76fadb94f33002001f85957349b7f"],["/post/34e57ffd.html","b09e7211c8168ecf3e90745ff42d0366"],["/post/3d20c1d7.html","d3f2a960736708af3e0cc60569dcc4d4"],["/post/3d24dcf9.html","6012c0001612fdacd1003b337ad2826b"],["/post/3f6c447b.html","10ddace700edbc0891bf27b10ef23a8e"],["/post/490cdff9.html","4a7a9ba8d7e42a3cd833dffb85fcf583"],["/post/4a1111be.html","094b66ab2d35a8eb7c970c0ef92767d0"],["/post/4fa8e0c4.html","dd6fbf7f6535dc00510da2bff7a06b78"],["/post/524e74d7.html","7cc01a17b9e9e6dfc6e923df12106c81"],["/post/539343bf.html","b0b57d63719d13bd2d013ce2e44d67e3"],["/post/54788f73.html","5b998867eb2e835b0febceeec6e04cbe"],["/post/563268dc.html","064311a6ed011042eaa001c552f92c64"],["/post/5ac88c70.html","ffe41bd741c619fafb8f03293b156a86"],["/post/5bf55f4.html","cbeb6fc8983c9033430c012c7ea2d53e"],["/post/5e87465f.html","20d01f70c059922fec756dcb74dfcedf"],["/post/6016428b.html","c22a943f88d110328d547093eab6102e"],["/post/6208627e.html","d86d0d2cfc61991d62d103ad321611bd"],["/post/64b51ed9.html","2957d1c9333981cd483ed9c80469ed4a"],["/post/659da5b.html","aded1f9d567d8a98b15d211c10c9eb40"],["/post/6c429b75.html","c549ec32314e1789903e3dd04963af4a"],["/post/721d4875.html","e4341fa2d49f7753524e07baba485cdf"],["/post/72e3b671.html","b0f862b26e8d6088949a74f8f19ae9ba"],["/post/730d8d6c.html","870b12a1f6a8939c5aadf556aca34a0b"],["/post/74fc969.html","ea24920f1c2bbfe713109e9a53360096"],["/post/78134e07.html","eb6cb15210338d7b08ceff75e785d22b"],["/post/78c07335.html","c7501403ba5ba362ef7b1c9f72a2e7e6"],["/post/7901ad89.html","b55e99d86e0cca2648f7f532715edb62"],["/post/7a2a0c9f.html","82f4782c735305a18df5c84a9fee5e11"],["/post/7b216a3b.html","c8b4a9163bb51ab4bc05c348b13e37bd"],["/post/7b510e10.html","a90bb50c972324e47998e33c76843ad0"],["/post/7db2942d.html","0cdadd87b64bf13a3a81088fd6eba23a"],["/post/7e6c6990.html","14c31d6f5c1cfb099d2d911385657e85"],["/post/7fa79d96.html","0e2d2f0f5dc606e67898719ad8a56843"],["/post/855673ad.html","977bd94039dfb4b041c69f36cc5a9198"],["/post/892a2328.html","407d224fc506b2fe5806956954d17da0"],["/post/8acb1976.html","655ec891d8ccb9e63537b8967deacc51"],["/post/8e4fa41e.html","add33355e724a0ce7eacb729137fce4b"],["/post/8f488ef0.html","d599eecf8a3ab8a0cb359c232c991f70"],["/post/8ff08e27.html","991ecf96e61af5d8e2482209fd17cfed"],["/post/9055d217.html","9f1784157d655fb5b7e33f03b6634102"],["/post/91ad9ce3.html","8749322f036d13701422bd70c59edc93"],["/post/96131cab.html","f280587b6ff85047b8e52df49ca77113"],["/post/96b5906.html","24d7a4ab25de7ee26da3ee8822db8ac4"],["/post/970fcca5.html","b0b2a72303e314d8c35801173e698b71"],["/post/9a246216.html","97a3bdc0cda3b15d7b325ab0ee6aefb6"],["/post/a10c77a7.html","0f09db79bb36f46a53d03bb35fa25394"],["/post/a708a60d.html","26600a9a7401c1d87c7263ffb665a9f3"],["/post/ad27c5a8.html","288efcba4541ce1a6a5c62953702166a"],["/post/b6c47025.html","2f99af2296346099c18a5dc8e6cf3d54"],["/post/bd69ba8b.html","7cc0d4b44bd9faa27833bd06d00ba0fe"],["/post/bf7f3b65.html","d014935e9155444706daaaae2cfdc9e6"],["/post/c3176455.html","548317f617260a01ba02e5c7de4db1e2"],["/post/cb80ff62.html","8cec66c613aff14626f51d7fa5a9b5c5"],["/post/ce0e685a.html","6b02b138ad09cd634699dcef06bfc573"],["/post/ceb39ac4.html","bb182e6027b623439f5dcf2ee19a6b2d"],["/post/cf413e35.html","6bbd2d1bd072f016400bf373c07aeacd"],["/post/d036071c.html","59868057a9e35f1d297d811f9d2b23cf"],["/post/d39191a5.html","bf4677fe6219fcf1917a97fc902934f7"],["/post/de3bac1b.html","cb348718764a23940b77bed379967ba1"],["/post/df879792.html","62f4ea966418a6b3db475f89c08e4c9c"],["/post/e008fc33.html","2f2d2e1fe2505adec5723deb44754218"],["/post/e19da94a.html","a747acfd27938984c0222ceeec218aed"],["/post/eb04e0a.html","5d8546f0be46b188caf8dd929cd19532"],["/post/ecd67acc.html","f982fa940f17ab648d3722c7633b31e4"],["/post/ee040603.html","49bb7c414b10a51188a60e5851c232e7"],["/post/f1601c3e.html","539ad78dc79073a0b5fc59c3a1b0deb1"],["/post/f31a5a5b.html","0a0e87c844d2a545e5a3d7d61e984532"],["/post/f5c535ea.html","c10b088bfbc22939c4888bb59ff70902"],["/post/f7500981.html","deff27b65d4e0314def15ada102f8e91"],["/post/f79807ee.html","80a0c5f66d8beca6d0b6a0c82edede30"],["/post/f7de8aa8.html","40775262da619da52e7825620deebb71"],["/post/f8239d66.html","34ac2e0162716f0ea3fa759d85877457"],["/post/f9f5e0c2.html","2bb7fb68c3dc2b3b14f52006169c0d4f"],["/post/fb77661f.html","28857eff37e39b752f829b190d2a199f"],["/post/fe1f88a1.html","99d103d0e57fa0bff6c732aa892a85f4"],["/post/fe57b0e4.html","76c584612ee4da5e0393bc74dc43e975"],["/post/fe816c3c.html","6ec4b5c817573b58fbc01def800ce226"],["/sw-register.js","c74c261c32f59e14d2dbcb4f2f26a102"],["/tags/Butterfly/index.html","6870a0a7a9f4a12a16d5a84a10ed7ca0"],["/tags/Hexo/index.html","b2eb7ddabaf51c5d9975e08c63766b77"],["/tags/JVM/index.html","c40c83320ea3d7fd38528c0fa037ad76"],["/tags/Linux/index.html","8e14b619e1088ac3f5001ddf1414e801"],["/tags/SSH/index.html","944624b1df4c46f6671d79e05487166a"],["/tags/index.html","1a82226b4d3260d169a64252e1c2a630"],["/tags/spring/index.html","2d430a997ca62c749e1b7f8a8fb6b90e"],["/tags/vue/index.html","fa374c83d617a8ab68f1447e60b42724"],["/tags/一问一答/index.html","f0726802a1cee484b0db1b4774cd4c32"],["/tags/个人见解/index.html","906d626545aa803a35e52a4cce3f9b93"],["/tags/大数据/index.html","d02b8f5e92adfbb58dd616ac9a5fe98b"],["/tags/大数据/page/2/index.html","ca56614870a782aa2648bfdcecdeb324"],["/tags/大数据/page/3/index.html","e1cb0daa306c3a931664790d2540a680"],["/tags/学习笔记/index.html","333cd7e49d877a41f144fc8d866c8e30"],["/tags/安装教程/index.html","c15d2b5071394ac0266faeb5b95f9577"],["/tags/实战/index.html","d85bee002ba41668c8dcc4e023ad322a"],["/tags/并发编程/index.html","498e73d322adaf6a9d3888e60c6eae1c"],["/tags/数据库设计/index.html","c06dd2db3d208ab3217e4fe06e5437ba"],["/tags/数据结构/index.html","3cbbe2ad265373c0abeae7eba1c83e2d"],["/tags/案例/index.html","b5ff347e7a1a8908edc6fd40fe595d3e"],["/tags/注解/index.html","b1f955535e9e50346ca9ee27e251cf9d"],["/tags/源码分析/index.html","c2962050f5ee1d67fe33bbb1b729bc7e"],["/tags/程序员/index.html","00e0c444e7b3a8ba9b1d38821aa5847b"],["/tags/笔记/index.html","65a6e5bb4bebabe65a1c7325a3f134ee"],["/tags/算法/index.html","7b8d0182b7d73c2cf1aa793e097d1326"],["/tags/设计模式/index.html","1d6304ff0f4e5d98bf016d6b8f5e9a96"],["/tags/设计模式/page/2/index.html","b638732f3331a59ec3fe7dfa491aee0e"],["/tags/设计模式/page/3/index.html","0419f88101e492457a741d71acef2f7e"],["/tags/软技能/index.html","1a3cbc143bfaa287d77b12359dd68074"],["/tags/软考/index.html","6cb435e51ff58771b5f58261c34a03ab"],["/talk/index.html","84a11ec1d6fa50750833627981ca81dd"]];
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
