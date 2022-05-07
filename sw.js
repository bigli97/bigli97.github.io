/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","688d4221f8190fe63692cc6506942958"],["/about/index.html","51411402d5eceef74d67e17095a0de17"],["/about/离职申请书.html","07e8277ba71056f7aaeee6715dacacf8"],["/archives/2020/07/index.html","20354b6c890e24a0a58e6c6e0191721d"],["/archives/2020/08/index.html","0527f50646b75de14c05a1a7516c7071"],["/archives/2020/08/page/2/index.html","6303b7fac72fa12dd491a3c5deda52dc"],["/archives/2020/08/page/3/index.html","13c9b26fa94049cf2b050c0dd7f92cb7"],["/archives/2020/09/index.html","47da3c876e7199a7b432e43e727ed017"],["/archives/2020/index.html","1a157859b7f2ccff4708a7c24431d9a1"],["/archives/2020/page/2/index.html","5f2867a77ba106b4ef95dace4c09b753"],["/archives/2020/page/3/index.html","f3d39fd03c9b4485fe0c75ee8467d5bf"],["/archives/2020/page/4/index.html","6b3a21f9d71426fe49e2999b4b86c62c"],["/archives/2021/03/index.html","f11622845ffb32a42182240286236125"],["/archives/2021/04/index.html","cde949f0f73bae82e435092bedc25900"],["/archives/2021/05/index.html","195d2979d703e789f5283a3ae0d043fe"],["/archives/2021/06/index.html","ef6595cc4d6afb916dfc2f58010766c4"],["/archives/2021/07/index.html","9a7e0966e49219a047533e1fc1877aba"],["/archives/2021/07/page/2/index.html","5ade9f784655afbcb4b9d36855145131"],["/archives/2021/07/page/3/index.html","04147856b717173dc632ab5a03a322fc"],["/archives/2021/08/index.html","5c88f15d647b83f1b3060ef5ddffa5a9"],["/archives/2021/09/index.html","f259c91b19ee31517d9e4c23d09153a5"],["/archives/2021/11/index.html","b88de5035274192df647a9841c623ad8"],["/archives/2021/12/index.html","b01027cf2f3eb510e27d35b397831551"],["/archives/2021/index.html","3f238441f98b479cb94b72c86fe29f56"],["/archives/2021/page/2/index.html","8798efa8085c34491c0462878a5ce2d0"],["/archives/2021/page/3/index.html","f1cf9023683d8f337067007be6774a3a"],["/archives/2021/page/4/index.html","a9cee4fe79d3ce14cf693b2e6a2a65b3"],["/archives/2021/page/5/index.html","37f190827712fb28f0484eeba259b6b3"],["/archives/2022/01/index.html","3ee5014862d361e887503ef34927646c"],["/archives/2022/03/index.html","9dfd0c0cddf7e156591281a4c5ed865f"],["/archives/2022/index.html","8ae5eea966e3c32e42d109877fcd8edf"],["/archives/index.html","b7ca9c203c3700c5e3ff425776e51f07"],["/archives/page/2/index.html","637a41e00cb0f7a571f892129641cef3"],["/archives/page/3/index.html","3a6d1ae013ea27e846f80006b57cc6d0"],["/archives/page/4/index.html","9e934baaa37069e5cb3b7fece31a4c5e"],["/archives/page/5/index.html","51cc2c2c2846a8da29bcea229058750c"],["/archives/page/6/index.html","f1c250cd2dcacb34693d70afdee34213"],["/archives/page/7/index.html","531bf888111300cdcb53989b85a871f0"],["/archives/page/8/index.html","cfb91da82fe8f854e9eac01949b9be70"],["/archives/page/9/index.html","5f180330caf8afe0cc84cdd00960570f"],["/bb/index.html","2492a0dab2cdd52937b0b6ad8b0b5cb1"],["/board/index.html","617e30230b715b22bb79c6fa9b1cadb1"],["/categories/Hexo/index.html","81f8ce91c4c489a16804d76373a71409"],["/categories/IT碎片/index.html","343ca327dcf8da2e5738ce9896f6e697"],["/categories/index.html","be78ddba7e81fb5eb993ce7d69d597b6"],["/categories/前端/index.html","7998136a0d0bae7311636239fc47bcbd"],["/categories/大数据/index.html","d348d927ce07cf3782068bc759e237c7"],["/categories/大数据/page/2/index.html","ca8787cd2300fdac54360b4394dfb2fd"],["/categories/学习笔记/index.html","e2beb43d39cf72a20457f0db7df33487"],["/categories/工作实战/index.html","461a114bbe26f3ec8bba13d986f701e5"],["/categories/开发手册/index.html","454e2409ebb3116ec8aea5a3cbfb0b2e"],["/categories/数据结构/index.html","643f1c1cfcb95879fe85a34370da796d"],["/categories/案例/index.html","0d911f1aed9d17a130c12130e52bf629"],["/categories/源码分析/index.html","e93677204c5fb6c08bee1a889a3cf8d6"],["/categories/设计模式/index.html","f7258e7911d828a96bbade5c5fd67655"],["/categories/设计模式/page/2/index.html","109c7826cb92fae4c13a2b04d39a15b5"],["/categories/设计模式/page/3/index.html","c3ae03ef2d4fb0d8924b8a6615b29db4"],["/categories/面试/index.html","2ac3b2029903ff74f9f7be5bd020d952"],["/categories/面试/page/2/index.html","f0206b121941f334474ff22e8ae84713"],["/categories/项目/index.html","4ae99a8be43f60e72eedeeac8b56e2aa"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","bbf850a36d9ab3bd7248bbf0056a9013"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","d4bac484f321cded4aac81fa2e42be27"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","a560a4847812a7dfb81f8f09f2e884f3"],["/page/10/index.html","04262405f2c4b77a20bc43250fa69dab"],["/page/11/index.html","2f1031ff15c83794f60908e3ce0f303c"],["/page/2/index.html","4bce654244208a67b7ec5a03f1064155"],["/page/3/index.html","7bc3141cd93214e3814bd63d659e4953"],["/page/4/index.html","024887ea59f51c29c926d8002381a114"],["/page/5/index.html","0bc09d4867d927b782cd94c0783ccdd8"],["/page/6/index.html","9878346065bd4552a0a5727cf3ade9eb"],["/page/7/index.html","ddae1e6ab87cd19764faa9205cfb83c8"],["/page/8/index.html","522864539dd22e03557e6ebb4275117c"],["/page/9/index.html","e6c019736e9ea60d231c50de81208500"],["/post/121bde1d.html","5d8b8a3bb2e08fd7c622bc70b4f63d2b"],["/post/153083dc.html","70095d2bfcbe85d4dde263a9796e3249"],["/post/164eee11.html","4aae0c3ef1f572ec25c13b2606b591f8"],["/post/1baa3967.html","7298dd91c69591323e5eacf0c0b51353"],["/post/1f4ac2fb.html","d8fe48d1e2713d8980cf991ddc30f34c"],["/post/22580020.html","d2ec870598b110f29035c1386448ba4b"],["/post/286296.html","e0ccbd01c5cc859f169708b842851a3b"],["/post/2cd418c2.html","cbd3f18bf37ef974b3c6aa93f3037657"],["/post/30cf0cd2.html","d78a634806ab57eaa7dee1fdd65152bf"],["/post/33cb1151.html","cc01d58f20cd2be842641d3e945090de"],["/post/34e57ffd.html","247aafb2aff6552fa13cffa77dac00ce"],["/post/3d20c1d7.html","508d7e1ff142cc8f1bfbcb0f1ad36bad"],["/post/3d24dcf9.html","7862bc5926004333356947a46af9c6fb"],["/post/3f6c447b.html","3834d4c46b6447a253d22e1be31a00aa"],["/post/490cdff9.html","a13ab05134edb583aba724701610e7d2"],["/post/4a1111be.html","bccc04da8eaddaecbe8ee27231e3af14"],["/post/4fa8e0c4.html","110a42d9398c66a2a4e8719035610000"],["/post/524e74d7.html","d68baea6f34d845db23ee6136b6ede5b"],["/post/539343bf.html","9a6b0c62cb8a9a3e98b6ef9d652b318f"],["/post/54788f73.html","cb8395667d5c2115af5adb3acb89ffc1"],["/post/563268dc.html","11fdb9add78c25bb3a6689f06067768a"],["/post/5ac88c70.html","2a1057fee5be25922199b45592de4363"],["/post/5bf55f4.html","c31439b5712d283a57fb884d290bf72e"],["/post/5e87465f.html","21edcd003ac7b411b2d5e8c9e23259e9"],["/post/6016428b.html","ca2e9af8a771cc08189e381401622a73"],["/post/6208627e.html","01da96864127cb15c6d96b92fb506270"],["/post/64b51ed9.html","3e7467cdadcc93b4ba34ae7409296b1b"],["/post/659da5b.html","2ac442f2b45587d585db5f3bd4071344"],["/post/6c429b75.html","2c7aba15cd2204cae5be51d217b0a61f"],["/post/721d4875.html","e4208830c9fc27e82e05f811eeec1c8e"],["/post/72e3b671.html","69bfc6377de761bcce221e7c232c13ed"],["/post/730d8d6c.html","d873c08e9dc4a8a832fa030875a9c530"],["/post/74fc969.html","02bc744387f9556890800f5f0f911572"],["/post/78134e07.html","fefefe0edc88975562dea8cbfc9328ab"],["/post/78c07335.html","10cafe346865e8672da7a5f3ea60982e"],["/post/7901ad89.html","246d67a57a2f743950e71ee479022220"],["/post/7b216a3b.html","642bf92c3f90ee517cfd50639f950230"],["/post/7b510e10.html","440c7aadd08da552a094cb8a928ffd9b"],["/post/7db2942d.html","6ad3768276578e9ef1ca54ef3975e153"],["/post/7e6c6990.html","c003f248511457334b7c879d6c8f2a0d"],["/post/7fa79d96.html","5d760b455c188961f021a3159694af45"],["/post/855673ad.html","5a53d406904527981a2d8bf4b27097bb"],["/post/892a2328.html","f5465944a2e119ee02047ef80e6cdd0c"],["/post/8acb1976.html","c8fb13355b293dd1be3b6a740dab5990"],["/post/8e4fa41e.html","c4ef344197f5abe3b61f2cfcee461af2"],["/post/8f488ef0.html","58cdcb46fa470bc75e165fd2d5926765"],["/post/8ff08e27.html","d115cd66b17abce0613af220c461f12c"],["/post/9055d217.html","bc1703760e7ce69305ba5aeb83d7f0de"],["/post/91ad9ce3.html","7faba68db970ca4b5b50cc43bcf0fdaf"],["/post/96131cab.html","e45ff5a68e6965be7141570ca0327401"],["/post/96b5906.html","7812257aa48386cc4966c2ae4b5e0ae6"],["/post/970fcca5.html","22f22d340202a0a5170e7605b7767ccb"],["/post/9a246216.html","5bf95f2a14640c5e2d8ae6d7d9f35862"],["/post/a10c77a7.html","13db883c1ccaf48b23fe8ee6397e5c71"],["/post/a708a60d.html","079117a3f593dad9a9ef81b30da8fd18"],["/post/ad27c5a8.html","4506a1b6b0bae8955938ad3c77f43406"],["/post/b6c47025.html","1353de394d26967d3aa64f773bb8b39d"],["/post/bd69ba8b.html","24596412c37f38d414af1f00fb625718"],["/post/bf7f3b65.html","6eea6711e21154b5176956a9964e9af8"],["/post/c3176455.html","113d2e7c79cf8e9bbfc80e190c7ce712"],["/post/cb80ff62.html","7631a5c4f7d855d74ee2367bb9dc628c"],["/post/ce0e685a.html","8897c0e38f3b8d11e88aba6dc148d58e"],["/post/ceb39ac4.html","0a8c2012963b8746733f7dc345ec7a4f"],["/post/cf413e35.html","9e3b21f80a928b8c703ac79f954d5670"],["/post/d036071c.html","5d160c919c50115a36393be03d358454"],["/post/de3bac1b.html","07715e04ba2815a20ffe1c9db835f68a"],["/post/df879792.html","96f8fa0beac7c17c139f36a2371f162e"],["/post/e008fc33.html","b2885212731223e6e1d3aef33a93cbb1"],["/post/e19da94a.html","249b9f5f0a81704008408fc54a71e168"],["/post/eb04e0a.html","20968dbbf53425ca9c7132f0d1cbb161"],["/post/ecd67acc.html","9a492db9d9188b918263652ce1dbde3b"],["/post/ee040603.html","c62f447c3bcb61733847ff8f65f86071"],["/post/f1601c3e.html","a440a43440b8a24b1f544a0dda4fb49d"],["/post/f31a5a5b.html","68ef47edff61ce199194a5c8195a084b"],["/post/f5c535ea.html","9f7ddf7df4bb1e6778c0c737b55929ee"],["/post/f7500981.html","38c42c398f539202a6b808ccddd055d4"],["/post/f79807ee.html","9a3338da42ec84f001afc76161f23b59"],["/post/f7de8aa8.html","f9c325e81b85d3b4d3eb14b532b3b351"],["/post/f8239d66.html","5ed16f3cc6f2d8b60066e117aca9736a"],["/post/f9f5e0c2.html","26aef78eb82106ef3f920e93a9d13b7a"],["/post/fb77661f.html","671105466ba5d6ac8d193ee7e95b478a"],["/post/fe1f88a1.html","7c14d7b33a6d2b17796833ddd8f659ff"],["/post/fe57b0e4.html","8b0acbf791042d0d559f2fb0e3053a2a"],["/post/fe816c3c.html","eabba3d9204652ad51a2d7d102e8cdf0"],["/sw-register.js","9044e9c3e41ffd1558a4ad0e1b903a70"],["/tags/Butterfly/index.html","287989e9f5a92f73fcd6452f9b06be5d"],["/tags/Hexo/index.html","474cc1492ae9c2520198d20b6b9a2b33"],["/tags/JVM/index.html","b4dc07f0a440699fcd15b6d9752e3727"],["/tags/Linux/index.html","0471122faf54753f9de4c9d0c5ef2b42"],["/tags/SSH/index.html","3d76e0445f24b566e8df0c48b0cc3aab"],["/tags/index.html","35f145af7c33a3656dec1f20a7dbb2bd"],["/tags/spring/index.html","76729673453b9d8806274680ceb4d574"],["/tags/vue/index.html","dc8c27a6c37807199a98b80488a9e0a2"],["/tags/一问一答/index.html","bafd8a89aef526305d708cf68e406246"],["/tags/个人见解/index.html","8ad0f8eae1c803eb0cdf6611c22f874a"],["/tags/大数据/index.html","a2a7a214ad139697840e48caef20854a"],["/tags/大数据/page/2/index.html","917daaeb38b1cbfcada050f7127c1b12"],["/tags/大数据/page/3/index.html","3d69a3eac6c063203d85d9494ef8da9d"],["/tags/学习笔记/index.html","9bbe60a27df2ee06d3ca5af93a84217f"],["/tags/安装教程/index.html","78189633e67dc30735b1c4c09fa74c37"],["/tags/实战/index.html","99386ad1fb700fb26000bcb303d818b2"],["/tags/并发编程/index.html","439d13eb33b77fc4804294ad1e1d7b9e"],["/tags/数据库设计/index.html","2301910a33455c9b69ca8c4017d40ec3"],["/tags/数据结构/index.html","d7997e90b7f0f7b434e4f7e16fc77f53"],["/tags/案例/index.html","0eea41c0541d664fc2e0d32aeef6c8e8"],["/tags/注解/index.html","815a19b5a6b04b7f8461e802081731a3"],["/tags/源码分析/index.html","31b6802bc3a4d15938e021b86b295035"],["/tags/程序员/index.html","323e42c51843bac20294dffa2dc32a3b"],["/tags/笔记/index.html","8f483dd1129daad5775679ec20a6fd78"],["/tags/算法/index.html","64ac6a195a270b4eff91625f0d1bbc16"],["/tags/设计模式/index.html","41a28a4f1b35c9bc07ac7731e1b7b2a2"],["/tags/设计模式/page/2/index.html","dfcc117156a8b3820546ebddef56fc6c"],["/tags/设计模式/page/3/index.html","40d3df33cfc05baf876760252bdd7632"],["/tags/软技能/index.html","51f3caa9352b38e61ac79532d2daabfb"],["/tags/软考/index.html","9e759fe36161b1e59caad9c00cca857b"],["/talk/index.html","94a46cbd47a2f01642c8d611c6ad0a27"]];
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
