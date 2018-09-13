# Pages

Each page type available has a corresponding README, take a look by navigating to a page directory above.

Packing API 一共有3个接口(接口文档见附件)，接口说明如下：

系统参数先用以下信息，等测试数据完善后会更换TOKEN
CLOUDKEY: AmiAuth
SECRET:  00000000000000000000000000000001
TOKEN:  972342023272170693

接口示例：
1.发货明细查询Api

url: http://47.91.197.135/AmiWmsCenter/api/ShippingOrder/ShippingOrderScanQuery
header: Content-Type：application/json
body: {"CloudKey":"AmiAuth","Sign":"90A7B2C80C9EE4FDD505C73ABBA308C4","Token":"972342023272170693","PropListString":"{\"SHIPPINGORDERNUMBER\":\"SC60000157\"}"}

2.箱确认Api

url: http://47.91.197.135/AmiWmsCenter/api/ShippingOrder/ShippingOrderCtnConfirm
header: Content-Type：application/json
body:
{"CloudKey":"AmiAuth","Sign":"4A1FF3BB69C74DCF52084173F90CEA94","Token":"972342023272170693","PropListString":"{\"SHIPPINGORDERNUMBER\":\"SC60000157\",\"CARTONNUMBER\":1,\"SCANLIST\":[{\"SerialNumber\":\"456\",\"SkuCode\":\"FLT-07-SZ05\",\"BarCode\":\"123\",\"Quantity\":1},{\"SerialNumber\":\"456\",\"SkuCode\":\"FLT-07-SZ07\",\"BarCode\":\"123\",\"Quantity\":1}]}"}

3.装箱扫描最终确认Api

url: http://47.91.197.135/AmiWmsCenter/api/ShippingOrder/ShippingOrderConfirm
header: Content-Type：application/json
body:
{"CloudKey":"AmiAuth","Sign":"90A7B2C80C9EE4FDD505C73ABBA308C4","Token":"972342023272170693","PropListString":"{\"SHIPPINGORDERNUMBER\":\"SC60000157\"}"}

以上


新的token我发邮件出来了。shippingordernumber参数可以传以下任一一个：
SC00122709
SC00122710
SC00122711
SC00122712
