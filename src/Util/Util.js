export default class Util {

    static sleep(milliseconds) {
        let start = new Date().getTime();
        for (let i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }

    static async fetchFromURL(url, json) {
        return await fetch(url, json)
            .then(response => response.json())
            .catch(error => console.log(error));
    }
}
