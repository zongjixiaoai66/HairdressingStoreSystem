const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootq9xc1/",
            name: "springbootq9xc1",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootq9xc1/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "美发门店管理系统"
        } 
    }
}
export default base
