// shaka
import Api from ".";

const graph = new Api();
graph.start().then(() => console.log(`[shaka-api]: Started.`));
