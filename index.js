var themes = {
    vue: function (settings) {
        settings.header = settings.header || ''
        settings.sidebar = settings.sidebar || ''
        settings.footer = settings.footer || ''
        return [
            '<!DOCTYPE html>',
            '<html lang="en">',
            '<head>',
            '    <meta charset="UTF-8">',
            '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
            '    <meta http-equiv="X-UA-Compatible" content="ie=edge">',
            '    <meta name="keywords" content="<%- keywords?keywords:title %>">',
            '    <meta name="description" content="<%- description?description:title %>">',
            '    <title><%- title %></title>',
            '    <link rel="stylesheet" type="text/css" href="https://unpkg.com/markrun-themes@latest/vue.css" />',
            '</head>',
            '<body>',
            '	<div class="markdown-header">',
                    settings.header,
            '	</div>',
            '	<div class="markdown-sidebar" id="markrun-sidebar">',
                    settings.sidebar,
            '	</div>',
            '    <div class="markdown-content">',
            '	    <div class="markdown-body" id="markrun-body" >',
            '            <%- content %>',
            '        </div>',
            '    </div>',
            '	<div class="markdown-footer" >',
                settings.footer,
            '   </div>',
            '    <script src="https://unpkg.com/markrun-sidebar@latest/markrun-sidebar.js"></script>',
            '    <script>',
            '    markrunSidebar({',
            '        element: document.getElementById("markrun-sidebar"),',
            '        content: document.getElementById("markrun-body")',
            '    })',
            '    if (document.getElementsByTagName("h1")[0]) {',
            '        document.getElementById("markrunCurrentPageTitle").innerHTML = document.getElementsByTagName('h1')[0].innerHTML',
            '    }',
            '    </script>',
            '</body>',
            '</html>'
        ].join('\n')
    }
}
module.exports = themes
export default themes
