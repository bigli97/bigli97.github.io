/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","eba65de2fb93e56995c800a0a3097cfd"],["/about/离职申请书.html","8e1e8133e33253c5ca7abd49bd4c90d6"],["/archives/2020/07/index.html","1d047c8815eb95726d2feb8b3d31388a"],["/archives/2020/08/index.html","8db36cc0d9ea08818e1661f6465cbd4c"],["/archives/2020/08/page/2/index.html","19294be51623c145d0dee9c40daaeb6a"],["/archives/2020/08/page/3/index.html","be64c2e06ceb3e72e24e381ce3534d2c"],["/archives/2020/09/index.html","edac906a57f5770c35a01b2bcb4f7bc8"],["/archives/2020/index.html","6653a174adc064f8a65c641334c6192d"],["/archives/2020/page/2/index.html","5ea47a16b82d084a7853e419938d44d0"],["/archives/2020/page/3/index.html","d0c9ff8fe0dcc5cfa11f42790def8d90"],["/archives/2020/page/4/index.html","325a1f6cc354f930a9b4cc59e404607f"],["/archives/2021/03/index.html","0399ba786e857cae85156b1dfd6fad49"],["/archives/2021/04/index.html","71b7ebbf51178dc9aa2e4655ef86e63a"],["/archives/2021/05/index.html","480bf2bb794c2bcbd217464424aaab13"],["/archives/2021/06/index.html","cd5bcec4a856dfca07b93abfc4690e9a"],["/archives/2021/07/index.html","d7a3b729bce16ad93cb76d5b3867486b"],["/archives/2021/07/page/2/index.html","dedc523ec725d9b828476fb0c3479efe"],["/archives/2021/07/page/3/index.html","8507514b0da1e1c3b12ba70a87e08bde"],["/archives/2021/08/index.html","8a2f43b17571b3d4f400f22808f430a8"],["/archives/2021/09/index.html","42a9639e23a7e76f6d5b7fd47ec67559"],["/archives/2021/11/index.html","2fc8668e9abf180176405641db9d82e6"],["/archives/2021/12/index.html","e53e991edd371e0dc09d0575243f0ca9"],["/archives/2021/index.html","2bf39a1a68a543b2855ba92ac26f96f0"],["/archives/2021/page/2/index.html","8835bde69f2dcb67a147c7e21c01b33c"],["/archives/2021/page/3/index.html","bf82d670995112e89115022dadd13598"],["/archives/2021/page/4/index.html","3ff47ff3b844dff79ab5e6fe2ce0a135"],["/archives/2021/page/5/index.html","0b048e241bb4e21621af63fadf95b09f"],["/archives/2022/01/index.html","cc270b3a360e1e951d94b9603b7197e9"],["/archives/2022/03/index.html","3dd0371bc4fedc58f6dc43af17bcccb8"],["/archives/2022/index.html","342878a617e6d9d935e8edbbdc0ef44c"],["/archives/index.html","6ec71eb9cd2a5d3b1ee5707c21613c64"],["/archives/page/2/index.html","f3618c3ffb1b4e4971216ec38e9129fd"],["/archives/page/3/index.html","eb754b503b90b78eb0020b7ae36ae273"],["/archives/page/4/index.html","26654e0e8066545f3abd8057eca6f1eb"],["/archives/page/5/index.html","160277b42f3bcf6524d5137515627ce1"],["/archives/page/6/index.html","c7a1c8c1522897630c2e0775b553e745"],["/archives/page/7/index.html","515c4a871d527f37f226e29ad8291ab6"],["/archives/page/8/index.html","6daa432dafb28880890043221874f908"],["/archives/page/9/index.html","65af9cf084b8253428c492e1b402642c"],["/bb/index.html","492ece6940ada5e858c46679e5a9243c"],["/board/index.html","28617ff0b972936cd6b583bb32cbb9d5"],["/categories/Hexo/index.html","534980cb6069462c01d5317314bc3c20"],["/categories/IT碎片/index.html","5378f2b5d3b70474775480a3ecdee6f5"],["/categories/index.html","29cbd84b356f44536e1e89f20e2ed909"],["/categories/前端/index.html","ce2ce9a5b563a4156e2386a3148bf05e"],["/categories/大数据/index.html","21ec105ba0f29c39f460af5e6e025dc0"],["/categories/大数据/page/2/index.html","9544c8cfd5d3b360e3a822452d0dd96a"],["/categories/学习笔记/index.html","91b994adede04ed20df45482125c2c2f"],["/categories/工作实战/index.html","86cccbe4958073f14d33258f21ba971d"],["/categories/开发手册/index.html","0cd40c0811b80e3ee0abd667e55db7f6"],["/categories/数据结构/index.html","98a5aaa43604735e7b8d72440aacf0d2"],["/categories/案例/index.html","bc6bd385baea0f21acdf7535cf9310cc"],["/categories/源码分析/index.html","2474a7d086984791b9e59fc19fcdabfa"],["/categories/设计模式/index.html","b5b99e39f77635e9cd2e9afa9c4f0101"],["/categories/设计模式/page/2/index.html","42aa1815a1262b6f8e0584a2e1ed34c0"],["/categories/设计模式/page/3/index.html","c978227d58499696c2fe3e0cd9610df2"],["/categories/面试/index.html","ffcb965b8d95d56e68529b6685b95549"],["/categories/面试/page/2/index.html","5576f211b65e5a762265efeec37cc447"],["/categories/项目/index.html","f90da574ae13c348886c330ecf0eaca6"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","c17bd9d794dbf2c5bf3f39275c1c9a18"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","f378003b8a628b7a250d500b2494c737"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","b5178635b8f84efb8b0c24a857debb39"],["/page/10/index.html","88f79b361575a4b28a604ee615c93c2d"],["/page/11/index.html","9255289c4178300261631b592409cc83"],["/page/2/index.html","dff6bb34f55f635d22e14f2029d49b66"],["/page/3/index.html","7442edb3fe1647eea2616dfbf44eb14d"],["/page/4/index.html","c82998b3224a4ffe1b0d2e5c09ae3ef9"],["/page/5/index.html","d874bcd611715c09dd320e48f8ce24ba"],["/page/6/index.html","cd3a8fcda7f5e3bfe8bf21a70015aed1"],["/page/7/index.html","0a24794b4f7c96d81a0378bdae9f10ad"],["/page/8/index.html","0d067ae545d23b0a37084aa7a839ce75"],["/page/9/index.html","2d3e0a6375dc320c8559c1d8cb65c165"],["/post/121bde1d.html","1b893f20236e11e77e529e55c9bc4bc6"],["/post/153083dc.html","e1c086fac207fd54b26c1485301dbc9d"],["/post/164eee11.html","5e2695c5f908a3a7872b8c5b86c5363b"],["/post/1baa3967.html","c9a907c07a1e9330c3d7062e28fd7c2b"],["/post/1f4ac2fb.html","2fda9a8d352ea73d793e224595f30596"],["/post/22580020.html","45112c627d2e74cb4d8c1e9c58606db7"],["/post/286296.html","9e4f4b9c2bd44e27a471be1b06d1caf5"],["/post/2cd418c2.html","d989c63e5085457e8dbe06079f5abfd6"],["/post/30cf0cd2.html","2f223bc543337baf56f13c3e39b51215"],["/post/33cb1151.html","d4e6fb04822c55447f74ee690dbd0432"],["/post/34e57ffd.html","367d458641cada663a7cc806e13b5590"],["/post/3d20c1d7.html","e269afad881cdcd62a9ef1b267fc6e22"],["/post/3d24dcf9.html","859ec1ca6bff4c78d8ff14a110c8341a"],["/post/3f6c447b.html","d781b8579dc07d0fcfadc87826807afd"],["/post/490cdff9.html","159ba6c778ccee70b85092c2f0f6c501"],["/post/4a1111be.html","2c71d8056bae7f138e14283bf5c6aa48"],["/post/4fa8e0c4.html","91de1b05d8bdd25ce82a428de6759312"],["/post/524e74d7.html","356bfc318bd0c439cb5a469e4e0e078e"],["/post/539343bf.html","150ad144ca5d117b440de222aeb873b7"],["/post/54788f73.html","224021580f86d256db45b9b01c72a884"],["/post/563268dc.html","fe11f8568b646eec017c955ada60b57d"],["/post/5ac88c70.html","dcc4ebc4be82201b29278488b42e2a0a"],["/post/5bf55f4.html","1694fca75b53dbba0a80999617d0194e"],["/post/5e87465f.html","8c6e52e0a1baa8ce20dae389b51d0443"],["/post/6016428b.html","d0f1f7a2820ec7fd9e66c31d0f38fecf"],["/post/6208627e.html","c45e512977c64dc6d97a97243487ea4e"],["/post/64b51ed9.html","cd8414907ce2afe6e0a1c83c631e7147"],["/post/659da5b.html","4e3f48e28dac4963f2a6b34d1d38ea30"],["/post/6c429b75.html","9f20de9b0f864c3d69d7f0e801685fa9"],["/post/721d4875.html","bd5fa8eccd116e9b31c3071419786443"],["/post/72e3b671.html","e4f0bd41f8f745a571efa6ffcd27230b"],["/post/730d8d6c.html","0cdd2936ef82a560ec61512191bc5ada"],["/post/74fc969.html","d9b7fc9332eb95928bf3beff97668909"],["/post/78134e07.html","066092cbc63a70aa7d3bdc28d232769b"],["/post/78c07335.html","50d3abe871bdf528b323c347ebe290c2"],["/post/7901ad89.html","7f7b16f8e0c4fbc343c60b0a2b15267f"],["/post/7b216a3b.html","432e2a2c9934339f4e2bf2cb8894683c"],["/post/7b510e10.html","1642b26924d19a987e98379b5499cf05"],["/post/7db2942d.html","d140ed5765beebca2756dbc7f559e757"],["/post/7e6c6990.html","db6406297293ebb4791f2befd6ccb459"],["/post/7fa79d96.html","35ab735c4c435a4588829ea311f332f1"],["/post/855673ad.html","f55217be0d6816d3400496edc2f20ea5"],["/post/892a2328.html","c575aff5815c18c4d2d4771682157dda"],["/post/8acb1976.html","9a40cfcec246ec48a75959f8c1b0328a"],["/post/8e4fa41e.html","6fcbb12c90eb3a933ba30609267e09b5"],["/post/8f488ef0.html","072e793e151746c31444c1a339ebb68c"],["/post/8ff08e27.html","6af7e048c4a966ce5d7b139fdf641d30"],["/post/9055d217.html","c355e9d1fbd7dcde8c72e8108dd34f8e"],["/post/91ad9ce3.html","a5f1d0b50ba3957cb6d16bee05d5e2eb"],["/post/96131cab.html","d7c83b4d9b78245b58710dd37ced46e7"],["/post/96b5906.html","a548c966933b769f425904f8fa414bb0"],["/post/970fcca5.html","335f6639d6ccde1a95079ed93f3dfe40"],["/post/9a246216.html","13b5e8cd5c459904352f868dd6722894"],["/post/a10c77a7.html","f25198a05c708aa1ed7c4f9597f6b153"],["/post/a708a60d.html","0089aa8b339849892c4fde60d87d5b1e"],["/post/ad27c5a8.html","fea1148043ba7e849decbb3b4bed88f5"],["/post/b6c47025.html","55c517ce5343b7094c0507c10386a308"],["/post/bd69ba8b.html","8fc1f20a3e75e027232b68d33281f1fb"],["/post/bf7f3b65.html","bb202db452d641a1b17030fb563da5a4"],["/post/c3176455.html","a743c9daf01bc8d1a4291ee0c9ea48a9"],["/post/cb80ff62.html","34789ff59d330b93a8722eb1a2df9c8c"],["/post/ce0e685a.html","5cbabb01a55c0f0be11e903d5cbdce71"],["/post/ceb39ac4.html","85a403e5419e611934e85b6c34640508"],["/post/cf413e35.html","fdc857c90129b50b75a659e86b47b9ee"],["/post/d036071c.html","e8956bbe5a58903b77771c130d375f29"],["/post/de3bac1b.html","8e66d7349d1fbec16f6c876487456f0a"],["/post/df879792.html","4693b57a95f5b4166e0b26c8854f22c8"],["/post/e008fc33.html","d3f29817aa03ce1ae8bbba32665bb765"],["/post/e19da94a.html","a51829a6491591c77bab130e676f147f"],["/post/eb04e0a.html","a28d7bec9797ea834172083fd7b22e7a"],["/post/ecd67acc.html","dc28fb501f8864495189c6c044bb7ba5"],["/post/ee040603.html","7759da6df3fb292b3796ea5f86f10871"],["/post/f1601c3e.html","9c268c2b77824c3aadd8fed5bff39d3e"],["/post/f31a5a5b.html","a056f57203873aad11dfdaa9e8d3702f"],["/post/f5c535ea.html","63ea367bd874310e163c6d118852c5b7"],["/post/f7500981.html","7481bce4dc5af7d28ad7d7ffdd92bc88"],["/post/f79807ee.html","6c2b1f6b3cbb1430b62fe8cc1ed56276"],["/post/f7de8aa8.html","ec21334972dbba22e166a63e73ac8f27"],["/post/f8239d66.html","c72c1a1933beb6a63ec31236ec5e2867"],["/post/f9f5e0c2.html","6e1fc217fb5798c820f41c4c11d6b483"],["/post/fb77661f.html","a8049b2dcd379f55d4b8bb714ff4e2b3"],["/post/fe1f88a1.html","8b32b278d4b86d39c50a3a21f27606f9"],["/post/fe57b0e4.html","48da601b68e6e9b5318b495a920bb646"],["/post/fe816c3c.html","2ff99baca5cc48cccd3c2b25baac1683"],["/sw-register.js","18c64c59b9e2d63f9bc14419744dac53"],["/tags/Butterfly/index.html","19e2a655e05b7e84a2b03250cf7681c9"],["/tags/Hexo/index.html","da7c99ddc84746db6ea4b432b987e439"],["/tags/JVM/index.html","a856b3dde0818c7c05e5f44da5d2bdb3"],["/tags/Linux/index.html","1d203b40168cb01533cff274cbc06e63"],["/tags/SSH/index.html","4179c749b36726f3fd38c58dde666c99"],["/tags/index.html","2d5cc8b55ed2a44ec2d9fcdd52d2e998"],["/tags/spring/index.html","e5ad17ea2c88e324fef3caa956a45c20"],["/tags/vue/index.html","7c2548cd6cf1c6f3e020de47127bd88a"],["/tags/一问一答/index.html","0b8f93d0262f8567c4a73d4cd85526f3"],["/tags/个人见解/index.html","eee58f347dcfb3439ca92a222bb70ee4"],["/tags/大数据/index.html","b1207fec0a3b3304ffdf410331c4aa97"],["/tags/大数据/page/2/index.html","1df601741fbf14306f2c9105056cf1b8"],["/tags/大数据/page/3/index.html","1d9fc755f699cfe7289e071cc5def1da"],["/tags/学习笔记/index.html","d9de3bd1970e6692db40b9624dd02bdc"],["/tags/安装教程/index.html","7b22fb5f66110e4512a3490694e984b5"],["/tags/实战/index.html","b11c54a1b34ba933ccdbbf219c458a0f"],["/tags/并发编程/index.html","6f402b0fb67cc7551a0fcebf0e47c8ad"],["/tags/数据库设计/index.html","5e31de1a83698280b056eedd4bbf136b"],["/tags/数据结构/index.html","2287a174de74e1ea8bf3909b7a20986f"],["/tags/案例/index.html","5bcb921a36903bbd847880911748e868"],["/tags/注解/index.html","793ba1b221dee5b797b3eed8e3637687"],["/tags/源码分析/index.html","7383e1d16cdef31922c20d31d1a2da21"],["/tags/程序员/index.html","31e1e0495fa87fbdcf00a8557324bbed"],["/tags/笔记/index.html","934dddb076438dcd4d0ec094eaf30b60"],["/tags/算法/index.html","30beec7cca588cb3611cbff5c055c2bd"],["/tags/设计模式/index.html","0a64342777e77b01c4f7290aad61b149"],["/tags/设计模式/page/2/index.html","f987d7b56cc6df4441d4a263b73dd9f0"],["/tags/设计模式/page/3/index.html","937c57aa63d31335fefcebcb89604632"],["/tags/软技能/index.html","d3c6703b0a4677d797675ca9ee6908df"],["/tags/软考/index.html","a2e47308f35e30029306fcfb2e4fbb10"],["/talk/index.html","24ce9ae1d9a4048ee315f4a16fb928a1"]];
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
