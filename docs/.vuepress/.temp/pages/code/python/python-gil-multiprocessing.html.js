export const data = JSON.parse("{\"key\":\"v-973f5452\",\"path\":\"/code/python/python-gil-multiprocessing.html\",\"title\":\"10.1 多进程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"Python\",\"description\":\"10.1 多进程 GIL CPython 在解释器进程级别有一把锁，叫做GIL，即全局解释器锁。 GIL 保证CPython进程中，只有一个线程执行字节码。甚至是在多核CPU的情况下，也只允许同时只能有一个CPU核心上运行该进程的一个线程。 CPython中 IO密集型，某个线程阻塞，GIL会释放，就会调度其他就绪线程 CPU密集型，当前线程可能会连续的获得GIL，导致其它线程几乎无法使用CPU 在CPython中由于有GIL存在，IO密集型，使用多线程较为合算；CPU密集型，使用多进程，要绕开GIL\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/code/python/python-gil-multiprocessing.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"10.1 多进程\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"10.1 多进程 GIL CPython 在解释器进程级别有一把锁，叫做GIL，即全局解释器锁。 GIL 保证CPython进程中，只有一个线程执行字节码。甚至是在多核CPU的情况下，也只允许同时只能有一个CPU核心上运行该进程的一个线程。 CPython中 IO密集型，某个线程阻塞，GIL会释放，就会调度其他就绪线程 CPU密集型，当前线程可能会连续的获得GIL，导致其它线程几乎无法使用CPU 在CPython中由于有GIL存在，IO密集型，使用多线程较为合算；CPU密集型，使用多进程，要绕开GIL\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"10.1 多进程\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"GIL\",\"slug\":\"gil\",\"link\":\"#gil\",\"children\":[]},{\"level\":2,\"title\":\"多进程\",\"slug\":\"多进程\",\"link\":\"#多进程\",\"children\":[{\"level\":3,\"title\":\"multiprocessing\",\"slug\":\"multiprocessing\",\"link\":\"#multiprocessing\",\"children\":[]},{\"level\":3,\"title\":\"进程间同步\",\"slug\":\"进程间同步\",\"link\":\"#进程间同步\",\"children\":[]},{\"level\":3,\"title\":\"多进程、多线程的选择\",\"slug\":\"多进程、多线程的选择\",\"link\":\"#多进程、多线程的选择\",\"children\":[]}]},{\"level\":2,\"title\":\"concurrent.futures包\",\"slug\":\"concurrent-futures包\",\"link\":\"#concurrent-futures包\",\"children\":[{\"level\":3,\"title\":\"ThreadPoolExecutor对象\",\"slug\":\"threadpoolexecutor对象\",\"link\":\"#threadpoolexecutor对象\",\"children\":[]},{\"level\":3,\"title\":\"ProcessPoolExecutor对象\",\"slug\":\"processpoolexecutor对象\",\"link\":\"#processpoolexecutor对象\",\"children\":[]}]}],\"readingTime\":{\"minutes\":6.81,\"words\":2043},\"filePathRelative\":\"code/python/python-gil-multiprocessing.md\",\"excerpt\":\"<h1> 10.1 多进程</h1>\\n<h2> GIL</h2>\\n<p>CPython 在解释器进程级别有一把锁，叫做GIL，即全局解释器锁。</p>\\n<p>GIL 保证CPython进程中，只有一个线程执行字节码。甚至是在多核CPU的情况下，也只允许同时只能有一个CPU核心上运行该进程的一个线程。</p>\\n<p>CPython中</p>\\n<ul>\\n<li>IO密集型，某个线程阻塞，GIL会释放，就会调度其他就绪线程</li>\\n<li>CPU密集型，当前线程可能会连续的获得GIL，导致其它线程几乎无法使用CPU</li>\\n<li>在CPython中由于有GIL存在，IO密集型，使用多线程较为合算；CPU密集型，使用多进程，要绕开GIL</li>\\n</ul>\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

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
