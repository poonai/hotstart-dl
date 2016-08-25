module.exports = {
  id:null,
  getTemplateUrl:function (){
    return "http://account.hotstar.com/AVS/besc?action=GetAggregatedContentDetails&channel=PCTV&contentId="+this.id
  },
  getSrcUrl:function (){
    return 'http://getcdn.hotstar.com/AVS/besc?action=GetCDN&asJson=Y&channel=TABLET&id='+this.id+'&type=VOD'
  }
};
