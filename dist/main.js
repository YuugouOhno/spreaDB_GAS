let global = this;
function initializeSheet() {
}
function postData() {
}
function testPostData() {
}
var c={sheets:[{name:"3-1-1",columns:[{name:"datetime",type:"datetime",threshold:null},{name:"\u5869\u5206\u6FC3\u5EA6",type:"number",threshold:{min:5,max:35}},{name:"DO",type:"number",threshold:{target:8,tolerance:10}},{name:"\u6C34\u6E29",type:"number",threshold:{min:0,max:40}},{name:"\u5916\u6C17\u6E29",type:"number",threshold:{target:20,tolerance:5}}]},{name:"3-1-2",columns:[{name:"datetime",type:"datetime",threshold:null},{name:"\u5869\u5206\u6FC3\u5EA6",type:"number",threshold:{min:5,max:35}},{name:"DO",type:"number",threshold:{target:8,tolerance:10}},{name:"\u6C34\u6E29",type:"number",threshold:{min:0,max:40}},{name:"\u5916\u6C17\u6E29",type:"number",threshold:{target:20,tolerance:5}}]}]};var a="1ikEvU2I88BuvYGxegNe8dLsQlcU-POjN7vlIUK4Bf7o";function l(){let s=SpreadsheetApp.openById(a);c.sheets.forEach(e=>{let t=s.getSheetByName(e.name);t||(t=s.insertSheet(e.name)),t.clear();let r=e.columns.map(n=>n.name);t.getRange(1,1,1,r.length).setValues([r])}),Logger.log("\u30B7\u30FC\u30C8\u306E\u4F5C\u6210\u30FB\u66F4\u65B0\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002")}function g(s,e){let r=SpreadsheetApp.openById(s).getSheetByName(e);if(!r)throw new Error(`\u30B7\u30FC\u30C8 '${e}' \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093`);return r}function i(s){try{let e=JSON.parse(s),t=e.sheetName,r=e.data;if(!t||!r)return{success:!1,message:"Invalid request: sheetName and data are required."};let n=g(a,t);if(!n)return{success:!1,message:`Error: Sheet '${t}' not found.`};let o=n.getRange(1,1,1,n.getLastColumn()).getValues()[0],m=Object.keys(r);if(!f(m,o))return{success:!1,message:`Error: Request data keys do not match sheet headers. Expected keys: ${o.join(", ")}, but received: ${m.join(", ")}`};let d=o.map(h=>r[h]??"");return n.appendRow(d),{success:!0,message:"\u30C7\u30FC\u30BF\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002"}}catch(e){return{success:!1,message:`Error: ${e instanceof Error?e.message:"An unknown error occurred."}`}}}function f(s,e){return s.length!==e.length?!1:s.every((t,r)=>t===e[r])}function u(){let s=JSON.stringify({sheetName:"3-1-1",data:{datetime:"2024-02-25 12:00:00",\u5869\u5206\u6FC3\u5EA6:"",DO:8.4,\u6C34\u6E29:2,\u5916\u6C17\u6E29:2,none:"test"}}),e=i(s);Logger.log(e)}global.initializeSheet=l;global.postData=i;global.testPostData=u;
