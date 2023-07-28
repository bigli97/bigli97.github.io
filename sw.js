/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","dcee0be492564650a598490d47f1d840"],["/about/离职申请书.html","11dedea6d0ad780d185cf5002e1b5786"],["/archives/2020/07/index.html","535d603ce80a3d17b9df0f506ee21a7a"],["/archives/2020/08/index.html","e1919487bbb417f6cc792cc9f7caaee1"],["/archives/2020/08/page/2/index.html","33664954aacb64d1673b6fbf55b92396"],["/archives/2020/08/page/3/index.html","1cf24b4eeab5dd4d0058985447ff3a06"],["/archives/2020/09/index.html","6519c4a7254ea4a23cbb2f8141c141e2"],["/archives/2020/index.html","2456688781ec56f0b1d545af479bd066"],["/archives/2020/page/2/index.html","969a9d6422ddc374e0e56d8b18bdeb10"],["/archives/2020/page/3/index.html","dad550bfd8c8c1b239ae2a414a903b45"],["/archives/2020/page/4/index.html","fb534a40511a626b98566aecb0c3a111"],["/archives/2021/03/index.html","e73b866dd0dc25bcef7da13f847b5172"],["/archives/2021/04/index.html","f739ea6daf142c0c125a10ba88765730"],["/archives/2021/05/index.html","7148d078615d5aa6f6781cba89a6be03"],["/archives/2021/06/index.html","ba601f307dcf5424b298d912555932d2"],["/archives/2021/07/index.html","04526cc13483854a06e4432f8fd3f788"],["/archives/2021/07/page/2/index.html","302d91c83a2fa36a7c2dbc62a690e0bf"],["/archives/2021/07/page/3/index.html","f43f815eccf4c957573e787b87b47e5e"],["/archives/2021/08/index.html","5067eba6cd3c5718af27f6393830b61a"],["/archives/2021/09/index.html","2e39d8591b88b10137c019ecfa3e7dc2"],["/archives/2021/11/index.html","2c5814a150bb4191961c822355b16a92"],["/archives/2021/12/index.html","91a75b24f344bee14e6843bc7ca22299"],["/archives/2021/index.html","13ba810bc7d94fb89f851803863299df"],["/archives/2021/page/2/index.html","a7c12ae25071f5d2000efbd6ecd4c817"],["/archives/2021/page/3/index.html","7841841ca1eb8d2e63447fa304fe5890"],["/archives/2021/page/4/index.html","cd58a67b02063f45e8620c50330c88a2"],["/archives/2021/page/5/index.html","585a6f146dc4a21adff5d14f3f31500d"],["/archives/2022/01/index.html","d2c7d05d79228f5ae7582c71dff1ce0f"],["/archives/2022/03/index.html","1f83b1071618e24e091b4d6f02963d89"],["/archives/2022/08/index.html","50d9849228f030e3b5e3fd09cc1688c4"],["/archives/2022/11/index.html","c490ed141ba7215f92be9643c7424bb3"],["/archives/2022/index.html","a54ea067d1bbff02a85be758317b6e95"],["/archives/2023/02/index.html","2fa5c55251e3b008e255ba0aaa7b1529"],["/archives/2023/03/index.html","e12f16dda9a2abf68d981b80f2e203b1"],["/archives/2023/index.html","9bf9a0efefaf378e2f2cb7054306410e"],["/archives/index.html","41284e49ad43909c6331596cbd33befb"],["/archives/page/2/index.html","73fd9fdd3faec46fe21b6deedaf44fdf"],["/archives/page/3/index.html","9b7cfdb65e1f59f8a9348260b749a80d"],["/archives/page/4/index.html","8223e67c9a5f7b9996f8bf4dff60f78a"],["/archives/page/5/index.html","65d2b2963d3b32c00e112738259866ee"],["/archives/page/6/index.html","bfde1044c2f098da3d02a85310eff475"],["/archives/page/7/index.html","9e6546787df842e2877a99a9b9b56ef9"],["/archives/page/8/index.html","00f77a2c9cfe380589fc24f36b19a6f8"],["/archives/page/9/index.html","9030718a4f8db533982cba28736ca9c3"],["/bb/index.html","3bc363fce667b83811fab0c297c1332b"],["/board/index.html","2a67daf79cbe33d814e943ac61c4ce8c"],["/categories/Hexo/index.html","efbf4bdc2a834708daf8418900fa0260"],["/categories/IT碎片/index.html","f7fdb17b4e46823e888e9c46554ed727"],["/categories/index.html","41ed064281d31ff3a33f88e2cfeb09ed"],["/categories/前端/index.html","3b5c3938a0707f5351e0083e8e71881e"],["/categories/大数据/index.html","2a6571667fb03c4252f011d4d4b0ec7c"],["/categories/大数据/page/2/index.html","b27ed1bb3fd8bc7f2457c7cdc9d1964e"],["/categories/学习笔记/index.html","a4d960e61d4f4ffabc41fda09a4f2b58"],["/categories/工作实战/index.html","8e196efcea3c363f4cd0a609b4ea352f"],["/categories/开发手册/index.html","3d4cc95df6d31ccef538b1353aac0698"],["/categories/数据结构/index.html","6c28bb759016b02ed2ac778051e4be1a"],["/categories/案例/index.html","3a429ccba186cb8fa45dcdeaf3709260"],["/categories/源码分析/index.html","69d36925d276704a2658e544e16d3a4b"],["/categories/设计模式/index.html","6365817c716da15ab843121941c9b93e"],["/categories/设计模式/page/2/index.html","3057fe0c90c808ae5fbd61cf80c2e94e"],["/categories/设计模式/page/3/index.html","0f8f2be0d9046c283a387a6cdff6f915"],["/categories/面试/index.html","3fb0546902160f114500878d93175491"],["/categories/项目/index.html","820faf7bf16634f9e97132d1af6ff411"],["/categories/高级/index.html","80e83c6e3937ae75b5e8613fc3fd7d89"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","22fda2d4aaf75a4c69b0270684f09663"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","d2f8885f016b758744b02108c67e039b"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","cbaac5dc466c15a0590a0dca880a2936"],["/page/10/index.html","276605692a8c1a5376258424e7336d40"],["/page/11/index.html","0de5e2f3c5151527a15e4713f8d4d660"],["/page/2/index.html","3cc5282959d3904406b214a7e0f89267"],["/page/3/index.html","2a58c1c89b70349c13efc24d9a9542cd"],["/page/4/index.html","c403ef2788071888b147ee9ddb1a56ec"],["/page/5/index.html","6188f30a8b35aa458775f1e128ce66f1"],["/page/6/index.html","8fbdf67653c7fb9c4b3538973fdb430a"],["/page/7/index.html","59ce09601bad18c1e838a2db02928efd"],["/page/8/index.html","3ae26a856e2f2a8e7d72559c6854b02e"],["/page/9/index.html","e5e7e31f8c7410eeb5aa7cf7ec657fe7"],["/post/121bde1d.html","0af5366d75c5e300102757d080f55fda"],["/post/153083dc.html","03184bf926fa9082b1ec5543e2adec1d"],["/post/164eee11.html","876edcd41fcb693c09cfae127dfc4638"],["/post/1a7b7abf.html","13fcaef893fa4ffaf6ea8a72e23a39d7"],["/post/1baa3967.html","43a970874de0e7e49ba5bd5cf3587b06"],["/post/1f4ac2fb.html","05777523dd3dad3610ef097380082e7d"],["/post/22580020.html","b1d5e72062d0369c4947980d69a7fd61"],["/post/286296.html","502e777e7ed71972c4467b43fa6d8ec5"],["/post/2cd418c2.html","4465774aed9f7dfeefa9ad9d93f35dd5"],["/post/30cf0cd2.html","3d414a0429ea33b0c04a34ffc39c0809"],["/post/317f8360.html","e0158f2a7da249142361c4726f921387"],["/post/33cb1151.html","5ea8f2b06e7a51c171744bcaa359762e"],["/post/34e57ffd.html","540e9faa0523a98a60bc1cf172bc0d91"],["/post/3d20c1d7.html","acc27ab4443413d02455607aa956a15d"],["/post/3d24dcf9.html","93e01a4dabf87e8aac4a0998d911510c"],["/post/3f6c447b.html","4d66fbe37b8d3c6d9e670c866631fe02"],["/post/490cdff9.html","5a758c556da991addf11558e199629a9"],["/post/4a1111be.html","61b39bde5135c2ca0f1262724640a48e"],["/post/4fa8e0c4.html","4f3de5e817a9b634b35dd5ec01428127"],["/post/524e74d7.html","083aa43a1ad9abba21387802101ebaa7"],["/post/539343bf.html","227915cd24a49c406dfa85b28f47d006"],["/post/54788f73.html","7434c1b5231ae0cc7e90da82ba782ec2"],["/post/563268dc.html","6b160beda9e02be43fb6cb3602e0a65a"],["/post/5ac88c70.html","caa0d6672fb8f63bcbc5dac4a56dc5ee"],["/post/5bf55f4.html","4c4b2af3d1e54c572a084ab5b2c78ad0"],["/post/5e87465f.html","5071b5fd2120a814c9c5747cbc9ca101"],["/post/6016428b.html","8c69db04c64d926d90a4236e5770673e"],["/post/6208627e.html","0e39821cdfbef0908881ab0f0b57b724"],["/post/64b51ed9.html","26a38531ee39266156db2976f179be4f"],["/post/659da5b.html","c6003b41aa7692f6c313bfa401c26850"],["/post/6c429b75.html","8bd86ee6fc3423de779fd0e9f9c8e264"],["/post/721d4875.html","fb204504f60eb279b9df6ec2dd9439fe"],["/post/72e3b671.html","326dcee62b8f0b3c3b7454dc7c1c1217"],["/post/730d8d6c.html","b4c1aad36cc792be6b4d918c4bab6b99"],["/post/74fc969.html","6726f326ba59e91c80cf1c7d7c4097c7"],["/post/78134e07.html","8f61f973e34318fb097f4a7bcec43e80"],["/post/78c07335.html","48169c84ffd632650a706526666db8d5"],["/post/7901ad89.html","313b29488c927cf8caeb3f9b0fe247d7"],["/post/7a2a0c9f.html","7656d863c509ab3cf9c6a5d6d7125190"],["/post/7b216a3b.html","7b434bc64f28696e3d24ab905ad46403"],["/post/7b510e10.html","4d27df76d63978ed28ef0652becbc87d"],["/post/7db2942d.html","1709e432ce3d5b98ebe6954dfc87fbd1"],["/post/7e6c6990.html","91da17da69364a59a7e1d6bfb4b24915"],["/post/7fa79d96.html","4eb6a0675461e3c6626993246ea80d81"],["/post/855673ad.html","9ba5d1f2eca7dc33fa977bcc90eb2874"],["/post/892a2328.html","f3477d680874a0756a8ff106cdd48846"],["/post/8acb1976.html","6e2eede093b62af7dbb414be24bb47f0"],["/post/8e4fa41e.html","975329c135439783e272dccae6cf3449"],["/post/8f488ef0.html","d599eecf8a3ab8a0cb359c232c991f70"],["/post/8ff08e27.html","3b453e9d6f5ba17cba6e20fb64bfc6dc"],["/post/9055d217.html","93fe16b60a475ab513a5c2a6d31e2330"],["/post/91ad9ce3.html","8749322f036d13701422bd70c59edc93"],["/post/96131cab.html","5b9af1c5431d2eb55d3fcaf517e95174"],["/post/96b5906.html","c0f83684854b76d77587c76b805986eb"],["/post/970fcca5.html","ddc9b9b0d0f63e9dde1d715356cabc70"],["/post/9a246216.html","97a3bdc0cda3b15d7b325ab0ee6aefb6"],["/post/a10c77a7.html","e979b02152ff04ea5207cd0fb5c6a778"],["/post/a708a60d.html","bef6f333261459b1506a65bdb3132233"],["/post/ad27c5a8.html","fc5b61dd11bb8fdaa73e24ddc092683e"],["/post/b6c47025.html","947d83e81a024c844bef88a07aa45463"],["/post/bd69ba8b.html","d92940bd83c27bd97c17b93f976f32bd"],["/post/bf7f3b65.html","5bc2d87375acfe20029eb14260c5b1ee"],["/post/c3176455.html","5cd5e329dc0cc98cfe822daed5a50a9b"],["/post/cb80ff62.html","08c01b6b36c78f16341882e48b2cb8a7"],["/post/ce0e685a.html","fa2489940dfada4314961af5a9ab2846"],["/post/ceb39ac4.html","b682dd512f14cbf34f7f1121cc353bd5"],["/post/cf413e35.html","8f20513b101821c5b87fa1ce99852d61"],["/post/d036071c.html","61aa5f593703d330826ec67c264233b9"],["/post/d39191a5.html","1d24c9386d9b0a98f06526fb0546921f"],["/post/de3bac1b.html","09ab3a19e0a79a0292dec70433cfab34"],["/post/df879792.html","c2cbc7adeb68cadfda370026a8c7dbbd"],["/post/e008fc33.html","fa16d1d3a5894bc431e5adf6c3fd4774"],["/post/e19da94a.html","b04c3b2b1ef08ebe45287a8eb6e2032e"],["/post/eb04e0a.html","6c6cac0ddadbf0e9dfa4a4f817a75ddf"],["/post/ecd67acc.html","f982fa940f17ab648d3722c7633b31e4"],["/post/ee040603.html","6793174a839270c8441a2054704d3808"],["/post/f1601c3e.html","87836c95b4ff086458bbbced1d71663f"],["/post/f31a5a5b.html","0a0e87c844d2a545e5a3d7d61e984532"],["/post/f5c535ea.html","3e23c650698c00e12651850c1252b9f3"],["/post/f7500981.html","f3fbc84f62ee900643f37a6327b2aa6b"],["/post/f79807ee.html","80a0c5f66d8beca6d0b6a0c82edede30"],["/post/f7de8aa8.html","93e6dc5a24452651f1903503e616ffc2"],["/post/f8239d66.html","934048b5398afdb7011674e344fd21b7"],["/post/f9f5e0c2.html","9ed7d6c33966e250b7af57653cd770fa"],["/post/fb77661f.html","49f79a8c0d142278446dd1fb05bfdaf2"],["/post/fe1f88a1.html","48c3b51a2a22f68f4e9064c2e43b47b9"],["/post/fe57b0e4.html","0b7fc0e086713d1c8a8c3998bfe52486"],["/post/fe816c3c.html","b4c2cfb0ac177b56e4f7ff5d24a2cb95"],["/sw-register.js","e369e95f18e1f7f283a19f64a7a97c17"],["/tags/Butterfly/index.html","c2222bc327380c23e7c8fe5fb31a9404"],["/tags/Hexo/index.html","8145b5add98536a34c1caf184edf8d3e"],["/tags/JVM/index.html","4e3d402c57bb1770eb466e62de49c34f"],["/tags/Linux/index.html","301553d21d818ee2b2c8b206f1ca767d"],["/tags/SSH/index.html","4a4ab2a0f0e48ff4081cd513dc4066a9"],["/tags/index.html","654a4a7bca5f3f10053d8dcff2e3875b"],["/tags/spring/index.html","a7c87a453ba318623c757db8684c1edd"],["/tags/vue/index.html","c50189e3a4efa962fbc3767f11d5ca9f"],["/tags/一问一答/index.html","507bcfba5acb3d17df2a292f7d3646e3"],["/tags/个人见解/index.html","fb464f7c96b3751c72da2706a2ec78a7"],["/tags/大数据/index.html","4ab8ec51be5893a3c6aadfc7f82a40e5"],["/tags/大数据/page/2/index.html","6945f2be59a0c168e648911cea08e21d"],["/tags/大数据/page/3/index.html","5ff581d779cef75d74aad8c8b5d4a65d"],["/tags/学习笔记/index.html","20d0e60e981242906feef1e7da9ec4e9"],["/tags/安装教程/index.html","e6b0fa9e3512904e34df0a4e616e615d"],["/tags/实战/index.html","1cab60e52fc7ef3b3599efb6f99e35d1"],["/tags/并发编程/index.html","b6b7e8776f4b185b09da808c6905803d"],["/tags/数据库设计/index.html","2b94e7efaeeaf41af2eb516bb3d5ee07"],["/tags/数据结构/index.html","7de0c21c76364bc5cf08788ebb83bc09"],["/tags/案例/index.html","7021ea61ce3fe125b5d9eeb7e98b887d"],["/tags/注解/index.html","c3edf26d9a749094d80add0e36507635"],["/tags/源码分析/index.html","be75c928f7b167271a68db92cdaf6dc3"],["/tags/程序员/index.html","55ff6ae98a9f005af3b05591eed6cf85"],["/tags/笔记/index.html","e70e0d598c16ef4c1d32af20409be65c"],["/tags/算法/index.html","007852c1dcaa8d7cabc4e47f7d96a0d1"],["/tags/设计模式/index.html","978847378401f674b10ea3a0dd8f6f44"],["/tags/设计模式/page/2/index.html","63a01fe7a97e3aea3f16bb0851d5f1b6"],["/tags/设计模式/page/3/index.html","e4d27852bc540036296d9e5069dcf8da"],["/tags/软技能/index.html","c93a47a1f7cf0c11cd732708302ab7f8"],["/tags/软考/index.html","afd86768e3705881df8dfb1c890e824a"],["/talk/index.html","4451ac53748f93068033675225a35061"]];
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
