/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","f5f29109048669f62c11688f8439a039"],["/about/离职申请书.html","b497212e7ecc9d8274473c127c3532d2"],["/archives/2020/07/index.html","fcde8a8c8a07f3f5e144292d2388bf02"],["/archives/2020/08/index.html","b5a45bc1ee0b05ed5ec0963052a8675b"],["/archives/2020/08/page/2/index.html","d33947efd707af67cde518a57db480a5"],["/archives/2020/08/page/3/index.html","60182e6fb8ca3f21b892270f5f2bdf1b"],["/archives/2020/09/index.html","31c39a70296366511627bb6116cf8367"],["/archives/2020/index.html","9264b1b44a9e1dfb4185acd5aea72f98"],["/archives/2020/page/2/index.html","43a754e80c269ffa9e77a528b1825ad8"],["/archives/2020/page/3/index.html","7784b2cbe0c07cff430b610d566668ac"],["/archives/2020/page/4/index.html","3181702bfb72af63968528e054565485"],["/archives/2021/03/index.html","5ab61bbfde04cf686ec3cba3c7be1177"],["/archives/2021/04/index.html","02b6d0cd892885c2f2353895a9e4f638"],["/archives/2021/05/index.html","089b6cd5d315143db0af51b037c84de7"],["/archives/2021/06/index.html","f368a8444b1d7718fb5e3f6f55bf3c4c"],["/archives/2021/07/index.html","ded36085885140112104446d09d36ab9"],["/archives/2021/07/page/2/index.html","0d217dd16eb587ec3764a88630fa8a24"],["/archives/2021/07/page/3/index.html","b4a366d05f4715d74c797e5eaab984da"],["/archives/2021/08/index.html","098bac58ae098a791bafec17fc9ffe60"],["/archives/2021/09/index.html","2767bd46744272ab75ff54d4eabb3e45"],["/archives/2021/11/index.html","b2508449e8f9250c21f2da03436bfeb4"],["/archives/2021/12/index.html","4ecfc6b94ca13db4fe4c9f5c4c6097f2"],["/archives/2021/index.html","99c23e5a31f6760d3f090523d555cc25"],["/archives/2021/page/2/index.html","74e3dd093ac50802ee11377d430e8497"],["/archives/2021/page/3/index.html","509148fdd3a1bef36e34696a6de1de0b"],["/archives/2021/page/4/index.html","4b93f078b539ec62f7e64231f5c9edc1"],["/archives/2021/page/5/index.html","91f56c26326b7bf7d53844b61223440b"],["/archives/2022/01/index.html","b35c830ed106855825c001ef951946fb"],["/archives/2022/03/index.html","37a7aea2c0bbca9894bf8156efa0f30a"],["/archives/2022/08/index.html","0b029f697febcfd5a6c4be7eb9060d13"],["/archives/2022/11/index.html","889c30ffa5ea086d72112979e407a925"],["/archives/2022/index.html","7dc395e351dd39f9b2cacadb3c07d382"],["/archives/2023/02/index.html","1f8f2c16dc0b2d33ff2336a9e154cf59"],["/archives/2023/03/index.html","88f9d2fb7b58463f670f315613c6b06e"],["/archives/2023/index.html","223e156ee62997bbdeb656830747f75c"],["/archives/index.html","0f089137661670b8d16b9b0116a9911b"],["/archives/page/2/index.html","89668cfdd0f0f5bc99997b2a345b3d2a"],["/archives/page/3/index.html","9cc8c859cafe94c441521744dfb76854"],["/archives/page/4/index.html","833871e7196dec6440fa7a4ae0583bc8"],["/archives/page/5/index.html","dd992ce76b6bb144138ca92b22777847"],["/archives/page/6/index.html","a38de723c7f3d88bab6b05263b3a88c1"],["/archives/page/7/index.html","badaaf31106c41a8112ca7fc39d20c0a"],["/archives/page/8/index.html","8e81b22d616924fe634274d8b5f749e8"],["/archives/page/9/index.html","1ca01409d87e1ccf734b6601dd3ae315"],["/bb/index.html","1e930d82358bc865fb34b1d17d8e7617"],["/board/index.html","af4894ccf796a6f2cd269b736f38f386"],["/categories/Hexo/index.html","0d9f9e8aa46116fe9c9adfec6f75bfe7"],["/categories/IT碎片/index.html","607e90a146b1d0eb1b775e3814d1c679"],["/categories/index.html","96225da3eed9ace2cea401f1c4a7fa2a"],["/categories/前端/index.html","e4e051d4eded8a8115ca9a79633ea800"],["/categories/大数据/index.html","0be97a13b269c94c196a34ac8e1783a5"],["/categories/大数据/page/2/index.html","1b72c915358a9e4b1adb9dd8b4ce7fb0"],["/categories/学习笔记/index.html","3eabe344629b55574e3d2c97ba06e132"],["/categories/工作实战/index.html","9f0fb7fc3a354e5f6d287fd4760fc016"],["/categories/开发手册/index.html","48e72416aa0ac6b6b54e40d10ca18fcc"],["/categories/数据结构/index.html","28e9e8fa63a56d338be2218985f5007c"],["/categories/案例/index.html","d9715243226b67899f273b1c3f8e2d5c"],["/categories/源码分析/index.html","29c7b19fab3a6ecad4a08392e00f964e"],["/categories/设计模式/index.html","1e18c34f5b35964b9bd359c47851d2bf"],["/categories/设计模式/page/2/index.html","5eef1ecd5d1f1c12e5539d64f1ed37f0"],["/categories/设计模式/page/3/index.html","f4678ff688eded2b0c66741c36c5e294"],["/categories/面试/index.html","7d69bd8f93557836c23ee3b7da3fe265"],["/categories/项目/index.html","a26ae57c097809e7530315713f336345"],["/categories/高级/index.html","5882525fb0abbbc44d374bda4f26b93a"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","9ae4030a86bc8ed2dc6c4f79eb8dafe3"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","6fd51f69653bd81cab3315d7d594cdde"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","9baef0563c256ceed963a07d105f9a9d"],["/page/10/index.html","dc22ad9c8ea67aebbf60f5679389fbb3"],["/page/11/index.html","0461c988b324883d58bbf8a139642c5e"],["/page/2/index.html","67e3691998ca4c217ae1902ad94258a8"],["/page/3/index.html","daa26fb5911ee692be456c782a5d296a"],["/page/4/index.html","91ef14a9e9c4d6b564c8c918e970bf5e"],["/page/5/index.html","c0a82664fa04cdfa0c3fc0325a8e85dc"],["/page/6/index.html","50ea7b5470ecaea1a2392c4845a261e1"],["/page/7/index.html","cd058c8eaab72b2b600ea8bc5688bf67"],["/page/8/index.html","2e0a903e2627493c124a0f43f6a42df9"],["/page/9/index.html","cdbf891523711a33d517294c7307e78c"],["/post/121bde1d.html","f7798a48c33fc8f132339bf85ed22d75"],["/post/153083dc.html","6bdbdb611aa22c9b8dc0b7f5f6b1d713"],["/post/164eee11.html","f3d2d48be871492e88b33963c2ca6290"],["/post/1a7b7abf.html","c071171b1ad0df579ac495333f0a40d4"],["/post/1baa3967.html","6b3a9807e5069325543f41bd01ca8ade"],["/post/1f4ac2fb.html","b3e08fe85771f4b9f73dfab6a0f7c0ec"],["/post/22580020.html","1e7269faa67c08ded03d36f021add0bf"],["/post/286296.html","14d6100ec6f4437d3037498daeebd660"],["/post/2cd418c2.html","b61b41e7b09ec12faffee967300fe238"],["/post/30cf0cd2.html","d487e1b934e76595524afce873e15244"],["/post/317f8360.html","961145dac6aae42e6dbcdd683b3b3154"],["/post/33cb1151.html","938bef85ce2fc4175265f2a398bee8d9"],["/post/34e57ffd.html","540e9faa0523a98a60bc1cf172bc0d91"],["/post/3d20c1d7.html","d3f2a960736708af3e0cc60569dcc4d4"],["/post/3d24dcf9.html","6012c0001612fdacd1003b337ad2826b"],["/post/3f6c447b.html","10ddace700edbc0891bf27b10ef23a8e"],["/post/490cdff9.html","eda44362fa0a58651be4efff0bacb487"],["/post/4a1111be.html","350024c8ba4a7e9fc0e81016cd08125f"],["/post/4fa8e0c4.html","dd6fbf7f6535dc00510da2bff7a06b78"],["/post/524e74d7.html","7869c114e80d930cc49607e749591289"],["/post/539343bf.html","227915cd24a49c406dfa85b28f47d006"],["/post/54788f73.html","5b998867eb2e835b0febceeec6e04cbe"],["/post/563268dc.html","af687e67547dfa2f3da70845563e98a0"],["/post/5ac88c70.html","caa0d6672fb8f63bcbc5dac4a56dc5ee"],["/post/5bf55f4.html","4c4b2af3d1e54c572a084ab5b2c78ad0"],["/post/5e87465f.html","98520c7e89fabd45c93bb633308ec6d1"],["/post/6016428b.html","86f324f924d012a85f31ced0e5cc6b6d"],["/post/6208627e.html","e3d6b01058d49f87624653d6337ae39d"],["/post/64b51ed9.html","9564b0e1d15d0462b4fc9b9d032fae23"],["/post/659da5b.html","47ee33bdd7072fd356f76dc93219c873"],["/post/6c429b75.html","a54ea0fe1c55d605bcca51573f48841d"],["/post/721d4875.html","909d52490ca0d4a7cc818deedda170d5"],["/post/72e3b671.html","41ec2b832cb63dcfd5bfd97e14a8153f"],["/post/730d8d6c.html","b4c1aad36cc792be6b4d918c4bab6b99"],["/post/74fc969.html","09247bb70dbbb693a63b1e39601efe5f"],["/post/78134e07.html","45a34ea4891e4ee11457ed4081a97c76"],["/post/78c07335.html","79c5a317c01bc5e4e705ededf4234f99"],["/post/7901ad89.html","313b29488c927cf8caeb3f9b0fe247d7"],["/post/7a2a0c9f.html","7656d863c509ab3cf9c6a5d6d7125190"],["/post/7b216a3b.html","d552b0985454e87e5e9f9c94cc795e42"],["/post/7b510e10.html","1c1a7d584b72166496c50ab7f075801a"],["/post/7db2942d.html","1709e432ce3d5b98ebe6954dfc87fbd1"],["/post/7e6c6990.html","40096f77829d755d1baa0a31d2fa7d4b"],["/post/7fa79d96.html","3875f2f4473c71d12557f20002f0e4d0"],["/post/855673ad.html","0df7ccc3daaa4e7029517559f2de65da"],["/post/892a2328.html","b3646aa2fea94108c65f94a7432d2427"],["/post/8acb1976.html","039a41d354a72335240680bcf8d78f8b"],["/post/8e4fa41e.html","add33355e724a0ce7eacb729137fce4b"],["/post/8f488ef0.html","58b7ba329cf6c4a5d18450ed55863e13"],["/post/8ff08e27.html","be75869cb6ba5191757a3cfb4d8cb7bb"],["/post/9055d217.html","5a6fb5cc989cd6b23fb4b4703cc95bc5"],["/post/91ad9ce3.html","8749322f036d13701422bd70c59edc93"],["/post/96131cab.html","5b9af1c5431d2eb55d3fcaf517e95174"],["/post/96b5906.html","c0f83684854b76d77587c76b805986eb"],["/post/970fcca5.html","ddc9b9b0d0f63e9dde1d715356cabc70"],["/post/9a246216.html","a56202f4e32f2273e01435acdeecd01a"],["/post/a10c77a7.html","45badbde20cde86d47160c540e775ecd"],["/post/a708a60d.html","d22b2e3206151cc0e1cb62d8ee4e7aea"],["/post/ad27c5a8.html","1e149af3710877194b13b9d7a1086940"],["/post/b6c47025.html","947d83e81a024c844bef88a07aa45463"],["/post/bd69ba8b.html","3b8edf97b92b626f13aa03d2eb71abb7"],["/post/bf7f3b65.html","d4a92e93317e94040804dfe78acde66c"],["/post/c3176455.html","01b8d7e611a72fc3d56950d4a1908e75"],["/post/cb80ff62.html","7b53bf7eb0800d6971d33166edcaccc2"],["/post/ce0e685a.html","c3dded5813d8481c11ed81526901a09a"],["/post/ceb39ac4.html","0b27071ad5e105ded6ed021fe8fe361b"],["/post/cf413e35.html","700416ef7e124b93ca252c524b774396"],["/post/d036071c.html","6bb6327f104471a7088cd91dd8f1da05"],["/post/d39191a5.html","bf4677fe6219fcf1917a97fc902934f7"],["/post/de3bac1b.html","cb348718764a23940b77bed379967ba1"],["/post/df879792.html","0a541aea5619dedac7252111114052de"],["/post/e008fc33.html","fa16d1d3a5894bc431e5adf6c3fd4774"],["/post/e19da94a.html","0afd2be98917917d060c774ee0bcf654"],["/post/eb04e0a.html","3dfdb50b7e18523727e6465dc05a4dab"],["/post/ecd67acc.html","f982fa940f17ab648d3722c7633b31e4"],["/post/ee040603.html","50120b3232b19c7e25a5196cf64349ce"],["/post/f1601c3e.html","cbf4cee4f495c9d14dead4dae8b83040"],["/post/f31a5a5b.html","313e3f31b55a289ee3fc30f5580919f9"],["/post/f5c535ea.html","b603a7d62d93fe6a7230a66a0f0d66d8"],["/post/f7500981.html","f3fbc84f62ee900643f37a6327b2aa6b"],["/post/f79807ee.html","09ba6cf3293925b552c6b43373ae097e"],["/post/f7de8aa8.html","a4485bca41de9688e324f1993a758817"],["/post/f8239d66.html","934048b5398afdb7011674e344fd21b7"],["/post/f9f5e0c2.html","f26e4848d744619952d8c87dffda88cf"],["/post/fb77661f.html","d641a442b8e454da649afafaf345829a"],["/post/fe1f88a1.html","16fd4b789dec6ac416314ff879652b88"],["/post/fe57b0e4.html","0b7fc0e086713d1c8a8c3998bfe52486"],["/post/fe816c3c.html","5721cb96ee304017338c615db9a4d215"],["/sw-register.js","5d0483868117b65db71d0f1893c25303"],["/tags/Butterfly/index.html","3004660570e1664fc540217cb17cc0da"],["/tags/Hexo/index.html","4bc85860b51823ee7787f9d2daef29c1"],["/tags/JVM/index.html","77d748184466a144f526af59da5a732c"],["/tags/Linux/index.html","063f955b15eaccb560027391140a8dab"],["/tags/SSH/index.html","c2411697d429f74b072aef17e39ce659"],["/tags/index.html","d9b73c86af4c28766c8131be1ba0027f"],["/tags/spring/index.html","4039f49ea30ce19fe0e57b6512b25ab7"],["/tags/vue/index.html","0890b739bc4d373ae3b5cf050130fe2a"],["/tags/一问一答/index.html","43f43b58a2f73dcebe170d7b93fd895d"],["/tags/个人见解/index.html","ef51df19bad4a0113762532828804834"],["/tags/大数据/index.html","792f23744f0001b2fb7908c44d0f6148"],["/tags/大数据/page/2/index.html","57f6d2e9cd2c471f496cc8b67d301277"],["/tags/大数据/page/3/index.html","15db2b15c799ecbc549f7afc4e5121ab"],["/tags/学习笔记/index.html","ef6131fc884dbccb39752d8a21896bc7"],["/tags/安装教程/index.html","ce23bb7bc08a551b7cb55235b856c6de"],["/tags/实战/index.html","30ce3961075f61ee8904abe5146c676e"],["/tags/并发编程/index.html","6586c14c29597d869134b531022690b3"],["/tags/数据库设计/index.html","66071033eaf4136f77dc2b0e04c24060"],["/tags/数据结构/index.html","8a5799d0f9f080fc996aea9b21c4bbf5"],["/tags/案例/index.html","f458fea1ee3b153de6b8f481ea175665"],["/tags/注解/index.html","df8a99e957c5f95587cfd9a9fd0612a0"],["/tags/源码分析/index.html","1f3cbde2a9849d797226e6aa5c8c9501"],["/tags/程序员/index.html","8a015ae5603d7dad97b4f98b6d1aede8"],["/tags/笔记/index.html","f00b9c41fb1a318a4bd6cf4f2e16c198"],["/tags/算法/index.html","7ff8dc8d8b46d92952786b8777d9647c"],["/tags/设计模式/index.html","f16982089c81a683e2aca5bea003d7b9"],["/tags/设计模式/page/2/index.html","a56b04156ab09912d137ca8a14f180c1"],["/tags/设计模式/page/3/index.html","1fa9641c91689d0c8442e221e56f1891"],["/tags/软技能/index.html","4949f22e0189384bdc5932940219e554"],["/tags/软考/index.html","74e0e97b3ed21bd70c8feb4b4e5b0114"],["/talk/index.html","c7417a86f9a2473d9c23746830a020b6"]];
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
