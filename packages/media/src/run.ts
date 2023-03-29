import Media from ".";

const media = new Media();
media.start().then(() => console.log(`[shaka-media]: Started.`));
