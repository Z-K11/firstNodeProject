import fs from 'node:fs/promises';
const homeUrl = './index.html';
let data 
try
{
    data = await fs.readFile(homeUrl,'utf-8');
} catch(err)
{
    console.log(`Error in reading home page. error = ${err}`);
}
export default data;