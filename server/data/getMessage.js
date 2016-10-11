var MessageList = [{
    "Message": "Hello React"
}, {
    "Message": "Hello Webpack"
}, {
    "Message": "Hello NodeJs"
}, {
    "Message": "Hello Express"
}, ];


exports.getMessageList = function(callback) {
    callback(MessageList);
};
