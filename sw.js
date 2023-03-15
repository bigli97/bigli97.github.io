/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","a638f79e42962ab06fd37568d091e2c0"],["/about/离职申请书.html","727883c52d4274188e4ae35ed8a49b6e"],["/archives/2020/07/index.html","8cd04986f0de31f5917c20a708832c8a"],["/archives/2020/08/index.html","2663b360d5405ed859b2c7391462045a"],["/archives/2020/08/page/2/index.html","ebb04c7371f09dea47128e4dcc5ea031"],["/archives/2020/08/page/3/index.html","f80d095a0fe9ffc0beae672bae729b15"],["/archives/2020/09/index.html","5e00333352da0e2d553352fdfc7af5be"],["/archives/2020/index.html","dacfe28994ee813b3e7d432f3d6cc49a"],["/archives/2020/page/2/index.html","c2cc9be40357072893c4f5c77c8feb54"],["/archives/2020/page/3/index.html","ba587711b6ec3138c0437ca0bbb056da"],["/archives/2020/page/4/index.html","cf609892873ddf740fb952b9a26c1a42"],["/archives/2021/03/index.html","f4da671e753853259d5302fb73fdf204"],["/archives/2021/04/index.html","df196c6daf1ccc588f6e3b05c0aef9b0"],["/archives/2021/05/index.html","7ace58f0b6eb04746c71f87c47bf3a33"],["/archives/2021/06/index.html","d8debdf07836eba5e8bf4ab8d62e253a"],["/archives/2021/07/index.html","6780c687dd1c6cea032c2ec30f6b9819"],["/archives/2021/07/page/2/index.html","e02feabe69352d5313702782880e2561"],["/archives/2021/07/page/3/index.html","25638d407df5b97490d6e2e4b30cd319"],["/archives/2021/08/index.html","19240fd5299a3adb3674dd96a7de9c33"],["/archives/2021/09/index.html","9cff8562ff4ee927052d32c0fee1e729"],["/archives/2021/11/index.html","8d74bcf0770212363eaeb288d55441f0"],["/archives/2021/12/index.html","ac36943e2c7f1fc08289fd8cd2e6947d"],["/archives/2021/index.html","8058b8c0a7d27d5a6c80948595020a25"],["/archives/2021/page/2/index.html","74ad88b1c058f489b45389545e414450"],["/archives/2021/page/3/index.html","f861ec351654d1ea2a7c357b43d882ee"],["/archives/2021/page/4/index.html","607fe1134de1726bd49b3399bf5309bd"],["/archives/2021/page/5/index.html","a565cf73a4e3da703ebfe4b5f4cb1d66"],["/archives/2022/01/index.html","88ebf91759c36bc75f8b0b97ba7277ef"],["/archives/2022/03/index.html","a1b89314644d2ff2b57d2783cb1895df"],["/archives/2022/08/index.html","3cdfef52854c67f23f91b25502db1a26"],["/archives/2022/11/index.html","9724380f738d7c22793dd550f8333d13"],["/archives/2022/index.html","e2e97875c176395e993e5c348d0bab92"],["/archives/2023/02/index.html","8f72e6342957fbef3081c9471409d3d6"],["/archives/2023/03/index.html","93350480944579e6f2393b867e2304d3"],["/archives/2023/index.html","1ac214702ea679d1d928f4b21378d71a"],["/archives/index.html","be56a855c107c3a3e09646a0c79effe7"],["/archives/page/2/index.html","69cc67472dd7158ec2bc3d6971b55f1e"],["/archives/page/3/index.html","3dba3c57c3d502dd7f8f25d42c6fa0af"],["/archives/page/4/index.html","ef93ee4b7e1a7523c1b81a5e82440d5a"],["/archives/page/5/index.html","864be7c47209a18a1aae98430c107895"],["/archives/page/6/index.html","be7e724e2b9e27982ef0033bc7193926"],["/archives/page/7/index.html","2911f5f65e6261543ae6bde19c5956c1"],["/archives/page/8/index.html","50f02439250ebbdfef598d9f98ca9257"],["/archives/page/9/index.html","88abca11de2c2ac6bead8ced109e6a91"],["/bb/index.html","c2c8ef6bc85b524e62b79ac11fb296d5"],["/board/index.html","dd74dffc27ef6f6a5313a48faea34df5"],["/categories/Hexo/index.html","fbc3455ebca99dc3796cda2ed08eec25"],["/categories/IT碎片/index.html","bd43f8ce8876936de944564a389dbb75"],["/categories/index.html","f98435c96680cbbb33aa393c42ec2675"],["/categories/前端/index.html","222447f04f78725128a6a22b4a67d898"],["/categories/大数据/index.html","76ed715345434df4acbdf6d039a281da"],["/categories/大数据/page/2/index.html","2e2dceedd693996fc80245f308098f8f"],["/categories/学习笔记/index.html","006443e92c3c3219ca4da612343c5de7"],["/categories/工作实战/index.html","1a80df8524ee7d1137109e80bcbcd0bb"],["/categories/开发手册/index.html","137cb369488a6abb4395b776f73c3299"],["/categories/数据结构/index.html","0e47b63647a4b5db58c2e4938980388c"],["/categories/案例/index.html","11396da434f2882c6d07b6c6e79e4fd7"],["/categories/源码分析/index.html","c588bbd40fa78ccdc816d3ce20b30237"],["/categories/设计模式/index.html","60a1b030eb7adb5e1445f5cb149cf01b"],["/categories/设计模式/page/2/index.html","e0d6b9f1fdc5d490198c8110ffe42448"],["/categories/设计模式/page/3/index.html","f0dbf7d86803a8934e4afaae9d13c34f"],["/categories/面试/index.html","f7629b894980efabcd4d4d800481a0c0"],["/categories/项目/index.html","472dfdb76a67d2724702de3ab8655beb"],["/categories/高级/index.html","f4767c2590d03e5dd540ac241707f342"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","e8caad8de7e832fa1eec00b47fabddf1"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","01b000871bd9b381162100ecb263bb64"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","efd4613365c0f3b9c71533374b3bfc12"],["/page/10/index.html","fee0abc2ed1460d2e339df82b4fdb6a6"],["/page/11/index.html","7382c096522c2cf59bbb9ee901909a81"],["/page/2/index.html","d81104e2a605b5417e2a7915caa81a42"],["/page/3/index.html","f2fe99c7482ce6eea316f3ffecba0fd7"],["/page/4/index.html","9825e7ec64a7f5f0264fde4dd1a5e979"],["/page/5/index.html","0ceda9cc85e6c2cdc58a957af3a33698"],["/page/6/index.html","840611445b14e580ea35b4c00d15e2e1"],["/page/7/index.html","2affe2ebe83b4f4a8e6e9aca8ecd02b1"],["/page/8/index.html","e4dc695475c2fbd2b8821527fdffea11"],["/page/9/index.html","14b33d9e5ac61f3a1a089529049a693a"],["/post/121bde1d.html","a132fdf1afb5905eea5da778bba10350"],["/post/153083dc.html","214e7f5f11d6020b7a025b898d7ee5b8"],["/post/164eee11.html","6e7c7bc31f80712872c09e1b58a72740"],["/post/1a7b7abf.html","6858e26cc3739635475aa54d04a400fa"],["/post/1baa3967.html","76b33a04b25b6dc019791c6f1955360c"],["/post/1f4ac2fb.html","40032ec6417e1a89e42c23fbaadadcfc"],["/post/22580020.html","4375ada44128c69aba2098d7df305274"],["/post/286296.html","4c3bbbe120d9d5b94244c9923ea94b45"],["/post/2cd418c2.html","223782fc31fc0d9c54f99b9cf9837170"],["/post/30cf0cd2.html","96d2f3f8a860c14d98aa888f246df7cc"],["/post/317f8360.html","1dbf0a150c4b1d1711681bd57a777172"],["/post/33cb1151.html","50f0a1a83b32f56e52a155ead3ce0721"],["/post/34e57ffd.html","5d2105f52b625baee9e062d14b7b5dec"],["/post/3d20c1d7.html","64e53ab4826c662359bff4ab5883c56c"],["/post/3d24dcf9.html","c74ccd46d053f0fafa8d876339999d2b"],["/post/3f6c447b.html","909841bc744827687890145dfa6d8b86"],["/post/490cdff9.html","4d7bd0b5355bedb944879db01ecc4c6a"],["/post/4a1111be.html","1c202372c2bea3688e6f6b4077d77734"],["/post/4fa8e0c4.html","c79cbf07688ac655215523f9bef5521d"],["/post/524e74d7.html","9d3b7cc6d841b52f4f22f8f089202376"],["/post/539343bf.html","2dfd166a0671cd11b26701ffa980960c"],["/post/54788f73.html","9da78a700970435f85381f6f6c91c609"],["/post/563268dc.html","d6beccc8775b07d5d3b26efc29986878"],["/post/5ac88c70.html","b5e84c8f4f0357146250fe473da341b1"],["/post/5bf55f4.html","7fc41e2efc09f955a6721d68eae69a24"],["/post/5e87465f.html","583480a1605fbccceb40b967e667f73a"],["/post/6016428b.html","0549f85be990fb019ee1f3f678fa5b7e"],["/post/6208627e.html","a327a1e35375ba7d1d7a87b158296029"],["/post/64b51ed9.html","93fb0b953a28e6569ffd995ca1a2e176"],["/post/659da5b.html","771cfc5c54a09f2b81f7ed1de138e3b5"],["/post/6c429b75.html","5a5814fa79b8389c0dc5c7083e95112c"],["/post/721d4875.html","b081b76ec0b7b60bc7e453bfd032935f"],["/post/72e3b671.html","6963227336f7ccda45f704cd2def1d67"],["/post/730d8d6c.html","e720f0080649add1fe4a9d4e4fa226e4"],["/post/74fc969.html","6251819d20d1b78139c2bd672c29f87b"],["/post/78134e07.html","8648760cceb781e7f810c90d32e4e8e6"],["/post/78c07335.html","9329045de3563fc90d2470d08dff67f4"],["/post/7901ad89.html","2411904ef1322f052e32445882e36a37"],["/post/7a2a0c9f.html","cd42520ebef5c741c0c99a0049e4fcd9"],["/post/7b216a3b.html","dee5e32fd3ccaf16fb4ab3c2f882c533"],["/post/7b510e10.html","1f3df6e81232e8785c878266d9454694"],["/post/7db2942d.html","5f5afdb63558745cf5a7d6123f0ff189"],["/post/7e6c6990.html","108816c107dbc354263cc2d8771b3e8a"],["/post/7fa79d96.html","68a0240370bd2c986a1f8e64292cd078"],["/post/855673ad.html","fedc1e3900835cba044a0301b1c64346"],["/post/892a2328.html","012d7f639e34cd798f77dba5bc367e5e"],["/post/8acb1976.html","9ceb18308073b33396589a16e1bf400f"],["/post/8e4fa41e.html","3c39ff0ceb9ca5d63d9f018c5ab4c8bd"],["/post/8f488ef0.html","7fcbbf0724103b22050281a2210e73f9"],["/post/8ff08e27.html","9cd3939d40003f7c593c98ce70ce04cd"],["/post/9055d217.html","e35c6f425ea8ea5fd4dfdeb48b6e52ed"],["/post/91ad9ce3.html","e13cb99c6f52b6a0bce6ae00a7346b13"],["/post/96131cab.html","8727ad34574033a22e48b84b499eab92"],["/post/96b5906.html","53ed77d3f2dde9752aff314374202ad2"],["/post/970fcca5.html","1472c7e89285a8afa524c3d2fedc21b8"],["/post/9a246216.html","0d82187f6eaebfac6234a48b3579cc49"],["/post/a10c77a7.html","aada9e1ce1d37d855793ea26593b5500"],["/post/a708a60d.html","e414440867a58a64b39126e84e691178"],["/post/ad27c5a8.html","4f051003c43f7574e3e922b38f0afbfc"],["/post/b6c47025.html","2df2fbb2ad6f6e13893168666e17c84d"],["/post/bd69ba8b.html","dbb40840f45a6434f49cc65ca4609352"],["/post/bf7f3b65.html","702221a42743a025f4d210e555596ce0"],["/post/c3176455.html","ea89490db49659efe9c2e6933497983a"],["/post/cb80ff62.html","42f636ffc311d0d490fe8723ee8bde35"],["/post/ce0e685a.html","9b8c67bf8c340b93beffb75fea36a0b9"],["/post/ceb39ac4.html","e7ee317eb94fce4b3a5582319dbe9c75"],["/post/cf413e35.html","dfe171b5bf8e93f8b8a67cd84951bc7d"],["/post/d036071c.html","651a84c9d566380b457784d692a27d24"],["/post/d39191a5.html","94d04556f82941ffae957e1ce6cbbf7b"],["/post/de3bac1b.html","ad149a69a54dd8e3fdeb63281d681940"],["/post/df879792.html","838094d9185be8bddc2a3d1b9b3fcb09"],["/post/e008fc33.html","191789842b1775f39198d22b53b8437d"],["/post/e19da94a.html","4a3c46e0386b2e7bea658f8d4b751af6"],["/post/eb04e0a.html","6617ee8044121d4f062ccb378818cc28"],["/post/ecd67acc.html","1afeeaf7e3edbaf80ac523b0a3cf9d85"],["/post/ee040603.html","729a60eaec60a47fe6a54000604c956f"],["/post/f1601c3e.html","757f4c93e5af71b6deaa07783a2ee6cc"],["/post/f31a5a5b.html","05601e53f2bb5de930b2ba73ab1441bf"],["/post/f5c535ea.html","bb2e8cd05d7f7a3ae3a96ecb89768fec"],["/post/f7500981.html","e6169a80b9c3c4e137bdfb72e7e14ce4"],["/post/f79807ee.html","aabb50778ab5d9448a07813310a17aa9"],["/post/f7de8aa8.html","ac58ec93c23c8ea39e133b61d7b83771"],["/post/f8239d66.html","1b940df656cef3e0b7994121ce959f08"],["/post/f9f5e0c2.html","14f6936b73d470245222eef91f36f3b6"],["/post/fb77661f.html","b2f5401df442bda15b4fd6b584ec273e"],["/post/fe1f88a1.html","9d3fb6841d7cfc3f204c8bce5fabb4c0"],["/post/fe57b0e4.html","617c3b0aa5fdd6be2a421f26e193f8de"],["/post/fe816c3c.html","f8d8f0ef0bd7227b0c601934350deed9"],["/sw-register.js","a60b9e5de0dffcf01c35a8ae2b94102c"],["/tags/Butterfly/index.html","2d424a90f13a01df7e3a3027848f8d64"],["/tags/Hexo/index.html","aeefa7433f0e9dd692e87a373a0754e4"],["/tags/JVM/index.html","1b66f2419c2814abf6e53e52eee62fc9"],["/tags/Linux/index.html","ecc271983db4d6b593710236902dee0c"],["/tags/SSH/index.html","6be785980aa8182c887e3efb0e44ddca"],["/tags/index.html","cb1232fc0f2f977cb26113bcb2bb97fc"],["/tags/spring/index.html","68acbe5b1a5dbeb9c64fa3a8b1c1dfbd"],["/tags/vue/index.html","7ff6f956ad31428996670ac8744a4bfc"],["/tags/一问一答/index.html","ed44a1153a6cb383ec534af1bc62b497"],["/tags/个人见解/index.html","6f6a494b099554a7c276f172830c5d6c"],["/tags/大数据/index.html","a492ba8be8e614c6ebbe73ffde766f88"],["/tags/大数据/page/2/index.html","b99f4fb61736986d5313b69ec3f30e60"],["/tags/大数据/page/3/index.html","06712be3dd6d6cf11793c7e5fe8fcdd0"],["/tags/学习笔记/index.html","e7060b7eb70f49c1bb17d2977487f367"],["/tags/安装教程/index.html","fbb789259a6633bc7da38be1044ac5c0"],["/tags/实战/index.html","a92df4a0c605a0ea4f8a1042f79d4a0d"],["/tags/并发编程/index.html","2fcd0b75b3c3e8e4a5c59966d69b95d5"],["/tags/数据库设计/index.html","22f4c9cf794a9d7fc2671723d458c225"],["/tags/数据结构/index.html","a0cd4db6749adc48102056c99867fc9a"],["/tags/案例/index.html","e29ecd2f5923ee68531e5198eaa9fb3a"],["/tags/注解/index.html","49aaef03a30968f6a2410c3b32964517"],["/tags/源码分析/index.html","4ddb6cc8d5e8b4ed016c759dd25ecfeb"],["/tags/程序员/index.html","229017d7ec19155b813476a2b85b9cea"],["/tags/笔记/index.html","969475ee188d72fa7e8da16672e7d1f8"],["/tags/算法/index.html","ef95b712384b4cd47b07eba15746b7aa"],["/tags/设计模式/index.html","ed510615d7fb12ec5c59736ce38147f2"],["/tags/设计模式/page/2/index.html","68e4db2e0ffd5e3fe5939a3c61da4cf3"],["/tags/设计模式/page/3/index.html","6d3b605e1a9bd3714b1f12999f37c75f"],["/tags/软技能/index.html","cdd1820baea44924a506e33c83f00d91"],["/tags/软考/index.html","7a830a1a8061d339a3ee208e7c2028e1"],["/talk/index.html","c85ffd46a70f12184d75ee1cad7e39f8"]];
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
