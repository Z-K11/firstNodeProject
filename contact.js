import fs from 'node:fs/promises';
const fileName = './contact-me.html';
let contact ;
try
{
    contact = await fs.readFile(fileName,'utf-8');
}
catch(err)
{
    console.log(`Error in reading contact page. Error = ${err}`);
}
export default contact;