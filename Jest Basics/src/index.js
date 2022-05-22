const cities = ['Madrid', 'Barcelona', 'Sevilla', 'Santiago', 'Valencia'];

const randomString = () =>{
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
};

const reverseString2 = str =>{
    return new Promise((resolve, reject) =>{
        if(!str){
            reject(Error('Error, no hay String'))
        }
        resolve(str.split('').reverse().join(''))
    });
};

module.exports = randomString;