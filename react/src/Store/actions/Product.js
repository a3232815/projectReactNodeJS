//רושמים כאן את כל הפונקציות הקשורות  לאובייקט מוצר שנמצאות באתר
export const saveAllProduct=(arrProduct)=>{
    return{
        type:'SAVE_ALL_PRODUCT',
        payload:arrProduct
    }

}

export const addProduct=(product)=>{//הפעולה+ מה היא מקבלת      
    return{
        type:'ADD_PRODUCT',//מחזירה את שם הפעולה באותיות גדולות
        payload:product//וכן מחזירה שדות לפי הפרמטרים שנשלחו לפונקציה
    }
}

export const deleteProduct=(productId)=>{
    return{
        type:'DELETE_PRODUCT',
        id:productId
    }
}

export const updateProduct=(product, productId)=>{
    return{
        type:'UPDATE_PRODUCT',
        payload:product,
        id:productId
    }
}

export const selectProduct=(product)=>{
    return{
        type:'SELECT_PRODUCT',
        payload:product
    }
}