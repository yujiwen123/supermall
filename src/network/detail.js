import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}


export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopinfo) {
    this.logo = shopinfo.shopLogo
    this.name = shopinfo.name
    this.fans = shopinfo.cFans
    this.sells = shopinfo.cSells
    this.score = shopinfo.score
    this.goodCount = shopinfo.cGoods
  }
}


//请求推荐recommend
export function getRecommend(){
	return request({
		url:'/recommend'
	})
}



//参数信息
export class Param {
	constructor(info, rule) {
	    this.info = info.set;
		this.rule = rule.tables;
	}
}


