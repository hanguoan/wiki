export const data = JSON.parse("{\"key\":\"v-00ff071b\",\"path\":\"/basic/linux/qa/du-df-diff.html\",\"title\":\"Linux，du、df统计的硬盘使用情况不一致问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"Linux\",\"tag\":[\"常见问题\"],\"description\":\"Linux，du、df统计的硬盘使用情况不一致问题 在运维Linux服务器时，会碰到需要查看硬盘空间的情况，这时候，通常会使用df -lh命令来检查每个挂载了文件系统的硬盘的总量和已使用量，或者，可以使用du -sh [directory]命令来统计某个目录下所有文件的空间占用。 在使用df、du命令时，常常会遇到统计的硬盘使用情况不一致的问题。比如du统计根目录下文件总共大小为2G，而df判断挂载在根目录的硬盘已用空间达到了3G，20G甚至更多。发生这种情况，有以下三种原因：\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/basic/linux/qa/du-df-diff.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Linux，du、df统计的硬盘使用情况不一致问题\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Linux，du、df统计的硬盘使用情况不一致问题 在运维Linux服务器时，会碰到需要查看硬盘空间的情况，这时候，通常会使用df -lh命令来检查每个挂载了文件系统的硬盘的总量和已使用量，或者，可以使用du -sh [directory]命令来统计某个目录下所有文件的空间占用。 在使用df、du命令时，常常会遇到统计的硬盘使用情况不一致的问题。比如du统计根目录下文件总共大小为2G，而df判断挂载在根目录的硬盘已用空间达到了3G，20G甚至更多。发生这种情况，有以下三种原因：\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"常见问题\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Linux，du、df统计的硬盘使用情况不一致问题\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"预留空间\",\"slug\":\"预留空间\",\"link\":\"#预留空间\",\"children\":[]},{\"level\":2,\"title\":\"幻影文件（phantom file）\",\"slug\":\"幻影文件-phantom-file\",\"link\":\"#幻影文件-phantom-file\",\"children\":[]},{\"level\":2,\"title\":\"未统计到的文件\",\"slug\":\"未统计到的文件\",\"link\":\"#未统计到的文件\",\"children\":[]}],\"readingTime\":{\"minutes\":2.46,\"words\":739},\"filePathRelative\":\"basic/linux/qa/du-df-diff.md\",\"excerpt\":\"<h1> Linux，du、df统计的硬盘使用情况不一致问题</h1>\\n<p>在运维Linux服务器时，会碰到需要查看硬盘空间的情况，这时候，通常会使用<code>df -lh</code>命令来检查每个挂载了文件系统的硬盘的总量和已使用量，或者，可以使用<code>du -sh [directory]</code>命令来统计某个目录下所有文件的空间占用。</p>\\n<p>在使用<code>df、du</code>命令时，常常会遇到统计的硬盘使用情况不一致的问题。比如du统计根目录下文件总共大小为2G，而df判断挂载在根目录的硬盘已用空间达到了3G，20G甚至更多。发生这种情况，有以下三种原因：</p>\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

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
