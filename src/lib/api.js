export const getToken = async () =>{
    return Promise.resolve("1029387549");
}

export const doSearch = (keyword)=>{
    // we fake some search request here
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([1,2,3]);
        }, 1200)
    })
}