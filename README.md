避免单例 store 共享状态，每一个请求都应该是一个全新的 store

预渲染：满足对首屏渲染速度要求不高，但对 SEO 要求，同时不引入 ssr 技术的场景需求

- https://github.com/prerender/prerender

大体架构流程：

- 部署 prerender 服务器
- nginx 做判断识别 user/爬虫引擎
- user => react服务器, 爬虫 => prerender 服务器
- prerender根据爬虫访问的路径，内部起一个浏览器访问该路径，等待其渲染完成，最后拿到页面的DOM，渲染成html返回给爬虫
