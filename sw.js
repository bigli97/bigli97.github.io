/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","cf0481066cf864bb59ef34dad1793430"],["/about/离职申请书.html","d9e872dc999044719fd37db6feafce7e"],["/archives/2020/07/index.html","24e4110b0dd5ac26bb50c17f8aa9eadf"],["/archives/2020/08/index.html","15f85db86b279f4ee86b78d7f4be6e61"],["/archives/2020/08/page/2/index.html","b11f9542b489c8fbbacc6b789e65ca8c"],["/archives/2020/08/page/3/index.html","c2f69461831bdd15888c8388ed782827"],["/archives/2020/09/index.html","66b561bb365a77c7b09a5f6ae0e400d1"],["/archives/2020/index.html","462d2aa46fa28103809fa292637490e6"],["/archives/2020/page/2/index.html","e6a1cc857823963bfd9100d4276f51dc"],["/archives/2020/page/3/index.html","54d21762a9227b145683e197c3e4d5ef"],["/archives/2020/page/4/index.html","12e10c4e6208e42954a6941766641c81"],["/archives/2021/03/index.html","afe8483e2538c8dcfddd255536f336f3"],["/archives/2021/04/index.html","0ad8e00c0072a59fe6b7b3047f6db3b3"],["/archives/2021/05/index.html","7b469d7988124badec663f500f30d7ed"],["/archives/2021/06/index.html","8c62a95b1b8c3452e865c52f21cde0b8"],["/archives/2021/07/index.html","052ff2e2910a6b5c4ed7639490563054"],["/archives/2021/07/page/2/index.html","e6f92e1e6507e85e3371bf8c8326ab0e"],["/archives/2021/07/page/3/index.html","4b8289e0cd4ad2187928303391564e8d"],["/archives/2021/08/index.html","6ea0a5e65e6bf288566c994872f53a6b"],["/archives/2021/09/index.html","af6925a8f6644b5bcf40fd1dffbf0708"],["/archives/2021/11/index.html","9a71cc8dc2fab109b856ca18979ecb96"],["/archives/2021/12/index.html","27dec9644234d7578ca4d872f1dbb978"],["/archives/2021/index.html","350b41e7d19e5241f37f701c5b29cdca"],["/archives/2021/page/2/index.html","82e6b786673e151c449e2bf7946c4bcc"],["/archives/2021/page/3/index.html","70b37a435729a95567725a78a8902fc4"],["/archives/2021/page/4/index.html","44ba8d1d13a9b398e5ca14017dd1b256"],["/archives/2021/page/5/index.html","53da474af31201fe55b5ea356e72f704"],["/archives/2022/01/index.html","1b3dfacca8d3d572c1c930e9becbc3f3"],["/archives/2022/03/index.html","beade0e4af9263deee5bdb3d528cb3de"],["/archives/2022/08/index.html","600cd78e8aeafbeffd79f8bb2d19e4bd"],["/archives/2022/11/index.html","c3116d3fb73b1e94c994a58cc8b7d6f0"],["/archives/2022/index.html","ad3468c021776aa086ffaec8724e4ba9"],["/archives/2023/02/index.html","52279264da446d371b8892df65ff2cc3"],["/archives/2023/index.html","5a0fbc16f297b2886ff5fb10b97f941a"],["/archives/index.html","1597c89d323669d4269b2ac6659745b3"],["/archives/page/2/index.html","68dcb17195b3492a8864831b9852ab38"],["/archives/page/3/index.html","8cd45066418b35953a1fb3a48cc432d1"],["/archives/page/4/index.html","a6b80aada21eeee31cc20a380e192f3b"],["/archives/page/5/index.html","7c431054376e48a2229de808ca71257b"],["/archives/page/6/index.html","a6cee065e031905aa2c3a4657dc6da66"],["/archives/page/7/index.html","799c9bca872ce0e5fd863a5251617782"],["/archives/page/8/index.html","4a708f12e98d4aa3a1687d3ad16bdc47"],["/archives/page/9/index.html","fbb12f60e4b250f09cb62a0722ef2c3e"],["/bb/index.html","5a2e6a5f2b690e4e896cae03d2aadfba"],["/board/index.html","24159f64295b3256b94785a32a69c4c7"],["/categories/Hexo/index.html","0afdecdf8ec2069f6b6c27d3414ef36a"],["/categories/IT碎片/index.html","7151baef1e8413cf45d9fc6f41051b1d"],["/categories/index.html","051272241815c773619934eae3b2f53e"],["/categories/前端/index.html","029bed25dd43d2b602d81c28998cd739"],["/categories/大数据/index.html","82a2bd5c5ab178a91507fdbdfb5aa07d"],["/categories/大数据/page/2/index.html","ca803f817689a6498ac23cc2242eca1d"],["/categories/学习笔记/index.html","3d2dbc010fa7c2c6f9b5b946c30950a2"],["/categories/工作实战/index.html","57140fcc7bd3e8511fcac8762058b3d2"],["/categories/开发手册/index.html","fb88d71685fb282a59daed9bb6443771"],["/categories/数据结构/index.html","c8f91c94a3641da07c073c6d37f8d824"],["/categories/案例/index.html","f0da71b76a6d934607f4f8afbb6df84c"],["/categories/源码分析/index.html","14f4be644c122bd1f498f74c508bb317"],["/categories/设计模式/index.html","64abf91d85fc058c1e8c6e778034b470"],["/categories/设计模式/page/2/index.html","90d1b410360db2c59c65f2d69c13ee2a"],["/categories/设计模式/page/3/index.html","109223719b6711fbd0052724623a50c3"],["/categories/面试/index.html","746a6f9b815106c79e3c767d0620c154"],["/categories/项目/index.html","6f57ce4e0e88d640df510d8b3d748e3f"],["/categories/高级/index.html","6f890ec65b80007ba457d0812b894862"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","592f570fcd0a8fcd151c77dfd0fcf1d3"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","397a2919a244baae94aa24e4f0a59c45"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","efd4613365c0f3b9c71533374b3bfc12"],["/page/10/index.html","77c545f56ae745e7efe62fa288597f10"],["/page/11/index.html","4e743d5d70bb0892b93a9385e8cfc656"],["/page/2/index.html","e31d8d01706746ac7737408de0348402"],["/page/3/index.html","3494b4a075798c3cc7754d1f43e1b15d"],["/page/4/index.html","3e2ff40e3e961aa58e7823cc1e7499e9"],["/page/5/index.html","abdcc2019c7fda2eb46d3d3113fd7754"],["/page/6/index.html","51bf560d95c0f6d4a428d6933b473783"],["/page/7/index.html","b6ddca562b85b4b476a90fd3ff46a8ec"],["/page/8/index.html","3875967e67b8b7a034423f997acefe5d"],["/page/9/index.html","1336d96ecdd8c5a62bace8b433e36b84"],["/post/121bde1d.html","f3ef28353bf309b031acc87ba16c4c0d"],["/post/153083dc.html","7716e335089006afae5eab902c95b15e"],["/post/164eee11.html","b81c375dee52fbaae56b13a5d6e1ecb1"],["/post/1a7b7abf.html","7bc9490e08542775edae6afdbda50ab9"],["/post/1baa3967.html","c2987edabb953b7561b07a30087dd781"],["/post/1f4ac2fb.html","7dc7983de129086b0bf7d6cf442666e7"],["/post/22580020.html","5fae9fc87c61f835cccf1e0da0e7d1bd"],["/post/286296.html","815b8bf1dcac482af52212cac8dfe6bb"],["/post/2cd418c2.html","ba94ee24795f90fa8f70108158634778"],["/post/30cf0cd2.html","3bd16bb17acf3311c8b16c5c48cb7d06"],["/post/317f8360.html","1996f67d1aa1bf31654ab06c9e58988c"],["/post/33cb1151.html","8347244621fb162e7ee7c88c64a56911"],["/post/34e57ffd.html","8c141de884335cb5649300296c4eef0e"],["/post/3d20c1d7.html","9df4530a1d5150f688e8dfd2ad6cf562"],["/post/3d24dcf9.html","55ffeb1e721f661f0e2d808587af8c6e"],["/post/3f6c447b.html","fea99d39d1b03d4b1d35cb26dcba1e9e"],["/post/490cdff9.html","9b751260a827231f546b3000c9bf8143"],["/post/4a1111be.html","1f13adaa09e38e0a47305ca958d563dc"],["/post/4fa8e0c4.html","51b594d9c23d2fa7df1e4d01c926d3d8"],["/post/524e74d7.html","874fa5b8d9e7ab2216eb8dff85a3284c"],["/post/539343bf.html","2dfd166a0671cd11b26701ffa980960c"],["/post/54788f73.html","564d60f08b9aa55ed8e14aedef8c02ef"],["/post/563268dc.html","4d46fff7175f4a83672f00d9044ec2e4"],["/post/5ac88c70.html","ac876c226831edbe1cc7b8bac014c812"],["/post/5bf55f4.html","8a1cedd4334ae7dbc40d8dc966854839"],["/post/5e87465f.html","5361634dc7268cd97d0f588bd5a7632a"],["/post/6016428b.html","97420e96b4858f129bb5383f2c60ea6a"],["/post/6208627e.html","a2e6932384aab13cd7ae2c4e95b5ee30"],["/post/64b51ed9.html","5909fa9b5976cf9e12b5b94d97097e37"],["/post/659da5b.html","7347c3ec47cf8ec026ca99ccbed1ccd7"],["/post/6c429b75.html","d049ff677afb68ea05cc75960a6181de"],["/post/721d4875.html","3b74f5fff5480eff2963f3bdf05464d4"],["/post/72e3b671.html","2a3c0f47b5d25cc658b1cfb07a74f1dc"],["/post/730d8d6c.html","b5f3c8434c85e7865b7c72c6a9ae5ca1"],["/post/74fc969.html","89bb32420ccd44bf08e1434c9c35b50d"],["/post/78134e07.html","5bdb48582d1579aedffec86829b4e7da"],["/post/78c07335.html","ed9c646a54239aebd46b5f2d285f4f46"],["/post/7901ad89.html","6092f9fa4a8bfb4d8a5f2a8bc031b092"],["/post/7b216a3b.html","714ce974adc6f002b42929cc082b72b4"],["/post/7b510e10.html","587249998d56c5c433d2110763d29a72"],["/post/7db2942d.html","11dba5a0cea207c6932223cf884c95c2"],["/post/7e6c6990.html","c16402168f337a57ed19ab297159384e"],["/post/7fa79d96.html","258dbaac0cb13bb40ea12092009410e9"],["/post/855673ad.html","7cd5a0da2d21aeabde9c6adaab43f292"],["/post/892a2328.html","e66442b12e3762d15acfad7b94324389"],["/post/8acb1976.html","ab20ac663af20a11d794acf90187bb36"],["/post/8e4fa41e.html","10f6dd48b83b6240135cdbed9e117ed2"],["/post/8f488ef0.html","53f81d358fe93225db809dafcc42a223"],["/post/8ff08e27.html","f5fe002135a13ae88ade10cb437df5e9"],["/post/9055d217.html","73c138376c58ab252823e31fec5992d8"],["/post/91ad9ce3.html","c086d427b99359f4bfbc88cd5dc67327"],["/post/96131cab.html","8727ad34574033a22e48b84b499eab92"],["/post/96b5906.html","ba13a1e6344c7e98f659916f8b2f578e"],["/post/970fcca5.html","ef19573be5edc134dd04ee1c1777e679"],["/post/9a246216.html","bd14d841326182499c11b55d136fcfa4"],["/post/a10c77a7.html","3f12357ac425dbf30be07603a37c01aa"],["/post/a708a60d.html","9449040f893f41114b358726ce80fb76"],["/post/ad27c5a8.html","d4ad67f2d9f1b6551303b8c641970c53"],["/post/b6c47025.html","3236d64b770845ab3c63ac81d95ba2e6"],["/post/bd69ba8b.html","75aa1a22ab59fdc136b4328529d68b73"],["/post/bf7f3b65.html","75d1759c535901a7ab95ba8c95abf4d8"],["/post/c3176455.html","93c7943282d72fb3c4535b1c286c7872"],["/post/cb80ff62.html","d829535312e99d4d9c0200da2b70f087"],["/post/ce0e685a.html","842faf461b24505985dd45ace26a9e69"],["/post/ceb39ac4.html","98d4946b973fa25476596991a8c42489"],["/post/cf413e35.html","dfe171b5bf8e93f8b8a67cd84951bc7d"],["/post/d036071c.html","1d128575cdfc19c18716263945454bef"],["/post/d39191a5.html","7d20f4f6c7f6a7abdc974beffa0c7839"],["/post/de3bac1b.html","b548dc14d98ba33f7321af38310482d0"],["/post/df879792.html","6fd3c82852766b4eaca8b0db348adb5a"],["/post/e008fc33.html","db2cd3b7a42b7a6b711f28cc3ac2d870"],["/post/e19da94a.html","ef95b1c30eb617c2ee79ef11ecf5243a"],["/post/eb04e0a.html","ab3f3ed790acb491ad9b018e40575c82"],["/post/ecd67acc.html","ec397faa6ff6237c227006ac97a01a8d"],["/post/ee040603.html","729a60eaec60a47fe6a54000604c956f"],["/post/f1601c3e.html","adba0b17ef859fb309bd887cb4dc28a1"],["/post/f31a5a5b.html","c27eec2e7808a7f8440ad4e33cd542c7"],["/post/f5c535ea.html","2f490893e10ac62f64b60d5658277aac"],["/post/f7500981.html","4198df4a6c4fa1e83bb1ca39776c4d6f"],["/post/f79807ee.html","de6289173adda11decc5fa144310b7e7"],["/post/f7de8aa8.html","ab42d17c39b36113729fb05e6ed859a1"],["/post/f8239d66.html","93d0240ff0ee10e1358b99e8115dd298"],["/post/f9f5e0c2.html","7dd1780083e7ca65c8a9fb244653ef88"],["/post/fa143992.html","a1fbcd528dcc363f2624136f4de2f1a4"],["/post/fb77661f.html","d07292ed4a7055dcd92fcc9689a8b76d"],["/post/fe1f88a1.html","640cd47aa4702a3f168b29269d804589"],["/post/fe57b0e4.html","4a519f79776666d5145d6f3814601ef3"],["/post/fe816c3c.html","153b309b86b43325286490c2704e673f"],["/sw-register.js","0e8fcdd165cb6e6e4679e3e16d891df6"],["/tags/Butterfly/index.html","6f399bed245b919727f5738d334caa2d"],["/tags/Hexo/index.html","3b3ed3f756cc2b7a77a6cf4341dbf515"],["/tags/JVM/index.html","12583a366d6484139be2762fd6cef971"],["/tags/Linux/index.html","f354bc71984e84ea00b56e8cf2f00412"],["/tags/SSH/index.html","e92e2a010d196a782b01a86ab4173e00"],["/tags/index.html","3a54d728129c88f6e70e4f55f4459f95"],["/tags/spring/index.html","7d4bc731f974099ce95838f81e6ba829"],["/tags/vue/index.html","89107673790833383b2d7a3584a24788"],["/tags/一问一答/index.html","bcb6c41191308aacfddd1e1a45cd1bcf"],["/tags/个人见解/index.html","46277fd912a6f85ca6133bb980f06cd0"],["/tags/大数据/index.html","18e249b92ecef68dcb193f252d136b39"],["/tags/大数据/page/2/index.html","d59d4a34bf4831a38b2d7b1f9ea573e2"],["/tags/大数据/page/3/index.html","d9119ec5a55637acf33df40f17c6aaef"],["/tags/学习笔记/index.html","61b6b1b4b4998c0db1cd38894be28204"],["/tags/安装教程/index.html","6768e45ad52c13affb6205b0be493fb8"],["/tags/实战/index.html","62f46b6c8ca29da8d67e6d9affc845c0"],["/tags/并发编程/index.html","fe48283f2c50aa70cead6edd662d7534"],["/tags/数据库设计/index.html","2283d178c29677606913acfc103d674f"],["/tags/数据结构/index.html","dbd4b3643b8270f71f34826c5aac8fc7"],["/tags/案例/index.html","47503b0efd1922c3405e20c161e64b98"],["/tags/注解/index.html","57d74c8f69e987d957415ce582b392d9"],["/tags/源码分析/index.html","22d0decd5be4f22d8e1b2571ce4af9a8"],["/tags/程序员/index.html","56826464f063b652af3db07f24800d40"],["/tags/笔记/index.html","5a44d6a5951d9fdceff13961b35cf7cb"],["/tags/算法/index.html","5e11f227912235b9d3c28be066ba5c68"],["/tags/设计模式/index.html","c4f8c05cffcbb78294f1a28b8dab3cc7"],["/tags/设计模式/page/2/index.html","c8eb464c43e592fe638b0d4adfb54756"],["/tags/设计模式/page/3/index.html","78c5b205989b5489b3d12e7689c00164"],["/tags/软技能/index.html","8135a119d66b25ddefd662c5c6f091c6"],["/tags/软考/index.html","ebc372eda344e09c64b1907946cd9337"],["/talk/index.html","7520e6de282cf6933270a086d2799770"]];
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
