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
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/markrun-themes@latest/vue.css">
</head>
<body>
	<div class="markdown-header">
		<div class="markdown-header-lang" >
			<a href="/README.md" class="markdown-header-lang-link">English</a><a href="/README.zh-cn.md" class="markdown-header-lang-link" >中文</a>
		</div>
	</div>
	<div class="markdown-sidebar" id="markrun-sidebar"></div>
	<div class="markdown-body" ><%- content %></div>
	<div class="markdown-footer" ></div>
	<script src="https://unpkg.com/markrun-sidebar@latest/markrun-sidebar.js"></script>
</body>
</html>
```
**Use in the markrun:**
```js
markrun(content, {
    template: require('markrun-themes').vue()
})

markrun(content, {
    template: require('markrun-themes').vue({
    	header: 'html',
	sidebar； 'html',
	head: '<script></script> <link /> <style></style>',
	body: '<script></script> <link /> <style></style>'
    })
})
```
