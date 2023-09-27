/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","047734233afea235023ba0f41ab71df7"],["/about/离职申请书.html","030e975b0d1315b2bc94d977041fc3fb"],["/archives/2020/07/index.html","cc91d4402bad163c2e928f170f2ded15"],["/archives/2020/08/index.html","5fe8d173e322d37a4dd35c20d368fbbb"],["/archives/2020/08/page/2/index.html","2e33a00b906d0851cae9e78eb258b979"],["/archives/2020/08/page/3/index.html","723dc070fef05a6b472cda42e8b2b40a"],["/archives/2020/09/index.html","4e830e8c43e217865e1f6dda8480e6a6"],["/archives/2020/index.html","54a6ec469098ec7461b389ccf49d410d"],["/archives/2020/page/2/index.html","f76bfc52b17faf6884d5b50b9d93ae91"],["/archives/2020/page/3/index.html","4457ee746285f91c4673937aa593fc14"],["/archives/2020/page/4/index.html","359390f3dff072ac9ca4ffbc55cbbe99"],["/archives/2021/03/index.html","463f4523ebbe6a2a293f8c296c960b2b"],["/archives/2021/04/index.html","bfc55c09e45fd2ced9ec542ff9d5385b"],["/archives/2021/05/index.html","c93f2c5c051e21e4e2008fd38102a326"],["/archives/2021/06/index.html","dd3cdfe4fa9fce1afcc19f5dbdaa5fbb"],["/archives/2021/07/index.html","1856b531d8d7435d09e7b9564bfbeb30"],["/archives/2021/07/page/2/index.html","86c0ca36af27151ff6a52731cb2dd21c"],["/archives/2021/07/page/3/index.html","b62a2b4406cc4c7229f6dfc4d19028c8"],["/archives/2021/08/index.html","d00f34170a22ebbcc7d096eeaf2a4a5e"],["/archives/2021/09/index.html","44bbeb2d18a375941e65f6b9dd3c6e7f"],["/archives/2021/11/index.html","9de380047c6cdb3897fb5cd207ca2b19"],["/archives/2021/12/index.html","421e143269f6586e5e23189a2ede05db"],["/archives/2021/index.html","2516574d66a525d50198c0e65db5d3bf"],["/archives/2021/page/2/index.html","867175df8683ec4166743fc5cf4bccef"],["/archives/2021/page/3/index.html","9c62763a0869c4edf0326315bb5cc5d6"],["/archives/2021/page/4/index.html","9ae948a94049450acb1dbd12aed7d8c9"],["/archives/2021/page/5/index.html","05a17a8846091189c0dd2138af31eab3"],["/archives/2022/01/index.html","4bafbae553331d4e616693318cf46125"],["/archives/2022/03/index.html","62f1ea7229eae6ba7bba976a9b630582"],["/archives/2022/08/index.html","ea716ecd1f58c0783cec902a6028157b"],["/archives/2022/11/index.html","68473c2f5b0b80b64558e22d1aa0bace"],["/archives/2022/index.html","ebb3b4ff60bf38cb47ba543fb0d5e10c"],["/archives/2023/02/index.html","10cd4e3337a842752a5167272ed3a819"],["/archives/2023/03/index.html","b356cea1d64730edb8b52f7646745acc"],["/archives/2023/index.html","0923fd5b8e29eaa0adc638a391a71809"],["/archives/index.html","0f4648ba332b66c31b31ce5a02621767"],["/archives/page/2/index.html","42d4d6034619cd9c7e94551e7b45d85b"],["/archives/page/3/index.html","369ec8c2890dcf4a58c5ae24f772093f"],["/archives/page/4/index.html","71c9b5dd5c3bd5b48afd06f2fda91b4c"],["/archives/page/5/index.html","e9433ca0971307b05ddb0b71de251fb5"],["/archives/page/6/index.html","6bb8664a3ff2c33b1a091d21a5dfd78a"],["/archives/page/7/index.html","42cdf0c9dd35c0964fb2da5565889092"],["/archives/page/8/index.html","7ab91940d5c06cad567985f2ef13c5c9"],["/archives/page/9/index.html","1b0364be9920ad0295a646482dd53c9e"],["/bb/index.html","5e292c1cefbc361f17ed9bfb3660ab87"],["/board/index.html","10a89dc6f8377b550ce658f9797968ea"],["/categories/Hexo/index.html","a9ff61a1e901754ad9d1d75ff370e0d2"],["/categories/IT碎片/index.html","b175d2d15a040068c79a4fd0be32529f"],["/categories/index.html","7b8bae5142b591ee106db33bba372856"],["/categories/前端/index.html","b3a6463d35c63244f5443a3c610b1765"],["/categories/大数据/index.html","df87bb11c281f3fa176254b1d2500ee2"],["/categories/大数据/page/2/index.html","8e55834508cc36b481fe30cce4b07074"],["/categories/学习笔记/index.html","eaaf17c5bdac4ef5da83f3c44bb609e9"],["/categories/工作实战/index.html","ae21e39d81cf5d31b9375c8dc0d6f170"],["/categories/开发手册/index.html","002931f401ff06e6e69b8958bd86108f"],["/categories/数据结构/index.html","64e68dc943f4f7e87ffcc979e89894d4"],["/categories/案例/index.html","2faa1eb455aabfc92a85a1ee4052bc42"],["/categories/源码分析/index.html","6a2504a361b1b5eb906070e1802518a6"],["/categories/设计模式/index.html","7e44c12cb1211602b40da6d8830ece2c"],["/categories/设计模式/page/2/index.html","0d94566bdbeae857c445d0f66dfa124a"],["/categories/设计模式/page/3/index.html","bf7e68efa7340101e159ddbe8dca7284"],["/categories/面试/index.html","7ae419d06d30422d9e5ecec20e72d8bc"],["/categories/项目/index.html","5a9304ad7ef0c980be858d5c4cd35cba"],["/categories/高级/index.html","63b477b326004dd156cbee047a8248d6"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","ff4594a8e70262a172e7298731e884d3"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","07c6feb9e820fa38d049b508c4993ae8"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","5ca4ade9e4aef4cd2b64d370d72b0517"],["/page/10/index.html","ea02c00c6758c24d0939de9bc0881bc8"],["/page/11/index.html","b0ae77b20e7a6fad6c0f6f1d308209d5"],["/page/2/index.html","2611529bb70d4c167a437df7f1d7435a"],["/page/3/index.html","88642255aac51016562e6b89aaa67708"],["/page/4/index.html","5097b07af867e6a1c22191a6620ddcae"],["/page/5/index.html","e596626178bd878fbb85b0bfbc70b290"],["/page/6/index.html","c7e353a6c0903593c3e7454090720658"],["/page/7/index.html","0921ac825c47337bc6e7d12ba2d100ce"],["/page/8/index.html","60c9e5ae2317455042dae0cee5d2b0e1"],["/page/9/index.html","fef6f166c609fe3c9c9fca99baddecf8"],["/post/121bde1d.html","fcdb42cd63f967d0325ca58963cb5a14"],["/post/153083dc.html","dbd9835665ddbfb785bc3a1fc16c867c"],["/post/164eee11.html","a930c43111af3940c5aac0435cbeee39"],["/post/1a7b7abf.html","95b95b9887dc2e7b35f6fb523fa62cd9"],["/post/1baa3967.html","ed54347383fa67f407add124cebe57f3"],["/post/1f4ac2fb.html","1afc0e5eae6b9ba9dc297e83fb966adb"],["/post/22580020.html","2bd30958b51e0bd686662958893329c1"],["/post/286296.html","2f6db653947b5bcd00252370d2fb6cb4"],["/post/2cd418c2.html","eb7d154f669876d246c064e58d2f0677"],["/post/30cf0cd2.html","88f97e9245075c25fab8064b3dfab361"],["/post/317f8360.html","10d8281787afbcc6288c09b51fbdad40"],["/post/33cb1151.html","4aae8eab466c65805a14f402c2cc896d"],["/post/34e57ffd.html","192bb3bca20074848334fd64e599efde"],["/post/3d20c1d7.html","59e4bc81bf99c19ec457a2b309314274"],["/post/3d24dcf9.html","ae0aa65b66b5edf1efa68fba4ec08d28"],["/post/3f6c447b.html","bc0866dd25a932f84d01798de4bb100b"],["/post/490cdff9.html","ef0663f2304de292a8230f8573ce2ae4"],["/post/4a1111be.html","216c6082e016e003a68d60ccb43714bf"],["/post/4fa8e0c4.html","c55acfc0c15c7cdb9821b04992830949"],["/post/524e74d7.html","9113b77491c11854b79a13adca3f16fa"],["/post/539343bf.html","8f2550cd44e87cbec3b1461a642ba3d0"],["/post/54788f73.html","ed8c2f2ef8d858fc5e523fb2a7e991aa"],["/post/563268dc.html","d297770573dbe48b52aa80d790184d8b"],["/post/5ac88c70.html","4c3908f2739896fca6d86f12798ebe0c"],["/post/5bf55f4.html","96ef3d2099d6604a0001bd846a657c73"],["/post/5e87465f.html","532eb4b94522caf06877dd694ed26b76"],["/post/6016428b.html","c1c9cf53c5d0121cf60fa6652e672c91"],["/post/6208627e.html","45877eccdd8b51a95dafd36a45d7e960"],["/post/64b51ed9.html","c68857b13bfd40432666fb8f4855a49b"],["/post/659da5b.html","591fd08f5a9cfb711b6eec906b3b55ac"],["/post/6c429b75.html","4f41580960a6324b66f56b7350c9be7a"],["/post/721d4875.html","2f9ecc470b2d064ddb3861ee638c8c74"],["/post/72e3b671.html","525433d78df9c34808f08f4d74919b26"],["/post/730d8d6c.html","ee05c9e577a77a23e6bd8c5e1eb57d9e"],["/post/74fc969.html","6a2e525a6139a9fcecf4c8212943d336"],["/post/78134e07.html","a27ef0db0ac078d5e35af6a754d006ce"],["/post/78c07335.html","ed03e60524a575ce723deb749aefd8a0"],["/post/7901ad89.html","b49c14e2f1ab505e345e24dbeb153f20"],["/post/7a2a0c9f.html","ebbebf608e774582c0334156f436184c"],["/post/7b216a3b.html","a4c20e6e24d90bef22f1447301dbe643"],["/post/7b510e10.html","7c5a1677b97c6d20cff99ab6a20a68ed"],["/post/7db2942d.html","56b26aa7b680c13ea37818d4598db828"],["/post/7e6c6990.html","4062f889306b8883d909a2d75c10e692"],["/post/7fa79d96.html","ab9f8c06c973a9965d7fcbb103b780de"],["/post/855673ad.html","e98967fbaa523d80ed35dc7a8441ef07"],["/post/892a2328.html","15eb1aa430916be76e657819ca49a347"],["/post/8acb1976.html","0a5e1fe2d023c285998dae9bde9a4d72"],["/post/8e4fa41e.html","392e955c138d1bf9905309500e26f730"],["/post/8f488ef0.html","62d16ee3479454c3600ec3ab499d515b"],["/post/8ff08e27.html","a15e6d214ac803294b727846aeaa2677"],["/post/9055d217.html","168f01dbc25607c71c94c707eb065ba7"],["/post/91ad9ce3.html","7a058b3c4a4e5af607bc11bc2dc82ded"],["/post/96131cab.html","54d510b78f11d2620c5998a71860922a"],["/post/96b5906.html","ba4a220c0c6615d153c04706f29357a4"],["/post/970fcca5.html","d35095c51a9cce239572efc6da4f1fbe"],["/post/9a246216.html","29046e4d3c5f67952862820092bdcec2"],["/post/a10c77a7.html","591c494e56924fb750a0061830ced304"],["/post/a708a60d.html","eaa883115101897046d7841916d4f406"],["/post/ad27c5a8.html","f97f770f9253b6eedf7073d0a142f63e"],["/post/b6c47025.html","38ea0ad0712636f3c57d68234d1cc44f"],["/post/bd69ba8b.html","b3d087364621d9c13f86e3846452a6e9"],["/post/bf7f3b65.html","f2343fd22cf3217428f63798da910492"],["/post/c3176455.html","a1b409ba712c78a9fbca1de212e3e545"],["/post/cb80ff62.html","3ca3217788b228422b4044e94e18c79f"],["/post/ce0e685a.html","b9b1c8f40e465f52decfc0c934e099e1"],["/post/ceb39ac4.html","c2d79cdce5501be4a16523516f48f95d"],["/post/cf413e35.html","d9b6d418f9c0e19aa17ba2f30842e4a2"],["/post/d036071c.html","dcca9e80d308c68b22497e2babb5fe49"],["/post/d39191a5.html","51434d374d9d3db8bd43444db194a041"],["/post/de3bac1b.html","f011efbdc3e000fca20737beb0927c66"],["/post/df879792.html","d6c629ab96b8d9080ec3e9eff55ee239"],["/post/e008fc33.html","443c1636a5666ccfcc6681be2de76236"],["/post/e19da94a.html","26fc8f789bd55b9c3965677563732a34"],["/post/eb04e0a.html","e720960fb4820132f08ab5efe71264f4"],["/post/ecd67acc.html","0368aa68976379e27f57ab8d7c6bbf03"],["/post/ee040603.html","7cd2a92f37c18fd8a48a94e0ced95f94"],["/post/f1601c3e.html","a45808818cf8f2d40d61faea670f590a"],["/post/f31a5a5b.html","fdaa7cb2388aed9c522e453e5210c115"],["/post/f5c535ea.html","2216de18cfef2fa0d11af9c140bf542b"],["/post/f7500981.html","1dd31a2d818474ae2bd4b8c78fa8b699"],["/post/f79807ee.html","5a1c3c264415b95303c82efb1d1428d0"],["/post/f7de8aa8.html","15552371ae22e3de5d899a36f84ab12d"],["/post/f8239d66.html","d36f7f258232e9839cec433b1b96611b"],["/post/f9f5e0c2.html","5ca1ae2a42dc089319adc6c430851d3d"],["/post/fb77661f.html","f4c9ac8d249618c7135568ec1cba61f2"],["/post/fe1f88a1.html","2b6db5c39e3b1613bfb05508f8a27f5c"],["/post/fe57b0e4.html","bff33d13d776d0a6ceac27a5e3ec53e4"],["/post/fe816c3c.html","d06a92c0691a109f9740af6558105978"],["/sw-register.js","4bf46b5e652db929cbf3d5e12c2c4548"],["/tags/Butterfly/index.html","6e74d7a29083fa49dcdd6d6017e82cd1"],["/tags/Hexo/index.html","9e7961f90f4dae39d58af5d8581dd850"],["/tags/JVM/index.html","434f2086cd6dc93bbb196c707407de74"],["/tags/Linux/index.html","7d9a90b21c034ea25885e7928c8de437"],["/tags/SSH/index.html","32b0903de8bb3c28116e97db9c62959b"],["/tags/index.html","9fd8b1ea24450a410ce1e4da09b50a82"],["/tags/spring/index.html","6fa8b62756b9fc73323194eb3acad2c3"],["/tags/vue/index.html","6308329fce12f49187d4d870c93bd259"],["/tags/一问一答/index.html","6b6d04bc01b0575be0284fafae8cce0a"],["/tags/个人见解/index.html","b1d8dccf1f918c55bbcff7fd827ca107"],["/tags/大数据/index.html","38143fb18416da8696397276c6d53d77"],["/tags/大数据/page/2/index.html","24cebbf5d7c0df75f18138222b42cb9b"],["/tags/大数据/page/3/index.html","65965a70a4658aba7ad50866acdd4b3b"],["/tags/学习笔记/index.html","fad68bb99f9f5c18e01b1d712bab2573"],["/tags/安装教程/index.html","bea8c259a886257efabba301c94ab7a3"],["/tags/实战/index.html","1ea5c29e2f85cb5f231e0ddb71b823d6"],["/tags/并发编程/index.html","781a354f489644e77786784ea9f93846"],["/tags/数据库设计/index.html","0db27f9716e0a49d619384523dcfe2ed"],["/tags/数据结构/index.html","9c8f071d54d839ec4eeca1a2118f3fcb"],["/tags/案例/index.html","43bf6906ad5ab6d3979c816c7ccde1af"],["/tags/注解/index.html","0a4dbddba74fa36e5cca55383e703aff"],["/tags/源码分析/index.html","54dd76318ef2dec30c2ec80bc037f51c"],["/tags/程序员/index.html","4b6e3b7d595dc08a3dca78ff006a390b"],["/tags/笔记/index.html","f34507e2c7d8525108d88edc0c2cad45"],["/tags/算法/index.html","8876beebac995583aec62e7a46eb38d2"],["/tags/设计模式/index.html","f7f1d4e37ce1a59659a936f3318e7de9"],["/tags/设计模式/page/2/index.html","f7eb533c7a3d18debddf1b8a55a6f10a"],["/tags/设计模式/page/3/index.html","834351dd081c03c713e436b652980279"],["/tags/软技能/index.html","6787b68904e608b3ee2a1c0db8607794"],["/tags/软考/index.html","cff5910a2fba2664380c0df907984a08"],["/talk/index.html","788a7c12f0f15fbe70e2df407289dbcf"]];
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
