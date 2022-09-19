//https://www.zilberahit.co.il/products_cat.php?recordID=559   --הקישור לחנות ממנה לקחתי תמונות
const initialState = {
    arrProduct:[],
    // arrProduct: [{
    //     id: "1585", name: "חדר ילדים עדכני", description: "דגם מאיה", picture: "http://www.zilberahit.co.il/upload/original/1505390427.jpg"
    //     , price: 8990, company: "רהיטי פאר",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // {
    //     id: "2528", name: "חדר ילדים לכולם", description: "דגם דניאל", picture: "http://www.zilberahit.co.il/upload/original/1505389588.jpg"
    //     , price: 1090, company: "רהיטי פאר",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // {
    //     id: "3525", name: "חדר ילדים בוגר", description: "דגם וינטאז", picture: "http://www.zilberahit.co.il/upload/original/16132918723412.jpg"
    //     , price: 15990, company: "רהיטי פאר",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // {
    //     id: "4152", name: "חדר שינה מפנק" , description: "דגם קלבריה", picture: "http://www.zilberahit.co.il/upload/original/15844669865166.jpg"
    //     , price: 17090, company: "הדר",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // {
    //     id: "5231", name: "חדר שינה מכובד" , description: "דגם אופל", picture: "http://www.zilberahit.co.il/upload/original/16108953653299.jpg"
    //     , price: 20090, company: "רהיטי פאר",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // {
    //     id: "6352", name: "מיטת יחד לבן" , description: "דגם אנקרה", picture: "http://www.zilberahit.co.il/upload/original/15936169006398.jpg"
    //     , price: 590, company: "בחירהיט",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // {
    //     id: "7415", name: "מיטת יחד לבת" , description: "דגם בורמה", picture: "http://www.zilberahit.co.il/upload/original/15936172751918.jpg"
    //     , price: 620, company: "בחירהיט",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // {
    //     id: "8654", name: "פינת אוכל עגולה", description: "דגם סנטינו", picture: "http://www.zilberahit.co.il/upload/original/16457208737840.jpg"
    //     , price: 10090, company: "רהיטי פאר",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // {
    //     id: "9522", name: "פינת אוכל עיסקית" , description: "דגם דומינגו", picture: "http://www.zilberahit.co.il/upload/original/16233137817654.jpg"
    //     , price: 12800, company: "רהיטי פאר",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // {
    //     id: "10584", name: "מזנון קיר מעוצב" , description: "דגם עינב", picture: "http://www.zilberahit.co.il/upload/original/15936720696022.jpg"
    //     , price: 7090, company: "רהיטלי",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // {
    //     id: "11253", name: "ספה סגולה", description: "דגם אקיטה", picture: "http://www.zilberahit.co.il/upload/original/16051729869416.jpg"
    //     , price: 750, company: "רהיטלי",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // {
    //     id: "12568", name: "ספה נפתחת למיטה" , description: "דגם גרנדה", picture: "http://www.zilberahit.co.il/upload/original/15983544498469.jpg"
    //     , price: 1390, company: "רהיטי פאר",
    //     manufacturingDate: new Date(), canDisassemblyAndAssembly: false
    // },
    // ],
    selectProduct: null
}

export const ProductReducers = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SAVE_ALL_PRODUCT':
            {
                return{
                    arrProduct:actions.payload
                }
            }
        case "ADD_PRODUCT":
            return {
                arrProduct: [...state.arrProduct, actions.payload],
                selectProduct: state.selectProduct
            }
        case "DELETE_PRODUCT":           
            const tempArr = state.arrProduct.filter((item) => { return item.id != actions.id })
            return {
                arrProduct: tempArr,
                selectProduct: state.selectProduct
            }
        case "UPDATE_PRODUCT":
            let tempArr2 = state.arrProduct.filter((item) => {return item.id != actions.id });
            return {
                arrProduct: [...tempArr2, actions.payload],
                selectProduct: state.selectProduct//מה עושים כשיש רק בפונקציה אחת יותר מ2 שדות?????????????
            }
        case "SELECT_PRODUCT":
            return {
                arrProduct: state.arrProduct,
                selectProduct: actions.payload
            }
        default:
            return state;
    }

}