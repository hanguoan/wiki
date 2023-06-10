export const data = JSON.parse("{\"key\":\"v-34aff614\",\"path\":\"/code/shell/part5/36_2_shell_wrappers.html\",\"title\":\"36.2 shell wrappers\",\"lang\":\"zh-CN\",\"frontmatter\":{\"author\":\"LinuxStory\",\"category\":\"Linux\",\"tag\":[\"Bash\"],\"description\":\"36.2 shell wrappers wrapper是一个包含系统命令和工具的脚本，脚本会把一些参数传递给这些（脚本内的）命令。将一个复杂的命令封装成一个wrapper是为了调用它时比较简单好记，特别在使用sed和awk命令时会这么做。 sed或awk脚本通常在命令行下调用时是sed -e '命令'或者awk '命令'。在Bash脚本中嵌入这些命令会让它们在调用时很简单，并且能够被重用。使用这种方法可以将sed和awk的优势统一起来，比如将sed命令处理的结果通过管道传递给awk继续处理。将这些保存成为一个可执行文件，你可以重复调用它的原始版本或者修改版本，而不用在命令行里反复敲冗长的命令。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/code/shell/part5/36_2_shell_wrappers.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"36.2 shell wrappers\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"36.2 shell wrappers wrapper是一个包含系统命令和工具的脚本，脚本会把一些参数传递给这些（脚本内的）命令。将一个复杂的命令封装成一个wrapper是为了调用它时比较简单好记，特别在使用sed和awk命令时会这么做。 sed或awk脚本通常在命令行下调用时是sed -e '命令'或者awk '命令'。在Bash脚本中嵌入这些命令会让它们在调用时很简单，并且能够被重用。使用这种方法可以将sed和awk的优势统一起来，比如将sed命令处理的结果通过管道传递给awk继续处理。将这些保存成为一个可执行文件，你可以重复调用它的原始版本或者修改版本，而不用在命令行里反复敲冗长的命令。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"LinuxStory\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Bash\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"36.2 shell wrappers\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"LinuxStory\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Example 36-1. shell wrapper\",\"slug\":\"example-36-1-shell-wrapper\",\"link\":\"#example-36-1-shell-wrapper\",\"children\":[]},{\"level\":2,\"title\":\"Example 36-2. 稍微复杂一点的 shell wrapper\",\"slug\":\"example-36-2-稍微复杂一点的-shell-wrapper\",\"link\":\"#example-36-2-稍微复杂一点的-shell-wrapper\",\"children\":[]},{\"level\":2,\"title\":\"Example 36-3. 一个通用的写日志文件的 shell wrapper\",\"slug\":\"example-36-3-一个通用的写日志文件的-shell-wrapper\",\"link\":\"#example-36-3-一个通用的写日志文件的-shell-wrapper\",\"children\":[]},{\"level\":2,\"title\":\"Example 36-4. 关于awk脚本的 shell wrapper\",\"slug\":\"example-36-4-关于awk脚本的-shell-wrapper\",\"link\":\"#example-36-4-关于awk脚本的-shell-wrapper\",\"children\":[]},{\"level\":2,\"title\":\"Example 36-5. 另一个关于awk的 shell wrapper\",\"slug\":\"example-36-5-另一个关于awk的-shell-wrapper\",\"link\":\"#example-36-5-另一个关于awk的-shell-wrapper\",\"children\":[]},{\"level\":2,\"title\":\"Example 36-6. Perl嵌入Bash脚本\",\"slug\":\"example-36-6-perl嵌入bash脚本\",\"link\":\"#example-36-6-perl嵌入bash脚本\",\"children\":[]},{\"level\":2,\"title\":\"Example 36-7. Bash和Perl脚本合并\",\"slug\":\"example-36-7-bash和perl脚本合并\",\"link\":\"#example-36-7-bash和perl脚本合并\",\"children\":[]},{\"level\":2,\"title\":\"Example 36-8. Python嵌入Bash脚本\",\"slug\":\"example-36-8-python嵌入bash脚本\",\"link\":\"#example-36-8-python嵌入bash脚本\",\"children\":[]},{\"level\":2,\"title\":\"Example 36-9. 会讲话的脚本\",\"slug\":\"example-36-9-会讲话的脚本\",\"link\":\"#example-36-9-会讲话的脚本\",\"children\":[]}],\"readingTime\":{\"minutes\":6.36,\"words\":1908},\"filePathRelative\":\"code/shell/part5/36_2_shell_wrappers.md\",\"excerpt\":\"<h1> 36.2 shell wrappers</h1>\\n<p>wrapper是一个包含系统命令和工具的脚本，脚本会把一些参数传递给这些（脚本内的）命令。将一个复杂的命令封装成一个wrapper是为了调用它时比较简单好记，特别在使用sed和awk命令时会这么做。</p>\\n<p>sed或awk脚本通常在命令行下调用时是sed -e '命令'或者awk '命令'。在Bash脚本中嵌入这些命令会让它们在调用时很简单，并且能够被重用。使用这种方法可以将sed和awk的优势统一起来，比如将sed命令处理的结果通过管道传递给awk继续处理。将这些保存成为一个可执行文件，你可以重复调用它的原始版本或者修改版本，而不用在命令行里反复敲冗长的命令。</p>\",\"copyright\":{\"author\":\"LinuxStory\"},\"autoDesc\":true}")

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
