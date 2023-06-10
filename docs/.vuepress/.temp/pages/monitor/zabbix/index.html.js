export const data = JSON.parse("{\"key\":\"v-0b0f120b\",\"path\":\"/monitor/zabbix/\",\"title\":\"1 zabbix4.4新功能\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":\"监控\",\"tag\":[\"Zabbix\"],\"description\":\"1 zabbix4.4新功能 探索Zabbix4.4新功能 https://www.zabbix.com/cn/whats_new_4_4 新一代的Zabbix Agent Go语言编写 用于监控各种服务和应用的插件框架 并发检查时确保状态正常(例如，保持持续的DB连接) 内置时间调度器（scheduler ），支持灵活的时间间隔 使用批量数据传输的高效的网络使用 用即将支持的更多平台嵌入式替换Linux上现有的代理 活动和告警功能升级：应用Webhooks和可编程逻辑 该功能简化了与外部系统的双向集成，允许从Zabbix UI一键访问工单系统中的case，在聊天中创建消息等等。可使用内置的JavaScript引擎定义所有处理逻辑，与外部通知和工单系统集成得到了极大的改进。 为Zabbix模板设置标准 我们为模板引入了一组标准和定义明确的 准则。 对于所有模板的创建者和维护者以及所有Zabbix用户来说，统一标准非常重要。 对XML/JSON文件的结构进行了极大的简化，仅使用文本编辑器即可手动编辑模板。大多数现有的模板都经过了改进以适应新的标准。 官方支持TimescaleDB 除了MySQL、PostgreSQL、Oracle和DB2之外，我们现在正式宣布官方支持TimescaleDB。 与传统的关系数据库相比，TimescaleDB有诸多有点：近乎线性的性能水平， 支持自动即时删除旧的历史数据，更容易维护等等。 监控项和触发器的知识库 Zabbix 4.4提供了对监控项和触发器的更直观的描述。这些信息为工程师提供了巨大的帮助， 为他们提供了关于收集监控项的意义和目的、问题细节和触发器的解决指令等所有可能的细节。 高级可视化功能 仪表板和相关的小工具在许多方面得到了改进，简化了创建和管理的过程， 增加了只需单击鼠标即可修改小工具参数的功能。现在仪表板网格尺寸极佳可支持超宽屏幕和大屏幕墙。 问题视图小工具增强支持聚合视图，并引入了一个新的小工具来显示图形原型。 此外，所有小工具现在都可以在无标题模式下显示。 条形图和聚合 Zabbix 4.4提供了条形图，graph widget现在支持使用各种聚合函数进行数据聚合。 这两个特性的结合使得长期数据分析和容量规划变得更加容易。 官方支持更多新平台 SUSE Linux Enterprise Server 15 Debian 10 Raspbian 10 Mac OS/X RHEL 8 用于Windows agent的MSI 请参阅下载 页面中的所有可用平台 云端一键部署 Zabbix容器或镜像已经上线以下国际主流云平台，国内版本即将依次上线： AWS Azure Google Cloud Platform Digital Ocean Docker 安全的自动注册功能 Zabbix的新版本支持可选的PSK加密，用于自动注册，并为添加的主机提供自动加密设置。 现在您可以将Zabbix设置为仅使用PSK，未加密或两者都允许自动注册网络设备。 预处理功能升级：高级JSONPath Zabbix现在支持JSONPath的高级排列，允许对JSON数据进行复杂的预处理，包括聚合和搜索。 预处理还可以用于低等级发现，这使得它成为一个非常强大的自动化发现工具。 用户宏的描述 用户宏命令是一个非常好的功能，它简化了Zabbix的配置，使大量的配置变得轻而易举。 对用户宏命令的描述支持将有助于记录每个宏命令的用途，使宏命令的管理更加容易。 更高效高级的数据收集 通过新的JSON格式的返回对象数组检查，WMI、JMX和ODBC相关项的数据收集和发现得到了改进。 我们还为VMWare监控增加了VMWare数据存储，为Linux平台增加了系统服务，为CSV到JSON的转换增加了新的预处理类型。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://clay-wangzhi.com/monitor/zabbix/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SRE运维进阶之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"1 zabbix4.4新功能\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1 zabbix4.4新功能 探索Zabbix4.4新功能 https://www.zabbix.com/cn/whats_new_4_4 新一代的Zabbix Agent Go语言编写 用于监控各种服务和应用的插件框架 并发检查时确保状态正常(例如，保持持续的DB连接) 内置时间调度器（scheduler ），支持灵活的时间间隔 使用批量数据传输的高效的网络使用 用即将支持的更多平台嵌入式替换Linux上现有的代理 活动和告警功能升级：应用Webhooks和可编程逻辑 该功能简化了与外部系统的双向集成，允许从Zabbix UI一键访问工单系统中的case，在聊天中创建消息等等。可使用内置的JavaScript引擎定义所有处理逻辑，与外部通知和工单系统集成得到了极大的改进。 为Zabbix模板设置标准 我们为模板引入了一组标准和定义明确的 准则。 对于所有模板的创建者和维护者以及所有Zabbix用户来说，统一标准非常重要。 对XML/JSON文件的结构进行了极大的简化，仅使用文本编辑器即可手动编辑模板。大多数现有的模板都经过了改进以适应新的标准。 官方支持TimescaleDB 除了MySQL、PostgreSQL、Oracle和DB2之外，我们现在正式宣布官方支持TimescaleDB。 与传统的关系数据库相比，TimescaleDB有诸多有点：近乎线性的性能水平， 支持自动即时删除旧的历史数据，更容易维护等等。 监控项和触发器的知识库 Zabbix 4.4提供了对监控项和触发器的更直观的描述。这些信息为工程师提供了巨大的帮助， 为他们提供了关于收集监控项的意义和目的、问题细节和触发器的解决指令等所有可能的细节。 高级可视化功能 仪表板和相关的小工具在许多方面得到了改进，简化了创建和管理的过程， 增加了只需单击鼠标即可修改小工具参数的功能。现在仪表板网格尺寸极佳可支持超宽屏幕和大屏幕墙。 问题视图小工具增强支持聚合视图，并引入了一个新的小工具来显示图形原型。 此外，所有小工具现在都可以在无标题模式下显示。 条形图和聚合 Zabbix 4.4提供了条形图，graph widget现在支持使用各种聚合函数进行数据聚合。 这两个特性的结合使得长期数据分析和容量规划变得更加容易。 官方支持更多新平台 SUSE Linux Enterprise Server 15 Debian 10 Raspbian 10 Mac OS/X RHEL 8 用于Windows agent的MSI 请参阅下载 页面中的所有可用平台 云端一键部署 Zabbix容器或镜像已经上线以下国际主流云平台，国内版本即将依次上线： AWS Azure Google Cloud Platform Digital Ocean Docker 安全的自动注册功能 Zabbix的新版本支持可选的PSK加密，用于自动注册，并为添加的主机提供自动加密设置。 现在您可以将Zabbix设置为仅使用PSK，未加密或两者都允许自动注册网络设备。 预处理功能升级：高级JSONPath Zabbix现在支持JSONPath的高级排列，允许对JSON数据进行复杂的预处理，包括聚合和搜索。 预处理还可以用于低等级发现，这使得它成为一个非常强大的自动化发现工具。 用户宏的描述 用户宏命令是一个非常好的功能，它简化了Zabbix的配置，使大量的配置变得轻而易举。 对用户宏命令的描述支持将有助于记录每个宏命令的用途，使宏命令的管理更加容易。 更高效高级的数据收集 通过新的JSON格式的返回对象数组检查，WMI、JMX和ODBC相关项的数据收集和发现得到了改进。 我们还为VMWare监控增加了VMWare数据存储，为Linux平台增加了系统服务，为CSV到JSON的转换增加了新的预处理类型。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Clay\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Zabbix\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"1 zabbix4.4新功能\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Clay\\\",\\\"url\\\":\\\"https://clay-wangzhi.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":4.61,\"words\":1384},\"filePathRelative\":\"monitor/zabbix/readme.md\",\"excerpt\":\"<h1> 1 zabbix4.4新功能</h1>\\n<p>探索Zabbix4.4新功能</p>\\n<blockquote>\\n<p>https://www.zabbix.com/cn/whats_new_4_4</p>\\n</blockquote>\\n<ul>\\n<li>\\n<p>新一代的Zabbix Agent</p>\\n<ul>\\n<li>Go语言编写</li>\\n<li>用于监控各种服务和应用的插件框架</li>\\n<li>并发检查时确保状态正常(例如，保持持续的DB连接)</li>\\n<li>内置时间调度器（scheduler ），支持灵活的时间间隔</li>\\n<li>使用批量数据传输的高效的网络使用</li>\\n<li>用即将支持的更多平台嵌入式替换Linux上现有的代理</li>\\n</ul>\\n</li>\\n<li>\\n<p>活动和告警功能升级：应用Webhooks和可编程逻辑</p>\\n<ul>\\n<li>该功能简化了与外部系统的双向集成，允许从Zabbix UI一键访问工单系统中的case，在聊天中创建消息等等。可使用内置的JavaScript引擎定义所有处理逻辑，与外部通知和工单系统集成得到了极大的改进。</li>\\n</ul>\\n</li>\\n<li>\\n<p>为Zabbix模板设置标准</p>\\n<ul>\\n<li>\\n<p>我们为模板引入了一组标准和定义明确的 <a href=\\\"https://www.zabbix.com/documentation/guidelines/templates\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">准则</a>。 对于所有模板的创建者和维护者以及所有Zabbix用户来说，统一标准非常重要。</p>\\n<p>对XML/JSON文件的结构进行了极大的简化，仅使用文本编辑器即可手动编辑模板。大多数现有的模板都经过了改进以适应新的标准。</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>官方支持TimescaleDB</p>\\n<ul>\\n<li>除了MySQL、PostgreSQL、Oracle和DB2之外，我们现在正式宣布官方支持TimescaleDB。 与传统的关系数据库相比，TimescaleDB有诸多有点：近乎线性的性能水平， 支持自动即时删除旧的历史数据，更容易维护等等。</li>\\n</ul>\\n</li>\\n<li>\\n<p>监控项和触发器的知识库</p>\\n<ul>\\n<li>Zabbix 4.4提供了对监控项和触发器的更直观的描述。这些信息为工程师提供了巨大的帮助， 为他们提供了关于收集监控项的意义和目的、问题细节和触发器的解决指令等所有可能的细节。</li>\\n</ul>\\n</li>\\n<li>\\n<p>高级可视化功能</p>\\n<ul>\\n<li>\\n<p>仪表板和相关的小工具在许多方面得到了改进，简化了创建和管理的过程， 增加了只需单击鼠标即可修改小工具参数的功能。现在仪表板网格尺寸极佳可支持超宽屏幕和大屏幕墙。</p>\\n<p>问题视图小工具增强支持聚合视图，并引入了一个新的小工具来显示图形原型。</p>\\n<p>此外，所有小工具现在都可以在无标题模式下显示。</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>条形图和聚合</p>\\n<ul>\\n<li>Zabbix 4.4提供了条形图，graph widget现在支持使用各种聚合函数进行数据聚合。 这两个特性的结合使得长期数据分析和容量规划变得更加容易。</li>\\n</ul>\\n</li>\\n<li>\\n<p>官方支持更多新平台</p>\\n<ul>\\n<li>SUSE Linux Enterprise Server 15</li>\\n<li>Debian 10</li>\\n<li>Raspbian 10</li>\\n<li>Mac OS/X</li>\\n<li>RHEL 8</li>\\n<li>用于Windows agent的MSI</li>\\n</ul>\\n<p>请参阅<a href=\\\"https://www.zabbix.com/cn/download\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">下载</a> 页面中的所有可用平台</p>\\n</li>\\n<li>\\n<p>云端一键部署</p>\\n<p>Zabbix容器或镜像已经上线以下国际主流云平台，国内版本即将依次上线：</p>\\n<ul>\\n<li>\\n<p><a href=\\\"https://aws.amazon.com/marketplace/pp/B07YLKJTZQ?qid=1570610512988&amp;sr=0-6&amp;ref_=srh_res_product_title\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">AWS</a></p>\\n</li>\\n<li>\\n<p><a href=\\\"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/zabbix.zabbix_vm1?tab=Overview\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Azure</a></p>\\n</li>\\n<li>\\n<p>Google Cloud Platform</p>\\n</li>\\n<li>\\n<p><a href=\\\"https://marketplace.digitalocean.com/apps/zabbix\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Digital Ocean</a></p>\\n</li>\\n<li>\\n<p><a href=\\\"https://www.zabbix.com/cn/whats_new_4_4\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Docker</a></p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>安全的自动注册功能</p>\\n<ul>\\n<li>Zabbix的新版本支持可选的PSK加密，用于自动注册，并为添加的主机提供自动加密设置。 现在您可以将Zabbix设置为仅使用PSK，未加密或两者都允许自动注册网络设备。</li>\\n</ul>\\n</li>\\n<li>\\n<p>预处理功能升级：高级JSONPath</p>\\n<ul>\\n<li>Zabbix现在支持JSONPath的高级排列，允许对JSON数据进行复杂的预处理，包括聚合和搜索。 预处理还可以用于低等级发现，这使得它成为一个非常强大的自动化发现工具。</li>\\n</ul>\\n</li>\\n<li>\\n<p>用户宏的描述</p>\\n<ul>\\n<li>用户宏命令是一个非常好的功能，它简化了Zabbix的配置，使大量的配置变得轻而易举。 对用户宏命令的描述支持将有助于记录每个宏命令的用途，使宏命令的管理更加容易。</li>\\n</ul>\\n</li>\\n<li>\\n<p>更高效高级的数据收集</p>\\n<ul>\\n<li>通过新的JSON格式的返回对象数组检查，WMI、JMX和ODBC相关项的数据收集和发现得到了改进。 我们还为VMWare监控增加了VMWare数据存储，为Linux平台增加了系统服务，为CSV到JSON的转换增加了新的预处理类型。</li>\\n</ul>\\n</li>\\n</ul>\",\"copyright\":{\"author\":\"Clay\"},\"autoDesc\":true}")

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
