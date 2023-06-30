/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","688d4221f8190fe63692cc6506942958"],["/about/index.html","9fba4bce3a9815ad7592a226ed7b074f"],["/about/离职申请书.html","f690632e90fbf3948e0c4a198517f5fb"],["/archives/2020/07/index.html","a76a9edf8fafd759a57152841a505e98"],["/archives/2020/08/index.html","4734794cdcfce0918a471c6ccd5c832a"],["/archives/2020/08/page/2/index.html","43b92663ebc66a2f02acb97e2ee978d5"],["/archives/2020/08/page/3/index.html","e7f460c91051f4eb657311c1b513745b"],["/archives/2020/09/index.html","de76b02d5ab68f193c13201f07cdc53e"],["/archives/2020/index.html","157ab85a55d5537c8b9b4d70d5f7a78d"],["/archives/2020/page/2/index.html","31ff66ec989fd4fa974fc9712444302f"],["/archives/2020/page/3/index.html","96c0b2de81900ebff3239781a826b7e1"],["/archives/2020/page/4/index.html","da13b655ab90c475a58992c4c9d1ae68"],["/archives/2021/03/index.html","6d140a0394852b9186aaf01abe2cbaad"],["/archives/2021/04/index.html","c5802d1cac715d2233dc5197d0f4d2fb"],["/archives/2021/05/index.html","a3afbcd7ff541c1ee843a85263eedb95"],["/archives/2021/06/index.html","dace25a46377fcad67e3534f00baaea9"],["/archives/2021/07/index.html","5ce301b18a1c48f4a3c3991722647268"],["/archives/2021/07/page/2/index.html","3d41b860ffc54d3e433f0eff91840ff3"],["/archives/2021/07/page/3/index.html","4273cefa690c604c37fe55c0fef0f277"],["/archives/2021/08/index.html","865210b3716f456981b9ab5b900f2aaa"],["/archives/2021/09/index.html","15c04176aeabc6472f703422515e7abc"],["/archives/2021/11/index.html","c03a9efccc412d27e2279f7baaac3618"],["/archives/2021/12/index.html","aa5c1310115632702b3285d71d645101"],["/archives/2021/index.html","e5d6f93acbc76214a3d01084c6ced3af"],["/archives/2021/page/2/index.html","1257cf755c823dae37e021c00c748576"],["/archives/2021/page/3/index.html","35cf87aee251a3f9b9d5bd7d1270d341"],["/archives/2021/page/4/index.html","9e918e5e82562138322fb0ac9b6b9c86"],["/archives/2021/page/5/index.html","728761bc3d416999bb52821126858c57"],["/archives/2022/01/index.html","75d495acb15cced9e5d7b97ed4d48025"],["/archives/2022/03/index.html","f90336dc0f652e54d46d9c3b55b14564"],["/archives/2022/08/index.html","80b914570dd4830eb4600315bf69792f"],["/archives/2022/11/index.html","4e814979ccdd0d6467104d13bf27a989"],["/archives/2022/index.html","415689ce16591338a87c3d6c18a9b0f9"],["/archives/2023/02/index.html","1a194447b9c8afa16ce2124e5aad068a"],["/archives/2023/03/index.html","5fb5e007687e11aec4dcec358990fc86"],["/archives/2023/index.html","20179c4c3d1082ea3929a8b8cd7a1980"],["/archives/index.html","427be72d59da1792f4832b2292b784c0"],["/archives/page/2/index.html","2d42051577e02451afd0ecdfdc5dd407"],["/archives/page/3/index.html","cbb3022fabe80b3f31c1ed8a6a34b528"],["/archives/page/4/index.html","30e0e3ba11484993249084b844e799f3"],["/archives/page/5/index.html","7e653a16ca40eb9f7a9012aef60b1141"],["/archives/page/6/index.html","6b43753b63147ca88b0ee3e37536b284"],["/archives/page/7/index.html","c8295e96bed277cc93bc4adc55629fd3"],["/archives/page/8/index.html","bb5c6964233376c456da66f1d559dea1"],["/archives/page/9/index.html","04d5235bf28503e393375eb092422055"],["/bb/index.html","fae0f9ed19efbe330fc6fa85874788c7"],["/board/index.html","b6395f5e4cffbff5708b8a3b5300ffb3"],["/categories/Hexo/index.html","9880ba11331bc73ea4f8c07f2c50d72b"],["/categories/IT碎片/index.html","6511850468d29b739c60c1f420dd2955"],["/categories/index.html","2e6e06d4d3afae4ce3b7887161f76265"],["/categories/前端/index.html","67fb0ab5395e1ce3f4b91acac3ede59f"],["/categories/大数据/index.html","692742771be93407e86d90fe06185bcb"],["/categories/大数据/page/2/index.html","390647a4a82b7735128e2f67441d9170"],["/categories/学习笔记/index.html","e216a596d7c7d259ff6f644a69a66236"],["/categories/工作实战/index.html","7c07559d2a08e6f2c129608bef1b8c33"],["/categories/开发手册/index.html","8e4eb0ea885855b46aa00e5438081feb"],["/categories/数据结构/index.html","d241c1e2cd0b1c10dd48945193bcdeca"],["/categories/案例/index.html","6fa8400a0f284743a1d4f0e6df0a27e0"],["/categories/源码分析/index.html","23075abe165d14c5b3eafd59ba9ae743"],["/categories/设计模式/index.html","82715b0a0a3f93333331b9f4ce9588a4"],["/categories/设计模式/page/2/index.html","48fd9256dbe143b425c9a40fbc7badf7"],["/categories/设计模式/page/3/index.html","ff57ba2f069d3652fc59bba361af2b4b"],["/categories/面试/index.html","d149fd106ea7528f69d47603abdcd756"],["/categories/项目/index.html","56f2a6261018b1f294e0a54882ef51af"],["/categories/高级/index.html","55ef3040e9b47efc650260ed9ef40f6b"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","f83a7a4f310ec887bed9b53bfe90cad2"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","58f7db0589d715de768e20712cf5d028"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","2bf39312e0f15816526c72b6039ca158"],["/page/10/index.html","bff398d6fb52981dec090d88725129df"],["/page/11/index.html","ac93ac7813efc82c806fe2defd5c4949"],["/page/2/index.html","ab74d168491fb56b437bffd6738d0b3a"],["/page/3/index.html","54c100191f0fe09f4325ef1bd0027135"],["/page/4/index.html","7a798e5b18617aced1e2a337b1f8d277"],["/page/5/index.html","4e907e82104f8f790088b2c37273adbc"],["/page/6/index.html","d1909bd2a0d001d5b703df375b9e8222"],["/page/7/index.html","b16ff196f17b7445bb8e01e0a795bc07"],["/page/8/index.html","fa6cdac3895d25aac4891364576bd573"],["/page/9/index.html","266b4f43244039582f33eda2a1517829"],["/post/121bde1d.html","48de6166050f606bd4b89acaddc615f8"],["/post/153083dc.html","611cb00dfcb65890828674e712cdd18b"],["/post/164eee11.html","12a1bf3bfdd4821e8466865470dfd7fc"],["/post/1a7b7abf.html","97c300a9244d30dac9de7a13b50e4f0d"],["/post/1baa3967.html","c4adef73738ad223ecec0904755645b3"],["/post/1f4ac2fb.html","e1b74c17256d75dfeaeb3794b10cc585"],["/post/22580020.html","05c9bb23a787839f33f007fcfc3eccb3"],["/post/286296.html","fa164efefe0027ad186fc3b1a70ee725"],["/post/2cd418c2.html","f01417992d42ef34eafa29ca94248fcd"],["/post/30cf0cd2.html","094c20963c8c291b67dc49710d8b9e1d"],["/post/317f8360.html","3a4d6b1632912d07de527168e43d40b0"],["/post/33cb1151.html","dc0384ab8b3f3f08e490635c73e8f1d5"],["/post/34e57ffd.html","b2ac68cb52b3f3c2a9aebd361b87fafe"],["/post/3d20c1d7.html","675451e6af61c13290e792a390435948"],["/post/3d24dcf9.html","29949c033b59d9fd45635f46bb9dded9"],["/post/3f6c447b.html","7d46b94598d9815b8ec792f0ee74a262"],["/post/490cdff9.html","8572d714c62091651882426f5bfe764c"],["/post/4a1111be.html","5545769b3d94f22d869e50763b565e29"],["/post/4fa8e0c4.html","46b4215b1875c9b9bac137b51ffe823d"],["/post/524e74d7.html","7fa471e887d0dcfbdc99475d1e5e0be2"],["/post/539343bf.html","0e91cc1308bdd8b2795fc0f6f979cab4"],["/post/54788f73.html","294722272ca81d4707f36d9e2ccc7cd5"],["/post/563268dc.html","7885f02fcc001fb8a4cadfd7fa76ec5b"],["/post/5ac88c70.html","51855ab8024ec860f17791c0d9b0769f"],["/post/5bf55f4.html","18a328581e7505b346d45ec9563e1374"],["/post/5e87465f.html","c14fa571cbab996ff66b088e8bd59a91"],["/post/6016428b.html","7664224a92fcf8b646cdfec8cf475e0d"],["/post/6208627e.html","17f383fb0fb29f9092b7f4f81a1c749c"],["/post/64b51ed9.html","f4e77e24c7d3f7f314068751f091c8b5"],["/post/659da5b.html","39ccea914d0b1f65e1bcd5e34edb047b"],["/post/6c429b75.html","05e7a91e4eb1dd4853207987f0b732bd"],["/post/721d4875.html","a859860df0f378252f80ac567caa07c3"],["/post/72e3b671.html","ea733ddb2f41bfe764203486f7ee9d37"],["/post/730d8d6c.html","7b362a1212f93a56f8dfefe5f0739567"],["/post/74fc969.html","5b503220320fe6af0d4903dd4ac248e4"],["/post/78134e07.html","f92b696655dcef1ba663295f459a4456"],["/post/78c07335.html","322b23d7b13d7e49dfea92a75181c1c9"],["/post/7901ad89.html","770584d76b273135d865897e9edb8f3f"],["/post/7a2a0c9f.html","144bd76a4cfda30ba2da22347736e8d8"],["/post/7b216a3b.html","4b28f9958d80cf42049e997ee5356227"],["/post/7b510e10.html","29406e20deda65014b4b058056c96c67"],["/post/7db2942d.html","e63e9e46b6051bcb00f9aeccd59733d6"],["/post/7e6c6990.html","a2b2b194c6bc1cbcd49bba82eed217ea"],["/post/7fa79d96.html","be7f5e35017248f3c2fb6b9193e35509"],["/post/855673ad.html","5eb78c681b38020fa3c2d6d78218a7de"],["/post/892a2328.html","fb22e3fef97aec57edbfe68b4cc4d1d8"],["/post/8acb1976.html","e224cb4e02bc0a67ba47e37f116b9c7a"],["/post/8e4fa41e.html","630caf9863456bb29ea2d9bf729ba04b"],["/post/8f488ef0.html","e98091112c13141b7cc04db7455c91db"],["/post/8ff08e27.html","ce9c3ee5eeff9fd50c62a49a73e5779d"],["/post/9055d217.html","705c45517881156ba34297ee33932e22"],["/post/91ad9ce3.html","caaf097d25bf84603d0dda4be37bee6b"],["/post/96131cab.html","790f352e26563c73b5c5f8521ee5fec1"],["/post/96b5906.html","b384ff97fba87fa66dd4633a9b8b4696"],["/post/970fcca5.html","3972f3abbac55d5cd9234a896603e8c0"],["/post/9a246216.html","8e3b123cc7ef47095962ae6bcd8f64d1"],["/post/a10c77a7.html","49fddcd3f481f75a5f8b233bb11567fa"],["/post/a708a60d.html","1911135a26ee83d6c72c9c131b231297"],["/post/ad27c5a8.html","9c4ed98131ed322ba53198d21d7143eb"],["/post/b6c47025.html","d26311089d1403ebef813770b0293749"],["/post/bd69ba8b.html","fabe1a2501315bcbbeb127b2a67d580e"],["/post/bf7f3b65.html","fd69463e8827172f4039683934cd06be"],["/post/c3176455.html","09e5c9a38cc261c9b1eecbbbb79919b3"],["/post/cb80ff62.html","954b9e092392c357f731b18fec2c2f67"],["/post/ce0e685a.html","09deb62222f28e5be429b26fc81418db"],["/post/ceb39ac4.html","668bfb2ef20debf026e09bcdced27916"],["/post/cf413e35.html","3dfb7e0535c4f7efbca47a301fc906f6"],["/post/d036071c.html","c7790944bd7b84ce282fea73a025ef58"],["/post/d39191a5.html","0ec83841798a676ca928a56f8bbccd49"],["/post/de3bac1b.html","78085435a5b05bbf0c14dfd7e03f045d"],["/post/df879792.html","4ec7eac3f57eb2211f24284be3e3ffa1"],["/post/e008fc33.html","30ed3c726f64971756936241a460ae46"],["/post/e19da94a.html","17873032c8904381cdc576dd945c1644"],["/post/eb04e0a.html","19285c784e48fc2e774f64652b830225"],["/post/ecd67acc.html","904b2b0de7e0f94d3b98c5f2fcbe478d"],["/post/ee040603.html","16402ab178f55be4805884a4b272767d"],["/post/f1601c3e.html","886b25a872160743e2f279d1f3e4d5f0"],["/post/f31a5a5b.html","dc245eb35e6811e258bdde096326ada2"],["/post/f5c535ea.html","fed40878106f1b3dfc6bd7c01b91213b"],["/post/f7500981.html","e739fb1cdb677f348e5d8413e13e6e72"],["/post/f79807ee.html","435d4430ad5b3336a82e8b0397983349"],["/post/f7de8aa8.html","84f67f9b3566b943a30b9c07ff3e5f7e"],["/post/f8239d66.html","50e796ee75653c04d8fe104a56f76f0f"],["/post/f9f5e0c2.html","81822fca17ecc14893fae4fc6e8cc7ad"],["/post/fb77661f.html","41435b0de621738bd4d7f8b5612140a4"],["/post/fe1f88a1.html","073555e6876279118873e1c6e8bbe69b"],["/post/fe57b0e4.html","edc1368ec5ac16a328ce313790344804"],["/post/fe816c3c.html","2406f325a45f634deb0b6f63ddd47579"],["/sw-register.js","473bb426b1ef2f555b559039ff0dc1d1"],["/tags/Butterfly/index.html","a4fa9234985f7b65b78b7bba8b40de12"],["/tags/Hexo/index.html","9638fbc9b8c448402e7ce1abb7b90496"],["/tags/JVM/index.html","5a3f0f47bdbccae62dd2935fd778cff3"],["/tags/Linux/index.html","08090d506d270a6de51bf64217c057d9"],["/tags/SSH/index.html","2d4b2ca763cc1e81651a7bf71f319b37"],["/tags/index.html","3c9c7afe102fb1197c6516c71f28388a"],["/tags/spring/index.html","9e840d95ffd4a38bd792805cab491983"],["/tags/vue/index.html","85ca4b7bbeceb2f86c161be5d9c13f9d"],["/tags/一问一答/index.html","2b64b2b4374b3270df11adad2816292a"],["/tags/个人见解/index.html","8887eddbd2428979c946af1b4d110c4b"],["/tags/大数据/index.html","24a0c23bba53cfd5926acedc49e6e96f"],["/tags/大数据/page/2/index.html","0a4e36ff4101e39f56c6ebda5fb1f892"],["/tags/大数据/page/3/index.html","ec83493af7c55cde2df24b330f78576c"],["/tags/学习笔记/index.html","1f09cc8916cf02d9c188050e21081e36"],["/tags/安装教程/index.html","28668518b2410e2b21db8b99311dbb67"],["/tags/实战/index.html","4c0a7cc0ed86eafe75784ddb02786104"],["/tags/并发编程/index.html","456b2f6d8edea81797c9eb03cbcc3875"],["/tags/数据库设计/index.html","ae1bd8f12fe9ba31a09f6b81e677b615"],["/tags/数据结构/index.html","1e52999fb0f3bfb6244095c3f3cbb3b9"],["/tags/案例/index.html","3b13a736a721234df0d3e9af945ccca2"],["/tags/注解/index.html","b81ad0d645ea5b85ea592ae8713b9f41"],["/tags/源码分析/index.html","1176845c09544e9652ca523afe494e14"],["/tags/程序员/index.html","2507345f08df84155a250333852553b6"],["/tags/笔记/index.html","d8088648a5b04ee93097f025484ef6dd"],["/tags/算法/index.html","d052b8c586e44a1555d7c9cad42d435b"],["/tags/设计模式/index.html","cd7a2b129debda5b6c3cf541b1861ad2"],["/tags/设计模式/page/2/index.html","3c7207f75e5bd95e2c82458490af6bb6"],["/tags/设计模式/page/3/index.html","ddde9b8eb70899d7219c3849548d7b5c"],["/tags/软技能/index.html","d171589ac44a275fc9b0ac07128b6ae5"],["/tags/软考/index.html","84a1514c751a66ee03e8487c0a6840c7"],["/talk/index.html","a461da290c63c10545781cf479042157"]];
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
