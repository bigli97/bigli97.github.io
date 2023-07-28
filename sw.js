/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","ab24efa856cf820e453dc80b30afd1f8"],["/about/离职申请书.html","9506b3b367ec680cf432b2ddaf2ecf9c"],["/archives/2020/07/index.html","1a1215f905f7cb6b51cb96399bfa4551"],["/archives/2020/08/index.html","98a3e378059f96b95be69db2e97b8824"],["/archives/2020/08/page/2/index.html","d98235f58e1ab83408e11045db52f757"],["/archives/2020/08/page/3/index.html","e699733876058bc61d487837a8d0f0c4"],["/archives/2020/09/index.html","cbf85fe4bf8dcccb6f328f080f303a3c"],["/archives/2020/index.html","16e06de0f048fdc6a1d34b5bea168efb"],["/archives/2020/page/2/index.html","24942030ad444d178bff832738e1bb66"],["/archives/2020/page/3/index.html","9ea738f43d5e2994562881e628fbe572"],["/archives/2020/page/4/index.html","c3744d49cdf0cfb49a53376bd066ada2"],["/archives/2021/03/index.html","d6a4cb25812bfceac3b116f2c428f437"],["/archives/2021/04/index.html","0efb5ff273d8a30fa3d8d2ba12798fc3"],["/archives/2021/05/index.html","2eb93a9c00f7af5b6a34199bbf8e2ab5"],["/archives/2021/06/index.html","19c380581760e14c928777b3166be536"],["/archives/2021/07/index.html","2202cf5379d1c7873f8db64fa8825617"],["/archives/2021/07/page/2/index.html","953166f9d1477cfa2a28de02ba68c2a1"],["/archives/2021/07/page/3/index.html","7d20764e0d8a7903b5f52fd0d6d02939"],["/archives/2021/08/index.html","bfc241f77535d64ffa99fa1b2089e52b"],["/archives/2021/09/index.html","7b23cdc922c12040f474f641a4e4565c"],["/archives/2021/11/index.html","67ef7326894b02ed70f406881cc9ec30"],["/archives/2021/12/index.html","b39611c48aaaf746328d0148c8da0e8b"],["/archives/2021/index.html","1dd00ddba6702d80385da8dfc620c19e"],["/archives/2021/page/2/index.html","d9d475e605ccd33d3dd20a86ca079451"],["/archives/2021/page/3/index.html","e008e94d6eb184426f71d28d420bb13d"],["/archives/2021/page/4/index.html","61a0b9a52fc08b8d2d29a34b878e9340"],["/archives/2021/page/5/index.html","6042ecc3cc60d12c520af143c8c2ec9a"],["/archives/2022/01/index.html","011384beed2e754c81562419a5f7a126"],["/archives/2022/03/index.html","f1aaa45db26c543271aedde573943826"],["/archives/2022/08/index.html","49383d195c631fced2035b3326f48712"],["/archives/2022/11/index.html","7f3491504edd25d93818f3fbc4c0bd47"],["/archives/2022/index.html","effc7e7ad37ff338017654c3a1d2408a"],["/archives/2023/02/index.html","aeef64741df069ff259bd12a23ea586d"],["/archives/2023/03/index.html","d1d8485b6e3c9899fc24e0d156bdb568"],["/archives/2023/index.html","819bda54fb6d26df47e9239c4c507893"],["/archives/index.html","54ae32c3580c1fec1dd9b21bf4265a9d"],["/archives/page/2/index.html","d7ff6f3be6798d3cb5d8a03c970cfbab"],["/archives/page/3/index.html","01cf3041a23ffc891ca826a6df76325d"],["/archives/page/4/index.html","f7959b1011e78c4c57daf10697c70624"],["/archives/page/5/index.html","7aee39792513524ad75ec4ee725b76b8"],["/archives/page/6/index.html","19979f756a0992cce0582a46e9334d5f"],["/archives/page/7/index.html","2e8969b57042070b0afa26c387793b1c"],["/archives/page/8/index.html","878fdc278a5ab678c29a5d8fafcfe0e9"],["/archives/page/9/index.html","04d45ce1b8792ab4125d7b9378009b5e"],["/bb/index.html","1e930d82358bc865fb34b1d17d8e7617"],["/board/index.html","9c27a6e7afd9eb9437bc094d7ed7f60f"],["/categories/Hexo/index.html","a971a75638b7b4f9d6eeca91b973de83"],["/categories/IT碎片/index.html","b15df8c61a23f153d92d85b7c9602f88"],["/categories/index.html","090e780c4855237035b5bb803af87095"],["/categories/前端/index.html","5fc8e63411b5208784b960e4660026c8"],["/categories/大数据/index.html","d29a28bf2aedeacbee2f49094cb11f5d"],["/categories/大数据/page/2/index.html","5c6816a6f309d62062f942e093f51a92"],["/categories/学习笔记/index.html","9119ce3f12cb4852f211e7e5cd54be14"],["/categories/工作实战/index.html","1e6359be84f28180c8b8ab7f04dfaa81"],["/categories/开发手册/index.html","2e23db8cbe6ebdfd3a70f83e0bf976d6"],["/categories/数据结构/index.html","d1f09bec607bbad45a2e962cac26c3b3"],["/categories/案例/index.html","c06d1cdec63fea845b946bd4e5782175"],["/categories/源码分析/index.html","1484f4b215cb61bea7ace46d8698c949"],["/categories/设计模式/index.html","711219ea1a8e92585c005c5890430aee"],["/categories/设计模式/page/2/index.html","32b32effa2372a0a70ae214b3d66e095"],["/categories/设计模式/page/3/index.html","52bc45de25592400557d1d11665dda1e"],["/categories/面试/index.html","0deb5519c53e66a0b0ccca020413a887"],["/categories/项目/index.html","af6c6f472428c2ffc7cd96684cb017c7"],["/categories/高级/index.html","4eabdeb38e2cfa2816c8ff5d92a373b8"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","74eb430fd31072a3ae2c2320efd6ba6e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","512fc284055bacaba8c929491cfb7379"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","9baef0563c256ceed963a07d105f9a9d"],["/page/10/index.html","35d8b5ba1be9958a07daf3600f712b6a"],["/page/11/index.html","63164b57f5fc9b24503c7dc4ff8d18dc"],["/page/2/index.html","705c6ab0d60e476609335a35724b7454"],["/page/3/index.html","cddc1978ea6ead4d9a814d4881ca1862"],["/page/4/index.html","e11f180379d5a785030942724fbe9fee"],["/page/5/index.html","939cfc4a8631fa486b8fa070209a2777"],["/page/6/index.html","590729353fb295954b7b5e6ca34385d4"],["/page/7/index.html","9b4b91148a22833dd344d43b3d19b382"],["/page/8/index.html","c4370488d10c537afc4fda03e06048d0"],["/page/9/index.html","23b130ca0b05fb1e328268b15fb7ec09"],["/post/121bde1d.html","4b6ef64f3729b1c1da673a5b252f5492"],["/post/153083dc.html","89b15bfa74e662c4f1bd84892c41a3c9"],["/post/164eee11.html","ab53b77f361091a8d843bb6d591c6521"],["/post/1a7b7abf.html","60c51f35809ef8788e029d307dc24711"],["/post/1baa3967.html","2909495d113e583044c0a94f51b75595"],["/post/1f4ac2fb.html","94992ae33f36109f532fea7a07e6a554"],["/post/22580020.html","316e2b322033e101d5815d2644f9fcb6"],["/post/286296.html","502e777e7ed71972c4467b43fa6d8ec5"],["/post/2cd418c2.html","17416c2b9e27663e66c0133ed9d1faf0"],["/post/30cf0cd2.html","59f9be7dfe07313b72b698232a1875d9"],["/post/317f8360.html","d959561884a5fccff877845ca30cf9a6"],["/post/33cb1151.html","1256635cfc30f2e9db0c074588aa26c3"],["/post/34e57ffd.html","b332bec39aa20427c0ae0e4b334357be"],["/post/3d20c1d7.html","fc8f447d493988476bab5c0bedfbff75"],["/post/3d24dcf9.html","6012c0001612fdacd1003b337ad2826b"],["/post/3f6c447b.html","dbc47d4010c7689701f03ed055403fb8"],["/post/490cdff9.html","81035319af76e0fdea34f09e973ca455"],["/post/4a1111be.html","25b8fdaff410725096daa7f594782b38"],["/post/4fa8e0c4.html","be57d0d122f1574a7b3bcd58d037e32f"],["/post/524e74d7.html","dfb3549d2b34725c11186009521eff80"],["/post/539343bf.html","227915cd24a49c406dfa85b28f47d006"],["/post/54788f73.html","b7dee86247dea3a57d0bb1d2c27cd65c"],["/post/563268dc.html","b789378ba41bff3206e80b1e5d16b0a0"],["/post/5ac88c70.html","caa0d6672fb8f63bcbc5dac4a56dc5ee"],["/post/5bf55f4.html","4c4b2af3d1e54c572a084ab5b2c78ad0"],["/post/5e87465f.html","d83d1fc3d8594f5b737abb3e6cf5f4c8"],["/post/6016428b.html","9541ac188aba39d115a2df07dc103f06"],["/post/6208627e.html","89cf780676cb0afacf32f084098be098"],["/post/64b51ed9.html","d32c840d2513f4363917049332c1e706"],["/post/659da5b.html","76b8980c8d6faa865fd39da6be27fa0b"],["/post/6c429b75.html","d7559ef31ed881d6a3ce988c03d3463f"],["/post/721d4875.html","6beb35bc676bc9f0f3c7147345db1e0d"],["/post/72e3b671.html","13e6b8b9e7e2a5a69206431d1d8f6999"],["/post/730d8d6c.html","b4c1aad36cc792be6b4d918c4bab6b99"],["/post/74fc969.html","d969f383bae83f5a3d27168779802c23"],["/post/78134e07.html","99fb4182d2684fcff7ce39541af3f94e"],["/post/78c07335.html","78f975fa984201d4decd1f3e9dcfd676"],["/post/7901ad89.html","fe1d17017c583502a14f187cbffdb877"],["/post/7a2a0c9f.html","a72b6904c85f0c0c8884cb45015ac072"],["/post/7b216a3b.html","7b434bc64f28696e3d24ab905ad46403"],["/post/7b510e10.html","351e756e8956cc020110dde5ead29b29"],["/post/7db2942d.html","de7fde9e67fff45e1aded15788ebe3c2"],["/post/7e6c6990.html","5a9b69793761e12dcd1e190716eb6e10"],["/post/7fa79d96.html","4eb6a0675461e3c6626993246ea80d81"],["/post/855673ad.html","ca371feb48fb25286593a89b9709d160"],["/post/892a2328.html","03f126a03a44c98fdb59b6a16ee4d623"],["/post/8acb1976.html","e241ecc5bfb1102be0eb062421bbbd26"],["/post/8e4fa41e.html","3653a3489d6f14057ed33ac85fc92f3e"],["/post/8f488ef0.html","85d7123182a7f8ecf181cfd1c74fc567"],["/post/8ff08e27.html","7fb5fcbab96d0941c98db5e54b0fa6ff"],["/post/9055d217.html","6b4960431598dbd3fdc6cdcd40fc21fb"],["/post/91ad9ce3.html","ec3d458e66c873e7cd043100234874a7"],["/post/96131cab.html","908a8fcf4bffbc792e621165e7c0cfb1"],["/post/96b5906.html","bc3af64739237be1a777cb2ece8e0fc4"],["/post/970fcca5.html","a2ced1c18dabcaaa9049ee3c44c2d1fa"],["/post/9a246216.html","3af4ce66ea2ac53be44b9cbc08381c48"],["/post/a10c77a7.html","d0ba3c29f28213d025d6a24890db1e92"],["/post/a708a60d.html","26600a9a7401c1d87c7263ffb665a9f3"],["/post/ad27c5a8.html","544ce315e664fb4d2d2788be88464290"],["/post/b6c47025.html","947d83e81a024c844bef88a07aa45463"],["/post/bd69ba8b.html","3b8edf97b92b626f13aa03d2eb71abb7"],["/post/bf7f3b65.html","6abb3b27db75f309b410055a0325da84"],["/post/c3176455.html","f44f127558b4fbec138b3d501a874616"],["/post/cb80ff62.html","36f01eb60aace014487dc420a2562a99"],["/post/ce0e685a.html","0b3c58f6b5c27a4454662ee3e04b6f52"],["/post/ceb39ac4.html","732c09fbd3f039e47dc32064461119ce"],["/post/cf413e35.html","700416ef7e124b93ca252c524b774396"],["/post/d036071c.html","16ff76f981347db5747692995154a7bd"],["/post/d39191a5.html","70aea1e8dfaa11fdf938ba7bd1adb213"],["/post/de3bac1b.html","09ab3a19e0a79a0292dec70433cfab34"],["/post/df879792.html","9c236a58f9f6ea1ae0d263910b07f855"],["/post/e008fc33.html","5e427f90da39d5efc862f30ca9d78141"],["/post/e19da94a.html","f2019fda85ca0acba12d9f523bb04d19"],["/post/eb04e0a.html","dcbf93f1275c0b03dd4121cde8b0e301"],["/post/ecd67acc.html","ad0a90ef91ab841707f44e9dd8d0812d"],["/post/ee040603.html","1aeaeda1324d1c6ff29f616f281f3e72"],["/post/f1601c3e.html","0ece9e2bc73c66a65a650c9d78ea2aab"],["/post/f31a5a5b.html","0a0e87c844d2a545e5a3d7d61e984532"],["/post/f5c535ea.html","dff0e60f41dd64969ad8ef5748105aaf"],["/post/f7500981.html","f3fbc84f62ee900643f37a6327b2aa6b"],["/post/f79807ee.html","44de38821c5b6f1372ddaa3f270516cf"],["/post/f7de8aa8.html","37065465fc1cc6852f5146a48cf08ce6"],["/post/f8239d66.html","7745456eb277dcb2d16595b5a3966fcd"],["/post/f9f5e0c2.html","9ed7d6c33966e250b7af57653cd770fa"],["/post/fb77661f.html","d641a442b8e454da649afafaf345829a"],["/post/fe1f88a1.html","16fd4b789dec6ac416314ff879652b88"],["/post/fe57b0e4.html","0b7fc0e086713d1c8a8c3998bfe52486"],["/post/fe816c3c.html","99f49a462fffcbfa4994a1d04248d830"],["/sw-register.js","1f7378c05319137497f53b17c60957c6"],["/tags/Butterfly/index.html","9a5d80ee4230a04f1556a1678bfa6e0a"],["/tags/Hexo/index.html","05656c09fbd893027d68cb05998d88a5"],["/tags/JVM/index.html","36566eb1e59ab64aa6246bc7cd0caf2f"],["/tags/Linux/index.html","3bb34d2db3460665c04cdb90cb0736c7"],["/tags/SSH/index.html","1c7b9f0229ced4ba582ba85f3a4d05a0"],["/tags/index.html","d9b8b012cd073dbc4be3f54128c190c1"],["/tags/spring/index.html","1ef1a318f500a06e544a98dfb9069918"],["/tags/vue/index.html","9daaad82eb8d45dee5b649806ada2385"],["/tags/一问一答/index.html","aaa74bb81989edd8352750270a0cc988"],["/tags/个人见解/index.html","668b6aef69946c591f1dcb46d0ecc743"],["/tags/大数据/index.html","982c6a679b4cdb418a8f2ffee2c475c6"],["/tags/大数据/page/2/index.html","458bbcd415fa6832baef3257c1cea5ad"],["/tags/大数据/page/3/index.html","04cda5d53cf795a25f8b40b7b90f0405"],["/tags/学习笔记/index.html","a5666835357f76ccc3fec14be1c56431"],["/tags/安装教程/index.html","fe79e5ea8af4cb7d2ff4f5f398f859a4"],["/tags/实战/index.html","fd0f533bbf87d9e85c4213738f71efb2"],["/tags/并发编程/index.html","9f9ef0d1255c2084c6b06f46040284bd"],["/tags/数据库设计/index.html","d106252149a57f540b15a31f12358d75"],["/tags/数据结构/index.html","f203f2d8fd9153e4617416b741074b2b"],["/tags/案例/index.html","4203d44d1c086726f83bcb1f678464f4"],["/tags/注解/index.html","21283c69756d235031f59e77a58bc43f"],["/tags/源码分析/index.html","e9c13ffe6de935a50a6a8652cc0e594b"],["/tags/程序员/index.html","f81083ed1fdcc86a420def31993b7582"],["/tags/笔记/index.html","230089b58822c9f663cc8f125e53444c"],["/tags/算法/index.html","0d508f6192ee15ff1ec6d94badc2be4b"],["/tags/设计模式/index.html","412414077ae71988c3ebba90f8e07a1c"],["/tags/设计模式/page/2/index.html","f25c64877e6507ad289993f74649b6dc"],["/tags/设计模式/page/3/index.html","e27737fb31a252d64db808561661f574"],["/tags/软技能/index.html","020f903c7e55a4776c7fd9b9bf9fbde0"],["/tags/软考/index.html","70c1f5b0a22f11b069fcc62767a22846"],["/talk/index.html","564800d40401f07b1a631e9a30ae1be7"]];
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
