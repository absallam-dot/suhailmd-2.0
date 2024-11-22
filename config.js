const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348100968427";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_38_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkzLFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkzLFxuICAgICAgICA5LFxuICAgICAgICA5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDg1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDQzLFxuICAgICAgICA5MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYwLFxuICAgICAgICA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVNm9ZZEdybmpyRyszVjQrMzJzaEUzVjEzampBazNVK0FyUUdsV0NuT0JvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMTm5EbVFERFJpYUxOa0ZXekE4eXVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk0NTllM2Q4LTA0YTEtNGQ4ZS05ODgyLWU0ZGVhZjE5YzNhZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDE4MSxcbiAgICAgIDIyNCxcbiAgICAgIDIsXG4gICAgICAyNDUsXG4gICAgICAxMTQsXG4gICAgICAxMTMsXG4gICAgICAyMzksXG4gICAgICAxOTYsXG4gICAgICAxLFxuICAgICAgMjMwLFxuICAgICAgMjEyLFxuICAgICAgMTQyLFxuICAgICAgNzgsXG4gICAgICAxMjgsXG4gICAgICAxNTEsXG4gICAgICAxMzMsXG4gICAgICAyMDIsXG4gICAgICAyMzMsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAxMTgsXG4gICAgICAyNCxcbiAgICAgIDM0LFxuICAgICAgMTgwLFxuICAgICAgNixcbiAgICAgIDQ3LFxuICAgICAgNjIsXG4gICAgICAyOCxcbiAgICAgIDQyLFxuICAgICAgMTQxLFxuICAgICAgMzIsXG4gICAgICAyMjksXG4gICAgICA2NixcbiAgICAgIDE0NixcbiAgICAgIDk1LFxuICAgICAgMjQyLFxuICAgICAgMTczLFxuICAgICAgMTk0LFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk41OUtSS0VIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAwOTY4NDI3OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5LqU5p2hIOaCn1wiLFxuICAgIFwibGlkXCI6IFwiMTM5NDU3ODU2NTQ4ODc0OjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01hQzNuTVEwT1R3dVFZWUN5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN08zall2UXNWNkExUnhJZ2hxMnVYc3F0cjdoc3dXQVE5aERjMmFaOGppQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5ZUdxdnlqSWNLZEJpZlFZSVVsQms2MW1qWlVsMVd5U1JIclhSODRFNkwxOTlTazFaNVRkRFBYRW5KQWZsOVJpblhaZG5vblQ4VGQ2UG0rNHJjNVREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaN2FrQ0pkZTQ1QlQzQU9vQk9wN29qbkhaY2k0YlFqZjZZQ0YxRnRnQ1hXTDd2QklZeFV5RU5qbjE0U2RGdHlFSWkyM3d0MmlwaVlPL2FTemZPOHlCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAwOTY4NDI3OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxOTk4MjkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTm0xXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFObTEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyOUFuSTlLTThmTmJqQ2xnSU5IUWZ2dEtWa3ZCWStCK3dNdEkvRmx6UUkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0MjcxMjkwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI2NzQyNTcwMzc3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Ab.sallam",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
