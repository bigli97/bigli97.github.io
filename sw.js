/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","9f3f2bb98eed032baa1fbbf840ecac31"],["/about/离职申请书.html","53c91422ff6a7702a12232465e705d84"],["/archives/2020/07/index.html","26f928205b3fd5c782991b7234313b85"],["/archives/2020/08/index.html","e514aba818ddccd256bdf5d11c7f65ab"],["/archives/2020/08/page/2/index.html","0f7eb72fa94591409a42800272c7b3c1"],["/archives/2020/08/page/3/index.html","fee3df77bf1d367f695781109454d287"],["/archives/2020/09/index.html","f4e57a181a70ee8eb4ff139af3c9c0b1"],["/archives/2020/index.html","1ca6aadcc8ca1f7896ef4d640c523021"],["/archives/2020/page/2/index.html","7ca7e474cc280edf6069021a4c1b82c5"],["/archives/2020/page/3/index.html","33d5c136dbe2f0129661cb088c57b5e0"],["/archives/2020/page/4/index.html","e7be6ab8e00c799009262a8b7236b91b"],["/archives/2021/03/index.html","0ee02abd9946eb403f9692428b74d8f5"],["/archives/2021/04/index.html","ac4306c082e1a635baf723f176233f98"],["/archives/2021/05/index.html","19994736bdf99d5867e144b96e42ce28"],["/archives/2021/06/index.html","435510c8489ee84b1f95b60fd10db134"],["/archives/2021/07/index.html","fe73c80c12f3f8f4763582435a97ee7a"],["/archives/2021/07/page/2/index.html","b3fcb69754f9ca457ac5d05ed8c32d8c"],["/archives/2021/07/page/3/index.html","e1c5c675d1ab9a0ea33d3318c24eddce"],["/archives/2021/08/index.html","12b3876e771edbee8b98bde0696738ae"],["/archives/2021/09/index.html","e2e1443aec3ca1bb6353bb8443c5e98b"],["/archives/2021/11/index.html","936b591b36365063e23db9600f5e73ea"],["/archives/2021/12/index.html","6fd43951181903d3c4565e1eeef79fc3"],["/archives/2021/index.html","25970c1b757f340823efa575484524f7"],["/archives/2021/page/2/index.html","641544a57243d8a5700128727e6be457"],["/archives/2021/page/3/index.html","8abb7091522f1bcfe86382ef8e2ba854"],["/archives/2021/page/4/index.html","440b6369bb9683ce6548fdb8b3d4d01f"],["/archives/2021/page/5/index.html","b3801908f21816a1d47c9bf290936247"],["/archives/2022/01/index.html","9d0db80dfcd3d7b2a364fc7be00084a0"],["/archives/2022/03/index.html","a9a3e76d43be2e30bc72c8ba6efe1b4d"],["/archives/2022/08/index.html","fbd44b37b1cde7bd8da8f94bca020901"],["/archives/2022/11/index.html","3a5bb3ede23a034077db8089bb5b3cd1"],["/archives/2022/index.html","bf2accde4b762accfdf18db6bf96ae5a"],["/archives/2023/02/index.html","3c436d8a5c4feb5834e119984a625962"],["/archives/2023/index.html","63b91045c307eae40b9cbc7bd711e688"],["/archives/index.html","9c7f4981616e0478c2de5cc96b7d0a99"],["/archives/page/2/index.html","24aaf453cffc99ef261adc641637b50f"],["/archives/page/3/index.html","87b796e366a21e5df8f944630a657d41"],["/archives/page/4/index.html","82e33661b15774cae8e6f5cd2d75e8cd"],["/archives/page/5/index.html","920d95daf8782ec599b489835361cf53"],["/archives/page/6/index.html","09a499f97a4f1e8867514187f6a22f66"],["/archives/page/7/index.html","1bca6ca596d75ca620bad9dcef0f4aca"],["/archives/page/8/index.html","6ec309fac5649b1dbaf6f58be5f80969"],["/archives/page/9/index.html","90c2ca62eca3952858590f3a032eef6f"],["/bb/index.html","07f69463f9817638e6bb942b661a777b"],["/board/index.html","70c459094ee3038b15e255ed956b2bc3"],["/categories/Hexo/index.html","da1f06bb7732c2fd4618667caf6f4180"],["/categories/IT碎片/index.html","832821082431b2d59cbc8bd9910cf536"],["/categories/index.html","bb55f04d50ae3c31f20b3b6fed77c494"],["/categories/前端/index.html","604ef4587f2f0cf841583cfd01cc1ed5"],["/categories/大数据/index.html","7e6592003618fa6fae40237c968ee163"],["/categories/大数据/page/2/index.html","5c7407dadbfe939e64bd3f81ea8f8cd5"],["/categories/学习笔记/index.html","a413636938202b3879762398e2072790"],["/categories/工作实战/index.html","d3305ced696c592e4e24830da3a3a6f2"],["/categories/开发手册/index.html","dc8a9b912e26b32a80eab31af7162ecd"],["/categories/数据结构/index.html","41a12d661d89f04375325aafc9380fa5"],["/categories/案例/index.html","3d34375fcb4baa9cd28af60730fb9b0b"],["/categories/源码分析/index.html","fc3cb99b7ba53e62ada06065d715e093"],["/categories/设计模式/index.html","8e92f53f780ba9720f2a935899dac1f7"],["/categories/设计模式/page/2/index.html","6e732ce2cc39ebebf5ee49c5a3734019"],["/categories/设计模式/page/3/index.html","a7b036ad1d11077cf41c42fc2b3711ce"],["/categories/面试/index.html","b7e15164dbde578d66d556b1bdc9af32"],["/categories/项目/index.html","9721c36800fa180b13e588f708622743"],["/categories/高级/index.html","bd2780afca199952bb175a131bf47394"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","b4f1bd60a110a08f8d38e79376650fe6"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","68ec3fce01b773ba2497e6c0c93144c7"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","1485650ac5162727b7240ff99a5e73c5"],["/page/10/index.html","5d891eb93be0265f10c74c76b6fa034a"],["/page/11/index.html","895d5a7c0fa4ec240f6f169c93dc0e79"],["/page/2/index.html","bc456311de8476fd89713f7fbb038999"],["/page/3/index.html","3c482ccd66fb70533a4acc42410f10a7"],["/page/4/index.html","ac2aa32ac3f73442c4cf36bb7db7825b"],["/page/5/index.html","0a2c4a37e6bff82b7eaa6750c08f4b23"],["/page/6/index.html","cb199d9ba7b6299f260d918cd47303b7"],["/page/7/index.html","c22fe8c7a12818dd626b2ab9e56d2d31"],["/page/8/index.html","0828d0643b326ec2716ff84f1db9f826"],["/page/9/index.html","f65358331a88d8aded11aa0d89f3fd3f"],["/post/121bde1d.html","e6c7c56758806bbe48ede5e7368554a7"],["/post/153083dc.html","352c8af6080b87e1f3a29235fdba2cac"],["/post/164eee11.html","dd0fcbbc2c931c1206443eb459972fd0"],["/post/1a7b7abf.html","f105a3bb0790b98a48a3f5eea51ec317"],["/post/1baa3967.html","1b75ba1288ea1f57bb82e4eb69346b76"],["/post/1f4ac2fb.html","0d74e5d75ac7c4a324f178a3f05e5a7c"],["/post/22580020.html","bf026e15d5ff4505d6f703c0c8caa631"],["/post/286296.html","9ddfdcaf037a1cc6cf1802d4d0cedf9e"],["/post/2cd418c2.html","d84b78c2952f990082905762ff014a13"],["/post/30cf0cd2.html","1f4e66239ff30b9658024a602f7fa7a0"],["/post/317f8360.html","fd2502c4b33f297daf23faef0202f963"],["/post/33cb1151.html","9f26e9ac369ed99f99c863c46bebee51"],["/post/34e57ffd.html","f37f3fae9b1d3c51f442f2a113879f04"],["/post/3d20c1d7.html","445c617a63ce342233c5e549b4e7860e"],["/post/3d24dcf9.html","ec4adbcfb21408c5a9d0a42ffa71ec8b"],["/post/3f6c447b.html","f637c32c0dace0a4250729c05704e8d7"],["/post/490cdff9.html","fb88437ccfba11726d806885a4cd3cca"],["/post/4a1111be.html","0034d3983c39e277f08a799c91679fac"],["/post/4fa8e0c4.html","21d4de3c603dc1b2b6f8a3f7537e1f24"],["/post/524e74d7.html","7544033d15b543a67a45a67c2a7d0620"],["/post/539343bf.html","0dd3e2804525d23cfc41c7236e3a1a3b"],["/post/54788f73.html","1df75fedfa8e9d034c29903f1918093f"],["/post/563268dc.html","b79fd3309038ff659d7277a1bfd9c11a"],["/post/5ac88c70.html","2a7be0ecd67f3120205aa924a915adbc"],["/post/5bf55f4.html","0bd18eb2b355a324320d4fc7657b4330"],["/post/5e87465f.html","10b0eaf2701bcc01aa35d0e5b26bb863"],["/post/6016428b.html","ffdb283ee149cf7445986373832c123c"],["/post/6208627e.html","ec2d1b5afe7b1e9c264ef51d4309b2e1"],["/post/64b51ed9.html","8c4932cdfc183e9ad1847e5d44bb7aea"],["/post/659da5b.html","1699db3f8357905991c3e74245659d7b"],["/post/6c429b75.html","c63e583776436c7737936911ccd707b4"],["/post/721d4875.html","44829590a5c7370cf13fa8a46bca42bd"],["/post/72e3b671.html","de675d7255278999df5c22d21c89c0a8"],["/post/730d8d6c.html","7760eba4c739e09a3c3236deb9b9c900"],["/post/74fc969.html","f87b9cf78b2da4ac746ac1793f293512"],["/post/78134e07.html","2c9b032a2702a2f92c550de887e62975"],["/post/78c07335.html","7c994f90455dcde5949fae579be2a352"],["/post/7901ad89.html","a18aeea6f3b9bf2661e31cea38975fac"],["/post/7b216a3b.html","84aeefd6c83343f3ace348f3532ef29a"],["/post/7b510e10.html","6c21636f766c7b54ab9503ce86ee93fe"],["/post/7db2942d.html","11e2a60d389aefe02f3bf504b48bb031"],["/post/7e6c6990.html","bda1d2c99dea930d3f4b4fb57afc60df"],["/post/7fa79d96.html","2c5f9b4b9ff01c0b0a9632632496f461"],["/post/855673ad.html","66fb93c41d860abb9d68793b5a388bcd"],["/post/892a2328.html","a9b0600012a47d33606a7ce347e7ba64"],["/post/8acb1976.html","57870dc359ecea430815e320512dbd62"],["/post/8e4fa41e.html","5db2928c31807dbd57b848423bada1bd"],["/post/8f488ef0.html","22289d7dd739bf6b189a552686ac80fc"],["/post/8ff08e27.html","9a490155377532925092d9a9b2bd3a77"],["/post/9055d217.html","b0b2de421e77b3564460428d4ab7e751"],["/post/91ad9ce3.html","0b23c8a318f8dc64b6be4c70745cb1be"],["/post/96131cab.html","51ee4c1a3a6104a1072b13f07d9f4fc1"],["/post/96b5906.html","60082adc6379a39667b0af6917dcbd42"],["/post/970fcca5.html","91118ff78d498cb35b687cc0ec7de7e0"],["/post/9a246216.html","e48962f5c45110cd19ae9be402929530"],["/post/a10c77a7.html","1d92d906da6655eef66b6a2696251639"],["/post/a708a60d.html","f934236673d3a3340826df8b78909d3c"],["/post/ad27c5a8.html","99049194b95c0f473c367acbb111bf37"],["/post/b6c47025.html","01e401c0bf9323a8ff9fbd7f5412b336"],["/post/bd69ba8b.html","826e0980a5ea8533a1718226c1e9a5f5"],["/post/bf7f3b65.html","29812bc41949c9f98b813a81ae834819"],["/post/c3176455.html","dd59ee200de92119437c111d73f9c339"],["/post/cb80ff62.html","1abf6289d93f22ada7b3109911a6e742"],["/post/ce0e685a.html","67240c0d7369ce081e0d7534cde30d79"],["/post/ceb39ac4.html","03486de3f49b51e4ee5bd8237b9f2e61"],["/post/cf413e35.html","db9dfd66cf78e811b2755fc3e69a1796"],["/post/d036071c.html","8ee14c2c043b37d1d240e87a4644e8f6"],["/post/de3bac1b.html","f8fcb01925bbf0f7d619b3ef39a3ebc7"],["/post/df879792.html","1da7f62956114e4467c0f6bc6e87054b"],["/post/e008fc33.html","5cc4a3ba5499c90f736c1ab312047cdd"],["/post/e19da94a.html","9ae4b0a6aabb2e8e8e59e49ad5eb7867"],["/post/eb04e0a.html","aeb4d48062b50d953c43b1282d88d720"],["/post/ecd67acc.html","a2c4044b84fba1abdb74e9e18aa4e5a4"],["/post/ee040603.html","34f1fbef201fb5b0e25dfec1b377ea72"],["/post/f1601c3e.html","29ac5f967b9051912d0b8fb41989302e"],["/post/f31a5a5b.html","720e0376f6ca68acdd3fc7305bcd9514"],["/post/f5c535ea.html","30cba2a6e67458d121429afe27dbe547"],["/post/f7500981.html","0150b225fb932b2ec5da4d0785becf7f"],["/post/f79807ee.html","4bab02b489b8ac56df2242e09cf2c177"],["/post/f7de8aa8.html","f45e6b2731445557e8aa4cb7645a5db1"],["/post/f8239d66.html","6ea976d57ace6b219ad985a6cb37f422"],["/post/f9f5e0c2.html","2b9611494fafd4d7e1fa8f1c63b24f60"],["/post/fa143992.html","4c58b77d0cd2b4cc4d78bf92759e6a44"],["/post/fb77661f.html","32bf32ca833aea24a99e1958cde17945"],["/post/fe1f88a1.html","a12448fb3d36fe9b712baae06a37101a"],["/post/fe57b0e4.html","a2ce0a6ba061c598c4f931b83493e7a4"],["/post/fe816c3c.html","bb09b3d271d9acefbc6b237d03a4580b"],["/sw-register.js","70c2210b6694067c8d0dcabe27b73bbd"],["/tags/Butterfly/index.html","8d6c61be7cb8da0e5fb9cdc431cf2894"],["/tags/Hexo/index.html","7697775b0e725df7d1e6e04eadd168b8"],["/tags/JVM/index.html","b3503558b1804402faca2fe2935f08f1"],["/tags/Linux/index.html","1252b9613e4a5bc4eb38d9e8c84ca6b8"],["/tags/SSH/index.html","7abe6a9a8524d5acc77f9d029e040ea8"],["/tags/index.html","df25492ec6b2b0021921b8588f4419ad"],["/tags/spring/index.html","19ad4e36b057870d4146eacad8bf4e30"],["/tags/vue/index.html","9eb59c742c09a967e9a04b0d41059d71"],["/tags/一问一答/index.html","40f06dad8885ba1cc36c6c8158d7152b"],["/tags/个人见解/index.html","47eb51c3bedac33b3463cea6c1fe49fb"],["/tags/大数据/index.html","29cf862d8ad0f1f325fc2ba604eadf07"],["/tags/大数据/page/2/index.html","c1f2942e415ed60aaf5fa6dbf508dfba"],["/tags/大数据/page/3/index.html","ae935922dad3270a224bf5449d4cea7c"],["/tags/学习笔记/index.html","6c41fd7c1068d3cea9c015f08f6c1d14"],["/tags/安装教程/index.html","a1ab57d00bc406d06241797628620045"],["/tags/实战/index.html","7f77b2f89437bd6f62b4643e31e24575"],["/tags/并发编程/index.html","d0d7941dd227c9001178dfcf62ae4bf8"],["/tags/数据库设计/index.html","882148c60dcd3e9745463522109c7193"],["/tags/数据结构/index.html","e0872cdde9e6593010ddb90903bac0f4"],["/tags/案例/index.html","28f74a84c1e57edd78280c4018bba77b"],["/tags/注解/index.html","f1b9979d72b76abbf23f6a89c734b7d6"],["/tags/源码分析/index.html","44ee8876114532cc19df584f0f4989a9"],["/tags/程序员/index.html","b2d6b6a2264bb250655e2d89d20076ce"],["/tags/笔记/index.html","8985e4b2b49b4e6641c3a2827c8e1182"],["/tags/算法/index.html","bd2105a119d4c216b4ca82269e6f919e"],["/tags/设计模式/index.html","94776acb5a20bd2333d1153011c9e104"],["/tags/设计模式/page/2/index.html","68a417f7ba00205faa9003745f600479"],["/tags/设计模式/page/3/index.html","ec8b8023c8c014e29e7e2a7e0e553b47"],["/tags/软技能/index.html","29dfdde7093158bac41db185ee9c0a4c"],["/tags/软考/index.html","7184fa26e1ffe7ba9dba40ea3e684f75"],["/talk/index.html","72469993506e22353e7cfdca08975dde"]];
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
