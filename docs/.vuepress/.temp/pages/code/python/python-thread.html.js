export const data = JSON.parse("{\"key\":\"v-6d90a948\",\"path\":\"/code/python/python-thread.html\",\"title\":\"10.2 多线程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"Python\",\"description\":\"10.2 多线程 线程的状态 就绪（Ready）：线程能够运行，但在等待被调度。可能线程刚刚创建启动，或刚刚从阻塞中恢复，或者被其他线程抢占 运行（Running）：线程正在运行 阻塞（Blocked）：线程等待外部事件发生而无法运行，如 I/O 操作 终止（Terminated）：线程完成，或退出，或被取消\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/code/python/python-thread.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"10.2 多线程\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"10.2 多线程 线程的状态 就绪（Ready）：线程能够运行，但在等待被调度。可能线程刚刚创建启动，或刚刚从阻塞中恢复，或者被其他线程抢占 运行（Running）：线程正在运行 阻塞（Blocked）：线程等待外部事件发生而无法运行，如 I/O 操作 终止（Terminated）：线程完成，或退出，或被取消\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"10.2 多线程\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"线程的状态\",\"slug\":\"线程的状态\",\"link\":\"#线程的状态\",\"children\":[]},{\"level\":2,\"title\":\"Python的线程开发\",\"slug\":\"python的线程开发\",\"link\":\"#python的线程开发\",\"children\":[{\"level\":3,\"title\":\"Thread类\",\"slug\":\"thread类\",\"link\":\"#thread类\",\"children\":[]},{\"level\":3,\"title\":\"线程启动\",\"slug\":\"线程启动\",\"link\":\"#线程启动\",\"children\":[]},{\"level\":3,\"title\":\"线程退出\",\"slug\":\"线程退出\",\"link\":\"#线程退出\",\"children\":[]},{\"level\":3,\"title\":\"线程的传参\",\"slug\":\"线程的传参\",\"link\":\"#线程的传参\",\"children\":[]},{\"level\":3,\"title\":\"threading 的属性和方法\",\"slug\":\"threading-的属性和方法\",\"link\":\"#threading-的属性和方法\",\"children\":[]},{\"level\":3,\"title\":\"Thread 实例的属性和方法\",\"slug\":\"thread-实例的属性和方法\",\"link\":\"#thread-实例的属性和方法\",\"children\":[]}]},{\"level\":2,\"title\":\"多线程\",\"slug\":\"多线程\",\"link\":\"#多线程\",\"children\":[]},{\"level\":2,\"title\":\"线程安全\",\"slug\":\"线程安全\",\"link\":\"#线程安全\",\"children\":[]},{\"level\":2,\"title\":\"deamon 线程\",\"slug\":\"deamon-线程\",\"link\":\"#deamon-线程\",\"children\":[]},{\"level\":2,\"title\":\"join 方法\",\"slug\":\"join-方法\",\"link\":\"#join-方法\",\"children\":[]},{\"level\":2,\"title\":\"daemon线程应用场景\",\"slug\":\"daemon线程应用场景\",\"link\":\"#daemon线程应用场景\",\"children\":[]},{\"level\":2,\"title\":\"threading.local 类\",\"slug\":\"threading-local-类\",\"link\":\"#threading-local-类\",\"children\":[]}],\"readingTime\":{\"minutes\":11.7,\"words\":3511},\"filePathRelative\":\"code/python/python-thread.md\",\"excerpt\":\"<h1> 10.2 多线程</h1>\\n<h2> 线程的状态</h2>\\n<ul>\\n<li>就绪（Ready）：线程能够运行，但在等待被调度。可能线程刚刚创建启动，或刚刚从阻塞中恢复，或者被其他线程抢占</li>\\n<li>运行（Running）：线程正在运行</li>\\n<li>阻塞（Blocked）：线程等待外部事件发生而无法运行，如 I/O 操作</li>\\n<li>终止（Terminated）：线程完成，或退出，或被取消</li>\\n</ul>\\n<p><img src=\\\"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/thread.png\\\" alt=\\\"thread\\\"></p>\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

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
