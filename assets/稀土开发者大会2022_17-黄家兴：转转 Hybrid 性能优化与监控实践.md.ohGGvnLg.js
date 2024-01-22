import{_ as p,c as t,o as e,X as c}from"./chunks/framework.a0KWhRid.js";const o=JSON.parse('{"title":"黄家兴：转转 Hybrid 性能优化与监控实践","description":"","frontmatter":{},"headers":[],"relativePath":"稀土开发者大会2022/17-黄家兴：转转 Hybrid 性能优化与监控实践.md","filePath":"稀土开发者大会2022/17-黄家兴：转转 Hybrid 性能优化与监控实践.md","lastUpdated":1705934187000}'),b={name:"稀土开发者大会2022/17-黄家兴：转转 Hybrid 性能优化与监控实践.md"},a=c('<h1 id="黄家兴-转转-hybrid-性能优化与监控实践" tabindex="-1">黄家兴：转转 Hybrid 性能优化与监控实践 <a class="header-anchor" href="#黄家兴-转转-hybrid-性能优化与监控实践" aria-label="Permalink to &quot;黄家兴：转转 Hybrid 性能优化与监控实践&quot;">​</a></h1><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91681783e8d04420ae3daea944121994~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片1.jpeg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8f46d8dc40649a7af8347a59574c939~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片2.jpeg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7738b2b53b144dfd8a84d98df7306a83~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片3.jpeg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3ab508a9ef9409d94eb24d94117e838~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片4.jpeg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fa3f115815a45578991f1d2d9f1b1cb~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片5.jpeg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08eb034d1ea5429a8a16e68829d3d2bf~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片6.jpeg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9cdb4d5825b84072ad93707e17d8e8c6~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片7.jpeg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d2173eb369447d8aeb4b45bdef03d0b~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片8.jpeg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96f4c1a2478442cd9abead57193ad32c~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片9.jpeg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10ad015a918f44dca0d8a566ad745e7c~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片10.jpeg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bafe1916e854ea5a74ac15280e5a9ad~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片11.jpeg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76f43ba91ee142679447980532dad143~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片12.jpeg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/758482fa7d8f4f5a89933c354f7ab361~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片13.jpeg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ec964c44344bf7807cd3dd5eb83377~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片14.jpeg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4021fa874b0149dfa910ae424ed87e1d~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片15.jpeg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4013d1ea7964b00a8b8d172c89b46b9~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片16.jpeg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b18bac8993a446eb852236c951086db~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片17.jpeg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7df787e5e0e849c9909707be67b06c7b~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片18.jpeg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a753e5590af4114b176665b32c21a05~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片19.jpeg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3433bd9894d04d0cac9a35289c1b6dab~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片20.jpeg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d32bb8b9de742978517698eb635b2c5~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片21.jpeg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/787ee25139b542f1a99226e2fc500021~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片22.jpeg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a73d7199a4ed474abdec4e4c4d722ef4~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片23.jpeg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/823a5fdfd0914906bf0948c32bfe02b6~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片24.jpeg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0623008c3f14e42a0aced0fde5f3d60~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片25.jpeg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5914b9b1c55c4d7a9685bb07391ecb67~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片26.jpeg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c45930daa9524893bc7984f383f8d3ae~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片27.jpeg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1691c525d61143679343d93aa148665c~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片28.jpeg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/85f0081ffbb643feae74b703a6dd8b42~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片29.jpeg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3de76ce3ea4415aa26216860040afb7~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片30.jpeg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71e901b5d2a54336921b5cf145515477~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片31.jpeg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/23f9d9ab65e245a0bb28664c21de3524~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片32.jpeg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e76205cb9fdb41e58c32c5b8700e8ff1~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片33.jpeg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13026d8ad34a4633b85612e8358b5c6b~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片34.jpeg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5085b8454cb6471f85ff79b0f226c964~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片35.jpeg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/678b53550130400fafc3907f4883807c~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片36.jpeg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e2a950422ce43638af5ad8e30d8eea8~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片37.jpeg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/319500428fff4df4aa8ff8befca317e7~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="幻灯片38.jpeg"></p><p><a href="https://juejin.cn/book/7127092198096502822/section/7127231803085029408" target="_blank" rel="noreferrer">原文地址</a></p>',40),f=[a];function j(i,m,s,u,k,g){return e(),t("div",null,f)}const d=p(b,[["render",j]]);export{o as __pageData,d as default};
