function linksController() {
    function formatResponse(link){
         return{
            code: link.code,
            url: `${baseUrl}/${link.code}`,
            originalUrl: link.originalUrl,
            createdAt: link.createdAt.toISOString(),
            expiresAt: link.expiresAt.toISOString(),
         }
    }
    return {
        async shorten(request, response, next) {
            try {
                const fullUrl = request.body.url;
                const shortenUrl = await linksService.shorten(fullUrl);
                const reponseBody = formatResponse(shortenUrl);
                

                reponse.status(201).json(reponseBody);
            } catch (error) {
              next(error)
            }

        }
    }
}