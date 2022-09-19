export const changeUser=(typeUser)=>{//הפעולה+ מה היא מקבלת    
    return{
        type:'CHANGE_USER',//מחזירה את שם הפעולה באותיות גדולות
        payload:typeUser//וכן מחזירה שדות לפי הפרמטרים שנשלחו לפונקציה
    }
}
