import Api from ".";

const api = new Api();
api.start().then(() => console.log(`[shaka-api]: Started.`));
