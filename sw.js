/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","c4c344d35a11d61457d82a413bac991c"],["/about/离职申请书.html","0ba44c43fc42724cc3fc2b5268496d61"],["/archives/2020/07/index.html","55a922c213a6a45da8e63c6605c867c9"],["/archives/2020/08/index.html","2baa420c2b6ce295426b7ba80adc525a"],["/archives/2020/08/page/2/index.html","33be68e785b962ae39417c3bd0bfc984"],["/archives/2020/08/page/3/index.html","d8cc5185db7d2c11777ef0337bb6c842"],["/archives/2020/09/index.html","e0ed296fb209f74c5efbae56310f67e8"],["/archives/2020/index.html","e08db38c29a76d271902801de2911347"],["/archives/2020/page/2/index.html","68a79ab4e3f3ca5656065e321aede213"],["/archives/2020/page/3/index.html","94616e1635249bb52a797c6eac82c6e5"],["/archives/2020/page/4/index.html","99d87962c7c9058635daa6c2da8fd1db"],["/archives/2021/03/index.html","5c3ee15de6d8f68b240041fa51108f0e"],["/archives/2021/04/index.html","4d98ae42728cbb367427db4db1287068"],["/archives/2021/05/index.html","4e229040581760a2105f9ff5288b3bac"],["/archives/2021/06/index.html","b856dd22ef98f63c2d9728bba007f10d"],["/archives/2021/07/index.html","b8913f1cc46a9f720df3a34c06505908"],["/archives/2021/07/page/2/index.html","b9c2c19436b2efba1a123d1b0ee83420"],["/archives/2021/07/page/3/index.html","f8095e5cb10b195bc7b4c5dd7e82c287"],["/archives/2021/08/index.html","c511f5a6b53abca51f9f91f6f6d00f78"],["/archives/2021/09/index.html","64ddff1d507522ced29f1525dbeafb0b"],["/archives/2021/11/index.html","45cfd6f94b36ae8b040a5ed1d6483c2b"],["/archives/2021/12/index.html","c6e2ff9f734d2073960b4f2bd51911cd"],["/archives/2021/index.html","e80e766df1d9e1dad91b040b7a2299a0"],["/archives/2021/page/2/index.html","01a7fe5fcafc6698eef12311a425b8c7"],["/archives/2021/page/3/index.html","41bccf7de9f39bd532c410c1f8747765"],["/archives/2021/page/4/index.html","ee80a4dff207522a67912762f03c9457"],["/archives/2021/page/5/index.html","9ef7c55c45e7dd4b7ba8d8d72becb54b"],["/archives/2022/01/index.html","d5201385642ca468bdc37d5305e3c88a"],["/archives/2022/03/index.html","079d8b5b76cac9abc436bbe89adf25b9"],["/archives/2022/08/index.html","51de93f3bc3e3f019be50883e4de041b"],["/archives/2022/11/index.html","671139ef8deda2c990cb4e97fc7c6dc7"],["/archives/2022/index.html","eead28a1e6b605ec7fcf14ae6619b1be"],["/archives/2023/02/index.html","d6fecec0103f6a957d2fc2b4542ab133"],["/archives/2023/index.html","72b53d630d8da7bc756ee6374885fb9c"],["/archives/index.html","b285e69ecd8bf75e94b49889aa441446"],["/archives/page/2/index.html","6b8268aeed2564c408dbfc4c18fddf1a"],["/archives/page/3/index.html","c72f17ce43b619fd5c10941a6b7ba630"],["/archives/page/4/index.html","44389c946e152ab9f9aa96be87147458"],["/archives/page/5/index.html","69e30e8c00bef7a9576075ce7e61e983"],["/archives/page/6/index.html","93ae570f51b8cd27fe68d2d85561a5ae"],["/archives/page/7/index.html","03df9c914859c546ed9d6844ce9b54d1"],["/archives/page/8/index.html","aacef00fa73bb2a013787cfc514432ea"],["/archives/page/9/index.html","465e91677c2e5972d1d68155124905eb"],["/bb/index.html","5a2e6a5f2b690e4e896cae03d2aadfba"],["/board/index.html","cda41e1fb2f86a09fb5cc0ba961fbb15"],["/categories/Hexo/index.html","dbb60573182f41ad7bb2456c993510e8"],["/categories/IT碎片/index.html","b5cea05bdced9a6a37aecb23172d3b13"],["/categories/index.html","b7a8fdaf245dac7774c866f0c753c561"],["/categories/前端/index.html","d210077d954fc24fa518b296a8114aea"],["/categories/大数据/index.html","a40e844cc45c8c580a4bd0132c16c115"],["/categories/大数据/page/2/index.html","1f2b1f7e90483ef0663534c8b8fe5c93"],["/categories/学习笔记/index.html","f888f3f75f602dcf5a467785884f6f88"],["/categories/工作实战/index.html","77d54b97e7d89bbee2d5ce325be867e1"],["/categories/开发手册/index.html","e80897b074be6b00273f05647c05c43a"],["/categories/数据结构/index.html","14c825afcb613229184b883c28c60d73"],["/categories/案例/index.html","bb9f0fdc57c1b9ac8e1441c203c68dd4"],["/categories/源码分析/index.html","967572e41f6ab8a9b850066e970fdbcc"],["/categories/设计模式/index.html","348d66fce75c248d760f59b38ee18831"],["/categories/设计模式/page/2/index.html","416c42c71e75b1fe0854916072f7be03"],["/categories/设计模式/page/3/index.html","597f309bac6d0ba633b341d188140456"],["/categories/面试/index.html","be2973f9395e4c3270c8dcd729f8145c"],["/categories/项目/index.html","b7eef7334cde98cbbda38a6f010c644a"],["/categories/高级/index.html","a8ca1dde7fe325f64b435e70633e3624"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","17ee4e9799334b11b7f01b63404cc324"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","2ed45802a09fe8002efd4ecd77879add"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","0b1ab6e5502f297db4dd67716a25abd2"],["/page/10/index.html","c562cbfd8491149ce65ac5cc6869b6d4"],["/page/11/index.html","30ed8e71e0eba4f06def7ad97134dfe8"],["/page/2/index.html","dff9d71a7968cc995b1e54261e2868de"],["/page/3/index.html","0fbbf6da469e6850056ce1a479595c83"],["/page/4/index.html","584ff289ce0d516a84734daf3b53ebe1"],["/page/5/index.html","f1e6babc6f4286a3f7772fe36d1fd04d"],["/page/6/index.html","39875cea6e6f80b45f95af5b12e39fe8"],["/page/7/index.html","e8344a25fee3e34d9088a76d7cf052f1"],["/page/8/index.html","5c5f284f1ed2d933ccdab937e698975b"],["/page/9/index.html","42adc91fa55cc9bae66b05bfbd3aee74"],["/post/121bde1d.html","13f9021f37697397de91ce35654270d1"],["/post/153083dc.html","aa83e069f6879552cf69fdee8a9cdb98"],["/post/164eee11.html","6e7c7bc31f80712872c09e1b58a72740"],["/post/1a7b7abf.html","53f74823f343830ff7b82468139b2ef5"],["/post/1baa3967.html","c2987edabb953b7561b07a30087dd781"],["/post/1f4ac2fb.html","ab6234b7e90404bf40fffe6a199e01c0"],["/post/22580020.html","a9f541541613be4c5579ea7b9aceb26f"],["/post/286296.html","2cc7f37cae9d3a36a06b3fce15405cc6"],["/post/2cd418c2.html","50923e5f45339cef1e9ac2d12313cb37"],["/post/30cf0cd2.html","91de9612f5bbad0d7d9b82bcc556dc41"],["/post/317f8360.html","d0001d2251eda59816f773dba5f71b58"],["/post/33cb1151.html","16cf59a370f4627016ce2377e8c845df"],["/post/34e57ffd.html","8bbdd41c8590a07ae3c92715e02971b6"],["/post/3d20c1d7.html","088bdc10bd7a539fed62e23c0c7c1504"],["/post/3d24dcf9.html","c74ccd46d053f0fafa8d876339999d2b"],["/post/3f6c447b.html","a95d807c0631e06340155d497b89f7ae"],["/post/490cdff9.html","e8aa31952b558a3449beb27bf26116e2"],["/post/4a1111be.html","99ce59f9123423a72bcda8e49c677cda"],["/post/4fa8e0c4.html","15456f0e1941ada89ebcf7d8483960db"],["/post/524e74d7.html","10f91798f8b7fd1cb3fd8030b01c3b87"],["/post/539343bf.html","8249b180e5e8e8aac906f8565292304b"],["/post/54788f73.html","08477f493a7ea4980bd61fd4fb7df1a5"],["/post/563268dc.html","d6beccc8775b07d5d3b26efc29986878"],["/post/5ac88c70.html","ffdf92f25aacf00422f44dcd2e403d02"],["/post/5bf55f4.html","509ec34149022aaabd27c314676357e1"],["/post/5e87465f.html","5bb0e76a99ca9e81c33652518100f1fe"],["/post/6016428b.html","040e6d0a9e24ea9de4861f7c121ca535"],["/post/6208627e.html","1758683e2ee8cf1de36754eac82e8604"],["/post/64b51ed9.html","472d0ba178eaf6b151ce1061528d933a"],["/post/659da5b.html","7580ea6fe5890757ed640799b852d834"],["/post/6c429b75.html","987e56b722ddb9d03a389372ec9b26b3"],["/post/721d4875.html","77813d8e94a38a8f80c1cd72d6e83f0b"],["/post/72e3b671.html","9cee545533056506d0a4c2484e85058e"],["/post/730d8d6c.html","a18b7b29b93055be7c79e39ecd42740a"],["/post/74fc969.html","daa793a338ce98d0ca48f8610422d664"],["/post/78134e07.html","e8cc06c478c72b043c41cfe27128e666"],["/post/78c07335.html","d58c357d5bde3b639ef0a9f06988dba7"],["/post/7901ad89.html","7709740164ae5bcd13d3b5c207b2859f"],["/post/7b216a3b.html","ebc19f447d258086a412c2a818c4b991"],["/post/7b510e10.html","9fc7bc11cabf81324da0933b3f976688"],["/post/7db2942d.html","dfae5b9d953282b55300c2a92f603cff"],["/post/7e6c6990.html","3af074da948734451d68f6e9577778f0"],["/post/7fa79d96.html","d59c26e6dec6983979034298cc2e4b40"],["/post/855673ad.html","909e8e83b647ef0db76b0c64a33c44a3"],["/post/892a2328.html","3605b3bfca6bbf2aecbfc427ec6c10b0"],["/post/8acb1976.html","b7fcbbc3d03c0529a602cb18da3e275f"],["/post/8e4fa41e.html","cf83119a7f7941debd472d75aac5ea61"],["/post/8f488ef0.html","05afa1f7f117af0b9654ef3c59b4af4a"],["/post/8ff08e27.html","96e01cf03b738c291d77f7901216bbac"],["/post/9055d217.html","73c138376c58ab252823e31fec5992d8"],["/post/91ad9ce3.html","4a29d4531dfe9562d2d869ff05ca09bb"],["/post/96131cab.html","8727ad34574033a22e48b84b499eab92"],["/post/96b5906.html","cef50983fe71223b5950b5413dc14741"],["/post/970fcca5.html","fd1a6e646c7c81171096393f59749645"],["/post/9a246216.html","2facbfd6b5c3a8978d968252ca21c1fb"],["/post/a10c77a7.html","ef9b6f3ef979c0cb46bf5c0e70a23dcf"],["/post/a708a60d.html","9449040f893f41114b358726ce80fb76"],["/post/ad27c5a8.html","16a199eca27c45193785dd597c23cbd4"],["/post/b6c47025.html","c799c6f0a5d24dd1ef55f0206ef70706"],["/post/bd69ba8b.html","dd0914d0e702e14ea40d157dc923f587"],["/post/bf7f3b65.html","6ded01d80ed15a86cccb6311e2567f43"],["/post/c3176455.html","695033b7874f9e7aa822f251526927c9"],["/post/cb80ff62.html","1058df946bd7dae0fc04b4de62b26b74"],["/post/ce0e685a.html","57fc00e246151ad9bb796747f760af07"],["/post/ceb39ac4.html","ca47d4b1dea08c32469d0bab57a1de91"],["/post/cf413e35.html","243cba2a7014d5b9aeb88be5aaa6517d"],["/post/d036071c.html","2358cbde1e89295364b7eea776bd67a4"],["/post/d39191a5.html","e3fe16edc2f17b1a7b424d8267653681"],["/post/de3bac1b.html","b548dc14d98ba33f7321af38310482d0"],["/post/df879792.html","838094d9185be8bddc2a3d1b9b3fcb09"],["/post/e008fc33.html","db2cd3b7a42b7a6b711f28cc3ac2d870"],["/post/e19da94a.html","2a612b4358b4455cef3d2693c5ff4b99"],["/post/eb04e0a.html","df49d27c3530f30be6f7f1d4e1df3915"],["/post/ecd67acc.html","6e692e35b2a83808f934b7bce023d379"],["/post/ee040603.html","18fecf36da981dd904b10885e3a75709"],["/post/f1601c3e.html","38b6fe42c70776123e54c183a50a4526"],["/post/f31a5a5b.html","500332845948dd0d76c345a43078b641"],["/post/f5c535ea.html","123e565c98cfe801d592a409a905998d"],["/post/f7500981.html","5f1ad5fcb2d28ed614a26918255d3be2"],["/post/f79807ee.html","de6289173adda11decc5fa144310b7e7"],["/post/f7de8aa8.html","e02c51e97faf3d3110d4db14ff54ae8a"],["/post/f8239d66.html","93d0240ff0ee10e1358b99e8115dd298"],["/post/f9f5e0c2.html","4afc3c6664dd8e89b44de5d1013aef67"],["/post/fa143992.html","93f1ce406e4d460308855eebb55d5e5e"],["/post/fb77661f.html","78b4036d416357cbd7745bb5176feb17"],["/post/fe1f88a1.html","1ab5a3dc1da0466548c4f8cdbb5df676"],["/post/fe57b0e4.html","385574e71a8a471c5320f29241aa4f96"],["/post/fe816c3c.html","af9c835071cd0894bc3fdd42431974c0"],["/sw-register.js","42f713380c79b3500e00f07bb93ad150"],["/tags/Butterfly/index.html","145a0f58ac57ec7dd4e82057ee862ca5"],["/tags/Hexo/index.html","fb7bbff449737bfd097ef24da7d7549a"],["/tags/JVM/index.html","b5423a479887ac3dfa1966bf9929f7a2"],["/tags/Linux/index.html","b99a98905906a79c3c8ca23843502463"],["/tags/SSH/index.html","1554b8234e160ea08a6204a620bbc1d9"],["/tags/index.html","0f28e4ecf4e7f01870bb1cd5945e67e2"],["/tags/spring/index.html","b7bd6828f93f368c89fe439ddf8a5114"],["/tags/vue/index.html","507828107c5b07bdbb350a81da0ac3bc"],["/tags/一问一答/index.html","6a06dce2e2362b9894db6ce78367c03a"],["/tags/个人见解/index.html","e4faa9ba9db45cd57838f81b1192541a"],["/tags/大数据/index.html","70139a22eb411105750eec11957e2292"],["/tags/大数据/page/2/index.html","074574d63b23508065b1bf7162017eca"],["/tags/大数据/page/3/index.html","5795934e4d2d86a4ac42e509b3f87a31"],["/tags/学习笔记/index.html","4ab46c5f0637935db22469f071e0967e"],["/tags/安装教程/index.html","2aae76548ff75fa2f5966d89171d95e0"],["/tags/实战/index.html","5bdacad4b6632516bf56ab139bc137ab"],["/tags/并发编程/index.html","41118157ac572c012de4380ea5fb7d03"],["/tags/数据库设计/index.html","ad9502f05e3d610b8f23ded4ec8d270a"],["/tags/数据结构/index.html","d732f6d5cbf2595de96a1656da282805"],["/tags/案例/index.html","71779555d6e96ac2ec0af22ae4b38cb6"],["/tags/注解/index.html","95537e9e3308eee78f757776b0bb4041"],["/tags/源码分析/index.html","e073bba03582a66db2d3c64ceb930b75"],["/tags/程序员/index.html","811ae6bbb7c9d9c3cfb70116c0d1c967"],["/tags/笔记/index.html","2f79c32bc3846b5f37461c7b7fccefb3"],["/tags/算法/index.html","c0195364850ef7a474973da8adfe9a46"],["/tags/设计模式/index.html","6dc1f789d8c98323b3c0c45bf5fd2814"],["/tags/设计模式/page/2/index.html","48a72b5af55e27237258f91ffa1519e6"],["/tags/设计模式/page/3/index.html","eaddcb49462a3ad730f7ee6c36344b56"],["/tags/软技能/index.html","a4c7cbeb3986d88ed9a5b3afce6e6171"],["/tags/软考/index.html","53f1861bbdf370a232173c348fcb054b"],["/talk/index.html","7b4d8ae755f311200b4ea56d9937804e"]];
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
