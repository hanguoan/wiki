export const data = JSON.parse("{\"key\":\"v-34bd49ba\",\"path\":\"/code/shell/part5/27_arrays.html\",\"title\":\"27 数组\",\"lang\":\"zh-CN\",\"frontmatter\":{\"author\":\"LinuxStory\",\"category\":\"Linux\",\"tag\":[\"Bash\"],\"description\":\"27 数组 新版本的Bash支持一维数组。 数组元素可以使用符号variable[xx] 来初始化。另外，脚本可以使用declare -a variable语句来制定一个数组。 如果想引用一个数组元素（也就是取值），可以使用大括号，访问形式为 ${element[xx]} 。 例子 27-1. 简单的数组使用 #!/bin/bash area[11]=23 area[13]=37 area[51]=UFOs # 数组成员不一定非得是相邻或连续的。 # 数组的部分成员可以不被初始化。 # 数组中允许空缺元素。 # 实际上，保存着稀疏数据的数组（“稀疏数组”） #+ 在电子表格处理软件中是非常有用的。 echo -n \\\"area[11] = \\\" echo ${area[11]} # 需要{大括号}。 echo -n \\\"area[13] = \\\" echo ${area[13]} echo \\\"Contents of area[51] are ${area[51]}.\\\" # 没被初始化的数组成员打印为空值（null变量）。 echo -n \\\"area[43] = \\\" echo ${area[43]} echo \\\"(area[43] unassigned)\\\" echo # 两个数组元素的和被赋值给另一个数组元素。 area[5]=`expr ${area[11]} + ${area[13]}` echo \\\"area[5] = area[11] + area[13]\\\" echo -n \\\"area[5] = \\\" echo ${area[5]} area[6]=`expr ${area[11]} + ${area[51]}` echo \\\"area[6] = area[11] + area[51]\\\" echo -n \\\"area[6] = \\\" echo ${area[6]} # 这里会失败，是因为不允许整数与字符串相加。 echo; echo; echo # ----------------------------------------------------------------- # 另一个数组, \\\"area2\\\". # 另一种给数组变量赋值的方法... # array_name=( XXX YYY ZZZ ... ) area2=( zero one two three four ) echo -n \\\"area2[0] = \\\" echo ${area2[0]} # 啊哈，从0开始计算数组下标（也就是，数组的第一个元素为[0],而不是[1]). echo -n \\\"area2[1] = \\\" echo ${area2[1]} # [1] 是数组的第二个元素。 # ----------------------------------------------------------------- echo; echo; echo # ----------------------------------------------- # 第三个数组， \\\"area3\\\". # 另外一种给数组元素赋值的方法... # array_name=([xx]=XXX [yy]=YYY ...) area3=([17]=seventeen [24]=twenty-four) echo -n \\\"area3[17] = \\\" echo ${area3[17]} echo -n \\\"area3[24] = \\\" echo ${area3[24]} # ----------------------------------------------- exit 0\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/code/shell/part5/27_arrays.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"27 数组\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"27 数组 新版本的Bash支持一维数组。 数组元素可以使用符号variable[xx] 来初始化。另外，脚本可以使用declare -a variable语句来制定一个数组。 如果想引用一个数组元素（也就是取值），可以使用大括号，访问形式为 ${element[xx]} 。 例子 27-1. 简单的数组使用 #!/bin/bash area[11]=23 area[13]=37 area[51]=UFOs # 数组成员不一定非得是相邻或连续的。 # 数组的部分成员可以不被初始化。 # 数组中允许空缺元素。 # 实际上，保存着稀疏数据的数组（“稀疏数组”） #+ 在电子表格处理软件中是非常有用的。 echo -n \\\"area[11] = \\\" echo ${area[11]} # 需要{大括号}。 echo -n \\\"area[13] = \\\" echo ${area[13]} echo \\\"Contents of area[51] are ${area[51]}.\\\" # 没被初始化的数组成员打印为空值（null变量）。 echo -n \\\"area[43] = \\\" echo ${area[43]} echo \\\"(area[43] unassigned)\\\" echo # 两个数组元素的和被赋值给另一个数组元素。 area[5]=`expr ${area[11]} + ${area[13]}` echo \\\"area[5] = area[11] + area[13]\\\" echo -n \\\"area[5] = \\\" echo ${area[5]} area[6]=`expr ${area[11]} + ${area[51]}` echo \\\"area[6] = area[11] + area[51]\\\" echo -n \\\"area[6] = \\\" echo ${area[6]} # 这里会失败，是因为不允许整数与字符串相加。 echo; echo; echo # ----------------------------------------------------------------- # 另一个数组, \\\"area2\\\". # 另一种给数组变量赋值的方法... # array_name=( XXX YYY ZZZ ... ) area2=( zero one two three four ) echo -n \\\"area2[0] = \\\" echo ${area2[0]} # 啊哈，从0开始计算数组下标（也就是，数组的第一个元素为[0],而不是[1]). echo -n \\\"area2[1] = \\\" echo ${area2[1]} # [1] 是数组的第二个元素。 # ----------------------------------------------------------------- echo; echo; echo # ----------------------------------------------- # 第三个数组， \\\"area3\\\". # 另外一种给数组元素赋值的方法... # array_name=([xx]=XXX [yy]=YYY ...) area3=([17]=seventeen [24]=twenty-four) echo -n \\\"area3[17] = \\\" echo ${area3[17]} echo -n \\\"area3[24] = \\\" echo ${area3[24]} # ----------------------------------------------- exit 0\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"LinuxStory\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Bash\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"27 数组\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"LinuxStory\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":31.24,\"words\":9373},\"filePathRelative\":\"code/shell/part5/27_arrays.md\",\"excerpt\":\"<h1> 27 数组</h1>\\n<p>新版本的Bash支持一维数组。 数组元素可以使用符号<strong>variable[xx]</strong> 来初始化。另外，脚本可以使用<strong>declare -a variable</strong>语句来制定一个数组。 如果想引用一个数组元素（也就是取值），可以使用大括号，访问形式为 ${element[xx]} 。</p>\\n<p>例子 27-1. 简单的数组使用</p>\\n<div class=\\\"language-text line-numbers-mode\\\" data-ext=\\\"text\\\"><pre class=\\\"language-text\\\"><code>#!/bin/bash\\n\\narea[11]=23\\narea[13]=37\\narea[51]=UFOs\\n\\n#  数组成员不一定非得是相邻或连续的。\\n\\n#  数组的部分成员可以不被初始化。\\n#  数组中允许空缺元素。\\n#  实际上，保存着稀疏数据的数组（“稀疏数组”） \\n#+ 在电子表格处理软件中是非常有用的。\\n\\necho -n \\\"area[11] = \\\"\\necho ${area[11]}    #  需要{大括号}。\\n\\necho -n \\\"area[13] = \\\"\\necho ${area[13]}\\n\\necho \\\"Contents of area[51] are ${area[51]}.\\\"\\n\\n# 没被初始化的数组成员打印为空值（null变量）。\\necho -n \\\"area[43] = \\\"\\necho ${area[43]}\\necho \\\"(area[43] unassigned)\\\"\\n\\necho\\n\\n# 两个数组元素的和被赋值给另一个数组元素。\\narea[5]=`expr ${area[11]} + ${area[13]}`\\necho \\\"area[5] = area[11] + area[13]\\\"\\necho -n \\\"area[5] = \\\"\\necho ${area[5]}\\n\\narea[6]=`expr ${area[11]} + ${area[51]}`\\necho \\\"area[6] = area[11] + area[51]\\\"\\necho -n \\\"area[6] = \\\"\\necho ${area[6]}\\n# 这里会失败，是因为不允许整数与字符串相加。\\n\\necho; echo; echo\\n\\n# -----------------------------------------------------------------\\n# 另一个数组, \\\"area2\\\".\\n\\n# 另一种给数组变量赋值的方法...\\n# array_name=( XXX YYY ZZZ ... )\\n\\narea2=( zero one two three four )\\n\\necho -n \\\"area2[0] = \\\"\\necho ${area2[0]}\\n# 啊哈，从0开始计算数组下标（也就是，数组的第一个元素为[0],而不是[1]).\\n\\necho -n \\\"area2[1] = \\\"\\necho ${area2[1]}    # [1] 是数组的第二个元素。\\n# -----------------------------------------------------------------\\n\\necho; echo; echo\\n\\n# -----------------------------------------------\\n# 第三个数组， \\\"area3\\\".\\n# 另外一种给数组元素赋值的方法...\\n# array_name=([xx]=XXX [yy]=YYY ...)\\n\\narea3=([17]=seventeen [24]=twenty-four)\\n\\necho -n \\\"area3[17] = \\\"\\necho ${area3[17]}\\n\\necho -n \\\"area3[24] = \\\"\\necho ${area3[24]}\\n# -----------------------------------------------\\n\\nexit 0\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"author\":\"LinuxStory\"},\"autoDesc\":true}")

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
