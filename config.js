/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                                                                                            // 
//          ██████╗ ██╗███████╗████████╗███████╗██████╗     ███╗   ███╗██████╗                // 
//         ██╔════╝ ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ████╗ ████║██╔══██╗               // 
//         ██║  ███╗██║█████╗     ██║   █████╗  ██║  ██║    ██╔████╔██║██║  ██║               // 
//         ██║   ██║██║██╔══╝     ██║   ██╔══╝  ██║  ██║    ██║╚██╔╝██║██║  ██║               // 
//         ╚██████╔╝██║██║        ██║   ███████╗██████╔╝    ██║ ╚═╝ ██║██████╔╝               // 
//          ╚═════╝ ╚═╝╚═╝        ╚═╝   ╚══════╝╚═════╝     ╚═╝     ╚═╝╚═════╝                //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Gifted-Md
   * @author : Gifted Tech Info
   * @youtube : https://www.youtube.com/@giftedtechnexus
   * @description : Gifted-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Gifted Tech Info.
   * © 2024 Gifted-Md.


*/













const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/db3a5c86c0e3dd11e0071.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ngoyaibraah@gmail.com"
global.location="Bungoma,Kenya."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || ""


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/ibrahimaitech/IBRAHIM-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/01bae0068863f48aff101.jpg"



global.devs = "254710772666,254739937062" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254710772666,254739937062";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254710772666,254739937062";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/01bae0068863f48aff101.jpg,https://telegra.ph/file/db3a5c86c0e3dd11e0071.mp4,https://telegra.ph/file/af1705e9b4d6aa0bc0f96.jpg",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254710772666,254739937062";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254xxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254710772666,254739937062";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://black-panther-scanner-871df7205958.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "BWM-XMDWM-XMD;;;H4sIAAAAAAAAA5VU23KqSBT9l37VHEEU1KpUDSCoQS4i4GXqPLTQYis0BJqbKf99Ck0qeZiTybx19WXt1Wutvd8ASXCONNSAyRtIM1xCitolbVIEJkAqjkeUgS4IIIVgAjqmLOv6sLweO4RXX2zh7KleU1nL/b70a6nPa7gIs6lGVeUZ3LogLQ4R9r8B1LiociP1aAtR5gx6oedM9fmSnO1E7i0uhF+9NtcXvW9GOHwGtxYR4gyTUElPKEYZjDTUWBBnP6OvWTN+5Rjb45rLy94hJ+ZwIYxhvU4DvI6YqbERB4noBSuX+Rn9AMWhteHqDpuQKh41UrrbTpkex09lIuLGR6WaM4VVa+vkQT/HIUHBIkCEYtr8WHfX1LDqN7gkXD3czw6961wmcbI/H+sTN2anKdksz9ZQFJXkZ8SpqRecvEjWdX9OxdezPIz0olDd6ZIZL6m994RwVJFdsXXFr8St7CMrl/+j+8ZaOFdLPEniy3CXvIqxZyl5FBr2no+NNF6O1bUviqwDlepn9OUzNUy5QhYezGd4FTiDpYo1r8+lB7djnxpRq1Nj7Vw2s+qTPqRF9h1LhVu4Uk20UOvLgVhOe6P0NLIrf7iZ5nYhoqox1+dG7EhNc2KF+WtsWDNh5pjD3JhfdYdn86lzhvupszH0JQ2k2WpB8er5/qMLahYBmLC3LshQiHOaQYoTct8bsV0Ag3KN/AzRu7zglTn2vE5veIHeFe3pEtJwsHJDhlacI/osdS7S2Qwtb3lKnkEXpFniozxHwRznNMkaHeU5DFEOJn//7gKCavowri3HsV1wxFlOXVKkUQKDD1c/DqHvJwWh64b4crtAGZgwn9uIUkzCvNWxIDDzT7hE8gnSHEyOMMrRrQsCVGIftXiA0WwJW8rGnsXpeZdhccwr61VL+ZSQx5U+cxwKfXR4GggM+zRg4OAJ8sz4acwwfYELGHTkfdAF+L1n2jd/tDCz0sXJXFZC1dRZvbvsxGHODnS8d9y7DQ/tUYYCMKFZgbrgAP1LkTrJBZFvcOfn1WU8NmxXv8BcObNXutGao3IyvfAL7sNTMHn7nFNyErR4A5aXNoLBgi6I7xHE7c/HfY4ZcPyQG/RHk/5f+a+q1RGm6S+CaAv7rnn7IEAU4ihvs29cK4GvZopO3HKZzGaiEopyKIJPjz7C/ghTXXd6kpOH/m7ma3pDxnr2gqTtVd29lLzIBIE9v+Z7uz7J4vO/gIAJsCFzVpzxyNG5qTV3NHN7Gl1NfbQkL5qwOrjs655Vw5gqprIN7UsUO1firBtzURR5Aetq26h2Ku+sjYdlOtX4sFRFOXxuqz2y8rVY7bqJVu7kqzTfMc1oXkjX3O9EZMiPeLqphmKxClxbvRp8vI1hz+rE48NeONV833Mij0XqoMfEco08x80MzC3YZNQPw0cb3sdA9D5+8b1B3t6TdcToPs0IbB36D2++Zpy5db9AvI/HP+RI8v1jWbnCYj6TiHzW056jNdvQG9Ub+dAJjfnWtUfCzPV3qxDcbr+7II0gPSZZDCYAkiBLcAC6III5FT/b1MExyimMUzBhBY7rD9gBx9z+AfVICqzcBwAA" ; // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.5.0",
  caption : process.env.CAPTION || "*🐯𝘽𝙇𝘼𝘾𝙆 𝙋𝘼𝙉𝙏𝙃𝙀𝙍 𝙈𝘿 𝙑4 🐯*" , // ```『 ©²⁰²⁴ ɢɪғᴛᴇᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛs 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ",
  packname: process.env.PACK_NAME || "Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ",
  botname : process.env.BOT_NAME  || "𝙋𝘼𝙉𝙏𝙃𝙀𝙍 𝙈𝘿",
  ownername:process.env.OWNER_NAME|| "𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};

























global.rank = "updated"
global.isMongodb = false ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
