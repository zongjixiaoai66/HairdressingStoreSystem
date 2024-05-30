
var projectName = '美发门店管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '美容项目',
	url: './pages/meirongxiangmu/list.html'
}, 
{
	name: '产品库存',
	url: './pages/chanpinkucun/list.html'
}, 
{
	name: '会员卡',
	url: './pages/huiyuanka/list.html'
}, 

]

var adminurl =  "http://localhost:8080/springbootq9xc1/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"美容项目","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"项目类型","menuJump":"列表","tableName":"xiangmuleixing"}],"menu":"项目类型管理"},{"child":[{"buttons":["查看","审核"],"menu":"项目预定","menuJump":"列表","tableName":"xiangmuyuding"}],"menu":"项目预定管理"},{"child":[{"buttons":["查看","查看评论","入库"],"menu":"产品库存","menuJump":"列表","tableName":"chanpinkucun"}],"menu":"产品库存管理"},{"child":[{"buttons":["查看","审核"],"menu":"产品购买","menuJump":"列表","tableName":"chanpingoumai"}],"menu":"产品购买管理"},{"child":[{"buttons":["查看","删除"],"menu":"产品入库","menuJump":"列表","tableName":"chanpinruku"}],"menu":"产品入库管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"会员卡","menuJump":"列表","tableName":"huiyuanka"}],"menu":"会员卡管理"},{"child":[{"buttons":["查看","审核"],"menu":"会员充值","menuJump":"列表","tableName":"huiyuanchongzhi"}],"menu":"会员充值管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"余额查询","menuJump":"列表","tableName":"yuechaxun"}],"menu":"余额查询管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"产品类型","menuJump":"列表","tableName":"chanpinleixing"}],"menu":"产品类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","预定"],"menu":"美容项目列表","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目模块"},{"child":[{"buttons":["查看","购买"],"menu":"产品库存列表","menuJump":"列表","tableName":"chanpinkucun"}],"menu":"产品库存模块"},{"child":[{"buttons":["查看","充值"],"menu":"会员卡列表","menuJump":"列表","tableName":"huiyuanka"}],"menu":"会员卡模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","支付"],"menu":"项目预定","menuJump":"列表","tableName":"xiangmuyuding"}],"menu":"项目预定管理"},{"child":[{"buttons":["查看","支付"],"menu":"产品购买","menuJump":"列表","tableName":"chanpingoumai"}],"menu":"产品购买管理"},{"child":[{"buttons":["查看","支付"],"menu":"会员充值","menuJump":"列表","tableName":"huiyuanchongzhi"}],"menu":"会员充值管理"},{"child":[{"buttons":["查看"],"menu":"余额查询","menuJump":"列表","tableName":"yuechaxun"}],"menu":"余额查询管理"}],"frontMenu":[{"child":[{"buttons":["查看","预定"],"menu":"美容项目列表","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目模块"},{"child":[{"buttons":["查看","购买"],"menu":"产品库存列表","menuJump":"列表","tableName":"chanpinkucun"}],"menu":"产品库存模块"},{"child":[{"buttons":["查看","充值"],"menu":"会员卡列表","menuJump":"列表","tableName":"huiyuanka"}],"menu":"会员卡模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
