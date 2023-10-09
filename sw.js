/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","dcee0be492564650a598490d47f1d840"],["/about/离职申请书.html","10cab370118ab4ab3926331acef9a968"],["/archives/2020/07/index.html","23c2501815ff5d1de5876c0d17052edf"],["/archives/2020/08/index.html","e5e77691cf2482098f4301543bcf873c"],["/archives/2020/08/page/2/index.html","321e157aa3554e6f9990b9a2c6a189bd"],["/archives/2020/08/page/3/index.html","325fb15fe079ad43201e3a9cf9cc1d4a"],["/archives/2020/09/index.html","a9677436bb7a904188457ab8f43f2be5"],["/archives/2020/index.html","3b3acad548ae91a6e5ae1ecaf14c641f"],["/archives/2020/page/2/index.html","1e131952af22d12f2c72c77655b13eb5"],["/archives/2020/page/3/index.html","b4fea3e9e55e543426fd524c2f6863fb"],["/archives/2020/page/4/index.html","46f1255295ecce5307b14b1fda83c452"],["/archives/2021/03/index.html","783c3c9967627e71cb4f7dd49139429b"],["/archives/2021/04/index.html","b3eff4056cadcd0cedd2c24bbe2f7952"],["/archives/2021/05/index.html","33da97690a7806483a3c86a6ed12f75a"],["/archives/2021/06/index.html","fac031a47fff0bb329a356cde1a640b8"],["/archives/2021/07/index.html","498f01e6bcf1c009181745e13312e4da"],["/archives/2021/07/page/2/index.html","5b5e5e9db735cf1f0150791a142cd718"],["/archives/2021/07/page/3/index.html","88c62ea1ccfcd2e09cc85e02e063512e"],["/archives/2021/08/index.html","58876f5a041d7281bf008f0dc3b979f9"],["/archives/2021/09/index.html","886fd59d648177934c03bba36b0084c4"],["/archives/2021/11/index.html","53fbe6e670ff40b0d55264a739fa4250"],["/archives/2021/12/index.html","ec4745002f6f8bd74739a21fcf69e095"],["/archives/2021/index.html","a420fb272b47bc892ef6d32e6db68600"],["/archives/2021/page/2/index.html","8c0603bc5a956d6f3c7cf2fb2eacc96b"],["/archives/2021/page/3/index.html","20cd3ee784eaeb630d4ed22661ae0899"],["/archives/2021/page/4/index.html","9d796c43095c4d6b52804e75a80f6591"],["/archives/2021/page/5/index.html","5f96e4e70fd11df4966c7f144b48d2f1"],["/archives/2022/01/index.html","b2b78e7a42a7d427d5f39369ee33b4e4"],["/archives/2022/03/index.html","4642752cfbc83081c8e968c9535d1a5f"],["/archives/2022/08/index.html","93674544bb1d352b3567835529c85e43"],["/archives/2022/11/index.html","c9b63689873c6318dd18c644a339b004"],["/archives/2022/index.html","7284588520ab965873519fc0d5a0a156"],["/archives/2023/02/index.html","2bdd6e4482710d2890c8fdad12804849"],["/archives/2023/03/index.html","9e652ee22bd4cc994f2053d65b59b293"],["/archives/2023/index.html","8974c16eadefba837e2d0b918c9c69b3"],["/archives/index.html","d6c0d68de665fed99a8f3382e50d2ba5"],["/archives/page/2/index.html","1e28fe38202621b11fd2c30d9c025fea"],["/archives/page/3/index.html","7af824f05136bf7ffcff9036ffdd9e03"],["/archives/page/4/index.html","6df0b533746e35f919ebb411be76851e"],["/archives/page/5/index.html","8634cc6ce32edc7b5f779ec0c03d44c1"],["/archives/page/6/index.html","05c3ea46a57fd29d72400fb91147d6b1"],["/archives/page/7/index.html","055264bddc36f4c009b1f562e6dc3df3"],["/archives/page/8/index.html","e79b3c12397d992ad5b307108c7d8aa5"],["/archives/page/9/index.html","a4cc10db8526a9b70d0edb228250c212"],["/bb/index.html","1e930d82358bc865fb34b1d17d8e7617"],["/board/index.html","bb97e49c97116616f80f97064583e8ba"],["/categories/Hexo/index.html","55f3e4e6e658a16b518ef7eacde7ca48"],["/categories/IT碎片/index.html","f218db8b9ce979c6f0a427a33d30f030"],["/categories/index.html","96225da3eed9ace2cea401f1c4a7fa2a"],["/categories/前端/index.html","e76ca1baeaa1925bbb5f29a365ea7ffc"],["/categories/大数据/index.html","fb33acc8f05d4640bd5ce1c8ec0a8f34"],["/categories/大数据/page/2/index.html","383068c90ab10fba759b23df19e0bc88"],["/categories/学习笔记/index.html","5f29129b08f802464dc78d6e6ee7c17b"],["/categories/工作实战/index.html","289eb9ba9c6d6a18411f5abc1743f180"],["/categories/开发手册/index.html","27a5d47f15ecdc1e3e6b593f9e524bfc"],["/categories/数据结构/index.html","db7180ff72c8106a35d97ef06035a13c"],["/categories/案例/index.html","f0ce166d2233b633a1306bc46f23725e"],["/categories/源码分析/index.html","36a1e79b5ac65008633b91a08983def4"],["/categories/设计模式/index.html","522a4c14ca1c2feda6cce18e391892ea"],["/categories/设计模式/page/2/index.html","0e8bb4c41315bd319f7f765591828a8f"],["/categories/设计模式/page/3/index.html","b924194b2d5e075b4eb4ff874239d687"],["/categories/面试/index.html","00b3c4e8ff77ca71f0ec60d07f4c7e21"],["/categories/项目/index.html","d22e5842a4c14616aa61a59b0d1e089c"],["/categories/高级/index.html","fce909f7203cc4ddcae391631d56ebb5"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","42ed60da7d49041bb7939fdadc53855e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","85c6f459392d017ada776bf9374dab3f"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","cbaac5dc466c15a0590a0dca880a2936"],["/page/10/index.html","39cc38483dfd37f1d0b60c8d48bce58b"],["/page/11/index.html","69d57fc0a9151f1be0be8bfa13c7cc1f"],["/page/2/index.html","be6083234ed2034b00900d157e289f7a"],["/page/3/index.html","0383a2166f382f8a8b05d564f105510e"],["/page/4/index.html","8a3c38f2dd19d24d67f1df893fa8701b"],["/page/5/index.html","7d67411b4ada0d3b5123638cc156fd49"],["/page/6/index.html","327a8ab583e5e781a2d3fccf6a1b4bd5"],["/page/7/index.html","e5c37dea748115368985df1f509bba5a"],["/page/8/index.html","e847d0a142f3e2602d1898db6cf29a0f"],["/page/9/index.html","c89675ec6b91d5d99dd3a83e3f34d874"],["/post/121bde1d.html","67f914a7803775607515a844d4453753"],["/post/153083dc.html","68514a6a17104f5de03dbaefcb855a64"],["/post/164eee11.html","920430b71a4f25ecbad71c57a0fe3795"],["/post/1a7b7abf.html","a19bf6c72f6e48892f0eb11e173373a2"],["/post/1baa3967.html","2909495d113e583044c0a94f51b75595"],["/post/1f4ac2fb.html","bb09dcd7e53803db48c83c0af56cb602"],["/post/22580020.html","522450539ded7c25611f8cf583d61f0c"],["/post/286296.html","3440bcc7fcbf8bc3f443887487670a33"],["/post/2cd418c2.html","6f936d5055e1469b767411bf3a69c7ef"],["/post/30cf0cd2.html","4c328fe8ab650c3c63f0e3d7249a2b35"],["/post/317f8360.html","8c6283a65a8c9f2a3d47e6316d398d45"],["/post/33cb1151.html","79f09f44941c8dbe7f0512b040526975"],["/post/34e57ffd.html","540e9faa0523a98a60bc1cf172bc0d91"],["/post/3d20c1d7.html","b908d1e0a28bd9d5683cbe935cf79c88"],["/post/3d24dcf9.html","93e01a4dabf87e8aac4a0998d911510c"],["/post/3f6c447b.html","dbc47d4010c7689701f03ed055403fb8"],["/post/490cdff9.html","eda44362fa0a58651be4efff0bacb487"],["/post/4a1111be.html","350024c8ba4a7e9fc0e81016cd08125f"],["/post/4fa8e0c4.html","dd6fbf7f6535dc00510da2bff7a06b78"],["/post/524e74d7.html","f91c21f6f003410fa34de5daeeb0720b"],["/post/539343bf.html","5af406c3597c4afcaca0c7bd67f7a8d3"],["/post/54788f73.html","2ba683c8d87e40007f732a3cf2b50679"],["/post/563268dc.html","af687e67547dfa2f3da70845563e98a0"],["/post/5ac88c70.html","cef1a0f6a06348a268e70d45b33e4f04"],["/post/5bf55f4.html","e11e2a3354fa511c930193c9aad204e5"],["/post/5e87465f.html","22640e572e465e42735262b00cb23c1e"],["/post/6016428b.html","2666e8adb514640351754f4f30b48c9a"],["/post/6208627e.html","3c2c3ac8e16fbf4fe7c56437ff69ec38"],["/post/64b51ed9.html","d93ee81fbf3d07de3ecfa46e167809c0"],["/post/659da5b.html","c6b619d4aaffa6dd283de9cecfcf75c0"],["/post/6c429b75.html","5b8ff34fdb29d893039030f31d63a7bc"],["/post/721d4875.html","eb41d2fce371e2369c1fb066b55a825b"],["/post/72e3b671.html","dd5ed5276a7541fc757b6a97b93d0d84"],["/post/730d8d6c.html","b4c1aad36cc792be6b4d918c4bab6b99"],["/post/74fc969.html","7f53a03b38c764fbf16f794549ead0ff"],["/post/78134e07.html","4faa7abd7ebf26c9de0146bc2f33645e"],["/post/78c07335.html","2540346ada084771a11df8666e2d45bd"],["/post/7901ad89.html","c9613cf3f9694a26d8b9b2590d82f4d4"],["/post/7a2a0c9f.html","f22cd188ea7aaf255cd7dde2ae512236"],["/post/7b216a3b.html","ec90aaf19bcd27353a8236f17353b0da"],["/post/7b510e10.html","1c1a7d584b72166496c50ab7f075801a"],["/post/7db2942d.html","8ad10af0165b6b040c62285eadb0e31b"],["/post/7e6c6990.html","d3946709cf0426c04665109af782a171"],["/post/7fa79d96.html","602df23d657a16c285e9ea7be7ca7365"],["/post/855673ad.html","b0fe9dd6b4094623909689f99baa6a7f"],["/post/892a2328.html","412a70d8b5de9c343bcbdf0950861f32"],["/post/8acb1976.html","f3314e2a40d495211239c0dd4ea004e2"],["/post/8e4fa41e.html","3ac290030b3c3a14dc45151f06520136"],["/post/8f488ef0.html","85d7123182a7f8ecf181cfd1c74fc567"],["/post/8ff08e27.html","7fb5fcbab96d0941c98db5e54b0fa6ff"],["/post/9055d217.html","436a1cfdc30adda6ff859c3ebd58bd6a"],["/post/91ad9ce3.html","abce6952ff32f4e535cebdb4a0dcb277"],["/post/96131cab.html","bff073173dec06341d93edde7d33a094"],["/post/96b5906.html","4b419607a5f264d24ce1d7723d5716fb"],["/post/970fcca5.html","1035d1b375db178836059bfbcb46da89"],["/post/9a246216.html","e501b561972b9b18e7a4f0660676dd20"],["/post/a10c77a7.html","0f09db79bb36f46a53d03bb35fa25394"],["/post/a708a60d.html","b263f5840a43fa287cb3fd09745e72ae"],["/post/ad27c5a8.html","aa496d04273c92f720502581ade85eb8"],["/post/b6c47025.html","66cff3cf7add5466fa382364fc1666a9"],["/post/bd69ba8b.html","1d9ed10bb06917c60c1a7ac83d0e3642"],["/post/bf7f3b65.html","d4a92e93317e94040804dfe78acde66c"],["/post/c3176455.html","0a314387ab5ed0de9e4bc66c5c632a0f"],["/post/cb80ff62.html","2152e6935f35da6d2bde54103816068c"],["/post/ce0e685a.html","05abd1353fa2aac0271a636f79f852da"],["/post/ceb39ac4.html","25b4f07ca991559e4ebfa107f4443912"],["/post/cf413e35.html","aaff397214da89138aea62ed1e829c0d"],["/post/d036071c.html","dc72c9deaad260f900691664a0ea4fcb"],["/post/d39191a5.html","e7259bb40317f6b320692e2c1fdbcab1"],["/post/de3bac1b.html","cb348718764a23940b77bed379967ba1"],["/post/df879792.html","8cce266b587d34bc94fc6526a33e08f8"],["/post/e008fc33.html","c2cb675d866b7212adbddc7ab8afa5cf"],["/post/e19da94a.html","ef4c7c05ba418335c6f011ddaaf892a0"],["/post/eb04e0a.html","83cc333a4649b515fdba3e7bbc8cc63f"],["/post/ecd67acc.html","3f63f89c31a405b92e25e3faddb3f1ac"],["/post/ee040603.html","6793174a839270c8441a2054704d3808"],["/post/f1601c3e.html","cbf4cee4f495c9d14dead4dae8b83040"],["/post/f31a5a5b.html","0a0e87c844d2a545e5a3d7d61e984532"],["/post/f5c535ea.html","04889d9811308fe1b5e569d66028bf7b"],["/post/f7500981.html","5c53ee57155245db470859ec78019441"],["/post/f79807ee.html","09ba6cf3293925b552c6b43373ae097e"],["/post/f7de8aa8.html","49cbe0672ea63d920b94af756fe8fae3"],["/post/f8239d66.html","cfff559dc20304113991543c22a44445"],["/post/f9f5e0c2.html","77f68e6c618b74c12fd80ce1d6e0d941"],["/post/fb77661f.html","20386033ec2a74445254711edd963399"],["/post/fe1f88a1.html","46dd41474fad75c72dd3a69ae8ad30c8"],["/post/fe57b0e4.html","8a4899072505ee9e77844561ae4c041c"],["/post/fe816c3c.html","7f014907c02bd0022128dc5828681176"],["/sw-register.js","db795c0d70951e193de2124e359c3076"],["/tags/Butterfly/index.html","9829ce874c92d7a98a0b19ada6b85843"],["/tags/Hexo/index.html","3b8c3a4b6ddd93f4ff605b056e64417d"],["/tags/JVM/index.html","a58e59233debcb10d8edbc5920bc8098"],["/tags/Linux/index.html","9e5d2bab00a8e84a7705e443270366de"],["/tags/SSH/index.html","4afc0a9ed7e2dd096416b61dd45d8864"],["/tags/index.html","5eb54f81e870f0af86aab82ee662adae"],["/tags/spring/index.html","5842037a85ff9a4d88df06cbb29118b5"],["/tags/vue/index.html","87934eedf5286d339b3af75539c1d546"],["/tags/一问一答/index.html","676a9ff96415b387bdf8dc84bbeff946"],["/tags/个人见解/index.html","ad63c8979a985c193c04b942f03e6195"],["/tags/大数据/index.html","522406f643a0f5e4e348d892713702cd"],["/tags/大数据/page/2/index.html","1bfca3df2e139409804a4e9d8b50fa57"],["/tags/大数据/page/3/index.html","dbdea9a181778259b4e39515725738d6"],["/tags/学习笔记/index.html","55a407f3f94a6dade665053104622a47"],["/tags/安装教程/index.html","cc57332367e6e1745474b2bff28636af"],["/tags/实战/index.html","a02c573bbfcfcc9ab7604db72eff0ac5"],["/tags/并发编程/index.html","45bfcbf5313935bf2b93c14381b6bbcd"],["/tags/数据库设计/index.html","5092afbd5687d864d364d691a9466cb5"],["/tags/数据结构/index.html","cd4b11aa4665008222a605ddc5b2e874"],["/tags/案例/index.html","e0cb7321952b80f834b924f6c0b3d0dc"],["/tags/注解/index.html","245b74b00a005c50aa61442d75731d62"],["/tags/源码分析/index.html","514f3398fba435b377d1d90e2379af37"],["/tags/程序员/index.html","6e231de3d319f47e6ba13f98ee5dbedd"],["/tags/笔记/index.html","f3fb28d4c378a96007a50a897af1357b"],["/tags/算法/index.html","02298ea059ffc31235d47dc323edef65"],["/tags/设计模式/index.html","7a7e31f7b5de8f8a0f990f0bffac2b69"],["/tags/设计模式/page/2/index.html","cc441112308e810fc2f0188d825be699"],["/tags/设计模式/page/3/index.html","4f7fd5f109141dd4f366baad0a94145b"],["/tags/软技能/index.html","1af13bbe8e25060ea112f907fbe74e99"],["/tags/软考/index.html","2ceea3dc4468fa4884517ce33d9385e5"],["/talk/index.html","25382c89da26b204bfcf6902f8b606a5"]];
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
