/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","58e69964e99dbc68f0a0edc45dd43cff"],["/about/离职申请书.html","19c2e46883554859420de942f7e9467b"],["/archives/2020/07/index.html","14c35895e9d9c2347675206eb4d3f82a"],["/archives/2020/08/index.html","bb75fddcfca94d74911adc43029d4a05"],["/archives/2020/08/page/2/index.html","6470bc4264629d13dcd00a199c0acb79"],["/archives/2020/08/page/3/index.html","5e267aee92797416d4af11002c2af1ce"],["/archives/2020/09/index.html","8b4d930d8b7749e4310366ef9a290d87"],["/archives/2020/index.html","42c57ceab3f528143679947109b68c07"],["/archives/2020/page/2/index.html","d5d81acd693e67d811f126a89fcd171a"],["/archives/2020/page/3/index.html","7bf15f1dd5bb10c8ff65ec34df38784c"],["/archives/2020/page/4/index.html","d5d8c534d71827db6eed5088cf28813b"],["/archives/2021/03/index.html","1d134a4ec0d474face322549196be6f6"],["/archives/2021/04/index.html","37d6c16d4129964b909250f502b35f8e"],["/archives/2021/05/index.html","f7601c3aebc8ff5dd637dad897a410b4"],["/archives/2021/06/index.html","bbf5f277044f5a3f042dbef1d27ef023"],["/archives/2021/07/index.html","dd7980916d49060175c69e0ab8deb9ec"],["/archives/2021/07/page/2/index.html","3cd8e5f9ce416fbac7c8cbff9b828393"],["/archives/2021/07/page/3/index.html","58c3cc7beb3c49f9cffed348dd336166"],["/archives/2021/08/index.html","70293b154d138601668880b90b01f858"],["/archives/2021/09/index.html","f5f6054635adefddc92ac4a5c7706a28"],["/archives/2021/11/index.html","339952c75d03abe3407e93719c4e63ba"],["/archives/2021/12/index.html","78bdf2162bae9577af0572c5751331a1"],["/archives/2021/index.html","3c8bb7be8d37921090ee4488339d5d8a"],["/archives/2021/page/2/index.html","d9e49263f9e6a73212235de78a408c71"],["/archives/2021/page/3/index.html","c4128e9ec7478f5d459cf805155c8a7c"],["/archives/2021/page/4/index.html","64f6f7b27495558551e2476233fbacce"],["/archives/2021/page/5/index.html","5171aa845d6e3f196a8b757142a5f9b6"],["/archives/2022/01/index.html","3a2b03df26fe872643e6480fd1104cb6"],["/archives/2022/03/index.html","f90098f89a9f3b16a5fc0759bb356ba7"],["/archives/2022/08/index.html","7103ea9052224a8fa08f045985de3e89"],["/archives/2022/11/index.html","5b200e9b39884a1071af467eff25991e"],["/archives/2022/index.html","443c485a545f3fb4b464064f5f95597b"],["/archives/2023/02/index.html","3fb87b6ff91fe7b42f52bfd76a9cdde0"],["/archives/2023/index.html","41669e7eef4b609cd1af35825d083813"],["/archives/index.html","22bb2b2ddda3f1354d5de8ba9d7f1101"],["/archives/page/2/index.html","74990ab01f2512c108e8f61362e42493"],["/archives/page/3/index.html","d86227c49d54d61a674a219dd9393deb"],["/archives/page/4/index.html","07a4b1a98bc39643dcfc6499477a7f73"],["/archives/page/5/index.html","1de8933bd8c562b4ea0c70489c694d90"],["/archives/page/6/index.html","840e60136cab3ef90c36c28b9f27a74f"],["/archives/page/7/index.html","9c7176f2e9826c5259c54c1d1d55581f"],["/archives/page/8/index.html","2f9f5f0ec127013d1fba1725e806f7de"],["/archives/page/9/index.html","ebe62bb534afacde804d56dd909c125a"],["/bb/index.html","37038f2f13136fbe6eae9a2351a2e108"],["/board/index.html","5c64af88c9b7b90e2d9e665e04a5d37a"],["/categories/Hexo/index.html","02dbec2e3ff37574f623f6766be4fd8e"],["/categories/IT碎片/index.html","e42361f2274f819daf526697043ec811"],["/categories/index.html","4f691d34d59e325c0afde50daa0cfafa"],["/categories/前端/index.html","052618c7f9113d273ce77902dac5a4cd"],["/categories/大数据/index.html","448c04e143fa9a522a197efddb262418"],["/categories/大数据/page/2/index.html","f287c7ec364d9004707dc9d0ec6e4630"],["/categories/学习笔记/index.html","1e50f0c3c5bb586c08dc0d13f256ded9"],["/categories/工作实战/index.html","6cc02746dc5ce3f0a08b607b90138721"],["/categories/开发手册/index.html","8fc7ffd6eb66f1f5e3bb52d11d116b4f"],["/categories/数据结构/index.html","5b73d298471d4a9624cf2615397e434d"],["/categories/案例/index.html","3d3d5ce751a2386a8076bb5b4e9033de"],["/categories/源码分析/index.html","3b98faacabaaeff06474637903fc64fc"],["/categories/设计模式/index.html","b1bba7e3de48789e0b671b746a8c6f64"],["/categories/设计模式/page/2/index.html","963791cbe055bdf1bf29c9d1131054d8"],["/categories/设计模式/page/3/index.html","4922457284febb9e07a2c5dc2bb31f29"],["/categories/面试/index.html","d66caf0fa3efa33dec17efcc8c16861d"],["/categories/项目/index.html","a4e5f0be1d59777397566d60d9e97c08"],["/categories/高级/index.html","777ab363b6a5c9ee9dfaafd9ed210af8"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","f2644fa293c64ff6786815e340369638"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","a4dfba715040d662271256656bfa4871"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","ad121dfa89cc41ef58e0bcfbad56e01b"],["/page/10/index.html","18e60740eb11f3a0f77ca7d78815e484"],["/page/11/index.html","22dcc34e2f99ba582c77e6100ed3713c"],["/page/2/index.html","f81bf82c05b8561cd903dd70cb5b59f0"],["/page/3/index.html","ee4ab16291c449f99b461221fc0b4adf"],["/page/4/index.html","170ed18c5e95df32b0e26d56fcdd2335"],["/page/5/index.html","ef6090307ce0423a0d87a7c7d2d18070"],["/page/6/index.html","d7526269d953c03655d0fd6d603d449c"],["/page/7/index.html","7ba55eaa689b67a2e612aaee14a440db"],["/page/8/index.html","d3bcf4acb1b75a3482b0a0cf02cb853c"],["/page/9/index.html","0c458355d25956be222822a90a3cb291"],["/post/121bde1d.html","5b194648104e17e297ae45c5ac66f1da"],["/post/153083dc.html","867ea44db76f0ac4833acf1f25ae475f"],["/post/164eee11.html","e1fcf69cb382e8787b16e229d8af75af"],["/post/1a7b7abf.html","e1afde25452174f83f905e900276f3b0"],["/post/1baa3967.html","bfc34e8a25f43bc72c2f3d415d0a1f63"],["/post/1f4ac2fb.html","a4b50cb6e8dbe363163603dac38ca027"],["/post/22580020.html","e1ac076f52d9fa5e64d3ed1b5d9e3273"],["/post/286296.html","9ddfdcaf037a1cc6cf1802d4d0cedf9e"],["/post/2cd418c2.html","e29c61a3896f8c63492a50fbbef2497a"],["/post/30cf0cd2.html","45d4eb3f763f25f06c2234684cea9806"],["/post/317f8360.html","9c1d96a2f582002283dabdbba7b8ee3e"],["/post/33cb1151.html","9f26e9ac369ed99f99c863c46bebee51"],["/post/34e57ffd.html","efd1664fdcec1b481ac93ec63c6f30f2"],["/post/3d20c1d7.html","6e424dd029b2460156d7e83eaab11bb1"],["/post/3d24dcf9.html","63605dbc593d33ad27212c6a6a7b5d6d"],["/post/3f6c447b.html","78a0170001f8250647e32c6c2ef74132"],["/post/490cdff9.html","6a7b2ee8dbb2f2f4bcfcfb4d91a4d87f"],["/post/4a1111be.html","ec3b047cbeca2b86f4d03ea019d633e3"],["/post/4fa8e0c4.html","2bb61342598318209c9ac7fb0889fab1"],["/post/524e74d7.html","ef303e6684a47e54139fad30f51102a6"],["/post/539343bf.html","0dd3e2804525d23cfc41c7236e3a1a3b"],["/post/54788f73.html","46a19c02f9cebfee0e5e550d6ca25d44"],["/post/563268dc.html","e6e1f9c6346f60819bb64decdcd719e4"],["/post/5ac88c70.html","9a48860f0434a1727f26ebcd9cbfc736"],["/post/5bf55f4.html","df5b314b1d370fa69a7e48871caa1b57"],["/post/5e87465f.html","e1e3848de032ac1fbbd6672f0155302f"],["/post/6016428b.html","cdd1d73306d44b2ff208308add76e5c1"],["/post/6208627e.html","1f404e4f6beca277f4b4ca9fee4c700f"],["/post/64b51ed9.html","789d03ad1063f67b2f33f571ddd38d60"],["/post/659da5b.html","54d5cee9fd05e5ce4a43a046fcb3ced5"],["/post/6c429b75.html","b43b950ecc9b55bd7de1513721007211"],["/post/721d4875.html","99b8f9e54ea9ee75cb77554849e6c87b"],["/post/72e3b671.html","ee8989ff481b66053d1c0aafcfff1ee3"],["/post/730d8d6c.html","7760eba4c739e09a3c3236deb9b9c900"],["/post/74fc969.html","1308d10f55e3bc197f512ba626edb119"],["/post/78134e07.html","5fa7b3e0a2f1ec90ad5adfabdb969dc2"],["/post/78c07335.html","3d149f662ea9da09b154937d1f1ed3be"],["/post/7901ad89.html","a98ec157185f6f6f4d8c2906bd7682c6"],["/post/7b216a3b.html","6a5d19b632e25b187dba57ae003d8869"],["/post/7b510e10.html","b872d69ee8e8fe81e3dfa28d9029ec2d"],["/post/7db2942d.html","11e2a60d389aefe02f3bf504b48bb031"],["/post/7e6c6990.html","afc4e279923048ead7ad57c7c8fc96fb"],["/post/7fa79d96.html","2c5f9b4b9ff01c0b0a9632632496f461"],["/post/855673ad.html","41396b13db68120f57c07801d5b9684d"],["/post/892a2328.html","434c8a81d6af88bb49f43a70482928c0"],["/post/8acb1976.html","0974b73765e294f20a332ca97432def6"],["/post/8e4fa41e.html","4bfd8ae612590b3707600945302e8701"],["/post/8f488ef0.html","380e9baf9e7f2059807cfae97c688ac7"],["/post/8ff08e27.html","9a490155377532925092d9a9b2bd3a77"],["/post/9055d217.html","e7f93c81c2d153eb20a8cae798ef6338"],["/post/91ad9ce3.html","a2428b2655069e57cd9244905b31bb74"],["/post/96131cab.html","25b54b9ed14f9a1c5b63b73725e78503"],["/post/96b5906.html","075509c423923b36ee99a80f416eace1"],["/post/970fcca5.html","5152bbf6d26623998d79b1fe027705af"],["/post/9a246216.html","b4f1044d50e07ee921b935a4175461e3"],["/post/a10c77a7.html","28a35f554e4b6c0d34b45fb13b23979d"],["/post/a708a60d.html","5601d43f8d1a611b9ee5a2fbf34c1310"],["/post/ad27c5a8.html","8d58944a0de3056a08cd26c64148a79a"],["/post/b6c47025.html","222f866144f6763fcc6f438b6da8da04"],["/post/bd69ba8b.html","0d5c0ad391af6a802f6da697a4101bdb"],["/post/bf7f3b65.html","efa6e2a3ba37deb2b188239828a56466"],["/post/c3176455.html","15a41282ef00594dc96b5f1b2c09aa06"],["/post/cb80ff62.html","882a3ad61d77a515c755e76e2d229bd5"],["/post/ce0e685a.html","e9db55f8690d202531d3d02e56ef9258"],["/post/ceb39ac4.html","6aead0418b32f46e450c8b2847e11eaf"],["/post/cf413e35.html","318a12398e8c6ac1bd035143d8f2bf04"],["/post/d036071c.html","5e51e342bd1d3a7a7faabb976c968c1a"],["/post/d39191a5.html","8812b7534f06b5d3cc8a6aad5b2df40e"],["/post/de3bac1b.html","e75982f4387c5b13c0c182fb4ecaf1d2"],["/post/df879792.html","87a1f70a4906f7a4dd8ecd63a60b09d7"],["/post/e008fc33.html","c244038054846c77d64465c06d491998"],["/post/e19da94a.html","b12d287e493e1969a778fe937f10ba32"],["/post/eb04e0a.html","6677c7a87056dcf2f24f493b9fa2b242"],["/post/ecd67acc.html","5facc9017b2ca795992d4b877ff1507f"],["/post/ee040603.html","34f1fbef201fb5b0e25dfec1b377ea72"],["/post/f1601c3e.html","a5d21316d20e4b6f24a6ce1327d58909"],["/post/f31a5a5b.html","11c40edcc8cc22b2ebf4f585934d1105"],["/post/f5c535ea.html","a920946cc065b34d0bd00df7f63856cd"],["/post/f7500981.html","76826a3c3b52fcd0c7c2fca517cd48a9"],["/post/f79807ee.html","c947182cb79fc1b9ff9e3a0be28b62fe"],["/post/f7de8aa8.html","d3865daf30c09b7496bd3cf71237bc1b"],["/post/f8239d66.html","4eece88c1048fbf0c32e26342e49dc92"],["/post/f9f5e0c2.html","dfb607770fceb328f3a8e5ba0af98814"],["/post/fb77661f.html","47aa2b27bf8df281a54d1280347f65be"],["/post/fe1f88a1.html","e4be272b34d75821d5061f7b283841a4"],["/post/fe57b0e4.html","bf35cafdd614f2d516e90a4e95c499eb"],["/post/fe816c3c.html","7e820d5f6874b3291292a157a76e0cc7"],["/sw-register.js","599fc3bbbcb4d07895b903b66317d042"],["/tags/Butterfly/index.html","08032c2b688b4944d111723033599f8c"],["/tags/Hexo/index.html","aff35fe44ab90208c3f874a610ac07c5"],["/tags/JVM/index.html","9571205ac734ed0a9eb079a3f0f378f7"],["/tags/Linux/index.html","cb96a9bcfcde0147766a6b1a360723d3"],["/tags/SSH/index.html","1062a5d9b5dabf31eb2a0224004b0262"],["/tags/index.html","21e105af98d95e0c85bf0354988b1f03"],["/tags/spring/index.html","f87ea65ab1da0d81c8b40e7a11919c2c"],["/tags/vue/index.html","147fd2eeb2c9cfd4ae919b64a203445f"],["/tags/一问一答/index.html","1d8960c34c535596e8bb2b147aabbd83"],["/tags/个人见解/index.html","0d9b4bdff0c2dcd22f362f771d7b19c0"],["/tags/大数据/index.html","f29607f6589c044d6393fc0f9845964c"],["/tags/大数据/page/2/index.html","983e68e1ff24eb449819e47e6208d653"],["/tags/大数据/page/3/index.html","ca5e498831edcf701fe828f44eba2b26"],["/tags/学习笔记/index.html","a02534e02ef2edc6bd66fbde48dbe54e"],["/tags/安装教程/index.html","b3a6fe427a095b70a061134414f6cb05"],["/tags/实战/index.html","41cf6022ac9a2b9b40cc5c71f47c5fa9"],["/tags/并发编程/index.html","d24fad2f76c35fc75e93fb495b87dbb5"],["/tags/数据库设计/index.html","f08297f7d0f85065634964c47c7d3a47"],["/tags/数据结构/index.html","e98b163cc72b41c766dc3f487c0add2b"],["/tags/案例/index.html","40b14a940c0d0a9e895fbc1ec9151f98"],["/tags/注解/index.html","84f30bb789e1bceeb1be0782b7ba7f8d"],["/tags/源码分析/index.html","7bdcd246ef56e7c6b1351bdc3f76a4ba"],["/tags/程序员/index.html","2002e2972d368403574aa065e880aa93"],["/tags/笔记/index.html","4d3da38c8bf01fd6702b62b2c9bcf40b"],["/tags/算法/index.html","14338b078731cfde94c129d0037487a4"],["/tags/设计模式/index.html","978228ba089dc87aae7ed928abd990f4"],["/tags/设计模式/page/2/index.html","0b764ee1726277524bd49451450ce980"],["/tags/设计模式/page/3/index.html","db738a38ebf7035d677b16d40c9e7ad0"],["/tags/软技能/index.html","1023e186fcfe29603d9f1ad8949f9720"],["/tags/软考/index.html","3c11b1a822274b1416276882ee37328c"],["/talk/index.html","1e6d1aec038d060e4351d4ca3121fae4"]];
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
