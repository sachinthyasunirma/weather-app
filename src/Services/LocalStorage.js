
const setDataWithExpireTime = (key,value,time) =>{
    const now = new Date();

    const jsonData = {
        value: value,
        expiry: now.getTime() + time
    }

    localStorage.setItem(key,JSON.stringify(jsonData));
}

export const removeExpireDataInLocalStorage = () =>{
    const now = new Date();
    for(let i =0; i<localStorage.length; i++){
        let expiryDate = getWeatherDataFromLocalstorage(localStorage.key(i)).expiry;
        if(expiryDate<now.getTime()){
            localStorage.removeItem(localStorage.key(i));
        }
    }
}

export const saveWeatherDataInLocalStorage = (key,data) =>{
    setDataWithExpireTime(key,data,300000)
}

export const getWeatherDataFromLocalstorage = (id) =>{
    let data = localStorage.getItem(id);
    return JSON.parse(data);
}
