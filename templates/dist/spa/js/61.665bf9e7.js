(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{"9bcf":function(e,t,a){"use strict";var l=a("fbfa"),o=a.n(l);t["default"]=o.a},a6ef:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{"row-key":"id","table-style":{height:e.height},flat:""},scopedSlots:e._u([{key:"top",fn:function(){return[a("div",{staticClass:"q-pa-md"},[a("div",{staticStyle:{height:"250px"}},[a("div",{staticClass:"row"},[a("q-btn-group",{staticStyle:{"margin-left":"20px"}},[a("q-btn",{attrs:{label:e.$t("upload_center.downloadgoodstemplate"),icon:"cloud_download"},on:{click:function(t){return e.downloadgoodstemplate()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                    "+e._s(e.$t("upload_center.downloadgoodstemplate"))+"\n                  ")])],1),a("q-btn",{attrs:{label:e.$t("upload_center.downloadcustomertemplate"),icon:"cloud_download"},on:{click:function(t){return e.downloadcustomertemplate()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                    "+e._s(e.$t("upload_center.downloadcustomertemplate"))+"\n                  ")])],1),a("q-btn",{attrs:{label:e.$t("upload_center.downloadsuppliertemplate"),icon:"cloud_download"},on:{click:function(t){return e.downloadsuppliertemplate()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                    "+e._s(e.$t("upload_center.downloadsuppliertemplate"))+"\n                  ")])],1)],1)],1),a("div",{staticClass:"row items-start",staticStyle:{"padding-top":"100px"}},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-md row items-start"},[a("q-uploader",{staticStyle:{width:"300px",height:"200px"},attrs:{url:e.goodslistfile_pathname,label:e.$t("upload_center.uploadgoodslistfile")+"  (for <10M size)",accept:".csv, xlsx,xls/*",filter:e.checkFileSize},on:{rejected:e.onRejected,added:e.getfileinfo}})],1)]),a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-md row items-start"},[a("q-uploader",{staticStyle:{width:"300px",height:"200px"},attrs:{url:e.customerfile_pathname,label:e.$t("upload_center.uploadcustomerfile")+"  (for <10M size)",accept:".csv, xlsx,xls/*",filter:e.checkFileSize},on:{rejected:e.onRejected,added:e.getfileinfo}})],1)]),a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-md row items-start"},[a("q-uploader",{staticStyle:{width:"300px",height:"200px"},attrs:{url:e.supplierfile_pathname,label:e.$t("upload_center.uploadsupplierfile")+"  (for <10M size)",accept:".csv, xlsx,xls/*",filter:e.checkFileSize},on:{rejected:e.onRejected,added:e.getfileinfo}})],1)])])])])]},proxy:!0}])})],1)],1)},o=[],s=a("3004"),i=a("18d6"),n=a("b06b"),d={name:"Pagecapital",data(){return{height:"",capitalfile_pathname:s["b"]+"uploadfile/capitalfile/",customerfile_pathname:s["b"]+"uploadfile/customerfile/",freightfile_pathname:s["b"]+"uploadfile/freightfile/",goodslistfile_pathname:s["b"]+"uploadfile/goodslistfile/",supplierfile_pathname:s["b"]+"uploadfile/supplierfile/"}},methods:{checkFileSize(e){return e.filter((e=>e.size<10485760))},checkFileType(e){return e.filter((e=>".xlsx, xls,csv/*"===e.type))},onRejected(e){this.$q.notify({type:"negative",message:`${e.length} file(s) did not pass validation constraints`})},getfileinfo(e){console.log(e)},downloadgoodstemplate(){i["a"].has("lang")&&"zh-hans"===i["a"].getItem("lang")?Object(n["a"])("media/upload_example/goodslist_cn.xlsx"):Object(n["a"])("media/upload_example/goodslist_en.xlsx")},downloadcustomertemplate(){i["a"].has("lang")&&"zh-hans"===i["a"].getItem("lang")?Object(n["a"])("media/upload_example/customer_cn.xlsx"):Object(n["a"])("media/upload_example/customer_en.xlsx")},downloadsuppliertemplate(){i["a"].has("lang")&&"zh-hans"===i["a"].getItem("lang")?Object(n["a"])("media/upload_example/supplier_cn.xlsx"):Object(n["a"])("media/upload_example/supplier_en.xlsx")}},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-260)+"px":e.height=e.$q.screen.height-260+"px"},updated(){},destroyed(){}},c=d,p=a("42e1"),r=a("9bcf"),u=a("eaac"),f=a("e7a9"),m=a("9c40"),h=a("05c0"),g=a("ee89"),x=a("eebe"),b=a.n(x),_=Object(p["a"])(c,l,o,!1,null,null,null);"function"===typeof r["default"]&&Object(r["default"])(_);t["default"]=_.exports;b()(_,"components",{QTable:u["a"],QBtnGroup:f["a"],QBtn:m["a"],QTooltip:h["a"],QUploader:g["a"]})},fbfa:function(e,t){}}]);