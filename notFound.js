import fs from 'node:fs/promises';
const fileName= './404.html';
let notFound;
try
{
    notFound = await fs.readFile(fileName,'utf-8');
}
catch(err)
{
    console.log(`Error in showing not found page. error = ${err}`);
}
export default notFound;