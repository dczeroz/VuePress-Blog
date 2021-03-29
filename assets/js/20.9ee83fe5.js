(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{426:function(_,v,t){"use strict";t.r(v);var e=t(21),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("blockquote",[t("p",[_._v("说明：本章内容为博主在原教程基础上添加自己的学习笔记，来源https://www.zhihu.com/question/446980297/answer/1755892330，教程版权归原作者所有。")])]),_._v(" "),t("h2",{attrs:{id:"一、文件系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、文件系统"}},[_._v("#")]),_._v(" 一、文件系统")]),_._v(" "),t("h3",{attrs:{id:"_1、提高文件系统性能的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、提高文件系统性能的方式"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1、提高文件系统性能的方式")])]),_._v(" "),t("p",[_._v("访问磁盘的效率要比内存慢很多，是时候又祭出这张图了")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://pic4.zhimg.com/50/v2-e0f058c1a47ba57d12429f601ea35efc_hd.jpg?source=1940ef5c",alt:"img"}}),t("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-e0f058c1a47ba57d12429f601ea35efc_720w.jpg?source=1940ef5c",alt:"img"}})]),_._v(" "),t("p",[_._v("所以磁盘优化是很有必要的，下面我们会讨论几种优化方式")]),_._v(" "),t("h3",{attrs:{id:"_2、高速缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、高速缓存"}},[_._v("#")]),_._v(" "),t("strong",[_._v("2、高速缓存")])]),_._v(" "),t("p",[_._v("最常用的减少磁盘访问次数的技术是使用 "),t("code",[_._v("块高速缓存(block cache)")]),_._v(" 或者 "),t("code",[_._v("缓冲区高速缓存(buffer cache)")]),_._v("。高速缓存指的是一系列的块，它们在逻辑上属于磁盘，但实际上基于性能的考虑被保存在内存中。")]),_._v(" "),t("p",[_._v("管理高速缓存有不同的算法，常用的算法是：检查全部的读请求，查看在高速缓存中是否有所需要的块。如果存在，可执行读操作而无须访问磁盘。如果检查块不再高速缓存中，那么首先把它读入高速缓存，再复制到所需的地方。之后，对同一个块的请求都通过"),t("code",[_._v("高速缓存")]),_._v("来完成。")]),_._v(" "),t("p",[_._v("高速缓存的操作如下图所示")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://pic1.zhimg.com/50/v2-ffe44d741ebfdd3d60285384a479a7d3_hd.jpg?source=1940ef5c",alt:"img"}}),t("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-ffe44d741ebfdd3d60285384a479a7d3_720w.jpg?source=1940ef5c",alt:"img"}})]),_._v(" "),t("p",[_._v("由于在高速缓存中有许多块，所以需要某种方法快速确定所需的块是否存在。常用方法是将设备和磁盘地址进行散列操作。然后在散列表中查找结果。具有相同散列值的块在一个链表中连接在一起（这个数据结构是不是很像 HashMap?），这样就可以沿着冲突链查找其他块。")]),_._v(" "),t("p",[_._v("如果高速缓存"),t("code",[_._v("已满")]),_._v("，此时需要调入新的块，则要把原来的某一块调出高速缓存，如果要调出的块在上次调入后已经被修改过，则需要把它写回磁盘。这种情况与分页非常相似。")]),_._v(" "),t("h3",{attrs:{id:"_3、块提前读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、块提前读"}},[_._v("#")]),_._v(" "),t("strong",[_._v("3、块提前读")])]),_._v(" "),t("p",[_._v("第二个明显提高文件系统的性能是"),t("strong",[_._v("在需要用到块之前试图提前将其写入高速缓存从而提高命中率")]),_._v("。许多文件都是"),t("code",[_._v("顺序读取")]),_._v("。如果请求文件系统在某个文件中生成块 k，文件系统执行相关操作并且在完成之后，会检查高速缓存，以便确定块 k + 1 是否已经在高速缓存。如果不在，文件系统会为 k + 1 安排一个预读取，因为文件希望在用到该块的时候能够直接从高速缓存中读取。")]),_._v(" "),t("p",[_._v("当然，块提前读取策略只适用于实际顺序读取的文件。对随机访问的文件，提前读丝毫不起作用。甚至还会造成阻碍。")]),_._v(" "),t("h3",{attrs:{id:"_4、减少磁盘臂运动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、减少磁盘臂运动"}},[_._v("#")]),_._v(" "),t("strong",[_._v("4、减少磁盘臂运动")])]),_._v(" "),t("p",[_._v("高速缓存和块提前读并不是提高文件系统性能的唯一方法。另一种重要的技术是"),t("strong",[_._v("把有可能顺序访问的块放在一起，当然最好是在同一个柱面上，从而减少磁盘臂的移动次数")]),_._v("。当写一个输出文件时，文件系统就必须按照要求一次一次地分配磁盘块。如果用位图来记录空闲块，并且整个位图在内存中，那么选择与前一块最近的空闲块是很容易的。如果用空闲表，并且链表的一部分存在磁盘上，要分配紧邻的空闲块就会困难很多。")]),_._v(" "),t("p",[_._v("不过，即使采用空闲表，也可以使用 "),t("code",[_._v("块簇")]),_._v(" 技术。即不用块而用连续块簇来跟踪磁盘存储区。如果一个扇区有 512 个字节，有可能系统采用 1 KB 的块（2 个扇区），但却按每 2 块（4 个扇区）一个单位来分配磁盘存储区。这和 2 KB 的磁盘块并不相同，因为在高速缓存中它仍然使用 1 KB 的块，磁盘与内存数据之间传送也是以 1 KB 进行，但在一个空闲的系统上顺序读取这些文件，寻道的次数可以减少一半，从而使文件系统的性能大大改善。若考虑旋转定位则可以得到这类方法的变体。在分配块时，系统尽量把一个文件中的连续块存放在同一个柱面上。")]),_._v(" "),t("p",[_._v("在使用 inode 或任何类似 inode 的系统中，另一个性能瓶颈是，读取一个很短的文件也需要两次磁盘访问："),t("strong",[_._v("一次是访问 inode，一次是访问块")]),_._v("。通常情况下，inode 的放置如下图所示")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://pic1.zhimg.com/50/v2-6956f3c154af65842ec2ffe4569a1403_hd.jpg?source=1940ef5c",alt:"img"}}),t("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-6956f3c154af65842ec2ffe4569a1403_720w.jpg?source=1940ef5c",alt:"img"}})]),_._v(" "),t("p",[_._v("其中，全部 inode 放在靠近磁盘开始位置，所以 inode 和它所指向的块之间的平均距离是柱面组的一半，这将会需要较长时间的寻道时间。")]),_._v(" "),t("p",[_._v("一个简单的改进方法是，在磁盘中部而不是开始处存放 inode ，此时，在 inode 和第一个块之间的寻道时间减为原来的一半。另一种做法是：将磁盘分成多个柱面组，每个柱面组有自己的 inode，数据块和空闲表，如上图 b 所示。")]),_._v(" "),t("p",[_._v("当然，只有在磁盘中装有磁盘臂的情况下，讨论寻道时间和旋转时间才是有意义的。现在越来越多的电脑使用 "),t("code",[_._v("固态硬盘(SSD)")]),_._v("，对于这些硬盘，由于采用了和闪存同样的制造技术，使得随机访问和顺序访问在传输速度上已经较为相近，传统硬盘的许多问题就消失了。但是也引发了新的问题。")]),_._v(" "),t("h3",{attrs:{id:"_5、磁盘碎片整理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、磁盘碎片整理"}},[_._v("#")]),_._v(" "),t("strong",[_._v("5、磁盘碎片整理")])]),_._v(" "),t("p",[_._v("在初始安装操作系统后，文件就会被不断的创建和清除，于是磁盘会产生很多的碎片，在创建一个文件时，它使用的块会散布在整个磁盘上，降低性能。删除文件后，回收磁盘块，可能会造成空穴。")]),_._v(" "),t("p",[_._v("磁盘性能可以通过如下方式恢复：移动文件使它们相互挨着，并把所有的至少是大部分的空闲空间放在一个或多个大的连续区域内。Windows 有一个程序 "),t("code",[_._v("defrag")]),_._v(" 就是做这个事儿的。Windows 用户会经常使用它，SSD 除外。")]),_._v(" "),t("p",[_._v("磁盘碎片整理程序会在让文件系统上很好地运行。Linux 文件系统（特别是 ext2 和 ext3）由于其选择磁盘块的方式，在磁盘碎片整理上一般不会像 Windows 一样困难，因此很少需要手动的磁盘碎片整理。而且，固态硬盘并不受磁盘碎片的影响，事实上，在固态硬盘上做磁盘碎片整理反倒是多此一举，不仅没有提高性能，反而磨损了固态硬盘。所以碎片整理只会缩短固态硬盘的寿命。")]),_._v(" "),t("h2",{attrs:{id:"二、磁盘臂调度算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、磁盘臂调度算法"}},[_._v("#")]),_._v(" "),t("strong",[_._v("二、磁盘臂调度算法")])]),_._v(" "),t("p",[_._v("一般情况下，影响磁盘快读写的时间由下面几个因素决定")]),_._v(" "),t("ul",[t("li",[_._v("寻道时间 - 寻道时间指的就是将磁盘臂移动到需要读取磁盘块上的时间")]),_._v(" "),t("li",[_._v("旋转延迟 - 等待合适的扇区旋转到磁头下所需的时间")]),_._v(" "),t("li",[_._v("实际数据的读取或者写入时间")])]),_._v(" "),t("p",[_._v("这三种时间参数也是磁盘寻道的过程。一般情况下，寻道时间对总时间的影响最大，所以，有效的降低寻道时间能够提高磁盘的读取速度。")]),_._v(" "),t("p",[_._v("如果磁盘驱动程序每次接收一个请求并按照接收顺序完成请求，这种处理方式也就是 "),t("code",[_._v("先来先服务(First-Come, First-served, FCFS)")]),_._v(" ，这种方式很难优化寻道时间。因为每次都会按照顺序处理，不管顺序如何，有可能这次读完后需要等待一个磁盘旋转一周才能继续读取，而其他柱面能够马上进行读取，这种情况下每次请求也会排队。")]),_._v(" "),t("p",[_._v("通常情况下，磁盘在进行寻道时，其他进程会产生其他的磁盘请求。磁盘驱动程序会维护一张表，表中会记录着柱面号当作索引，每个柱面未完成的请求会形成链表，链表头存放在表的相应表项中。")]),_._v(" "),t("p",[_._v("一种对先来先服务的算法改良的方案是使用 "),t("code",[_._v("最短路径优先(SSF)")]),_._v(" 算法，下面描述了这个算法。")]),_._v(" "),t("p",[_._v("假如我们在对磁道 6 号进行寻址时，同时发生了对 11 , 2 , 4, 14, 8, 15, 3 的请求，如果采用先来先服务的原则，如下图所示")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://pic4.zhimg.com/50/v2-aa845d91c84d7791a0ee8bd2a664b03c_hd.jpg?source=1940ef5c",alt:"img"}}),t("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-aa845d91c84d7791a0ee8bd2a664b03c_720w.jpg?source=1940ef5c",alt:"img"}})]),_._v(" "),t("p",[_._v("我们可以计算一下磁盘臂所跨越的磁盘数量为 5 + 9 + 2 + 10 + 6 + 7 + 12 = 51，相当于是跨越了 51 次盘面，如果使用最短路径优先，我们来计算一下跨越的盘面")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://pic1.zhimg.com/50/v2-714d56c7fe6f9b9f8d782abbeadd4290_hd.jpg?source=1940ef5c",alt:"img"}}),t("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-714d56c7fe6f9b9f8d782abbeadd4290_720w.jpg?source=1940ef5c",alt:"img"}})]),_._v(" "),t("p",[_._v("跨越的磁盘数量为 4 + 1 + 1 + 4 + 3 + 3 + 1 = 17 ，相比 51 足足省了两倍的时间。")]),_._v(" "),t("p",[_._v("但是，最短路径优先的算法也不是完美无缺的，这种算法照样存在问题，那就是"),t("code",[_._v("优先级")]),_._v(" 问题，")]),_._v(" "),t("p",[_._v("这里有一个原型可以参考就是我们日常生活中的电梯，电梯使用一种"),t("code",[_._v("电梯算法(elevator algorithm)")]),_._v(" 来进行调度，从而满足协调效率和公平性这两个相互冲突的目标。电梯一般会保持向一个方向移动，直到在那个方向上没有请求为止，然后改变方向。")]),_._v(" "),t("p",[_._v("电梯算法需要维护一个"),t("code",[_._v("二进制位")]),_._v("，也就是当前的方向位："),t("code",[_._v("UP(向上)")]),_._v("或者是 "),t("code",[_._v("DOWN(向下)")]),_._v("。当一个请求处理完成后，磁盘或电梯的驱动程序会检查该位，如果此位是 UP 位，磁盘臂或者电梯仓移到下一个更高跌未完成的请求。如果高位没有未完成的请求，则取相反方向。当方向位是 "),t("code",[_._v("DOWN")]),_._v(" 时，同时存在一个低位的请求，磁盘臂会转向该点。如果不存在的话，那么它只是停止并等待。")]),_._v(" "),t("p",[_._v("我们举个例子来描述一下电梯算法，比如各个柱面得到服务的顺序是 4，7，10，14，9，6，3，1 ，那么它的流程图如下")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://pic4.zhimg.com/50/v2-00d7c9b00e349b1c82b20029c574266a_hd.jpg?source=1940ef5c",alt:"img"}}),t("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-00d7c9b00e349b1c82b20029c574266a_720w.jpg?source=1940ef5c",alt:"img"}})]),_._v(" "),t("p",[_._v("所以电梯算法需要跨越的盘面数量是 3 + 3 + 4 + 5 + 3 + 3 + 1 = 22")]),_._v(" "),t("p",[_._v("电梯算法通常情况下不如 SSF 算法。")]),_._v(" "),t("p",[_._v("一些磁盘控制器为软件提供了一种检查磁头下方当前扇区号的方法，使用这样的控制器，能够进行另一种优化。如果对一个相同的柱面有两个或者多个请求正等待处理，驱动程序可以发出请求读写下一次要通过磁头的扇区。")]),_._v(" "),t("blockquote",[t("p",[_._v("这里需要注意一点，当一个柱面有多条磁道时，相继的请求可能针对不同的磁道，这种选择没有代价，因为选择磁头不需要移动磁盘臂也没有旋转延迟。")])]),_._v(" "),t("p",[_._v("对于磁盘来说，最影响性能的就是寻道时间和旋转延迟，所以一次只读取一个或两个扇区的效率是非常低的。出于这个原因，许多磁盘控制器总是读出多个扇区并进行高速缓存，即使只请求一个扇区时也是这样。一般情况下读取一个扇区的同时会读取该扇区所在的磁道或者是所有剩余的扇区被读出，读出扇区的数量取决于控制器的高速缓存中有多少可用的空间。")]),_._v(" "),t("p",[_._v("磁盘控制器的高速缓存和操作系统的高速缓存有一些不同，磁盘控制器的高速缓存用于缓存没有实际被请求的块，而操作系统维护的高速缓存由显示地读出的块组成，并且操作系统会认为这些块在近期仍然会频繁使用。")]),_._v(" "),t("p",[_._v("当同一个控制器上有多个驱动器时，操作系统应该为每个驱动器都单独的维护一个未完成的请求表。一旦有某个驱动器闲置时，就应该发出一个寻道请求来将磁盘臂移到下一个被请求的柱面。如果下一个寻道请求到来时恰好没有磁盘臂处于正确的位置，那么驱动程序会在刚刚完成传输的驱动器上发出一个新的寻道命令并等待，等待下一次中断到来时检查哪个驱动器处于闲置状态。")]),_._v(" "),t("h2",{attrs:{id:"三、raid-的不同级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、raid-的不同级别"}},[_._v("#")]),_._v(" "),t("strong",[_._v("三、RAID 的不同级别")])]),_._v(" "),t("p",[_._v("RAID 称为 "),t("code",[_._v("磁盘冗余阵列")]),_._v("，简称 "),t("code",[_._v("磁盘阵列")]),_._v("。利用虚拟化技术把多个硬盘结合在一起，成为一个或多个磁盘阵列组，目的是提升性能或数据冗余。")]),_._v(" "),t("p",[_._v("RAID 有不同的级别")]),_._v(" "),t("ul",[t("li",[_._v("RAID 0 - 无容错的条带化磁盘阵列")]),_._v(" "),t("li",[_._v("RAID 1 - 镜像和双工")]),_._v(" "),t("li",[_._v("RAID 2 - 内存式纠错码")]),_._v(" "),t("li",[_._v("RAID 3 - 比特交错奇偶校验")]),_._v(" "),t("li",[_._v("RAID 4 - 块交错奇偶校验")]),_._v(" "),t("li",[_._v("RAID 5 - 块交错分布式奇偶校验")]),_._v(" "),t("li",[_._v("RAID 6 - P + Q冗余")])]),_._v(" "),t("h2",{attrs:{id:"文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[_._v("#")]),_._v(" 文档")]),_._v(" "),t("p",[_._v("学习文档：https://leetcode-cn.com/leetbook/detail/awesome-os-guide/")])])}),[],!1,null,null,null);v.default=a.exports}}]);