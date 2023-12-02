import {readFile} from "fs/promises";

async function content(path) {
    return await readFile(path, 'utf8')
}

export {content};