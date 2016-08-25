const links=require('./link.js')
const unirest=require('unirest')
const object={
  getBasicInfo:function (cb) {
    unirest.get(this.getTemplateUrl()).end(function (res) {
      contentInfo=JSON.parse(res.raw_body).resultObj.contentInfo[0]
      cb({title:contentInfo.contentTitle,description:contentInfo.description,language:contentInfo.language})
    })
  },
  getBasicUrl:function (cb) {
    unirest.get(this.getSrcUrl()).end(function (res) {
      cb(JSON.parse(res.raw_body).resultObj.src)
    })
  }
}
var extractor=function (link) {
links.id=link.split('/')[4]
Object.setPrototypeOf(object,links)
return object;
}

var hotstar=new extractor('http://www.hotstar.com/xixs-beyond-the-limit-act/1000150791')
hotstar.getBasicUrl(function (data) {
  console.log(data);
})
