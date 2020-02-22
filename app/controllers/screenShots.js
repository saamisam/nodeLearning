const screenShotCrawler = require('../service/getScreenShotsService');
const responseService = require('../service/ResponseService');
module.exports = {
    takeScreenShot: async(res, params) => {
        if(Object.keys(params).length !== 0){
            var createScreenShots  = await screenShotCrawler.runCrawler(params);
            if(createScreenShots == false)
                responseService.statusAndMessageResponse(res, 400, "Failed. Check Params");
            else if(createScreenShots == true)
                responseService.statusAndMessageResponse(res, 200, "Success");

        }else{
            responseService.statusAndMessageResponse(res, 400, "Bad Request");
        }
    }
}