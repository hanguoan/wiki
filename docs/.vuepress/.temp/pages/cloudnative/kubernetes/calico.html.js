export const data = JSON.parse("{\"key\":\"v-0abdc785\",\"path\":\"/cloudnative/kubernetes/calico.html\",\"title\":\"Calico\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"云原生\",\"tag\":[\"Kubernetes\"],\"description\":\"Calico 架构 简单说一下 Calico 架构，Calico 是一个基于三层的数据中心网络方案，可作为 CNI 插件为运行于 Kubernetes 中的容器提供基于 TCP/IP 三层的网络通信方案，也可与 OpenStack 这种 IaaS 云架构集成，利用 BGP，IPIP 等协议为工作负载提供网络联通功能，能够提供高效可控的 VM、容器、物理机之间的通信。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/cloudnative/kubernetes/calico.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Calico\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Calico 架构 简单说一下 Calico 架构，Calico 是一个基于三层的数据中心网络方案，可作为 CNI 插件为运行于 Kubernetes 中的容器提供基于 TCP/IP 三层的网络通信方案，也可与 OpenStack 这种 IaaS 云架构集成，利用 BGP，IPIP 等协议为工作负载提供网络联通功能，能够提供高效可控的 VM、容器、物理机之间的通信。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Kubernetes\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Calico\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"架构\",\"slug\":\"架构\",\"link\":\"#架构\",\"children\":[]},{\"level\":2,\"title\":\"网络模式\",\"slug\":\"网络模式\",\"link\":\"#网络模式\",\"children\":[{\"level\":3,\"title\":\"vxlan\",\"slug\":\"vxlan\",\"link\":\"#vxlan\",\"children\":[]},{\"level\":3,\"title\":\"IPIP\",\"slug\":\"ipip\",\"link\":\"#ipip\",\"children\":[]},{\"level\":3,\"title\":\"BGP\",\"slug\":\"bgp\",\"link\":\"#bgp\",\"children\":[]}]},{\"level\":2,\"title\":\"安装配置\",\"slug\":\"安装配置\",\"link\":\"#安装配置\",\"children\":[]},{\"level\":2,\"title\":\"版本升级\",\"slug\":\"版本升级\",\"link\":\"#版本升级\",\"children\":[]},{\"level\":2,\"title\":\"监控\",\"slug\":\"监控\",\"link\":\"#监控\",\"children\":[]},{\"level\":2,\"title\":\"TOR 模式 改为 RR 路由反射模式\",\"slug\":\"tor-模式-改为-rr-路由反射模式\",\"link\":\"#tor-模式-改为-rr-路由反射模式\",\"children\":[]},{\"level\":2,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}],\"readingTime\":{\"minutes\":4.08,\"words\":1223},\"filePathRelative\":\"cloudnative/kubernetes/calico.md\",\"excerpt\":\"<h1> Calico</h1>\\n<h2> 架构</h2>\\n<p>简单说一下 Calico 架构，Calico 是一个基于三层的数据中心网络方案，可作为 CNI 插件为运行于 Kubernetes 中的容器提供基于 TCP/IP 三层的网络通信方案，也可与 OpenStack 这种 IaaS 云架构集成，利用 BGP，IPIP 等协议为工作负载提供网络联通功能，能够提供高效可控的 VM、容器、物理机之间的通信。</p>\\n<p><img src=\\\"https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/640.jpeg\\\" alt=\\\"图片\\\"></p>\\n\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
