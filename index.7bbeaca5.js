var e=function(e,t,n,i,o){document.body.insertAdjacentHTML("beforeend",'\n    <div class="notification '.concat(o,'">\n      <h2 class="title">').concat(n,"</h2>\n      <p>").concat(i,"</p>\n    </div>\n  "));var c=document.querySelector(".".concat(o));c.style.top="".concat(e,"px"),c.style.right="".concat(t,"px"),setTimeout(function(){c.style.visibility="hidden"},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.7bbeaca5.js.map
