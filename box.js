Array.prototype.forEach.call(document.getElementsByClassName('markrun-box-toggle'), function(node){
   node.onclick = function () {
       var className = this.parentElement.getAttribute('class')
        var rOnClass = /markrun\-box\-\-open/g
        if (rOnClass.test(className)) {
            className = className.replace(rOnClass, '')
        }
        else {
            className = className + ' markrun-box--open'
        }
        this.parentElement.setAttribute('class', className)
   }
})
Array.prototype.forEach.call(document.getElementsByClassName('markrun-box-code-copy'), function(node){
   var clipboard = new Clipboard(node, {
       target: function (trigger) {
           return trigger.nextElementSibling
       }
   })
})
