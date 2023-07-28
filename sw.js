/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","73914c482319e93a9e3869f05495d041"],["/about/离职申请书.html","ce522f34915c59a8cc2530f26ea4f39f"],["/archives/2020/07/index.html","c963a7eaba9220dd6be893b5fb5e779d"],["/archives/2020/08/index.html","9bb822af2c2f8cd037b04e6869706a6a"],["/archives/2020/08/page/2/index.html","e3c87f8beb2ec02f9ca44a6bc9c5cdb3"],["/archives/2020/08/page/3/index.html","1c2f98a6954465e9743ee397bc23548f"],["/archives/2020/09/index.html","23f1cb74c29ef93ca02a4eab5a84a53a"],["/archives/2020/index.html","55e7e6e50655a33eb45245b58f75fd12"],["/archives/2020/page/2/index.html","471f4a48449560f531c1d7c27be09889"],["/archives/2020/page/3/index.html","224470b5f908ae2598f71cbd4b0ae3bb"],["/archives/2020/page/4/index.html","aba520fbba54231c290e181085a5eb60"],["/archives/2021/03/index.html","8bb85ee6097b34b12f86c5036dbc28a3"],["/archives/2021/04/index.html","6a1e064e7acbe78d74319c49e2ffee53"],["/archives/2021/05/index.html","43755fe45fb868d3c046539dca2e653b"],["/archives/2021/06/index.html","4b7321f357647a6df9174e5b906f4807"],["/archives/2021/07/index.html","1ba4e7bdb8d983ced49aba854954275e"],["/archives/2021/07/page/2/index.html","04ac082b3c921a5ea8fb44ed92fe9a9d"],["/archives/2021/07/page/3/index.html","3b2c34f92cd8409d31c094e5ab038114"],["/archives/2021/08/index.html","2b62dee9a9675373fe0a4cca4d1cc8ab"],["/archives/2021/09/index.html","3302769c8dd9067d18cded682ff93ff1"],["/archives/2021/11/index.html","8fda6b97f968feed82afeddfb73319fa"],["/archives/2021/12/index.html","481daf764b68bf8c3afed11c5bde90b3"],["/archives/2021/index.html","ad44bff42699f5fa512fecc2ec0c5970"],["/archives/2021/page/2/index.html","f99a41fa59656379c26b476e5df3de8b"],["/archives/2021/page/3/index.html","b0e69b4f94df7dee2a5d0b54dce5b90a"],["/archives/2021/page/4/index.html","8b793f53fc5abde6fba2393434173d40"],["/archives/2021/page/5/index.html","c461c5f02258c66aabdfc9d314703f5a"],["/archives/2022/01/index.html","fa652776741b3426e907bf1b697d3e9f"],["/archives/2022/03/index.html","d9719d696524d70c5e2cc6b6efbffcdc"],["/archives/2022/08/index.html","a74bdef6c989178b01c3fda84a00fc27"],["/archives/2022/11/index.html","e20996c7a7d400846f86a45fd3d16b43"],["/archives/2022/index.html","983fe42b0c7c1bb382c76cc6ba49f606"],["/archives/2023/02/index.html","1766cf50d743c71eb7ed001a9dea3e36"],["/archives/2023/03/index.html","faa7d35a7a8bd5825c8e22e616734b4f"],["/archives/2023/index.html","96d3f8bc19859415ee0af3b5b954c653"],["/archives/index.html","4300d522d8cd21f96b1b12009cbeb6e3"],["/archives/page/2/index.html","51d4b19625c33b06d94611f0ba95c817"],["/archives/page/3/index.html","9facf7175a9e75ce8cec599cdec1c677"],["/archives/page/4/index.html","1d3a41e39df56e3899e1388a2a2fb89c"],["/archives/page/5/index.html","67db7fab34dc8c7c58e5ef904e5d1204"],["/archives/page/6/index.html","2d7f375752814077dc416fa6d5315429"],["/archives/page/7/index.html","b222322cd9f86ed4bac44628e82a3de1"],["/archives/page/8/index.html","84c910f15c4ea90d8a014c3713032b53"],["/archives/page/9/index.html","a65110196ec7fcb7ea090ce564472d7f"],["/bb/index.html","3bc363fce667b83811fab0c297c1332b"],["/board/index.html","0a1907c9d7b3d53329c8c74c2c6e94b5"],["/categories/Hexo/index.html","9d44c74aefd0b53a7d56e49381f4990d"],["/categories/IT碎片/index.html","db3c82814dac2130b03f53ee4a5a25f8"],["/categories/index.html","41ed064281d31ff3a33f88e2cfeb09ed"],["/categories/前端/index.html","1f3ecf5923eb6d4a8bd8119b866677c8"],["/categories/大数据/index.html","6d80fdfef660866dc8794b996e427a77"],["/categories/大数据/page/2/index.html","d118fff07f47de85e3bbf36f9330577e"],["/categories/学习笔记/index.html","329b8ceea54a9eadbe50e84f12c9264d"],["/categories/工作实战/index.html","ea7a1cef61e9358ffbd77ef90d580380"],["/categories/开发手册/index.html","4cac5cee9fb87f953df836fc0c4fbe32"],["/categories/数据结构/index.html","cdcbdf0ef7f1194f8ec1a68e9fdeb67d"],["/categories/案例/index.html","ec86025e127538ddd0ccf29451053cec"],["/categories/源码分析/index.html","54269766dbd328a042e2447647dd972c"],["/categories/设计模式/index.html","94f015f7ac0716391efe73ec890d1819"],["/categories/设计模式/page/2/index.html","a31e6434511134b26e41c5b662047170"],["/categories/设计模式/page/3/index.html","49c636363833b74b4cdf50faaa1f168c"],["/categories/面试/index.html","1f8bef9cb6f3fc2ce76d892b08bbc578"],["/categories/项目/index.html","ddf8cd1ce585cecc68c4833223c2c59b"],["/categories/高级/index.html","521c752790b439e4dbeced767a6baaba"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","143d62fceef1f4efe99888cd827bc776"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","7e5300b8d1321973970325e618de9047"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","9baef0563c256ceed963a07d105f9a9d"],["/page/10/index.html","41b0aecb20f277254224e7f295303dbf"],["/page/11/index.html","8b3fa91ba0825a7d035b4cc9afc89cc7"],["/page/2/index.html","ca62f863d39f8b60c0d900dfd4587dbc"],["/page/3/index.html","4a6f121bc0b41eb294bcd0f179e4feed"],["/page/4/index.html","2b650d47818d05744186c99d7ae8e7cc"],["/page/5/index.html","68fe460524b378aa519e53adeb65dfa5"],["/page/6/index.html","fe5ff386b047daf801819ad5dc6e0cd7"],["/page/7/index.html","6e5650fda280385f687c563114684f54"],["/page/8/index.html","94e52cef482c20d221c72491acd76007"],["/page/9/index.html","9625cc760a3e27ada08a6c35081b73f1"],["/post/121bde1d.html","86800f005909484af7c3c6186aacafd1"],["/post/153083dc.html","babcc1910d3cfdf65ba1dc568e67a227"],["/post/164eee11.html","f3d2d48be871492e88b33963c2ca6290"],["/post/1a7b7abf.html","bece6f222e3c15772ab4e85a8ba52103"],["/post/1baa3967.html","43a970874de0e7e49ba5bd5cf3587b06"],["/post/1f4ac2fb.html","c6ed760e51c0766ed981b8c63359982e"],["/post/22580020.html","d31d17db7c39444bfbf45d6e37b92848"],["/post/286296.html","502e777e7ed71972c4467b43fa6d8ec5"],["/post/2cd418c2.html","4465774aed9f7dfeefa9ad9d93f35dd5"],["/post/30cf0cd2.html","03566ceb7b5357f87276fc2929a4d903"],["/post/317f8360.html","a1c4fb625d0e836d5640685f192dccee"],["/post/33cb1151.html","1256635cfc30f2e9db0c074588aa26c3"],["/post/34e57ffd.html","38a1658a046af8c5b8bfc9d7bb720e9f"],["/post/3d20c1d7.html","4ca3677dddee5d493a5ccac0af743d24"],["/post/3d24dcf9.html","ffddf53695a557bb5512be539230aca1"],["/post/3f6c447b.html","5a758c98e14d7aedc9bd1a20f8122014"],["/post/490cdff9.html","5a758c556da991addf11558e199629a9"],["/post/4a1111be.html","25b8fdaff410725096daa7f594782b38"],["/post/4fa8e0c4.html","4f2897c30cb0ecd4e3c84adfa1255153"],["/post/524e74d7.html","deb724949c97a6af2cb2c8e050c7520a"],["/post/539343bf.html","5979f6a88251639f07a1b272bbbc733e"],["/post/54788f73.html","5b998867eb2e835b0febceeec6e04cbe"],["/post/563268dc.html","af687e67547dfa2f3da70845563e98a0"],["/post/5ac88c70.html","ba3f9c5c1cb7a60f614499393bd92c68"],["/post/5bf55f4.html","8bd231eac32abddead4d8862e2a98b95"],["/post/5e87465f.html","5071b5fd2120a814c9c5747cbc9ca101"],["/post/6016428b.html","9541ac188aba39d115a2df07dc103f06"],["/post/6208627e.html","95fd2f40eca3ceb141271bc5b0a17163"],["/post/64b51ed9.html","7ca12cec7b602fba4ff38865b14a7af3"],["/post/659da5b.html","12bfc6e44c5f7c81b85aa9f4d7f2256a"],["/post/6c429b75.html","b4f6eca8c405ac1a9858bae00296a375"],["/post/721d4875.html","db38f949dee86c05d3162dc202f299ea"],["/post/72e3b671.html","b0f862b26e8d6088949a74f8f19ae9ba"],["/post/730d8d6c.html","78b5a70351b8edaac9d5dc3693075ce7"],["/post/74fc969.html","d256083a9d5aa6af77c5377b79e95fa8"],["/post/78134e07.html","bfbda5dde8b4c43d3d6ca0fb379d6bfe"],["/post/78c07335.html","dfe532320250295511d5636a76bad37d"],["/post/7901ad89.html","313b29488c927cf8caeb3f9b0fe247d7"],["/post/7a2a0c9f.html","f22cd188ea7aaf255cd7dde2ae512236"],["/post/7b216a3b.html","9df20ef2313cbef37007ec5906d8bf94"],["/post/7b510e10.html","1c1a7d584b72166496c50ab7f075801a"],["/post/7db2942d.html","1709e432ce3d5b98ebe6954dfc87fbd1"],["/post/7e6c6990.html","40848e5b3e657e1dcbb59daf496307fc"],["/post/7fa79d96.html","4eb6a0675461e3c6626993246ea80d81"],["/post/855673ad.html","21fa7e9d4344bae8bf3be94f49d73512"],["/post/892a2328.html","e52f2adf256a1867c67d8d3ec43183c9"],["/post/8acb1976.html","b2d0570057c65daa3656f29fd28324bd"],["/post/8e4fa41e.html","c8cf7018a44e3a2e5945255d296999e7"],["/post/8f488ef0.html","015ea54741a94bededb72f44f2b65ec5"],["/post/8ff08e27.html","7fb5fcbab96d0941c98db5e54b0fa6ff"],["/post/9055d217.html","40d213a8b6332bcb5e33d80525c3cecb"],["/post/91ad9ce3.html","8749322f036d13701422bd70c59edc93"],["/post/96131cab.html","5b9af1c5431d2eb55d3fcaf517e95174"],["/post/96b5906.html","83b962a2b046c0e4fda0504f775632cc"],["/post/970fcca5.html","3a346686eec53b4c5d78d5cec1d788ad"],["/post/9a246216.html","16f52c4a51fee29feac9ac3756b0b19e"],["/post/a10c77a7.html","e979b02152ff04ea5207cd0fb5c6a778"],["/post/a708a60d.html","52be37e7941bc158efb2403b756255a8"],["/post/ad27c5a8.html","edbb78b3233e4f6b75e26544a3df8b06"],["/post/b6c47025.html","94d4fab7cc8e5990493a422f87b778a3"],["/post/bd69ba8b.html","c83a67e9b773f2ff7dfbfe56387aba23"],["/post/bf7f3b65.html","c592d9acb327974a3d96f6b63ed1df00"],["/post/c3176455.html","01b8d7e611a72fc3d56950d4a1908e75"],["/post/cb80ff62.html","8cec66c613aff14626f51d7fa5a9b5c5"],["/post/ce0e685a.html","d47cc6b09e4fa049d3fd43650b9e3f9a"],["/post/ceb39ac4.html","9a38c0040b3255a94c646ac2648607bd"],["/post/cf413e35.html","2089bc6c09bbdf8cf53704b85e8183a1"],["/post/d036071c.html","6bb6327f104471a7088cd91dd8f1da05"],["/post/d39191a5.html","544e1edbac7dda1b25132cdfcde54a8e"],["/post/de3bac1b.html","09ab3a19e0a79a0292dec70433cfab34"],["/post/df879792.html","5fb458acb514192c9fe0d5c68149e547"],["/post/e008fc33.html","2f2d2e1fe2505adec5723deb44754218"],["/post/e19da94a.html","0afd2be98917917d060c774ee0bcf654"],["/post/eb04e0a.html","679476f7db2200e66e0a7da4e1389549"],["/post/ecd67acc.html","3f63f89c31a405b92e25e3faddb3f1ac"],["/post/ee040603.html","1aeaeda1324d1c6ff29f616f281f3e72"],["/post/f1601c3e.html","604cc8357695cfa2727a44c5c0bbc5ed"],["/post/f31a5a5b.html","195571d33792f6b95464f139e36f9112"],["/post/f5c535ea.html","219d279e7e53a48bf0bca6723c4ba91c"],["/post/f7500981.html","f3fbc84f62ee900643f37a6327b2aa6b"],["/post/f79807ee.html","44de38821c5b6f1372ddaa3f270516cf"],["/post/f7de8aa8.html","305a969d680840fe408833159070824d"],["/post/f8239d66.html","934048b5398afdb7011674e344fd21b7"],["/post/f9f5e0c2.html","d616ffab039dcf6beb30dd91f04bfbe3"],["/post/fb77661f.html","2fcd3f0c9b9b8a24a356d81fd3bbc936"],["/post/fe1f88a1.html","16fd4b789dec6ac416314ff879652b88"],["/post/fe57b0e4.html","f38105f4c53e0315486eb130b5d936b7"],["/post/fe816c3c.html","5721cb96ee304017338c615db9a4d215"],["/sw-register.js","fd1893d6acb4098cc81d4b431cc3383f"],["/tags/Butterfly/index.html","15f774fa86b3f9ef14c47ce3ba7262fd"],["/tags/Hexo/index.html","949a6c19d32b396696b980d8e6a0d8b4"],["/tags/JVM/index.html","07466214f76e1a55f503f9b963a1fdb6"],["/tags/Linux/index.html","5fe3a75d3eadd5ccb7104ee829dc7094"],["/tags/SSH/index.html","c5a22a9de26d2a713e7abad0a69d9975"],["/tags/index.html","db27e2324c445c8d6523f29ff84e4ea1"],["/tags/spring/index.html","895733e4bfac160346bc0b73e37fba87"],["/tags/vue/index.html","048f67b506e8bc11e4b4d26ad707e44e"],["/tags/一问一答/index.html","d857f3bf20850e43c18d8c7b842e8b91"],["/tags/个人见解/index.html","55a88559770647c145cbcaebd587242f"],["/tags/大数据/index.html","5691063f9034b4f286ad1545eacd016e"],["/tags/大数据/page/2/index.html","5ec9708cd428dd8d705a40b30d598d3f"],["/tags/大数据/page/3/index.html","486cf3e613b766e5d0e644856db0ba9c"],["/tags/学习笔记/index.html","f204406a4af4e54ec47a598a65014c23"],["/tags/安装教程/index.html","b6307f10b946d61f3b124eacc8b6b492"],["/tags/实战/index.html","0e9d0b6ffe4f084770abc26f3b94f489"],["/tags/并发编程/index.html","fd34d0c38bc85018c1d5fa82a951e6a5"],["/tags/数据库设计/index.html","e62dc8b9b38e199011366b52274640e9"],["/tags/数据结构/index.html","a4766a8825e81fbb91acd4ab233515ec"],["/tags/案例/index.html","ef8cef4002ccf822acd8724c43fe795c"],["/tags/注解/index.html","6f16cdeb5e8b56b9b85973d7043a214e"],["/tags/源码分析/index.html","6a493640b40fb237c2c2de1f06a72312"],["/tags/程序员/index.html","bf224e80bac0391bb91841e00d8ce1c8"],["/tags/笔记/index.html","f311f4db846f08edf3499dc03a15038e"],["/tags/算法/index.html","340c4ac454e8f9645d31403f9353af0e"],["/tags/设计模式/index.html","633328771dd8ff24e84ecd6af7e69348"],["/tags/设计模式/page/2/index.html","e45ac225ef736177c63a476d2aa80735"],["/tags/设计模式/page/3/index.html","c2b6a53ecc12d8489e8a7afe49eab5b9"],["/tags/软技能/index.html","78b0e02c4e97974631f066c10ff771d2"],["/tags/软考/index.html","006c8fa515abad7ed2c12c6e6864386a"],["/talk/index.html","9557b08129511c8ac95437584c8ae482"]];
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
