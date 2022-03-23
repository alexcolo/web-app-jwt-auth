import enigma from "enigma.js";
import schema from "enigma.js/schemas/12.20.0.json";
// import SenseUtilities from "enigma.js/sense-utilities";


const server = 'qmi-qs-abff';
const prefix = 'jwt';
const appId = '61b46c39-5e46-48d7-b1b3-5e6bdba6655d';

export async function fetchQlikResource() {
    
    await fetch(
        `https://${server}/${prefix}/content/Default/Qlik_default_green.png?qlikTicket=8RFldC2WyvCu-oxo`,
        {
          headers: {
            Authorization: //you need to use backend-service-jwt-sign-token for generate jwt token
              "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGlyZWN0b3J5IjoicW1pLXFzLWFiZmYiLCJ1c2VySWQiOiJxbGlrIiwiaWF0IjoxNjQ4MDMwNDUyfQ.aMa_9NX9bcirQCoS3-9CkbMdT99vRDuO6cqpfTre4SCCdisuhg04rBNaelSRx-pU6MnmwbVqNnBsYeDFjmjHToX_wrmoYMm5mbcl2TVUBEYtO_c_gjuiq_0-bDM4VhlHzKeOCOUVauN-77pxXJrtUFjwd-k21RpEYiXzD2U_y3x6-BNSCOsaoydpskrt-HS-cYAnte-PBvFjSLwPI28pmX9K0fkDuelH-8cCJW4EcSZfDTbBK0BTNDU3UvTMFqTmTNUi0v0_MU3ajZ4_ff23EJ4bc4OYqzWnzhNDZqbzkhVTVL1QYrFbWEw62aThr475bxsICfWkaTjPKLerBugLmg"
          },
          credentials: "include"
        }
    )
}

export async function getEnigmaApp() {
    
    const url = `wss://${server}/${prefix}/app/engineData`;
    const session = enigma.create({
      schema,
      url
    });
    const global = await session.open();
  
    return global.openDoc(appId);
  }


export default {
    fetchQlikResource,
    getEnigmaApp
  };