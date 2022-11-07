/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","d3f403eee811163285178fa2bc05dd6c"],["/about/离职申请书.html","b866647f1d32ed46c609c8109121f7be"],["/archives/2020/07/index.html","41f12bb2d27dfde6f09693afe04d2fe6"],["/archives/2020/08/index.html","4ee68403437c897734c881b6cb90fcdc"],["/archives/2020/08/page/2/index.html","6edb15b65208f41cbf768f9bd25d7824"],["/archives/2020/08/page/3/index.html","a4654917241f5011ed59ac8f90cb7c2e"],["/archives/2020/09/index.html","56a812f854576278987d9da55925efdf"],["/archives/2020/index.html","ce067662e13492c7724bc4f788f7a815"],["/archives/2020/page/2/index.html","080e6eec4196518fbf0229a4c2db219b"],["/archives/2020/page/3/index.html","87a908b89e3bc012f811072999d3c26d"],["/archives/2020/page/4/index.html","e6fca31aba270d520135c09d6bc7b22a"],["/archives/2021/03/index.html","bf207133df842d7dd75e75b509405373"],["/archives/2021/04/index.html","22d41dbe22596324e99b899721b43647"],["/archives/2021/05/index.html","4d7dd65506396060160f7cfabf2eaad2"],["/archives/2021/06/index.html","4c777573b6079e9cc679f7d069d11f7c"],["/archives/2021/07/index.html","c6b715f66d068cfe1074e1b4eb8f4fd4"],["/archives/2021/07/page/2/index.html","196a902627233c986800cd722be20cab"],["/archives/2021/07/page/3/index.html","7ab17fafb5c1d22f6a4c17f42fb34b15"],["/archives/2021/08/index.html","aa7ea8af6cb06d9ca3e65ab994312109"],["/archives/2021/09/index.html","fedda7b75275bcf2ff91c4749b59d417"],["/archives/2021/11/index.html","8961a90252e82a3b30dcfb706591c8ec"],["/archives/2021/12/index.html","0bae966e30a64364b23c1e0a12152966"],["/archives/2021/index.html","267aba138a27e15629001c6b3af4c00f"],["/archives/2021/page/2/index.html","3920abdd88b08b291e3112a310e4787a"],["/archives/2021/page/3/index.html","19bda02eb811f0614d285d24970730c6"],["/archives/2021/page/4/index.html","f886aec6cc324e14d42d53ba3fdb8632"],["/archives/2021/page/5/index.html","7bcfbde2f88a5e4001c4f7ebfee9fdb1"],["/archives/2022/01/index.html","5f606c101064c7b8ac9f9530d5281888"],["/archives/2022/03/index.html","cdb439699c8e326fc252ff4524560b62"],["/archives/2022/08/index.html","4611aba1bdca67117c8099b8687e0af2"],["/archives/2022/11/index.html","7c74428bd585005d8a788486e6745a3a"],["/archives/2022/index.html","5c294080953ef9e09da63c80016b162a"],["/archives/index.html","754d1e4d30e1268094e748e2070c2a44"],["/archives/page/2/index.html","88c0400d33f27b4054ce267d4ab46043"],["/archives/page/3/index.html","2ddc677fe2fccbbbe169cad342e162a3"],["/archives/page/4/index.html","704feb32067f9e69c85cef1d060df7f0"],["/archives/page/5/index.html","add01f3b28ed074e284751265992e22a"],["/archives/page/6/index.html","de4149f0943b2d09eb3074ef0ab3ef98"],["/archives/page/7/index.html","3b838022d113303a1b5a58f7ddda2811"],["/archives/page/8/index.html","a65cbd637f2e4445aaaab57065a15cb0"],["/archives/page/9/index.html","8769a4d423ad37b322ca1d4953005ac9"],["/bb/index.html","80a689030e72a1c9f3ea1fbf0fec4bf1"],["/board/index.html","52b48e18308aed5554f2b58551e8a46e"],["/categories/Hexo/index.html","aa755ec6883feb126472be0d4c6bfe3b"],["/categories/IT碎片/index.html","c10a3ac86e594469011db734b62c29bc"],["/categories/index.html","0e80d71ae982f68d823e22b576ba1498"],["/categories/前端/index.html","a3d7b5c56d376af54eb63c384c8b67dc"],["/categories/大数据/index.html","3d9ae4a79a39198e29f815f65dbff587"],["/categories/大数据/page/2/index.html","f8198ea50753b3532064680906b99bc6"],["/categories/学习笔记/index.html","d8abdbe9f9ae70627827d8fe3e689721"],["/categories/工作实战/index.html","78470bcaf96a8ab4673d003cd6e3d017"],["/categories/开发手册/index.html","29b15004c9d9be207d49caf48d0a434c"],["/categories/数据结构/index.html","b48e1ecb844e1ba7fa9da4a01ce0b1b5"],["/categories/案例/index.html","b50f02184569ea58c9946a43398d10e0"],["/categories/源码分析/index.html","d9c9eea77e56e8aabe5e89239a5abded"],["/categories/设计模式/index.html","9345ac059b76eb1d462171619114f9b6"],["/categories/设计模式/page/2/index.html","37a847848bb9edcda9377eadbd21e526"],["/categories/设计模式/page/3/index.html","20c049f8f584606c083cd4d63310e4d8"],["/categories/面试/index.html","7102053e411f4f643add228b3f0862a2"],["/categories/面试/page/2/index.html","f3f44d3087d326e04f823a26088d34fa"],["/categories/项目/index.html","62b3598e10a9fc71a4f4270478024970"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","78851cba187b840374872395ed86ac28"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","22397554610ad84f0fa38ee32535ab5e"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","cbf459f7bd14d2b3358365fcfb477af1"],["/page/10/index.html","3cded07848c3b12674643a19c9af5edd"],["/page/11/index.html","67d0d806003121a3404b4288f724b3da"],["/page/2/index.html","1f6a0c1117e5caeebbcd544ab0b6295f"],["/page/3/index.html","7d1d17a20ff897cd3d7f668a89eedb00"],["/page/4/index.html","0668a23fb6dfdf1eb6209fa7363578b8"],["/page/5/index.html","0d3a6984e99111016f9a8c9745261594"],["/page/6/index.html","49bf9c6df2ee9d8eb684b7118d0c3bcd"],["/page/7/index.html","48f111ca3ea8ac4d5ff4f9b1d5b9919e"],["/page/8/index.html","f907deb5ebc0aae043728ea223050019"],["/page/9/index.html","adf3d95178e15c06cfcb41ace586ebba"],["/post/121bde1d.html","6107e42ea73940b8bf5c1b73bd7a3e29"],["/post/153083dc.html","db867f13e7091357c9a19fdf0a53346a"],["/post/164eee11.html","aab2cb601aacc77331151b9bee0ec4bc"],["/post/1a7b7abf.html","e417a27a2c40a53794e17b23eb471f23"],["/post/1baa3967.html","9b926e46598b9cc60b025dab15778577"],["/post/1f4ac2fb.html","d54d082b52c1927fa2217d45de54d2c0"],["/post/22580020.html","9cc495e748a26063d30d5a7b17945f36"],["/post/286296.html","2d761675ecc6e421f4a8bc9108d49242"],["/post/2cd418c2.html","f388a1ae321b38e42fe72dc03ac93a28"],["/post/30cf0cd2.html","3b10e43619f731aa16673e723ebb2043"],["/post/317f8360.html","d9b43828c2e1353e8746346dedefa72e"],["/post/33cb1151.html","1d82dbcfda3056ffda1144b2099293ae"],["/post/34e57ffd.html","3a56d3e010741ff18b319dbf58184252"],["/post/3d20c1d7.html","db252f77d07ba020d10335bfc7938bb5"],["/post/3d24dcf9.html","641fea1e61a6ef1185bf9fe600adf130"],["/post/3f6c447b.html","c56252260ffae6e7c71b0388be34837e"],["/post/490cdff9.html","567796f9c13edca29b1ef017d6deee07"],["/post/4a1111be.html","6381c8fba13f87f0f4d82523f24d37eb"],["/post/4fa8e0c4.html","4961be7b1a5dd915cb9126d65fdcdce8"],["/post/524e74d7.html","094d4658b5baaa50166ecc7bb14816fe"],["/post/539343bf.html","d81a071949bfa1ff21b85980bd097e96"],["/post/54788f73.html","b4c9766b13bd221152c10452951abb73"],["/post/563268dc.html","d798d25ad05414971cc40219d0328420"],["/post/5ac88c70.html","69e77dd5426193cbe40175ee20413516"],["/post/5bf55f4.html","50e043fb5c661a1268c60a57ab03d6da"],["/post/5e87465f.html","98818e1dfc98e3cd0ae36c98dae6f0ad"],["/post/6016428b.html","c7f6b2c0fe31ff8ef0b7cf24d09e2ff8"],["/post/6208627e.html","88e2821d71bf8bd0287f835d3d1724cd"],["/post/64b51ed9.html","612e199df9ac139e0066152761b0016d"],["/post/659da5b.html","cfcbaefa6d4d920772213a33bbf34d3b"],["/post/6c429b75.html","4bb0ed9e34e9b0c80d6baf4ec111aefa"],["/post/721d4875.html","18e66538b0ea3cf83741b778df9c132a"],["/post/72e3b671.html","9d4401eaa969011a16c7dfd0e1dc441c"],["/post/730d8d6c.html","97f600143715da7aaaabde0e9a9a67a1"],["/post/74fc969.html","a868be9962192b23ba4aaabefce9abfc"],["/post/78134e07.html","aae4b07ec20be85507a9591c491e7b82"],["/post/78c07335.html","316624234858e2e909bd51c99b678904"],["/post/7901ad89.html","1dc47c4d1661629a425e27cbd041a8fe"],["/post/7b216a3b.html","d45c09d949d49f76d7c01f2e8bace836"],["/post/7b510e10.html","90e086b8bb8024f24fea36151dff6e8c"],["/post/7db2942d.html","a66d7a49cfddcd3f0bb9d68f6d8b33d2"],["/post/7e6c6990.html","1019ada1aa91630421a192e3b59320b5"],["/post/7fa79d96.html","5456ef4006fd5daa63deccc808878c04"],["/post/855673ad.html","b559e420f38bcbf85a2e65bee7431f83"],["/post/892a2328.html","6962f20f20af0c7a52ab81ec0d717a57"],["/post/8acb1976.html","bea342bc35fcf12bd895890730e297b4"],["/post/8e4fa41e.html","10cbbbaa4d89d80cd5dd5c9dc31936b4"],["/post/8f488ef0.html","8774a954e9a623dfdcc66abfc1613243"],["/post/8ff08e27.html","98267da9b924609390a61c7c82efc294"],["/post/9055d217.html","7af87a30282cc7e26918a90b33a2edb0"],["/post/91ad9ce3.html","05c05e6e0bc7e26b5f175124abb0c050"],["/post/96131cab.html","b32f69e3d5a94f93b409657f9e2dca76"],["/post/96b5906.html","a2c3e692762fcf4dc42abe31062a7d10"],["/post/970fcca5.html","8de68707a2725e81280feeb58d12f82b"],["/post/9a246216.html","90f4cbccf38c45137e35e58ee70cebc5"],["/post/a10c77a7.html","6f4badfb3eac567c38a013e6c13a0b0b"],["/post/a708a60d.html","53f2a7963fe858854fa6c0982142ff6e"],["/post/ad27c5a8.html","04cb9848b3255b2a6b1bedf4c262f7f0"],["/post/b6c47025.html","cd2b9d61520ac6e3c78b2591e66e8f28"],["/post/bd69ba8b.html","b3b30d6dec27064a9124688a3cb5f3ed"],["/post/bf7f3b65.html","48436fcd5d2e179a88bb711ea09423d2"],["/post/c3176455.html","28353eefe224802ba570004110ff4c42"],["/post/cb80ff62.html","389ea61f3c1f3e6fd817141c21430512"],["/post/ce0e685a.html","a28e80c25d6ecb1ddc8202236b703b64"],["/post/ceb39ac4.html","4b6f5879ab2d7a872dc193a74a3d554e"],["/post/cf413e35.html","db5249e1474f3ef1bef7388eae4d37ae"],["/post/d036071c.html","e7876284da5001fa9fe45a0f4c119c88"],["/post/de3bac1b.html","0f98c1f71122dde2b31a5de423f38b8d"],["/post/df879792.html","50de9d839e83dfe7fdacf3572f107200"],["/post/e008fc33.html","6c31f6580885024d470a06508b9a0e39"],["/post/e19da94a.html","884755cfa11c6c90a83e3659955677fb"],["/post/eb04e0a.html","bbc47f67ad2fd54a3a18821ad7b22a2d"],["/post/ecd67acc.html","15835882d4b1d87d88c07fbddedae1f4"],["/post/ee040603.html","427d1f9df428b2aa99d189c54187bfc4"],["/post/f1601c3e.html","183a098d486f5f49e0751b34c529792c"],["/post/f31a5a5b.html","72b59dcb3a4f26eff6eb01f5d1d22313"],["/post/f5c535ea.html","945d97fdfc73a80d67f3aaa16b858ab9"],["/post/f7500981.html","632bcd66756b2c71c188caeeb4e33715"],["/post/f79807ee.html","0400d4c70af51473f27c43214d39d98a"],["/post/f7de8aa8.html","5948b298dec131478b6ff243b1850b5d"],["/post/f8239d66.html","1f280e72ba4fee6cf700194dc1c109de"],["/post/f9f5e0c2.html","5d81e963a0ae2b8f472d6df9e940b076"],["/post/fb77661f.html","bf710d6fe4073342d2109121ab1c30e3"],["/post/fe1f88a1.html","a6991ed33923b68e7cb90b14a8d2bd9c"],["/post/fe57b0e4.html","e1293562aeeaab9780041e6a894e8511"],["/post/fe816c3c.html","b01c258746690f4d7ac2362cc95c2258"],["/sw-register.js","05267315844be1b719e5a154d5a49593"],["/tags/Butterfly/index.html","9f6a7d7b5d7c5b9f1b002919e74cfeca"],["/tags/Hexo/index.html","2126366ef10f3c6889f9d5937eccbe23"],["/tags/JVM/index.html","7bd24a306d4bc61c8325d589af1b0692"],["/tags/Linux/index.html","2b4483ed51172fad8a341110d62d443d"],["/tags/SSH/index.html","caebcecea7ecb72d363be9137ad9e368"],["/tags/index.html","f8e418d0279ca492139ed1cb3e3fc60e"],["/tags/spring/index.html","34904382e45ddbcb9e783da8f9837419"],["/tags/vue/index.html","b6e6ce09fdd46437033efd5b27ef7544"],["/tags/一问一答/index.html","01f088a550c6cecf343d0d8ccd5e6b0d"],["/tags/个人见解/index.html","58e7acb304203d8dea8937192653f560"],["/tags/大数据/index.html","7d8ce014f0c68ccbe921e9a62e3b7fb7"],["/tags/大数据/page/2/index.html","7b33728e664f34392fb6010a57997d1d"],["/tags/大数据/page/3/index.html","d5dffafa68384422bb4da99c13d4ebf6"],["/tags/学习笔记/index.html","856c5ef493eac4004a251a85a7130dcd"],["/tags/安装教程/index.html","59965b1b1f57e193d95290aa90b16cff"],["/tags/实战/index.html","d8acd8fc644a50073712d26755f66c2d"],["/tags/并发编程/index.html","29d35723566432d28b0cfac4ee5b1352"],["/tags/数据库设计/index.html","8d932322f3c56081f3082d1a0aad80bf"],["/tags/数据结构/index.html","83120412be9b6e1f784b0b7041d44d2b"],["/tags/案例/index.html","045f0616b1b6d2cfea51fa7f55edaf7f"],["/tags/注解/index.html","e218c80c7ee3435723d7796dde4c10fd"],["/tags/源码分析/index.html","00e72b12ad0dfd1d39360c3c3a4c1c21"],["/tags/程序员/index.html","7a8f52d3a31e1079bd6216e22c5c9259"],["/tags/笔记/index.html","c8653c847addb58c5b278e3283bc1904"],["/tags/算法/index.html","d532170dcedce369fc0f36a43a2093d4"],["/tags/设计模式/index.html","151ba53394fe39954236ec58846f50c8"],["/tags/设计模式/page/2/index.html","38e5968e7557d9b55ee69170f1a3872f"],["/tags/设计模式/page/3/index.html","8615ccc555dbd9b5a97a002fd5d5250a"],["/tags/软技能/index.html","047d770bc607a58ed3fd0d8fb73dc7a0"],["/tags/软考/index.html","b2cae3be9b66a005d493f76c3d8b04c5"],["/talk/index.html","29bd86951f0b3b7742c445c25a14b698"]];
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
