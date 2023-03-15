/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","9efecc1e710286fa47905e445b9db9e0"],["/about/离职申请书.html","7ff9e13bc6841fd4c388febcc0b79134"],["/archives/2020/07/index.html","6371763c64c7a3fa6f30d17ac5d881ee"],["/archives/2020/08/index.html","6807e567c3178846120503191b6c88be"],["/archives/2020/08/page/2/index.html","bbdedbc11f8e63f60fd39c41eff5aa08"],["/archives/2020/08/page/3/index.html","3248f8221b02de2bea20a49511f3054c"],["/archives/2020/09/index.html","aaca2dc9de45da0a964bdfd00058afec"],["/archives/2020/index.html","72be6d099918e4596b5f15af799270d1"],["/archives/2020/page/2/index.html","95af8735a6fea77e00b3fc6f675a3c2e"],["/archives/2020/page/3/index.html","76cd04495996aa98df6c0de42ccdeed5"],["/archives/2020/page/4/index.html","c5febcf12a3e3dbce8e2449acd9add05"],["/archives/2021/03/index.html","a7034893153af5c6bfa6d638fa97cfe9"],["/archives/2021/04/index.html","1f82178b1d976163ca0fb379c35f283e"],["/archives/2021/05/index.html","99fa423fd186543dc205a524c275a26d"],["/archives/2021/06/index.html","4599eb77ae9b8b5e752ebcf95b1ed7f8"],["/archives/2021/07/index.html","21e9cb8de68e98d49d52625c48aeeb58"],["/archives/2021/07/page/2/index.html","a877bd50d9acd8f53151a46447581cff"],["/archives/2021/07/page/3/index.html","4f97264b9fe09c213b68600220df1700"],["/archives/2021/08/index.html","ca42d057b0174d3ff2c2ef3c9da4fc55"],["/archives/2021/09/index.html","27bdd749c94dacd74f9349848fa07ef8"],["/archives/2021/11/index.html","3d8d2151ef5d6375e7184bec7f3bf50d"],["/archives/2021/12/index.html","6dbac8b1147be7d5e49e5d36cd953313"],["/archives/2021/index.html","e1517394fa276f79348716ce9ef419f5"],["/archives/2021/page/2/index.html","cd47167877defa7af59342f53deb578f"],["/archives/2021/page/3/index.html","603018341da71bf25beef21a755ce21d"],["/archives/2021/page/4/index.html","00386e9f67dea43c81512246b680d6eb"],["/archives/2021/page/5/index.html","825ee6b8b37c04a03d65249d8c2f205a"],["/archives/2022/01/index.html","b84cc45cdfd2e334d5378793b96ccb8d"],["/archives/2022/03/index.html","a446965b2dc9ccbe9301909d40c97114"],["/archives/2022/08/index.html","007ab19d7dca3e77cf2258bd966850c7"],["/archives/2022/11/index.html","3cc8b30a8d1c3880e8678fe06022381c"],["/archives/2022/index.html","8510c8204bac6d0ec5feb27211594f84"],["/archives/2023/02/index.html","263838f2d69c61ddd34defb6ae2f7ef2"],["/archives/2023/03/index.html","96845615115d1f6d3a917c8450718ecb"],["/archives/2023/index.html","58795dc41198dde77f9ac92460ad1d63"],["/archives/index.html","57a59d8fcd896b7e42298e30a9aa1d1b"],["/archives/page/2/index.html","1e93d43407d8698de0e6d4521951f288"],["/archives/page/3/index.html","eaf29d6efc43400cbe9e8ced5edd7a24"],["/archives/page/4/index.html","870917758aec1fe5a777e0891d9607e7"],["/archives/page/5/index.html","a94cc5f7720958e6a5439f217ad7feb7"],["/archives/page/6/index.html","f3380e70e49f0bc227999578e45d0290"],["/archives/page/7/index.html","99c11c17641fec37966c4c450d3abfd3"],["/archives/page/8/index.html","6bb44ec2170a0faadf55e55d5256eb9d"],["/archives/page/9/index.html","fb5ef5b1cea0668f5f32266863bf4ec8"],["/bb/index.html","5bfe4e621cc7a5f752ca7d042e4ea389"],["/board/index.html","68f60eeaa383a7668f5b6d27521f389e"],["/categories/Hexo/index.html","0dc3ded40ad0be8f0a6a6a5156646c03"],["/categories/IT碎片/index.html","1646cf81ca56365a689136b66ac79f55"],["/categories/index.html","f8704ec5a55fcfda84a32eb9a65dd66b"],["/categories/前端/index.html","5784611822a46a3b7e8c24610b704fbf"],["/categories/大数据/index.html","33ebd3816f592eb06f5b96816171030b"],["/categories/大数据/page/2/index.html","6e36539f48fcc58979112b43973e8fa5"],["/categories/学习笔记/index.html","310155769f621a0be901784a68febb45"],["/categories/工作实战/index.html","a9f69480345f14064664b113ede445b4"],["/categories/开发手册/index.html","514f00650a9244cc995fc228a701f8a2"],["/categories/数据结构/index.html","ab31ff463b3ed03175d4cc71f707526a"],["/categories/案例/index.html","f504f60b1d21b3502e9fbe2cb4988b7d"],["/categories/源码分析/index.html","5ce8811484a07f7ae1baee4f00b5d004"],["/categories/设计模式/index.html","cbd16391ca8b6bac87b7896bb2d56bbc"],["/categories/设计模式/page/2/index.html","a356d83d5ca9c235bc56fb3276c7675d"],["/categories/设计模式/page/3/index.html","f8d6c4c935080c2a36bdb7a9d5536b75"],["/categories/面试/index.html","560cc48e349b2c6aedb9f1afa7a768a8"],["/categories/项目/index.html","6ab19e4629e6f5378577e91f088b5246"],["/categories/高级/index.html","8c106e91136cc6177afcddfd0cdd471f"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","9a887eabeb06de9f0d96938f89d6ec03"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","a1fbe4dfb1716d2fa022a4b115ef5502"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","52c55100f414a42fdc1f6c2b52d7aaad"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","5faae1b872cecd2c890d6cba3d6311c4"],["/page/10/index.html","164068b302d6053ee142610592dafc03"],["/page/11/index.html","7b91ae8cfe24ab0648192dc10087ce21"],["/page/2/index.html","a60eca18beab9f091d57dd8ae008c1cd"],["/page/3/index.html","bf7658063f170872e631a46dd8865d57"],["/page/4/index.html","67041540765348c8ca6612c9e994a3a9"],["/page/5/index.html","6da36b1759ce64405c963cb3177a22f3"],["/page/6/index.html","2d2d9f95fa7dc7418d2185f0d91b3832"],["/page/7/index.html","960ead11f8f904f030a9a01fb10e2bed"],["/page/8/index.html","943c20bea54a980cd49118e4011955f2"],["/page/9/index.html","a8feccfa972d5b6cc99c0d5ba6219aed"],["/post/121bde1d.html","2cce3ab2ee7cd363873a587b3957093d"],["/post/153083dc.html","6d96f4651e5c68e5254e7e1079631857"],["/post/164eee11.html","05810c0417f103df285ac94003c13f78"],["/post/1a7b7abf.html","57438682ad31a1aa0d0cd0a18458f27f"],["/post/1baa3967.html","f42f4357ce7ad5eced85ea99048e530a"],["/post/1f4ac2fb.html","49682b213ab72a33624fcb8576ae6695"],["/post/22580020.html","2dab35f5341c8db76644ce084d587699"],["/post/286296.html","690536a04dfd2e0de71713292b307701"],["/post/2cd418c2.html","653b1e698a51c2a7b5f6331ba7267936"],["/post/30cf0cd2.html","9526e4f9f43fb64a44f877f2b3abf5a7"],["/post/317f8360.html","3af00f1fc4f345df6a31a421777ee623"],["/post/33cb1151.html","baae3b547d7347431eeb6a0035b87522"],["/post/34e57ffd.html","a8f5d332a56fc98f33000138aa684c21"],["/post/3d20c1d7.html","3e334b33474d2d00fb8ede7c8585fda8"],["/post/3d24dcf9.html","fa3df9aa2b636c50975effb0691d3037"],["/post/3f6c447b.html","bc0866dd25a932f84d01798de4bb100b"],["/post/490cdff9.html","427e07647718e1a814782e30af38dfd9"],["/post/4a1111be.html","d5e4d19a32a2c76701dd9466eb1bcff3"],["/post/4fa8e0c4.html","205501085eabf647ba521da101d91d6b"],["/post/524e74d7.html","3436e0aed2bfddb2fd70622552b79d6e"],["/post/539343bf.html","7415ffb423e65c1e7f05bad9a453ea49"],["/post/54788f73.html","18c23bd5df9621ad338ac2e2d4e7c073"],["/post/563268dc.html","46b4b24445ee8415f397f1b244f921f1"],["/post/5ac88c70.html","094d35986d3a9149d4eb9248a4c3dd1f"],["/post/5bf55f4.html","74032f027d2d55374c55ea5bf390cc91"],["/post/5e87465f.html","71a59e92c00e35977bd4b4a2387d5301"],["/post/6016428b.html","112e4b6385526edef90568d1553a9991"],["/post/6208627e.html","91ebbb8dff5ffa533c39b36dd13c03e3"],["/post/64b51ed9.html","1e9f09e95ea1d20424189887d952bad1"],["/post/659da5b.html","6f321cb2c04f4944d86e26dddf013b8b"],["/post/6c429b75.html","dde76b5050e342551a09f4eee3239875"],["/post/721d4875.html","c716c03b2366626c3197263744b8bc56"],["/post/72e3b671.html","1115d2d4f913a378e34e5f1db7852b63"],["/post/730d8d6c.html","ff5cd982815489a1416a3b562aa9fdf0"],["/post/74fc969.html","119e4b1f62b64052437fad0e2ecb643e"],["/post/78134e07.html","b42cd495bd2d332d4b415561958d2e41"],["/post/78c07335.html","ca7dcfc063bb35e9611ad49bf3a4d776"],["/post/7901ad89.html","bea939ed836921453de785bbd81e5621"],["/post/7a2a0c9f.html","4f690227a29e3d0ba01b06e4acc211e9"],["/post/7b216a3b.html","3ad65a419b1f580ae88bb660319782b9"],["/post/7b510e10.html","ed4f77d6128e03990fed508ea82a3dba"],["/post/7db2942d.html","a8b38f15f5e7b18309caa6f8e6e0564c"],["/post/7e6c6990.html","27493625c5ba77d2399ef4c1cd01846e"],["/post/7fa79d96.html","cdb387af93f8cb05a4a55190e447b5e0"],["/post/855673ad.html","52a4cab49a94563c97f06f712ecc5ca4"],["/post/892a2328.html","f85b3a3fadd63e1b41cafc410fc244c6"],["/post/8acb1976.html","b251e7ee538f32e7b8f7c1bafe472a08"],["/post/8e4fa41e.html","ac3a01094f26f58f3816b18db8672423"],["/post/8f488ef0.html","9cbeab07c587d835c83799c46ff3fa41"],["/post/8ff08e27.html","7fb25e5897b18f32aa11c2b17d006508"],["/post/9055d217.html","9df0bded165760352691a5fc37eb8e84"],["/post/91ad9ce3.html","0de86f37f47af8062331a9aedae79caf"],["/post/96131cab.html","0ae300f847bbcb194e635d79621398d5"],["/post/96b5906.html","a505f27b696e252a90a5614a64a35183"],["/post/970fcca5.html","e5b03ee57ef79c4ee43d963ad0898246"],["/post/9a246216.html","ef3999b1407f11aabf5c8f1eae4721a4"],["/post/a10c77a7.html","928df43dd00d4fdabc44b500ffcd9116"],["/post/a708a60d.html","304f483aee1a9a2f353df90f20328c4a"],["/post/ad27c5a8.html","2b431a4f2176e707f42c6dab6019100f"],["/post/b6c47025.html","fcc293f57f57ce4071a24304dee276b6"],["/post/bd69ba8b.html","da0b38f012b2e62ccf2945a855bf3469"],["/post/bf7f3b65.html","f2343fd22cf3217428f63798da910492"],["/post/c3176455.html","32b76af52c7d24ff7ad71a6b717e1f75"],["/post/cb80ff62.html","074a429d35e41b0bf60f99137f328403"],["/post/ce0e685a.html","797b9a0b106cc732fbd5cecb2c6bbd82"],["/post/ceb39ac4.html","9c2744c04dd41afd821ddae6e83d2bf0"],["/post/cf413e35.html","023d1caecf8610629cff07955760bfc6"],["/post/d036071c.html","9f48b449834f34da922b0afef1c74407"],["/post/d39191a5.html","df7b809eb151f5aa5d22a336478ad4de"],["/post/de3bac1b.html","b4076270b2f5c19f19343869a2c796dd"],["/post/df879792.html","3c623e682122a924f823a0ff9734b54b"],["/post/e008fc33.html","c6c9f6826e54abd8b8c8ab7f79e5a2d2"],["/post/e19da94a.html","811309983fc8d913ffb296366fd2c234"],["/post/eb04e0a.html","21c840a3f53e2ebdd9dbd7b25504e3f3"],["/post/ecd67acc.html","6c410d6c9e0e09a4494f7a2a7f3cbec3"],["/post/ee040603.html","d236d86e329553c4b065474045856fc9"],["/post/f1601c3e.html","1db24275b8d2f03ea484bee0179ae15e"],["/post/f31a5a5b.html","47ea3e62b0db6ff3c63ae47a5fb1697f"],["/post/f5c535ea.html","67421ad032860fee49af22cd15521fd0"],["/post/f7500981.html","e46b9ed7e73b30908fa1047bf470cb02"],["/post/f79807ee.html","5a1c3c264415b95303c82efb1d1428d0"],["/post/f7de8aa8.html","b7dec2dfa4ee81642cf599958f2fc230"],["/post/f8239d66.html","e4f023a7b4b7acc3d8b98800b2d76859"],["/post/f9f5e0c2.html","5b30838cf40a23ea93cac2dbe0033947"],["/post/fb77661f.html","d78253c659cbac0fa0f246e6ce5e083e"],["/post/fe1f88a1.html","87e0d1bebcbe512e20b96738032f7369"],["/post/fe57b0e4.html","aa6ae5d1ee6ad8fc9e23de5fdacd1fd4"],["/post/fe816c3c.html","c7b977ca2b6eb17704e81f1e7d1cd4c0"],["/sw-register.js","6bf746a4d033b3167e6ed76673ced70f"],["/tags/Butterfly/index.html","86c320d8234c676afada96e5a0849713"],["/tags/Hexo/index.html","6d8d8739f095ff7b0e1249878ba27f18"],["/tags/JVM/index.html","4885ff0ec2a913658e96fb759d5ad7ac"],["/tags/Linux/index.html","6c42921bd3e036c81eab64f3d234293e"],["/tags/SSH/index.html","cecdf38d6d167a08504923b63d368049"],["/tags/index.html","0ca5579b12395f94fd9d17a0b09b5ba2"],["/tags/spring/index.html","fad86aa076a1d7d1d6aa249429373e2a"],["/tags/vue/index.html","81a3625035fbada4df30d592b3a33141"],["/tags/一问一答/index.html","1bfe00d813822bd801c42ebbb90897ec"],["/tags/个人见解/index.html","256bcd6f8bd854d895ffb168fcff2853"],["/tags/大数据/index.html","d08a8bf0b23dc90e2f175f8d370c30f7"],["/tags/大数据/page/2/index.html","2aa4e357f9481269cc75a26434166ba8"],["/tags/大数据/page/3/index.html","a58bf9180e023b2faeabb1ffdad9c149"],["/tags/学习笔记/index.html","6d55f90b2118383aab56c39b19b5a474"],["/tags/安装教程/index.html","4ffc2d6a51ed788989a2f9836e8b1c45"],["/tags/实战/index.html","46a7f089f179e532b8785102c6accd3e"],["/tags/并发编程/index.html","7ab090e8bc9d3ea278fd949dd1e6c97a"],["/tags/数据库设计/index.html","25281a87e61b1417665f01784570aa01"],["/tags/数据结构/index.html","612f506d657653f89c4c9b8ae6f45750"],["/tags/案例/index.html","98aaec2eecd162e400e0271570f54185"],["/tags/注解/index.html","0e9c666c16cbab1ef08de1773a1542ee"],["/tags/源码分析/index.html","fce522c7f98c10a2a1e45f8a33453d71"],["/tags/程序员/index.html","4ed12d40d877ee82d37ff773a681dabd"],["/tags/笔记/index.html","dfcace92bbac27a18bb8f8745c1f3ef6"],["/tags/算法/index.html","16e6d19066bc6d4156b63cda2983fd15"],["/tags/设计模式/index.html","8f2f778e4bebe1da3ec0fe4df7e5608e"],["/tags/设计模式/page/2/index.html","ae8c13530e6f541239c676f2612a838a"],["/tags/设计模式/page/3/index.html","1c70a5746352f5d512cb45ecad74ef58"],["/tags/软技能/index.html","5a813fe5546c313c9cc359be027f903c"],["/tags/软考/index.html","b9f33b1ff04cba7aafa469f8612f972c"],["/talk/index.html","270aaa7b8c81096487ce3ad0232604a7"]];
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
