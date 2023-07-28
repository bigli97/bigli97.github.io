/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","73914c482319e93a9e3869f05495d041"],["/about/离职申请书.html","0daeca89ec906cd9cd5ae369bb51397e"],["/archives/2020/07/index.html","7902c13cbbf95821a0c222d0a5a99d15"],["/archives/2020/08/index.html","97069e88d947d748a94322ce0e60ff73"],["/archives/2020/08/page/2/index.html","8f18dd5bcc2c1359559a7996abe61ef5"],["/archives/2020/08/page/3/index.html","92bda9cf8b891c57073f3cb968cc2198"],["/archives/2020/09/index.html","3af1ab2d3b8abfcf1d7b1fcdbed32db6"],["/archives/2020/index.html","6415bb9666bfe1729d16b030f29feb8e"],["/archives/2020/page/2/index.html","513aa4068d3e31770d00161f10d66ef8"],["/archives/2020/page/3/index.html","f51108243fa28b9fa72c61b6e36422d2"],["/archives/2020/page/4/index.html","60e09f577631859ff27b19468f28ea47"],["/archives/2021/03/index.html","d5d3b2ab9a7bc45c1de0b1a777e702b6"],["/archives/2021/04/index.html","fc32e59f3b6fea1b4e4df91552b4dbba"],["/archives/2021/05/index.html","2ba26789c03a647e3a4bd8f172327b52"],["/archives/2021/06/index.html","7db8ac1c9aed4894f2abcf21cc5a1b0b"],["/archives/2021/07/index.html","5d10b0aeeab76116317fb2cfc7da8e52"],["/archives/2021/07/page/2/index.html","4f2e0a11602e495466fb865665e5918a"],["/archives/2021/07/page/3/index.html","c63da146853268b184c6ec9b3962bb3b"],["/archives/2021/08/index.html","6243ad2b00f930a0559fca9eda1835f1"],["/archives/2021/09/index.html","46f28932efc9e62e3c7994388c5312ad"],["/archives/2021/11/index.html","4e4d222b4be443a6fa58fb10dafcd96e"],["/archives/2021/12/index.html","3c9469cd55b4c174cc53faef8ec8eecc"],["/archives/2021/index.html","1f8e8cea79eb2336dc3f389a33b84f49"],["/archives/2021/page/2/index.html","ad97ed9ffbd5294ec9e1823a26bea8de"],["/archives/2021/page/3/index.html","8b27dc861ccd9e6e8af40d3c8f3ec146"],["/archives/2021/page/4/index.html","14585d6cf5a8bfabc4fc2f1cdc1da70e"],["/archives/2021/page/5/index.html","6789ec8398115676b5ba7c5073c73915"],["/archives/2022/01/index.html","9a2ab94b02459971296957aa1b9def2e"],["/archives/2022/03/index.html","187c156584a73a16fbc2c6abc516019e"],["/archives/2022/08/index.html","7cbe376089a1e8b0dfbbe55a2eaed465"],["/archives/2022/11/index.html","5b1792d46d0f9b15865c0c42a4fe4282"],["/archives/2022/index.html","cf6949ec034062f1f3c442a5aad84c5b"],["/archives/2023/02/index.html","2cb3141a0442c6cd3f3d3e1eabe1ff94"],["/archives/2023/03/index.html","effbdc21c5c4df6f712aa7a0aececbd4"],["/archives/2023/index.html","9e66fd96a0cb174721230005aaa586c6"],["/archives/index.html","c8bd96cb5d210a7da4ce670258f6b1fb"],["/archives/page/2/index.html","cf49e36c2054c58c0cbbefe8c9aa4144"],["/archives/page/3/index.html","4a27911367cd2b0c0d1d57e429870c05"],["/archives/page/4/index.html","046a8ab7709d0f91edd972bab1b501a4"],["/archives/page/5/index.html","63dd213c68f373bbe5af530e69a12fb1"],["/archives/page/6/index.html","a0394ddcf05d990f3cedc51596c8e88e"],["/archives/page/7/index.html","06ddf7ac5fa56c4d1c48916fe9a7fb9d"],["/archives/page/8/index.html","fa121d2f8c2ca1f50036d5519b550e04"],["/archives/page/9/index.html","6e160346709ba3d7b7170bcd6b160ba1"],["/bb/index.html","be5663631224c76e9b4cfabe590f79a8"],["/board/index.html","0ee9951892a34e40597034ee3627e6f7"],["/categories/Hexo/index.html","8628b6ca866c8e23e007a1aec8666f6b"],["/categories/IT碎片/index.html","5f3acf8b2c431528969d7abea6490f40"],["/categories/index.html","41ed064281d31ff3a33f88e2cfeb09ed"],["/categories/前端/index.html","5a7104326edd9202a22f787aadfd5aae"],["/categories/大数据/index.html","d1dc5802a71508dd2edea5ed097fcb4f"],["/categories/大数据/page/2/index.html","34d80dc9e28ba78a5b2bff50292b1566"],["/categories/学习笔记/index.html","fecfb5ca9c00d668da74a7ef97e50861"],["/categories/工作实战/index.html","ffcdbbf77d21758bae8eb80f23b15606"],["/categories/开发手册/index.html","df5117a213f7ea984af2f360d9d6e101"],["/categories/数据结构/index.html","a8a4ea79b5a7a969ad400e1d58142fca"],["/categories/案例/index.html","4674beb4767100ceeb6fec3012610003"],["/categories/源码分析/index.html","86e9c4c177f5cca507b2ddff35ad0f09"],["/categories/设计模式/index.html","0fcd2d76a4b59839bba505270dcd72a9"],["/categories/设计模式/page/2/index.html","d58813c0b08e104d8e31e7635f44c3db"],["/categories/设计模式/page/3/index.html","bbb5837785a451f1bfce05e4c2f426f9"],["/categories/面试/index.html","7ed64b95fdb22e6164bdc372c7e68c68"],["/categories/项目/index.html","947d4d9fb26c1af7a8b9ddcd61cbee2f"],["/categories/高级/index.html","d1d6246c7324a426a01d69378c795448"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","40ddf0d876c0791447df89d4237ee247"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","4bba14f8a4be9a61cc4b8bdb791df2d3"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","572b3135a8744cab6d79e1de7f8ba1db"],["/page/10/index.html","891d64657130bfd8491a6793348c8e19"],["/page/11/index.html","88496f3c57b00aa59e8db6750c00e81c"],["/page/2/index.html","33c19f4faada13e4ebe145523db7359b"],["/page/3/index.html","533afe544e2c54aaffa4f826b36ff4f0"],["/page/4/index.html","88ebde52e80a25fbcdfec76c8f96a52b"],["/page/5/index.html","14b645e59cc10faeb93c8716bd8c948b"],["/page/6/index.html","4a621f0fb443990500521608cf8ddca8"],["/page/7/index.html","880fc70c0cfac775a303c158477d8d44"],["/page/8/index.html","4ced8676494d94d49741055763d5015b"],["/page/9/index.html","3ded0b752b2c5eaca7ac6c1c73ce5791"],["/post/121bde1d.html","a9e7987065d9461a907d0dc08c7ca7c4"],["/post/153083dc.html","b6f5f6ddeb4a5ab9ca874f6edb2a48d4"],["/post/164eee11.html","ab53b77f361091a8d843bb6d591c6521"],["/post/1a7b7abf.html","fab6aea12f853d731082026a512167e9"],["/post/1baa3967.html","1372564f7950b54c7885734a2c06a7fe"],["/post/1f4ac2fb.html","94992ae33f36109f532fea7a07e6a554"],["/post/22580020.html","97b5c588931a0514e60afb34dd89a9b3"],["/post/286296.html","49f728c3595fc9f7992eb788f4f36e7c"],["/post/2cd418c2.html","45fb5a95b27307c0e55ebc13e767689e"],["/post/30cf0cd2.html","733bb96aebfed41bf0ca9416071d11ae"],["/post/317f8360.html","b92af79dd60a91141938d29c9e49a22c"],["/post/33cb1151.html","1256635cfc30f2e9db0c074588aa26c3"],["/post/34e57ffd.html","b332bec39aa20427c0ae0e4b334357be"],["/post/3d20c1d7.html","d3f2a960736708af3e0cc60569dcc4d4"],["/post/3d24dcf9.html","93e01a4dabf87e8aac4a0998d911510c"],["/post/3f6c447b.html","5a758c98e14d7aedc9bd1a20f8122014"],["/post/490cdff9.html","2fe97f37b036e6c50d950ff33e3f2965"],["/post/4a1111be.html","1d75c100a27b6b87d91b264210446d6a"],["/post/4fa8e0c4.html","dd6fbf7f6535dc00510da2bff7a06b78"],["/post/524e74d7.html","14c9321eb64f08efcf4a6d8620e53885"],["/post/539343bf.html","227915cd24a49c406dfa85b28f47d006"],["/post/54788f73.html","5b998867eb2e835b0febceeec6e04cbe"],["/post/563268dc.html","17f6eb1b154e1e9ec1b9cf3b20971511"],["/post/5ac88c70.html","9982b52644d61b9f15634ab4fc0ba709"],["/post/5bf55f4.html","cbeb6fc8983c9033430c012c7ea2d53e"],["/post/5e87465f.html","50b9710ea6361d71efa269912b294c77"],["/post/6016428b.html","dd451090899dd88e0cffe7527dc2a10b"],["/post/6208627e.html","fbecd53d98ff10228d5f57b2a153bb14"],["/post/64b51ed9.html","be7b775530604d4bddaeea465066a264"],["/post/659da5b.html","3b46d488d519653c96e2b7cca5b99d7d"],["/post/6c429b75.html","e6add55002b3b2e2c1e8d5f43bf66ac0"],["/post/721d4875.html","909d52490ca0d4a7cc818deedda170d5"],["/post/72e3b671.html","b0f862b26e8d6088949a74f8f19ae9ba"],["/post/730d8d6c.html","b4c1aad36cc792be6b4d918c4bab6b99"],["/post/74fc969.html","b208faea0cc3fc26d9a557ac7a7dc7df"],["/post/78134e07.html","a57cf88c516b3fce90e26671f5af001f"],["/post/78c07335.html","9cd2c85775ab96402ee25f4973345b10"],["/post/7901ad89.html","313b29488c927cf8caeb3f9b0fe247d7"],["/post/7a2a0c9f.html","7656d863c509ab3cf9c6a5d6d7125190"],["/post/7b216a3b.html","06e18e653707a8568b72e47e2a781090"],["/post/7b510e10.html","28743840f350203400dc826881214653"],["/post/7db2942d.html","1709e432ce3d5b98ebe6954dfc87fbd1"],["/post/7e6c6990.html","dda3e7980b75807013f430b6cfcea6d5"],["/post/7fa79d96.html","568fdc34f2f97506bc40143d2d782cfa"],["/post/855673ad.html","61852a7f695a0d4090cbb912951e16e1"],["/post/892a2328.html","98f3984710d5788edb6c1cf167208f28"],["/post/8acb1976.html","f4bfe250c42d5370c9eaddb026263726"],["/post/8e4fa41e.html","c8cf7018a44e3a2e5945255d296999e7"],["/post/8f488ef0.html","58b7ba329cf6c4a5d18450ed55863e13"],["/post/8ff08e27.html","7fb5fcbab96d0941c98db5e54b0fa6ff"],["/post/9055d217.html","9f1784157d655fb5b7e33f03b6634102"],["/post/91ad9ce3.html","8749322f036d13701422bd70c59edc93"],["/post/96131cab.html","908a8fcf4bffbc792e621165e7c0cfb1"],["/post/96b5906.html","83b962a2b046c0e4fda0504f775632cc"],["/post/970fcca5.html","3a346686eec53b4c5d78d5cec1d788ad"],["/post/9a246216.html","97a3bdc0cda3b15d7b325ab0ee6aefb6"],["/post/a10c77a7.html","2108babf5ce9a08707222e1682c83e17"],["/post/a708a60d.html","d22b2e3206151cc0e1cb62d8ee4e7aea"],["/post/ad27c5a8.html","a5760ff6c94c3422dca12d921758e2f7"],["/post/b6c47025.html","abfad5c895ee8e47f96735c384526846"],["/post/bd69ba8b.html","59b93c13b89c0114a37d27ad52e4e812"],["/post/bf7f3b65.html","d014935e9155444706daaaae2cfdc9e6"],["/post/c3176455.html","8654efc39d8ec1ee413809c35dadd32a"],["/post/cb80ff62.html","8cec66c613aff14626f51d7fa5a9b5c5"],["/post/ce0e685a.html","eb9798fd85646db2186f36d2376861f5"],["/post/ceb39ac4.html","0401783f9631410b2bdac9349dd647a8"],["/post/cf413e35.html","6bbd2d1bd072f016400bf373c07aeacd"],["/post/d036071c.html","4447a5a2ab4a96834e7fb0682026f4f0"],["/post/d39191a5.html","302d01a090c56232d2b5faed41243ede"],["/post/de3bac1b.html","6f390a7936182397246db13e860f76ef"],["/post/df879792.html","62f4ea966418a6b3db475f89c08e4c9c"],["/post/e008fc33.html","2f2d2e1fe2505adec5723deb44754218"],["/post/e19da94a.html","feb758b60b017207ed89a6215d6257eb"],["/post/eb04e0a.html","cdb81bdb7631a29940746f41e838bb72"],["/post/ecd67acc.html","f982fa940f17ab648d3722c7633b31e4"],["/post/ee040603.html","1aeaeda1324d1c6ff29f616f281f3e72"],["/post/f1601c3e.html","539ad78dc79073a0b5fc59c3a1b0deb1"],["/post/f31a5a5b.html","313e3f31b55a289ee3fc30f5580919f9"],["/post/f5c535ea.html","9e8710f135bea42579df55eeb78ac033"],["/post/f7500981.html","67b3f759f302cd3a4d37496599b33d5e"],["/post/f79807ee.html","80a0c5f66d8beca6d0b6a0c82edede30"],["/post/f7de8aa8.html","a6c5bd3ec5101e0bc85a09339c7535c9"],["/post/f8239d66.html","7745456eb277dcb2d16595b5a3966fcd"],["/post/f9f5e0c2.html","e905be2e2e22c3e880075795627e88fe"],["/post/fb77661f.html","28857eff37e39b752f829b190d2a199f"],["/post/fe1f88a1.html","16fd4b789dec6ac416314ff879652b88"],["/post/fe57b0e4.html","0b7fc0e086713d1c8a8c3998bfe52486"],["/post/fe816c3c.html","7f014907c02bd0022128dc5828681176"],["/sw-register.js","b7210c3d5c2a7d3c9ae84ca5be846588"],["/tags/Butterfly/index.html","25740272db7a55531d1a0bd466d574c4"],["/tags/Hexo/index.html","a9851ff9fab02f1f8bedfc007c743ef4"],["/tags/JVM/index.html","4555beeb1ac3c447fcd754f936ba5718"],["/tags/Linux/index.html","8db97b8ad30ce03f286ce7b76984785a"],["/tags/SSH/index.html","abeb00cd840415200a97a3983a66ba8a"],["/tags/index.html","8b8de0e73ac42483b0219b55d9f602c7"],["/tags/spring/index.html","9e7c951502b9ef1f928f39add345db49"],["/tags/vue/index.html","8f2f59a315f0d8d750f5384b6159bb8c"],["/tags/一问一答/index.html","2868ee6145fd1e711db677d3818b58d7"],["/tags/个人见解/index.html","449ccdf206483d75498a517d60be7b34"],["/tags/大数据/index.html","2d3e6bd1f84ff7d2e6122626ceae7943"],["/tags/大数据/page/2/index.html","d721725f925d66d1ea3220f4a2f5b9b9"],["/tags/大数据/page/3/index.html","670a7b8841f8c3dcaf0061010892282a"],["/tags/学习笔记/index.html","0c9fa19c5b36eb8ba30cf9aa5354ecee"],["/tags/安装教程/index.html","09808ae408cc59ba9c3100388b14859d"],["/tags/实战/index.html","0af22d3246eea3d2e1447a465a5ed446"],["/tags/并发编程/index.html","9555fa09b0a32d0b084471b3e39d735d"],["/tags/数据库设计/index.html","7d90d3332dd8b59c24196a319dcb4514"],["/tags/数据结构/index.html","d3c11c64207267fc1409990989f5e32a"],["/tags/案例/index.html","b4de9f84ea6c4dbe96162ae97b90f594"],["/tags/注解/index.html","01ccec48371e74d5bffd438a53520e25"],["/tags/源码分析/index.html","4dce702007f49ffe5a36bbe72a21977e"],["/tags/程序员/index.html","8031c2a79cf7c5793af13230d878ac55"],["/tags/笔记/index.html","b8a349cc80ae7a4f3c77429a1a8c5c28"],["/tags/算法/index.html","93a3d7333ecb9ee7cfb01790926effd6"],["/tags/设计模式/index.html","ef78fbd0c0eb97d493680e70613f53a9"],["/tags/设计模式/page/2/index.html","03b15abac52ecee009171c8c5f49943f"],["/tags/设计模式/page/3/index.html","e7296bc35b70d44c04459dec096d214a"],["/tags/软技能/index.html","3d82b371cd1f2c718ef339b17b3f0728"],["/tags/软考/index.html","df23099514c89696626a0d3d8a3b1e1b"],["/talk/index.html","955363d81f16f2ff6fbe4df737507cfc"]];
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
