/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","9f3f2bb98eed032baa1fbbf840ecac31"],["/about/离职申请书.html","b4a67ed77dbf3db52f5bba859cf65d6c"],["/archives/2020/07/index.html","3ee7b471ed5d3fe82c54dc2559622f65"],["/archives/2020/08/index.html","1b134952b903ad56742594203ca8fc4e"],["/archives/2020/08/page/2/index.html","ba2141af3b792f9faba4f582fd70c557"],["/archives/2020/08/page/3/index.html","e60be4efacd5befbbe7c726132da69e2"],["/archives/2020/09/index.html","219f6a2f3a48c1ef05ba083eb3e6165b"],["/archives/2020/index.html","083a1a3ba14c7d404ad284a01889f3e2"],["/archives/2020/page/2/index.html","fa49f5b19e5703d226af185792b0ce1a"],["/archives/2020/page/3/index.html","682b531c665785032b059badd240c284"],["/archives/2020/page/4/index.html","3aca04f431aae4d535291839d74cd4ef"],["/archives/2021/03/index.html","85446d2a5d668d42a2e33181b4a37b74"],["/archives/2021/04/index.html","4fd1b660994e4f0c02667fc968193eb7"],["/archives/2021/05/index.html","f4292a330ff47af265d29ec397d69ebc"],["/archives/2021/06/index.html","e990440908c29c42772be74d58e411fc"],["/archives/2021/07/index.html","3b45f106698d26fdd35efbd3760286a2"],["/archives/2021/07/page/2/index.html","7eb3bd276a4578b6865f137df81572ab"],["/archives/2021/07/page/3/index.html","fc04c966faf2c3bde0b20ef4beff9934"],["/archives/2021/08/index.html","7b6feb9294b908aacfc3dadd72ee92ca"],["/archives/2021/09/index.html","e3e4f6f31cee52876aaedb857e44d14e"],["/archives/2021/11/index.html","0bf05b22df63405cd7ee977436703b63"],["/archives/2021/12/index.html","cd6df755cc1a2d51bd9ebd544a7ce132"],["/archives/2021/index.html","b866299058a6a6f52ad3fe68897d5def"],["/archives/2021/page/2/index.html","f3a75faddf825f845db6623b1cbde17b"],["/archives/2021/page/3/index.html","f574a6d8d7097324b707e7b23c184fb2"],["/archives/2021/page/4/index.html","1a3e3f42dc9118b83731ce436ed8bbf6"],["/archives/2021/page/5/index.html","c67200cd604ae23aa663c6cb49377669"],["/archives/2022/01/index.html","9fde029056f12e7a623faa2f7d0bacaa"],["/archives/2022/03/index.html","676761492713b7a5f27e4d3192e218af"],["/archives/2022/08/index.html","58a000de1a5270783fa403ea618d75f6"],["/archives/2022/11/index.html","6518a1cf5526df9dee88cea6f5f8113a"],["/archives/2022/index.html","b63eb17cdcd3bfa58336d00607298da9"],["/archives/2023/02/index.html","fc30ca1498fb49c8258523813f4e90f3"],["/archives/2023/index.html","b439bba7550344b38cc69da9e4cf57f7"],["/archives/index.html","f3efb97feee705a0198212fbf05c9f8b"],["/archives/page/2/index.html","13fb8bebeb26a4919e026755732fa3d1"],["/archives/page/3/index.html","3219743a10a7b0bc2f57c16b2d25020c"],["/archives/page/4/index.html","069f5f98777eb0b98d3043e40eb57feb"],["/archives/page/5/index.html","e334c7f97dd45c2a5195a316cf6fbfee"],["/archives/page/6/index.html","382e4fe6ed8418e549abeb67fa78d39c"],["/archives/page/7/index.html","4d98901cd0430ba57f14ef14ef7f3696"],["/archives/page/8/index.html","0184ba6450762303a1959f89c3832c31"],["/archives/page/9/index.html","49ac6014f13d90fd4606350382b90824"],["/bb/index.html","43be73356a648afd5e515f2d63081d4c"],["/board/index.html","cce3c19118036f4033552b24d5d7efb1"],["/categories/Hexo/index.html","86f98b8c7145a3876361c3e6ec4ecd91"],["/categories/IT碎片/index.html","6b720c0f7be7c1e9a54ffe2a230d7b9f"],["/categories/index.html","bb55f04d50ae3c31f20b3b6fed77c494"],["/categories/前端/index.html","7e7f3d27dde6766876d1aac5706894f7"],["/categories/大数据/index.html","891cc26a187233ae6060053df8749d93"],["/categories/大数据/page/2/index.html","f0316921a0c47fa8f3cb5fce6b6876cb"],["/categories/学习笔记/index.html","bad457561136f945ed917b2d5151f108"],["/categories/工作实战/index.html","db4f7d0498f3427662a3d310ddd826db"],["/categories/开发手册/index.html","4f536083723f41bac82b23ca45ca92a5"],["/categories/数据结构/index.html","effdedb79e773959d417b666c7e8e493"],["/categories/案例/index.html","61bb5a3a59cf8b75db048a9557df91d2"],["/categories/源码分析/index.html","c5fc1713f80644bf452d4b952bbca111"],["/categories/设计模式/index.html","fb248d5d9fb7a31af3fbe4efdec9bf64"],["/categories/设计模式/page/2/index.html","db1f2e34c1125da185ec26fb1b1c6051"],["/categories/设计模式/page/3/index.html","1258511db58855d6f1c8010a5ca689e6"],["/categories/面试/index.html","86c1589cdbf44dc2979847486350c07f"],["/categories/项目/index.html","e155db2ee72f1e6ee20f186436263f60"],["/categories/高级/index.html","2063a2247538ef12042193f2f7f49b81"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","f2174e9a52e3869a98b5a1b3d5f34831"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","acfd91535da843a611fb4430646c61d2"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","ad121dfa89cc41ef58e0bcfbad56e01b"],["/page/10/index.html","96166a63ebcfb5f263fdc4c2f23c7fa1"],["/page/11/index.html","5a26b1ddad50de7afa91bc8a374746e6"],["/page/2/index.html","2903b1dbc02c096b0aa0036b908c5f37"],["/page/3/index.html","861a815578b50d39eb6170fbf362f748"],["/page/4/index.html","8fa596ac9bad3d7bfd5c126d924b9f66"],["/page/5/index.html","15db9b6652ff2deed4d1c4a43c7e25a2"],["/page/6/index.html","874b52a4ac92be26d831ffa12568dea8"],["/page/7/index.html","74b0af0be5119db80748d4248aaf9be1"],["/page/8/index.html","edd6e87843e94568ebf4a5b91698820c"],["/page/9/index.html","9aad00f411e0b80a696ff8b41588d32e"],["/post/121bde1d.html","31be0c078a2d190202cdfa23e098d7ec"],["/post/153083dc.html","024fc5776b9155f496c20bbc2487ba6d"],["/post/164eee11.html","0476eec6f86e2d127fe85c130ce2dd23"],["/post/1a7b7abf.html","e7aab1dec47dc76e4f9a602bd4e08e7c"],["/post/1baa3967.html","bfc34e8a25f43bc72c2f3d415d0a1f63"],["/post/1f4ac2fb.html","6eb14539d9be1c11aa9a7404d0bb68f1"],["/post/22580020.html","cdd699deeb58d6144042090b6c61a360"],["/post/286296.html","9e842692768e105e5231116857990e69"],["/post/2cd418c2.html","d84b78c2952f990082905762ff014a13"],["/post/30cf0cd2.html","6fe69b6c4df1471967798a3edef890a7"],["/post/317f8360.html","51de6a6f760ebe9d11e5d861d1f2d11c"],["/post/33cb1151.html","9b0955462f00279fc5149adeff6c400c"],["/post/34e57ffd.html","ffd12b96bcbb07606040886f7e26a8fd"],["/post/3d20c1d7.html","482d618372ae870599eec5d6bf77ff08"],["/post/3d24dcf9.html","ec4adbcfb21408c5a9d0a42ffa71ec8b"],["/post/3f6c447b.html","db07e78109664112a43e1779eecc19c8"],["/post/490cdff9.html","5dc915f8889f0adf197326ee2bff20f6"],["/post/4a1111be.html","b36aaf2e408a872716da5bc920a65b78"],["/post/4fa8e0c4.html","21d4de3c603dc1b2b6f8a3f7537e1f24"],["/post/524e74d7.html","7544033d15b543a67a45a67c2a7d0620"],["/post/539343bf.html","0dd3e2804525d23cfc41c7236e3a1a3b"],["/post/54788f73.html","46a19c02f9cebfee0e5e550d6ca25d44"],["/post/563268dc.html","3b03eeca35cb6176fbe53d9ad6fdf3a0"],["/post/5ac88c70.html","88b1f78dda4b4736d8dff4b84f9655c5"],["/post/5bf55f4.html","073eeb0a65235dec8a4c72d1c66f22d8"],["/post/5e87465f.html","97df85bb25af065d5d99e476be3c73c6"],["/post/6016428b.html","ffdb283ee149cf7445986373832c123c"],["/post/6208627e.html","1f404e4f6beca277f4b4ca9fee4c700f"],["/post/64b51ed9.html","132ab3bf687445e3b9491ceeceeb17ab"],["/post/659da5b.html","562d747e18be93cb7a136c62dd0841ef"],["/post/6c429b75.html","e112a300a4fe6dee4ba1fac2def09474"],["/post/721d4875.html","99b8f9e54ea9ee75cb77554849e6c87b"],["/post/72e3b671.html","ee8989ff481b66053d1c0aafcfff1ee3"],["/post/730d8d6c.html","7760eba4c739e09a3c3236deb9b9c900"],["/post/74fc969.html","4fe684a9e20153e5d16d3ae761026d17"],["/post/78134e07.html","8287a67f94ba7d2bf93cde78f94b40f3"],["/post/78c07335.html","32c4ea1cef913dafcc34d154da9db249"],["/post/7901ad89.html","a18aeea6f3b9bf2661e31cea38975fac"],["/post/7b216a3b.html","aa1be0f5250ed7b58cb2d0bbeed6826b"],["/post/7b510e10.html","f54b338ddd5ca92e003bf504be5a5eee"],["/post/7db2942d.html","11e2a60d389aefe02f3bf504b48bb031"],["/post/7e6c6990.html","bda1d2c99dea930d3f4b4fb57afc60df"],["/post/7fa79d96.html","abf7bf96aa8a0153564c26449968b0dd"],["/post/855673ad.html","632314e2119a72e42df279fa1027d693"],["/post/892a2328.html","9965e2634545c4e145be5e7b218c6b17"],["/post/8acb1976.html","0974b73765e294f20a332ca97432def6"],["/post/8e4fa41e.html","bbbb137acace7a93b1fd980bf0dbf823"],["/post/8f488ef0.html","4d209c83d7c364805d766cfd396b6e6a"],["/post/8ff08e27.html","e0489c0fd8871d59611facd4a1b6f99f"],["/post/9055d217.html","b0b2de421e77b3564460428d4ab7e751"],["/post/91ad9ce3.html","a2428b2655069e57cd9244905b31bb74"],["/post/96131cab.html","6cdb33de93d39ce4d319b6b6a9ea397c"],["/post/96b5906.html","60082adc6379a39667b0af6917dcbd42"],["/post/970fcca5.html","91118ff78d498cb35b687cc0ec7de7e0"],["/post/9a246216.html","b4f1044d50e07ee921b935a4175461e3"],["/post/a10c77a7.html","25640e7af872165878e7df95b46646c2"],["/post/a708a60d.html","9f0d51ffb585433243fa889eb7f6932f"],["/post/ad27c5a8.html","ea74d6e75d1492268b5cf53c043751b9"],["/post/b6c47025.html","222f866144f6763fcc6f438b6da8da04"],["/post/bd69ba8b.html","826e0980a5ea8533a1718226c1e9a5f5"],["/post/bf7f3b65.html","fec6c77eb8fb02d00530423de3a716e0"],["/post/c3176455.html","1c9fa91248fb8f46732802e4a05c3fde"],["/post/cb80ff62.html","882a3ad61d77a515c755e76e2d229bd5"],["/post/ce0e685a.html","67240c0d7369ce081e0d7534cde30d79"],["/post/ceb39ac4.html","fb17b9971465bd616511c4ae88833c51"],["/post/cf413e35.html","318a12398e8c6ac1bd035143d8f2bf04"],["/post/d036071c.html","4e5b59a770550abc1b8238762017f4c7"],["/post/de3bac1b.html","f8fcb01925bbf0f7d619b3ef39a3ebc7"],["/post/df879792.html","7c488f9ff2759f026465a0909ab09639"],["/post/e008fc33.html","5cc4a3ba5499c90f736c1ab312047cdd"],["/post/e19da94a.html","392f8fc27f15277c188959b8283b73c3"],["/post/eb04e0a.html","65a6496899a933d5b7b6a3d8cd2d9a1c"],["/post/ecd67acc.html","e57b64da4ba7974622269b7e6794e51b"],["/post/ee040603.html","876097acb23e4719379ba7420bd9afd5"],["/post/f1601c3e.html","dc6857357ede0cc9af7350475268de86"],["/post/f31a5a5b.html","11c40edcc8cc22b2ebf4f585934d1105"],["/post/f5c535ea.html","e86b561751f1d4a9f1137244348413b4"],["/post/f7500981.html","dbdae79108759ea3401868aa5babf435"],["/post/f79807ee.html","c947182cb79fc1b9ff9e3a0be28b62fe"],["/post/f7de8aa8.html","d3865daf30c09b7496bd3cf71237bc1b"],["/post/f8239d66.html","08a375d60e80856aae3ddd26e35c4b1b"],["/post/f9f5e0c2.html","dfb607770fceb328f3a8e5ba0af98814"],["/post/fa143992.html","11b7a8af23c175232fd0f5aa9ce35fd7"],["/post/fb77661f.html","e1cdea739a262881069cb0b8a2da3171"],["/post/fe1f88a1.html","d2ba1fe6adaea6e74cfeddb9fb1c457e"],["/post/fe57b0e4.html","34f083de5708d9fe6b1d3ef8de67d12d"],["/post/fe816c3c.html","7e820d5f6874b3291292a157a76e0cc7"],["/sw-register.js","dc934b15fba1eeea143939be4c9773a7"],["/tags/Butterfly/index.html","28b095a8bd603c49d50e218041e5ba34"],["/tags/Hexo/index.html","213045f689b35da8a832540eb2f55a79"],["/tags/JVM/index.html","bcd0051aac4a795879ac3498d65122e1"],["/tags/Linux/index.html","fd4a98da6bf713e6bd7486ddd1951704"],["/tags/SSH/index.html","a2b303b102ed8e0c765ad3326a580dbf"],["/tags/index.html","3a9ecca6b02e2f13593c50846a7ba148"],["/tags/spring/index.html","8551303835dcfd5a2c905d3fac15c457"],["/tags/vue/index.html","4a9d5bac46a1b9910508f181c7a876e9"],["/tags/一问一答/index.html","c90736d31b97c6f5338b6edec4e2981c"],["/tags/个人见解/index.html","578a20dc583ffae5a3dd7cd0741dd23c"],["/tags/大数据/index.html","ff954bc4a107a784b414059c520cccf7"],["/tags/大数据/page/2/index.html","8fb2d2c120fa66b1f31e4b286248d892"],["/tags/大数据/page/3/index.html","8e2514d27eb1f8b9b916d3e8833ffd5c"],["/tags/学习笔记/index.html","ceefff775efd2e5a76b06b907455302f"],["/tags/安装教程/index.html","e224690bfeed8000774798929f04f9d6"],["/tags/实战/index.html","010b83c8a6c6964fe233069eab116871"],["/tags/并发编程/index.html","cbc8edded8345ae7a44f1bb84c90d7fd"],["/tags/数据库设计/index.html","fdf53e059b72922dd2435eef6994ef18"],["/tags/数据结构/index.html","bf3bb8ab1c8390b491b1eca95f77f72a"],["/tags/案例/index.html","a4d079e001a2e19f28bd51f8c3a3c8fd"],["/tags/注解/index.html","0f356ce6b4e95b26a068a8e5a14608ff"],["/tags/源码分析/index.html","3ac54aaa95154617ffb6b8d65e156963"],["/tags/程序员/index.html","c289ac92eea183ccf58358e2e446c90e"],["/tags/笔记/index.html","e76726a6ffa4f0f1e2406069e9942c6a"],["/tags/算法/index.html","2104aa23857e149bf7fa42db129a4a24"],["/tags/设计模式/index.html","cf555d6aefb4810a23e541a72b1456dc"],["/tags/设计模式/page/2/index.html","64aba6d73a72e6269148ead26d6acafe"],["/tags/设计模式/page/3/index.html","9e9b9df26ef9ef7e75b467dedf1a400d"],["/tags/软技能/index.html","46a92a4c16613ab74b2ee782787bba52"],["/tags/软考/index.html","6a2f09b79af449af09a6f72e6d791723"],["/talk/index.html","2256f6ec013b4d5f3c10bb5bc3452d55"]];
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
