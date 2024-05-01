export const API_KEY = 'AIzaSyAFfrKkL2FDeW932X-eWPLc37P2Pz3nN0w';
export const value_converter = (value) => {

    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }

    else if(value >= 1000){
        return Math.floor(value/1000) + "K"
    }
} 