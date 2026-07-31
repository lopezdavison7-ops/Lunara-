/*
==================================
 LUNARA RESPONSE UTILS
 Creado por Luis González
==================================
*/

const success = (
    res,
    message,
    data = {},
    status = 200
) => {

    return res.status(status).json({
        success: true,
        message,
        data
    });

};

const error = (
    res,
    message,
    status = 400
) => {

    return res.status(status).json({
        success: false,
        message
    });

};

module.exports = {
    success,
    error
};