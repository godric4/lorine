import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import Airtable from 'airtable-node';


const airtable = new Airtable({ apiKey: process.env.VITE_AIRTABLE_API_KEY })
 .base(process.env.VITE_AIRTABLE_BASE)
 .table(process.env.VITE_AIRTABLE_TABLE);


export const handler = async () => {
 try {
  const response = await airtable.list({ maxRecords: 200 });

  const products = response.records.map((product) => {
   const { id, fields } = product;
   const {
    name,
    featured,
    price,
    description,
    category,
    images,
   } = fields;
   const { url } = images[0];
   return {
    id,
    name,
    featured,
    price,
    description,
    category,    
    image: url,
   };
  });

  return {
   statusCode: 200,
   body: JSON.stringify(products),
  };
 } catch (error) {
  console.log(error);
  return {
   statusCode: 500,
   body: 'There was an error',
  };
 }
};

