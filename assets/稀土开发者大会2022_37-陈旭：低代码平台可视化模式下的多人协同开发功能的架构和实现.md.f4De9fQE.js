import{_ as p,c,o as t,X as b}from"./chunks/framework.a0KWhRid.js";const r=JSON.parse('{"title":"陈旭：低代码平台可视化模式下的多人协同开发功能的架构和实现","description":"","frontmatter":{},"headers":[],"relativePath":"稀土开发者大会2022/37-陈旭：低代码平台可视化模式下的多人协同开发功能的架构和实现.md","filePath":"稀土开发者大会2022/37-陈旭：低代码平台可视化模式下的多人协同开发功能的架构和实现.md","lastUpdated":1705934187000}'),a={name:"稀土开发者大会2022/37-陈旭：低代码平台可视化模式下的多人协同开发功能的架构和实现.md"},e=b('<h1 id="陈旭-低代码平台可视化模式下的多人协同开发功能的架构和实现" tabindex="-1">陈旭：低代码平台可视化模式下的多人协同开发功能的架构和实现 <a class="header-anchor" href="#陈旭-低代码平台可视化模式下的多人协同开发功能的架构和实现" aria-label="Permalink to &quot;陈旭：低代码平台可视化模式下的多人协同开发功能的架构和实现&quot;">​</a></h1><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bddc705c65f04a3ea0262344a6741c7a~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_01.jpg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e2ea766788e4b52b2b63e707c47d1c2~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_02.jpg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2811d448c7c54b949f9d3a114cd4471c~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_03.jpg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a1c41e8f9094112b4a11e3dcef03b9b~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_04.jpg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4cae42c6274549968e05948c0299198f~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_05.jpg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e5f51ca0cc44ae58d2c3de16619ae8c~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_06.jpg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5af2944c29f49d0bf01919093c69171~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_07.jpg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba85cce213ba411e9adb466b6088ea1c~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_08.jpg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b651df8d00634a9babbf9432241dd4f4~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_09.jpg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61ec15ac70e64bf19305832d2047c119~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_10.jpg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b9353a497334593b052036649fcb4e7~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_11.jpg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d73790a9b534946a5b55da1339c3bf2~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_12.jpg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbc808c0a5dc46a99ab0c5b2793119ab~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_13.jpg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f8b328bf51b3472591ed397af5d11985~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_14.jpg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f670b995c3844b883c0dfad86bd4010~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_15.jpg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1bae2a5557b14786abc618e417bb95dd~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_16.jpg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61b24264346646feb643bf21abb36e97~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_17.jpg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/765628a6407a4173a32b482c0f8c8c73~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_18.jpg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/747b4a61a7e6402593c2820ab4e6c601~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_19.jpg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/867b282dbe9a4c8593daaa831d03fe5f~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_20.jpg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9f727cc1007463f8a1130f45a77b960~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_21.jpg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8530da27c38a43e6bc8f80495ab1ecb8~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_22.jpg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f369b69e0594b92b8247f96b0e64ce6~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_23.jpg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56d58fafe2f240dbbee32cbe993c93c2~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_24.jpg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9bfacb6ab8b04372a3abdeb50ae33922~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_25.jpg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc99dfa33b63484ba0b356816872ef6f~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_26.jpg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0773955cdde41bebd28970475da26bf~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_27.jpg"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5fd104d27b9a4e82b8eef0fb98e5aefb~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_28.jpg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0334abf7ebff464bb7d4228297c24d7b~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_29.jpg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aaa9096d8573448685df76ae0c2f1d5a~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_30.jpg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47f07661a29341e39b46b29bc7509c48~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_31.jpg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c4bfc4f067540188526fd771bd35ec2~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_32.jpg"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21406d2adb5146deb4214edfbd07227e~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_33.jpg"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad0ed89a4df24c8991aefbdb351667cd~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_34.jpg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6daee2bb27d5466cb90c4b8b4a4fd828~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_35.jpg"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41f1fc7b639948fcb461ec5a2c2043f1~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="2022年稀土-陈旭-可视化开发模式下多人协同开发功能的架构和实现_页面_37.jpg"></p><p><a href="https://juejin.cn/book/7127092198096502822/section/7127553309098901537" target="_blank" rel="noreferrer">原文地址</a></p>',38),f=[e];function j(i,m,s,_,u,k){return t(),c("div",null,f)}const o=p(a,[["render",j]]);export{r as __pageData,o as default};
