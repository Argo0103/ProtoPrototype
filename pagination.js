const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")
const itemInPage = 4

const pagination = {
    _array : alphabetArray ,
    _pageSize : itemInPage ,
    _pageNum : 1,
    init(array = [],pageSize = 0){
        const pages = []
        let cuurPage = []
        for (let idx = 0; idx < array.length; idx++) {
            if (cuurPage.length !== pageSize) {
                cuurPage.push(array[idx])
                if (cuurPage.length === pageSize){
                    pages.push(cuurPage)
                    cuurPage = []
                }
            }
        }
        return pages
    },
    getPageItems(){
        const allPages = pagination.init(pagination.array,pagination.pageSize)
        const numberOfPage = pagination._pageNum

        if(numberOfPage > allPages.length || numberOfPage <= 0){
            return `The number of pages is ${allPages.length}, select page 1 to ${allPages.length}`
        }
        return allPages[numberOfPage - 1]
    },
    goToPage(currPage = 1){
        const allPages = pagination.init(pagination.array,pagination.pageSize)
        pagination._pageNum = currPage 
        const numberOfPage = pagination._pageNum 
        if(numberOfPage > allPages.length || numberOfPage <= 0){
           
            return `The number of pages is ${allPages.length}, select page 1 to ${allPages.length}`
        }  
            return `current page must be set to ${currPage}`
    },
    prevPage(){
        if(pagination._pageNum === 1 ){
            return "You are on the first page "
        } else {
            pagination._pageNum -= 1
            return pagination.getPageItems()

        }
        __proto__ = pagination
    },
    nextPage(){
        if(pagination._pageNum === pagination.init(pagination.array,pagination.pageSize).length - 1 ){
            return "You are on the last page "
        } else {
            pagination._pageNum += 1
            return pagination.getPageItems()

        }
    },
    firstPage(){
        pagination._pageNum = 1
        return pagination.getPageItems()
    },
    lastPage(){
        pagination._pageNum =  pagination.init(pagination.array,pagination.pageSize).length
        return pagination.getPageItems()
    }
}

Object.defineProperties(pagination ,  {
    "_pageNum":{
    writable : true ,
    enumerable : false
    },
    "_array":{
    writable : true ,
    enumerable : false
    },
    "_pageSize":{
    writable : true ,
    enumerable : false
    }
})

// console.log(pagination.goToPage(4));
// console.log(pagination.getPageItems());
// console.log(pagination.lastPage());
// console.log(pagination.init(alphabetArray,4));
console.log(pagination);