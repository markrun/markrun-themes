var json5 = require('json5')
var hljs = require('highlight.js')
var path = require('path')
var fs = require('fs')
var markrun = require('markrun')
module.exports = function (source, data, info) {
   var render = json5.parse(source)
   render.title = render.title || ''
   render.desc = render.desc || ''
   render.html = render.html || ''
   render.lang = render.lang || 'js'
   var code = ''
   if (typeof render.file === 'string') {
       var jspath = path.join(path.dirname(info.filepath), render.file)
       var jscontent = fs.readFileSync(jspath).toString()
       code = hljs.highlight(render.lang, jscontent).value
   }
   var desc = markrun(render.desc, {
       template: '<%- content %>'
   })


   var html = '<div class="markrun-box"> \n\
       <div class="markrun-box-preview"> \n\
           <div class="markrun-box-preview-node">' +
               render.html +
           '</div> \n\
           <div class="markrun-box-preview-doc">\n\
               <div class="markrun-box-preview-doc-title">\n\
                   <span class="markrun-box-preview-doc-title-text">' +
                       render.title +
                   '</span>\n\
               </div> \n\
               <div class="markrun-box-preview-doc-desc">' +
                   desc +
               '</div>\n\
           </div>\n\
       </div>\n\
       <div class="markrun-box-code">\n\
           <span class="markrun-box-code-copy">COPY</span>\n\
           <pre class="markrun-box-code-source" >' +
               code +
           '</pre>\n\
       </div>\n\
       <span class="markrun-box-toggle"></span>\n\
   </div>'
   return {
       lang: 'replace',
       code: html
   }
}
