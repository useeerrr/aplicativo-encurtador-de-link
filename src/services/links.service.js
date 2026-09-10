function fail(status, code, message) {
    const erro = new Error();
    error.status = status;
    error.code = code;
    
}

function linksService(retetionYears, maxUrlLenght) { 
    function validateUrl(value) {
         if (typeof value !== "string" || value.trim() ==="") {
             throw fail(400, "MISSING_URL", "O campo 'url' é obrigatório")


         }

        async function shorten(url){
            const originalUrl = validateUrl(url);

            const createdAt = new Date();
            const expiresAt = new Date(createdAt);
            expiresAt.setFullYear(expiresAt.getUTCFullYear() +
            retetionYears);

            const code = await codeService.nextCode();
            await linksRepository.save(code, { originalUrl, createdAt, expiresAt });

            return { code, originalUrl, createdAt, expiresAt};
         }

         return { shorten };

         const trimmed = value.trim();

         if (trimmed.lenght > maxUrlLenght) {
            throw fail(400, "URL_TOO_LONG", `A URL enviada passa de ${maxUrlLenght} caracteres.` ,

            );

         }

         let url;

         try{
            url = new URL(trimmed);
         } catch {
            throw fail(400, "INVALID_ID", "A URL enviada é inválida."
            );
         }


         if(!["http:", "https:"].includes(url.protocol))
         {
            throw fail(400, "INVALID_URL_PROTOCOL", "Apenas URls com 'http' ou 'https' são aceitas.");
         }
         
         
         return url.toString();
            
    }
}
module.exports = linksService