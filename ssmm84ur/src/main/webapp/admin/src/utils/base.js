const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmm84ur/",
            name: "ssmm84ur",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmm84ur/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园二手交易网站"
        } 
    }
}
export default base
