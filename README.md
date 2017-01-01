# markrun-themes

## vue
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="keywords" content="<%- keywords?keywords:title %>">
    <meta name="description" content="<%- description?description:title %>">
    <title><%- title %></title>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/markrun-themes@latest/vue.css" />
</head>
<body>
    <div class="markdown-header">
        <!-- header -->
    </div>
    <div class="markdown-sidebar" id="markrun-sidebar">
        <!-- sidebar -->
    </div>
    <div class="markdown-content">
        <div class="markdown-body" id="markrun-body" >
            <%- content %>
        </div>
    </div>
    <div class="markdown-footer" ><!-- footer --></div>
    <script src="https://unpkg.com/markrun-sidebar@latest/markrun-sidebar.js"></script>
    <script>
    markrunSidebar({
        element: document.getElementById('markrun-sidebar'),
        content: document.getElementById('markrun-body')
    })
    if (document.getElementsByTagName('h1')[0]) {
        document.getElementById('markrunCurrentPageTitle').innerHTML = document.getElementsByTagName('h1')[0].innerHTML
    }
    </script>
</body>
</html>
```

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
