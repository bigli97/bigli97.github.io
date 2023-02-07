/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","1adf754ff8d000f2417573744c8831f4"],["/about/离职申请书.html","ed9ea0e61d1e6501e474fae2a62800f3"],["/archives/2020/07/index.html","6061245cd0dd05a5556ef672d7790a26"],["/archives/2020/08/index.html","6ffa35e4b529dca79cb3ee4d87e9bde0"],["/archives/2020/08/page/2/index.html","079c5461c6e655e89997b4dd664faf0a"],["/archives/2020/08/page/3/index.html","29382a4bce231302d73fc53a46042724"],["/archives/2020/09/index.html","5cb1cabea6c5534d23a05c7e4e758c2a"],["/archives/2020/index.html","0a77c922516ff3795d5684078e6b706c"],["/archives/2020/page/2/index.html","5348336b73ab81b992fd2d476644e755"],["/archives/2020/page/3/index.html","eb872ff71ceca083f635c61fff4e6252"],["/archives/2020/page/4/index.html","f55bb85868339fc4c03d1e07735d8ed4"],["/archives/2021/03/index.html","86ee0991c86b6ff5d9e1132651361568"],["/archives/2021/04/index.html","2ec31c1e092383f347d63694ff0b6e52"],["/archives/2021/05/index.html","1336dccfeed74711f0b8fb2644021d02"],["/archives/2021/06/index.html","f1681293e97571f7ebb581040478b365"],["/archives/2021/07/index.html","40ca3c0cf54b85d74687821be54fc0c5"],["/archives/2021/07/page/2/index.html","92d3718a6a12f1ca5512569f4bc57c93"],["/archives/2021/07/page/3/index.html","6f86d2303627afcff7f16ce4da3f30d7"],["/archives/2021/08/index.html","e97761831d8dd951d4f5d17581a23cc9"],["/archives/2021/09/index.html","23f46aca5f7f7895c54447924e4c36fb"],["/archives/2021/11/index.html","4a56ffb32ddb4a27a7fe2880beffb43f"],["/archives/2021/12/index.html","c6facec4257093f3d8609e2b63c5dea7"],["/archives/2021/index.html","2c81b2b719184155d794828ab4004b4c"],["/archives/2021/page/2/index.html","cb64b85e650e19eec4e35fd2ba1e9c07"],["/archives/2021/page/3/index.html","e8f1671e02f33fd52cd35fe89376ca03"],["/archives/2021/page/4/index.html","d97f315d032481b38115e303ed2a20c2"],["/archives/2021/page/5/index.html","d0115ee60d0f38e18f25029c17b95781"],["/archives/2022/01/index.html","dae2d440c798017d4b3075f702ba96ab"],["/archives/2022/03/index.html","2b792d52c48682d36a57b0948e081070"],["/archives/2022/08/index.html","d00dc51460ff43117406826d3fca19f2"],["/archives/2022/11/index.html","3cb665aa392bd22e909d4501f01c8ee3"],["/archives/2022/index.html","034770eefcb3db5db7102688c8c523bc"],["/archives/index.html","f0a134d8c992cc79b1af31cbba26cfe3"],["/archives/page/2/index.html","1973cd6ffe2a5fcf987cf3527a95c7d5"],["/archives/page/3/index.html","e1dc6523c431eb28b7e437f94dc133ee"],["/archives/page/4/index.html","3a942d419d3b86622374ea90bce0676e"],["/archives/page/5/index.html","429d09587b7ee6a43ebeb72161334042"],["/archives/page/6/index.html","d091b976922b2a409b9c88dc24346731"],["/archives/page/7/index.html","5797f062eb936169ef52d95b51f538f3"],["/archives/page/8/index.html","0f575b22f67f52d1b7dc2e2b58265e56"],["/archives/page/9/index.html","3f148d2958a01ab99b374289c1d6ba09"],["/bb/index.html","a17dbe173fc0f63cc22bfd8409bf0510"],["/board/index.html","c2e54d710a89a18fb726b8b97b483a12"],["/categories/Hexo/index.html","3d3df756cb59e34b0b3ac7de9b6900e8"],["/categories/IT碎片/index.html","e158fda1b0c166fced64526de0bda7f3"],["/categories/index.html","541306b63d4fc0a37e637a88cfdd067c"],["/categories/前端/index.html","412f87150b999a4350fc3cf712fb5ebe"],["/categories/大数据/index.html","f367ce5f482c8d3f7551412def438a59"],["/categories/大数据/page/2/index.html","50704c4698ce8adceb14f3cf4780abf5"],["/categories/学习笔记/index.html","d8889c977a25bdb45980475343e317fc"],["/categories/工作实战/index.html","9bea1b8b1383b1ce4cb387e3e19a01c8"],["/categories/开发手册/index.html","98d4aa2b3d2591c7648cd535c6339dbc"],["/categories/数据结构/index.html","6f760d362b9a668f03556ddb14c237a5"],["/categories/案例/index.html","54735683b96b8f114875f62c66999b28"],["/categories/源码分析/index.html","1ec7ebafeb14e449bea4d6b68ed4ddd5"],["/categories/设计模式/index.html","9a990a0953019e3457f206dd1338fc2e"],["/categories/设计模式/page/2/index.html","17ed1fa38b537f68cfb684ad68b0610d"],["/categories/设计模式/page/3/index.html","f5faf15bacea02d2bea9ee09af3dd591"],["/categories/面试/index.html","e48f6a055cf644ebd377b36add655568"],["/categories/项目/index.html","5392c60099284f971b48fff07e0aa55a"],["/categories/高级/index.html","acec32f901f4530d9199e2dd81b17e38"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","d149b0dbec8ca099e5cd9783228c722d"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","f78020f7af014b06fd21628dd37ff327"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","69c62dfa8e4f2095a8249cb949208488"],["/page/10/index.html","4dfd5c8716a67ff535307460a214bc13"],["/page/11/index.html","336e9bb13ae53cba9aa54f1883152d6e"],["/page/2/index.html","359c4205e2f0ef5b0cf36101f2ee6352"],["/page/3/index.html","d1632d0e4d149cde1c759efca36c8a53"],["/page/4/index.html","08ae956a809c4fef5e4e12c28d0656a3"],["/page/5/index.html","23e32e3ef6e5828ffae3da54230152ad"],["/page/6/index.html","3b4cf5c79ef110425f2eb6062cdc6350"],["/page/7/index.html","dfbae9de5a8b6d0790d9f2de40971fb2"],["/page/8/index.html","ce10b5b3149552aed7696febd12621eb"],["/page/9/index.html","111e70b70712d9bcda4930489ebe1862"],["/post/121bde1d.html","a49a43ae053048d30ba7bb4fa0adfc81"],["/post/153083dc.html","74e1fbc0acf41059ff8ba0a9d157616a"],["/post/164eee11.html","b99abce3e02f9af6950dd0e210744aa8"],["/post/1a7b7abf.html","d332407fc09ad99394e249c4433d2bcc"],["/post/1baa3967.html","25069e05df7d3c90c6534dbe9b323a90"],["/post/1f4ac2fb.html","ed49f07871dd1a192ae3d145e75d05b3"],["/post/22580020.html","6985d6366818f31e0f1edc9b4d9519b4"],["/post/286296.html","f6288b96aed8853f802a2b91c689fdb6"],["/post/2cd418c2.html","a69a2b03d0df9b918850c50ee78e02e9"],["/post/30cf0cd2.html","170f49c17cfaf92c86787a7cac31bfbf"],["/post/317f8360.html","296a109b18bff052f38262e30c5cc8af"],["/post/33cb1151.html","652350a5198e617d4d16ff866cdaacc5"],["/post/34e57ffd.html","9e3c357b9e7da574fbab8b9bd328f550"],["/post/3d20c1d7.html","bc58dfb79cdcbbe35d3ae85d70126d59"],["/post/3d24dcf9.html","352fcc22c66049458a8d6d11decafeb3"],["/post/3f6c447b.html","91bd24f82392fcdde898dc6f87b4e1d7"],["/post/490cdff9.html","0213a6297638a2482f46d7c2a41b0d00"],["/post/4a1111be.html","b6eec9d41a44bad863bfec8aac777b96"],["/post/4fa8e0c4.html","dd3fd308c8aab7195bbab691789cdca0"],["/post/524e74d7.html","5dbdd01ba6395778f4e900d1bf5da926"],["/post/539343bf.html","e467cd7a36953cacc34908c9d1f7861e"],["/post/54788f73.html","821910532fd5c5108a0bfb053dd6e4d4"],["/post/563268dc.html","97363314c177c103e900b615cf27a665"],["/post/5ac88c70.html","16ba8bf8f122daebfe4bc9bdf6ff4e73"],["/post/5bf55f4.html","1746837f24807a623c33c505ec748952"],["/post/5e87465f.html","eb78dccdc687be2438c2408304870e52"],["/post/6016428b.html","37be6cc097e4a896e221015426946b2e"],["/post/6208627e.html","4c979761e7aa21e128ae0bc3b34e7575"],["/post/64b51ed9.html","815978136089d9189cb047b0a5b6e492"],["/post/659da5b.html","bf461e2599a69a0b56617d1fd8bff948"],["/post/6c429b75.html","cfdfa211c867528de8298e4c3de3bf07"],["/post/721d4875.html","0cc40d9d5e0933dbd5e155563fe79242"],["/post/72e3b671.html","a1b92223a8ff36fa7637b4688a0bf01b"],["/post/730d8d6c.html","c69521bfceb722fd2b510fb2825b7cff"],["/post/74fc969.html","0ca0aeaeb7e34b4d59b81f832f56236a"],["/post/78134e07.html","bc6fc6b44c52e5cf0fea61763fdaa761"],["/post/78c07335.html","36a8fe896ed9f3e43ea7b9f9381e1351"],["/post/7901ad89.html","224606dc51ff71f0295e7f04c19f4121"],["/post/7b216a3b.html","361ad7035d18aed8231c92465f138b0d"],["/post/7b510e10.html","370d815065d43fb0c33e0de64b51c080"],["/post/7db2942d.html","73e2235939e76e650781aaf2ec397b52"],["/post/7e6c6990.html","a1e0414ecb3ad2aeb13d2f05a4830db2"],["/post/7fa79d96.html","6e7224658f7b575e4cb91d9ee8d620e0"],["/post/855673ad.html","ceae9aad76c14b995ee24bb5124979b9"],["/post/892a2328.html","388ec628f1d6a51a03c27482c8c3599a"],["/post/8acb1976.html","2bf28446c8d6b8073ff6f3b3d5ea2f73"],["/post/8e4fa41e.html","7a674afa3fff2241c2bf3abbe578149d"],["/post/8f488ef0.html","6ba27ad530f3144cbbac29143e04e3af"],["/post/8ff08e27.html","fa207d590848f705e3d261349b59f69d"],["/post/9055d217.html","69ccfe90bcffae7e78fdf85c5a0e281e"],["/post/91ad9ce3.html","9050f67c35c8ff176c1df2727cef4690"],["/post/96131cab.html","1ca8d8815098b414630e2897474f8ee7"],["/post/96b5906.html","f7094388664e477e61d546cf3c6fb560"],["/post/970fcca5.html","fa1b35ee61b5d6e2f0eee06f04bebb52"],["/post/9a246216.html","fe6013b0941e96e960bf42f8597b0923"],["/post/a10c77a7.html","8280d438877a6b500075c8600977cdcd"],["/post/a708a60d.html","14ef57a516fef1796b129f60f1ee712a"],["/post/ad27c5a8.html","f3e65734f32bdd6524effc07694167c0"],["/post/b6c47025.html","460bcdc7073317131891bdbc4f9db7e2"],["/post/bd69ba8b.html","cc365a29d75aac3812f362fbc92af78c"],["/post/bf7f3b65.html","c87437277796708fce7bffc2fde40519"],["/post/c3176455.html","fc63e4092acfe35c344004673dd3bdad"],["/post/cb80ff62.html","b5e899ee12e95086a6a00ee95499ed91"],["/post/ce0e685a.html","67f813618b44b3a7d652496ae095235a"],["/post/ceb39ac4.html","4d1f013f59033fa6c29404c2a3ac2e9f"],["/post/cf413e35.html","0c8b5bfb9204de50a8908a7e60295b9c"],["/post/d036071c.html","b8fdefb9fa12fe3a164c24a1eb74fb53"],["/post/de3bac1b.html","26df6651f8a957634f41c2cd46c8d1aa"],["/post/df879792.html","f327dc1befba00af174a353865d391e7"],["/post/e008fc33.html","3579a59d53ba941419186a7c275693a6"],["/post/e19da94a.html","5f7ffdc7d6b1aa1af2847cb8000caaff"],["/post/eb04e0a.html","ea29478406bd44f04699c5d36d7853f9"],["/post/ecd67acc.html","dd82997da5d58774800bf9b06e017067"],["/post/ee040603.html","bee48119eb92198cec757a2c595a69d2"],["/post/f1601c3e.html","fd6cdd35ca02b789cecb62b96e459209"],["/post/f31a5a5b.html","0937498028e20e8a2dfab95dbd74a5c7"],["/post/f5c535ea.html","11982585fba2a57fca04204f2e2099eb"],["/post/f7500981.html","c8e66ad6980c25c313f14da717998054"],["/post/f79807ee.html","70d50c8fdb830ef144aa8d33e1c2fa23"],["/post/f7de8aa8.html","20560b7485815fa2edea94d11447b8bd"],["/post/f8239d66.html","7454cb048d0e56edbc586a4654151fb4"],["/post/f9f5e0c2.html","bcd1a111f63beaf60e69c56def089762"],["/post/fb77661f.html","93d7028972fa00995cab3c907d4cc733"],["/post/fe1f88a1.html","1e89f52fc4e7b1d6d91df8d064ca8083"],["/post/fe57b0e4.html","f5145c1f7c8861c70ee9542028eff52b"],["/post/fe816c3c.html","49ad858a2396720f9718ce94543a4939"],["/sw-register.js","a808db0ea0a7ea41de4fcb75be5d2577"],["/tags/Butterfly/index.html","9c542033f8ea201f8261d78802189e6b"],["/tags/Hexo/index.html","c2129bff2528dc3912f98a71b6ee1f5e"],["/tags/JVM/index.html","64a5e99f3715ab5fd75b0c7adef8eb51"],["/tags/Linux/index.html","ca36e13abe3ad956e9a7e78228b0a677"],["/tags/SSH/index.html","bda071135f972a225080c4443c444762"],["/tags/index.html","ea06f8a5697408d868edf4e4615043fe"],["/tags/spring/index.html","3f5052c0d17d94c02c0c31c2587dbc91"],["/tags/vue/index.html","88906998994011177d1aafbf4fc37f00"],["/tags/一问一答/index.html","d70d240125f43c5cd900996b62b0d2d1"],["/tags/个人见解/index.html","0d7ba75ea92ebba06f1fddd799b85e54"],["/tags/大数据/index.html","78b8c87d1cebad1879fff9bd408e1d82"],["/tags/大数据/page/2/index.html","19bc1f5fe1dbd470f92990a4a42aa152"],["/tags/大数据/page/3/index.html","e25a2a0fd456b6c786f2432168eed753"],["/tags/学习笔记/index.html","0ea421617a3cffcdae401d6f9b4f481d"],["/tags/安装教程/index.html","c8e24525f2a81a37b0597bf717ce88ec"],["/tags/实战/index.html","3d809360765498b6a5d057aa80377b2e"],["/tags/并发编程/index.html","646c545f452ee08b52e0b245be082202"],["/tags/数据库设计/index.html","bc287c9c2053931c32f195a9f47c9434"],["/tags/数据结构/index.html","ae694aad9cc7bf56a52f0084c9a95bf6"],["/tags/案例/index.html","cf298de49164db8fd5f0e575a4309a7a"],["/tags/注解/index.html","316da27b2640390f4c3616b3526e737f"],["/tags/源码分析/index.html","e3c92016f1ecda763bb7fe55ea0afe4f"],["/tags/程序员/index.html","ee2f05e469f3f5aede27490564041ea0"],["/tags/笔记/index.html","ee2c223ec194f5fdf727eea5a904db08"],["/tags/算法/index.html","8d49d5dbae2b6143b804d702b5a52862"],["/tags/设计模式/index.html","ffb319ff98a2a51b88516fd7e392f617"],["/tags/设计模式/page/2/index.html","55692cb91394075c19fa93146eab9b16"],["/tags/设计模式/page/3/index.html","e122431270a820ceefffaaa42b37b225"],["/tags/软技能/index.html","1161577b07ade6b6b0a07b08e92a4b30"],["/tags/软考/index.html","95d3de6298969c3b274cff14a08e3445"],["/talk/index.html","33a6bf7065cc6f308f2ed772eb0530a3"]];
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
