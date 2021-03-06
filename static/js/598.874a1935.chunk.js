(this["webpackJsonp@uiw/react-monacoeditor"]=this["webpackJsonp@uiw/react-monacoeditor"]||[]).push([[598],{1199:function(n,i,r){"use strict";r.r(i),i.default='package examples\n\n/** Quick sort, imperative style */\nobject sort {\n\n  /** Nested methods can use and even update everything\n   *  visible in their scope (including local variables or\n   *  arguments of enclosing methods).\n   */\n  def sort(a: Array[Int]) {\n\n    def swap(i: Int, j: Int) {\n      val t = a(i); a(i) = a(j); a(j) = t\n    }\n\n    def sort1(l: Int, r: Int) {\n      val pivot = a((l + r) / 2)\n      var i = l\n      var j = r\n      while (i <= j) {\n        while (a(i) < pivot) i += 1\n        while (a(j) > pivot) j -= 1\n        if (i <= j) {\n          swap(i, j)\n          i += 1\n          j -= 1\n        }\n      }\n      if (l < j) sort1(l, j)\n      if (j < r) sort1(i, r)\n    }\n\n    if (a.length > 0)\n      sort1(0, a.length - 1)\n  }\n\n  def println(ar: Array[Int]) {\n    def print1 = {\n      def iter(i: Int): String =\n        ar(i) + (if (i < ar.length-1) "," + iter(i+1) else "")\n      if (ar.length == 0) "" else iter(0)\n    }\n    Console.println("[" + print1 + "]")\n  }\n\n  def main(args: Array[String]) {\n    val ar = Array(6, 2, 8, 5, 1)\n    println(ar)\n    sort(ar)\n    println(ar)\n  }\n\n}\n'}}]);
//# sourceMappingURL=598.874a1935.chunk.js.map