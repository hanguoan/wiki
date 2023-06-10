export const data = JSON.parse("{\"key\":\"v-3623fc05\",\"path\":\"/basic/linux/qa/curl-https.html\",\"title\":\"证书相关问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"Linux\",\"tag\":[\"常见问题\"],\"description\":\"证书相关问题 curl https报错: curl: (35) SSL connect error 原因：curl默认支持https是nss，而不是openssl，需要换成openss 源码编译curl cd /usr/local/src/ wget http://curl.haxx.se/download/archeology/curl-7.19.7.tar.gz tar -zxf curl-7.19.7.tar.gz cd curl-7.19.7 ./configure --without-nss --with-ssl make make install\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/basic/linux/qa/curl-https.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"证书相关问题\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"证书相关问题 curl https报错: curl: (35) SSL connect error 原因：curl默认支持https是nss，而不是openssl，需要换成openss 源码编译curl cd /usr/local/src/ wget http://curl.haxx.se/download/archeology/curl-7.19.7.tar.gz tar -zxf curl-7.19.7.tar.gz cd curl-7.19.7 ./configure --without-nss --with-ssl make make install\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"常见问题\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"证书相关问题\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"curl https报错: curl: (35) SSL connect error\",\"slug\":\"curl-https报错-curl-35-ssl-connect-error\",\"link\":\"#curl-https报错-curl-35-ssl-connect-error\",\"children\":[]},{\"level\":2,\"title\":\"ca证书过期导致请求错误\",\"slug\":\"ca证书过期导致请求错误\",\"link\":\"#ca证书过期导致请求错误\",\"children\":[]},{\"level\":2,\"title\":\"老交叉根过期\",\"slug\":\"老交叉根过期\",\"link\":\"#老交叉根过期\",\"children\":[]}],\"readingTime\":{\"minutes\":0.54,\"words\":162},\"filePathRelative\":\"basic/linux/qa/curl-https.md\",\"excerpt\":\"<h1> 证书相关问题</h1>\\n<h2> curl https报错: curl: (35) SSL connect error</h2>\\n<p>原因：curl默认支持https是nss，而不是openssl，需要换成openss</p>\\n<p>源码编译curl</p>\\n<div class=\\\"language-text line-numbers-mode\\\" data-ext=\\\"text\\\"><pre class=\\\"language-text\\\"><code>cd /usr/local/src/\\nwget http://curl.haxx.se/download/archeology/curl-7.19.7.tar.gz\\ntar -zxf curl-7.19.7.tar.gz\\ncd curl-7.19.7\\n./configure --without-nss --with-ssl\\nmake\\nmake install\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

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
