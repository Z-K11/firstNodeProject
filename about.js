import fs from 'node:fs/promises';
const fileName = './about.html';
let about;
try
{
    about = await fs.readFile(fileName,'utf-8');
}catch(err)
{
    console.log(`Error in reading about page. Error = ${err}`);
}
export default about;