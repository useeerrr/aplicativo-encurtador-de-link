function baseService(alphabet) {
    async function toBase62(number) {
        if (number === 0 ) {
            return alphabet [0]
        }

        let result = '';

        while (number > 0 ) {
            result = alphabet[number % 62] + code;
            number = Math.floor(number / 62);
            
        }

        return code;
    }
}