/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4fead68e699d93741088d938a5b45737"],["/about/index.html","779298f7982589884fb16c8c6fe8e202"],["/about/离职申请书.html","ad2b8c399c5346523a161a19cbda8ac5"],["/archives/2020/07/index.html","bee8aadc7d7bb4028d48210605479258"],["/archives/2020/08/index.html","2c35a89b53815bf21636d5785d4148b4"],["/archives/2020/08/page/2/index.html","63da5643e0ebdd600394818befae4718"],["/archives/2020/08/page/3/index.html","2488035f6b55eb4297e6cb6dbd60b483"],["/archives/2020/09/index.html","bc0c70e215d95a1fdb53d8fada99c6dc"],["/archives/2020/index.html","303031cc51f1277bcb207c7b7d1fc542"],["/archives/2020/page/2/index.html","9df00635117cf5ad3431fe78e7dee872"],["/archives/2020/page/3/index.html","661e7e6d978640a8f2d61f83faaaeee4"],["/archives/2020/page/4/index.html","65ed6e5f56d89e33a24198a5e13d9ade"],["/archives/2021/03/index.html","e4efe9c42161f8a02dc100007d5d50ca"],["/archives/2021/04/index.html","cf4879aacfdbdd43ff8739642a92358a"],["/archives/2021/05/index.html","5b42e7d9ab31673a09cf43fd6e0b8584"],["/archives/2021/06/index.html","9b7acfba918a473cc2590cdbdd633806"],["/archives/2021/07/index.html","2cb17476c6e395c6a7dbf1dc65ccf71d"],["/archives/2021/07/page/2/index.html","a98eb577467420cd8e63ac0e20e8e333"],["/archives/2021/07/page/3/index.html","12e706a48527218b6ab223e2dd8158b0"],["/archives/2021/08/index.html","5c68c7b77655e5b47dd04b49ce568502"],["/archives/2021/09/index.html","e484ca07c41f626877c64bb5237e7861"],["/archives/2021/11/index.html","06585532a6e1fe15e6a01523bc477343"],["/archives/2021/12/index.html","11388551180c719864a784d2fd0db63a"],["/archives/2021/index.html","a765d24f2cd81c3194209ceef981a114"],["/archives/2021/page/2/index.html","9ef30a7bc6352c222d081f421e02e0ea"],["/archives/2021/page/3/index.html","5e46fd657be44b2413e69306cd5e31bd"],["/archives/2021/page/4/index.html","61376cb41ef30934d178cc8df26a28ef"],["/archives/2021/page/5/index.html","daa8c34091d6ce1159b5aaa52038437e"],["/archives/2022/01/index.html","b29d9ffdfab6f7208b17a9f89c133c96"],["/archives/2022/03/index.html","c5aa13936f204cc5593032db67f3755f"],["/archives/2022/08/index.html","35595cb212903426b3a14478ce409f79"],["/archives/2022/11/index.html","e147e7c4b08650ce068233971da02705"],["/archives/2022/index.html","c353b5bbb486080a0c0addc5326d9d57"],["/archives/2023/02/index.html","b73f1f5d09c98cf7431c736cb37ffd84"],["/archives/2023/index.html","227a5645f8e33ed96438a16550bd8b5d"],["/archives/index.html","9115f4a9daf7beb42766a635abe1eb5b"],["/archives/page/2/index.html","7b498abdc0a6b8b476f6d71b13526196"],["/archives/page/3/index.html","8b5d120887ddaa8a6853242dea9ac9ce"],["/archives/page/4/index.html","b066b7aaed73a3e5354bec978ae38e6f"],["/archives/page/5/index.html","a32d4e83f3d7e9be6bb9bb3e6dc956a1"],["/archives/page/6/index.html","4c85b069307b280c5e2d38689eb4b69c"],["/archives/page/7/index.html","55565c492a68d0510cd0a075f1d6f35f"],["/archives/page/8/index.html","ccff61c54d25c4185f01ba3f86a584ba"],["/archives/page/9/index.html","5b559f058ac99a71d2dbef6ea9ac5f3f"],["/bb/index.html","37038f2f13136fbe6eae9a2351a2e108"],["/board/index.html","e98388bde6b9eeffc27cf4ccaea12fa8"],["/categories/Hexo/index.html","ee8a44f4b6859b4ab98251338cc44570"],["/categories/IT碎片/index.html","d16cf5e5bc396ec22d75d9e9a9c4b52a"],["/categories/index.html","61548c1e2dc87a12e4e3ce04cc322a29"],["/categories/前端/index.html","c601a739b344dc714c20fdc928904761"],["/categories/大数据/index.html","98e96d4ec1c2e571eec76751988901fb"],["/categories/大数据/page/2/index.html","d203e9f1ce401bc8d4379d7cd6a351ae"],["/categories/学习笔记/index.html","c4fbb5884e4ddeaa1d131f000861aa05"],["/categories/工作实战/index.html","20373fa3f97c92b1035121faa0c43870"],["/categories/开发手册/index.html","eba39b420d0d2675fe7263f69a0d0029"],["/categories/数据结构/index.html","4eca1be1e4c24f28dafe9d795157daa3"],["/categories/案例/index.html","90327406d386c96e272eef971ab7c8a5"],["/categories/源码分析/index.html","1924867ff93438dd0a9b5cd24405e8fc"],["/categories/设计模式/index.html","2aca550ca5b06efbe0141942faa51683"],["/categories/设计模式/page/2/index.html","8774dcf45e6dda1d51aa1e297eb4dcc1"],["/categories/设计模式/page/3/index.html","11b384e82ee9cc336062ed48892292b3"],["/categories/面试/index.html","a5a842f31da08020f70ec7e9ee60c249"],["/categories/项目/index.html","304036a4bbbc0496396f17a3b90babd3"],["/categories/高级/index.html","52862c7585d7e8ece3782e492160df79"],["/css/404life.css","e1df1792ce156211cd93aca7ae45c188"],["/css/bb.css","f53759efc0cfe9dffd42c8e11fe312c9"],["/css/custom.css","7799d4ee996af6b78b8e0538d32a483d"],["/css/index.css","257d64d7e06fa1723ce9f5c60cb22634"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google2bee668365a7059b.html","6c25cfb6b86c4d668f5ebd6f63bd8372"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/README.html","5ad65a675afcda10b6993bb317aaafc3"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/android-chrome-144x144.png","8a86185c6435b3fae2d9d606b58a421f"],["/img/android-chrome-192x192.png","a920d90eeb11d4c6ebb8fe06887d2b7f"],["/img/android-chrome-256x256.png","c75caf94b08825928b0cfca7bf9355c1"],["/img/android-chrome-36x36.png","b9dde72b1066484706684e0776e53a3a"],["/img/android-chrome-384x384.png","eabc0b87bd664b2e93099e9489c8c0a9"],["/img/android-chrome-48x48.png","731e79956155cc5e04e38ce9dd5a83ef"],["/img/android-chrome-512x512.png","b2c8b5c2a402873f68bb9764a3ed0908"],["/img/android-chrome-72x72.png","fccfe015270f3b33acba84b0842f90cd"],["/img/android-chrome-96x96.png","07e978ffd88004fb8abfaad037c9798d"],["/img/apple-touch-icon.png","72eac12c88dd678fc42f143bad4eba0d"],["/img/beian.png","557ec47db0794cc1ab6fbbc92fe00b97"],["/img/bgerror.png","fddf70e7e49acd9edeed32e4561fc73d"],["/img/default-bg-1.jpg","c7b213afc6f5ad382603f96f35a2dcce"],["/img/default-bg-2.jpg","c91b8aa0cd86aeee17d6675b3e510dfa"],["/img/default-bg-3.jpg","ae62eaf084ccf5b8fb687a5d5a94508d"],["/img/favicon-16x16.png","7d6ee8d3a67c9c28390f18efffb2de53"],["/img/favicon-32x32.png","5800e1edb90e93f381b3e2c927e1fee8"],["/img/favicon.jpg","5f28b52e2e642c17b5bffa13725fab2a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mstile-150x150.png","27627c52d346a7d1ae781f5b600812cb"],["/img/safari-pinned-tab.svg","418d244ac42030c3b14ce907dcb165a1"],["/index.html","9338a32653cc7ffa52cca5d956f0112b"],["/js/custom.js","309a916e41b0599dd5d656055ad666fb"],["/js/iconfont.js","ec01bd13c9621a6bbe2b975653bc7caa"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","1485650ac5162727b7240ff99a5e73c5"],["/page/10/index.html","d5047441c70f4d8625ecd6dfba599d28"],["/page/11/index.html","dcf7a8d51d2bc908d090195118530daf"],["/page/2/index.html","4952ef1afc971b9cef8b324d3cca0798"],["/page/3/index.html","e668bfc1d094f4f551ff76b4bec8b35f"],["/page/4/index.html","f9efa3a0a0766028b5c4e7c7caa4701c"],["/page/5/index.html","f38f477720ed5040d164d7fa6addddef"],["/page/6/index.html","31a476a6c93fbd54eaa5e254aef462b1"],["/page/7/index.html","61a7e238d613da687c04f695e1e4e98a"],["/page/8/index.html","1677bef482423531b9f7cb8d58cf6542"],["/page/9/index.html","15f77a32f59da2c11e102dd43d35e2e2"],["/post/121bde1d.html","4470e9077f0a20a60de70269ed97bd56"],["/post/153083dc.html","fe9198af58239c468fa262bf22ea6aeb"],["/post/164eee11.html","e78d8e0888472d7f32646d843ea9d040"],["/post/1a7b7abf.html","edbb0c53387ef26134af36fa1607f74f"],["/post/1baa3967.html","639a42167b14e6dd748506153458156a"],["/post/1f4ac2fb.html","8a26fbb72056c2b8a7e398f7d72f8055"],["/post/22580020.html","0dab78787948abea0e921bf8b895afd8"],["/post/286296.html","9ddfdcaf037a1cc6cf1802d4d0cedf9e"],["/post/2cd418c2.html","a30b7616bac9c1213c99ce33609bc347"],["/post/30cf0cd2.html","397ac9d4655ace60e7c2ffdf8329dc9e"],["/post/317f8360.html","a508f6036c31de9c89e92505f8d55bf6"],["/post/33cb1151.html","a774f04586d7e8dd27d53028c7509fa0"],["/post/34e57ffd.html","f37f3fae9b1d3c51f442f2a113879f04"],["/post/3d20c1d7.html","4b168e0640b8999eac4c1c7a3270a901"],["/post/3d24dcf9.html","b8544826f3fa7079a84dec0ead5355b1"],["/post/3f6c447b.html","54b7eed0d09795611cb388dd343d4b01"],["/post/490cdff9.html","b318736253d19108671eb8aa20e89ce6"],["/post/4a1111be.html","1f7b9ab59675e3f848eef00c2e3212eb"],["/post/4fa8e0c4.html","064c5594c35dca04fb83d00d87f1a963"],["/post/524e74d7.html","ef303e6684a47e54139fad30f51102a6"],["/post/539343bf.html","d08401b154737b70679ff7f2f99068ab"],["/post/54788f73.html","58ddce07b87b80602d9f63d07374b455"],["/post/563268dc.html","b79fd3309038ff659d7277a1bfd9c11a"],["/post/5ac88c70.html","a664425882d01c44811067de1743b7fc"],["/post/5bf55f4.html","a1bebe7fb7342ec9b17fd2e126c8c950"],["/post/5e87465f.html","e1e3848de032ac1fbbd6672f0155302f"],["/post/6016428b.html","cdd1d73306d44b2ff208308add76e5c1"],["/post/6208627e.html","dc93e15ef266eb602538810bf0498933"],["/post/64b51ed9.html","fb04ff8d035ab84a10f0e20ad160cfed"],["/post/659da5b.html","93599de1fdf710cae2cd3b141015ebae"],["/post/6c429b75.html","91e5297bb34f66f47bd3a2bbf83fe4cb"],["/post/721d4875.html","bf62d1459b03eb55be9a408e927adf42"],["/post/72e3b671.html","8191b15b4fedc5b477e8e013925a52c4"],["/post/730d8d6c.html","3af958e7381af1a66eec214bb1f74356"],["/post/74fc969.html","3595a22be1950b2759d2fe9ba9d44658"],["/post/78134e07.html","3de6e137700c78f222a091fd53f9f8c7"],["/post/78c07335.html","56aafd6e0e3a04f55cf9811e28cae4f7"],["/post/7901ad89.html","258834ba68e072923a741b0d7c34e7eb"],["/post/7b216a3b.html","84aeefd6c83343f3ace348f3532ef29a"],["/post/7b510e10.html","6c21636f766c7b54ab9503ce86ee93fe"],["/post/7db2942d.html","f3400ea37066802513d6aae2991a914d"],["/post/7e6c6990.html","b590f65a648f5194a0a0821fe3602c24"],["/post/7fa79d96.html","2c5f9b4b9ff01c0b0a9632632496f461"],["/post/855673ad.html","d0d709e92b8fd6f213373f82830a4345"],["/post/892a2328.html","d6ea9093d3db5bc6ed30af83506053fa"],["/post/8acb1976.html","c37e0ba0789f7fefa72d26209eae9086"],["/post/8e4fa41e.html","4e9b1004765c6aea393b595b6eabfa69"],["/post/8f488ef0.html","907dc2eed0ed02244080834de687fd84"],["/post/8ff08e27.html","88055943cadc8247faeac314c3914215"],["/post/9055d217.html","b0b2de421e77b3564460428d4ab7e751"],["/post/91ad9ce3.html","5e4133a0f7ee07747a440789b5090d4f"],["/post/96131cab.html","5c909b5857130cac51d62bd5d6ca2d2a"],["/post/96b5906.html","5021ca27804979f5a2e4105ceb9815d6"],["/post/970fcca5.html","24d572ef02f22141a499c42c175296ca"],["/post/9a246216.html","39016e296b2b6d895ab79c369ff89b4e"],["/post/a10c77a7.html","28a35f554e4b6c0d34b45fb13b23979d"],["/post/a708a60d.html","7be0af212881dab52bca27fbfaa6f2e1"],["/post/ad27c5a8.html","b5565441d26aae2488d9b8ebe386e68a"],["/post/b6c47025.html","01e401c0bf9323a8ff9fbd7f5412b336"],["/post/bd69ba8b.html","e0a7771f5a77c4475970fb2785d962ae"],["/post/bf7f3b65.html","c634e74e116ff90bd30ceb2a662062f4"],["/post/c3176455.html","6e22d2465cf51468c758b2f7ee63dd78"],["/post/cb80ff62.html","1abf6289d93f22ada7b3109911a6e742"],["/post/ce0e685a.html","de6fe7c162bd9a0d7dae5bca54254bc6"],["/post/ceb39ac4.html","3ba6cfddfa97ca8cedd91cf29c379a51"],["/post/cf413e35.html","d09b0c053514a148ba0ac8ea8673ed14"],["/post/d036071c.html","bb30ff28d604a3cfcb7329737493bd44"],["/post/de3bac1b.html","4b95a1f3e4a0842178f8c55dce5365d1"],["/post/df879792.html","b0825f879747faeb2bea1455608db641"],["/post/e008fc33.html","2ca2aada58f4c2d387329e66aef5997e"],["/post/e19da94a.html","b26b02a72151d20e46a3ed3132c8f5d2"],["/post/eb04e0a.html","f307e34ae41880d8698a47a16c63e4f7"],["/post/ecd67acc.html","c2efbd30ee8792f131dd1622ec767cd8"],["/post/ee040603.html","7254d4e9749218de552412d7830e141c"],["/post/f1601c3e.html","80b83db36d5bc82b25eadcbf110760c8"],["/post/f31a5a5b.html","201909f6d9e13f1da3ed5b6a63138218"],["/post/f5c535ea.html","cb19e6d000b643dc811de194f1db2f1d"],["/post/f7500981.html","19102b89a963d233c7dee54ac4874167"],["/post/f79807ee.html","e661fd8a8926dd50e68a71ead7ff517a"],["/post/f7de8aa8.html","01177b77f0706c63b5008cedf3a9a143"],["/post/f8239d66.html","9f8a93ab3e0ec485c0b2e0661e4e6ec6"],["/post/f9f5e0c2.html","754c61156742031cf90db40d9b9e0be9"],["/post/fa143992.html","ddadc051c87db88882aa6d3b6affb0bd"],["/post/fb77661f.html","678b67061fe673b9711ae19452308bc7"],["/post/fe1f88a1.html","6b0336867ad40483b6527c0f92926823"],["/post/fe57b0e4.html","56fb350cd85000a38cbc4367c6db2c0d"],["/post/fe816c3c.html","b5510f311dfb29835287625780a50084"],["/sw-register.js","3bd9bdb8bf7adbc7901ba5aad9f61b4b"],["/tags/Butterfly/index.html","cd7214a2a142aefb9cfa608ceeb51c15"],["/tags/Hexo/index.html","5c56221196563adb8676693bd8de0ec1"],["/tags/JVM/index.html","c99cc60570118a3409bd6c88df0238bf"],["/tags/Linux/index.html","279cbb2cfe376469339a36269367c71d"],["/tags/SSH/index.html","94e9db3a62a7fe5c98812b10aaac7680"],["/tags/index.html","bb7867373dcd8879821dd98ccdfbdccd"],["/tags/spring/index.html","feed08d5eb5b78f277232f80b9e824a3"],["/tags/vue/index.html","58551153961f644e8c883245b1111c9e"],["/tags/一问一答/index.html","bd61adfe75061a51dee902297857521c"],["/tags/个人见解/index.html","aa2a5f4cb86f44d828e118b8ffb682b5"],["/tags/大数据/index.html","d5d2dae3f7ab0d5ca27e60e617b6be60"],["/tags/大数据/page/2/index.html","96b431f0eec561b1d92037be8bec8a26"],["/tags/大数据/page/3/index.html","86541532595b6f5150ccb279e0506e11"],["/tags/学习笔记/index.html","ff2b105076bbb6d626973cf5ddfe3a2b"],["/tags/安装教程/index.html","20e8dd469d64252d85f15c4cb6a8c259"],["/tags/实战/index.html","349318cc9213e9856bca29c678a1cd8f"],["/tags/并发编程/index.html","266241f50d0c031e05523b6e2f6f18a3"],["/tags/数据库设计/index.html","28b45a7b9321861bf1cc299bcabb9c43"],["/tags/数据结构/index.html","7be7635593176302264306f4e3ada5b9"],["/tags/案例/index.html","1220d419ec75a17e24081305ff8b82c1"],["/tags/注解/index.html","3ef47483d0dda519a1c8f99c9b3a5100"],["/tags/源码分析/index.html","f717492fc7583de335a87d5376c14565"],["/tags/程序员/index.html","55a6550270b8a01d0cf254c090413f67"],["/tags/笔记/index.html","e38cba65ab56522f59016662a4b6cb98"],["/tags/算法/index.html","de45ca4964908582eae345c9701eacf7"],["/tags/设计模式/index.html","832fc46807e63f3c2c99b35f05f5cb96"],["/tags/设计模式/page/2/index.html","8734b5634b8fecafa0f0734aa8b50f0d"],["/tags/设计模式/page/3/index.html","d648e2ad6535ed51e24f10e3453efa15"],["/tags/软技能/index.html","7b7216a16bfacd3753e83cc81d2e82a5"],["/tags/软考/index.html","1689a2d26b26279f733851fb8fea4aca"],["/talk/index.html","d95f47edc284cd729a05f138143d391f"]];
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
