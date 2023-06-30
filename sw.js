/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","ab24efa856cf820e453dc80b30afd1f8"],["/about/离职申请书.html","79ed9d304423cd48cb2f71f8cc2c7fd4"],["/archives/2020/07/index.html","acfac39c204521aeea1bee710c367781"],["/archives/2020/08/index.html","a5e5f583f1e9ed33f915ec912674bb0e"],["/archives/2020/08/page/2/index.html","14ef51a23911ac251ce10c205f03d2e8"],["/archives/2020/08/page/3/index.html","c0c19b83d0d47f7cf9ba6f0e8f5ecbc0"],["/archives/2020/09/index.html","f197f8481f93ab9d3aee524324f14a1e"],["/archives/2020/index.html","a6065392cc66d2beb7857c2c80ce0104"],["/archives/2020/page/2/index.html","fc93486d9bf19702fe35d80777229114"],["/archives/2020/page/3/index.html","293a028470aa38c533a888dc46a4fa0d"],["/archives/2020/page/4/index.html","cd3c8bc418a8fa3fb00a3e1513ca6de5"],["/archives/2021/03/index.html","86f71da4976ae4c4eed70397ddf1d987"],["/archives/2021/04/index.html","d84e9b52e16388eaf0aaedf62b4e3cfd"],["/archives/2021/05/index.html","7511a441cc47af5221889569e4e74f0e"],["/archives/2021/06/index.html","f2f74a776a1f1c9130a1c91ea1b94140"],["/archives/2021/07/index.html","01a7c911b05d3c89b94e04480e18cfc1"],["/archives/2021/07/page/2/index.html","f6be1d64fa0f8dc52090d04fd46c4d69"],["/archives/2021/07/page/3/index.html","a8a29ab109df1c777b2b0e7cc799064a"],["/archives/2021/08/index.html","c6b0dc43de57929156612184fd6cb881"],["/archives/2021/09/index.html","1c0da05c75217c885f4ae5c9682f1db7"],["/archives/2021/11/index.html","bbf3f948bb4d1a1ec0737fc186cad66a"],["/archives/2021/12/index.html","834a92117f7f1718303bf70627c31ff5"],["/archives/2021/index.html","4bf5a59ce7546d0383c1deb8e3eb92dc"],["/archives/2021/page/2/index.html","0338ce4df2d33ece8e86e62c3cf6a572"],["/archives/2021/page/3/index.html","45b9bb69f39684850bfdcd626b25e61e"],["/archives/2021/page/4/index.html","7f5453b2cfdaecdd146782e93d137368"],["/archives/2021/page/5/index.html","836c7cd532acc0b740b1363ea2fff799"],["/archives/2022/01/index.html","ce1749c16db61d22c8b68503571d510f"],["/archives/2022/03/index.html","56f2c337108778821e6a3e64866aca2b"],["/archives/2022/08/index.html","f29d6cd6d40fb6b55d3c8e439ca19b37"],["/archives/2022/11/index.html","fdafc2e4a6f722824fca8e2bb0ef3de9"],["/archives/2022/index.html","71b472a572af6f83962d3976876b3c03"],["/archives/2023/02/index.html","92bffa7d622541bbf9acf0a5e9f91633"],["/archives/2023/03/index.html","40b5d12a43c0fe8c0e1de10777f000be"],["/archives/2023/index.html","ea1a63a16294f233e64d3971f9569327"],["/archives/index.html","75720029522fa90be069aafb55adf92c"],["/archives/page/2/index.html","08dd014d2a2ce1af7f85b5ee5633a508"],["/archives/page/3/index.html","a11665cfbb9029a604ebfcb6b95326de"],["/archives/page/4/index.html","2c5cf6b93b427883109ee4085306d263"],["/archives/page/5/index.html","c6ee66159905156aa6ae17175f48beac"],["/archives/page/6/index.html","5b45c5fd92a16d83a219e2ee892f6373"],["/archives/page/7/index.html","8bb9511a7d4997a85301c24ea585a7c4"],["/archives/page/8/index.html","7ab36291b0792bf63b871d3c871433e8"],["/archives/page/9/index.html","66890d938280776dfa74f60e43499a00"],["/bb/index.html","3bc363fce667b83811fab0c297c1332b"],["/board/index.html","65d8afc9e67e5787057c4b6ad0fcff61"],["/categories/Hexo/index.html","cc6f969bcd0bedd8a0e46d42c37d1086"],["/categories/IT碎片/index.html","70cb9128ef595259911840e3e5df21e2"],["/categories/index.html","090e780c4855237035b5bb803af87095"],["/categories/前端/index.html","8a6e9217f6f80e42f37c80fcb3f8c25b"],["/categories/大数据/index.html","c4ba92f40515d89880290a0b67c8b208"],["/categories/大数据/page/2/index.html","928fafbce81bcf3a4333e14473006d6a"],["/categories/学习笔记/index.html","8420dcdf691ab07651b2e391f9eeec03"],["/categories/工作实战/index.html","a872f1476562406c882efd932574e4ac"],["/categories/开发手册/index.html","a991a8a4be390ee1e6dc487a3d26772e"],["/categories/数据结构/index.html","2e10d50c2ddeca9837043eb1b8513b84"],["/categories/案例/index.html","d15e159d09066d87038775f87365d990"],["/categories/源码分析/index.html","794a6aad4836a99aab4d51b44fc9908c"],["/categories/设计模式/index.html","42147a1bfc6a5c13e6602e2826bf412b"],["/categories/设计模式/page/2/index.html","f64ed919cb39947421a4c9861dccc550"],["/categories/设计模式/page/3/index.html","91f0a93a90bad16742f84edafd87ed7f"],["/categories/面试/index.html","e813cc617e006b26d3cd46cdf9a19550"],["/categories/项目/index.html","709bdc6ff9ab6c6272320e1857124b18"],["/categories/高级/index.html","82846908e97985b13178ddd44df2a773"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","8d3b50678653e1f9df00843dbb99cb74"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","b80081ab3c2b7bb22a4dd806dbd35419"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","9baef0563c256ceed963a07d105f9a9d"],["/page/10/index.html","c0eab2a1b2865cbb9714f72469c66f39"],["/page/11/index.html","63ebb1ed4cff64a9d1620491eb4c19fa"],["/page/2/index.html","1ed5de451e7878ce5f6372d9cba6d2f3"],["/page/3/index.html","ebec88e0f3d24e0922c55e86ad45209a"],["/page/4/index.html","75d27ed1b41c0597119660ed727b0c9b"],["/page/5/index.html","c7244bbf031aa3f9f8bddcbbc470011a"],["/page/6/index.html","26818e7ee52c7b2719463079f1ec91a3"],["/page/7/index.html","80a829d5db5a778df5647c4d8b7024cd"],["/page/8/index.html","f3e5ccbc623c66e888c3f91183ea6ac9"],["/page/9/index.html","02364d7c6d62493108efa8945063df5f"],["/post/121bde1d.html","abb51dd7508dcec531f5af0701b50156"],["/post/153083dc.html","e9a22fe90204b5bab305608619f1bbc4"],["/post/164eee11.html","876edcd41fcb693c09cfae127dfc4638"],["/post/1a7b7abf.html","fab6aea12f853d731082026a512167e9"],["/post/1baa3967.html","8c598c6b945000a5922b388ff139d3f6"],["/post/1f4ac2fb.html","35b216564d2a5c56e8745810d14fdfe5"],["/post/22580020.html","ddae36685ba6dcd09d6e79d244452e6b"],["/post/286296.html","c27c9893584df95f34df7d7f317f94fe"],["/post/2cd418c2.html","9bf237c5e2355c27ff63f55e16757cc9"],["/post/30cf0cd2.html","59f9be7dfe07313b72b698232a1875d9"],["/post/317f8360.html","a119b0003e8d7f57a9d02f23af01a2c9"],["/post/33cb1151.html","1256635cfc30f2e9db0c074588aa26c3"],["/post/34e57ffd.html","38a1658a046af8c5b8bfc9d7bb720e9f"],["/post/3d20c1d7.html","2155ed1f21200770fbcd0b7cb3015646"],["/post/3d24dcf9.html","93e01a4dabf87e8aac4a0998d911510c"],["/post/3f6c447b.html","e7ffbdd3e93916af8d5ae7bc356387a1"],["/post/490cdff9.html","2fe97f37b036e6c50d950ff33e3f2965"],["/post/4a1111be.html","1d75c100a27b6b87d91b264210446d6a"],["/post/4fa8e0c4.html","b9ff633c63a69accb2993c36c388917f"],["/post/524e74d7.html","c7049457a7300f0f4d76a56155735fc8"],["/post/539343bf.html","fd37d3063f0d9b9197757ea9b33014a7"],["/post/54788f73.html","df11df000ff84605d6afc0164ddf9a2c"],["/post/563268dc.html","114a8e32aa1bbd843be9f557d886ddf8"],["/post/5ac88c70.html","ba3f9c5c1cb7a60f614499393bd92c68"],["/post/5bf55f4.html","8bd231eac32abddead4d8862e2a98b95"],["/post/5e87465f.html","b65af2fda4c7bc308924674bfe146c8e"],["/post/6016428b.html","ec797db7e217079ffe8c70cfa4e80d13"],["/post/6208627e.html","df4c62efebf4f252594a6eae002a6a49"],["/post/64b51ed9.html","d32c840d2513f4363917049332c1e706"],["/post/659da5b.html","ea58ba4f1c9acbd7562f6741f26f0017"],["/post/6c429b75.html","6d611704645868e2e2083ea4ebead780"],["/post/721d4875.html","909d52490ca0d4a7cc818deedda170d5"],["/post/72e3b671.html","260e38d3991ade7aee4e049fcbda1d3b"],["/post/730d8d6c.html","e9ab08d033a27e513c4c24f962436369"],["/post/74fc969.html","28ce1404ca9c0adc4e73c235056035f2"],["/post/78134e07.html","8f61f973e34318fb097f4a7bcec43e80"],["/post/78c07335.html","7febbcfd43fb394fa790d8e7c2e7a396"],["/post/7901ad89.html","5a69c47f63140f3dee39c28b56521f77"],["/post/7a2a0c9f.html","29d15fcb43ed2f3a039f3e0cc2ff901d"],["/post/7b216a3b.html","c8b4a9163bb51ab4bc05c348b13e37bd"],["/post/7b510e10.html","79c61170366b8b954310601cf5ee996e"],["/post/7db2942d.html","6052fbf1b9319167415c614c1081ae1d"],["/post/7e6c6990.html","ecc8d0382b5e04d5de70211220191719"],["/post/7fa79d96.html","5a0888d082783851453ec7a9ee7fc550"],["/post/855673ad.html","1ed68a226dbec8aa8d380e13c08d5401"],["/post/892a2328.html","407d224fc506b2fe5806956954d17da0"],["/post/8acb1976.html","e241ecc5bfb1102be0eb062421bbbd26"],["/post/8e4fa41e.html","dfd4119cfd2acc1e114402d2bf98482e"],["/post/8f488ef0.html","58b7ba329cf6c4a5d18450ed55863e13"],["/post/8ff08e27.html","7fb5fcbab96d0941c98db5e54b0fa6ff"],["/post/9055d217.html","94620d13ef7119253c174fe0240fb076"],["/post/91ad9ce3.html","28aa6f91677b9e7ceddb59a6cbe32eca"],["/post/96131cab.html","9d906e5b38938fb792455c663758e73b"],["/post/96b5906.html","83b962a2b046c0e4fda0504f775632cc"],["/post/970fcca5.html","3a346686eec53b4c5d78d5cec1d788ad"],["/post/9a246216.html","ca5949f6a4b7dcf24156f835dd397093"],["/post/a10c77a7.html","c0214ca9f876c29454303abdd407f2a4"],["/post/a708a60d.html","d6bada6298902ea3926d2bdb8af66cae"],["/post/ad27c5a8.html","a2ecc245c0b9f917fca42dd0944d0a21"],["/post/b6c47025.html","2f99af2296346099c18a5dc8e6cf3d54"],["/post/bd69ba8b.html","d92940bd83c27bd97c17b93f976f32bd"],["/post/bf7f3b65.html","d014935e9155444706daaaae2cfdc9e6"],["/post/c3176455.html","f0d1f1428c583ca5234d6726de11a654"],["/post/cb80ff62.html","8cec66c613aff14626f51d7fa5a9b5c5"],["/post/ce0e685a.html","c279a94a3db51c1a736d46fb7f9ecce4"],["/post/ceb39ac4.html","29d7ef42133419728d7fd363b0b840fa"],["/post/cf413e35.html","700416ef7e124b93ca252c524b774396"],["/post/d036071c.html","4ccdbf173780c5e62f07e5218e911bed"],["/post/d39191a5.html","e7259bb40317f6b320692e2c1fdbcab1"],["/post/de3bac1b.html","6f390a7936182397246db13e860f76ef"],["/post/df879792.html","7a1e8b1df3d8d234ac1c752a7a915f8b"],["/post/e008fc33.html","83d933a42ad76a75dc5cb8cdb9290631"],["/post/e19da94a.html","4e4921b174adc1ac4d96bab37d557f20"],["/post/eb04e0a.html","bb9842df23528525c7f5f07cf5e8a9ba"],["/post/ecd67acc.html","f2258b65f155b2c6c05c8dabda752396"],["/post/ee040603.html","1aeaeda1324d1c6ff29f616f281f3e72"],["/post/f1601c3e.html","539ad78dc79073a0b5fc59c3a1b0deb1"],["/post/f31a5a5b.html","be0a5641b825958125591e169f292a29"],["/post/f5c535ea.html","421c496350c1087af5117b404d2d7e46"],["/post/f7500981.html","deff27b65d4e0314def15ada102f8e91"],["/post/f79807ee.html","80a0c5f66d8beca6d0b6a0c82edede30"],["/post/f7de8aa8.html","798dc5b8bee5b2b51ca1a400042c2a19"],["/post/f8239d66.html","cfff559dc20304113991543c22a44445"],["/post/f9f5e0c2.html","2bb7fb68c3dc2b3b14f52006169c0d4f"],["/post/fb77661f.html","b3d91c81ba3c050b3b680ea2ff10485c"],["/post/fe1f88a1.html","537129d4ad6dfeac4b4d6b0793ee8489"],["/post/fe57b0e4.html","f38105f4c53e0315486eb130b5d936b7"],["/post/fe816c3c.html","25124c2dc90cad158d929fdf71e3b8c4"],["/sw-register.js","732d1f36f71a3108ee087f7864bf9ac2"],["/tags/Butterfly/index.html","68ed6b31eef0ea94fbb39ee142331dd9"],["/tags/Hexo/index.html","7c00f90edeeb91fab7d0fba9d074bd77"],["/tags/JVM/index.html","e2ffed74b260d15efc5d95569097afd0"],["/tags/Linux/index.html","bcc3fe9a32431429826027ee1fa98026"],["/tags/SSH/index.html","c5cb0c23b0baeca62cc7ee6d6c776c42"],["/tags/index.html","0e9af563dfc0f13cbfa4c260a088e996"],["/tags/spring/index.html","021a255bd72a87cf0e44acf1532b9e87"],["/tags/vue/index.html","889f60748ae974ab96f990f613634c76"],["/tags/一问一答/index.html","126185cbc25a5a0f208bbb583a8584f7"],["/tags/个人见解/index.html","7aed289dbc2137bf40ec2b73b203549c"],["/tags/大数据/index.html","60028d502ae9a42afa25786f2200108e"],["/tags/大数据/page/2/index.html","eaad12cfe14067722cbdc4c8ba33191d"],["/tags/大数据/page/3/index.html","167c6b4337806410c1292af48d613176"],["/tags/学习笔记/index.html","3675dc1326727f0cb7eee5f5ad27d199"],["/tags/安装教程/index.html","41752c5f25f5561911c87adc6fc00635"],["/tags/实战/index.html","c478f866c13c23bf0d7509f8ef13d31c"],["/tags/并发编程/index.html","4398eb0c6c315549a805207533aeb99a"],["/tags/数据库设计/index.html","0d5fc44f70f92152f8e0c0063d5bfa9f"],["/tags/数据结构/index.html","ff289c566588a9379a47c0b4b31c7ec8"],["/tags/案例/index.html","de48eaabc18b98051fcd6e7dcda6ac8f"],["/tags/注解/index.html","efd34642db255225fe33d02b91e77b0b"],["/tags/源码分析/index.html","05f35b412d56ee9ea5ffd3e81337ea30"],["/tags/程序员/index.html","d94b9392aa737f6c6f9f364031a62260"],["/tags/笔记/index.html","113bef72a565ff2f11fccf7523cc75e9"],["/tags/算法/index.html","58961f856e213131dc08cb01f2e69bb8"],["/tags/设计模式/index.html","4a75bfc79f416aedd7f9afd72043e746"],["/tags/设计模式/page/2/index.html","9fc341aab0be6e252c90fee342c85674"],["/tags/设计模式/page/3/index.html","3eaea5cabac3d8be8d72ecd0075a0297"],["/tags/软技能/index.html","3b1ab93027e80ce3547cc7b1dd98a033"],["/tags/软考/index.html","0d015dc8203854d98127e0f0e7a2a5ca"],["/talk/index.html","6b3872a74fdedfff774af787935bb8e1"]];
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
