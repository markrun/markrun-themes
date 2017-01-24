# markrun-themes

## vue

**Use in the markrun:**
```js
markrun(content, {
    template: require('markrun-themes').vue({
        header: markrun.string([
            '<a class="markdown-header-logo" href="/README.md">',
            '    <img class="markdown-header-logo-photo"  src="https://cn.vuejs.org/images/logo.png" />',
            '    <span class="markdown-header-logo-text">markrun</span>',
            '</a>',
    		'<ul class="markdown-header-nav" >',
            '    <li>',
            '        <a href="/doc/README.md" class="markdown-header-nav-link">文档</a>',
            '    </li>',
            '    <li>',
            '        <a href="/example/README.md" class="markdown-header-nav-link">示例</a>',
            '    </li>',
            '    <li>',
            '        <a href="/test/README.md" class="markdown-header-nav-link">测试</a>',
            '    </li>',
            '    <li>',
            '        <a href="https://github.com/markrun/markrun/issues" class="markdown-header-nav-link">社区</a>',
            '    </li>',
    		'</ul>'
        ]),
        sidebar: '<h3 id="markrunCurrentPageTitle"></h3>',
        footer: ''
    })
})
```
