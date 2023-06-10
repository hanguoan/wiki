export const data = JSON.parse("{\"key\":\"v-24848cfb\",\"path\":\"/code/python/access-control.html\",\"title\":\"9.2 访问控制和属性装饰器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"Python\",\"description\":\"9.2 访问控制和属性装饰器 访问控制 私有（Private） 成员 在 Python 中，在类变量或实例变量前使用两个下划线的变量，称为私有成员，包括私有属性、私有方法。 class Person: def __init__(self, name, age=18): self.a = '1' self.__name = name self.__age = age def __showage(self): print(self.__age) print(Person.__name) # 都不可以调用 print(Person.__showage) tom = Person('tom') print(tom.__name) print(tom.__showage)\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/code/python/access-control.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"9.2 访问控制和属性装饰器\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"9.2 访问控制和属性装饰器 访问控制 私有（Private） 成员 在 Python 中，在类变量或实例变量前使用两个下划线的变量，称为私有成员，包括私有属性、私有方法。 class Person: def __init__(self, name, age=18): self.a = '1' self.__name = name self.__age = age def __showage(self): print(self.__age) print(Person.__name) # 都不可以调用 print(Person.__showage) tom = Person('tom') print(tom.__name) print(tom.__showage)\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"9.2 访问控制和属性装饰器\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"访问控制\",\"slug\":\"访问控制\",\"link\":\"#访问控制\",\"children\":[]},{\"level\":2,\"title\":\"属性装饰器\",\"slug\":\"属性装饰器\",\"link\":\"#属性装饰器\",\"children\":[]}],\"readingTime\":{\"minutes\":3.13,\"words\":940},\"filePathRelative\":\"code/python/access-control.md\",\"excerpt\":\"<h1> 9.2 访问控制和属性装饰器</h1>\\n<h2> 访问控制</h2>\\n<p><strong>私有（Private） 成员</strong></p>\\n<p>在 Python 中，在类变量或实例变量前使用两个下划线的变量，称为私有成员，包括私有属性、私有方法。</p>\\n<div class=\\\"language-python line-numbers-mode\\\" data-ext=\\\"py\\\"><pre class=\\\"language-python\\\"><code><span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">Person</span><span class=\\\"token punctuation\\\">:</span>\\n    <span class=\\\"token keyword\\\">def</span> <span class=\\\"token function\\\">__init__</span><span class=\\\"token punctuation\\\">(</span>self<span class=\\\"token punctuation\\\">,</span> name<span class=\\\"token punctuation\\\">,</span> age<span class=\\\"token operator\\\">=</span><span class=\\\"token number\\\">18</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">:</span>\\n        self<span class=\\\"token punctuation\\\">.</span>a <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'1'</span>\\n        self<span class=\\\"token punctuation\\\">.</span>__name <span class=\\\"token operator\\\">=</span> name\\n        self<span class=\\\"token punctuation\\\">.</span>__age <span class=\\\"token operator\\\">=</span> age\\n\\n    <span class=\\\"token keyword\\\">def</span> <span class=\\\"token function\\\">__showage</span><span class=\\\"token punctuation\\\">(</span>self<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">:</span>\\n        <span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span>self<span class=\\\"token punctuation\\\">.</span>__age<span class=\\\"token punctuation\\\">)</span>\\n\\n<span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span>Person<span class=\\\"token punctuation\\\">.</span>__name<span class=\\\"token punctuation\\\">)</span>  <span class=\\\"token comment\\\"># 都不可以调用</span>\\n<span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span>Person<span class=\\\"token punctuation\\\">.</span>__showage<span class=\\\"token punctuation\\\">)</span>\\ntom <span class=\\\"token operator\\\">=</span> Person<span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'tom'</span><span class=\\\"token punctuation\\\">)</span>\\n<span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span>tom<span class=\\\"token punctuation\\\">.</span>__name<span class=\\\"token punctuation\\\">)</span>\\n<span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span>tom<span class=\\\"token punctuation\\\">.</span>__showage<span class=\\\"token punctuation\\\">)</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

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
