import { loadEnvFile } from 'node:process';
loadEnvFile('keys.env');
import express from 'express';
const app = express();
app.get('/',(req,res)=>
{
  res.sendFile('index.html',{root: import.meta.dirname})
})

app.get('/about',(req,res)=>res.sendFile('about.html',{root:import.meta.dirname}));
app.get('/contact-me',(req,res)=>res.sendFile('contact-me.html',{root:import.meta.dirname}));
app.use((req,res)=>res.status(404).sendFile('404.html',{root:import.meta.dirname}));
const port = process.env.PORT || 5173;
app.listen(port,(error)=>
{
  if(error)
    throw error;
  console.log(`Server running on port:${port}`);
})
