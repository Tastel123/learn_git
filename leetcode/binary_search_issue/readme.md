二分查找 binary_search
  加速查找
  前提条件是什么？
  有序数组， 折半排序， 查找的时间复杂度，从
  n => log2N
  [1,2,10,3,5,7,9].sort()
  [1,2,3,6,7,9] 6

  JavaScript heap out of memory
  什么出问题？ 
  1亿左右的大数相加 CPU
  ？ arr[] 物理空间
  问题核心：下标的引用  放不下
  0- 1亿  for循环没有问题 
  mid = (min + max) / 2
