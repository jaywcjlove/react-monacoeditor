(this["webpackJsonp@uiw/react-monacoeditor"]=this["webpackJsonp@uiw/react-monacoeditor"]||[]).push([[591],{1192:function(t,e,n){"use strict";n.r(e),e.default='@{\r\n    var total = 0;\r\n    var totalMessage = "";\r\n    @* a multiline\r\n      razor comment embedded in csharp *@\r\n    if (IsPost) {\r\n\r\n        // Retrieve the numbers that the user entered.\r\n        var num1 = Request["text1"];\r\n        var num2 = Request["text2"];\r\n\r\n        // Convert the entered strings into integers numbers and add.\r\n        total = num1.AsInt() + num2.AsInt();\r\n\t\t<italic><bold>totalMessage = "Total = " + total;</bold></italic>\r\n    }\r\n}\r\n\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <title>Add Numbers</title>\r\n    <meta charset="utf-8" />\r\n  </head>\r\n<body>\r\n  <p>Enter two whole numbers and then click <strong>Add</strong>.</p>\r\n  <form action="" method="post">\r\n    <p><label for="text1">First Number:</label>\r\n      <input type="text" name="text1" />\r\n    </p>\r\n    <p><label for="text2">Second Number:</label>\r\n      <input type="text" name="text2" />\r\n    </p>\r\n    <p><input type="submit" value="Add" /></p>\r\n  </form>\r\n\r\n\t@* now we call the totalMessage method \r\n\t   (a multi line razor comment outside code) *@\r\n\r\n  <p>@totalMessage</p>\r\n  \r\n  <p>@(totalMessage+"!")</p>\r\n  \r\n  An email address (with escaped at character): name@@domain.com\r\n \r\n</body>\r\n</html>\r\n'}}]);
//# sourceMappingURL=591.82ec03d8.chunk.js.map