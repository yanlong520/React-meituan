//使用uuid来生成唯一的id数据
import uuid from 'uuid'
import img0 from './img/img0.jpg'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import img7 from './img/img7.jpg'
import img8 from './img/img8.jpg'
import img9 from './img/img9.jpg'


const imgs = [img0,img1,img2,img3,img4,img5,img6,img7,img8,img9]
// 创造假的后台api

const fakeApi = {
  // 全部商品列表 
  list: [
    {
      name: '张记招牌自助骨头锅',
      price: '32.80元',
      address: '[中央大街索菲亚广场]午餐特色盒饭，建议单人使用',
      img: "http://p1.meituan.net/200.0/deal/6e66b6868c875f53915e0ad25553bcca127592.jpg@200_0_800_800a%7C267h_267w_2e_90Q",
      id: uuid()
    },
    {
      name: '多嘴肉蟹煲',
      address : '[哈尔滨市]南岗区菲力系列自助餐',
      price: '15.50元',
      img: "http://p0.meituan.net/200.0/deal/e73ceb51ebd994b1c096e3a25a55f84f470711.jpg@480_0_1920_1920a%7C267h_267w_2e_90Q",
      id: uuid()
    },
    {
      name: '豆腐王朝',
      address : '[乐松广场]暴雪臭豆腐1份，提供免费WiFi',
      price: '19.00元',
      img: "http://p1.meituan.net/200.0/deal/4fadcddb397c4d762595fc0d2232bd06384696.jpg@309_0_1000_1000a%7C267h_267w_2e_90Q",
      id: uuid()
    },
    {
      name: '金汉斯南美烤肉自助餐厅',
      address : '[凯德广场]单人自助晚餐/周六周日午餐2选1',
      price: '56.00元',
      img: "http://p0.meituan.net/200.0/deal/2269151e5151c02bfa3dcd9198d576e425708.jpg@73_0_293_293a%7C267h_267w_2e_100Q",
      id: uuid()
    },
    {
      name: '吴记酱骨炖菜馆',
      address : '[和兴路沿线]100元代金券1张，可叠加3张',
      price: '59.00元',
      img: "http://p1.meituan.net/200.0/deal/7456d611de9ac6afd2060cc7cd59e49244568.jpg@120_0_400_400a%7C267h_267w_2e_100q",
      id: uuid()
    },
    {
      name: '阿田大虾',
      address : '[19店通用]精品2-4人餐，提供免费WiFi',
      price: '299.00',
      img: "http://p1.meituan.net/200.0/deal/bcb36a6eb8a795ee3b81eebaca72b5b481956.jpg@117_0_468_468a%7C267h_267w_2e_90Q",
      id: uuid()
    }
  ],
  // 购物车列表商品
  shoppingCar: [],
  // 获取商品列表
  getList: function (callback) {
    callback(this.list)
  },
  // 获取列表商品的详情
  getDetail: function (id, callback) {
    callback(
      this.list.filter(e => e.id === id)[0]
    )
  },
  // 添加到购物车
  add: function (id, callback) {
    this.shoppingCar.push(
      this.list.filter(e => e.id === id)[0]
    )
    callback({ code: 200, msg: '添加成功！' })
  },
  // 获取购物车的商品
  getShoppingCar: function (callback) {
    callback(
      this.shoppingCar
    )
  }
}

const NavItem = {
  item : [
    {
      img: imgs[0],
      content: '美食',
      url:'http://meishi.meituan.com/i/?ci=105&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F1'
    },
    {
      img: imgs[1],
      content: '猫眼电影',
      url : 'http://m.maoyan.com/imeituan/?_v_=yes&my_traffic_sources=group&ci=105&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F99#movie'
    },
    {
      img: imgs[2],
      content: '酒店',
      url:'https://i.meituan.com/awp/h5/hotel/search/search.html?stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F20'
    },
    {
      img: imgs[3],
      content: '休闲娱乐',
      url : 'http://i.meituan.com/haerbin/all/?cid=2&stid_b=1&cateType=poi'
    },
    {
      img: imgs[4],
      content: '外卖',
      url:'https://h5.waimai.meituan.com/waimai/mindex/home?type=main_page&utm_source=60030&channel=mtib&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F394'
    },
    {
      img: imgs[5],
      content: 'KTV',
      url:'http://i.meituan.com/ktv/haerbin?cid=10&stid_b=1&cateType=poi&cevent=imt%2Fhomepage%2Fcategory1%2F10'
    },
    {
      img: imgs[6],
      content: '周边游',
      url:'https://i.meituan.com/trip/lvyou/triplist/poi/?stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F195'
    },
    {
      img: imgs[7],
      content: '丽人',
      url:'http://i.meituan.com/catehome/22?cevent=imt%2Fhomepage%2Fcategory1%2F22'
    },
    {
      img: imgs[8],
      content: '小吃快餐',
      url:'http://i.meituan.com/haerbin/all/?cid=36&stid_b=1&cateType=poi'
    },
    {
      img: imgs[9],
      content: '全部分类',
      url:'http://i.meituan.com/category?city=haerbin'
    }
   
  ],
  getItem: function (callback) {
    callback(this.item)
  }



}

export  { fakeApi , NavItem}