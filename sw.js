/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","73914c482319e93a9e3869f05495d041"],["/about/离职申请书.html","2e6b4ae8bb36071011316fb87e2913bd"],["/archives/2020/07/index.html","eb42019345b55a45e6c1fc2e34193a8e"],["/archives/2020/08/index.html","9252c00d1c81912885187e1bbc4f22d8"],["/archives/2020/08/page/2/index.html","bc6f066b678b5d2c209f9af1b0d55df0"],["/archives/2020/08/page/3/index.html","7e2c52984c3dc6326beb08beacfce81e"],["/archives/2020/09/index.html","0ad7f2be915c63900bdac9ff285a6dd4"],["/archives/2020/index.html","38ae5e68ccfd376833d48966c8a1b26c"],["/archives/2020/page/2/index.html","e65815fa65901d8c3d62ac0b0bac7660"],["/archives/2020/page/3/index.html","07571e6a140ed0def1e608494e29f4bf"],["/archives/2020/page/4/index.html","fa32954027942e62f414e5a0254a88ef"],["/archives/2021/03/index.html","e476fb504fc128778d656aee3a334038"],["/archives/2021/04/index.html","f081b9c4c6a192f9b851af890a955dfd"],["/archives/2021/05/index.html","a5d091a628806eeb203784d26cff860c"],["/archives/2021/06/index.html","07a51be8f8998e6b5f08c634379cf6fd"],["/archives/2021/07/index.html","9078c2cf8cc342f1e61ab8991afe9662"],["/archives/2021/07/page/2/index.html","ab6fe506222f5716195b33195b83a03b"],["/archives/2021/07/page/3/index.html","07bea424b1ad014fac86ee11ae27f4f1"],["/archives/2021/08/index.html","e0f37d9afa1c735210db835ab2ce6dda"],["/archives/2021/09/index.html","3f75ee7f7471bcac2f8da29308c05dc1"],["/archives/2021/11/index.html","ec63add67dedab38598dbadf3b980018"],["/archives/2021/12/index.html","628c75047dc1ee66bf866b740f70af84"],["/archives/2021/index.html","88923c8e8d4643a7f58454da5257c3cf"],["/archives/2021/page/2/index.html","a0b2cdca68ab10b9d88cd26667e02609"],["/archives/2021/page/3/index.html","cbd5e4f5fd50adf69a89b03ae8b991ac"],["/archives/2021/page/4/index.html","a6d441b04af801630e9a433a7dc61b89"],["/archives/2021/page/5/index.html","57806148cc356e171d044a554b9ed09f"],["/archives/2022/01/index.html","8b86bc359967f65617ef6637fe3dfdfb"],["/archives/2022/03/index.html","c81babfecffb1b35c29969f850b45c92"],["/archives/2022/08/index.html","38f62cb1ad35320eca31559d9e4aea04"],["/archives/2022/11/index.html","c0c46760dd0bb8e0f4fa9a9a35aa474d"],["/archives/2022/index.html","1afa708bea55683c4f655d12f9b9e7c0"],["/archives/2023/02/index.html","7aee253ea8cdd9dbc206a9c3b344af6e"],["/archives/2023/03/index.html","3b5c402b9c317144f03986200d1440eb"],["/archives/2023/index.html","381b78d6b9307d0cad90df48ba4f4cc2"],["/archives/index.html","16702b3267a65d08047aa76ffab0d79c"],["/archives/page/2/index.html","848756abe4a406d7a30d42945fe9d6be"],["/archives/page/3/index.html","073d937fa40e6e111661c55a6b0630b5"],["/archives/page/4/index.html","3aaaaa65fd417a1b40e4a8a7feaca3c2"],["/archives/page/5/index.html","e6d0b6775923795d511aabd9a2e3b615"],["/archives/page/6/index.html","75c99cefbf8bedb92f8ea8d1b65032c5"],["/archives/page/7/index.html","a4f3464ea882779fa47569dafc7a0d5a"],["/archives/page/8/index.html","021631228c1aced932acd9b86689273f"],["/archives/page/9/index.html","20e0011118d522d54a9d12e26df009d5"],["/bb/index.html","3bc363fce667b83811fab0c297c1332b"],["/board/index.html","0e736622a2f9fcc907f1536fa8598e0b"],["/categories/Hexo/index.html","5db14e3cfce2f09cb3d5651368207576"],["/categories/IT碎片/index.html","ef07dd2e2d48f2be02cf2c92fa2cc209"],["/categories/index.html","96225da3eed9ace2cea401f1c4a7fa2a"],["/categories/前端/index.html","cb556019b34a6b5047bb51b7bf0eb846"],["/categories/大数据/index.html","e1c8245aac6ab2b957878bf76be51f1d"],["/categories/大数据/page/2/index.html","a6b467ce7abafb5beb1d84295004e740"],["/categories/学习笔记/index.html","a6e3207afbac665af8f0403dcf1606ab"],["/categories/工作实战/index.html","f2544dd0203f5cdb1619d134af7d9c82"],["/categories/开发手册/index.html","3fb18076fe9f3ac16932bb6ef7d2cc39"],["/categories/数据结构/index.html","56ca9a6ef0373632e8ecd08641237655"],["/categories/案例/index.html","ae2ede13bdfe7aa339804f6f7b353db9"],["/categories/源码分析/index.html","5ecc76190fda96d85bd050db8bebed6d"],["/categories/设计模式/index.html","f738d3ec102459a14a25b022124a9611"],["/categories/设计模式/page/2/index.html","aa046e35a9e9d4f8b3f185fed9a3172b"],["/categories/设计模式/page/3/index.html","b50977dd8d754dd1affde66b4a5cc413"],["/categories/面试/index.html","1a3450e80eecbe74fbd7e7b2ae97cc98"],["/categories/项目/index.html","a4b5030ad6921fe748608553d27397d3"],["/categories/高级/index.html","456344f1ff9ce59387d5f6d95f9a89c0"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","5833a50dded75e3d28b7686181919ccd"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","1df1cda2abc11da2a790d3a920d27565"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","81cb4509d97bcae1c3d84c2a3bbdca3e"],["/page/10/index.html","aad60e6cccb7ca71f5da0ab846e7c908"],["/page/11/index.html","3e10460e443841e022f95982413c5943"],["/page/2/index.html","36601c767f5d674285b69d3602419cec"],["/page/3/index.html","407e8680b2f907f51796dd7f123314bb"],["/page/4/index.html","54a8223bd6c9fc52f57432f5fe5f365a"],["/page/5/index.html","d1780aabadf25ca1a78aa70dc46fcc70"],["/page/6/index.html","750dd0c208547874a9a0d1a1232474d2"],["/page/7/index.html","70c8f07a310777c482fcebd6caea00b6"],["/page/8/index.html","9c26db62d5f8fd2524e80694deabb3a7"],["/page/9/index.html","cee75afb1029ae17f5e472b669342e60"],["/post/121bde1d.html","0af5366d75c5e300102757d080f55fda"],["/post/153083dc.html","f7e87d1c6738f40a920ed80a172bf661"],["/post/164eee11.html","f3d2d48be871492e88b33963c2ca6290"],["/post/1a7b7abf.html","13fcaef893fa4ffaf6ea8a72e23a39d7"],["/post/1baa3967.html","43a970874de0e7e49ba5bd5cf3587b06"],["/post/1f4ac2fb.html","578087a127f3732991fbe9f2b7a0ab26"],["/post/22580020.html","493167ba26563a64bf71605c4f31f8b5"],["/post/286296.html","47fd7e7eefe4a6ec96896330fb0e854f"],["/post/2cd418c2.html","d8463e85fa58b9a7e3ee6de0827c0dd6"],["/post/30cf0cd2.html","59f9be7dfe07313b72b698232a1875d9"],["/post/317f8360.html","e0158f2a7da249142361c4726f921387"],["/post/33cb1151.html","52c76fadb94f33002001f85957349b7f"],["/post/34e57ffd.html","540e9faa0523a98a60bc1cf172bc0d91"],["/post/3d20c1d7.html","8c8eb9bc630111d890d722e98014be81"],["/post/3d24dcf9.html","ffddf53695a557bb5512be539230aca1"],["/post/3f6c447b.html","4d66fbe37b8d3c6d9e670c866631fe02"],["/post/490cdff9.html","5a758c556da991addf11558e199629a9"],["/post/4a1111be.html","094b66ab2d35a8eb7c970c0ef92767d0"],["/post/4fa8e0c4.html","cdef5f054195497c7ab2bf76cb807b61"],["/post/524e74d7.html","14c9321eb64f08efcf4a6d8620e53885"],["/post/539343bf.html","227915cd24a49c406dfa85b28f47d006"],["/post/54788f73.html","5b998867eb2e835b0febceeec6e04cbe"],["/post/563268dc.html","064311a6ed011042eaa001c552f92c64"],["/post/5ac88c70.html","caa0d6672fb8f63bcbc5dac4a56dc5ee"],["/post/5bf55f4.html","4c4b2af3d1e54c572a084ab5b2c78ad0"],["/post/5e87465f.html","a4c81bee6548bf78ef10ad330a8e36ff"],["/post/6016428b.html","dd451090899dd88e0cffe7527dc2a10b"],["/post/6208627e.html","0e39821cdfbef0908881ab0f0b57b724"],["/post/64b51ed9.html","26a38531ee39266156db2976f179be4f"],["/post/659da5b.html","9a606d3da4259f2d71dcb11f2f92dbaf"],["/post/6c429b75.html","875925cee7ab620bd6ec4278170f6f0a"],["/post/721d4875.html","a076dbef00c5a0864af23cb52399a290"],["/post/72e3b671.html","b0f862b26e8d6088949a74f8f19ae9ba"],["/post/730d8d6c.html","b4c1aad36cc792be6b4d918c4bab6b99"],["/post/74fc969.html","669f4e8f9c32919bc7179650dc9d7910"],["/post/78134e07.html","4474561af540121314124fc489bc7747"],["/post/78c07335.html","af5cc89cbe128dcda821d1bef614b53b"],["/post/7901ad89.html","379dbd6fa926ec1125604190494c58ff"],["/post/7a2a0c9f.html","7656d863c509ab3cf9c6a5d6d7125190"],["/post/7b216a3b.html","3c7f52ccda0527991d1fe3edd09020dd"],["/post/7b510e10.html","4d27df76d63978ed28ef0652becbc87d"],["/post/7db2942d.html","0cdadd87b64bf13a3a81088fd6eba23a"],["/post/7e6c6990.html","e955aa79aba948dc9680969750772194"],["/post/7fa79d96.html","5fe6aefd39e6c73aae0e5f8b6230ab03"],["/post/855673ad.html","e2d65faec37047c60dbfc27e5aca7380"],["/post/892a2328.html","ec950ca3c37a0ef0b6102ff9098ef339"],["/post/8acb1976.html","b2d0570057c65daa3656f29fd28324bd"],["/post/8e4fa41e.html","3ac290030b3c3a14dc45151f06520136"],["/post/8f488ef0.html","5b29b006691180a77c82939054e39846"],["/post/8ff08e27.html","991ecf96e61af5d8e2482209fd17cfed"],["/post/9055d217.html","93fe16b60a475ab513a5c2a6d31e2330"],["/post/91ad9ce3.html","8749322f036d13701422bd70c59edc93"],["/post/96131cab.html","5b9af1c5431d2eb55d3fcaf517e95174"],["/post/96b5906.html","24d7a4ab25de7ee26da3ee8822db8ac4"],["/post/970fcca5.html","6d46647f0ec5d28a72ee9e12f068947f"],["/post/9a246216.html","16f52c4a51fee29feac9ac3756b0b19e"],["/post/a10c77a7.html","c0214ca9f876c29454303abdd407f2a4"],["/post/a708a60d.html","d22b2e3206151cc0e1cb62d8ee4e7aea"],["/post/ad27c5a8.html","fee10abfc8343063232ad8fffd1885a5"],["/post/b6c47025.html","66cff3cf7add5466fa382364fc1666a9"],["/post/bd69ba8b.html","c83a67e9b773f2ff7dfbfe56387aba23"],["/post/bf7f3b65.html","d014935e9155444706daaaae2cfdc9e6"],["/post/c3176455.html","3ba4dfd7072324738a1663ea8fb11035"],["/post/cb80ff62.html","92525de094d58530df27684b9d5791ee"],["/post/ce0e685a.html","263a80732edb802bab81be4b95fc6431"],["/post/ceb39ac4.html","85421a0f2ed232073264e5ddb5c5a10a"],["/post/cf413e35.html","38bc61ef025e3e51fdd296d148777529"],["/post/d036071c.html","0e114cce2403dd759ad6c9b3f5cd0403"],["/post/d39191a5.html","1d24c9386d9b0a98f06526fb0546921f"],["/post/de3bac1b.html","cb348718764a23940b77bed379967ba1"],["/post/df879792.html","62f4ea966418a6b3db475f89c08e4c9c"],["/post/e008fc33.html","3ae118deeaafcc0b05117fb57edd7f9f"],["/post/e19da94a.html","0afd2be98917917d060c774ee0bcf654"],["/post/eb04e0a.html","994e0bcaff18d54cb18d811c6800e806"],["/post/ecd67acc.html","f19c889090133b749df245bb3305b107"],["/post/ee040603.html","49bb7c414b10a51188a60e5851c232e7"],["/post/f1601c3e.html","539ad78dc79073a0b5fc59c3a1b0deb1"],["/post/f31a5a5b.html","0a0e87c844d2a545e5a3d7d61e984532"],["/post/f5c535ea.html","52dc7c6c4d8f605d976ea79528cd69ee"],["/post/f7500981.html","deff27b65d4e0314def15ada102f8e91"],["/post/f79807ee.html","80a0c5f66d8beca6d0b6a0c82edede30"],["/post/f7de8aa8.html","798dc5b8bee5b2b51ca1a400042c2a19"],["/post/f8239d66.html","934048b5398afdb7011674e344fd21b7"],["/post/f9f5e0c2.html","c894d0a83f68d266cd67ded19f50a1ec"],["/post/fb77661f.html","e1e43080ff6266d31f20b3920fc6caea"],["/post/fe1f88a1.html","16fd4b789dec6ac416314ff879652b88"],["/post/fe57b0e4.html","0b7fc0e086713d1c8a8c3998bfe52486"],["/post/fe816c3c.html","5721cb96ee304017338c615db9a4d215"],["/sw-register.js","7b658b35ba1ba3a1c1ef6d254743e650"],["/tags/Butterfly/index.html","1d65eba87fd9d3f31c4ee50b0d7b563f"],["/tags/Hexo/index.html","7d4ec0f8a6c09bf4dc485a4313892ebb"],["/tags/JVM/index.html","3dd622936e656b644f8bacc11dd04b95"],["/tags/Linux/index.html","b4581a22934b984c0ba034894ad837bd"],["/tags/SSH/index.html","ebdf91a0bc340ae24b36907f50f389b5"],["/tags/index.html","c5af9b9740cd43ce5bf90b887325f45f"],["/tags/spring/index.html","c0265d90a6e74cd6cc3f0bfdd91221f2"],["/tags/vue/index.html","80f4922571b76e039d5e5e14a515076e"],["/tags/一问一答/index.html","5fa1238ef344dee1e54dc8dd875a1a3c"],["/tags/个人见解/index.html","099881c1ca5757f326af417a96bf5be9"],["/tags/大数据/index.html","6d6e39ebef55f22274f9598e99de66f4"],["/tags/大数据/page/2/index.html","fc6f0d1f25a6ffdf23b08849f849fdde"],["/tags/大数据/page/3/index.html","06a6fc93bad539d84854d9ac51e483ce"],["/tags/学习笔记/index.html","bcdfa79b26c6ffe392a394e624ed90f6"],["/tags/安装教程/index.html","2ee0667d3e5993037ef60d02b0a5a239"],["/tags/实战/index.html","256eb9aee6a073336d05ba987645eb3e"],["/tags/并发编程/index.html","503060ed93e5130ef7d9c9975682e3ed"],["/tags/数据库设计/index.html","c81f437c19396bdfcabff8df3878d401"],["/tags/数据结构/index.html","3b954c9ad9b70ce92e6f1a4d9e6f6011"],["/tags/案例/index.html","d3e7af6d4c691294d25c6f6d1abee7c0"],["/tags/注解/index.html","2869f652ffe8fdeaa34d98726a087b2d"],["/tags/源码分析/index.html","291d128e6e16f3d212abeb1108e78ea3"],["/tags/程序员/index.html","a183e4bb7c04ea50f7c2918be2c44401"],["/tags/笔记/index.html","cecba4428159b3261e808aad253b726b"],["/tags/算法/index.html","d5a75dbe9e071095c98d3462cb924c15"],["/tags/设计模式/index.html","dd4869bdc02938b99e49e534d4bdc0e5"],["/tags/设计模式/page/2/index.html","83318bfa72396372174e77e64170c94a"],["/tags/设计模式/page/3/index.html","a24eeebb703cfc6cf235113795f98f23"],["/tags/软技能/index.html","6f05653beb07047ffd23a665cc093d3a"],["/tags/软考/index.html","49aed905fc06269123289656c3dd6e6b"],["/talk/index.html","076950efbc7a28f3bb0ef5152272153e"]];
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
