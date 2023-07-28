/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","73914c482319e93a9e3869f05495d041"],["/about/离职申请书.html","18c4d13e2fc4efad20cb8db260b48f5f"],["/archives/2020/07/index.html","04b28cfc4d7fdbf2071617757aba9bec"],["/archives/2020/08/index.html","cafff88d7e11b8e5e9fe5568f3d2767b"],["/archives/2020/08/page/2/index.html","33aea17f6f1ff3f8582bf14560e10003"],["/archives/2020/08/page/3/index.html","9cf922ebb7b49236e018da702ea758a1"],["/archives/2020/09/index.html","a3c8eec2c96b45425e7defc0cc19a0b9"],["/archives/2020/index.html","f90143cf92b8a960af0928cf4db1970d"],["/archives/2020/page/2/index.html","c61cb1358e4b7616ab63dce63f7f7c4e"],["/archives/2020/page/3/index.html","65ee9f3b3339e514eb801d50bffb9d05"],["/archives/2020/page/4/index.html","5f77abf4fdd1a4469455e8685a7884be"],["/archives/2021/03/index.html","985d7ef91de4ccb6afa6667eff4cb3de"],["/archives/2021/04/index.html","6ef079e250d41a8c3a01a9e4da3b6359"],["/archives/2021/05/index.html","956d28a0191c2e36a44e26fdf36bd57e"],["/archives/2021/06/index.html","0d896bf6b126d5b05359d7cce77b2742"],["/archives/2021/07/index.html","f6424766eeea899e916fb64afcdc5d81"],["/archives/2021/07/page/2/index.html","d547bc06c3474c2735ee06dede589fa2"],["/archives/2021/07/page/3/index.html","05761ac7e57d2b067eb9683ae50b0ae3"],["/archives/2021/08/index.html","7c669ec7a0bc43b1f6256801c77bd8ca"],["/archives/2021/09/index.html","5cc373767d000971b9ab9abbcfbd0065"],["/archives/2021/11/index.html","9f327138f76ef5fd398a6bd603a4ec94"],["/archives/2021/12/index.html","46978115d552e6e4093ab4d5a6b22293"],["/archives/2021/index.html","a9d4cd1dc53cfc2860dbb579e6aa235c"],["/archives/2021/page/2/index.html","423d2597555fc07694f4fcc05234b0a9"],["/archives/2021/page/3/index.html","8dbd3ebcf10c9b92d63068d3ad82e525"],["/archives/2021/page/4/index.html","80f8d5838aa5464b7472ecbcf484760e"],["/archives/2021/page/5/index.html","8ac97bafc03fedfb9d98b838b656f659"],["/archives/2022/01/index.html","19341a553164fdde01e4eb66438a8e5a"],["/archives/2022/03/index.html","e4bd5e5e9148391bee165d678849309c"],["/archives/2022/08/index.html","5de71bd15be9b597bcf6f741e11ff868"],["/archives/2022/11/index.html","014f5ada093293b73ebd771078e08888"],["/archives/2022/index.html","2092fae59d9c1fa7b1a8c1551858a87b"],["/archives/2023/02/index.html","a7df3c3557bfd1c8c5f13699cdec19a2"],["/archives/2023/03/index.html","6b0d04b237b4adc1f6cd222a23efdd7b"],["/archives/2023/index.html","516a85872b448befe27815782f9858fa"],["/archives/index.html","1f5e3500ec556c378460c8f89086c8bc"],["/archives/page/2/index.html","56d55e0dab0e89673de0660df29126be"],["/archives/page/3/index.html","fd62b82be79ea77dc03ae24198593298"],["/archives/page/4/index.html","67318134c125f290933625b8c4ef33be"],["/archives/page/5/index.html","7220e62eac1bea4766377327b4868003"],["/archives/page/6/index.html","c3e8abc4e9c98804f89a7b87f841f99a"],["/archives/page/7/index.html","82cb55cb38fb20897398c36d7f3ccb33"],["/archives/page/8/index.html","b5153b35537e8ce8f126929c6b1aa56e"],["/archives/page/9/index.html","90820f9286c102c6d9b93c3c085b9466"],["/bb/index.html","be5663631224c76e9b4cfabe590f79a8"],["/board/index.html","709a1fa2d95433b6b48e524c4b667860"],["/categories/Hexo/index.html","dc4417627762f0cc1949165488c8c1ab"],["/categories/IT碎片/index.html","628f3b9c46bbfa697140807607cb8329"],["/categories/index.html","96225da3eed9ace2cea401f1c4a7fa2a"],["/categories/前端/index.html","afdd7f567894652dece83cb245db89dd"],["/categories/大数据/index.html","d259c43fa2b144af9e48ef954791b6e2"],["/categories/大数据/page/2/index.html","38832c9d889a01d9fb99f2436899c785"],["/categories/学习笔记/index.html","64da1d1527b7d5c530371f861510bbdd"],["/categories/工作实战/index.html","da354cb6e92a8cb587f3013d04969092"],["/categories/开发手册/index.html","c3c5373f3ef51111fd78659bbed02fea"],["/categories/数据结构/index.html","032ae3edca243ce79000e3bfd78d6c1f"],["/categories/案例/index.html","03d08fa9e62c9a9e27be05e525d52fbe"],["/categories/源码分析/index.html","abc41668729424d87415ce9782fc332f"],["/categories/设计模式/index.html","06c3c33b3197be448287dda955da8e90"],["/categories/设计模式/page/2/index.html","06dcb7dcde2ef585ead6aa8005069f11"],["/categories/设计模式/page/3/index.html","ca3a66c65452d8fb26246eda2f6ff442"],["/categories/面试/index.html","fb818f9950a497a40be41a6149c3e9a5"],["/categories/项目/index.html","8b08374c5d157233180edf054b542095"],["/categories/高级/index.html","b8f9588a5b42f229d3c336e852f8cb7a"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","3e5636079e1f46998f6cc36ef2a48922"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","ce3fd81b6061486ebada86907df24b16"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","ccd369e5bdb534a34ba36d978ef03e9b"],["/page/10/index.html","c081a90be7b3b5822b03699fec8f31cd"],["/page/11/index.html","4a6090fbb5ed32c5e910ad0bafa47fd9"],["/page/2/index.html","954fae4b9880adc6080cf1e01003085c"],["/page/3/index.html","157a1133a622ada86c7544fe0e04c042"],["/page/4/index.html","256161f5f8f60f791b576596c2f195ec"],["/page/5/index.html","4de22bd0ad6e32129e5ecc81028da1f6"],["/page/6/index.html","0cf75cf14ffdf315d3c284489265d1a9"],["/page/7/index.html","de575af8c639f8d9c549a754f1d653db"],["/page/8/index.html","dcf3187b76e29824c508ff12989bd7d5"],["/page/9/index.html","9d743082593f40b57fdd6f02b1238088"],["/post/121bde1d.html","221826f82ff4e027e64caf20a568dc8b"],["/post/153083dc.html","38747f66cd27cdf8c25a4d78754aef55"],["/post/164eee11.html","f3d2d48be871492e88b33963c2ca6290"],["/post/1a7b7abf.html","1209fe5a3b8c3401a976b44345c46e9d"],["/post/1baa3967.html","1372564f7950b54c7885734a2c06a7fe"],["/post/1f4ac2fb.html","2bb27d265eac6bfef879927fbf94db5e"],["/post/22580020.html","3aa1a05f8869c1f1f5968da86c022b6d"],["/post/286296.html","d10690db8736777f7ccea506236e9571"],["/post/2cd418c2.html","0a7156a84d354574b8d8eb6d7bfc9bb3"],["/post/30cf0cd2.html","afbaceb8674269d7310669f477336964"],["/post/317f8360.html","e0158f2a7da249142361c4726f921387"],["/post/33cb1151.html","8bdf1f05c38ca6c1464f867c98f10d18"],["/post/34e57ffd.html","540e9faa0523a98a60bc1cf172bc0d91"],["/post/3d20c1d7.html","d3f2a960736708af3e0cc60569dcc4d4"],["/post/3d24dcf9.html","93e01a4dabf87e8aac4a0998d911510c"],["/post/3f6c447b.html","d7f2ef97825bd9d403400ba4e1114c35"],["/post/490cdff9.html","914e3ba301a88d37b79848a749e9f9d8"],["/post/4a1111be.html","350024c8ba4a7e9fc0e81016cd08125f"],["/post/4fa8e0c4.html","dd6fbf7f6535dc00510da2bff7a06b78"],["/post/524e74d7.html","f91c21f6f003410fa34de5daeeb0720b"],["/post/539343bf.html","b0b57d63719d13bd2d013ce2e44d67e3"],["/post/54788f73.html","eeac6ab59fec40cda9b25c38e2621073"],["/post/563268dc.html","0b227183e7c5fc566f91296254972b57"],["/post/5ac88c70.html","4a0bf7ab730c05124fa9d0dc98b50485"],["/post/5bf55f4.html","3ac89b0a19a151dd16dde9c2ddf59dff"],["/post/5e87465f.html","d83d1fc3d8594f5b737abb3e6cf5f4c8"],["/post/6016428b.html","2666e8adb514640351754f4f30b48c9a"],["/post/6208627e.html","ab53994b08d31156e1ba7db77473c255"],["/post/64b51ed9.html","43403b57050cacff8150b8532b5e990d"],["/post/659da5b.html","3d0a8717ff5da67eef2787686a026570"],["/post/6c429b75.html","024fb3dcb738e436f21854c8f47431d7"],["/post/721d4875.html","e4341fa2d49f7753524e07baba485cdf"],["/post/72e3b671.html","abb9fc43709b534c411a11f04a6bf61d"],["/post/730d8d6c.html","870b12a1f6a8939c5aadf556aca34a0b"],["/post/74fc969.html","83b639bad2a7acd33ab00d61ee903505"],["/post/78134e07.html","83d661bdbe8f6a70e04dbb0c150f4176"],["/post/78c07335.html","acddb74c1a8b5e44d5f4279a984406ad"],["/post/7901ad89.html","313b29488c927cf8caeb3f9b0fe247d7"],["/post/7a2a0c9f.html","7656d863c509ab3cf9c6a5d6d7125190"],["/post/7b216a3b.html","c8b4a9163bb51ab4bc05c348b13e37bd"],["/post/7b510e10.html","1c1a7d584b72166496c50ab7f075801a"],["/post/7db2942d.html","1709e432ce3d5b98ebe6954dfc87fbd1"],["/post/7e6c6990.html","14c31d6f5c1cfb099d2d911385657e85"],["/post/7fa79d96.html","af9d277ebd3c2a0570d8535397779a20"],["/post/855673ad.html","88a6d3d60db78c10f50b848c527d7883"],["/post/892a2328.html","e11676d5198ef504f3ee9ffb42e68c2a"],["/post/8acb1976.html","039a41d354a72335240680bcf8d78f8b"],["/post/8e4fa41e.html","c8cf7018a44e3a2e5945255d296999e7"],["/post/8f488ef0.html","d599eecf8a3ab8a0cb359c232c991f70"],["/post/8ff08e27.html","dd449362977775541d2c30f10f380440"],["/post/9055d217.html","436a1cfdc30adda6ff859c3ebd58bd6a"],["/post/91ad9ce3.html","abce6952ff32f4e535cebdb4a0dcb277"],["/post/96131cab.html","5b9af1c5431d2eb55d3fcaf517e95174"],["/post/96b5906.html","c0f83684854b76d77587c76b805986eb"],["/post/970fcca5.html","ddc9b9b0d0f63e9dde1d715356cabc70"],["/post/9a246216.html","ae2845fbbb05b3e8a59f9dc641a4a403"],["/post/a10c77a7.html","d0ba3c29f28213d025d6a24890db1e92"],["/post/a708a60d.html","726b974f90f5b7ae97938c21d3390822"],["/post/ad27c5a8.html","18592396324e71d444f9ab0fbedad4d0"],["/post/b6c47025.html","2f99af2296346099c18a5dc8e6cf3d54"],["/post/bd69ba8b.html","d92940bd83c27bd97c17b93f976f32bd"],["/post/bf7f3b65.html","48b92af75c6f5aa7367af43c40c26e65"],["/post/c3176455.html","0a314387ab5ed0de9e4bc66c5c632a0f"],["/post/cb80ff62.html","51fc41b4ae906a0823b7e0f184a68520"],["/post/ce0e685a.html","e1263241b1a4fd0afbd941178084547f"],["/post/ceb39ac4.html","87e90928971763ff75157e0b68e17f8c"],["/post/cf413e35.html","700416ef7e124b93ca252c524b774396"],["/post/d036071c.html","37fb54aaf512c0e9fa9117008c7de090"],["/post/d39191a5.html","1d24c9386d9b0a98f06526fb0546921f"],["/post/de3bac1b.html","cb348718764a23940b77bed379967ba1"],["/post/df879792.html","5fb458acb514192c9fe0d5c68149e547"],["/post/e008fc33.html","fa16d1d3a5894bc431e5adf6c3fd4774"],["/post/e19da94a.html","ef4c7c05ba418335c6f011ddaaf892a0"],["/post/eb04e0a.html","90c4964b6f70c6d308fcce8553cac58d"],["/post/ecd67acc.html","f982fa940f17ab648d3722c7633b31e4"],["/post/ee040603.html","3479e1208eb5c408342532d12a70c652"],["/post/f1601c3e.html","61258c7f8ef63bc1a2cc02be4df3c277"],["/post/f31a5a5b.html","0a0e87c844d2a545e5a3d7d61e984532"],["/post/f5c535ea.html","1b504a0e4bbf9dbefb298e1a2a0a1283"],["/post/f7500981.html","deff27b65d4e0314def15ada102f8e91"],["/post/f79807ee.html","09ba6cf3293925b552c6b43373ae097e"],["/post/f7de8aa8.html","41f90b03ae5fde53fc0eae3bf462cfe8"],["/post/f8239d66.html","934048b5398afdb7011674e344fd21b7"],["/post/f9f5e0c2.html","2bb7fb68c3dc2b3b14f52006169c0d4f"],["/post/fb77661f.html","22b2cd9d5a11a8270c89a99f25f095f6"],["/post/fe1f88a1.html","16fd4b789dec6ac416314ff879652b88"],["/post/fe57b0e4.html","297e93f87b89fa8a462aa66bab255cf1"],["/post/fe816c3c.html","5383bd30d797690cb2ceba7f07dcdfa7"],["/sw-register.js","e8b19f2f6aa709bf553079beed142685"],["/tags/Butterfly/index.html","2208caa01775f40f80a20c1e8582befe"],["/tags/Hexo/index.html","c05a33e29f17e6fd68668e450cf95366"],["/tags/JVM/index.html","2bb96fbf8d3b0bd701dab609d48fbbf7"],["/tags/Linux/index.html","09e367f820c2b36624b4d0970426bf5c"],["/tags/SSH/index.html","3db1c4a3b611a02dd0bdfc825e46e583"],["/tags/index.html","a068a6eac27795836037a957157fa901"],["/tags/spring/index.html","fecf9401e37de4272bd02ebf6935776e"],["/tags/vue/index.html","b5afe5d00798cb6a699395891a889738"],["/tags/一问一答/index.html","e143acdd307393d4331eb0f33f3c6940"],["/tags/个人见解/index.html","8973e8969c8827e7b7c82552aaebb095"],["/tags/大数据/index.html","8389f689021a382918acd7a79f5311b3"],["/tags/大数据/page/2/index.html","a6cd27cd86a20d4ce1cf6f7c6159481f"],["/tags/大数据/page/3/index.html","606b5d480b427e33afd961564b8e7e5b"],["/tags/学习笔记/index.html","af0748352cfdfcee04c57ecb34c2afa4"],["/tags/安装教程/index.html","fad11e7e059da340f4018a4acc3f48f7"],["/tags/实战/index.html","81ca390d7df568259471196afd243819"],["/tags/并发编程/index.html","9005b92359b9c7144fcb4cc5faf3ba52"],["/tags/数据库设计/index.html","0df076c4e9c7763a47e105099403ac88"],["/tags/数据结构/index.html","d84dbf3c4597d95f36c263c337f1fd53"],["/tags/案例/index.html","5505e9b5fc4de4e20ff68816e84bf829"],["/tags/注解/index.html","6e7814ecbf692e623d195b1520f96d51"],["/tags/源码分析/index.html","629bc648f1d6be2777c06beb8c99d75e"],["/tags/程序员/index.html","2708ce88919a95537782d92a44730783"],["/tags/笔记/index.html","8bf02ff52ac94747d6f7b3efd89982f6"],["/tags/算法/index.html","5bf18dae5f58236694d036062f3714a9"],["/tags/设计模式/index.html","6943d5f50f2a33166d8e099f3a1f98ae"],["/tags/设计模式/page/2/index.html","e76255c91bb040a17b316cb9e041d381"],["/tags/设计模式/page/3/index.html","016ec7ee2f7abbab467390af9af6d008"],["/tags/软技能/index.html","7dcfb5357569b767619c3c9a7690ef0e"],["/tags/软考/index.html","1274f913dd0ab0bf1cafd0bcee0d5600"],["/talk/index.html","b134ab18a74c3ad38eb42002740c5c14"]];
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
