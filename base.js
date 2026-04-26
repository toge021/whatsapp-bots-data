
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗫𝗟𝗜𝗖𝗢f𝗡-𝗩𝟰-𝗠𝗗  𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//                                                                                                      //
//                                                                                                      //      
//               ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██╗  ██╗                  //              
//                ██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║██║  ██║                  //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║███████║                  // 
//                ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝╚════██║                  // 
//               ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝      ██║                  //
//                ═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝       ╚═╝                  // 
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
/**
 * XLICON-V4-MD BOT
 * 
 * @project_name XLICON-V4-MD
 * @version 4.0
 * @description XLICON-V4, A Multi-functional WhatsApp user bot.
 * @base DGXeon
 * @re-upload recode copy code give credit ya :)
 * @author salmanytofficial
 * @youtube https://www.youtube.com/@s4salmanyt
 * @instagram ahmmikun
 * @telegram t.me/ahmmitech
 * @github @salmanytofficial
 * @whatsapp +923184070915
 * @created_by DGXeon
 * @credit_to Xeon
 * @copyright © 2024 XLICON-V3-MD
 */


//CODE TO HANDLE ERRORS
process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);
process.setMaxListeners(500);
//---------------------------------------------------------------------------------------------------------------------------//

//MODULE EXPOERTS AND REQUIREMENTS 
require('./settings');
require('./lib/fetch');
const fs = require('fs');
const os = require('os');
const util = require('util');
const jimp = require('jimp');
const path = require('path');
const fse = require('fs-extra');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const cron = require('node-cron');
const cheerio = require('cheerio');
const request = require('request');
const fetch = require('node-fetch');
const FileType = require('file-type');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const { exec, spawn, execSync } = require('child_process');
const googleTTS = require('google-tts-api');
const PDFDocument = require("pdfkit");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const fsx = require('fs-extra');
const scp2 = require('./lib/scraper2');
const { fetchChapterPages, searchManga } = require('./lib/mangadl');
const { uploadMedia, handleMediaUpload } = require('./lib/catbox'); 
const jsobfus = require('javascript-obfuscator');
const {translate} = require('@vitalets/google-translate-api');
const { randomBytes } = require('crypto')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage} = require('@whiskeysockets/baileys');
//---------------------------------------------------------------------------------------------------------------------------//

//Alert Function
let ntnsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/badword.json'))
//---------------------------------------------------------------------------------------------------------------------------//

//media
const VoiceNoteXlicon = JSON.parse(fs.readFileSync('./XliconMedia/database/xliconvn.json'));
const StickerXlicon = JSON.parse(fs.readFileSync('./XliconMedia/database/xliconsticker.json'));
const ImageXlicon = JSON.parse(fs.readFileSync('./XliconMedia/database/xliconimage.json'));
const VideoXlicon = JSON.parse(fs.readFileSync('./XliconMedia/database/xliconvideo.json'));
const DocXlicon = JSON.parse(fs.readFileSync('./XliconMedia/database/doc.json'));
const ZipXlicon = JSON.parse(fs.readFileSync('./XliconMedia/database/zip.json'));
const ApkXlicon = JSON.parse(fs.readFileSync('./XliconMedia/database/apk.json'));
//---------------------------------------------------------------------------------------------------------------------------//


//Permission Check Function
const prem = require('./src/premium');
const owner = JSON.parse(fs.readFileSync('./src/owner.json'));
//---------------------------------------------------------------------------------------------------------------------------//


//Uploader & Converter Function
const { TelegraPh, UploadFileUgu } = require('./lib/uploader');
const uploadImage = require('./lib/uploadImage');
const {
    toAudio,
    toPTT,
    toVideo,
    addExifAvatar,
    makeid,
  Telesticker,
  formatBytes,
  formatDuration
} = require('./lib/converter');
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list');
//---------------------------------------------------------------------------------------------------------------------------//


//Modules Function
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js');
const { imageToWebp, videoToWebp, writeExif, writeExifImg, writeExifVid } = require('./lib/exif');
const { chatGpt, tiktokDl, ytMp4, ytMp3 } = require('./lib/screaper');
const { gameSlot, gameCasinoSolo, gameMerampok, gameTangkapOr, daily, transferLimit, transferUang, buy, setLimit, setUang } = require('./lib/game');
const { pinterest, wallpaper, wikimedia, quotesAnime, happymod, umma, ringtone, jadwalsholat, styletext } = require('./lib/scraper');
const { formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, webApi, parseMention, generateProfilePicture, getRandom, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, generateToken, batasiTeks, randomText, isEmoji, getAllHTML, fetchBuffer, GIFBufferToVideoBuffer } = require('./lib/function');
//---------------------------------------------------------------------------------------------------------------------------//

// Read Database
let vote = db.others.vote = []
const xliconverifieduser = JSON.parse(fs.readFileSync('./src/user.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));
//---------------------------------------------------------------------------------------------------------------------------//

// Read JSON
//store database
const db_respon_list = JSON.parse(fs.readFileSync('./src/store/list.json'))

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
			users: {},
			groups: {},
			database: {},
			 settings: {},
			others: {},
...(global.db || {})
}

module.exports = XliconBotInc = async (XliconBotInc, m, chatUpdate, store) => {
	try {
		const {
            type
        } = m
        const botNumber = await XliconBotInc.decodeJid(XliconBotInc.user.id)
        const XliconTheCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		const budy = (typeof m.text == 'string' ? m.text : '')
		const prefix = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : '.'
		const isCmd = body.startsWith(prefix)
		//prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xliconybody = body.startsWith(pric)
        const isCommand = xliconybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
		const args = body.trim().split(/ +/).slice(1)
		const getQuoted = (m.quoted || m)
		const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		const command = XliconTheCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const sender = m.sender
		const isUser = xliconverifieduser.includes(sender)
		const groupMetadata = m.isGroup ? await XliconBotInc.groupMetadata(m.chat).catch(e => {}) : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		if (m.isGroup) {
			m.metadata = await XliconBotInc.groupMetadata(m.chat)
			m.admins = (m.metadata.participants.reduce((a, b) => (b.admin ? a.push({ id: b.id, admin: b.admin }) : [...a]) && a, []))
			m.isAdmin = m.admins.some((b) => b.id === m.sender)
			m.participant = m.key.participant
			m.isBotAdmin = !!m.admins.find((member) => member.id === botNumber)
		}
//---------------------------------------------------------------------------------------------------------------------------//


 // Function to check for emojis, excluding numbers
const containsEmoji = (text) => {
  const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}\uFE0F]/gu; // Exclude regular Unicode numbers
  return emojiRegex.test(text);
};
//---------------------------------------------------------------------------------------------------------------------------//


// Function to clean the message content, removing timestamps and keeping numbers
const cleanMessage = (messageText) => {
  // Remove timestamps like "Wed, 01 Jan 2024 00:00:00 GMT" but keep other numbers
  messageText = messageText.replace(/\b(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s+\w{3}\s+\d{1,2}\s+\d{4}\s+\d{2}:\d{2}:\d{2}\s+GMT[^\s]+\s\(.+\)\b/gi, ''); 
  
  return messageText.trim(); // Trim any extra spaces
};
//---------------------------------------------------------------------------------------------------------------------------//


// Access the text message content based on its type
let messageText = '';
if (m.message && m.message.conversation) {
  // For simple text messages
  messageText = m.message.conversation;
} else if (m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.text) {
  // For extended text messages
  messageText = m.message.extendedTextMessage.text;
}
//---------------------------------------------------------------------------------------------------------------------------//


// Clean the message to extract only the relevant text
messageText = cleanMessage(messageText);

// Check if the cleaned message contains emojis
const isEmoji = containsEmoji(messageText);


//  logic for detecting message types
const isMedia = /image|video|sticker|audio/.test(mime);
const isImage = (type == 'imageMessage');
const isVideo = (type == 'videoMessage');
const isAudio = (type == 'audioMessage');
const isViewOnce = (type === 'viewOnceMessage' || type === 'viewOnceMessageV2' || type === 'viewOnceMessageV2Extension');
const isDocument = (type == 'documentMessage');
const isLocation = (type == 'locationMessage');
const isContact = (type == 'contactMessage');
const isSticker = (type == 'stickerMessage');
const isText = (type == 'textMessage');
//---------------------------------------------------------------------------------------------------------------------------//


// Quoted message types
const isQuotedText = type === 'extendedTextMessage';
const isQuotedImage = type === 'extendedTextMessage';
const isQuotedLocation = type === 'extendedTextMessage';
const isQuotedVideo = type === 'extendedTextMessage';
const isQuotedSticker = type === 'extendedTextMessage';
const isQuotedAudio = type === 'extendedTextMessage';
const isQuotedContact = type === 'extendedTextMessage';
const isQuotedDocument = type === 'extendedTextMessage';
//---------------------------------------------------------------------------------------------------------------------------//


        //bug
        const clientId = XliconBotInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? XliconBotInc.user.id.split(':')[0] + "@s.whatsapp.net" || XliconBotInc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
		
		try {
		const isNumber = x => typeof x === 'number' && !isNaN(x)
		const isBoolean = x => typeof x === 'boolean' && Boolean(x)
		let user = global.db.users[m.sender]
		let limitUser = user ? (user.vip ? global.limit.vip : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free) : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free
		let uangUser = user ? (user.vip ? global.uang.vip : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free) : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free
		if (typeof user !== 'object') global.db.users[m.sender] = {}
		if (user) {
			if (!('vip' in user)) user.afkReason = false
			if (!isNumber(user.afkTime)) user.afkTime = -1
			if (!('afkReason' in user)) user.afkReason = ''
			if (!isNumber(user.limit)) user.limit = limitUser
			if (!('uang' in user)) user.uang = uangUser
			if (!('lastclaim' in user)) user.lastclaim = new Date * 1
			if (!('lastrampok' in user)) user.lastrampok = new Date * 1
		} else {
			global.db.users[m.sender] = {
				vip: false,
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
				uang: uangUser,
				lastclaim: new Date * 1,
				lastrampok: new Date * 1,
			}
		}
//---------------------------------------------------------------------------------------------------------------------------//


    //database values
			let group = global.db.groups[m.chat]
			if (typeof group !== 'object') global.db.groups[m.chat] = {}
			if (group) {
				if (!('ntnsfw' in group)) group.ntnsfw = false
				          if (!('welcome' in group)) group.welcome = false
                  if (!('setinfo' in group)) group.setinfo = false
				          if (!('badword' in group)) group.badword = false
                  if (!('antiforeignnum' in group)) group.antiforeignnum = false
                  if (!('antibot' in group)) group.antibot = false
                  if (!('antiviewonce' in group)) group.antiviewonce = false
                  if (!('antispam' in group)) group.antispam = false
                  if (!('antimedia' in group)) group.media = false
                  if (!('antivirtex' in group)) group.antivirtex = false
                  if (!('antiimage' in group)) group.antiimage = false
                  if (!('antivideo' in group)) group.video = false
                  if (!('antiaudio' in group)) group.antiaudio = false
                  if (!('antipoll' in group)) group.antipoll = false
                  if (!('antisticker' in group)) group.antisticker = false
                  if (!('anticontact' in group)) group.anticontact = false
                  if (!('antilocation' in group)) group.antilocation = false
                  if (!('antidocument' in group)) group.antidocument = false
                  if (!('antilink' in group)) group.antilink = false
                  if (!('antipromotion' in group)) group.antipromotion = false
                  if (!('antidelete' in group)) group.antidelete = false
                  if (!('antiemoji' in group)) group.antiemoji = false 
			} else {
				global.db.groups[m.chat] = {
				  ntsfw: false,
				  welcome: false,
				  setinfo: false,
				  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antidelete: false,
                  antiemoji: false,
				}
			}
		    let setting = global.db.settings[botNumber]
            if (typeof setting !== 'object') global.db.settings[botNumber] = {}
            if (setting) {
            	if (!('anticall' in setting)) setting.anticall = false
               if (!('antiswview' in setting)) setting.antiswview = false
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
            } else global.db.settings[botNumber] = {
               anticall: false,
           	antiswview: false,
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,               
            }
	} catch (e) {
		throw e;
	}
		
		const isVip = global.db.users[m.sender] ? global.db.users[m.sender].vip : false
		const isPremium = XliconTheCreator || prem.checkPremiumUser(m.sender, premium) || false
		const AntiNsfw = m.isGroup ? global.db.groups[m.chat].ntnsfw : false
		
		function pickRandom(list) {
			return list[Math.floor(list.length * Math.random())]
		}
//---------------------------------------------------------------------------------------------------------------------------//


		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(global.db.users)
			for (let jid of user) {
				const limitUser = global.db.users[jid].vip ? global.limit.vip : prem.checkPremiumUser(jid, premium) ? global.limit.premium : global.limit.free
				global.db.users[jid].limit = limitUser
				console.log('Limit Reseted')
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Karachi'
		})
		
		if (!XliconBotInc.public) {
			if (!m.key.fromMe) return
		}
//---------------------------------------------------------------------------------------------------------------------------//


		//Log
		if (m.message) {
			console.log(chalk.black.bgWhite('[ MESSAGE ]:'),chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ FROM ] :'),chalk.bgYellow(m.pushName),chalk.bgHex('#FF449F')(m.sender),chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
		}
//---------------------------------------------------------------------------------------------------------------------------//

        
        
// 🚫 Group Only 🚫
               if (!m.isGroup && !XliconTheCreator && db.settings[botNumber].onlygrub) { 
                   if (isCommand) { 
                       return replygcxlicon(`👋 *Hello, buddy!* 🌟\n\n📢 *Group Use Only!* 🛑\n\n⚠️ To avoid spam, this bot is only available in group chats.\n\n🛠️ *Need help?* Contact the owner here: wa.me/${ownernumber}`); 
                   } 
               } 

// 🔒 Private Chat Only 🔒
               if (!XliconTheCreator && db.settings[botNumber].onlypc && m.isGroup) { 
                   if (isCommand) { 
                       return replygcxlicon(`👋 *Hey there!* 🌟\n\n💬 *Private Chat Required!* 🚫\n\n⛔ To use this bot, please chat with it in a private chat.\n\nIf you have any issues, don't hesitate to reach out!`); 
                   } 
               } 

		
		// Auto Read
		if (db.settings[botNumber].autoread) {
            XliconBotInc.readMessages([m.key]);
        }
        
        // 🔄 Auto Set Bio 🔄
	if (db.settings[botNumber].autobio) {
            XliconBotInc.updateProfileStatus(`🚀 ${botname} is Live! 🎉\n\n           🕒 𝙐𝙥𝙩𝙞𝙢𝙚: 𝘙𝘶𝘯𝘯𝘪𝘯𝘨 𝘍𝘰𝘳 ${runtime(process.uptime())} ⏳\n\n                               ©XLICON BOT INC ⛩️`).catch(_ => _);
        }

        //auto type
        if (db.settings[botNumber].autotype){
        if (m.message) {
        	let xliconpos = ['composing']
            XliconBotInc.sendPresenceUpdate(xliconpos, m.chat)
        }
        }
        
        //auto type record
        if (db.settings[botNumber].autorecordtype){
        if (m.message) {
            let xliconmix = ['composing', 'recording']
            xliconmix2 = xliconmix[Math.floor(xliconmix.length * Math.random())]
            XliconBotInc.sendPresenceUpdate(xliconmix2, m.chat)
        }
        }
        
        //autorecord
        if (db.settings[botNumber].autorecord){
        if (m.message) {
        	let xliconpos = ['recording']
            XliconBotInc.sendPresenceUpdate(xliconpos, m.chat)
        }
        }
        
        //unavailable
        if (db.settings[botNumber].online) {
        	if (isCmd) {
        	XliconBotInc.sendPresenceUpdate('unavailable', m.chat)
        }
        }
        
        // 🚫 Auto Block Number 🚫
        if (m.sender.startsWith(`${autoblocknumber}`) && db.settings[botNumber].autoblocknum === true) {
            return XliconBotInc.updateBlockStatus(m.sender, 'block');
        }

        if (!m.sender.startsWith('91') && db.settings[botNumber].onlyindia === true) {
            return XliconBotInc.updateBlockStatus(m.sender, 'block');
        }

        if (!m.sender.startsWith('62') && db.settings[botNumber].onlyindo === true) {
            return XliconBotInc.updateBlockStatus(m.sender, 'block');
        } 
        
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.groups[m.chat].antiforeignnum === true) { 
            if (XliconTheCreator || m.isAdmin || !m.isBotAdmin) return;
            XliconBotInc.sendMessage(m.chat, { text: `🚫 *Sorry buddy!* 😔\n\nYou will be removed because the group admin/owner has enabled *Anti Foreign Number*. Only +${antiforeignnumber} country code is allowed to join the group.` }, {quoted: m});
            await sleep(2000);
            await XliconBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        }

//---------------------------------------------------------------------------------------------------------------------------//


      //Special type of message  
        async function sendMessageWithChannel(XliconBotInc, m, imagePath, footerText, messageText) {
          try {
            // Prepare the message content with the image and footer
            let msgs = generateWAMessageFromContent(m.chat, {
              viewOnceMessage: {
                message: {
                  "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: messageText
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                      text: footerText
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                      hasMediaAttachment: false,
                      ...await prepareWAMessageMedia({ image: fs.readFileSync(imagePath) }, { upload: XliconBotInc.waUploadToServer })
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{}],
                    }),
                    contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363232303807350@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                    }       

                  })
                }
              }
            }, { quoted: m });
        
            // Send the message via the client
            await XliconBotInc.relayMessage(m.chat, msgs.message, {});
          } catch (error) {
            console.error('Error sending message with footer:', error);
          }
        }
        
        
        async function sendMessageWithFooter(XliconBotInc, m, imagePath, footerText, messageText) {
          try {
            // Prepare the message content with the image and footer
            let msgs = generateWAMessageFromContent(m.chat, {
              viewOnceMessage: {
                message: {
                  "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: messageText
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                      text: footerText
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                      hasMediaAttachment: false,
                      ...await prepareWAMessageMedia({ image: fs.readFileSync(imagePath) }, { upload: XliconBotInc.waUploadToServer })
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{}],
                    }),
                    contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                    }       

                  })
                }
              }
            }, { quoted: m });
        
            
            
            // Send the message via the client
            await XliconBotInc.relayMessage(m.chat, msgs.message, {});
          } catch (error) {
            console.error('Error sending message with footer:', error);
          }
        }
        
//---------------------------------------------------------------------------------------------------------------------------//
        
       // 📥 Download Status #ctto
        try {
            const textLower = m.text.toLowerCase();
            if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
                const quotedMessage = m.msg.contextInfo.quotedMessage;
                if (quotedMessage) {
                    if (quotedMessage.imageMessage) {
                        let imageCaption = quotedMessage.imageMessage.caption;
                        let imageUrl = await XliconBotInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
                        XliconBotInc.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
                        replygcxlicon('*🖼️ Stealing & Downloading status...*'); 
                    }
                    if (quotedMessage.videoMessage) {
                        let videoCaption = quotedMessage.videoMessage.caption;
                        let videoUrl = await XliconBotInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
                        XliconBotInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
                        replygcxlicon('*🎥 Stealing & Downloading status...*');
                    }
                }
            }
        } catch (error) {
            console.error("⚠️ Error in 'send message' handling:", error);
        }

//---------------------------------------------------------------------------------------------------------------------------//

        //autosticker
        if (db.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                XliconBotInc.sendImageAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                XliconBotInc.sendVideoAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        // 🚫 Anti-Bot Protection 🚫
        if (db.groups[m.chat].antibot) {
            if (m.isBaileys && m.fromMe == false) {
                if (m.isAdmin || !m.m.isBotAdmin) {
                    // Admin or Bot Admin, do nothing
                } else {
                    replygcxlicon(`*🤖 Another Bot Detected!*\n\n🔒 *Husshhh!* Get away from this group!!!`);
                    return await XliconBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                }
            }
        }

   
// 🚫 Anti-View Once 🚫
    if (db.groups[m.chat].antiviewonce && (isViewOnce)) {
        if (XliconTheCreator || m.isAdmin || !m.isBotAdmin) {
            // Admin or Bot Admin, do nothing
        } else {
            replygcxlicon(`\`\`\`「 📸 View Once Detected 」\`\`\`\n\n⚠️ *Sorry,* but I have to delete it because the admin/owner has activated *Anti-View Once* for this group.`);
            return XliconBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
        }
    }


// 🚫 Anti-Emoji 🚫
if (db.groups[m.chat].antiemoji && (isEmoji)) {
    if (XliconTheCreator || m.isAdmin || !m.isBotAdmin) {
        // Admins or bot creators are allowed to send emojis
    } else {
        replygcxlicon(`\`\`\`「 🚫 Emoji Detected 」\`\`\`\n\n⚠️ *Sorry,* but I have to delete it because the admin/owner has activated *Anti-Emoji* for this group.`);
        return XliconBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
    }
}

    
// 🚫 Anti-Promotion 🚫
if (db.groups[m.chat].antipromotion) {
    if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL`)) {
        if (!m.isBotAdmin) return;
        if (XliconTheCreator) return;
        if (m.isAdmin) return;

        // Delete the promotional message
        await XliconBotInc.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: m.key.participant
            }
        });

        // Notify the user
        XliconBotInc.sendMessage(m.chat, {
            text: `\`\`\`「 🚫 Promotion Detected 」\`\`\`\n\n⚠️ @${m.sender.split("@")[0]} has sent a promotion message and it has been successfully deleted.`,
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: m });
    }
}

// 🚫 Respond to Bad Words 🚫
if (db.groups[m.chat].badword) {
    for (let bak of bad) {
        if (budy === bak) {
            // Delete the message with the bad word
            await XliconBotInc.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant
                }
            });

            // Notify the user about the bad word usage
            XliconBotInc.sendMessage(m.chat, {
                text: `\`\`\`「 🚫 Bad Word Detected 」\`\`\`\n\n⚠️ @${m.sender.split("@")[0]} was using harsh words, and their chat has been deleted.`,
                contextInfo: { mentionedJid: [m.sender] }
            }, { quoted: m });
        }
    }
}

// 🦠 ANTI VIRUS 🦠
if (m.isGroup && db.groups[m.chat].antivirtex) {
    if (
        budy.includes('๒๒๒๒') || 
        budy.includes('ดุ') || 
        budy.includes('ผิดุท้เึางืผิดุท้เึางื') || 
        budy.includes('๑๑๑๑๑๑๑๑๑๑') || 
        budy.includes('৭৭৭৭৭৭৭৭') || 
        budy.includes('   ⃢   ⃢   ⃢  ') || 
        budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || 
        budy.includes('ผดิทุเ้ึางผืดิทุเ้') || 
        budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || 
        budy.includes('᥋') || 
        budy.includes('؁') || 
        budy.includes('ٯٯٯٯٯ') 
    ) {
        if (m.isBotAdmin) return replygcxlicon('*⚠️ VIRTEX DETECTED*');
        
        console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'));
        
        XliconBotInc.sendText(m.chat, `*📩 MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`);

        if (!m.m.isBotAdmin) return;
        if (XliconTheCreator) return;

        XliconBotInc.groupParticipantsUpdate(m.chat, [sender], 'remove');
        await XliconBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});

        XliconBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`, {
            text: `👋 Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup ? `in ${groupName}` : ''}`
        });
    }
}
    
  // 🚫 ANTI MEDIA 🚫
if (db.groups[m.chat].antimedia && isMedia) {
    if (XliconTheCreator || m.isAdmin || !m.isBotAdmin) {		  
        // Admins or bot creators are allowed to send media
    } else {
        replygcxlicon(`\`\`\`「 📸 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group.`);
        return XliconBotInc.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: m.key.id, 
                participant: m.key.participant 
            } 
        });
    }
}

     // 🚫 ANTI MEDIA CHECKS 🚫

// 📸 Anti-image
if (db.groups[m.chat].antiimage && isImage) {
    if (!XliconTheCreator && !m.isAdmin && m.isBotAdmin) {
        replygcxlicon(`\`\`\`「 🖼️ Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group.`);
        return XliconBotInc.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: m.key.id, 
                participant: m.key.participant 
            } 
        });
    }
}

// 🎥 Anti-video
if (db.groups[m.chat].antivideo && isVideo) {
    if (!XliconTheCreator && !m.isAdmin && m.isBotAdmin) {
        replygcxlicon(`\`\`\`「 🎬 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group.`);
        return XliconBotInc.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: m.key.id, 
                participant: m.key.participant 
            } 
        });
    }
}

// 🏷️ Anti-sticker
if (db.groups[m.chat].antisticker && isSticker) {
    if (!XliconTheCreator && !m.isAdmin && m.isBotAdmin) {
        replygcxlicon(`\`\`\`「 🏷️ Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group.`);
        return XliconBotInc.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: m.key.id, 
                participant: m.key.participant 
            } 
        });
    }
}

// 🎵 Anti-audio
if (db.groups[m.chat].antiaudio && isAudio) {
    if (!XliconTheCreator && !m.isAdmin && m.isBotAdmin) {
        replygcxlicon(`\`\`\`「 🎧 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group.`);
        return XliconBotInc.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: m.key.id, 
                participant: m.key.participant 
            } 
        });
    }
}

// 📊 Anti-poll
if (db.groups[m.chat].antipoll && type === "pollCreationMessage") {
    if (!XliconTheCreator && !m.isAdmin && m.isBotAdmin) {
        replygcxlicon(`\`\`\`「 📊 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group.`);
        return XliconBotInc.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: m.key.id, 
                participant: m.key.participant 
            } 
        });
    }
}

// 📍 Anti-location
if (db.groups[m.chat].antilocation && isLocation) {
    if (!XliconTheCreator && !m.isAdmin && m.isBotAdmin) {
        replygcxlicon(`\`\`\`「 📍 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group.`);
        return XliconBotInc.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: m.key.id, 
                participant: m.key.participant 
            } 
        });
    }
}

// 📄 Anti-document
if (db.groups[m.chat].antidocument && isDocument) {
    if (!XliconTheCreator && !m.isAdmin && m.isBotAdmin) {
        replygcxlicon(`\`\`\`「 📄 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group.`);
        return XliconBotInc.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: m.key.id, 
                participant: m.key.participant 
            } 
        });
    }
}

// 📞 Anti-contact
if (db.groups[m.chat].anticontact && isContact) {
    if (!XliconTheCreator && !m.isAdmin && m.isBotAdmin) {
        replygcxlicon(`\`\`\`「 📞 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group.`);
        return XliconBotInc.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: m.key.id, 
                participant: m.key.participant 
            } 
        });
    }
}

// 🔗 Anti-link
if (db.groups[m.chat].antilink) {
    if (budy.match('http') && budy.match('https')) {
        const bvl = `\`\`\`「 🔗 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`;
        if (m.isAdmin || m.key.fromMe || XliconTheCreator) return replygcxlicon(bvl);
        await XliconBotInc.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: m.key.participant
            }
        });
        XliconBotInc.sendMessage(m.chat, {
            text: `\`\`\`「 🔗 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted.`,
            contextInfo: { mentionedJid: [m.sender] },
            quoted: m
        });
    }
}
 
//---------------------------------------------------------------------------------------------------------------------------//

        
// auto download #ctto
// Auto-download feature
if (db.settings[botNumber].autodownload && !m.key.fromMe) {
  try {
    // Check if the message contains an Instagram link
    if (budy.match(`instagram.com`)) {
      await XliconBotInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

      // Updated Instagram API
      let anu = await fetchJson(`https://bk9.fun/download/instagram2?url=${encodeURIComponent(budy)}`);
      if (anu.status) {
        // Extract the first video or image from the response
        let videoUrl = anu.BK9[0]?.url || "No video found";
        let thumbnail = anu.BK9[0]?.thumbnail;

        // Send the video
        await XliconBotInc.sendMessage(m.chat, {
          video: { url: videoUrl },
          caption: `Auto Download ✅`,
          thumbnail: { url: thumbnail },
        }, { quoted: m });
      } else {
        await XliconBotInc.sendMessage(m.chat, { text: "Failed to fetch Instagram video." }, { quoted: m });
      }
      await XliconBotInc.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });

    // Check for TikTok links
    } else if (budy.match(`tiktok.com`)) {
      await XliconBotInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

      let anu = await fetchJson(`https://bk9.fun/download/tiktok?url=${encodeURIComponent(budy)}`);
      if (anu.status) {
        await XliconBotInc.sendMessage(m.chat, {
          video: { url: anu.BK9.BK9 },
          caption: `Auto Download ✅`
        }, { quoted: m });
      } else {
        await XliconBotInc.sendMessage(m.chat, { text: "Failed to fetch TikTok video." }, { quoted: m });
      }
      await XliconBotInc.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });

    // Check for Facebook links
    } else if (budy.match(`facebook.com`)) {
      await XliconBotInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

      let anu = await fetchJson(`https://bk9.fun/download/fb?url=${encodeURIComponent(budy)}`);
      if (anu.status) {
        await XliconBotInc.sendMessage(m.chat, {
          video: { url: anu.BK9.hd },
          caption: `Auto Download ✅`
        }, { quoted: m });
      } else {
        await XliconBotInc.sendMessage(m.chat, { text: "Failed to fetch Facebook video." }, { quoted: m });
      }
      await XliconBotInc.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });

    // Check for YouTube links
    } else if (budy.match(`youtube.com|youtu.be`)) {
      await XliconBotInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

      let anu = await fetchJson(`https://bk9.fun/download/youtube2?url=${encodeURIComponent(budy)}`);
      if (anu.status) {
        await XliconBotInc.sendMessage(m.chat, {
          video: { url: anu.BK9.BK9 },
          caption: `Auto Download ✅`
        }, { quoted: m });
      } else {
        await XliconBotInc.sendMessage(m.chat, { text: "Failed to fetch YouTube video." }, { quoted: m });
      }
      await XliconBotInc.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
    }
  } catch (err) {
    console.error(err);
    await XliconBotInc.sendMessage(m.chat, { react: { text: "✖️", key: m.key } });
  }
}

//---------------------------------------------------------------------------------------------------------------------------//

// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !XliconTheCreator) {
				return
			}

      
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }
					await XliconBotInc.relayMessage(m.chat, { [chats.type]: chats.msg }, {})
				}
			}
		}

//---------------------------------------------------------------------------------------------------------------------------//


		//user db //friend
        if (isCmd && !isUser) {
xliconverifieduser.push(sender)
fs.writeFileSync('./src/user.json', JSON.stringify(xliconverifieduser, null, 2))
}
	
//---------------------------------------------------------------------------------------------------------------------------//



//All games featres here

		// Check Expiry
		prem.expiredCheck(XliconBotInc, premium);
		
		// TicTacToe
let room = Object.values(game.tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING');
if (room) {
    let ok;
    let isWin = false;
    let isTie = false;
    let isSurrender = false;

    if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return;

    isSurrender = !/^[1-9]$/.test(m.text);
    if (m.sender !== room.game.currentTurn) {
        if (!isSurrender) return true;
    }

    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
        replygcxlicon({
            '-3': '🚫 The game is over',
            '-2': '❌ Invalid',
            '-1': '⚠️ Invalid Position',
            0: '⚠️ Invalid Position',
        }[ok]);
        return true;
    }

    if (m.sender === room.game.winner) isWin = true;
    else if (room.game.board === 511) isTie = true;

    let arr = room.game.render().map(v => {
        return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
        }[v];
    });

    if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX;
        isWin = true;
    }

    let winner = isSurrender ? room.game.currentTurn : room.game.winner;
    if (isWin) {
        global.db.users[m.sender].limit += 3;
        global.db.users[m.sender].uang += 3000;
    }

    let str = `🏆 *Room ID:* ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `🎉 @${winner.split('@')[0]} *Wins!*` : isTie ? `💔 *Game Over*` : `🔄 *Turn* ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\n📝 *Type* *surrender* to give up and admit defeat`;

    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat) {
        room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat;
    }

    if (room.x !== room.o) await XliconBotInc.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m });
    await XliconBotInc.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m });

    if (isTie || isWin) {
        delete game.tictactoe[room.id];
    }
}

// Suit PvP
let roof = Object.values(game.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender));
if (roof) {
    let win = '';
    let tie = false;

    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
        if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
            replygcxlicon(`🔴 @${roof.p2.split`@`[0]} *rejected the suit*,\n❌ *suit cancelled*`);
            delete game.suit[roof.id];
            return true;
        }
        roof.status = 'play';
        roof.asal = m.chat;
        clearTimeout(roof.waktu);
        replygcxlicon(`🎊 The suit has been sent to chat\n\n👤 @${roof.p.split`@`[0]} and @${roof.p2.split`@`[0]}\n\n✏️ *Please select a suit in the respective chat* https://wa.me/${botNumber.split`@`[0]}`);
        
        if (!roof.pilih) XliconBotInc.sendMessage(roof.p, { text: `🔄 *Please select* \n\n🪨 Rock\n📄 Paper\n✂️ Scissors` }, { quoted: m });
        if (!roof.pilih2) XliconBotInc.sendMessage(roof.p2, { text: `🔄 *Please select* \n\n🪨 Rock\n📄 Paper\n✂️ Scissors` }, { quoted: m });
        
        roof.waktu_milih = setTimeout(() => {
            if (!roof.pilih && !roof.pilih2) replygcxlicon(`🚫 Both players have no intention of playing,\n❌ *Suit cancelled*`);
            else if (!roof.pilih || !roof.pilih2) {
                win = !roof.pilih ? roof.p2 : roof.p;
                replygcxlicon(`❌ @${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose a suit, the game ends`);
            }
            delete game.suit[roof.id];
            return true;
        }, roof.timeout);
    }

    let jwb = m.sender == roof.p;
    let jwb2 = m.sender == roof.p2;
    let g = /scissors/i;
    let b = /rock/i;
    let k = /paper/i;
    let reg = /^(scissors|rock|paper)/i;

    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
        roof.pilih = reg.exec(m.text.toLowerCase())[0];
        roof.text = m.text;
        replygcxlicon(`✅ You have chosen *${m.text}* ${!roof.pilih2 ? `\n⏳ Waiting for the opponent to choose` : ''}`);
        if (!roof.pilih2) XliconBotInc.sendMessage(roof.p2, { text: '_The opponent has already chosen_\n⚠️ *Now it is your turn*' });
    }

    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
        roof.pilih2 = reg.exec(m.text.toLowerCase())[0];
        roof.text2 = m.text;
        replygcxlicon(`✅ You have chosen *${m.text}* ${!roof.pilih ? `\n⏳ Waiting for the opponent to choose` : ''}`);
        if (!roof.pilih) XliconBotInc.sendMessage(roof.p, { text: '_The opponent has already chosen_\n⚠️ *Now it is your turn*' });
    }

    let stage = roof.pilih;
    let stage2 = roof.pilih2;

    if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih);
        
        if (b.test(stage) && g.test(stage2)) win = roof.p;
        else if (b.test(stage) && k.test(stage2)) win = roof.p2;
        else if (g.test(stage) && k.test(stage2)) win = roof.p;
        else if (g.test(stage) && b.test(stage2)) win = roof.p2;
        else if (k.test(stage) && b.test(stage2)) win = roof.p;
        else if (k.test(stage) && g.test(stage2)) win = roof.p2;
        else if (stage == stage2) tie = true;

        global.db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3;
        global.db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000;

        XliconBotInc.sendMessage(roof.asal, { text: `🏆 *Suit Results* ${tie ? '\n🔄 *SERIES*' : ''}\n\n👤 @${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? `🥇 *Win* \n` : `❌ *Lost* \n`}\n👤 @${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? `🥇 *Win* \n` : `❌ *Lost* \n`}\n\n💰 *Winner Gets*\n*Present:* Money (3000) & Limit (3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m });

        delete game.suit[roof.id];
    }
}

        // Guess Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in game.tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				game.tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				game.tebakbom[m.sender].pick++;
				XliconBotInc.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
				game.tebakbom[m.sender].bomb--;
				game.tebakbom[m.sender].nyawa.pop();
				let brd = game.tebakbom[m.sender].board;
				if (game.tebakbom[m.sender].nyawa.length < 1) {
					global.db.users[m.sender].limit -= 1
					await replygcxlicon(`*THE GAME IS OVER*\nYou were hit by a bomb\n\n ${brd.join('')}\n\n*Selected :* ${game.tebakbom[m.sender].pick}\n_Limit Reduction : 1_`);
					XliconBotInc.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
					delete game.tebakbom[m.sender];
				} else await replygcxlicon(`*SELECT A NUMBER*\n\nYou were hit by a bomb\n ${brd.join('')}\n\nSelected: ${game.tebakbom[m.sender].pick}\nRemaining life: ${game.tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				game.tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				game.tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				game.tebakbom[m.sender].pick++;
				game.tebakbom[m.sender].lolos--;
				let brd = game.tebakbom[m.sender].board;
				if (game.tebakbom[m.sender].lolos < 1) {
					global.db.users[m.sender].limit += 3
					global.db.users[m.sender].uang += 3000
					await replygcxlicon(`*YOU ARE GREAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Selected :* ${game.tebakbom[m.sender].pick}\n*Remaining life :* ${game.tebakbom[m.sender].nyawa}\n*Bomb :* ${game.tebakbom[m.sender].bomb}\n*Present :* Money(3000) & Limit(3)`);
					delete game.tebakbom[m.sender];
				} else replygcxlicon(`*SELECT A NUMBER*\n\n${brd.join('')}\n\nSelected : ${game.tebakbom[m.sender].pick}\nRemaining life : ${game.tebakbom[m.sender].nyawa}\nBomb : ${game.tebakbom[m.sender].bomb}`)
			}
		}
		
		// Math
		if (game.kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = game.kuismath[m.sender.split('@')[0]].jawaban
			const difficultyMap = { 'noob': 1, 'easy': 2, 'medium': 3, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
			let hasilLimit = difficultyMap[game.kuismath[m.sender.split('@')[0]].mode]
			if (isNaN(budy)) return
			if (budy.toLowerCase() == jawaban) {
				global.db.users[m.sender].limit += hasilLimit
				global.db.users[m.sender].uang += hasilLimit * 1000
				await replygcxlicon(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\nYou Get a Limit *${hasilLimit}*\n\nWant to play again? Send ${prefix}math mode`)
				delete game.kuismath[m.sender.split('@')[0]]
			} else replygcxlicon('*Wrong answer!*')
		}
		
		// Menfes
		if (!m.isGroup) {
			if (game.menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Order From ${game.menfes[m.sender].nama ? game.menfes[m.sender].nama : 'Somebody'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
					const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Order From ${game.menfes[m.sender].nama ? game.menfes[m.sender].nama : 'Somebody'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
					await XliconBotInc.relayMessage(game.menfes[m.sender].tujuan, pesan, {});
				}
			}
		}



//game features end here    
//---------------------------------------------------------------------------------------------------------------------------//




//reply features
		// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
for (let jid of mentionUser) {
    let user = global.db.users[jid];
    if (!user) continue;
    let afkTime = user.afkTime;
    if (!afkTime || afkTime < 0) continue;
    let reason = user.afkReason || '';
    replygcxlicon(`🚫 *Don't tag him!*\n🕒 He's AFK ${reason ? 'with reason: *' + reason + '*' : '*with no reason*'}\n⏳ During: *${clockString(new Date - afkTime)}*`.trim());
}
if (global.db.users[m.sender].afkTime > -1) {
    let user = global.db.users[m.sender];
    replygcxlicon(`✅ @${m.sender.split('@')[0]} *berhenti AFK*${user.afkReason ? ' *after* ' + user.afkReason : ''}\n⏳ During: *${clockString(new Date - user.afkTime)}*`);
    user.afkTime = -1;
    user.afkReason = '';
}



		//reply
        async function replygcxlicon(teks) {
            if (typereply === 'v1') {
               m.reply(teks)

            } else if (typereply === 'v2') {
                XliconBotInc.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });

            } else if (typereply === 'v3') {
               XliconBotInc.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })

            } else if (typereply === 'v4') {
                replygcxlicon2(teks)
            }
        }

        
//fake reply with channel link embedded
async function replygcxlicon2(txt) {
const xliconnewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "Click here to get $69",
newsletterJid: "120363232303807350@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: ownername,
thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
sourceUrl: websitex
},
},
text: txt,
}
return XliconBotInc.sendMessage(m.chat, xliconnewrep, {
quoted: m,
})
}

//---------------------------------------------------------------------------------------------------------------------------//

//premium
        async function replyprem(teks) {
    replygcxlicon(`🚨 *This feature is for premium users only!*\n💬 *Contact the owner* to become a premium user!`);
}


//script replier
        async function sendXliconBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await XliconBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
//---------------------------------------------------------------------------------------------------------------------------//


//theme sticker reply
        const XliconStickWait = () => {
        let XliconStikRep = fs.readFileSync('./XliconMedia/theme/sticker_reply/wait.webp')
        XliconBotInc.sendMessage(m.chat, { sticker: XliconStikRep }, { quoted: m })
        }
        const XliconStickAdmin = () => {
        let XliconStikRep = fs.readFileSync('./XliconMedia/theme/sticker_reply/admin.webp')
        XliconBotInc.sendMessage(m.chat, { sticker: XliconStikRep }, { quoted: m })
        }
        const XliconStickBotAdmin = () => {
        let XliconStikRep = fs.readFileSync('./XliconMedia/theme/sticker_reply/botadmin.webp')
        XliconBotInc.sendMessage(m.chat, { sticker: XliconStikRep }, { quoted: m })
        }
        const XliconStickOwner = () => {
        let XliconStikRep = fs.readFileSync('./XliconMedia/theme/sticker_reply/owner.webp')
        XliconBotInc.sendMessage(m.chat, { sticker: XliconStikRep }, { quoted: m })
        }
        const XliconStickGroup = () => {
        let XliconStikRep = fs.readFileSync('./XliconMedia/theme/sticker_reply/group.webp')
        XliconBotInc.sendMessage(m.chat, { sticker: XliconStikRep }, { quoted: m })
        }
        const XliconStickPrivate = () => {
        let XliconStikRep = fs.readFileSync('./XliconMedia/theme/sticker_reply/private.webp')
        XliconBotInc.sendMessage(m.chat, { sticker: XliconStikRep }, { quoted: m })
        }
  
//theme sticker reply end here        
//---------------------------------------------------------------------------------------------------------------------------//


//time
const xday = moment.tz('Asia/Karachi').locale('en-IN').format('dddd');
const xdate = moment.tz('Asia/Karachi').locale('en-IN').format('DD/MM/YYYY');
const xtime = moment().tz('Asia/Karachi').locale('en-IN').format('HH:mm:ss');
const time2 = moment().tz('Asia/Karachi').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var xliconytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xliconytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xliconytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xliconytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xliconytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xliconytimewisher = `Good Morning 🌄`
 } 

//---------------------------------------------------------------------------------------------------------------------------//

//theme txt
let setv = pickRandom(global.listv)

//autoreply
for (let BhosdikaXlicon of VoiceNoteXlicon) {
if (budy === BhosdikaXlicon) {
let audiobuffy = fs.readFileSync(`./XliconMedia/audio/${BhosdikaXlicon}.mp3`)
XliconBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXlicon of StickerXlicon){
if (budy === BhosdikaXlicon){
let stickerbuffy = fs.readFileSync(`./XliconMedia/sticker/${BhosdikaXlicon}.webp`)
XliconBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXlicon of ImageXlicon){
if (budy === BhosdikaXlicon){
let imagebuffy = fs.readFileSync(`./XliconMedia/image/${BhosdikaXlicon}.jpg`)
XliconBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXlicon of VideoXlicon){
if (budy === BhosdikaXlicon){
let videobuffy = fs.readFileSync(`./XliconMedia/video/${BhosdikaXlicon}.mp4`)
XliconBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

//reply features end here
//---------------------------------------------------------------------------------------------------------------------------//



//send features
const sendapk = (teks) => {
XliconBotInc.sendMessage(m.chat, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXlicon of ApkXlicon) {
if (budy === BhosdikaXlicon) {
let buffer = fs.readFileSync(`./XliconMedia/apk/${BhosdikaXlicon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
XliconBotInc.sendMessage(m.chat, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXlicon of ZipXlicon) {
if (budy === BhosdikaXlicon) {
let buffer = fs.readFileSync(`./XliconMedia/zip/${BhosdikaXlicon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
XliconBotInc.sendMessage(m.chat, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXlicon of DocXlicon) {
if (budy === BhosdikaXlicon) {
let buffer = fs.readFileSync(`./XliconMedia/doc/${BhosdikaXlicon}.pdf`)
senddocu(buffer)
}
}



async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

//send features end here
//---------------------------------------------------------------------------------------------------------------------------//




// Response Addlist
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
XliconBotInc.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
XliconBotInc.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}



// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: XliconBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, XliconBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
XliconBotInc.ev.emit('messages.upsert', msg)
} 

//---------------------------------------------------------------------------------------------------------------------------//




switch(isCommand) {



//---------------------------------------------------------------------------------------------------------------------------//


//█▀▀ █▀▀ ▄▀▄ █▀█ █▀▀ █▄█   █▀▀ █▀█ █▄ ▄█ █▄ ▄█ ▄▀▄ █▀▄ █▄ █ █▀▀ 
//▄██ ██▄ █▀█ █▀▄ █▄▄ █ █   █▄▄ █▄█ █ ▀ █ █ ▀ █ █▀█ █▄▀ █ ▀█ ▄██ 

case 'google': {
  if (!q) return replygcxlicon(`❗ Example : ${prefix + command} ${botname}`);

  await XliconStickWait(); // Show loading message or animation

  const axios = require('axios');
  
  try {
    // Perform the GET request to the custom search API
    const searchUrl = `https://aemt.uk.to/googlesearch?query=${encodeURIComponent(text)}`;
    const response = await axios.get(searchUrl);

    if (response.data.result.length === 0) {
      return replygcxlicon(`❌ *No results found for* "${text}".`);
    }

    let resultText = `🔍 *Google Search Results for*: ${text}\n\n`;

    // Loop through the search results and format them with emojis
    for (let g of response.data.result) {
      resultText += `✨ *Title*: ${g.title} 📑\n`;
      resultText += `📝 *Description*: ${g.description}\n`;
      resultText += `🔗 *Link*: [Click Here](${g.link}) 🌐\n\n`;
      resultText += `────────────────────────\n\n`;
    }

    // Send the formatted response
    return replygcxlicon(resultText);

  } catch (err) {
    console.error('Error fetching Google search results:', err.message);
    return replygcxlicon('⚠️ *Error*: Could not fetch results. Please try again later.');
  }
}
break;

case 'weather':{
  if (!text) return replygcxlicon('What location?')
  await XliconStickWait()                
              let wdata = await axios.get(
                  `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
              );
              let textw = "";
              textw += `🌍 *Weather Report for ${text}*\n\n`;
              textw += `🌤️ *Weather:* ${wdata.data.weather[0].main}\n`;
              textw += `🌥️ *Description:* ${wdata.data.weather[0].description}\n`;
              textw += `🌡️ *Avg Temp:* ${wdata.data.main.temp}°C\n`;
              textw += `🤗 *Feels Like:* ${wdata.data.main.feels_like}°C\n`;
              textw += `🌬️ *Pressure:* ${wdata.data.main.pressure} hPa\n`;
              textw += `💧 *Humidity:* ${wdata.data.main.humidity}%\n`;
              textw += `🍃 *Wind Speed:* ${wdata.data.wind.speed} m/s\n`;
              textw += `🗺️ *Latitude:* ${wdata.data.coord.lat}\n`;
              textw += `🗺️ *Longitude:* ${wdata.data.coord.lon}\n`;
              textw += `🏳️ *Country:* ${wdata.data.sys.country}\n`;
              
             XliconBotInc.sendMessage(
                  m.chat, {
                      text: textw,
                  }, {
                      quoted: m,
                  }
             )
             }
             break
        


case 'wikipedia': case 'wiki': {
  if (!text) return await replygcxlicon('❗ Enter what you want to search for on Wikipedia');

  try {
      // Fetch Wikipedia page content
      const link = await axios.get(`https://en.wikipedia.org/wiki/${text}`);
      const $ = cheerio.load(link.data);

      // Extract title and summary
      let wik = $('#firstHeading').text().trim();
      let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim();

      // Create a message body with the title and summary
      let message = `▢ *Wikipedia Search Result* 🧐\n\n`;
      message += `‣ *Title*: ${wik} 📚\n\n`;
      message += `${resulw} 📖\n`;

      // Send the response message
      await replygcxlicon(message);

  } catch (e) {
      console.error(e);
      await replygcxlicon('⚠️ No results found or failed to fetch data. Try again later!');
  }
}
break;


case 'yts': case 'ytsearch': {
  if (!text) return await replygcxlicon(`*Example :* ${prefix + command} title`);
await XliconStickWait()
  try {
      let yts = require("yt-search");
      let search = await yts(text);
      let videos = search.all;
      console.log(videos);

      if (!videos || videos.length === 0) {
          return await replygcxlicon('❌ No video found');
      }

      // Prepare the combined message for up to 10 videos
      let message = `*Search Results for: ${text}*\n\n`;
      const numVideos = Math.min(videos.length, 10);  // Send up to 10 videos, or fewer if there are less than 10

      for (let i = 0; i < numVideos; i++) {
          const video = videos[i];
          message += `\n📹 *Title:* _${video.title}_\n` +
                     `⏳ *Duration:* _${video.timestamp}_ _(${video.seconds} seconds)_\n` +
                     `🗓️ *Uploaded:* _${video.ago}_\n` +
                     `👀 *Views:* _${video.views.toLocaleString()}_ _views_\n` +
                     `👤 *Author:* _${video.author.name}_\n` +
                     `🔗 *URL:* ${video.url}\n`;
      }

      // Send the combined message with all the details
      await replygcxlicon(message);

  } catch (e) {
      console.error(e);
      await replygcxlicon('⚠️ Error: Something went wrong while fetching video details.');
  }
}
break;


case 'apksearch': {
  if (!text) return replygcxlicon(`Example: ${prefix + command} whatsapp`);
await XliconStickWait()
  try {
    var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`);
    var json = await js.json();

    // Check if the API response status is false (indicating error)
    if (!json.status) {
      // Construct a message to notify the user
      const errorMsg = `
❗ *Error:* ${json.message}

💬 For access, contact the owner:
- *Full Contact:* ${json.owner.fullContact}
- *WhatsApp:* ${json.owner.whatsapp}
- *Telegram:* ${json.owner.telegram}
      `;
      return replygcxlicon(errorMsg); // Send error message to the user
    }

    // Proceed with normal processing if API call is successful
    var capt = `
❗ *Note:* Bot will give random results. If the results do not match what you want, please try again using ${prefix + command} ${text}

💼 *Title:* ${json[0].package}
🔗 *Link:* ${json[0].url}
👤 *Developer:* ${json[0].developer}
⭐ *Rating:* ${json[0].rating}
    `;

    if (json[0].thumbnail) {
      const imageUrl = json[0].thumbnail; // Use the thumbnail URL from the API response
      await XliconBotInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: capt,
        mentions: [m.sender]
      });
    } else {
      // If no thumbnail is available, just send the message without image
      replygcxlicon(capt);
    }

  } catch (error) {
    console.error("Error:", error);
    return replygcxlicon(`❗ *Error:* Unable to fetch data at this time. Please try again later.`);
  }
}
break;

case 'happymod':{
  if (!q) return replygcxlicon(`Example ${prefix+command} Sufway surfer mod`)
  await XliconStickWait()
  let kat = await scp2.happymod(q)
  replygcxlicon(util.format(kat))
  }
  break



case 'stickersearch': {
  if (!text) return replygcxlicon(`Example: ${m.prefix + command} kururmi`);
await XliconStickWait()
  var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`);
  var json = await js.json();

  let response = `
❗ *Note:* Bot will give random results. If the results don't match what you want, please try again using ${prefix + command} ${text}

💼 *Title:* ${json[0].title}
🔗 *Link:* ${json[0].url}
⭐ *Total Results:* ${json[0].total}
  `;

  if (json[0].url) {
    const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg'; // URL for the image to send
    await XliconBotInc.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: response,
      mentions: [m.sender]
    });
  } else {
    replygcxlicon(`No results found for ${text}. Please try another search.`);
  }
}
break;

case 'searchsoundcloud': {
  if (!text) return replygcxlicon(`*• Example:* ${prefix + command} metamorphosis`);

  const fetchSoundCloudResults = async (query) => {
    const apiUrl = `https://bk9.fun/search/soundcloud?q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        console.error(`API response not OK: ${response.status} ${response.statusText}`);
        throw new Error('API response not OK');
      }
      const json = await response.json();
      return json.status && json.BK9 && json.BK9.length > 0 ? json.BK9 : null;
    } catch (error) {
      console.error(`Error fetching from ${apiUrl}:`, error);
    }
    return null;
  };

  try {
    await XliconStickWait();
    const query = text.trim();
    const results = await fetchSoundCloudResults(query);

    if (!results) {
      return replygcxlicon('❌ Failed to fetch SoundCloud results. Please try again.');
    }

    let soundCloudText = `🎵 *SoundCloud Results for* _"${query}"_:\n\n`;
    results.forEach((track, index) => {
      soundCloudText += `🔊 *Title:* ${track.title}\n🔗 *Link:* ${track.link}\n\n`;
    });

    // Send the formatted text without generateWAMessageFromContent
    return replygcxlicon(soundCloudText);

  } catch (e) {
    return replygcxlicon("`*Error*`");
  }
}
break;


case 'imdb':
if (!text) return replygcxlicon(`_Name a Series or movie`)
await XliconStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           XliconBotInc.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
        
      
            case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber': {
              if (!text) return replygcxlicon(`📱 Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`);
            
              var inputnumber = text.split(" ")[0];
              await XliconStickWait();
              replygcxlicon(`🔍 Searching for WhatsApp account in the given range...`);
            
              function countInstances(string, word) {
                  return string.split(word).length - 1;
              }
            
              var number0 = inputnumber.split('x')[0];
              var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : '';
              var random_length = countInstances(inputnumber, 'x');
              var randomxx;
            
              if (random_length == 1) {
                  randomxx = 10;
              } else if (random_length == 2) {
                  randomxx = 100;
              } else if (random_length == 3) {
                  randomxx = 1000;
              }
            
              var text66 = `*==[ List of WhatsApp Numbers ]==*\n\n`;
              var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.📲\n`;
              var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*❌\n`;
            
              for (let i = 0; i < randomxx; i++) {
                  var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
                  var status1 = nu[Math.floor(Math.random() * nu.length)];
                  var status2 = nu[Math.floor(Math.random() * nu.length)];
                  var status3 = nu[Math.floor(Math.random() * nu.length)];
                  var dom4 = nu[Math.floor(Math.random() * nu.length)];
                  var random21;
            
                  if (random_length == 1) {
                      random21 = `${status1}`;
                  } else if (random_length == 2) {
                      random21 = `${status1}${status2}`;
                  } else if (random_length == 3) {
                      random21 = `${status1}${status2}${status3}`;
                  } else if (random_length == 4) {
                      random21 = `${status1}${status2}${status3}${dom4}`;
                  }
            
                  var anu = await XliconBotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
                  var anuu = anu.length !== 0 ? anu : false;
            
                  try {
                      try {
                          var anu1 = await XliconBotInc.fetchStatus(anu[0].jid);
                      } catch {
                          var anu1 = '401';
                      }
                      if (anu1 == '401' || anu1.status.length == 0) {
                          nobio += `wa.me/${anu[0].jid.split("@")[0]} 💬\n`;
                      } else {
                          text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio:* ${anu1.status}\n🧐*Last update:* ${moment(anu1.setAt).tz('Asia/Karachi').format('HH:mm:ss DD/MM/YYYY')}\n\n`;
                      }
                  } catch {
                      nowhatsapp += `${number0}${i}${number1} ❌\n`;
                  }
              }
            
              replygcxlicon(`${text66}${nobio}${nowhatsapp}`);
            }
            break;
            
            case 'friend':
              case 'searchfriend':{
              await XliconStickWait()
              let teman = pickRandom(xliconverifieduser)
              setTimeout(() => {
              }, 1000)
              setTimeout(() => {
              replygcxlicon('Managed to Get One Person')
              }, 5000)
              setTimeout(() => {
              XliconBotInc.sendMessage(m.chat, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
              }, 9000)
              }
              break


              case 'lyrics': {
                if (!text) return replygcxlicon(`What lyrics are you looking for? 🎶\nExample usage: ${prefix}lyrics Thunder`);
              
                await XliconStickWait();
                const { lyrics, lyricsv2 } = require('@bochilteam/scraper');
              
                try {
                  const result = await lyricsv2(text).catch(async () => await lyrics(text));
                  const xliconlirik = `
              🎵 *Title:* ${result.title}
              🎤 *Author:* ${result.author}
              🔗 *URL:* ${result.link}
              
              📝 *Lyrics:*
              ${result.lyrics}
              `.trim();
              
                  // If there is an image URL in the result, we can send the lyrics with the image
                  if (result.thumbnail) {
                    await XliconBotInc.sendMessage(m.chat, { image: { url: result.thumbnail }, caption: xliconlirik }, { quoted: m });
                  } else {
                    replygcxlicon(xliconlirik);
                  }
                } catch (error) {
                  console.error(error);
                  replygcxlicon(`Lyrics for "${text}" not found! 😞`);
                }
              }
              break;



              case 'pixiv': {
    if (!text) return replygcxlicon(`Example: ${prefix + command} furina,10`); // Example usage
    
    const [query, limit] = text.split(','); // Split the input by comma
    let numImages = parseInt(limit) || 5; // Default to 5 if no number is provided
    numImages = Math.min(numImages, 30); // Ensure the number does not exceed 30

    try {
        const res = await axios.get(`https://ironman.koyeb.app/ironman/search/pixiv?q=${encodeURIComponent(query)}`);
        if (!res.data || res.data.length === 0) return replygcxlicon('Not found!');
        
        const selectedImages = res.data.sort(() => 0.5 - Math.random()).slice(0, numImages); // Get the specified number of images
        for (const url of selectedImages) {
            await XliconBotInc.sendMessage(
                m.chat,
                { 
                    image: { url }, 
                    caption: `🖼️ *Pixiv Search Result for:* "${query}"` 
                },
                { quoted: m }
            );
        }
    } catch (e) {
        console.log(e.message);
        replygcxlicon('Not found!');
    }
}
break;
        
              
//---------------------------------------------------------------------------------------------------------------------------//


// █▀▀ █ █ █▄ █  █▀▀ █▀█ █▄ ▄█ █▄ ▄█ ▄▀▄ █▄ █ █▀▄ █▀▀ 
// █▀  █▄█ █ ▀█  █▄▄ █▄█ █ ▀ █ █ ▀ █ █▀█ █ ▀█ █▄▀ ▄██ 


case 'define': {
  if (!q) return replygcxlicon(`❓ What would you like to define?`);
   try {
       const targetFine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`);
       if (!targetFine || !targetFine.data.list.length) return replygcxlicon('No definition found.');

       const definition = targetFine.data.list[0].definition.replace(/\[|\]/g, "");
       const example = targetFine.data.list[0].example.replace(/\[|\]/g, "");
       const reply = `
📖 *Word:* ${q}
💬 *Definition:* ${definition}
✍️ *Example:* ${example}`;

       // Image URL to use
       const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';


       // Send the message with the image and the reply text
       await XliconBotInc.sendMessage(m.chat, {
           image: { url: imageUrl },
           caption: reply,
           mentions: [m.sender]
       });
   } catch (err) {
       console.error('Error:', err);
       replygcxlicon(`*${q}* isn't a valid text.`);
   }
}
break;

case 'readmore': {
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    XliconBotInc.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;


case 'yomamajoke': {
  try {
      // Fetch a yo mama joke from the API
      let res = await fetch(`https://yomamaindra.onrender.com/jokes`);

      if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
      }

      let json = await res.json();

      // Extract the joke from the response
      let yoMamaJoke = `${json.joke}`;

      // Image URL to use
      const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

     
      // Send the message with the image and caption
      await XliconBotInc.sendMessage(m.chat, {
          image: { url: imageUrl },
          caption: `*Yo Mama Joke 😂:*\n\n${yoMamaJoke}`,
          footer: 'XLICON-V4-MD'
      });
  } catch (error) {
      console.error('API Fetch Error:', error);
      await XliconBotInc.sendText(m.chat, "An error occurred while fetching the joke. Please try again.");
  }
}
break;
      
      
      
  case 'fact': {
  try {
      // Fetch a random fact from the API
      const { data } = await axios.get(`https://nekos.life/api/v2/fact`);
      
      // Define the fact text with the theme emoji
      let factText = `${themeemoji} *Fact:* ${data.fact}\n`;

      // Image URL to use
      const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

    
      // Send the message with the image and caption
      await XliconBotInc.sendMessage(m.chat, {
          image: { url: imageUrl },
          caption: factText,
          footer: botname
      });
  } catch (error) {
      console.error('Error fetching fact:', error);
      await XliconBotInc.sendText(m.chat, "An error occurred while fetching the fact. Please try again.");
  }
}
break;


case 'soulmate': {
  if (!m.isGroup) return XliconStickGroup(); // Ensure it's a group
  let member = participants.map(u => u.id);
  let me = m.sender;
  let jodoh = member[Math.floor(Math.random() * member.length)];

  // Image URL to use
  const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

  try {
     
      // Send the message with the image, caption, and mention the users
      await XliconBotInc.sendMessage(m.chat, {
          image: { url: imageUrl },
          caption: `👫Your Soulmate Is\n\n@${me.split('@')[0]}\n\n❤️\n\n@${jodoh.split('@')[0]}`,
          mentions: [me, jodoh] // Mentions both users
      });
  } catch (error) {
      console.error('Error fetching or sending image:', error);
      replygcxlicon('Failed to send image. Please try again later.');
  }
  }            
  break;

      
      
      case 'couple': {
  if (!m.isGroup) return XliconStickGroup(); // Ensure it's a group

  // Get all participants in the group
  let member = participants.map(u => u.id);
  let orang = member[Math.floor(Math.random() * member.length)]; // Random member for one partner
  let jodoh = member[Math.floor(Math.random() * member.length)]; // Random member for the other partner

  // Image URL to use
  const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

  try {
      // Send the message with the image, caption, and mention the users
      await XliconBotInc.sendMessage(m.chat, {
          image: { url: imageUrl },
          caption: `💏Couple\n\n@${orang.split('@')[0]}\n\n❤️\n\n@${jodoh.split('@')[0]}\n\nCieeee, What's Going On❤️💖👀`,
          mentions: [orang, jodoh] // Mentions both users
      });
  } catch (error) {
      console.error('Error sending message:', error);
      await XliconBotInc.sendMessage(m.chat, { text: 'Failed to send message. Please try again later.' });
  }
  }
  break;



case 'stupidcheck': case 'uncleancheck': 
case 'hotcheck': case 'smartcheck': 
case 'greatcheck': case 'evilcheck': 
case 'dogcheck': case 'coolcheck': 
case 'waifucheck': {
    // Ensure someone is tagged
    if (!m.mentionedJid || m.mentionedJid.length === 0) {
        return replygcxlicon(`Please mention someone to check! Example: ${prefix + command} @Xlicon`);
    }

    // Generate a random percentage
    const randomScore = Math.floor(Math.random() * 100) + 1;

    // Get the first mentioned user
    let mentionedUser = m.mentionedJid[0];

    // Create the message text
    const messageText = `
*${command.replace('check', ' Check')}* 🌟

👤 Name: *@${mentionedUser.split('@')[0]}*
📊 Score: *${randomScore}%*
`.trim();

    // Image URL to use
    const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

    try {
        // Send the message with the image
        await XliconBotInc.sendMessage(m.chat, {
            image: { url: imageUrl },
            caption: messageText,
            mentions: [mentionedUser]
        });
    } catch (error) {
        console.error('Error sending image:', error);
        replygcxlicon('Failed to send image. Please try again later.');
    }
}
break;


case 'gaycheck':
case 'awesomecheck':
case 'cutecheck':
case 'lesbicheck':
case 'lesbiancheck':
case 'hornycheck':
case 'prettycheck':
case 'lovelycheck':
case 'uglycheck':
case 'handsomecheck': {
    // Ensure someone is tagged
    if (!m.mentionedJid || m.mentionedJid.length === 0) {
        return replygcxlicon(`Please mention someone to check! Example: ${prefix + command} @Xlicon`);
    }

    // Generate a random percentage
    const gan = Array.from({ length: 100 }, (_, i) => i + 1);
    const teng = gan[Math.floor(Math.random() * gan.length)];

    // Get the first mentioned user
    let xliconshimts = m.mentionedJid[0];

    // Create the message text
    const messageText = `
*${command.replace('check', ' Check')}* 🌟

👤 Name: *@${xliconshimts.split('@')[0]}*
📊 Score: *${teng}%*
`.trim();

    // Image URL to use (this can be customized)
    const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

    try {
        // Send the message with the image URL
        await XliconBotInc.sendMessage(m.chat, {
            image: { url: imageUrl }, // Directly use the URL for the image
            caption: messageText, // Custom message with check result and mentioned user
            mentions: [xliconshimts] // Mentions the mentioned user
        });
    } catch (error) {
        console.error('Error sending image:', error);
        replygcxlicon('Failed to send image. Please try again later.');
    }
}
break;


  
      case 'charactercheck': {
        if (!m.mentionedJid || m.mentionedJid.length === 0) {
            return replygcxlicon(`Please tag someone! Example: ${prefix + command} @Xlicon`);
        }
    
        const traits = [
            'Compassionate', 
            'Generous', 
            'Grumpy', 
            'Forgiving', 
            'Obedient', 
            'Good', 
            'Simp', 
            'Kind-Hearted', 
            'Patient', 
            'UwU', 
            'Top, anyway', 
            'Helpful'
        ];
        const randomTrait = traits[Math.floor(Math.random() * traits.length)];
    
        const mentionedUser = m.mentionedJid[0];
        const username = mentionedUser.split('@')[0];
    
        const messageText = `
*Character Check* 🕵️‍♂️✨
    
👤 Name: *@${username}*
📜 Trait: *${randomTrait}*
        `.trim();
    
        const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg'; // Replace with your desired image URL
    
        try {
            // Send the message with the image URL
            await XliconBotInc.sendMessage(m.chat, {
                image: { url: imageUrl },
                caption: messageText,
                mentions: [mentionedUser],
            });
        } catch (error) {
            console.error('Error sending image:', error);
            replygcxlicon('Failed to send image. Please try again later.');
        }
    }
    break;

  case 'beautifulcheck': {
    // Ensure someone is tagged
    if (!m.mentionedJid || m.mentionedJid.length === 0) {
        return replygcxlicon(`Please tag someone! Example: ${prefix + command} @Xlicon`);
    }

    // Generate a random percentage
    const percentage = Math.floor(Math.random() * 101); // Random number between 0 and 100

    // Get the first mentioned user
    const mentionedUser = m.mentionedJid[0];
    const username = mentionedUser.split('@')[0];

    // Create the response message
    const messageText = `
*Beautiful Check* 🌸

👤 Name: *@${username}*
📊 Score: *${percentage}%*
    `.trim();

    // Image URL to use (this can be customized)
    const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg'; // Replace with your desired image URL

    try {
        // Send the message with the image and mentions
        await XliconBotInc.sendMessage(m.chat, {
            image: { url: imageUrl }, // Directly use the URL for the image
            caption: messageText, // Custom message with check result and mentioned user
            mentions: [mentionedUser] // Mentions the mentioned user
        });
    } catch (error) {
        console.error('Error sending image:', error);
        replygcxlicon('Failed to send image. Please try again later.');
    }
}
break;

case 'pick': {
  // Check if the message is in a group and if there's text provided
  if (!m.isGroup) return XliconStickGroup();
  if (!text) return replygcxlicon(`What do you want to pick? 🤔\nExample: ${prefix + command} idiot 😜`);

  // Get group metadata and participants
  const groupMetadata = await XliconBotInc.groupMetadata(m.chat).catch(() => {}) || "";
  const participants = groupMetadata ? groupMetadata.participants : [];
  let member = participants.map((u) => u.id);

  // Get a random member
  let xliconshimts = member[Math.floor(Math.random() * member.length)];

  // Image URL to use
  const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

  try {
     
      // Send the message with the image, text, and mention
      await XliconBotInc.sendMessage(m.chat, {
          image: { url: imageUrl },
          caption: `The most *${text}* here is *@${xliconshimts.split("@")[0]}* 😜✨`,
          mentions: [xliconshimts] // Ensure that the user is mentioned in the message
      });
  } catch (error) {
      console.error('Error fetching or sending image:', error);
      replygcxlicon('Failed to send image. Please try again later.');
  }
}
break;


case 'pickupline': {
  try {
      // Fetch the pickup line from the API
      let res = await fetch(`https://api.popcat.xyz/pickuplines`);
      if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
      }
      
      let json = await res.json();
      let pickupLine = `*Here's a pickup line for you 😘💖:*\n\n${json.pickupline} 😂❤️`;

      // Image URL to use
      const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

     
      // Send the message with the image, caption, and footer
      await XliconBotInc.sendMessage(m.chat, {
          image: { url: imageUrl },
          caption: pickupLine,
          footer: 'XLICON-V4-MD'
      });
  } catch (error) {
      console.error('Error in pickupline command:', error);
      replygcxlicon('Failed to fetch a pickup line. Please try again later.');
  }
}
break;


case 'quotes': {
  // Fetch the quote from the API
  const quotexlicony = await axios.get('https://favqs.com/api/qotd');
  const quoteText = quotexlicony.data.quote.body;
  const quoteAuthor = quotexlicony.data.quote.author;

  // Prepare the quote text as a caption
  const textquotes = `💬 *Quote:* ${quoteText}\n\n👤 *Author:* ${quoteAuthor}`;

  // Image URL to use
  const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

  // Send the quote with the image directly from the URL
  await XliconBotInc.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: textquotes,
      quoted: m
  });
}
break;



case 'can': {
  if (!text) return replygcxlicon(`❓ Ask a question\n\nExample: ${prefix + command} Can I dance?`);

  let bisa = [`✅ Can`, `❌ Can't`, `🚫 Cannot`, `💯 Of Course You Can!!!`];
  let keh = bisa[Math.floor(Math.random() * bisa.length)];

  let jawab = `*Can ${text}*\nAnswer: ${keh} 🤩`;

  // Image URL to use
  const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

  try {
      // Send the message with the image and the answer
      await XliconBotInc.sendMessage(m.chat, {
          image: { url: imageUrl },
          caption: jawab, // Custom message with the question and answer
          mentions: [m.sender] // Mentions the user who asked
      });
  } catch (error) {
      console.error('Error fetching or sending image:', error);
      replygcxlicon('❗ Failed to send image. Please try again later.');
  }
}
break;


case 'is': {
if (!text) return replygcxlicon(`❓ Ask a question\n\nExample: ${prefix + command} Is she a virgin?`);

let apa = [`✅ Yes`, `❌ No`, `🤔 It Could Be`, `✔️ That's right`];
let kah = apa[Math.floor(Math.random() * apa.length)];

let jawab = `*Is ${text}*\nAnswer: ${kah} 😎`;

// Image URL to use
const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

try {
    // Send the message with the image and the answer
    await XliconBotInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: jawab, // Custom message with the question and answer
        mentions: [m.sender] // Mentions the user who asked
    });
} catch (error) {
    console.error('Error fetching or sending image:', error);
    replygcxlicon('❗ Failed to send image. Please try again later.');
}
}
break;

case 'when': {
if (!text) return replygcxlicon(`❓ Ask a question\n\nExample: ${prefix + command} will I get married?`);

let kapan = [
    '5 More Days ⏳', '10 More Days ⏳', '15 More Days ⏳', '20 More Days ⏳', '25 More Days ⏳', '30 More Days ⏳',
    '35 More Days ⏳', '40 More Days ⏳', '45 More Days ⏳', '50 More Days ⏳', '55 More Days ⏳', '60 More Days ⏳',
    '65 More Days ⏳', '70 More Days ⏳', '75 More Days ⏳', '80 More Days ⏳', '85 More Days ⏳', '90 More Days ⏳', 
    '100 More Days ⏳', '5 Months More 🗓️', '10 Months More 🗓️', '15 Months More 🗓️', '20 Months More 🗓️', 
    '25 Months More 🗓️', '30 Months More 🗓️', '35 Months More 🗓️', '40 Months More 🗓️', '45 Months More 🗓️', 
    '50 Months More 🗓️', '55 Months More 🗓️', '60 Months More 🗓️', '65 Months More 🗓️', '70 Months More 🗓️', 
    '75 Months More 🗓️', '80 Months More 🗓️', '85 Months More 🗓️', '90 Months More 🗓️', '100 Months More 🗓️', 
    '1 More Year 📅', '2 More Years 📅', '3 More Years 📅', '4 More Years 📅', '5 More Years 📅', 'Tomorrow ⏰', 
    'The Day After Tomorrow ⏰'
];

let koh = kapan[Math.floor(Math.random() * kapan.length)];
let jawab = `*When ${text}*\nAnswer: ${koh} 🤔`;

// Image URL to use
const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

try {
    // Send the message with the image and the answer
    await XliconBotInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: jawab, // Custom message with the question and answer
        mentions: [m.sender] // Mentions the user who asked
    });
} catch (error) {
    console.error('Error fetching or sending image:', error);
    replygcxlicon('❗ Failed to send image. Please try again later.');
}
}
break;


case 'what': {
if (!text) return replygcxlicon(`❓ Ask a question\n\nExample: ${prefix + command} is your name?`);

let lel = [`👩‍❤️‍👨 Ask Your GF`, `🤷‍♂️ I Don’t Know`, `👨‍👩‍👧 I Don’t Know, Ask Your Father`];
let kah = lel[Math.floor(Math.random() * lel.length)];
let jawab = `*What ${text}* ❓\nAnswer: ${kah} 🤔`;

// Image URL to use
const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

try {
    await XliconBotInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: jawab,
        mentions: [m.sender]
    });
} catch (error) {
    console.error('Error fetching or sending image:', error);
    replygcxlicon('❗ Failed to send image. Please try again later.');
}
}
break;

case 'where': {
if (!text) return replygcxlicon(`❓ Ask a question\n\nExample: ${prefix + command} is your name?`);

let wherelol = [`🏞️ In the mountain`, `🌕 On Mars`, `🌙 On the moon`, `🌳 In the jungle`, `👩‍👧 I don’t know, ask your mom`, `🤷‍♂️ It could be somewhere`];
let kah = wherelol[Math.floor(Math.random() * wherelol.length)];
let jawab = `*Where ${text}* ❓\nAnswer: ${kah} 🤔`;

// Image URL to use
const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

try {
    await XliconBotInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: jawab,
        mentions: [m.sender]
    });
} catch (error) {
    console.error('Error fetching or sending image:', error);
    replygcxlicon('❗ Failed to send image. Please try again later.');
}
}
break;

case 'how': {
if (!text) return replygcxlicon(`❓ Ask a question\n\nExample: ${prefix + command} to date a girl?`);

let gimana = [`🤔 Ummm...`, `😅 It’s Difficult Bro`, `🚫 Sorry, the bot can’t answer`, `🔍 Try searching on Google`, `😱 Holy cow! Really?`, `😴 I’m too dizzy to answer`, `🙁 Oh, I see :(`, `⏳ Be patient, boss`, `🙄 Really, dude?`];
let kah = gimana[Math.floor(Math.random() * gimana.length)];
let jawab = `*How ${text}* ❓\nAnswer: ${kah} 🤔`;

// Image URL to use
const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

try {
    await XliconBotInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: jawab,
        mentions: [m.sender]
    });
} catch (error) {
    console.error('Error fetching or sending image:', error);
    replygcxlicon('❗ Failed to send image. Please try again later.');
}
}
break;
    
case 'rate': {
if (!text) return replygcxlicon(`❓ Example: ${prefix + command} my profile`);

let ra = Array.from({ length: 100 }, (_, i) => i + 1); // Array of numbers from 1 to 100
let kah = ra[Math.floor(Math.random() * ra.length)];
let jawab = `*Rate ${text}* 💯\nAnswer: ${kah}% 🏆`;

// Image URL to use
const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

try {

    // Send the message with the image and the answer
    await XliconBotInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: jawab, // Custom message with the rating
        mentions: [m.sender] // Mentions the user who asked
    });
} catch (error) {
    console.error('Error fetching or sending image:', error);
    replygcxlicon('❗ Failed to send image. Please try again later.');
}
}
break;

case 'checkme': {
  const args = text.split(" ");
  const bet = `${sender}`;

  const sifat = ['🤔 Fine','😡 Unfriendly','👎 Chapri','💔 Nibba/nibbi','😤 Annoying','💀 Dilapidated','😡 Angry person','😊 Polite','🙄 Burden','💯 Great','🤮 Cringe','🤥 Liar'];
  const hoby = ['🍳 Cooking','💃 Dancing','🎮 Playing','🎮 Gaming','🎨 Painting','🤝 Helping Others','🍿 Watching anime','📚 Reading','🚴‍♂️ Riding Bike','🎤 Singing','💬 Chatting','😂 Sharing Memes','✍️ Drawing','💸 Eating Parents Money','🎲 Playing Truth or Dare','🤫 Staying Alone'];
  const bukcin = [...Array(100).keys()].map(i => String(i + 1));
  const arp = bukcin.slice();
  const cakep = ['✅ Yes','❌ No','😖 Very Ugly','😍 Very Handsome'];
  const wetak = ['💖 Caring','💎 Generous','😡 Angry person','😔 Sorry','🤲 Submissive','😊 Fine','🙇‍♂️ Im sorry','🧡 Kind Hearted','😌 Patient','🥰 UwU','🔥 Top','🤗 Helpful'];
  const baikk = bukcin.slice();
  const bhuruk = bukcin.slice();
  const cerdhas = bukcin.slice();
  const berhani = bukcin.slice();
  const mengheikan = bukcin.slice();

  const sipat = sifat[Math.floor(Math.random() * sifat.length)];
  const biho = hoby[Math.floor(Math.random() * hoby.length)];
  const bhucin = bukcin[Math.floor(Math.random() * bukcin.length)];
  const senga = arp[Math.floor(Math.random() * arp.length)];
  const chakep = cakep[Math.floor(Math.random() * cakep.length)];
  const watak = wetak[Math.floor(Math.random() * wetak.length)];
  const baik = baikk[Math.floor(Math.random() * baikk.length)];
  const burug = bhuruk[Math.floor(Math.random() * bhuruk.length)];
  const cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)];
  const berani = berhani[Math.floor(Math.random() * berhani.length)];
  const takut = mengheikan[Math.floor(Math.random() * mengheikan.length)];

  const profile = `
*≡═《𝗖𝗵𝗲𝗰𝗸 𝗽𝗿𝗼𝗳𝗶𝗹𝗲 𝗳𝗼𝗿 @${bet.split('@')[0]}》═≡*
*🤖 Bot Name: XLICON-V4-MD*

*🧑‍🤝‍🧑 𝗡𝗮𝗺𝗲:* ${m.pushName}
*⚡ 𝗖𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿𝗶𝘀𝘁𝗶𝗰:* ${sipat}
*🎨 𝗛𝗼𝗯𝗯𝘆:* ${biho}
*💖 𝗦𝗶𝗺𝗽𝗹𝗲𝗻𝗲𝘀𝘀 (Simp):* ${bhucin}%
*💥 𝗚𝗿𝗲𝗮𝘁𝗻𝗲𝘀𝘀:* ${senga}%
*🌟 𝗛𝗮𝗻𝗱𝘀𝗼𝗺𝗲:* ${chakep}
*💬 𝗖𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿:* ${watak}
*🌱 𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗮𝗹𝘀:* ${baik}%
*😈 𝗕𝗮𝗱 𝗠𝗼𝗿𝗮𝗹𝘀:* ${burug}%
*🧠 𝗜𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲:* ${cerdas}%
*🔥 𝗖𝗼𝘂𝗿𝗮𝗴𝗲:* ${berani}%
*😱 𝗔𝗳𝗿𝗮𝗶𝗱:* ${takut}%

*≡═《𝗖𝗵𝗲𝗰𝗸 𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝗶𝗲𝘀》═≡*
`;

const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';
await XliconBotInc.sendMessage(m.chat, {
  image: { url: imageUrl }, // Directly use the URL for the image
  caption: profile, // Custom message with check result and mentioned user
  mentions: [bet] // Mentions the mentioned user
});
}
break;

case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
XliconBotInc_dev = await getBuffer(`https://github.com/salmanytofficial/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await XliconBotInc.sendMessage(m.chat, { audio: XliconBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break


//---------------------------------------------------------------------------------------------------------------------------//


//█▀█ █▀▀ ▄▀▄ █▀▀ ▀█▀ ▀█▀ █▀█ █▄ █   █▀▀ █▀█ █▄ ▄█ █▄ ▄█ ▄▀▄ █▀▄ █▄ █ █▀▀ 
//█▀▄ ██▄ █▀█ █▄▄  █  ▄█▄ █▄█ █ ▀█   █▄▄ █▄█ █ ▀ █ █ ▀ █ █▀█ █▄▀ █ ▀█ ▄██ 


case 'hug': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} hugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cry': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cried themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kill': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} killed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'pat': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} patted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'lick': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} licked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kiss': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} kissed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bite': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bit themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'yeet': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} yeeted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bully': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bullied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bonk': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bonked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wink': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} winked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'poke': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} poked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'nom': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} nommed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'slap': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} slapped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smile': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smiled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wave': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} waved themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'awoo': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} awooed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'blush': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} blushed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smug': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'glomp': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} glomped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'happy': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} happied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'dance': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} danced themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cringe': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cringed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cuddle': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cuddled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'highfive': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} highfived themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'handhold': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} handheld themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'spank': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} spanked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'feed': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} fed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'tickle': {

        if (!m.isGroup) return XliconStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcxlicon(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} tickled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          XliconBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        

//---------------------------------------------------------------------------------------------------------------------------//


//█▀▄ █▀█ █ █ █ █▄ █ █   █▀█ ▄▀▄ █▀▄   █▀▀ █▀█ █▄ ▄█ █▄ ▄█ ▄▀▄ █▀▄ █▄ █ █▀▀ 
//█▄▀ █▄█ ▀▄▀▄▀ █ ▀█ █▄▄ █▄█ █▀█ █▄▀   █▄▄ █▄█ █ ▀ █ █ ▀ █ █▀█ █▄▀ █ ▀█ ▄██ 


case 'itunes': {
  if (!text) return replygcxlicon('Please provide a song name 🎶');
await XliconStickWait()
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`);
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }
    let json = await res.json();
    console.log('JSON response:', json);

    let songInfo = 
    `*Song Information* 🎵\n
• *Name:* ${json.name}\n
• *Artist:* ${json.artist}\n
• *Album:* ${json.album}\n
• *Release Date:* ${json.release_date}\n
• *Price:* ${json.price} 💲\n
• *Length:* ${json.length} ⏳\n
• *Genre:* ${json.genre}\n
• *URL:* ${json.url}`;

    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      let imageMessage = await prepareWAMessageMedia({ image: { url: json.thumbnail } }, { upload: XliconBotInc.waUploadToServer });
      await XliconBotInc.sendMessage(m.chat, { image: { url: json.thumbnail }, caption: songInfo }, { quoted: m });
    } else {
      replygcxlicon(songInfo);
    }
  } catch (error) {
    console.error(error);
    replygcxlicon('An error occurred while fetching the song details 😞');
  }
}
break;

case 'play':
case 'song': {
  try {
    if (!text) return replygcxlicon(`🎵 *Example:* ${prefix + command} anime whatsapp status`);

    await XliconStickWait(); // Notify the user of processing

    // Perform a search using yts
    const yts = require("yt-search");
    let search = await yts(text);

    if (!search || search.videos.length === 0) {
      return replygcxlicon('❌ *No video found.* Please try with a different keyword.');
    }

    // Get the first video from the search results
    let video = search.videos[0];

    // Use the new API to fetch the audio details
    const apiUrl = `https://api.siputzx.my.id/api/d/ytmp3?url=${encodeURIComponent(video.url)}`;
    const response = await axios.get(apiUrl);

    if (!response.data || !response.data.status || !response.data.data || !response.data.data.dl) {
      return replygcxlicon('🚫 *Error fetching audio from the URL.* Please try again later.');
    }

    // Extract details from the API response
    const { title, dl } = response.data.data;

    // Prepare message with audio details
    const audioDetails = `🎶 *Title:* _${title}_\n` +
                         `🔗 *Link:* _${video.url}_`;

    // Send audio details
    await replygcxlicon(audioDetails);

    // Notify user that the audio is being downloaded
    await replygcxlicon('📥 *Downloading audio...*');

    // Send audio message
    await XliconBotInc.sendMessage(m.chat, {
      audio: { url: dl },
      mimetype: 'audio/mpeg', // Correct MIME type for MP3 audio
      fileName: `${title}.mp3` // Set a file name
    }, { quoted: m });

  } catch (error) {
    console.error("Error in play2/song2 command:", error);
    replygcxlicon("⚠️ *An error occurred while processing your request.* Please try again.");
  }
}
break;



     
case 'play2':
case 'song2': {
  try {
    if (!text) return replygcxlicon(`🎵 *Example:* ${prefix + command} anime whatsapp status`);

    await XliconStickWait(); // Notify the user of processing

    // Perform a search using yts
    const yts = require("yt-search");
    let search = await yts(text);

    if (!search || search.videos.length === 0) {
      return replygcxlicon('❌ *No video found.* Please try with a different keyword.');
    }

    // Get the first video from the search results
    let video = search.videos[0];

    // Use the new API to fetch the audio details
    const apiUrl = `https://bk9.fun/download/ytmp3?url=${encodeURIComponent(video.url)}`;
    const response = await axios.get(apiUrl);

    if (!response.data || !response.data.status || !response.data.BK9 || !response.data.BK9.downloadUrl) {
      return replygcxlicon('🚫 *Error fetching audio from the URL.* Please try again later.');
    }

    // Extract details from the API response
    const audioData = response.data.BK9.downloadUrl.find(item => item.quality === '128'); // Prefer 128 kbps quality
    if (!audioData) {
      return replygcxlicon('⚠️ *Could not find a suitable audio quality.*');
    }

    const { link, title, thumbnail, durationLabel } = audioData;

    // Prepare message with audio details
    const audioDetails = `🎶 *Title:* _${title}_\n` +
                         `⏳ *Duration:* _${durationLabel}_\n` +
                         `🔗 *Link:* _${video.url}_`;

    // Send audio details
    await replygcxlicon(audioDetails);

    // Notify user that the audio is being downloaded
    await replygcxlicon('📥 *Downloading audio...*');

    // Send audio message
    await XliconBotInc.sendMessage(m.chat, {
      audio: { url: link },
      mimetype: 'audio/mpeg', // Correct MIME type for MP3
      fileName: `${title}.mp3`
    }, { quoted: m });

  } catch (error) {
    console.error("Error in play/song command:", error);
    replygcxlicon("⚠️ *An error occurred while processing your request.* Please try again.");
  }
}
break;



case 'spotify': {
  if (!text) return replygcxlicon(`🎶 *Where is the Song Name?*\n_Example:_\n${prefix}${command} Rap God`);

  await XliconStickWait(); // Notify the user that the process is ongoing

  try {
    // Fetch Spotify metadata and download link
    const apiUrl = `https://api.neastooid.xyz/api/downloader/spotifydl?url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl);

    if (!response.data || !response.data.success || !response.data.metadata || !response.data.link) {
      return replygcxlicon('❌ *No results found on Spotify.* Please check the link or try again later.');
    }

    // Extract metadata and download link
    const metadata = response.data.metadata;
    const downloadLink = response.data.link;

    // Prepare the response message with song information
    const songInfo = `🎧 *S P O T I F Y - D L* 🎧

✨ *Title:* ${metadata.title}
🎤 *Artist(s):* ${metadata.artists}
📀 *Album:* ${metadata.album}
🗓️ *Release Date:* ${metadata.releaseDate}`;

    // Send the song information to the user
    await XliconBotInc.sendMessage(m.chat, { text: songInfo }, { quoted: m });

    // Send the Spotify song as an audio message with external ad reply
    await XliconBotInc.sendMessage(m.chat, {
      audio: { url: downloadLink },
      mimetype: 'audio/mpeg',
      contextInfo: {
        externalAdReply: {
          title: metadata.title,
          body: `🎶 *By:* ${metadata.artists}`,
          thumbnailUrl: metadata.cover, // Album cover as the thumbnail
          sourceUrl: text, // The original Spotify link
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    await XliconBotInc.sendMessage(m.chat, {
      text: '❌ *An error occurred while fetching Spotify data.* Please try again later.',
    }, { quoted: m });
  }
}
break;
        				


//FOR LOCAL HOST USERS ( TERMUX, UBUNTU AND LINUX )
case 'ytplay': case 'ytsong': {
  if (!text) return replygcxlicon(`Example: ${prefix + command} anime whatsapp status`);
  try {
      const xeonplaymp3 = require('./lib/ytdl');
      const yts = require("youtube-yts");
      const search = await yts(text);
      const anup3k = search.videos[0];
      const pl = await xeonplaymp3.mp3(anup3k.url);

      await XliconBotInc.sendMessage(m.chat, {
          audio: fs.readFileSync(pl.path),
          fileName: `${anup3k.title}.mp3`,
          mimetype: 'audio/mp4',
          ptt: true,
          contextInfo: {
              externalAdReply: {
                  title: anup3k.title,
                  body: botname,
                  thumbnailUrl: pl.meta.image,
                  sourceUrl: anup3k.url,
                  mediaType: 2,
                  renderLargerThumbnail: true
              }
          }
      }, { quoted: m });

      await fs.unlinkSync(pl.path);
  } catch (err) {
      console.error('Error processing play/song command:', err);
      replygcxlicon(`Music not found.`);
  }
}
break;




case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
  if (!text) return replygcxlicon(`📌 *Example:* ${prefix + command} youtube_url`);
  if (!text.includes('youtu')) return replygcxlicon('❌ *The URL does not contain results from YouTube!*');
  
  try {
      const hasil = await ytMp3(text); // Use the primary ytMp3 function
      XliconStickWait();
      
      await XliconBotInc.sendMessage(m.chat, {
          audio: { url: hasil.result },
          mimetype: 'audio/mpeg',
          contextInfo: {
              externalAdReply: {
                  title: hasil.title,
                  body: hasil.channel,
                  previewType: 'PHOTO',
                  thumbnailUrl: hasil.thumb,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                  sourceUrl: text
              }
          }
      }, { quoted: m });

      replygcxlicon(`🎧 *Now Playing:* ${hasil.title}\n` +
                    `🎬 *Channel:* ${hasil.channel}\n` +
                    `📅 *Uploaded On:* ${hasil.uploadDate}\n` +
                    `💾 *Size:* ${hasil.size}\n\n` +
                    `🔻 *Enjoy the music!* 🔻`);
  } catch (err) {
      console.error('❌ Error downloading audio:', err); // Log any errors
      replygcxlicon('⚠️ *Error:* Could not download the audio.');
  }
}
break;



case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
  if (!text) return replygcxlicon(`📌 *Example:* ${prefix + command} youtube_url`);
  if (!text.includes('youtu')) return replygcxlicon('❌ *The URL does not contain results from YouTube!*');
  
  try {
      const hasil = await ytMp4(text); // Use the primary ytMp4 function
      XliconStickWait();

      // Extract and format additional data
      const views = hasil.views ? hasil.views.toLocaleString() : "0";
      const likes = hasil.likes ? hasil.likes.toLocaleString() : "0";
      const dislikes = hasil.dislike ? hasil.dislike.toLocaleString() : "0";

      await XliconBotInc.sendMessage(m.chat, {
          video: { url: hasil.result },
          caption: `🎥 *Title:* ${hasil.title}\n` +
                   `📜 *Description:* ${hasil.desc || 'No description'}\n` +
                   `📺 *Channel:* ${hasil.channel}\n` +
                   `👁️ *Views:* ${views}\n` +
                   `👍 *Likes:* ${likes}\n` +
                   `👎 *Dislikes:* ${dislikes}\n` +
                   `📆 *Uploaded On:* ${hasil.uploadDate}\n\n` +
                   `💻 *SERVER:* KALI LINUX\n` +
                   `🔻 *DOWNLOADED BY XLICON-V4 🔻*\n\n` +
                   `✨ *Enjoy your video!* ✨`
      }, { quoted: m });
  } catch (err) {
      console.error('❌ Error downloading video:', err); // Log any errors
      replygcxlicon('⚠️ *Error:* Could not download the video.');
  }
}
break;


//---------------------------------------------------------------------------------------------------------------------------//


case 'yta': {
  if (!text) {
    return replygcxlicon(`❗ *Example:* ${prefix + command} youtube_url`);
  }

  if (!text.includes('youtu')) {
    return replygcxlicon('❌ *The URL does not contain results from YouTube!*');
  }

  await XliconStickWait(); // Show loading indicator

  try {
    // Fetch data from the new API
    const response = await axios.get(`https://bk9.fun/download/ytmp3?url=${encodeURIComponent(text)}`);
    const data = response.data;

    if (!data.status || !data.BK9.downloadUrl || data.BK9.downloadUrl.length === 0) {
      return replygcxlicon('⚠️ *Error fetching audio from the URL.*');
    }

    // Get the highest quality audio link
    const bestQualityAudio = data.BK9.downloadUrl[data.BK9.downloadUrl.length - 1];

    // Send the audio directly
    await XliconBotInc.sendMessage(m.chat, {
      audio: { url: bestQualityAudio.link },
      mimetype: 'audio/mpeg',
      fileName: `${bestQualityAudio.title}.mp3`
    }, { quoted: m });

  } catch (error) {
    console.error('Error processing YTA command:', error);
    return replygcxlicon('❌ *An error occurred while processing your request.*');
  }
}
break;


case 'ytv': {
  if (!text) {
    return replygcxlicon(`❌ *Example:* ${prefix + command} youtube_url`);
  }
  if (!text.includes('youtu')) {
    return replygcxlicon('⚠️ *The URL does not contain results from YouTube!*');
  }

  await XliconStickWait(); // Show loading indicator

  try {
    // Fetch video details from the updated API
    const response = await axios.get(`https://btch.us.kg/download/ytdl?url=${encodeURIComponent(text)}`);
    const data = response.data;

    if (!data.status || !data.result) {
      return replygcxlicon('⚠️ *Error fetching video from the URL.*');
    }

    // Extract video details
    const videoDetails = data.result;
    const videoTitle = videoDetails.title;
    const videoLink = videoDetails.url;
    const videoThumbnail = videoDetails.thumbnail || ''; // Optional: thumbnail if provided in API response
    const videoDuration = videoDetails.duration;
    const videoViews = videoDetails.views;
    const videoChannel = videoDetails.channel;

    // Create a caption with video details
    const caption = `*_DOWNLOADED BY XLICON V4 MD_*\n\n` +
      `🎬 *Title*: _${videoTitle}_\n` +
      `🔗 *YouTube URL*: _${videoLink}_\n` +
      `⏳ *Duration*: _${videoDuration}_\n` +
      `👀 *Views*: _${videoViews}_\n` +
      `📺 *Channel*: _${videoChannel}_\n` +
      `✨ *Enjoy your video!* 🎥\n🔥 *Powered by Xlicon Bot* 💻`;

    // Send the video to the chat
    await XliconBotInc.sendMessage(m.chat, {
      video: { url: videoDetails.mp4 },
      caption: caption,
      thumbnail: videoThumbnail ? { url: videoThumbnail } : undefined
    }, { quoted: m });

  } catch (error) {
    console.error('Error in ytv2 command:', error);
    replygcxlicon('⚠️ *An error occurred while processing the video.*');
  }
}
break;


case 'yta2': {
    if (!text) return replygcxlicon(`❌ *Example:* ${prefix + command} youtube_url`);
    if (!text.includes('youtu')) return replygcxlicon('⚠️ *The URL does not contain results from YouTube!*');
    XliconStickWait();

    try {
        const apiUrl = `${global.api}downloader/yt-audio?apikey=${global.id}&url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
        const hasil = response.data;

        // Check if audio URL is available
        if (!hasil.result || !hasil.result.audio) {
            throw new Error('❌ *No audio download link found.*');
        }

        const audioLink = hasil.result.audio;
        const caption = `*_DOWNLOADED BY XLICON V4 MD_*\n\n🎵 *Title*: _${hasil.result.title}_\n✨ *Enjoy your audio!* 🎶\n🔥 *Powered by Xlicon Bot* 💻`;

        // Send caption to the user
        await replygcxlicon(caption);

        // Send the audio using the correct variable `audioLink`
        await XliconBotInc.sendMessage(m.chat, {
            audio: { url: audioLink },
            mimetype: 'audio/mp4' // Adjust mimetype if necessary
        }, { quoted: m });
    } catch (error) {
        console.error('Error in yta2 command:', error);
        replygcxlicon('⚠️ *An error occurred while processing the audio.*');
    }
}
break;


case 'ytv2': {
  try {
    if (args.length < 1 || !isUrl(text)) {
      return replygcxlicon(`❌ *Where is the link?* \n\nExample: ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag`);
    }

    await XliconStickWait(); // Show loading indicator

    // API endpoint with the provided YouTube URL
    const apiUrl = `https://api.siputzx.my.id/api/d/ytmp4?url=${encodeURIComponent(text)}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("❌ *Failed to fetch from API.*");
    }

    const apiResponse = await response.json();

    if (!apiResponse.status || !apiResponse.data || !apiResponse.data.dl) {
      throw new Error("❌ *Failed to retrieve video from API response.*");
    }

    // Extract video details from API response
    const { title, dl: videoUrl } = apiResponse.data;

    // Create a caption
    const caption = `🎬 *Downloaded by Xlicon v4 MD*\n\n` +
      `🎥 *Title*: _${title}_\n` +
      `✨ *Enjoy your video!* 🎉\n🔥 *Powered by Xlicon Bot* 💻`;

    // Send the video
    await XliconBotInc.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: caption,
    }, { quoted: m });

  } catch (error) {
    console.error('Error in ytv2 command:', error);
    replygcxlicon("❌ *An error occurred while processing your request.* Please try again later.");
  }
}
break;

case 'likee': case 'likeedl': {
  if (!text) {
    return replygcxlicon(`❌ *Example:* ${prefix + command} likee_video_url`);
  }

  await XliconStickWait(); // Show loading indicator

  try {
    // Fetch video details from the Likee API
    const response = await axios.get(`https://bk9.fun/download/likee?url=${encodeURIComponent(text)}`);
    const data = response.data;

    if (!data.status || !data.BK9) {
      return replygcxlicon('⚠️ *Error fetching Likee video from the URL.*');
    }

    const videoDetails = data.BK9;
    const videoTitle = videoDetails.title;
    const videoThumbnail = videoDetails.thumbnail || '';
    const videoWithWatermark = videoDetails.withWatermark;
    const videoWithoutWatermark = videoDetails.withoutwatermark;

    const caption = `*_DOWNLOADED BY XLICON V4 MD_*\n\n` +
      `🎬 *Title*: _${videoTitle}_\n` +
      `📺 *Watch Video*: _${text}_\n` +
      `✨ *Enjoy your video!* 🎥\n🔥 *Powered by Xlicon Bot* 💻`;

    // Send the video (choose watermark-free or watermark version)
    await XliconBotInc.sendMessage(m.chat, {
      video: { url: videoWithoutWatermark },
      caption: caption,
      thumbnail: videoThumbnail ? { url: videoThumbnail } : undefined
    }, { quoted: m });

  } catch (error) {
    console.error('Error in likeedl command:', error);
    replygcxlicon('⚠️ *An error occurred while processing the Likee video.*');
  }
}
break;

case 'capcut': case 'capcutdl': {
  if (!text) {
    return replygcxlicon(`❌ *Example:* ${prefix + command} capcut_video_url`);
  }

  await XliconStickWait(); // Show loading indicator

  try {
    // Fetch video details from the CapCut API
    const response = await axios.get(`https://bk9.fun/download/capcut?url=${encodeURIComponent(text)}`);
    const data = response.data;

    if (!data.status || !data.BK9) {
      return replygcxlicon('⚠️ *Error fetching CapCut video from the URL.*');
    }

    const videoDetails = data.BK9;
    const videoTitle = videoDetails.title;
    const videoDescription = videoDetails.description || 'No description available';
    const videoUsage = videoDetails.usage || '0';
    const videoThumbnail = videoDetails.thumbnail || '';
    const videoUrl = videoDetails.video;

    const caption = `*_DOWNLOADED BY XLICON V4 MD_*\n\n` +
      `🎬 *Title*: _${videoTitle}_\n` +
      `📝 *Description*: _${videoDescription}_\n` +
      `✨ *Usage*: _${videoUsage}_\n` +
      `📺 *Watch Video*: _${text}_\n` +
      `✨ *Enjoy your video!* 🎥\n🔥 *Powered by Xlicon Bot* 💻`;

    // Send the video from CapCut
    await XliconBotInc.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: caption,
      thumbnail: videoThumbnail ? { url: videoThumbnail } : undefined
    }, { quoted: m });

  } catch (error) {
    console.error('Error in capcutdl command:', error);
    replygcxlicon('⚠️ *An error occurred while processing the CapCut video.*');
  }
}
break;


case 'img': case 'image': case 'picture': {
  if (!text) return replygcxlicon(`*• Example:* ${prefix + command} luffy one piece,10`);
await XliconStickWait()
  try {
      // Split the input text to get the search term and the amount
      let [searchTerm, amount] = text.split(',').map(item => item.trim());
      // Default to 1 if no amount is provided
      amount = amount ? parseInt(amount) : 1;

      // Limit the maximum number of images to 30
      if (amount > 30) {
          amount = 30;
          replygcxlicon('⚠️ *Maximum limit is 30 images.* Sending 30 images.');
      } else if (amount <= 0 || isNaN(amount)) {
          return replygcxlicon('❌ *Invalid number of images.* Please enter a number between 1 and 30.');
      }

      // List of new API URLs for fetching images
      const apiUrls = [
          'https://aemt.uk.to/googleimage?query=',
          'https://meitang.xyz/googleimage?query=',
          'https://btch.us.kg/googleimage?query=',
          'https://api.tioo.eu.org/googleimage?query=',
          'https://api.tioprm.eu.org/googleimage?query='
      ];

      // Select a random API URL
      const randomApiUrl = apiUrls[Math.floor(Math.random() * apiUrls.length)];

      // Fetch the image URLs from the selected API
      let response = await fetch(randomApiUrl + encodeURIComponent(searchTerm));

      // Check if the response is okay
      if (!response.ok) {
          return replygcxlicon('❌ *Failed to fetch the images.* Please try again.');
      }

      // Parse the response JSON
      let data = await response.json();
      if (!data.result || data.result.length === 0) {
          return replygcxlicon('❌ *No images found for the given query.*');
      }

      // Select a random set of images from the fetched URLs
      let imageUrls = [];
      for (let i = 0; i < amount; i++) {
          let randomImageUrl = data.result[Math.floor(Math.random() * data.result.length)];
          imageUrls.push(randomImageUrl);
      }

      // Send each selected image with a caption
      for (let imageUrl of imageUrls) {
          try {
              let imgResponse = await fetch(imageUrl);
              if (imgResponse.status === 403) {
                  console.warn(`⚠️ *403 Forbidden* for URL: ${imageUrl}. Skipping.`);
                  continue; // Skip to the next image URL
              }

              await XliconBotInc.sendMessage(m.chat, {
                  image: { url: imageUrl },
                  caption: `🖼️ *Image Result* 🎨\n\n✨ _Here is the result of: ${searchTerm}_ 🔍`
              }, { quoted: m });
          } catch (error) {
              console.error(`❌ Error sending image ${imageUrl}:`, error);
              continue; // Continue to the next image in case of an error
          }
      }

  } catch (e) {
      console.error('⚠️ Error fetching the images:', e);
      return replygcxlicon("❗ *Error fetching the images.* Please try again.");
  }
}
break;

case 'gimage': case 'googleimg': case 'imggoogle': {
  if (!text) return replygcxlicon(`*• Example:* ${prefix + command} a girl 👧`);
await XliconStickWait()
  try {
      // List of new API URLs
      const apiUrls = [
          'https://aemt.uk.to/googleimage?query=',
          'https://meitang.xyz/googleimage?query=',
          'https://btch.us.kg/googleimage?query=',
          'https://api.tioo.eu.org/googleimage?query=',
          'https://api.tioprm.eu.org/googleimage?query='
      ];

      // Randomly select an API URL
      const apiUrl = apiUrls[Math.floor(Math.random() * apiUrls.length)] + encodeURIComponent(text);

      // Fetch the image from the selected API
      let response = await fetch(apiUrl);

      // Check if the response is okay
      if (!response.ok) {
          return replygcxlicon('❌ *Failed to fetch the image.* Please try again. 🔄');
      }

      // Get the image URL from the response
      let data = await response.json();

      if (!data.result || data.result.length === 0) {
          return replygcxlicon('❌ *No images found.* Please try again with a different search term. 🔄');
      }

      // Select a random image from the result
      let imageUrl = data.result[Math.floor(Math.random() * data.result.length)];

      // Send the image with a caption
      await XliconBotInc.sendMessage(m.chat, {
          image: { url: imageUrl },
          caption: `🌟 *Google Image Search* 🌟\n\n_*Here is the result for: ${text}*_ 📸✨`
      }, { quoted: m });

  } catch (e) {
      console.error(e);
      return replygcxlicon('❗ *Error fetching the image.* Please try again. ⚠️');
  }
}
break;


case 'live-wallpaper': {
  try {
    if (!text) return replygcxlicon(`Example: ${prefix + command} cat`);

    // Show loading indicator
    await XliconStickWait();

    // Make API request to fetch live wallpapers
    const axios = require('axios');
    const response = await axios.get(`https://xliconmd-live-wallpapers.vercel.app/api/search?q=${encodeURIComponent(text)}&page=1&limit=10`);

    const { wallpapers } = response.data;

    if (!wallpapers || wallpapers.length === 0) {
      return replygcxlicon('❌ No live wallpapers found for your search.');
    }

    // Select a random wallpaper from the results
    const wallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];

    // Prepare message details
    const wallpaperDetails = `🖼️ *Title:* _${wallpaper.title}_\n` +
                             `🔗 *Link:* _${wallpaper.url}_\n`;

    // Send the wallpaper thumbnail and details
    await XliconBotInc.sendMessage(m.chat, {
      image: { url: wallpaper.thumbnail },
      caption: wallpaperDetails
    }, { quoted: m });

    // Send the live wallpaper video
    await XliconBotInc.sendMessage(m.chat, {
      video: { url: wallpaper.video_url },
      caption: '🎥 Here is your live wallpaper!'
    }, { quoted: m });

  } catch (error) {
    console.error("Error in live-wallpaper command: ", error);
    replygcxlicon("⚠️ An error occurred while processing your request.");
  }
}
break;
           

case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
  if (!text) return replygcxlicon(`Example: ${prefix + command} url_tiktok`)
  if (!text.includes('tiktok.com')) return replygcxlicon('Url Tidak Mengandung Result Dari Tiktok!')
  const hasil = await tiktokDl(text);
  XliconStickWait()
  if (hasil.size_nowm) {
    await XliconBotInc.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
  } else {
    for (let i = 0; i < hasil.data.length; i++) {
      await XliconBotInc.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
    }
  }
}
break


case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
  if (!text) return replygcxlicon(`Example: ${prefix + command} url_tiktok`)
  if (!text.includes('tiktok.com')) return replygcxlicon('Url Tidak Mengandung Result Dari Tiktok!')
  const hasil = await tiktokDl(text);
  XliconStickWait()
  await XliconBotInc.sendMessage(m.chat, {
    audio: { url: hasil.music_info.url },
    mimetype: 'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        title: 'TikTok • ' + hasil.author.nickname,
        body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
        previewType: 'PHOTO',
        thumbnailUrl: hasil.cover,
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: text
      }
    }
  }, { quoted: m });
}
break


case 'instagram': case 'insta': case 'ig': case 'igvideo': case 'igvid': {
  if (!text) {
    return replygcxlicon('❗ *You need to provide the URL of an Instagram video.*');
  }

  try {
    XliconStickWait(); // Show loading indicator

    // New API URL for Instagram video download
    const apiUrl = `https://api.neastooid.xyz/api/downloader/igdl?url=${encodeURIComponent(text)}`;
    const res = await fetch(apiUrl);
    const api_response = await res.json();

    // Validate API response
    if (!api_response.success || !api_response.data || !api_response.data[0] || !api_response.data[0].url) {
      return replygcxlicon('❌ *No media found or invalid response from the API.*');
    }

    // Extract the video URL from the response
    const videoUrl = api_response.data[0].url;
    const thumbnail = api_response.data[0].thumbnail;
    
    // Caption for the video
    const cap = `✨ *Enjoy your video!* 🎥\n🔥 *Powered by Xlicon Bot* 💻`;

    // Send the Instagram video message
    await XliconBotInc.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: cap,
      thumbnail: { url: thumbnail }, // Optionally include a thumbnail
    }, { quoted: m });

  } catch (error) {
    // Handle fetch or processing errors
    return replygcxlicon(`⚠️ *An error occurred:* ${error.message}`);
  }
}
break;
        
case 'instagramimg': case 'instaimg': case 'igimage': case 'igimg': {
  if (!text) {
    return replygcxlicon('❗ *You need to provide the URL of an Instagram post.*');
  }

  try {
    XliconStickWait();

    // New API URL for Instagram image download
    const apiUrl = `https://bk9.fun/download/instagram2?url=${encodeURIComponent(text)}`;
    const res = await fetch(apiUrl);
    const api_response = await res.json();

    // Validate API response
    if (!api_response || !api_response.status || !api_response.BK9 || api_response.BK9.length === 0) {
      return replygcxlicon('❌ *No media found or invalid response from the API.*');
    }

    // Extract image URLs from the response
    const imageLinks = api_response.BK9.map(item => item.url);
    const cap = '*🎉 Thank you for using xlicon v4!*'; // Optional caption for the images

    // Loop through each image and send them
    for (const imageUrl of imageLinks) {
      await XliconBotInc.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: cap
      }, { quoted: m });
    }

  } catch (error) {
    // Handle fetch or processing errors
    return replygcxlicon(`⚠️ *An error occurred:* ${error.message}`);
  }
}
break;


case 'fb':
    case 'facebook':
    case 'facebookvid': {
      if (!text) {
        return replygcxlicon(`📌 Please provide a Facebook video link.\n\nExample:\n*${prefix + command}* https://www.facebook.com/share/v/HVm2yjse1usgfF4T`);
      }
    
      try {
        XliconStickWait();
        // Fetch video data from the API
        const response = await fetch(`https://bk9.fun/download/videodownloader?input=${encodeURIComponent(text)}`);
        const data = await response.json();
    
        if (!data || !data.status || !data.video || !data.video.videoInfo || data.video.videoInfo.length === 0) {
          return replygcxlicon('❌ No video found or invalid response from API.');
        }
    
        // Prefer HD video, fallback to SD
        const video = data.video.videoInfo.find(v => v.quality.toLowerCase().includes('hd')) ||
                      data.video.videoInfo.find(v => v.quality.toLowerCase().includes('sd'));
    
        if (!video) {
          return replygcxlicon('❌ No HD or SD video found.');
        }
    
        const caption = `
 🎥 *Facebook Video Download* 🎥
    
📺 *Info*: ${data.video.info || "Not provided"}
⏳ *Duration*: ${data.video.duration || "Unknown"}
📹 *Quality*: ${video.quality}
💾 *Format*: ${video.format}
✨ *Enjoy your video!* 🎥\n🔥 *Powered by Xlicon Bot* 💻    

    `.trim();
    
        // Send the video with the caption
        await XliconBotInc.sendMessage(m.chat, {
          video: { url: video.downloadLink },
          caption,
        }, { quoted: m });
    
      } catch (error) {
        console.error(error);
        return replygcxlicon('❌ An error occurred while processing your request. Please try again later.');
      }
    }
    break;
                    
                             
    case 'twitter':
  case 'twitterdl': {
    if (!args[0]) {
      return replygcxlicon(`📌 Example:\n*${prefix + command}* https://twitter.com/username/status/1234567890123456789`);
    }

    if (!isUrl(args[0]) || !args[0].includes('twitter.com')) {
      return replygcxlicon('❌ Invalid Twitter link!');
    }

    try {
      // Fetch data from the new Twitter downloader API
      const response = await axios.get(`https://api.siputzx.my.id/api/d/twitter?url=${encodeURIComponent(args[0])}`);

      if (!response.data || !response.data.status) {
        return replygcxlicon('❌ Unable to fetch data from the link. Please try again later.');
      }

      const { downloadLink, videoDescription, imgUrl } = response.data.data;

      // Prepare a response message
      const message = `
🎥 *Twitter Video Download* 🎥

📄 *Description:* ${videoDescription || "No description provided"}

🔗 *Download Link:* ${downloadLink}

✨ *Enjoy your video!* 🎥\n🔥 *Powered by Xlicon Bot* 💻

`;

      // Send the message with the video download link
      await replygcxlicon(message);

      // Send the video itself in the chat
      await XliconBotInc.sendMessage(m.chat, {
        video: { url: downloadLink },
        mimetype: 'video/mp4',
        caption: message
      }, { quoted: m });

    } catch (error) {
      console.error(error);
      replygcxlicon('❌ *An error occurred while processing your request.*\nMake sure the link is valid and try again.');
    }
  }
  break;
                  
      case 'threads': {
        try {
          // URL of the Threads API endpoint
          const threadsApiUrl = 'https://api.nexoracle.com/downloader/threads?apikey=free_key@maher_apis&url=https://www.threads.net/t/Cujx6ryoYx6/?igshid=NTc4MTIwNjQ2YQ==';
          
          // Fetching the data from the Threads API
          let res = await fetch(threadsApiUrl);
          let apiResponse = await res.json();
      
          // Check if the response is valid and contains the required data
          if (apiResponse.status === 200 && apiResponse.result) {
            const { username, profile, downloadLink } = apiResponse.result;
      
            // Ensure both profile and download link are available
            if (profile && downloadLink) {
              // Check the file type of the downloadLink (image or video)
              const fileExtension = downloadLink.split('.').pop().toLowerCase();
              
              // If the download link is a video or image, send the corresponding type
              if (fileExtension === 'mp4' || fileExtension === 'mov') {
                // If it's a video, send the video file
                await XliconBotInc.sendMessage(m.chat, {
                  video: { url: downloadLink },
                  caption: `🎥 *Username:* ${username}\n📸 *Profile Image:* ${profile}`,
                }, { quoted: m });
              } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
                // If it's an image, send the image
                await XliconBotInc.sendMessage(m.chat, {
                  image: { url: downloadLink },
                  caption: `📸 *Username:* ${username}\n📸 *Profile Image:* ${profile}`,
                }, { quoted: m });
              } else {
                // Handle if the file format is unrecognized
                return replygcxlicon('❌ *Unrecognized file format for the download link.*');
              }
      
            } else {
              return replygcxlicon('❌ *Missing profile or download link.*');
            }
            
          } else {
            return replygcxlicon('❌ *Failed to fetch thread content.*');
          }
      
        } catch (error) {
          console.error('Error fetching thread data:', error.message);
          return replygcxlicon('❌ *An error occurred while fetching thread content.*');
        }
      }
      break;
                
          
       
      case 'bilibili': {
        if (!isPremium) return replyprem(mess.premium);
        if (!text) return replygcxlicon(`Example : ${prefix + command} https://www.bilibili.com/video/BV1cy4y1k7A2`);
        await XliconStickWait();
        try {
          // Fetch video information from the Bilibili API
          const response = await axios.get(`https://api.nexoracle.com/downloader/bilibili?apikey=free_key@maher_apis&url=${encodeURIComponent(text)}`);
      
          if (response.status !== 200 || !response.data.result || !response.data.result.medias || response.data.result.medias.length === 0) {
            return replygcxlicon('❌ No video found. Please check the URL and try again.');
          }
      
          const video = response.data.result.medias.find(media => media.videoAvailable) || response.data.result.medias[0];
          const videoUrl = video.url;
      
          // Prepare message with video details
          const caption = `📹 *Bilibili Video Downloaded*\n\n📂 Title: ${response.data.result.title}\n📅 Duration: ${response.data.result.duration}\n👤 Uploader: ${response.data.result.uploader}`;
      
          // Send video message
          await XliconBotInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: caption
          }, { quoted: m });
      
        } catch (error) {
          console.error('Failed to fetch video:', error);
          replygcxlicon('❌ An error occurred while fetching the video. Please try again later.');
        }
      }
      break;
      
      
      
      
      
      case 'dailymotion': {
        if (!isPremium) return replyprem(mess.premium);
        if (!text) return replygcxlicon(`Example : ${prefix + command} https://dai.ly/x9492ja`);
        await XliconStickWait();
        try {
          // Ensure global.api is an absolute URL
          const apiUrl = new URL(`${global.api}downloader/dailymotion?apikey=${global.id}&url=${encodeURIComponent(text)}`);
      
          // Fetch video information from Dailymotion API
          const response = await fetch(apiUrl.toString());
          const json = await response.json();
      
          // Check if the response contains video data
          if (!json || !json.result || json.result.length === 0) {
            return replygcxlicon('❌ Failed to fetch video. Please try again.');
          }
      
          // Access the first result
          const videoInfo = json.result[0];
      
          // Choose the best quality video available from formats
          const bestQualityVideo = videoInfo.formats.find(format => format.format_id === 'hls-1080') || 
                                   videoInfo.formats.find(format => format.format_id === 'hls-720') || 
                                   videoInfo.formats[videoInfo.formats.length - 1]; // fallback to the lowest
      
          const videoUrl = bestQualityVideo.url;
      
          // Send a reaction to indicate the start of the download
          await XliconBotInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
      
          // Send the video
          await XliconBotInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: `📹 *Dailymotion Video Downloaded*\n\n📂 Title: ${videoInfo.title}\n📅 Duration: ${videoInfo.duration_string}\n🌐 Source: ${videoInfo.source}`
          }, { quoted: m });
      
          // Send a reaction to indicate the download is complete
          await XliconBotInc.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
      
        } catch (err) {
          console.error(err);
          await XliconBotInc.sendMessage(m.chat, { react: { text: "✖️", key: m.key } });
          replygcxlicon('❌ An error occurred while fetching the video. Please try again later.');
        }
      }
      break;
       
      case 'apk': {
        if (!text) return replygcxlicon(`*[❗] Please provide the APK Name you want to download.*`);
        await XliconStickWait();
      
        try {
          // Fetch APK data from the new API
          let apiUrl = `https://bk9.fun/download/apk?id=${encodeURIComponent(text)}`;
          let response = await fetch(apiUrl);
          let data = await response.json();
      
          if (data.status !== true) {
            return replygcxlicon(`*[❗] No results found for the APK Name you provided.*`);
          }
      
          let apkData = data.BK9;
      
          // Ensure size is a valid string before parsing it
          let sizeMB = 0;
          if (apkData.size && typeof apkData.size === 'string') {
            sizeMB = parseFloat(apkData.size.replace(' MB', ''));
          }
      
          if (sizeMB > 200) {
            return await XliconBotInc.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
          }
      
          // Send the APK file
          await XliconBotInc.sendMessage(
            m.chat,
            {
              document: { url: apkData.dllink },
              mimetype: 'application/vnd.android.package-archive',
              fileName: apkData.name + '.apk',
              caption: `✨ *APK Details* ✨\n\n📱 *App Name:* ${apkData.name}\n🔄 *Last Updated:* ${apkData.lastup}\n📦 *Package Name:* ${apkData.package}\n\n🔥 *Get the latest version now! 🔥`
            },
            { quoted: m }
          );
        } catch (error) {
          console.error(error);
          return replygcxlicon(`*[❗] An error occurred. Please try again later.*`);
        }
      }
      break;
      
      
      case 'mega': {
        try {
          if (!text) return replygcxlicon(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
          const { File } = require('megajs');
          const file = File.fromURL(text);
          await file.loadAttributes();
          if (file.size >= 300000000) return replygcxlicon('Error: File size is too large (Maximum Size: 300MB)');
      
          const downloadingMessage = `🌩️ *Downloading file... Please wait.*`;
          replygcxlicon(downloadingMessage);
      
          const caption = `🎉 *_Download Complete!_* 🎉\n\n📂 *File Name:* ${file.name}\n📊 *Size:* ${formatBytes(file.size)}\n\n✅ *Enjoy your download!* ✅`;

      
          const data = await file.downloadBuffer();
          const fileExtension = path.extname(file.name).toLowerCase();
          const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
          };
          let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
      
          await XliconBotInc.sendMessage(m.chat, { document: data, mimetype: mimetype, fileName: file.name, caption: caption }, { quoted: m });
        } catch (error) {
          return replygcxlicon(`Error: ${error.message}`);
        }
      }
      break;
      
      case 'mediafire': {
        if (!args[0]) return replygcxlicon(`🚫 *Enter the MediaFire link next to the command*`);
        if (!args[0].match(/mediafire/gi)) return replygcxlicon(`❌ *Link incorrect. Please provide a valid MediaFire link*`);
      
        await XliconStickWait();
      
        // Construct the API URL
        const apiUrl = `https://api.vreden.my.id/api/mediafiredl?url=${encodeURIComponent(args[0])}`;
      
        // Notify the user that the download is starting
        replygcxlicon(`⏳ *Downloading file, please wait...*`);
      
        try {
          // Fetch the API response
          const res = await fetch(apiUrl);
          const api_response = await res.json();
      
          // Check if the response is valid
          if (api_response.status === 200 && api_response.result.length > 0) {
            const { nama, mime, size, link } = api_response.result[0];
      
            // MIME types mapping for extensions
            const mimeTypes = {
              "mp4": "video/mp4",
              "pdf": "application/pdf",
              "zip": "application/zip",
              "rar": "application/x-rar-compressed",
              "7z": "application/x-7z-compressed",
              "jpg": "image/jpeg",
              "jpeg": "image/jpeg",
              "png": "image/png",
            };
      
            // Get mimetype from file extension
            const mimetype = mimeTypes[mime] || "application/octet-stream";
      
            // Caption with file details
            const caption = `
              ≡ *📂 MEDIAFIRE FILE DETAILS*
              
              ▢ *📄 Filename:* ${nama}
              ▢ *📏 Size:* ${size}
              ▢ *🗂️ Extension:* ${mime}
            `.trim();
      
            // Send the file
            await XliconBotInc.sendMessage(m.chat, {
              document: { url: link },
              fileName: nama,
              mimetype: mimetype,
            }, { quoted: m });
      
            // Notify the user that the download is complete
            return replygcxlicon(`✅ *Download complete!* 🎉\n\n${caption}`);
          }
      
          // Handle invalid or empty response
          return replygcxlicon(`❌ *Failed to fetch the download link. Please try again later.*`);
      
        } catch (error) {
          console.error(`❌ Error during MediaFire download: ${error.message}`);
          return replygcxlicon(`⚠️ *Failed to download the file. Please try again later.*`);
        }
      }
      break;
            
      case 'mediafire2': {
        if (!args[0]) return replygcxlicon(`🚫 *Please provide a MediaFire link next to the command!*`);
        if (!args[0].match(/mediafire/gi)) return replygcxlicon(`❌ *Invalid link! Please provide a valid MediaFire link.*`);
      
        await XliconStickWait();
      
        // Construct the API URL
        const apiUrl = `https://bk9.fun/download/mediafire?url=${encodeURIComponent(args[0])}`;
      
        try {
          // Notify the user that the process is starting
          replygcxlicon(`⏳ *Fetching file details, please wait...*`);
      
          // Fetch the API response
          const res = await fetch(apiUrl);
          const api_response = await res.json();
      
          // Check if the response is valid and contains the link
          if (api_response.status && api_response.BK9 && api_response.BK9.link) {
            const { link, name, mime, size, uploaded } = api_response.BK9;
      
            // Mime types mapping
            const mimeTypes = {
              "mp4": "video/mp4",
              "pdf": "application/pdf",
              "zip": "application/zip",
              "rar": "application/x-rar-compressed",
              "7z": "application/x-7z-compressed",
              "jpg": "image/jpeg",
              "jpeg": "image/jpeg",
              "png": "image/png",
            };
      
            // Get mimetype from file extension, defaulting to "application/octet-stream"
            const mimetype = mimeTypes[mime] || "application/octet-stream";
      
            const caption = `
              📂 *📥 MEDIAFIRE FILE DETAILS*
              
              📄 *Filename:* ${name || "Unknown"}
              📏 *Size:* ${size || "Unknown"}
              🗂️ *Extension:* ${mime || "Unknown"}
              📅 *Uploaded On:* ${uploaded || "Unknown"}
            `.trim();
      
            // Send the file
            await XliconBotInc.sendMessage(m.chat, {
              document: { url: link },
              fileName: name || "file",
              mimetype: mimetype,
            }, { quoted: m });
      
            // Notify the user that the download is complete
            return replygcxlicon(`✅ *Download Complete!* 🎉\n\n${caption}`);
          }
      
          // Handle cases where the response does not contain the expected data
          return replygcxlicon(`❌ *Failed to fetch the download link. Please check the link or try again later.*`);
      
        } catch (error) {
          console.error('⚠️ Error fetching MediaFire data:', error.message);
          return replygcxlicon(`⚠️ *An error occurred while processing your request. Please try again later.*`);
        }
      }
      break;
      
      case 'soundcloud': {
        if (!text) return replygcxlicon(`*Where is the Song Name?*\n_Example:_\n${prefix}${command} Metamorphosis`);
        
        await XliconStickWait();
      
        try {
          // Construct the API URL
          const apiUrl = `https://btch.us.kg/soundcloud?url=${encodeURIComponent(text)}`;
      
          // Fetch the SoundCloud song details
          let api = await fetchJson(apiUrl);
      
          // Log the API response for debugging
          console.log('SoundCloud API Response:', api);
      
          if (!api || api.status !== true || !api.result) {
            console.error('API response is invalid or no results found:', api);
            await XliconBotInc.sendMessage(m.chat, '❌ No results found on SoundCloud. Please try again with a different query.', { quoted: m });
            return;
          }
      
          // Extract song details from the response
          const { title, url, author, imageURL } = api.result;
      
          // Prepare the response message with song information
          const songInfo = `*🎵 S O U N D C L O U D 🎵*\n\n` +
                           `• 🎵 *Title*: ${title}\n` +
                           `• 🎤 *Artist*: ${author.username}\n` +
                           `• 🔗 *Download Link*: [Click Here](${url})`;
      
          // Send the song info to the user
          await XliconBotInc.sendMessage(m.chat, { text: songInfo }, { quoted: m });
      
          // Check if the download URL exists and is valid
          if (!url || !url.startsWith('https://')) {
            console.error('Invalid download URL:', url);
            await XliconBotInc.sendMessage(m.chat, '❌ No valid download link found. Please try again.', { quoted: m });
            return;
          }
      
          // Log the download URL for debugging
          console.log('Download URL:', url);
      
          // Fetch the audio file
          const audioResponse = await fetch(url);
          if (!audioResponse.ok) {
            throw new Error(`Failed to fetch audio. Status: ${audioResponse.status}`);
          }
      
          const audioBuffer = await audioResponse.buffer();
          if (!audioBuffer || audioBuffer.length === 0) {
            await XliconBotInc.sendMessage(m.chat, '❌ Failed to fetch audio. The file might be empty or inaccessible.', { quoted: m });
            return;
          }
      
          // Send the SoundCloud song as an audio message with additional context (external ad reply)
          await XliconBotInc.sendMessage(m.chat, {
            audio: { buffer: audioBuffer },
            mimetype: 'audio/mpeg',
            contextInfo: {
              externalAdReply: {
                title: `🎵 - sᴏᴜɴᴅᴄʟᴏᴜᴅ -`,
                body: title,
                thumbnailUrl: imageURL, // Use the song's thumbnail image
                sourceUrl: url, // URL to the download link
                mediaType: 2,
                showAdAttribution: true,
                renderLargerThumbnail: true
              }
            }
          }, { quoted: m });
      
        } catch (error) {
          console.error('Error fetching SoundCloud data:', error.message);
          await XliconBotInc.sendMessage(m.chat, { text: '❌ An error occurred while fetching the SoundCloud data. Please try again later.' }, { quoted: m });
        }
      }
      break;
       
        
      case 'git': case 'gitclone':
        if (!args[0]) return replygcxlicon(`Where is the link?\nExample :\n${prefix}${command} https://github.com/salmanytofficial/XliconMedia`)
        if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxlicon(`Link invalid!!`)
        await XliconStickWait()        
        let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            let [, user, repo] = args[0].match(regex1) || []
            repo = repo.replace(/.git$/, '')
            let url = `https://api.github.com/repos/${user}/${repo}/zipball`
            let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
            XliconBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcxlicon(mess.error))
        break


                
        case 'gdrive': {
          if (!args[0]) return replygcxlicon(`❌ *Please provide a Google Drive link!*`);
        
          await XliconStickWait();
        
          try {
            // Fetch Google Drive file details using the new API
            const apiUrl = `https://api.siputzx.my.id/api/d/gdrive?url=${encodeURIComponent(args[0])}`;
            let res = await fetch(apiUrl);
            let apiResponse = await res.json();
        
            if (apiResponse.status !== true || !apiResponse.data) {
              return replygcxlicon('❌ *Failed to fetch data from Google Drive link.* Please check the URL and try again.');
            }
        
            // Extract file details from the API response
            const { name: fileName, download: downloadUrl, link } = apiResponse.data;
            const fileSize = "Unknown"; // You can update this if your API provides file size
        
            // Determine the MIME type and file type based on the file extension
            let fileExtension = fileName.split('.').pop().toLowerCase();
            let mimeTypes = {
              'mp4': 'video/mp4',
              'pdf': 'application/pdf',
              'zip': 'application/zip',
              'rar': 'application/x-rar-compressed',
              '7z': 'application/x-7z-compressed',
              'jpg': 'image/jpeg',
              'jpeg': 'image/jpeg',
              'png': 'image/png',
              'gif': 'image/gif',
              'doc': 'application/msword',
              'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              'txt': 'text/plain',
            };
            let mimetypeDetected = mimeTypes[fileExtension] || 'application/octet-stream';
        
            // Send file based on MIME type
            if (mimetypeDetected.includes('image')) {
              // Send as an image
              await XliconBotInc.sendMessage(m.chat, {
                image: { url: downloadUrl },
                caption: `🖼 *Image Name:* ${fileName}\n🗂 *Size:* ${fileSize}\n📥 *Download Link:* ${downloadUrl}`,
                mimetype: mimetypeDetected,
              });
            } else if (mimetypeDetected.includes('video')) {
              // Send as a video
              await XliconBotInc.sendMessage(m.chat, {
                video: { url: downloadUrl },
                caption: `🎬 *Video Name:* ${fileName}\n🗂 *Size:* ${fileSize}\n📥 *Download Link:* ${downloadUrl}`,
                mimetype: mimetypeDetected,
              });
            } else if (mimetypeDetected.includes('application')) {
              // Send as a document (for file types like PDF, DOC, etc.)
              await XliconBotInc.sendMessage(m.chat, {
                document: { url: downloadUrl },
                fileName: fileName,
                mimetype: mimetypeDetected,
                caption: `📄 *File Name:* ${fileName}\n🗂 *Size:* ${fileSize}\n📥 *Download Link:* ${downloadUrl}`,
              });
            } else {
              // Default for other file types (this could be further customized)
              await XliconBotInc.sendMessage(m.chat, {
                document: { url: downloadUrl },
                fileName: fileName,
                mimetype: mimetypeDetected,
                caption: `📂 *File Name:* ${fileName}\n🗂 *Size:* ${fileSize}\n📥 *Download Link:* ${downloadUrl}`,
              });
            }
          } catch (error) {
            console.error('Error fetching Google Drive data:', error.message);
            return replygcxlicon('❌ *An error occurred while processing the link. Please check the URL and try again.*');
          }
        }
        break;
        

        case 'pinterest': 
case 'pin': {
  if (!text) {
    return replygcxlicon(`❗ *Example:* ${prefix + command} goku or goku,5`);
  }

  const [query, count] = text.split(',');
  const imageCount = count ? Math.min(parseInt(count), 20) : 1; // Limit to 20 images

  XliconStickWait();

  try {
    // Fetch Pinterest images based on the query
    const searchApiUrl = `https://btch.us.kg/pinterest?query=${encodeURIComponent(query)}`;
    const searchResponse = await axios.get(searchApiUrl);

    if (searchResponse.data.result && searchResponse.data.result.length > 0) {
      const imageUrls = searchResponse.data.result.slice(0, imageCount); // Get requested number of images

      // Loop through the image URLs and send them
      for (let i = 0; i < imageUrls.length; i++) {
        const imageUrl = imageUrls[i];

        // Check if the image URL is valid by sending a HEAD request
        try {
          const headResponse = await axios.head(imageUrl);

          // If the URL is valid, send the image
          if (headResponse.status === 200) {
            await XliconBotInc.sendMessage(m.chat, {
              image: { url: imageUrl },
              caption: `🎉 *Image ${i + 1} from your Pinterest query: ${query}*`
            }, { quoted: m });
          } else {
            console.log(`⚠️ Invalid URL: ${imageUrl}`);
          }
        } catch (err) {
          console.log(`⚠️ Failed to access URL: ${imageUrl}`);
        }
      }
    } else {
      return replygcxlicon("⚠️ *No images found for the provided query.*");
    }
  } catch (error) {
    console.error(error);
    return replygcxlicon("❌ *An error occurred while fetching data from Pinterest.*");
  }
}
break;



        case 'pinterestdl': 
        case 'pindl': {
          if (!text) {
            return replygcxlicon(`❗ *Example:* ${prefix + command} pinterest_url`);
          }
        
          const pinterestUrl = text.trim();
        
          XliconStickWait();
        
          try {
            // Fetch the download details for the Pinterest link (image or video)
            const downloadApiUrl = `https://btch.us.kg/download/pindl?url=${encodeURIComponent(pinterestUrl)}`;
            const response = await axios.get(downloadApiUrl);
        
            if (response.data.status === true && response.data.result.success) {
              const mediaType = response.data.result.data.media_type;
              const downloadUrl = mediaType === 'image' ? response.data.result.data.image : response.data.result.data.video;
        
              if (downloadUrl) {
                if (mediaType === 'video/mp4') {
                  // Send video message if it's a video
                  await XliconBotInc.sendMessage(m.chat, {
                    video: { url: downloadUrl },
                    caption: `🎉 *Video from your Pinterest link*`
                  }, { quoted: m });
                } else {
                  // Send image message if it's an image
                  await XliconBotInc.sendMessage(m.chat, {
                    image: { url: downloadUrl },
                    caption: `🎉 *Image from your Pinterest link*`
                  }, { quoted: m });
                }
              } else {
                return replygcxlicon("⚠️ *No media found for the provided Pinterest URL.*");
              }
            } else {
              return replygcxlicon("⚠️ *Failed to fetch media from Pinterest.*");
            }
          } catch (error) {
            console.error(error);
            return replygcxlicon("❌ *An error occurred while fetching data from Pinterest.*");
          }
        }
        break;
        
        
        case 'ringtone': {
          if (!text) return replygcxlicon(`Example: ${prefix + command} black rover`)
          let anu = await ringtone(text)
          let result = pickRandom(anu)
          await XliconBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
        }
        break
        
          
      case 'autodownload': case 'autodl': {
        if (!XliconTheCreator) return XliconStickOwner();
    await XliconStickWait()
        if (q == 'on') {
            db.settings[botNumber].autodownload = true;
            return replygcxlicon(`Successfully changed Auto Download to ${q} ✅`);
        } else if (q == 'off') {
            db.settings[botNumber].autodownload = false;
            return replygcxlicon(`Successfully changed Auto Download to ${q} ❌`);
        } else {
           
            const replyMessage = `Hi ${m.pushName},\n\nPlease choose to *${command}*:\n\n`
                + `✅ *Enable Auto Download*\n❌ *Disable Auto Download*`;
    
            return replygcxlicon(replyMessage);
        }
    }
    break;
    
          
			

//-------------------------------------------------------------------------------------------------------------//


// ▀▀ ▄▀▄ █▄ ▄█ █▀▀   █▀▀ █▀█ █▄ ▄█ █▄ ▄█ ▄▀▄ █▄ █ █▀▄ █▀▀ 
//█▄█ █▀█ █ ▀ █ ██▄   █▄▄ █▄█ █ ▀ █ █ ▀ █ █▀█ █ ▀█ █▄▀ ▄██ 


case 'truth': {
  // Set up image URL
  const imageUrl = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg';


  // Truth questions array
 const truths = [
      "Have you ever liked anyone? How long?",
      "If you could make a friend in any group, who would you pick?",
      "What's your biggest fear?",
      "Have you ever liked someone and felt they liked you back?",
      "Have you ever stolen money from family?",
      "What's the name of your friend's ex you secretly liked?",
      "What makes you happy when sad?",
      "Have you experienced unrequited love?",
      "What's your most embarrassing moment?",
      "What's your proudest achievement this year?",
      "What's the weirdest thing you've done when alone?",
      "Have you ever cheated on a test?",
      "What is something you've done that you're ashamed of?",
      "Have you ever been caught lying?",
      "What is your most ridiculous nickname?",
      "If you could switch lives with someone for a day, who would it be?",
      "What's the worst gift you've ever received?",
      "Have you ever shared a secret you promised to keep?",
      "What's your biggest insecurity?",
      "Have you ever broken something and blamed someone else?",
      "What's a secret you've kept from your parents?",
      "What would you do if you had only 24 hours to live?",
      "What's the most trouble you've gotten into at school?",
      "What's the worst date you've ever had?",
      "What's something you've never told your best friend?",
      "What's a talent you wish you had?",
      "Have you ever pretended to be sick to skip school?",
      "If you had to date someone in this room, who would it be?",
      "What's a lie you've told to impress someone?",
      "Have you ever stalked someone on social media?",
      "If you had a superpower, what would it be?",
      "Have you ever cried watching a movie? Which one?",
      "What’s the most childish thing you still do?",
      "Have you ever laughed at something inappropriate?",
      "What’s your guilty pleasure?",
      "If you were invisible, what’s the first thing you’d do?",
      "Have you ever lied to get out of trouble?",
      "Who do you admire the most, and why?",
      "What’s the meanest thing you’ve done to someone?",
      "Do you have any hidden talents?",
      "Have you ever lied in a game of Truth or Dare?",
      "What’s one secret you’ve kept from everyone?",
      "Have you ever had a crush on a teacher?",
      "What’s the silliest thing you’re afraid of?",
      "What’s the worst thing you’ve done when you were mad?",
      "Who was your first kiss?",
      "Have you ever cheated in a relationship?",
      "What’s the most expensive thing you’ve broken?",
      "What’s the worst rumor you spread or heard?",
      "Have you ever been jealous of a friend?",
      "What’s something you regret doing or saying?"
  ];

  // Randomly select a truth question
  const selectedTruth = truths[Math.floor(Math.random() * truths.length)];

  // Send the truth message
  const truthMessage = `🎭 *Truth* Challenge 🎭\n\n${selectedTruth}`;

  await XliconBotInc.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: truthMessage,
      footer: 'XLICON-V4-MD',
      quoted: m
  });
}
break;

case 'dare': {
  // Set up image URL
  const imageUrl = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg';


  // Dare challenges array
  const dares = [
      "Eat 2 tablespoons of rice without side dishes.",
      "Call your crush and say 'I miss you.'",
      "Only reply with emojis for 24 hours.",
      "Shout *I love my crush* in public.",
      "Send your contact list screenshot.",
      "Act possessed in a funny way.",
      "Rename yourself to *I AM GOOFY* for 24 hours.",
      "Put a silly photo of yourself as your profile picture.",
      "Shout 'I am amazing!' in a voice note.",
      "Send a message to your ex saying you miss them.",
      "Text your last contact with just 'Hey!' repeatedly.",
      "Do 20 jumping jacks and record yourself.",
      "Text a random person and confess a fake secret.",
      "Talk in an accent for the next hour.",
      "Post a cringy photo on social media.",
      "Let the person next to you text anyone from your phone.",
      "Draw a funny mustache on your face and take a selfie.",
      "Say the alphabet backward.",
      "Walk outside and wave at strangers.",
      "Talk like a baby for the next 10 minutes.",
      "Share a funny meme with the last person you texted.",
      "Dance without music for 1 minute.",
      "Let someone else write your next social media post.",
      "Wear socks on your hands for the next 5 minutes.",
      "Pretend to be a chicken for 30 seconds.",
      "Take a silly selfie and post it online.",
      "Read the last text you sent out loud.",
      "Text your parents and say you got engaged.",
      "Eat a spoonful of something spicy.",
      "Imitate a famous celebrity for a minute.",
      "Text your crush with a heart emoji.",
      "Try to lick your elbow.",
      "Do 10 push-ups on video.",
      "Do your best animal impression.",
      "Spin around 10 times and walk in a straight line.",
      "Text a friend and say you're moving abroad.",
      "Act like your favorite character for 5 minutes.",
      "Talk with your tongue sticking out.",
      "Message a random number and say 'Happy Birthday!'",
      "Recite a poem about the nearest object.",
      "Pretend you’re a robot for the next 5 minutes.",
      "Stand on one leg for 30 seconds.",
      "Text a friend and ask for the weirdest selfie.",
      "Sing a nursery rhyme with dramatic flair.",
      "Write 'I am the best' on your forehead with marker.",
      "Act like you’re a waiter and take everyone’s order.",
      "Send a voice note saying you’re a superhero.",
      "Pretend you’re on a cooking show and describe your dinner.",
      "Text a random person 'Did you call me?'"
  ];

  // Randomly select a dare challenge
  const selectedDare = dares[Math.floor(Math.random() * dares.length)];

  // Send the dare message
  const dareMessage = `🔥 *Dare* Challenge 🔥\n\n${selectedDare}`;

  await XliconBotInc.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: dareMessage,
      footer: 'XLICON-V4-MD',
      quoted: m
  });
}
break;

      
      
case 'slot': {
  await gameSlot(XliconBotInc, m, global.db.users)
}
break
case 'casino': {
  await gameCasinoSolo(XliconBotInc, m, prefix, global.db.users)
}
break
case 'robber': case 'rob': {
  await gameMerampok(m, global.db.users)
}
break
case 'suitpvp': case 'suit': {
  let poin = 10
  let poin_lose = 10
  let timeout = 60000
  if (Object.values(game.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcxlicon(`Finish your previous suit`)
  if (m.mentionedJid[0] === m.sender) return replygcxlicon(`Can't play with myself !`)
  if (!m.mentionedJid[0]) return replygcxlicon(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[0]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
  if (Object.values(game.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcxlicon(`The person you are challenging is playing suit with someone else :(`)
  let id = 'suit_' + new Date() * 1
  let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} challenge @${m.mentionedJid[0].split`@`[0]} to play suits\n\nPlease @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
  game.suit[id] = {
    chat: replygcxlicon(caption),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (game.suit[id]) replygcxlicon(`_Suit time is up_`)
      delete game.suit[id]
    }, 60000), poin, poin_lose, timeout
  }
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
  let TicTacToe = require('./lib/tictactoe');
  if (Object.values(game.tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygcxlicon(`You are still in the game!\nType *${prefix}del${command}* If you want to end the session`);
  let room = Object.values(game.tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
  if (room) {
    replygcxlicon('Partner found!')
    room.o = m.chat
    room.game.playerO = m.sender
    room.state = 'PLAYING'
    let arr = room.game.render().map(v => {
      return {X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]
    })
    let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nWaiting @${room.game.currentTurn.split('@')[0]}\n\nType *surrender* to give up and admit defeat`
    if (room.x !== room.o) await XliconBotInc.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: m })
    await XliconBotInc.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
  } else {
    room = {
      id: 'tictactoe-' + (+new Date),
      x: m.chat,
      o: '',
      game: new TicTacToe(m.sender, 'o'),
      state: 'WAITING',
      waktu: setTimeout(() => {
        if (game.tictactoe[roomnya.id]) replygcxlicon(`_Time ${command} finished_`)
        delete game.tictactoe[roomnya.id]
      }, 300000)
    }
    if (text) room.name = text
    XliconBotInc.sendMessage(m.chat, { text: 'Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: m })
    game.tictactoe[room.id] = room
  }
}
break
case 'playbomb': case 'bomb': {
  if (game.tebakbom[m.sender]) return replygcxlicon('There Are Still Unfinished Sessions!')
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  game.tebakbom[m.sender] = {
    petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
    board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
    bomb: 3,
    lolos: 7,
    pick: 0,
    nyawa: ['❤️', '❤️', '❤️'],
    waktu: setTimeout(() => {
      if (game.tebakbom[m.sender]) replygcxlicon(`_Time ${command} finished_`)
      delete game.tebakbom[m.sender];
    }, 120000)
  }
  replygcxlicon(`*GUESS THE BOMB*\n\n${game.tebakbom[m.sender].board.join("")}\n\nChoose that number! and don't get hit by a bomb!\nBomb : ${game.tebakbom[m.sender].bomb}\nLife : ${game.tebakbom[m.sender].nyawa.join("")}`);
}
break

case 'mathquiz': case 'math': {
  const { genMath, modes } = require('./lib/math');
const axios = require('axios');
  const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
  if (!text) return replygcxlicon(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
  if (!inputMode.includes(text.toLowerCase())) return replygcxlicon('Mode not found!')
  if (game.kuismath.hasOwnProperty(m.sender.split('@')[0])) return replygcxlicon('There Are Still Unfinished Sessions!')
  let result = await genMath(text.toLowerCase())
  replygcxlicon(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} detik`).then(() => {
    game.kuismath[m.sender.split('@')[0]] = {
      jawaban: result.jawaban,
      mode: text.toLowerCase()
    }
  })
  await sleep(result.waktu)
  if (game.kuismath.hasOwnProperty(m.sender.split('@')[0])) {
    replygcxlicon('Time has run out\nAnswer: ' + game.kuismath[m.sender.split('@')[0]].jawaban)
    delete game.kuismath[m.sender.split('@')[0]]
  }
}
break


case 'dice': {
  let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
  let media = pickRandom(ddsa)
  await XliconBotInc.sendImageAsSticker(m.chat, media.url, m, { packname: global.packname, author: global.author, isAvatar: 1 })
}
break


case 'profile': case 'cekme': case 'cek': {
  const user = Object.keys(global.db.users)
  const infoUser = global.db.users[m.sender]
  const teks = `*Profile @${m.sender.split('@')[0]}* :\nUser Bot : ${user.includes(m.sender) ? 'True' : 'False'}\nUser : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\nLimit : ${infoUser.limit}\nMoney : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`
  await XliconBotInc.sendTextMentions(m.chat, teks, m)
}
break

case 'daily': case 'claim': {
  daily(XliconBotInc, m, global.db.users)
}
break

case 'transferlimit': case 'tflimit': case 'tlimit': {
  transferLimit(XliconBotInc, m, args, global.db.users)
}
break

case 'transfermoney': case 'tmoney': case 'transfer': {
  transferUang(XliconBotInc, m, args, global.db.users)
}
break

case 'buy': {
  buy(m, args, db)
}
break

case 'react': {
  XliconBotInc.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
}
break

case 'tagme': {
  XliconBotInc.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
}
break


//-----------------------------------------------------------------------------------------------------------//


//▄▀▄ ▀█▀   █▀▀ █▀█ █▄ ▄█ █▄ ▄█ ▄▀▄ █▀▄ █▄ █ █▀▀ 
//█▀█ ▄█▄   █▄▄ █▄█ █ ▀ █ █ ▀ █ █▀█ █▄▀ █ ▀█ ▄██ 


case 'blackboxai': {
  if (!text) return replygcxlicon(`⚡ *Example:* ${prefix + command} write a program to delete a file 📝`);
  try {
    let gpt = await (await fetch(`https://itzpire.com/ai/blackbox-ai?q=${text}`)).json();
    const reply = `🔥 *Blackbox AI Response* 🔥\n\n💡 *Result:* ${gpt.result}\n\n📝 *Your Request:* ${text}`;
    const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

    await XliconBotInc.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: reply,
      mentions: [m.sender]
    });
  } catch (e) {
    console.error('Error:', e);
    return replygcxlicon(`❗ *Error:* ${e.message} ⚠️`);
  }
}
break;

case 'travel-assistant': {
  if (!text) return replygcxlicon(`✈️ *Example:* ${prefix + command} how can I visit the Taj Mahal 🏰`);
  try {
    let gpt = await (await fetch(`https://itzpire.com/ai/copilot2trip?q=${text}`)).json();
    if (gpt.status === "error") {
      return replygcxlicon(`❌ *Error:* ${gpt.message}`);
    }
    const reply = `🌍 *Travel Assistant AI* 🌍\n\n🗺️ *Your Request:* ${text}\n\n💬 *Response:* ${gpt.result}`;
    const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

    await XliconBotInc.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: reply,
      mentions: [m.sender]
    });
  } catch (e) {
    console.error('Error:', e);
    return replygcxlicon("⚠️ *Error* ⚠️");
  }
}
break;
                
case 'dalle': {
  if (!text) return replygcxlicon(`🎤 *• Example:* ${prefix + command} a girl singing in public 🎶`);

  try {
      const apiUrls = [
          'https://aemt.uk.to/dalle?text=',
          'https://meitang.xyz/dalle?text=',
          'https://btch.us.kg/dalle?text=',
          'https://api.tioo.eu.org/dalle?text=',
          'https://api.tioprm.eu.org/dalle?text='
      ];
      const randomApiUrl = apiUrls[Math.floor(Math.random() * apiUrls.length)];
      let response = await fetch(randomApiUrl + encodeURIComponent(text));

      if (!response.ok) return replygcxlicon('❌ Failed to fetch the image. Please try again.');

      let gptImageUrl = await response.json();

      if (!gptImageUrl || !gptImageUrl.url) return replygcxlicon('❌ No image found. Please try again with a different prompt.');

      await XliconBotInc.sendMessage(m.chat, {
          image: { url: gptImageUrl.url },
          caption: `> Dalle 🌟 \n\n _*Here is the result of: ${text} ✨*_`
      }, { quoted: m });

  } catch (e) {
      console.error(e);
      return replygcxlicon("`*Error*`");
  }
}
break;

case 'stablediffusion': {
  if (!text) return replygcxlicon(`🎨 *• Example:* ${prefix + command} school boy 👦`);

  try {
      const apiUrls = [
          'https://aemt.uk.to/stablediffusion?text=',
          'https://meitang.xyz/stablediffusion?text=',
          'https://btch.us.kg/stablediffusion?text=',
          'https://api.tioo.eu.org/stablediffusion?text=',
          'https://api.tioprm.eu.org/stablediffusion?text='
      ];
      const randomApiUrl = apiUrls[Math.floor(Math.random() * apiUrls.length)];
      const timeout = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('⏳ Request timeout')), 15000)
      );

      let response = await Promise.race([
          fetch(randomApiUrl + encodeURIComponent(text)),
          timeout
      ]);

      if (!response.ok) return replygcxlicon('❌ *Failed to fetch the image.* Please try again. 🔄');

      let imageUrl = await response.json();

      if (!imageUrl || !imageUrl.url) return replygcxlicon('❌ *No image found.* Please try again with a different prompt. 🔄');

      await XliconBotInc.sendMessage(m.chat, {
          image: { url: imageUrl.url },
          caption: `✨ *Stable Diffusion* ✨\n\n🖼️ _*Here is the result of: ${text}*_ 🖌️`
      }, { quoted: m });

  } catch (e) {
      console.error(e);
      return replygcxlicon(`❗ *Error:* ${e.message} ⚠️`);
  }
}
break;

case 'lexica': {
    if (!text) return replygcxlicon(`📸 *• Example:* ${prefix + command} a cat 🐱`);

    try {
        const timeout = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('⏳ Request timeout')), 15000)
        );

        let response = await Promise.race([
            fetch(`https://api.maher-zubair.xyz/ai/lexica?apikey=${global.id}&prompt=${encodeURIComponent(text)}`),
            timeout
        ]);

        if (!response.ok) return replygcxlicon('❌ *Failed to fetch the image.* Please try again. 🔄');

        let data = await response.json();

        if (!data.result) return replygcxlicon('❌ *No image found.* Please try again with a different prompt. 🔄');

        await XliconBotInc.sendMessage(m.chat, {
            image: { url: data.result },
            caption: `✨ *Lexica AI* ✨\n\n🖼️ _*Here is the result of: ${text}*_ 🖌️`
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        return replygcxlicon(`❗ *Error:* ${e.message} ⚠️`);
    }
}
break;

case 'photoleap': {
    if (!text) return replygcxlicon(`🌊 *Example:* ${prefix + command} blue sea`);

    const currentTime = Date.now();
    if (currentTime - (global.lastUsedPhotoleap || 0) < 10000) {
        return replygcxlicon("⏳ Cooldown 10 seconds, try again later");
    }
    global.lastUsedPhotoleap = currentTime;

    try {
        let gpt = await (await fetch(`https://tti.photoleapapp.com/api/v1/generate?prompt=${encodeURIComponent(text)}`)).json();

        if (!gpt.result_url) return replygcxlicon('❌ *No image found.* Please try again with a different prompt. 🔄');

        const reply = `✨ *Photo Leap AI* ✨\n\n🖼️ _*Here is the result of: ${text}*_ 📷`;

        await XliconBotInc.sendMessage(m.chat, {
            image: { url: gpt.result_url },
            caption: reply,
            mentions: [m.sender]
        });

    } catch (e) {
        console.error(e);
        return replygcxlicon(`❗ *Error:* ${e.message} ⚠️`);
    }
}
break;
                
case 'ai': case 'gpt': case 'openai': {
    if (!text) return replygcxlicon(`*• Example:* ${prefix + command} what is your name`);

    try {
        const apiUrls = [
            'https://aemt.uk.to/openai?text=',
            'https://meitang.xyz/openai?text=',
            'https://btch.us.kg/openai?text=',
            'https://api.tioo.eu.org/openai?text=',
            'https://api.tioprm.eu.org/openai?text='
        ];
        const randomApiUrl = apiUrls[Math.floor(Math.random() * apiUrls.length)];
        let response = await fetch(randomApiUrl + encodeURIComponent(text));

        if (!response.ok) return replygcxlicon('❌ *Failed to fetch the response.* Please try again. 🔄');

        let gpt = await response.json();

        if (!gpt.result) return replygcxlicon('❌ *No result found.* Please try again with a different prompt. 🔄');

        const reply = `🌟 *OpenAI Response* 🌟\n\n💬 *Response:* ${gpt.result}\n\n📝 *Your Request:* ${text}`;

        await XliconBotInc.sendMessage(m.chat, {
            image: { url: 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg' },
            caption: reply,
            mentions: [m.sender]
        });

    } catch (e) {
        console.error(e);
        return replygcxlicon(`❗ *Error:* ${e.message} ⚠️`);
    }
}
break;

case 'ai2': case 'gpt2': case 'openai2': {
  if (!text) return replygcxlicon(`Example: ${prefix + command} query`)
  const hasil = await chatGpt(text);
   return replygcxlicon(`❗ *Error:*⚠️`);
}
break



case 'checkgpt': {
    if (!text) return replygcxlicon(`*• Example:* ${prefix + command} input your text`);

    try {
        let apiUrl = `${global.api}ai/text-detector?apikey=${global.id}&prompt=${encodeURIComponent(text)}`;
        let response = await fetch(apiUrl);

        if (!response.ok) return replygcxlicon('❌ Failed to analyze the text. Please try again.');

        let data = await response.json();

        const feedback = `*🤖 GPT Text Analysis*\n\n`
            + `*📝 Input Text:* \n_${data.result.input_text}_\n\n`
            + `*🌐 Detected Language:* \n_${data.result.detected_language}_\n\n`
            + `*💡 AI Detection Feedback:* \n_${data.result.feedback}_\n\n`
            + `*📊 AI Likelihood:* \n_${data.result.isHuman}% likely human-generated_\n\n`
            + `*💬 Additional Feedback:* \n_${data.result.additional_feedback}_\n`;

        await XliconBotInc.sendMessage(m.chat, {
            image: { url: 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg' },
            caption: feedback,
            mentions: [m.sender]
        });

    } catch (e) {
        console.error(e);
        return replygcxlicon("❗ *Error analyzing the text. Please try again.*");
    }
}
break;

case 'darky': {
    if (!text) return replygcxlicon(`*• Example:* ${prefix + command} write me a simple code of python`);

    try {
        let response = await (await fetch(`https://evlgpt.onrender.com/egpt?prompt=${encodeURIComponent(text)}`)).json();

        let message = response.message.replace(/GURUGPT V1/g, 'XLICON V4');

        const reply = `🔥 *Xlicon AI Response* 🔥\n\n💡 *Result:* ${message}\n\n📝 *Your Request:* ${text}`;

        await XliconBotInc.sendMessage(m.chat, {
            image: { url: 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg' },
            caption: reply,
            mentions: [m.sender]
        });

    } catch (e) {
        console.error('Error:', e);
        return replygcxlicon("❗ *Error*");
    }
}
break;

case 'bing': {
  if (!text) return replygcxlicon(`*• Example:* ${prefix + command} hello`);

  // Define API URLs
  const apiUrls = [
    'https://aemt.uk.to/bingai?text=',
    'https://meitang.xyz/bingai?text=',
    'https://btch.us.kg/bingai?text=',
    'https://api.tioo.eu.org/bingai?text=',
    'https://api.tioprm.eu.org/bingai?text='
  ];

  try {
    // Choose a random API URL from the list
    const apiUrl = apiUrls[Math.floor(Math.random() * apiUrls.length)] + encodeURIComponent(text);
    
    // Fetch data from the selected API
    let response = await (await fetch(apiUrl)).json();
    
    // Prepare the response text with emojis
    const reply = `🔥 *Xlicon AI Response* 🔥\n\n💬 *Response:* ${response.result}\n\n📝 *Your Request:* ${text}`;

    // Image URL to use
    const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

    // Send the message with the image URL and the reply text
    await XliconBotInc.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: reply,
      mentions: [m.sender]
    });

  } catch (e) {
    console.error('Error:', e);
    return replygcxlicon("❗ *Error*");
  }
}
break;

case 'mathsai': {
  if (!text) return replygcxlicon(`*• Example:* ${prefix + command} what is your name`);
  
  try {
    // Fetch data from the Maths AI API
    let gpt = await (await fetch(`${global.api}ai/math?apikey=${global.id}&prompt=${text}`)).json();

    // Prepare the message with the response
    const reply = `🔥 *Maths AI Response* 🔥\n\n🧮 *Result:* ${gpt.result}\n\n📝 *Your Request:* ${text}`;

    // Image URL to use
    const imageUrl = 'https://i.ibb.co/xz5JwB6/Xlicon-Pic.jpg';

    // Send the message with the image URL and the reply text
    await XliconBotInc.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: reply,
      mentions: [m.sender]
    });

  } catch (e) {
    console.error('Error:', e);
    return replygcxlicon("❗ *Error occurred while processing the math query.*");
  }
}
break;


case 'mangaimg': {
  if (!text) return replygcxlicon(`*• Example:* ${prefix + command} a manga character 🖼️`);

  await XliconStickWait();

  try {
      // Fetch the manga image from the API
      let apiUrl = `${global.api}ai/manga-diffusion?apikey=${global.id}&prompt=${encodeURIComponent(text)}`;
      let response = await fetch(apiUrl);

      // Check if the response is okay
      if (!response.ok) {
          return replygcxlicon('❌ Failed to fetch the image. Please try again.');
      }

      // Convert the response to a buffer
      const buffer = await response.buffer();

      // Prepare the message to send
      const caption = `> Manga Image 🎨\n\n_*Here is the result of: ${text} 🌟*_`;

      // Send the image and caption
      await XliconBotInc.sendMessage(m.chat, {
          image: { buffer },
          caption: caption
      }, { quoted: m });

      await XliconBotInc.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });

  } catch (e) {
      console.error(e);
      await XliconBotInc.sendMessage(m.chat, { react: { text: "✖️", key: m.key } });
      return replygcxlicon("❗ Error fetching the image. Please try again.");
  }
}
break;

case 'animeimg': {
  if (!text) return replygcxlicon(`*• Example:* ${prefix + command} a cute anime girl 👧✨`);

  await XliconStickWait();

  try {
      // Fetch the anime image from the API
      let apiUrl = `${global.api}ai/anime-gen?apikey=${global.id}&prompt=${encodeURIComponent(text)}`;
      let response = await fetch(apiUrl);

      // Check if the response is okay
      if (!response.ok) {
          return replygcxlicon('❌ Failed to fetch the image. Please try again.');
      }

      // Convert the response to a buffer
      const buffer = await response.buffer();

      // Prepare the caption for the image
      const caption = `> Anime Image 🎥\n\n_*Here is the result of: ${text} 🌟*_`;

      // Send the image and caption
      await XliconBotInc.sendMessage(m.chat, {
          image: { buffer },
          caption: caption
      }, { quoted: m });

      await XliconBotInc.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });

  } catch (e) {
      console.error(e);
      await XliconBotInc.sendMessage(m.chat, { react: { text: "✖️", key: m.key } });
      return replygcxlicon("❗ Error fetching the image. Please try again.");
  }
}
break;

case 'remini': {
  if (!quoted) return replygcxlicon(`Where is the picture? 📸`);
    if (!/image/.test(mime)) return replygcxlicon(`Send/Reply Photos With Captions ${prefix + command}`);

    await XliconStickWait();
    const { remini } = require('./lib/remini');
    let media = await quoted.download();
    let proses = await remini(media, "enhance");

    const replyMessage = `Hi ${m.pushName},\n_*Here is the result of: ${command}*_\n\n` +
                         `📸 *Enhanced Image*`;

    // Send the enhanced image
    await XliconBotInc.sendMessage(m.chat, {
        image: proses,
        caption: replyMessage,
        mentions: [m.sender]
    });
}
break;
    
//---------------------------------------------------------------------------------------------------------//			

//█▀▀ █▀█ █▀█ █ █ █▀█   █▀▀ █▀█ █▄ ▄█ █▄ ▄█ ▄▀▄ █▄ █ █▀▄ █▀▀ 
//█▄█ █▀▄ █▄█ █▄█ █▀▀   █▄▄ █▄█ █ ▀ █ █ ▀ █ █▀█ █ ▀█ █▄▀ ▄██ 


case 'antibot': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
    db.groups[m.chat].antibot = true;
    return replygcxlicon(`${command} is enabled ✅`);
  } else if (args[0] === 'off') {
    db.groups[m.chat].antibot = false;
    return replygcxlicon(`${command} is disabled ❌`);
  } else {
    return replygcxlicon(`Please specify 'on' or 'off' to ${command}.`);
  }
}
  break;

  case 'antiviewonce': {
    if (!m.isGroup) return XliconStickGroup();
    if (!m.isBotAdmin) return XliconStickBotAdmin();
    if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

    if (args[0] === 'on') {
        db.groups[m.chat].antiviewonce = true;
        replygcxlicon(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.groups[m.chat].antiviewonce = false;
        replygcxlicon(`${command} is disabled`);
    } else {
        replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
    }
}
break;

case 'readviewonce': case 'vv': case 'readviewone': case 'rvo': {
  if (!m.quoted) return replygcxlicon(`Reply view once message\nExample: ${prefix + command}`)
  if (m.quoted.msg.viewOnce) {
    m.quoted.msg.viewOnce = false
    await XliconBotInc.sendMessage(m.chat, { forward: m.quoted }, { quoted: m })
  } else if (m.quoted.msg.message && m.quoted.msg.message.audioMessage && m.quoted.msg.message.audioMessage.viewOnce) {
    m.quoted.msg.message.audioMessage.viewOnce = false
    m.quoted.msg.message.audioMessage.contextInfo = { forwardingScore: 1, isForwarded: true, mentionedJid: [m.sender] }
    await XliconBotInc.relayMessage(m.chat, m.quoted.msg.message, {})
  } else {
    replygcxlicon(`Reply view once message\nExample: ${prefix + command}`)
  }
}
break

case 'welcome':
case 'left': {
    if (!m.isGroup) return XliconStickGroup();
    if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

    if (args[0] === 'on') {
        db.groups[m.chat].welcome = true;
        replygcxlicon(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.groups[m.chat].welcome = false;
        replygcxlicon(`${command} is disabled`);
    } else {
        replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
    }
}
break;

case 'adminevent': {
  if (!m.isGroup) return XliconStickGroup();
  if (!isAdmins && !XliconTheCreator) return XliconStickAdmin();
  if (args.length < 1) return replygcxlicon('on/off?');
  if (args[0] === 'on') {
      adminevent = true;
      replygcxlicon(`${command} is enabled`);
  } else if (args[0] === 'off') {
      adminevent = false;
      replygcxlicon(`${command} is disabled`);
  }
}
break;


case 'groupevent': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
      db.groups[m.chat].setinfo = true;
      replygcxlicon(`${command} is enabled`);
  } else if (args[0] === 'off') {
      db.groups[m.chat].setinfo = false;
      replygcxlicon(`${command} is disabled`);
  } else {
      replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
  }
}
break;

case 'antiforeign': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  // Check the command argument for enabling or disabling the feature
  if (args[0] === 'on') {
      db.groups[m.chat].antiforeignnum = true;
      return replygcxlicon(`${command} is enabled.`);
  } else if (args[0] === 'off') {
      db.groups[m.chat].antiforeignnum = false;
      return replygcxlicon(`${command} is disabled.`);
  } else {
      // Show message with options when invalid argument is provided
      return replygcxlicon(`
          Please choose an option to enable or disable ${command}.

          Usage:
          - ${prefix + command} on  : Enable ${command}
          - ${prefix + command} off : Disable ${command}

          Example: ${prefix + command} on
      `);
  }
}
  break;



  case 'antimedia': {
    if (!m.isGroup) return XliconStickGroup();
    if (!m.isBotAdmin) return XliconStickBotAdmin();
    if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

    if (args[0] === 'on') {
        db.groups[m.chat].antimedia = true;
        replygcxlicon(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.groups[m.chat].antimedia = false;
        replygcxlicon(`${command} is disabled`);
    } else {
        replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
    }
}
break;
           
            case 'antidocument': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
    db.groups[m.chat].antidocument = true;
    return replygcxlicon(`${command} is enabled ✅`);
  } else if (args[0] === 'off') {
    db.groups[m.chat].antidocument = false;
    return replygcxlicon(`${command} is disabled ❌`);
  } else {
    return replygcxlicon(`Please specify 'on' or 'off' to ${command}.`);
  }
}
  break;


case 'anticontact': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
    db.groups[m.chat].anticontact = true;
    return replygcxlicon(`${command} is enabled ✅`);
  } else if (args[0] === 'off') {
    db.groups[m.chat].anticontact = false;
    return replygcxlicon(`${command} is disabled ❌`);
  } else {
    return replygcxlicon(`Please specify 'on' or 'off' to ${command}.`);
  }
}
  break;


            
            case 'antilocation': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
    db.groups[m.chat].antilocation = true;
    return replygcxlicon(`${command} is enabled ✅`);
  } else if (args[0] === 'off') {
    db.groups[m.chat].antilocation = false;
    return replygcxlicon(`${command} is disabled ❌`);
  } else {
    return replygcxlicon(`Please specify 'on' or 'off' to ${command}.`);
  }
}
  break;


case 'antilink': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
    db.groups[m.chat].antilink = true;
    return replygcxlicon(`${command} is enabled ✅`);
  } else if (args[0] === 'off') {
    db.groups[m.chat].antilink = false;
    return replygcxlicon(`${command} is disabled ❌`);
  } else {
    return replygcxlicon(`Please specify 'on' or 'off' to ${command}.`);
  }
}
  break;




case 'antibadword':
case 'antitoxic': {
   if (!m.isGroup) return XliconStickGroup();
    if (!m.isBotAdmin) return await replygcxlicon('I need to be an admin to use this command.');
    if (!m.isAdmin && !XliconTheCreator) return await replygcxlicon('You need to be an admin or the bot creator to use this command.');

    if (args[0] === 'on') {
        db.groups[m.chat].badword = true;
        await replygcxlicon(`${command} is enabled.`);
    } else if (args[0] === 'off') {
        db.groups[m.chat].badword = false;
        await replygcxlicon(`${command} is disabled.`);
    } else {
        await replygcxlicon(`Hi ${m.pushName},\nPlease use the command with 'on' or 'off'.\nExample: *${prefix + command} on* or *${prefix + command} off*`);
    }
}
break;
        
        
case 'antinsfw':
case 'nsfw': {
   if (!m.isGroup) return XliconStickGroup();
    if (!m.isBotAdmin) return await replygcxlicon('I need to be an admin to use this command.');
    if (!m.isAdmin && !XliconTheCreator) return await replygcxlicon('You need to be an admin or the bot creator to use this command.');

    if (args[0] === 'on') {
        db.groups[m.chat].ntnsfw = true;
        await replygcxlicon(`${command} is enabled.`);
    } else if (args[0] === 'off') {
        db.groups[m.chat].ntnsfw = false;
        await replygcxlicon(`${command} is disabled.`);
    } else {
        await replygcxlicon(`Hi ${m.pushName},\nPlease use the command with 'on' or 'off'.\nExample: *${prefix + command} on* or *${prefix + command} off*`);
    }
}
break;


case 'antipoll': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
      db.groups[m.chat].antipoll = true;
      replygcxlicon(`${command} is enabled`);
  } else if (args[0] === 'off') {
      db.groups[m.chat].antipoll = false;
      replygcxlicon(`${command} is disabled`);
  } else {
      replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
  }
}
break;

case 'antiaudio': {
  if (!m.isGroup) return XliconAudioGroup();
  if (!m.isBotAdmin) return XliconAudioBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconAudioAdmin();

  if (args[0] === 'on') {
      db.groups[m.chat].antiaudio = true;
      replygcxlicon(`${command} is enabled`);
  } else if (args[0] === 'off') {
      db.groups[m.chat].antiaudio = false;
      replygcxlicon(`${command} is disabled`);
  } else {
      replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
  }
}
break;
          case 'antisticker': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
      db.groups[m.chat].antisticker = true;
      replygcxlicon(`${command} is enabled`);
  } else if (args[0] === 'off') {
      db.groups[m.chat].antisticker = false;
      replygcxlicon(`${command} is disabled`);
  } else {
      replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
  }
}
break;

case 'antiemoji': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
      db.groups[m.chat].antiemoji = true;
      replygcxlicon(`${command} is enabled`);
  } else if (args[0] === 'off') {
      db.groups[m.chat].antiemoji = false;
      replygcxlicon(`${command} is disabled`);
  } else {
      replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
  }
}
break;

        


        
         case 'antiimage': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
      db.groups[m.chat].antiimage = true;
      replygcxlicon(`${command} is enabled`);
  } else if (args[0] === 'off') {
      db.groups[m.chat].antiimage = false;
      replygcxlicon(`${command} is disabled`);
  } else {
      replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
  }
}
break;

case 'antivideo': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
      db.groups[m.chat].antivideo = true;
      replygcxlicon(`${command} is enabled`);
  } else if (args[0] === 'off') {
      db.groups[m.chat].antivideo = false;
      replygcxlicon(`${command} is disabled`);
  } else {
      replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
  }
}
break;

case 'antivirtex': case 'antivirus': {
  if (!m.isGroup) return XliconStickGroup();
  if (!m.isBotAdmin) return XliconStickBotAdmin();
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin();

  if (args[0] === 'on') {
      db.groups[m.chat].antivirtex = true;
      replygcxlicon(`${command} is enabled`);
  } else if (args[0] === 'off') {
      db.groups[m.chat].antivirtex = false;
      replygcxlicon(`${command} is disabled`);
  } else {
      replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
  }
}
break;
    

case 'anticall':
    if (!XliconTheCreator) return XliconStickOwner();
    if (args[0] === 'on') {
        db.settings[botNumber].anticall = true;
        replygcxlicon(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.settings[botNumber].anticall = false;
        replygcxlicon(`${command} is disabled`);
    } else {
        return replygcxlicon(`
            Please choose an option to enable or disable ${command}.

            Usage:
            - ${prefix + command} on  : Enable Anti-Call
            - ${prefix + command} off : Disable Anti-Call

            Example: ${prefix + command} on
        `);
    }
    break;



    case 'antidelete': {
      if (!m.isGroup) return XliconStickGroup();
      if (!m.isAdmin) return XliconStickAdmin();
      if (!m.isBotAdmin) return XliconStickBotAdmin();
      if (text === 'on') {
          if (db.groups[m.chat].antidelete) return replygcxlicon('*Anti Delete is already active!*');
          db.groups[m.chat].antidelete = true;
          replygcxlicon('*Anti Delete Activated!*');
      } else if (text === 'off') {
          db.groups[m.chat].antidelete = false;
          replygcxlicon('*Anti Delete Disabled!*');
      } else {
          return replygcxlicon(`
              Please choose an option to enable or disable Anti-Delete.
  
              Usage:
              - ${prefix + command} on  : Enable Anti-Delete
              - ${prefix + command} off : Disable Anti-Delete
  
              Example: ${prefix + command} on
          `);
      }
  }
  break;


  case 'idgroup': 
  case 'idgc': 
  case 'groupid': {
      if (!XliconTheCreator) return XliconStickOwner();
      try {
          let getGroups = await XliconBotInc.groupFetchAllParticipating();
          let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          let teks = `💬 *GROUP LIST BELOW* 🌟\n\n📝 Total Groups: *${anu.length}* Groups\n\n`;
  
          for (let x of anu) {
              try {
                  let metadata2 = await XliconBotInc.groupMetadata(x);
                  teks += `🌍 *Group Name*: ${metadata2.subject}\n🆔 *Group ID*: ${metadata2.id}\n👥 *Members*: ${metadata2.participants.length}\n\n────────────────────────\n\n`;
              } catch (err) {
                  teks += `❌ Error fetching metadata for group ID: ${x}\n`;
              }
          }
  
          replygcxlicon(teks + `⚡ To use, please type command: ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group ID above. 👇`);
      } catch (err) {
          replygcxlicon("⚠️ There was an error while fetching the group list. Please try again later.");
      }
  }
  break;
    

  case 'linkgroup':
    case 'linkgrup':
    case 'linkgc':
    case 'gclink':
    case 'grouplink':
    case 'gruplink':{
        if (!m.isGroup) return XliconStickGroup()
        if (!m.isAdmin && !isGroupOwner && !XliconTheCreator) return XliconStickAdmin()
        if (!m.isBotAdmin) return XliconStickBotAdmin()
        let response = await XliconBotInc.groupInviteCode(m.chat)
        XliconBotInc.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
            detectLink: true
        })
        }
    break


    case 'tagadmin': case 'listadmin': case 'admin': {
      if (!m.isGroup) return XliconStickGroup();
    
      const groupAdmins = participants.filter(p => p.admin);
      const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
      const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
    
      let text = `👑 *Group Admins:*\n${listAdmin}\n\n📜 *Group Owner*: @${owner.split('@')[0]}`;
    
      // Send message with admin list
      await replygcxlicon(text);
    }
    break;
    
    case 'invite': {
      if (!m.isGroup) return XliconStickGroup();
      if (!m.isBotAdmin) return XliconStickBotAdmin();
    
      if (!text) return replygcxlicon(`❗ Please provide the number you want to invite to the group.\n\nExample: *${prefix + command} 916909137213*`);
      if (text.includes('+')) return replygcxlicon(`⚠️ Please enter the number without the '+' sign.`);
      if (isNaN(text)) return replygcxlicon(`🚫 Please enter only the digits, along with your country code, without spaces.`);
    
      let group = m.chat;
      let link = 'https://chat.whatsapp.com/' + await XliconBotInc.groupInviteCode(group);
    
      try {
          await XliconBotInc.sendMessage(text + '@s.whatsapp.net', {
              text: `🌟 *GROUP INVITATION*\n\nYou have been invited to join the group. Click the link below to join:\n\n🔗 ${link}`,
              mentions: [m.sender]
          });
          replygcxlicon(`✅ An invite link has been successfully sent to the user.`);
      } catch (error) {
          console.error(error);
          replygcxlicon(`⚠️ Failed to send the invite. Please check the number and try again.`);
      }
    }
    break;
    
        
    case 'ephemeral': {
      if (!m.isGroup) return XliconStickGroup();
      if (!m.isBotAdmin) return await replygcxlicon('I need to be an admin to use this command.');
      if (!m.isAdmin) return await replygcxlicon('You need to be an admin to use this command.');
  
      if (args[0] === 'on') {
          await XliconBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL });
          await replygcxlicon('Ephemeral messages are now enabled.');
      } else if (args[0] === 'off') {
          await XliconBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false });
          await replygcxlicon('Ephemeral messages are now disabled.');
      } else {
          await replygcxlicon(`Hi ${m.pushName},\nPlease use the command with 'on' or 'off'.\nExample: *${prefix + command} on* or *${prefix + command} off*`);
      }
  }
  break;

  case 'delmsg': case 'deletemsg': {
		if (!XliconTheCreator) return XliconStickOwner()
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return replygcxlicon(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcxlicon(`Successfully deleted '${text}' from the message list`)
            }
	    break
  

      case 'add': {
				if (!m.isGroup) return XliconStickGroup()
				if (!m.isAdmin) return XliconStickAdmin()
				if (!m.isBotAdmin) return XliconStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxlicon(`EXAMPLE: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await XliconBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) =>{
							for (let i of res) {
								let invv = await XliconBotInc.groupInviteCode(m.chat)
								if (i.status == 408) return replygcxlicon('User Just Left This Group!')
								if (i.status == 401) return replygcxlicon('User Blocked The Bot!')
								if (i.status == 409) return replygcxlicon('User has joined!')
								if (i.status == 500) return replygcxlicon('Group Full!')
								if (i.status == 403) {
									await XliconBotInc.sendMessage(m.chat, { text: `@${numbersOnly.split('@')[0]} Cannot Be Added\n\nBecause Target Private\n\nInvitations will be sent to\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nVia Private Chat`, mentions: [numbersOnly] }, { quoted : m })
									await XliconBotInc.sendMessage(`${numbersOnly ? numbersOnly : '916909137213@s.whatsapp.net'}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: wa.me/${m.sender}\nInvite you to this group\nPlease enter if you wish🙇`, detectLink: true, mentions: [numbersOnly] }, { quoted : floc2 }).catch((err) => replygcxlicon('Failed to Send Invitation!'))
								} else {
									replygcxlicon('Success!!')
								}
							}
						})
					} catch (e) {
						replygcxlicon('Failed to Add User')
					}
				}
			}
			break
			case 'kick': {
				if (!m.isGroup) return XliconStickGroup()
				if (!m.isAdmin) return XliconStickAdmin()
				if (!m.isBotAdmin) return XliconStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxlicon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await XliconBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => replygcxlicon('Failed to Kick User!'))
				}
			}
			break
			case 'promote': {
				if (!m.isGroup) return XliconStickGroup()
				if (!m.isAdmin) return XliconStickAdmin()
				if (!m.isBotAdmin) return XliconStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxlicon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await XliconBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => replygcxlicon('Fail!'))
					replygcxlicon(mess.done)
				}
			}
			break
			case 'demote': {
				if (!m.isGroup) return XliconStickGroup()
				if (!m.isAdmin) return XliconStickAdmin()
				if (!m.isBotAdmin) return XliconStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxlicon(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await XliconBotInc.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => replygcxlicon('Failed!'))
					replygcxlicon(mess.done)
				}
			}
			break

      case 'kickall': {
        if (!m.isGroup) return XliconStickGroup()
        if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin()
        if (!m.isBotAdmin) return XliconStickBotAdmin()
         const xliconkickall = (args[0] === 'numBut')
         ? text.replace(`${args[0]} `, '').split('|')
         : (Number(args[0]))
           ? groupMetadata.participants
             .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
             .map(item => item.id)
           : groupMetadata.participants
             .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
             .map(item => item.id);
        if (global.db.groups[m.chat].welcome === true) {
        global.db.groups[m.chat].welcome = false;
         }
        for (let remove of xliconkickall) {
        await XliconBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
        await sleep(100);
        }
        replygcxlicon(`✅ Success`);
       
       }
       break

			case 'setnamegc': case 'setsubject': case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
				if (!m.isGroup) return XliconStickGroup()
				if (!m.isAdmin) return XliconStickAdmin()
				if (!m.isBotAdmin) return XliconStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxlicon(`Example: ${prefix + command} text`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await XliconBotInc.groupUpdateSubject(m.chat, teksnya).catch((err) => replygcxlicon('Fail!'))
				}
			}
			break
			case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return XliconStickGroup()
				if (!m.isAdmin) return XliconStickAdmin()
				if (!m.isBotAdmin) return XliconStickBotAdmin()
				if (!text && !m.quoted) {
					replygcxlicon(`Example: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await XliconBotInc.groupUpdateDescription(m.chat, teksnya).catch((err) => replygcxlicon('Fail!'))
				}
			}
			break
			case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return XliconStickGroup()
                if (!m.isAdmin) return replygcxlicon(mess.admin)
                if (!m.isBotAdmin) return XliconStickBotAdmin()
                if (!quoted) return replygcxlicon(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxlicon(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxlicon(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await XliconBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XliconBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxlicon(mess.done)
                } else {
                    var memeg = await XliconBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxlicon(mess.done)
                }
                break




                case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
                  if (!m.isGroup) return XliconStickGroup()
                  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin()
                  if (!m.isBotAdmin) return XliconStickBotAdmin()
                      await XliconBotInc.removeProfilePicture(m.chat)
                      }
                      break


  
                      case 'promoteall': {
                        if (!m.isGroup) return XliconStickGroup()
                        if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin()
                        if (!m.isBotAdmin) return XliconStickBotAdmin()
                         const xliconpromoteall = (args[0] === 'numBut')
                         ? text.replace(`${args[0]} `, '').split('|')
                         : (Number(args[0]))
                           ? groupMetadata.participants
                             .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
                             .map(item => item.id)
                           : groupMetadata.participants
                             .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
                             .map(item => item.id);
                        for (let promote of xliconpromoteall) {
                        await XliconBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
                        await sleep(100);
                        }
                        replygcxlicon(`✅ Success`);
                       
                       }
                       break
                       
                       
                       
                       case 'demoteall': {
                        if (!m.isGroup) return XliconStickGroup()
                        if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin()
                        if (!m.isBotAdmin) return XliconStickBotAdmin()
                         const xlicondemoteall = (args[0] === 'numBut')
                         ? text.replace(`${args[0]} `, '').split('|')
                         : (Number(args[0]))
                           ? groupMetadata.participants
                             .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
                             .map(item => item.id)
                           : groupMetadata.participants
                             .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
                             .map(item => item.id);
                        for (let demote of xlicondemoteall) {
                        await XliconBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
                        await sleep(100);
                        }
                        replygcxlicon(`✅ Success`);
                       
                       }
                       break
                       
                       
                       case 'getcontact': case 'getcon': {
                        if (!m.isGroup) return XliconStickGroup()
                        if (!(m.isAdmin || XliconTheCreator)) return XliconStickAdmin()
                        xliconbigpp = await XliconBotInc.sendMessage(m.chat, {
                            text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
                        }, {quoted: m, ephemeralExpiration: 86400})
                        await sleep(1000)
                        XliconBotInc.sendContact(m.chat, participants.map(a => a.id), xliconbigpp)
                        }
                        break
                        case 'savecontact': case 'svcontact':{
                        if (!m.isGroup) return XliconStickGroup()
                        if (!(m.isAdmin || XliconTheCreator)) return XliconStickAdmin()
                        let cmiggc = await XliconBotInc.groupMetadata(m.chat)
                        let orgiggc = participants.map(a => a.id)
                        vcard = ''
                        noPort = 0
                        for (let a of cmiggc.participants) {
                            vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
                        }
                        let nmfilect = './contacts.vcf'
                        replygcxlicon('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
                        require('fs').writeFileSync(nmfilect, vcard.trim())
                        await sleep(2000)
                        XliconBotInc.sendMessage(m.chat, {
                            document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
                        }, {ephemeralExpiration: 86400, quoted: m})
                        require('fs').unlinkSync(nmfilect)
                        }
                        break
                        case 'sendcontact': case 'sencontact': {
                        if (!m.isGroup) return XliconStickGroup()
                        if (!m.mentionedJid[0]) return replygcxlicon('\nUse like this\n Example:.sendcontact @tag name')
                        let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
                        let snContact = {
                          displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
                        }
                        XliconBotInc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
                        }
                        break
                        case 'contacttag': case 'contag':{
                        if (!m.isGroup) return XliconStickGroup()
                        if (!(m.isAdmin || XliconTheCreator)) return XliconStickAdmin()
                        if (!m.mentionedJid[0]) return replygcxlicon('\nUse like this\n Example:.contacttag @tag|name')
                        let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
                        let sngContact = {
                          displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
                        }
                        XliconBotInc.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
                        }
                        break
                              
                        case 'tagall': {
                          if (!m.isGroup) return XliconStickGroup()
                          if (!m.isAdmin) return XliconStickAdmin()
                          if (!m.isBotAdmin) return XliconStickBotAdmin()
                          let teks = `*Tag All*\n\n*Message :* ${q ? q : ''}\n\n`
                          for (let mem of m.metadata.participants) {
                            teks += `${setv} @${mem.id.split('@')[0]}\n`
                          }
                          await XliconBotInc.sendMessage(m.chat, { text: teks, mentions: m.metadata.participants.map(a => a.id) }, { quoted: m })
                        }
                        break
                        case 'hidetag': case 'h': {
                          if (!m.isGroup) return XliconStickGroup()
                            if (!XliconTheCreator) return XliconStickAdmin()
                          XliconBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: m.metadata.participants.map(a => a.id)}, { quoted: m })
                        }
                        break
                        case 'totag': {
                          if (!m.isGroup) return XliconStickGroup()
                          if (!m.isAdmin) return XliconStickAdmin()
                          if (!m.isBotAdmin) return XliconStickBotAdmin()
                          if (!m.quoted) return replygcxlicon(`Reply messages with captions ${prefix + command}`)
                          delete m.quoted.chat
                          await XliconBotInc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
                        }
                        break
                        
                        case 'editinfo': {
                          if (!m.isGroup) return XliconStickGroup(); // Ensure the command is used in a group
                          if (!m.isBotAdmin) return await replygcxlicon('❌ I need to be an admin to use this command.');
                          if (!m.isAdmin && !XliconTheCreator) return await replygcxlicon('❌ You need to be an admin or the bot creator to use this command.');
                      
                          if (args[0] === 'open') {
                              await XliconBotInc.groupSettingUpdate(m.chat, 'unlocked');
                              await replygcxlicon('🔓 Successfully opened the group info edit settings. Now, all members can edit group info.');
                          } else if (args[0] === 'close') {
                              await XliconBotInc.groupSettingUpdate(m.chat, 'locked');
                              await replygcxlicon('🔒 Successfully closed the group info edit settings. Only admins can edit group info now.');
                          } else {
                              await replygcxlicon(`👋 Hi ${m.pushName},\nPlease use the command with 'open' or 'close'.\nExample: *${prefix + command} open* or *${prefix + command} close*`);
                          }
                      }
                      break;
                     
                      case 'opentime':
              if (!m.isGroup) return XliconStickGroup(); // Ensure the command is used in a group
              if (!m.isAdmin && !XliconTheCreator) return replygcxlicon(mess.admin); // Check if the user is an admin
              if (!m.isBotAdmin) return XliconStickBotAdmin(); // Check if the bot is an admin
          
              // Determine the time based on the user's input
              if (args[1] == 'second') {
                  var timer = args[0] * `1000`; // Convert to milliseconds
              } else if (args[1] == 'minute') {
                  var timer = args[0] * `60000`; // Convert to milliseconds
              } else if (args[1] == 'hour') {
                  var timer = args[0] * `3600000`; // Convert to milliseconds
              } else if (args[1] == 'day') {
                  var timer = args[0] * `86400000`; // Convert to milliseconds
              } else {
                  return replygcxlicon('*Select:*\nsecond\nminute\nhour\n\n*Example:*\n10 second');
              }
          
              // Notify about the open time
              replygcxlicon(`⏰ *Open time* ${q} starting from now...`);
          
              setTimeout(() => {
                  var nomor = m.participant;
                  const open = `🔓 *Open time*: The group is now opened by admin. Members can send messages.`;
                  XliconBotInc.groupSettingUpdate(m.chat, 'not_announcement'); // Set group to normal mode
                  replygcxlicon(open); // Notify the group that the group is open again
              }, timer);
              break;
              
              case 'closetime':
    if (!m.isGroup) return XliconStickGroup(); // Ensure the command is used in a group
    if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin(); // Check if the user is an admin
    if (!m.isBotAdmin) return XliconStickBotAdmin(); // Check if the bot is an admin

    // Determine the time based on the user's input
    if (args[1] == 'second') {
        var timer = args[0] * 1000; // Convert to milliseconds
    } else if (args[1] == 'minute') {
        var timer = args[0] * 60000; // Convert to milliseconds
    } else if (args[1] == 'hour') {
        var timer = args[0] * 3600000; // Convert to milliseconds
    } else if (args[1] == 'day') {
        var timer = args[0] * 86400000; // Convert to milliseconds
    } else {
        return replygcxlicon('*Select:*\nsecond\nminute\nhour\n\n*Example:*\n10 second');
    }

    // Notify about the close time
    replygcxlicon(`⏳ *Close time* ${args[0]} ${args[1]} starting from now...`);

    setTimeout(() => {
        var nomor = m.participant;
        const close = `🔒 *Close time*: The group is now closed by admin. Only admins can send messages.`;
        XliconBotInc.groupSettingUpdate(m.chat, 'announcement'); // Set group to closed mode
        replygcxlicon(close); // Notify the group that the group is now closed
    }, timer);
    break;
   
    case 'resetlink': case 'revoke': case 'newlink': case 'newurl': {
      if (!m.isGroup) return XliconStickGroup()
      if (!m.isAdmin) return XliconStickAdmin()
      if (!m.isBotAdmin) return XliconStickBotAdmin()
      await XliconBotInc.groupRevokeInvite(m.chat).then((a) => {
        replygcxlicon(`Reset Success, Group Invite Link ${m.metadata.subject}`)
      }).catch((err) => replygcxlicon('Fail!'))
    }
    break
    
    case 'getbio':{
      try {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.quoted.sender ? m.quoted.sender : m.sender
let bio = await XliconBotInc.fetchStatus(who)
replygcxlicon(bio.status)
} catch {
if (text) return replygcxlicon(`bio is private or you haven't replied to the person's message!`)
else try {
let who = m.quoted ? m.quoted.sender : m.sender
let bio = await XliconBotInc.fetchStatus(who)
replygcxlicon(bio.status)
} catch {
return replygcxlicon(`bio is private or you haven't replied to the person's message!`)
}
}
}
break                         
      

case 'vote': {
  if (!m.isGroup) return XliconStickGroup()
  if (m.chat in vote) return replygcxlicon(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
  if (!text) return replygcxlicon(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
  replygcxlicon(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
  vote[m.chat] = [q, [], []]
  await sleep(1000)
  upvote = vote[m.chat][1]
  devote = vote[m.chat][2]
  teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
  XliconBotInc.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
}
  break
     case 'upvote': {
  if (!m.isGroup) return XliconStickGroup()
  if (!(m.chat in vote)) return replygcxlicon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
  isVote = vote[m.chat][1].concat(vote[m.chat][2])
  wasVote = isVote.includes(m.sender)
  if (wasVote) return replygcxlicon('You have Voted')
  vote[m.chat][1].push(m.sender)
  menvote = vote[m.chat][1].concat(vote[m.chat][2])
  teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
  XliconBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
}
   break


      case 'downvote': {
  if (!m.isGroup) return XliconStickGroup()
  if (!(m.chat in vote)) return replygcxlicon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
  isVote = vote[m.chat][1].concat(vote[m.chat][2])
  wasVote = isVote.includes(m.sender)
  if (wasVote) return replygcxlicon('You have Voted')
  vote[m.chat][2].push(m.sender)
  menvote = vote[m.chat][1].concat(vote[m.chat][2])
  teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
  XliconBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
}
  break
       
case 'checkvote':
if (!m.isGroup) return XliconStickGroup()
if (!(m.chat in vote)) return replygcxlicon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${XliconBotInc.user.id}
`
XliconBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break


case 'deletevote': case'delvote': case 'hapusvote': {
  if (!m.isGroup) return XliconStickGroup()
  if (!(m.chat in vote)) return replygcxlicon(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
  delete vote[m.chat]
  replygcxlicon('Successfully Deleted Vote Session In This Group')
}
  break

  
  case 'getjoinrequest':{
    if (!m.isGroup) return XliconStickGroup()
    if (!m.isBotAdmin) return XliconStickBotAdmin()
  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin()
    const response = await XliconBotInc.groupRequestParticipantsList(m.chat);
    if (!response || !response.length) {
      XliconBotInc.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
      return;
    }
    let replyMessage = `${themeemoji} Join Request List:\n`;
    response.forEach((request, index) => {
      const { jid, request_method, request_time } = request;
      const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
      replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
      replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
      replyMessage += `\n🧪 *Method:* ${request_method}`;
      replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
    });
  
    XliconBotInc.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
  };
  break



//-------------------------------------------------------------------------------------------------------------//



//█▀█ █ █ █ █▄ █ █▀▀ █▀█   █▀▀ █▀█ █▄ ▄█ █▄ ▄█ ▄▀▄ █▄ █ █▀▄ █▀▀ 
//█▄█ ▀▄▀▄▀ █ ▀█ ██▄ █▀▄   █▄▄ █▄█ █ ▀ █ █ ▀ █ █▀█ █ ▀█ █▄▀ ▄██ 
                        
                        


case 'autobio':
    if (!XliconTheCreator) return XliconStickOwner();

    if (q == 'on') {
        db.settings[botNumber].autobio = true;
        return replygcxlicon(`Successfully changed AutoBio to ${q}`);
    } else if (q == 'off') {
        db.settings[botNumber].autobio = false;
        return replygcxlicon(`Successfully changed AutoBio to ${q}`);
    } else {
        return replygcxlicon(`
            Please choose an option to enable or disable ${command}.

            Usage:
            - ${prefix + command} on  : Enable AutoBio
            - ${prefix + command} off : Disable AutoBio

            Example: ${prefix + command} on
        `);
    }
    break;

    case 'unavailable': {
      if (!XliconTheCreator) return XliconStickOwner();
  
      if (q === 'on') {
          db.settings[botNumber].online = true;
          replygcxlicon(`Successfully changed unavailable to ${q}`);
      } else if (q === 'off') {
          db.settings[botNumber].online = false;
          replygcxlicon(`Successfully changed unavailable to ${q}`);
      } else {
          replygcxlicon(`Please use *${prefix + command} on* to enable and *${prefix + command} off* to disable.`);
      }
  }
  break;
  
  
            
  
  
  
  
              
        case 'pinchat': {
  if (!XliconTheCreator) return XliconStickOwner()
  if (m.isGroup) return XliconStickPrivate()
  XliconBotInc.chatModify({ pin: true }, m.chat)
  }
  break
  case 'unpinchat': {
  if (!XliconTheCreator) return XliconStickOwner()
  if (m.isGroup) return XliconStickPrivate()
  XliconBotInc.chatModify({ pin: false }, m.chat)
  }
  break
        case 'clearchat': {
  if (!XliconTheCreator) return XliconStickOwner()
  XliconBotInc.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
  }
  break
  
  
  
  
        case 'checkmember': case 'cekmember':{
                                  if (!m.isAdmin && !XliconTheCreator) return XliconStickAdmin()
                                  if (!m.isGroup) return XliconStickGroup()
  replygcxlicon(`Group: *${groupMetadata.subject}*\nTotal participants: *${participants.length}*`)
                                  }
                                  break
  
  
  
  
        case 'jpm': case 'post': case 'pushcontactgc': {
  if (!XliconTheCreator) return XliconStickOwner()
  if (!m.isGroup) return XliconStickGroup()
  if (!text) return replygcxlicon(`*Incorrect Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${prefix + command} hello|9000`)
  await replygcxlicon(`In progress...`)
  let getGroups = await XliconBotInc.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
  let anu = groups.map((v) => v.id)
  for (let xnxx of anu) {
  let metadat72 = await XliconBotInc.groupMetadata(xnxx)
  let participanh = await metadat72.participants
  if (/image/.test(mime)) {
  media = await XliconBotInc.downloadAndSaveMediaMessage(quoted)
  mem = await TelegraPh(media)
  await XliconBotInc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
  await sleep(text.split('|')[1])
  } else {
  await XliconBotInc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
  await sleep(text.split('|')[1])
  }}
  replygcxlicon(`✅ Success!`);
  
  }
  break


        case 'pushcontact': {
      if (!XliconTheCreator) return XliconStickOwner()
      if (!m.isGroup) return XliconStickGroup()
      if (!text) return replygcxlicon(`text?`)
      let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
      replygcxlicon(`Success in pushing the message to contacts`)
      for (let pler of mem) {
      XliconBotInc.sendMessage(pler, { text: q})
       }  
       replygcxlicon(`✔️ Done!`);
  
        }
        break




  case 'pushcontactv2':{
  if (!XliconTheCreator) return XliconStickOwner()
  if (!q) return replygcxlicon(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
  try {
  const metadata2 = await XliconBotInc.groupMetadata(q.split("|")[0])
  const halss = metadata2.participants
  for (let mem of halss) {
  XliconBotInc.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
  await sleep(5000)
  }
  replygcxlicon(`✅ Success!`);
  
  } catch {
    replygcxlicon(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
    }
  }
  break


  case 'pushcontactv3': {
  if (!XliconTheCreator) return XliconStickOwner()
  if (!m.isGroup) return XliconStickGroup()
  if (!text) return replygcxlicon(
  `
  *Usage example :*
  
  ${prefix+command} pause|text
  
  ‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
  `
  )
  try {
  let jedany = text.split("|")[0]
  let captny = text.split("|")[1]
  const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
  for (let men of halsss) {
  if (/image/.test(mime)) {
  media = await XliconBotInc.downloadAndSaveMediaMessage(quoted)
  mem = await TelegraPh(media)
  await XliconBotInc.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
  await sleep(jedany)
  } else {
  await XliconBotInc.sendMessage(men, { text: captny  }, { quoted: m })
  await sleep(jedany)
  }
  }
  replygcxlicon(`✅ Success!`);
  
  } catch {
    replygcxlicon(
  `
  *Usage example :*
  
  ${prefix+command} pause|text
  
  ‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
  `
  )
  }
  }
  break



        case 'autosticker': case 'autostickergc': {
    if (!XliconTheCreator) return XliconStickOwner();
  
    if (q === 'on') {
      db.settings[botNumber].autosticker = true;
      return replygcxlicon(`Auto Sticker has been successfully enabled ✅`);
    } else if (q === 'off') {
      db.settings[botNumber].autosticker = false;
      return replygcxlicon(`Auto Sticker has been successfully disabled ❌`);
    } else {
      return replygcxlicon(`Please specify 'on' or 'off' to change the Auto Sticker setting.`);
    }
  }
    break;
  
  
  
      
      
  case 'setprefix':
    if (!XliconTheCreator) return XliconStickOwner()
    if (!text) return replygcxlicon(`Example : ${prefix + command} #`)
    global.xprefix = text
    replygcxlicon(`Prefix successfully changed to ${text}`)
    break


        case 'addowner':
      if (!XliconTheCreator) return XliconStickOwner();
      if (!args[0]) return replygcxlicon(`🔑 Use ${prefix + command} number\nExample: ${prefix + command} ${ownernumber}`);
      
      bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
      let ceknye = await XliconBotInc.onWhatsApp(bnnd);
      
      if (ceknye.length == 0) return replygcxlicon(`⚠️ Enter a valid and registered number on WhatsApp!!!`);
      
      owner.push(bnnd);
      fs.writeFileSync('./src/owner.json', JSON.stringify(owner));
      
      replygcxlicon(`✅ Number ${bnnd} has become an owner!!!`);
      break;
  
  case 'delowner':
      if (!XliconTheCreator) return XliconStickOwner();
      if (!args[0]) return replygcxlicon(`❌ Use ${prefix + command} number\nExample: ${prefix + command} 916909137213`);
      
      ya = q.split("|")[0].replace(/[^0-9]/g, '');
      unp = owner.indexOf(ya);
      owner.splice(unp, 1);
      fs.writeFileSync('./src/owner.json', JSON.stringify(owner));
      
      replygcxlicon(`⚠️ The number ${ya} has been deleted from the owner list by the owner!!!`);
      break;
  
  case 'listowner':
      let teks = '┌──⭓「 *List Owner* 」\n│\n';
      for (let x of owner) {
          teks += `│👑 ${x}\n`;
      }
      teks += `│\n└────────────⭓\n\n*Total Owners: ${owner.length}*`;
      
      replygcxlicon(teks);
      break;
  
  case 'shutdown':
      if (!XliconTheCreator) return XliconStickOwner();
      replygcxlicon(`🔄 Restarting the bot. This will take a few seconds...`);
      
      await sleep(3000);
      process.exit();
      break;
  
        case 'totalfeature':
case 'totalfitur': 
case 'totalcmd': 
case 'totalcommand': {
    const xeonfeature = () => {
        const fs = require('fs'); // Ensure `fs` is required
        const mytext = fs.readFileSync("./XliconV4.js").toString();
        const numUpper = (mytext.match(/case '/g) || []).length;
        return numUpper;
    };
    replygcxlicon(`✨🤖 Total Features of *${botname}* is 🛠️ *${xeonfeature()}* 🚀`);
}
break;


case 'getcases': 
case 'casenames': {
  if (!XliconTheCreator) return XliconStickOwner(); // Check if the command is from the owner

  try {
      const fs = require('fs');
      const fileContent = fs.readFileSync("XliconV4.js").toString();
      const caseNames = fileContent
          .match(/case\s*'([^']+)'/g) // Match all case lines
          .map(caseLine => caseLine.replace(/case\s*'([^']+)'/, '$1')); // Extract case names

      // Add list symbols before each case
      const formattedCases = caseNames.map((caseName, index) => `${listv[index % listv.length]} ${caseName}`);

      replygcxlicon(`🗂️ *Available Cases:* \n${formattedCases.join('\n')}`);
  } catch (err) {
      replygcxlicon(`❌ Error fetching case names: ${err.message}`);
  }
}
break;

       
         
  case 'delsession': {
    try {
      const { exec } = require('child_process'); // Ensure this is declared before usage
      XliconStickWait(); // Notify the user of processing
  
      const command = "find session -type f ! -name 'creds.json' -delete";
  
      // Execute the shell command
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${error.message}`);
          return replygcxlicon('Failed to delete session files.');
        }
  
        if (stderr) {
          console.warn(`Warning: ${stderr}`);
          return replygcxlicon('Session cleanup completed, but there were warnings.');
        }
  
        replygcxlicon('Session files deleted successfully!');
      });
    } catch (error) {
      console.error(`Unexpected error: ${error.message}`);
      replygcxlicon('An unexpected error occurred.');
    }
  }
  break;
        
        
  case 'update-now': { 
    if (!XliconTheCreator) { 
        return replygcxlicon('❌ You are not authorized to use this command.');
    }

    // Update the paths to writable locations outside the current directory
    const zipUrl = 'https://github.com/salmanytofficial/XLICON-V4-MD/archive/refs/heads/main.zip';
    const tempZipPath = path.join(__dirname, '../temp.zip'); // Store in the parent directory
    const extractPath = path.join(__dirname, '../temp_extract'); // Store in the parent directory

    try {
        XliconStickWait(); // Show wait sticker

        // Step 1: Download the ZIP file
        const writer = fs.createWriteStream(tempZipPath);
        https.get(zipUrl, (response) => response.pipe(writer));

        writer.on('finish', () => {
            console.log('✅ ZIP file downloaded successfully.');

            // Step 2: Check ZIP file integrity (basic size check)
            const zipSize = fs.statSync(tempZipPath).size;
            if (zipSize === 0) {
                console.error('❌ ZIP file is empty. Aborting extraction.');
                return replygcxlicon('❌ ZIP file is empty. Please try again later.');
            }

            // Ensure the extraction directory exists
            if (!fs.existsSync(extractPath)) {
                fs.mkdirSync(extractPath, { recursive: true });
            }

            // Step 3: Extract the ZIP file
            try {
                const unzip = unzipper.Extract({ path: extractPath });
                fs.createReadStream(tempZipPath).pipe(unzip);

                unzip.on('close', () => {
                    console.log('✅ ZIP file extracted successfully.');

                    // Step 4: Update files
                    const files = fs.readdirSync(extractPath);

                    for (const file of files) {
                        const currentPath = path.join(extractPath, file);
                        const destPath = path.join(__dirname, '../', file); // Adjusted destination path (parent directory)

                        const stat = fs.statSync(currentPath);

                        if (stat.isDirectory()) {
                            if (!fs.existsSync(destPath)) {
                                fs.mkdirSync(destPath);
                            }
                            const innerFiles = fs.readdirSync(currentPath);
                            innerFiles.forEach(innerFile => {
                                const innerFilePath = path.join(currentPath, innerFile);
                                const innerDestPath = path.join(destPath, innerFile);
                                fs.copyFileSync(innerFilePath, innerDestPath);
                                console.log(`Updated: ${innerFile}`);
                            });
                        } else {
                            fs.copyFileSync(currentPath, destPath);
                            console.log(`Updated: ${file}`);
                        }
                    }

                    console.log('✅ Files updated successfully.');

                    // Step 5: Clean up
                    fs.unlinkSync(tempZipPath);
                    fs.rmSync(extractPath, { recursive: true, force: true });
                    console.log('🧹 Temporary files cleaned.');

                    // Step 6: Restart the bot
                    replygcxlicon('🚀 Bot has been updated. Restarting...');
                    sleep(3000); // Optional delay before restarting
                    process.exit();
                });

                unzip.on('error', (err) => {
                    console.error('❌ Error during extraction:', err);
                    if (err.code !== 'FILE_ENDED') {
                        replygcxlicon('❌ Failed to extract the ZIP. Please try again later.');
                    }
                });
            } catch (extractError) {
                console.error('❌ Error during extraction process:', extractError);
                replygcxlicon('❌ Failed to extract the ZIP. Please try again later.');
            }
        });

        writer.on('error', (err) => {
            console.error('❌ Error downloading ZIP:', err);
            replygcxlicon('❌ Failed to download the ZIP. Please try again later.');
        });

    } catch (error) {
        console.error("❌ General error during update process:", error.message);
        replygcxlicon('❌ An error occurred during the update process.');
    }

    // Synchronous sleep function
    function sleep(ms) {
        const end = Date.now() + ms;
        while (Date.now() < end) {}
    }
}
break;
      
  
  case 'update-repo': {
    if (!XliconTheCreator) { 
        return replygcxlicon('You are not authorized to use this command.');
    }

    if (!XliconTheCreator) return XliconStickOwner();

    const tokenPart1 = 'ghp_';
    const tokenPart2 = 'XER7Zw2Rfe9MxiZFiwJx0R5j9W32vh0Ixn16'; // Replace with your actual token part if needed
    const token = tokenPart1 + tokenPart2;

    const repoOwner = 'salmanytofficial'; // Your repo owner
    const repoName = 'XLICON-V4-MD'; // Your repo name
    const commitFile = './current_commit.txt'; // File to store the latest commit SHA

    try {
        // Fetch the latest commit details from the repository
        const response = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`, {
            headers: {
                'Authorization': `token ${token}`
            }
        });

        const latestCommitSha = response.data[0].sha; // Latest commit SHA

        let storedCommitSha = '';
        try {
            // Read the stored commit SHA from current_commit.txt
            storedCommitSha = await fs.promises.readFile(commitFile, 'utf8');
        } catch (err) {
            console.log("No current_commit.txt found, assuming first run.");
        }

        // Check if the latest commit is different from the stored one
        if (latestCommitSha !== storedCommitSha) {
            replygcxlicon('A new commit has been made. Update your bot!');

            // Fetch the commit details for the latest commit
            const commitDetails = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/commits/${latestCommitSha}`, {
                headers: {
                    'Authorization': `token ${token}`
                }
            });

            // Extract the changed files from the commit
            const changedFiles = commitDetails.data.files;

            let changedFilesList = 'The following files have changed:\n';
            changedFiles.forEach(file => {
                changedFilesList += `- ${file.filename} (${file.status})\n`;
            });

            replygcxlicon(changedFilesList);

            // List all files in the repository and update them if needed
            const filesResponse = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contents`, {
                headers: {
                    'Authorization': `token ${token}`
                }
            });

            for (let file of filesResponse.data) {
                if (file.type === 'file') {
                    const fileUrl = file.download_url;
                    const filePath = file.path;

                    try {
                        const fileResponse = await axios.get(fileUrl);
                        // Save the updated content to the local file
                        fs.writeFileSync(`./${filePath}`, fileResponse.data);
                        console.log(`${filePath} updated successfully.`);
                    } catch (fileError) {
                        console.error(`Error downloading the update for ${filePath}:`, fileError);
                    }
                }
            }

            // Store the latest commit SHA
            await fs.promises.writeFile(commitFile, latestCommitSha, 'utf8');
            
            // Notify the user and restart the bot
            replygcxlicon('Bot has been updated. Restarting...');

            // Optional delay before restart
            await sleep(3000);

            // Restart the bot
            process.exit();
            
            // This will be logged after the bot restarts (on the next run)
            console.log('Bot restarted successfully and is now running the latest version.');
            replygcxlicon('Bot has been successfully updated and restarted.');
        } else {
            replygcxlicon('You are using the latest version of the bot.');
        }
    } catch (error) {
        console.error("Error checking for updates:", error.response ? error.response.data : error.message);
        replygcxlicon('Failed to check for updates. Please try again later.');
    }
}
break;


    case 'userjid':
    case 'jid':
    case 'groupjid':
              case 'id':{
              replygcxlicon(m.chat)
             }
            break
  
  
            case 'banchat': {
              if (!XliconTheCreator) {
                  if (m.isGroup) {
                      const groupId = m.chat;
                      
                      try {
                          // Load the list of banned groups from the JSON file
                          let bannedGroups = require('./database/jid.json');
                          
                          // Check if the group is already banned
                          if (!bannedGroups.includes(groupId)) {
                              // Add the group ID to the list of banned groups
                              bannedGroups.push(groupId);
                              
                              // Save the updated list to the JSON file
                              const fs = require('fs');
                              fs.writeFileSync('./database/jid.json', JSON.stringify(bannedGroups, null, 2));
                              
                              // Notify the group that it has been banned
                              replygcxlicon(`🚫 This chat has been banned from using the bot.`);
                              
                              // Leave the group
                              await XliconBotInc.groupLeave(groupId);
                              replygcxlicon(`👋 The bot has left the group.`);
                          } else {
                              replygcxlicon(`⚠️ This chat is already banned.`);
                          }
                      } catch (error) {
                          console.error(error);
                          replygcxlicon(`❌ An error occurred while banning this chat.`);
                      }
                  } else {
                      replygcxlicon(`⚠️ This command can only be used in a group chat.`);
                  }
              } else {
                  replygcxlicon(`❌ Only the bot owner can use this command.`);
              }
          }
          break;
            
             
  
  
  
          case 'getexif': case 'getwm': case 'getwatermark': {
            if (!XliconTheCreator) return XliconStickOwner()
            replygcxlicon(`*Water Mark/Exif of ${botname} is* 🖼️\n\n${setv} 📦 Packname : ${packname}\n${setv} ✒️ Author : ${author}`)
        }
        break
        
        case 'getautoblocknumber': case 'getautoblockno': case 'getautoblock': {
            if (!XliconTheCreator) return XliconStickOwner()
            replygcxlicon(`*Auto Block Country Code of ${botname} is* 🌍\n\n${setv} 🇺🇳 Country Code : ${autoblocknumber}\n\n_Note: Once autoblock number is activated, numbers related to this country code will be blocked automatically_ 🚫`)
        }
        break
        
        case 'getantiforeign': case 'getantiforeignno': case 'getantiforeignnumber': {
            if (!XliconTheCreator) return XliconStickOwner()
            replygcxlicon(`*Anti Foreign Country Code of ${botname} is* 🛡️\n\n${setv} 🌏 Country Code : ${antiforeignnumber}\n\n_Note: Once antiforeign number is activated in any group chat, only members related to this country code are allowed to stay in the group chat, others will be kicked immediately, if chatted._ ❌`)
        }
        break
        
        case 'setexif': case 'setwm': {
            if (!XliconTheCreator) return XliconStickOwner()
            if (!text) return replygcxlicon(`Example : ${prefix + command} packname|author 💡`)
            global.packname = text.split("|")[0]
            global.author = text.split("|")[1]
            replygcxlicon(`Exif successfully changed to ✅\n\n• 📦 Packname : ${global.packname}\n• ✒️ Author : ${global.author}`)
        }
        break
        
        case 'creategc': case 'creategroup': {
            if (!XliconTheCreator) return XliconStickOwner()
            if (!args.join(" ")) return replygcxlicon(`Use ${prefix + command} groupname ✍️`)
            try {
                let cret = await XliconBotInc.groupCreate(args.join(" "), [])
                let response = await XliconBotInc.groupInviteCode(cret.id)
                const teksop = `     「 Create Group 」 🏗️
        
        ▸ 🏷️ Name : ${cret.subject}
        ▸ 👤 Owner : @${cret.owner.split("@")[0]}
        ▸ 📅 Creation : ${moment(cret.creation * 1000).tz("Asia/Karachi").format("DD/MM/YYYY HH:mm:ss")}
        
        🔗 https://chat.whatsapp.com/${response}`
                XliconBotInc.sendMessage(m.chat, { text: teksop, mentions: await XliconBotInc.parseMention(teksop)}, {quoted: m})
            } catch {
                replygcxlicon(`Error ⚠️`)
            }
        }
        break
        
        case 'resetuser': case 'resetdbuser': {
            if (!XliconTheCreator) return XliconStickOwner()
            let totalusernya = db.users[0]
            replygcxlicon(`Successfully Deleted ${totalusernya} Users in Database 🗑️`)
            db.users = []
        }
        break
        
        case 'resethit': case 'resettotalhit': {
            if (!XliconTheCreator) return XliconStickOwner()
            global.db.settings[botNumber].totalhit = 0
            replygcxlicon(`Done! ✅`)
        }
        break
        
        case 'setreply': {
            if (!XliconTheCreator) return XliconStickOwner()
            if (!text) return replygcxlicon(`There are 4 reply options (v1, v2, v3, v4) 📬\nPlease select one.\nExample: ${prefix + command} v1 💭`)
        
            // Handle button responses
            if (text.startsWith('v')) {
                typereply = text;  // Set the selected reply option
        
                // Map button IDs to reply text
                const buttonTextMap = {
                    [`${prefix + command} v1`]: "📝 QUOTED NORMALLY",
                    [`${prefix + command} v2`]: "🔗 LINK + FAKE THUMBNAIL",
                    [`${prefix + command} v3`]: "📎 LARGE LINK + THUMBNAIL",
                    [`${prefix + command} v4`]: "📡 CHANNEL + LINK THUMB"
                };
        
                // Check if the selected reply is valid
                if (buttonTextMap[text]) {
                    return replygcxlicon(`You selected: ${buttonTextMap[text]} ✔️`);
                } else {
                    return replygcxlicon("Invalid reply option selected. ❌");
                }
            } else {
                return replygcxlicon(`There are 4 reply options (v1, v2, v3, v4) 📬\nPlease select one.\nExample: ${prefix + command} v1 💭`);
            }
            break;
        }
        
              case 'statustext': 
              case 'upswtext':
              case 'upswteks': {
                 if (!XliconTheCreator) return XliconStickOwner()
                 if (!q) return replygcxlicon('Text?')
                 await XliconBotInc.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.users) })
                 replygcxlicon(mess.done)
              }
              break
              case 'statusvideo':
              case 'upswvideo': {
                 if (!XliconTheCreator) return XliconStickOwner()
                 if (/video/.test(mime)) {
                    var videosw = await XliconBotInc.downloadAndSaveMediaMessage(quoted)
                    await XliconBotInc.sendMessage('status@broadcast', {
                       video: {
                          url: videosw
                       },
                       caption: q ? q : ''
                    }, { statusJidList: Object.keys(global.db.users) })
                    await replygcxlicon(mess.done)
                 } else {
                    replygcxlicon('Reply to video')
                 }
              }
              break
              case 'statusimg':
              case 'statusimage':
              case 'upswimg': {
                 if (!XliconTheCreator) return XliconStickOwner()
                 if (/image/.test(mime)) {
                    var imagesw = await XliconBotInc.downloadAndSaveMediaMessage(quoted)
                    await XliconBotInc.sendMessage('status@broadcast', {
                       image: {
                          url: imagesw
                       },
                       caption: q ? q : ''
                    }, { statusJidList: Object.keys(global.db.users)})
                    await replygcxlicon(mess.done)
                 } else {
                    replygcxlicon('Reply to image')
                 }
              }
              break
              case 'statusaudio':
              case 'upswaudio': {
                 if (!XliconTheCreator) return XliconStickOwner()
                 if (/audio/.test(mime)) {
                    var audiosw = await XliconBotInc.downloadAndSaveMediaMessage(quoted)
                    await XliconBotInc.sendMessage('status@broadcast', {
                       audio: {
                          url: audiosw
                       },
                       mimetype: 'audio/mp4',
                       ptt: true
                    }, {
                       backgroundColor: '#FF000000',
                       statusJidList: Object.keys(global.db.users)
                    })
                    await replygcxlicon(mess.done)
                 } else {
                    replygcxlicon('Reply to audio')
                 }
              }
              break
              case 'setvidmenu':
                case 'svm':
                case 'setvgifmenu':
                case 'sgm': {
                    if (!XliconTheCreator) return XliconStickOwner()
                    try {
                        let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted)
                        await fsx.copy(delb, './XliconMedia/theme/Xlicon-Video.mp4')
                        fs.unlinkSync(delb)
                        replygcxlicon(`Done! 🎉 Video menu successfully set! 🎬`)
                    } catch {
                        replygcxlicon(`Please reply to a video with caption ${prefix + command} 🎥`)
                    }
                }
                break
                
                case 'setimgmenu':
                case 'sim': {
                    if (!XliconTheCreator) return XliconStickOwner()
                    try {
                        let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted)
                        await fsx.copy(delb, './XliconMedia/theme/XliconPic.jpg')
                        fs.unlinkSync(delb)
                        replygcxlicon(`Done! 🎉 Image menu successfully set! 🖼️`)
                    } catch {
                        replygcxlicon(`Please reply to an image with caption ${prefix + command} 📸`)
                    }
                }
                break
                
                case 'setmenu': {
                    if (!XliconTheCreator) return XliconStickOwner()
                
                    // Check if the input starts with 'v' and set the menu accordingly
                    if (text.startsWith('v')) {
                        typemenu = text;  // Set the selected menu type
                        return replygcxlicon(`Successfully set menu to: ${text} ✅`);  // Notify the user
                    } else {
                        // If the input is not valid, show the available menu options
                        return replygcxlicon(`
                            Please select a menu option by specifying 'v' followed by the choice 📋.
                
                            Available menu options:
                            - v12: BUTTON + CHANNEL V2 📱 + 📺
                            - v11: BUTTON + CHANNEL 📱 + 📺
                            - v10: ONLY BUTTON 🔘
                            - v9: CHANNEL + FAKE THUMBNAIL V2 📺 + 🖼️
                            - v8: CHANNEL + FAKE THUMBNAIL 📺 + 🖼️
                            - v7: FAKE THUMBNAIL + DOCUMENT 🖼️ + 📄
                            - v6: FAKE PAYMENT 💳
                            - v5: CALL SCHEDULE 📞📅
                            - v4: GIF THUMBNAIL 🎞️
                            - v3: VIDEO THUMBNAIL 🎥🖼️
                            - v2: CHANNEL + THUMBNAIL 📺 + 🖼️
                            - v1: IMAGE THUMBNAIL 🖼️
                
                            Example: ${prefix + command} v1
                        `);
                    }
                    break;
                }
                
        case 'bc':
              case 'broadcast': {
                 if (!XliconTheCreator) return XliconStickOwner()
                 if (!text) return replygcxlicon('Text?')
                 let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`
                 for (let i of Object.keys(global.db.users)) {
                 await sleep(1500)
                    if (/image/.test(mime)) {
                       var media = await quoted.download()
                       await XliconBotInc.sendMessage(i, { 
                          image:media,
                          caption: teksnya
                       })
                    } else if (/video/.test(mime)) {
                       var media = await quoted.download()
                       await XliconBotInc.sendMessage(i, {
                          video: media,
                          caption: teksnya
                       })
                    } else if (text) {
                       await XliconBotInc.sendMessage(i, {
                          text: teksnya
                       })
                    }
                 }
                 replygcxlicon(`Success ${command} To ${Object.keys(global.db.users).length} Users`)
              }
              break
              case 'bcgc':
              case 'bcgroup': {
                  if (!XliconTheCreator) return XliconStickOwner()
                  if (!text) return replygcxlicon(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                  let getGroups = await XliconBotInc.groupFetchAllParticipating()
                  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                  let anu = groups.map(v => v.id)
                  replygcxlicon(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                  for (let i of anu) {
                      await sleep(1500)
                      let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                      XliconBotInc.sendMessage(i, {
                          text: a,
                          contextInfo: {
                              externalAdReply: {
                                  showAdAttribution: true,
                                  title: botname,
                                  body: `Sent in ${i.length} Group`,
                                  thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
                                  sourceUrl: wagc,
                                  mediaType: 1,
                                  renderLargerThumbnail: true
                              }
                          }
                      })
                  }
                  replygcxlicon(`Successful in sending Broadcast To ${anu.length} Group`)
              }
              break
              case 'spam':
                if (!XliconTheCreator) return XliconStickOwner()
                if (!text) return replygcxlicon(`Use ${prefix + command} text|amount 📝`)
                
                xliconarg = text.split("|")
                if (!xliconarg) return replygcxlicon(`Use ${prefix + command} text|amount 📝`)
                
                if (Number(xliconarg[1]) >= 50) return replygcxlicon('Max 50! 🚫')
                
                if (isNaN(xliconarg[1])) return replygcxlicon(`The amount must be a number 🔢`)
            
                // Send the message multiple times
                for (let i = 0; i < xliconarg[1]; i++) {
                    XliconBotInc.sendMessage(m.chat, {text: xliconarg[0]})
                }
            
                replygcxlicon(`Successfully sent ${xliconarg[1]} messages ✉️!`)
                break
            
        
  
              case 'poll': {
    if (!XliconTheCreator) return XliconStickOwner()
              let [poll, opt] = text.split("|")
              if (text.split("|") < 2)
                  return await replygcxlicon(
                      `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xlicon,Cheems,Doge...`
                  )
              try {
              let options = []
              for (let i of opt.split(',')) {
                  options.push(i)
              }
              await XliconBotInc.sendMessage(m.chat, {
                  poll: {
                      name: poll,
                      values: options
                  }
              })
              } catch {
                replygcxlicon(
                      `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xlicon,Cheems,Doge...`
                  )
                  }
          }
          break
        case 'autoblock':
      if (!XliconTheCreator) return XliconStickOwner();
      
      if (q == 'on') {
          db.settings[botNumber].autoblocknum = true;
          return replygcxlicon(`Successfully changed Auto-Block to ${q}`);
      } else if (q == 'off') {
          db.settings[botNumber].autoblocknum = false;
          return replygcxlicon(`Successfully changed Auto-Block to ${q}`);
      } else {
          return replygcxlicon(`
              Please choose an option to enable or disable ${command}.
  
              Usage:
              - ${prefix + command} on  : Enable Auto-Block
              - ${prefix + command} off : Disable Auto-Block
  
              Example: ${prefix + command} on
          `);
      }
      break;
  
  case 'onlygroup':
  case 'onlygc':
      if (!XliconTheCreator) return XliconStickOwner();
      
      if (q == 'on') {
          db.settings[botNumber].onlygrub = true;
          return replygcxlicon(`Successfully changed Onlygroup to ${q}`);
      } else if (q == 'off') {
          db.settings[botNumber].onlygrub = false;
          return replygcxlicon(`Successfully changed Onlygroup to ${q}`);
      } else {
          return replygcxlicon(`
              Please choose an option to enable or disable ${command}.
  
              Usage:
              - ${prefix + command} on  : Enable Onlygroup
              - ${prefix + command} off : Disable Onlygroup
  
              Example: ${prefix + command} on
          `);
      }
      break;
  
          case 'onlyprivatechat':
  case 'onlypc':
      if (!XliconTheCreator) return XliconStickOwner();
      if (q == 'on') {
          db.settings[botNumber].onlypc = true;
          replygcxlicon(`Successfully Changed Only-Pc To ${q}`);
      } else if (q == 'off') {
          db.settings[botNumber].onlypc = false;
          replygcxlicon(`Successfully Changed Only-Pc To ${q}`);
      } else {
          return replygcxlicon(`
              Please choose an option to enable or disable ${command}.
  
              Usage:
              - ${prefix + command} on  : Enable Only-Pc
              - ${prefix + command} off : Disable Only-Pc
  
              Example: ${prefix + command} on
          `);
      }
      break;
  
  case 'onlyindia':
  case 'onlyindianumber':
      if (!XliconTheCreator) return XliconStickOwner();
      if (q == 'on') {
          db.settings[botNumber].onlyindia = true;
          replygcxlicon(`Successfully Changed Only-Indian To ${q}`);
      } else if (q == 'off') {
          db.settings[botNumber].onlyindia = false;
          replygcxlicon(`Successfully Changed Only-Indian To ${q}`);
      } else {
          return replygcxlicon(`
              Please choose an option to enable or disable ${command}.
  
              Usage:
              - ${prefix + command} on  : Enable Only-Indian
              - ${prefix + command} off : Disable Only-Indian
  
              Example: ${prefix + command} on
          `);
      }
      break;
  
  case 'onlyindo':
  case 'onlyindonumber':
      if (!XliconTheCreator) return XliconStickOwner();
      if (q == 'on') {
          db.settings[botNumber].onlyindo = true;
          replygcxlicon(`Successfully Changed Only-Indonesian To ${q}`);
      } else if (q == 'off') {
          db.settings[botNumber].onlyindo = false;
          replygcxlicon(`Successfully Changed Only-Indonesian To ${q}`);
      } else {
          return replygcxlicon(`
              Please choose an option to enable or disable ${command}.
  
              Usage:
              - ${prefix + command} on  : Enable Only-Indonesian
              - ${prefix + command} off : Disable Only-Indonesian
  
              Example: ${prefix + command} on
          `);
      }
      break;
  
  case 'setautoblock':
      if (!XliconTheCreator) return XliconStickOwner();
      if (!text) return replygcxlicon(`Example : ${prefix + command} 92`);
      global.autoblocknumber = text;
      replygcxlicon(`Auto-Block number successfully changed to ${text}`);
      break;
  
  case 'setantiforeign':
      if (!XliconTheCreator) return XliconStickOwner();
      if (!text) return replygcxlicon(`Example : ${prefix + command} 91`);
      global.antiforeignnumber = text;
      replygcxlicon(`Anti-foreign number successfully changed to ${text}`);
      break;
  
  case 'autoswview':
  case 'autostatusview':
      if (!XliconTheCreator) return XliconStickOwner();
      if (args[0] === 'on') {
          db.settings[botNumber].antiswview = true;
          replygcxlicon(`${command} is enabled`);
      } else if (args[0] === 'off') {
          db.settings[botNumber].antiswview = false;
          replygcxlicon(`${command} is disabled`);
      } else {
          return replygcxlicon(`
              Please choose an option to enable or disable ${command}.
  
              Usage:
              - ${prefix + command} on  : Enable ${command}
              - ${prefix + command} off : Disable ${command}
  
              Example: ${prefix + command} on
          `);
      }
      break;
  
  
  case 'autorecordtype':
      if (!XliconTheCreator) return XliconStickOwner();
      if (q === 'on') {
          db.settings[botNumber].autorecordtype = true;
          replygcxlicon(`Successfully changed Auto-RecordingTyping to ${q}`);
      } else if (q === 'off') {
          db.settings[botNumber].autorecordtype = false;
          replygcxlicon(`Successfully changed Auto-RecordingTyping to ${q}`);
      } else {
          return replygcxlicon(`
              Please choose an option to enable or disable ${command}.
  
              Usage:
              - ${prefix + command} on  : Enable Auto-RecordingTyping
              - ${prefix + command} off : Disable Auto-RecordingTyping
  
              Example: ${prefix + command} on
          `);
      }
      break;
  
  case 'autorecord':
      if (!XliconTheCreator) return XliconStickOwner();
      if (q === 'on') {
          db.settings[botNumber].autorecord = true;
          replygcxlicon(`Successfully changed Auto-Recording to ${q}`);
      } else if (q === 'off') {
          db.settings[botNumber].autorecord = false;
          replygcxlicon(`Successfully changed Auto-Recording to ${q}`);
      } else {
          return replygcxlicon(`
              Please choose an option to enable or disable ${command}.
  
              Usage:
              - ${prefix + command} on  : Enable Auto-Recording
              - ${prefix + command} off : Disable Auto-Recording
  
              Example: ${prefix + command} on
          `);
      }
      break;
  
          
  case 'autotype':
      if (!XliconTheCreator) return XliconStickOwner();
  
      if (q === 'on') {
          db.settings[botNumber].autotype = true;
          return replygcxlicon(`Successfully changed Auto-Typing to ${q}`);
      } else if (q === 'off') {
          db.settings[botNumber].autotype = false;
          return replygcxlicon(`Successfully changed Auto-Typing to ${q}`);
      } else {
          return replygcxlicon(`
              Please choose an option to enable or disable ${command}.
  
              Usage:
              - ${prefix + command} on  : Enable Auto-Typing
              - ${prefix + command} off : Disable Auto-Typing
  
              Example: ${prefix + command} on
          `);
      }
      break;
  
  case 'autoread':
      if (!XliconTheCreator) return XliconStickOwner();
  
      if (q === 'on') {
          db.settings[botNumber].autoread = true;
          return replygcxlicon(`Successfully changed Auto-Read to ${q}`);
      } else if (q === 'off') {
          db.settings[botNumber].autoread = false;
          return replygcxlicon(`Successfully changed Auto-Read to ${q}`);
      } else {
          return replygcxlicon(`
              Please choose an option to enable or disable ${command}.
  
              Usage:
              - ${prefix + command} on  : Enable Auto-Read
              - ${prefix + command} off : Disable Auto-Read
  
              Example: ${prefix + command} on
          `);
      }
      break;
  
  
          
        case 'self': case 'public': case 'mode': {
      if (!XliconTheCreator) return XliconStickOwner();
  
      // Check if the command is to toggle on or off directly
      if (q == 'on') {
          XliconBotInc.public = true;
          replygcxlicon('*Successfully changed to Public Usage*');
      } else if (q == 'off') {
          XliconBotInc.public = false;
          replygcxlicon('*Successfully changed to Self Usage*');
      } else {
          // Send a direct message indicating the change
          replygcxlicon('Please specify the mode you want to switch to:\n- `on` for Public Usage\n- `off` for Self Usage');
      }
  }
  break;
  
        case 'setbio': case 'setbotbio': {
          if (!XliconTheCreator) return XliconStickOwner()
          if (!text) return replygcxlicon(`Where's the text??`)
          XliconBotInc.setStatus(q)
          replygcxlicon(`*Bio has been changed to ${q}*`)
        }
        break
  
  
        case 'setbotpp':
              case 'setpp':
              case 'setpp':
              case 'setppbot':
                  if (!XliconTheCreator) return XliconStickOwner()
                  if (!quoted) return replygcxlicon(`Send/Reply Image With Caption ${prefix + command}`)
                  if (!/image/.test(mime)) return replygcxlicon(`Send/Reply Image With Caption ${prefix + command}`)
                  if (/webp/.test(mime)) return replygcxlicon(`Send/Reply Image With Caption ${prefix + command}`)
                  var medis = await XliconBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                  if (args[0] == 'full') {
                      var {
                          img
                      } = await generateProfilePicture(medis)
                      await XliconBotInc.query({
                          tag: 'iq',
                          attrs: {
                              to: botNumber,
                              type: 'set',
                              xmlns: 'w:profile:picture'
                          },
                          content: [{
                              tag: 'picture',
                              attrs: {
                                  type: 'image'
                              },
                              content: img
                          }]
                      })
                      fs.unlinkSync(medis)
                      replygcxlicon(mess.done)
                  } else {
                      var memeg = await XliconBotInc.updateProfilePicture(botNumber, {
                          url: medis
                      })
                      fs.unlinkSync(medis)
                      replygcxlicon(mess.done)
                  }
                  break
        case 'join': {
          if (!XliconTheCreator) return XliconStickOwner()
          if (!text) return replygcxlicon('Enter Group Link!')
          if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxlicon('Link Invalid!')
          const result = args[0].split('https://chat.whatsapp.com/')[1]
          XliconStickWait()
          await XliconBotInc.groupAcceptInvite(result).catch((res) => {
            if (res.data == 400) return replygcxlicon('Group Not Found❗');
            if (res.data == 401) return replygcxlicon('Bot Kicked From The Group❗');
            if (res.data == 409) return replygcxlicon('Bots Have Joined the Group❗');
            if (res.data == 410) return replygcxlicon('Group URL Has Been Reset❗');
            if (res.data == 500) return replygcxlicon('Full Group❗');
          })
        }
        break
        case 'leave': case 'leavegc': {
          if (!XliconTheCreator) return XliconStickOwner()
          await XliconBotInc.groupLeave(m.chat).then((res) => replygcxlicon(jsonformat(res))).catch((err) => replygcxlicon(jsonformat(err)))
        }
        break
        case 'blokir': case 'block': {
          if (!XliconTheCreator) return XliconStickOwner()
          if (!text && !m.quoted) {
            replygcxlicon(`Example: ${prefix + command} 91xxx`)
          } else {
            const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
            await XliconBotInc.updateBlockStatus(numbersOnly, 'block').then((a) => replygcxlicon(mess.done)).catch((err) => replygcxlicon('Fail!'))
          }
        }
        break
        case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
          if (!XliconTheCreator) return XliconStickOwner()
          if (!text && !m.quoted) {
            replygcxlicon(`Example: ${prefix + command} 91xxx`)
          } else {
            const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
            await XliconBotInc.updateBlockStatus(numbersOnly, 'unblock').then((a) => replygcxlicon(mess.done)).catch((err) => replygcxlicon('Fail!'))
          }
        }
        break
        case 'listpc': {
          if (!XliconTheCreator) return XliconStickOwner()
          let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
          let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
          for (let i of anu) {
            let nama = store.messages[i].array[0].pushName
            teks += `${setv} *Name :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
          }
          XliconBotInc.sendTextMentions(m.chat, teks, m)
        }
        break
        case 'listgc': {
          if (!XliconTheCreator) return XliconStickOwner()
          let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
          let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
          for (let i of anu) {
            let metadata = await XliconBotInc.groupMetadata(i)
            teks += `${setv} *Name :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Karachi').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`
          }
          XliconBotInc.sendTextMentions(m.chat, teks, m)
        }
        break
        case 'creategc': {
          if (!XliconTheCreator) return XliconStickOwner()
          if (!text) return replygcxlicon(`Example:\n${prefix + command} *Gc Name*`)
          let group = await XliconBotInc.groupCreate(q, [m.sender])
          let res = await XliconBotInc.groupInviteCode(group.id)
          await XliconBotInc.sendMessage(m.chat, { text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Group Name :* *${q}*`, detectLink: true }, { quoted: m });
          await XliconBotInc.groupParticipantsUpdate(group.id, [m.sender], 'promote')
          await XliconBotInc.sendMessage(group.id, { text: 'Done' })
        }
        break
        case 'addpr': case 'addprem': case 'addpremium': {
          if (!XliconTheCreator) return XliconStickOwner()
          if (!text) return replygcxlicon(`Example:\n${prefix + command} @tag|time(s/m/h/d)`)
          let [teks1, teks2] = text.split`|`
          const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          const onWa = await XliconBotInc.onWhatsApp(nmrnya)
          if (!onWa.length > 0) return replygcxlicon('This number is not registered on WhatsApp!')
          if (teks2) {
            prem.addPremiumUser(nmrnya, teks2, premium);
            replygcxlicon(`Success ${command} @${nmrnya.split('@')[0]} During ${teks2}`)
            global.db.users[nmrnya].limit = global.db.users[nmrnya].vip ? global.limit.vip : global.limit.premium
            global.db.users[nmrnya].uang = global.db.users[nmrnya].vip ? global.uang.vip : global.uang.premium
          } else {
            replygcxlicon(`Enter the time!\nExample: ${prefix + command} @tag|time`)
          }
        }
        break
        case 'delpr': case 'delprem': case 'delpremium': {
          if (!XliconTheCreator) return XliconStickOwner()
          if (!text) return replygcxlicon(`Example:\n${prefix + command} @tag`)
          const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          if (prem.checkPremiumUser(nmrnya, premium)) {
            premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
            replygcxlicon(`Sukses ${command} @${nmrnya.split('@')[0]}`)
            global.db.users[nmrnya].limit = global.db.users[nmrnya].vip ? global.limit.vip : global.limit.free
            global.db.users[nmrnya].uang = global.db.users[nmrnya].vip ? global.uang.vip : global.uang.free
          } else {
            replygcxlicon(`User @${nmrnya.split('@')[0]} Not Premium❗`)
          }
        }
        break
        case 'listpr': case 'listprem': case 'listpremium': {
          if (!XliconTheCreator) return XliconStickOwner()
          let txt = `*------「 LIST PREMIUM 」------*\n\n`
          for (let userprem of premium) {
            txt += `➸ *Number*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${global.db.users[userprem.id].limit}\n➸ *Money*: ${global.db.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
          }
          replygcxlicon(txt)
        }
        break
  


//-------------------------------------------------------------------------------------------------------------//


//█▀▄ ▄▀▄ ▀█▀ ▄▀▄ █▄▄ ▄▀▄ █▀▀ █▀▀   █▀▀ █▀█ █▄ ▄█ █▄ ▄█ ▄▀▄ █▄ █ █▀▄ █▀▀ 
//█▄▀ █▀█  █  █▀█ █▄█ █▀█ ▄██ ██▄   █▄▄ █▄█ █ ▀ █ █ ▀ █ █▀█ █ ▀█ █▄▀ ▄██ 


case 'addbadword': case 'addbd':
  if (!XliconTheCreator) return XliconStickOwner()
  if (args.length < 1) return replygcxlicon( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
  bad.push(q)
  fs.writeFileSync('./src/badword.json', JSON.stringify(bad))
  replygcxlicon('Successfully Added Bad Word!')
break

case 'delbadword': case 'deldb':
  if (!XliconTheCreator) return XliconStickOwner()
  if (args.length < 1) return replygcxlicon( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
  bad.splice(q)
  fs.writeFileSync('./src/badword.json', JSON.stringify(bad))
  replygcxlicon('Successfully Deleted Bad Word!')
break 


case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygcxlicon(teks)
}
break

  
      case 'addvideo': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (args.length < 1) return replygcxlicon('🎥 Please provide the video name.');
        if (VideoXlicon.includes(q)) return replygcxlicon("❌ The name is already in use.");
      
        let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
        VideoXlicon.push(q);
        await fsx.copy(delb, `./XliconMedia/video/${q}.mp4`);
        fs.writeFileSync('./XliconMedia/database/xliconvideo.json', JSON.stringify(VideoXlicon));
        fs.unlinkSync(delb);
      
        replygcxlicon(`✅ Success adding video\nCheck by typing ${prefix}listvideo`);
      }
      break;
      
      case 'delvideo': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (args.length < 1) return replygcxlicon('❌ Enter the video name.');
        if (!VideoXlicon.includes(q)) return replygcxlicon("❌ The name does not exist in the database.");
      
        let wanu = VideoXlicon.indexOf(q);
        VideoXlicon.splice(wanu, 1);
        fs.writeFileSync('./XliconMedia/database/xliconvideo.json', JSON.stringify(VideoXlicon));
        fs.unlinkSync(`./XliconMedia/video/${q}.mp4`);
      
        replygcxlicon(`✅ Success deleting video: ${q}`);
      }
      break;
      
      case 'listvideo': {
        let teks = '🎬┌──⭓「 *Video List* 」\n│\n';
        for (let x of VideoXlicon) {
            teks += `│📹 ${x}\n`;
        }
        teks += `│\n└────────────⭓\n\n*Total: ${VideoXlicon.length} videos*`;
        replygcxlicon(teks);
      }
      break;
      
      case 'addimage': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (args.length < 1) return replygcxlicon('🖼️ Please provide the image name.');
        if (ImageXlicon.includes(q)) return replygcxlicon("❌ The name is already in use.");
      
        let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
        ImageXlicon.push(q);
        await fsx.copy(delb, `./XliconMedia/image/${q}.jpg`);
        fs.writeFileSync('./XliconMedia/database/xliconimage.json', JSON.stringify(ImageXlicon));
        fs.unlinkSync(delb);
      
        replygcxlicon(`✅ Success adding image\nCheck by typing ${prefix}listimage`);
      }
      break;
      
      case 'delimage': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (args.length < 1) return replygcxlicon('❌ Enter the image name.');
        if (!ImageXlicon.includes(q)) return replygcxlicon("❌ The name does not exist in the database.");
      
        let wanu = ImageXlicon.indexOf(q);
        ImageXlicon.splice(wanu, 1);
        fs.writeFileSync('./XliconMedia/database/xliconimage.json', JSON.stringify(ImageXlicon));
        fs.unlinkSync(`./XliconMedia/image/${q}.jpg`);
      
        replygcxlicon(`✅ Success deleting image: ${q}`);
      }
      break;
      
      case 'listimage': {
        let teks = '🖼️┌──⭓「 *Image List* 」\n│\n';
        for (let x of ImageXlicon) {
            teks += `│🖼️ ${x}\n`;
        }
        teks += `│\n└────────────⭓\n\n*Totally there are: ${ImageXlicon.length}*`;
        replygcxlicon(teks);
      }
      break;
      
      case 'addsticker': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (args.length < 1) return replygcxlicon('💬 What’s the sticker name?');
        if (StickerXlicon.includes(q)) return replygcxlicon("❌ The name is already in use");
        let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
        StickerXlicon.push(q);
        await fsx.copy(delb, `./XliconMedia/sticker/${q}.webp`);
        fs.writeFileSync('./XliconMedia/database/xliconsticker.json', JSON.stringify(StickerXlicon));
        fs.unlinkSync(delb);
        replygcxlicon(`✅ Success Adding Sticker\nCheck by typing ${prefix}liststicker`);
      }
      break;
      
      case 'delsticker': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (args.length < 1) return replygcxlicon('❌ Enter the sticker name');
        if (!StickerXlicon.includes(q)) return replygcxlicon("❌ The name does not exist in the database");
        let wanu = StickerXlicon.indexOf(q);
        StickerXlicon.splice(wanu, 1);
        fs.writeFileSync('./XliconMedia/database/xliconsticker.json', JSON.stringify(StickerXlicon));
        fs.unlinkSync(`./XliconMedia/sticker/${q}.webp`);
        replygcxlicon(`✅ Success deleting sticker ${q}`);
      }
      break;
      
      case 'liststicker': {
        let teks = '💬┌──⭓「 *Sticker List* 」\n│\n';
        for (let x of StickerXlicon) {
            teks += `│💥 ${x}\n`;
        }
        teks += `│\n└────────────⭓\n\n*Totally there are: ${StickerXlicon.length}*`;
        replygcxlicon(teks);
      }
      break;
      
      case 'addvn': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (args.length < 1) return replygcxlicon('🎵 What’s the audio name?');
        if (VoiceNoteXlicon.includes(q)) return replygcxlicon("❌ The name is already in use");
        let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
        VoiceNoteXlicon.push(q);
        await fsx.copy(delb, `./XliconMedia/audio/${q}.mp3`);
        fs.writeFileSync('./XliconMedia/database/xliconvn.json', JSON.stringify(VoiceNoteXlicon));
        fs.unlinkSync(delb);
        replygcxlicon(`✅ Success Adding Audio\nCheck by typing ${prefix}listvn`);
      }
      break;
      
      case 'delvn': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (args.length < 1) return replygcxlicon('❌ Enter the vn name');
        if (!VoiceNoteXlicon.includes(q)) return replygcxlicon("❌ The name does not exist in the database");
        let wanu = VoiceNoteXlicon.indexOf(q);
        VoiceNoteXlicon.splice(wanu, 1);
        fs.writeFileSync('./XliconMedia/database/xliconvn.json', JSON.stringify(VoiceNoteXlicon));
        fs.unlinkSync(`./XliconMedia/audio/${q}.mp3`);
        replygcxlicon(`✅ Success deleting vn ${q}`);
      }
      break;
      
      case 'listvn': {
        let teks = '🎵┌──⭓「 *VN List* 」\n│\n';
        for (let x of VoiceNoteXlicon) {
            teks += `│🎶 ${x}\n`;
        }
        teks += `│\n└────────────⭓\n\n*Totally there are: ${VoiceNoteXlicon.length}*`;
        replygcxlicon(teks);
      }
      break;
      
      case 'addzip': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (args.length < 1) return replygcxlicon('📦 What’s the zip name?');
        let teks = `${text}`;
        {
            if (ZipXlicon.includes(teks)) return replygcxlicon("❌ This name is already in use");
            let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            ZipXlicon.push(teks);
            await fsx.copy(delb, `./XliconMedia/zip/${teks}.zip`);
            fs.writeFileSync('./XliconMedia/database/zip.json', JSON.stringify(ZipXlicon));
            fs.unlinkSync(delb);
            replygcxlicon(`✅ Success Adding Zip\nTo check type ${prefix}listzip`);
        }
      }
      break;
      
      case 'delzip': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (args.length < 1) return replygcxlicon('❌ Enter the text in the zip list');
        let teks = `${text}`;
        {
            if (!ZipXlicon.includes(teks)) return replygcxlicon("❌ This name does not exist in the database");
            let wanu = ZipXlicon.indexOf(teks);
            ZipXlicon.splice(wanu, 1);
            fs.writeFileSync('./XliconMedia/database/zip.json', JSON.stringify(ZipXlicon));
            fs.unlinkSync(`./XliconMedia/zip/${teks}.zip`);
            replygcxlicon(`✅ Successfully deleted zip ${teks}`);
        }
      }
      break;
      
      case 'listzip': {
        let teksooooo = '📦┌──⭓「 *ZIP LIST* 」\n│\n';
        for (let x of ZipXlicon) {
            teksooooo += `│🗂️ ${x}\n`;
        }
        teksooooo += `│\n└────────────⭓\n\n*Total: ${ZipXlicon.length}*`;
        replygcxlicon(teksooooo);
      }
      break;
      
      
      case 'addapk': {
        if (!XliconTheCreator) return XliconStickOwner();
      
        if (args.length < 1) return replygcxlicon('📱 What is the name of the apk?');
        let teks = `${text}`;
        {
            if (ApkXlicon.includes(teks)) return replygcxlicon("❌ This name is already in use");
            let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            ApkXlicon.push(teks);
            await fsx.copy(delb, `./XliconMedia/apk/${teks}.apk`);
            fs.writeFileSync('./XliconMedia/database/apk.json', JSON.stringify(ApkXlicon));
            fs.unlinkSync(delb);
            replygcxlicon(`✅ Successfully added apk\nTo Check type ${prefix}listapk`);
        }
      }
      break;
      
      case 'delapk': {
        if (!XliconTheCreator) return XliconStickOwner();
      
        if (args.length < 1) return replygcxlicon('❌ Enter the name of the apk to delete');
        let teks = `${text}`;
        {
            if (!ApkXlicon.includes(teks)) return replygcxlicon("❌ This name does not exist in the database");
            let wanu = ApkXlicon.indexOf(teks);
            ApkXlicon.splice(wanu, 1);
            fs.writeFileSync('./XliconMedia/database/apk.json', JSON.stringify(ApkXlicon));
            fs.unlinkSync(`./XliconMedia/apk/${teks}.apk`);
            replygcxlicon(`✅ Successfully deleted Apk: ${teks}`);
        }
      }
      break;
      
      case 'listapk': {
        let teksoooooo = '📱┌──⭓「 *APK LIST* 」\n│\n';
        for (let x of ApkXlicon) {
            teksoooooo += `│📦 ${x}\n`;
        }
        teksoooooo += `│\n└────────────⭓\n\n*Total: ${ApkXlicon.length} APKs*`;
        replygcxlicon(teksoooooo);
      }
      break;
      
      case 'addpdf': {
        if (!XliconTheCreator) return XliconStickOwner();
      
        if (args.length < 1) return replygcxlicon('📄 What is the name of the pdf?');
        let teks = `${text}`;
        {
            if (DocXlicon.includes(teks)) return replygcxlicon("❌ This name is already in use");
            let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            DocXlicon.push(teks);
            await fsx.copy(delb, `./XliconMedia/doc/${teks}.pdf`);
            fs.writeFileSync('./XliconMedia/database/doc.json', JSON.stringify(DocXlicon));
            fs.unlinkSync(delb);
            replygcxlicon(`✅ Successfully added PDF\nTo check type ${prefix}listpdf`);
        }
      }
      break;
      
      case 'delpdf': {
        if (!XliconTheCreator) return XliconStickOwner();
      
        if (args.length < 1) return replygcxlicon('❌ Enter the name of the PDF to delete');
        let teks = `${text}`;
        {
            if (!DocXlicon.includes(teks)) return replygcxlicon("❌ This name does not exist in the database");
            let wanu = DocXlicon.indexOf(teks);
            DocXlicon.splice(wanu, 1);
            fs.writeFileSync('./XliconMedia/database/doc.json', JSON.stringify(DocXlicon));
            fs.unlinkSync(`./XliconMedia/doc/${teks}.pdf`);
            replygcxlicon(`✅ Successfully deleted PDF: ${teks}`);
        }
      }
      break;
      
      case 'listpdf': {
        let teksoooo = '📄┌──⭓「 *PDF LIST* 」\n│\n';
        for (let x of DocXlicon) {
            teksoooo += `│📑 ${x}\n`;
        }
        teksoooo += `│\n└────────────⭓\n\n*Total: ${DocXlicon.length} PDFs*`;
        replygcxlicon(teksoooo);
      }
      break;
      
      case 'addmsg': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (!m.quoted) return replygcxlicon('🔄 Please reply to the message you want to save in the database');
        if (!text) return replygcxlicon(`💡 Example: ${prefix + command} file name`);
        
        let msgs = global.db.database;
        if (text.toLowerCase() in msgs) return replygcxlicon(`❌ '${text}' is already registered in the message list`);
        
        msgs[text.toLowerCase()] = m.quoted;
        delete msgs[text.toLowerCase()].chat;
        
        replygcxlicon(`✅ Successfully added the message to the message list as '${text}'\nAccess it with ${prefix}getmsg ${text}\nView the list of messages with ${prefix}listmsg`);
      }
      break;
      
      case 'delmsg': case 'deletemsg': {
        if (!XliconTheCreator) return XliconStickOwner();
        if (!text) return replygcxlicon('❌ What is the name of the message you want to delete?');
        
        let msgs = global.db.database;
        if (text == 'allmsg') {
            global.db.database = {};
            replygcxlicon('🧹 Successfully deleted all messages from the message list');
        } else {
            if (!(text.toLowerCase() in msgs)) return replygcxlicon(`❌ '${text}' not found in the message list`);
            delete msgs[text.toLowerCase()];
            replygcxlicon(`✅ Successfully deleted '${text}' from the message list`);
        }
      }
      break;
      
      case 'getmsg': {
        if (!text) return replygcxlicon(`💡 Example: ${prefix + command} file name\n\nYou can view the list of messages with ${prefix}listmsg`);
        
        let msgs = global.db.database;
        if (!(text.toLowerCase() in msgs)) return replygcxlicon(`❌ '${text}' not found in the message list`);
        
        await XliconBotInc.relayMessage(m.chat, msgs[text.toLowerCase()], {});
      }
      b



//--------------------------------------------------------------------------------------------------//



// █▄ ▄█ █▀▀ █▄ █ █ █   █▀▀ █▀█ █▄ ▄█ █▄ ▄█ ▄▀▄ █▄ █ █▀▄ █▀▀ 
// █ ▀ █ ██▄ █ ▀█ █▄█   █▄▄ █▄█ █ ▀ █ █ ▀ █ █▀█ █ ▀█ █▄▀ ▄██ 
		
      
			

    
      

			// Menu
		    case 'menu': case 'help': case 'alive': {
            const timestampe = speed()
            const latensie = speed() - timestampe
            const a = db.users[sender]
            const me = m.sender
			const xmenu_oh = `
╭───❍「 *🤖 GREETING* 」
│ ✨ *Hello!* 👋
│ 🏷️ *Name* : ${m.pushName || 'No Name'}
│ 🎉 *${xliconytimewisher}* 😄
╰───────────❍
${readmore}
╭───❍「 *👤 USER INFO* 」
│ 🪪 *Name* : ${m.pushName || 'No Name'}
│ 📱 *Number* : +${me.split('@')[0]}
│ 🆔 *ID* : @${m.sender.split('@')[0]}
│ 🌟 *Status* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
│ 🎯 *Limit* : ${isVip ? 'VIP' : global.db.users[m.sender].limit}
│ 💰 *Money* : ${global.db.users[m.sender]?.uang.toLocaleString('en-IN') || '0'}
╰───────────❍

╭───❍「 *📊 BOT INFO* 」
│ ⚡ *Speed* : ${latensie.toFixed(4)} ms
│ ⏳ *Runtime* : ${runtime(process.uptime())}
│ 🏠 *Host* : ${os.hostname()}
│ 💻 *Platform* : ${os.platform()}
│ 🤖 *Bot Name* : ${global.botname}
│ 👑 *Owner* : @${ownernumber[0].split('@')[0]}
│ 🌐 *Mode* : ${XliconBotInc.public ? 'Public' : 'Self'}
│ 👥 *Total Users* : ${Object.keys(global.db.users).length}
│ 📈 *Total Hits* : ${global.db.settings[botNumber].totalhit}
│ 💬 *Total Chats* : ${Object.keys(global.db.groups).length}
│ ✳️ *Prefix* : ${xprefix}
╰───────────❍

╭───❍「 *🕒 TIME INFO* 」
│ 📅 *Date* : ${xdate}
│ 📆 *Day* : ${xday}
│ 🕰️ *Time* : ${xtime}
╰───────────❍

╭───❍「 *📜 MENU* 」
│ 🗂️ ${prefix}allmenu
│ 🔍 ${prefix}searchmenu
│ 📥 ${prefix}downloadmenu
│ 🎮 ${prefix}gamemenu
│ 🎭 ${prefix}funmenu
│ 🤖 ${prefix}aimenu
│ 👥 ${prefix}groupmenu
│ 👑 ${prefix}ownermenu
│ 🔄 ${prefix}convertmenu
│ 📃 ${prefix}listmenu
│ 🛐 ${prefix}religionmenu
│ 🎌 ${prefix}animemenu
│ 🖼️ ${prefix}randomphotomenu
│ 🎥 ${prefix}randomvideomenu
│ 🖌️ ${prefix}stickermenu
│ 💾 ${prefix}databasemenu
│ 🛍️ ${prefix}storemenu
│ 🔍 ${prefix}stalkermenu
│ ⚙️ ${prefix}othermenu
╰───────────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}


break
case 'allmenu': {
let xmenu_oh = `
╭──❍「 *🤖 GREETING* 」❍
├ ✨ *Hi 👋*
├ 🏷️ *Name* : ${m.pushName || 'No Name'}
├ 🎉 *${xliconytimewisher}* 😄
╰─┬────❍ ${readmore}
╭─┴❍「 *📖 GUIDE* 」❍
├ 🅞 = 👑 *For Owner*
├ 🅕 = 🌟 *For Free User*
├ 🅟 = 💎 *For Premium User*
╰─┬────❍
╭─┴❍「 *👑 Owner* 」❍
│${setv} ${prefix}delsession 🅞
│${setv} ${prefix}update-repo 🅞
│${setv} ${prefix}addbadword 🅞
│${setv} ${prefix}delbadword 🅞
│${setv} ${prefix}autoread 🅞
│${setv} ${prefix}autobio 🅞
│${setv} ${prefix}autotype 🅞
│${setv} ${prefix}unavailable 🅞
│${setv} ${prefix}autorecord 🅞
│${setv} ${prefix}autorecordtype 🅞
│${setv} ${prefix}autoswview 🅞
│${setv} ${prefix}setautoblock 🅞
│${setv} ${prefix}setantiforeign 🅞
│${setv} ${prefix}autoblock 🅞
│${setv} ${prefix}onlygc 🅞
│${setv} ${prefix}onlypc 🅞
│${setv} ${prefix}onlyindia 🅞
│${setv} ${prefix}onlyindo 🅞
│${setv} ${prefix}anticall 🅞
│${setv} ${prefix}self 🅞
│${setv} ${prefix}public 🅞
│${setv} ${prefix}join 🅞
│${setv} ${prefix}poll 🅞
│${setv} ${prefix}spam 🅞
│${setv} ${prefix}bc 🅞
│${setv} ${prefix}bcgroup 🅞
│${setv} ${prefix}setmenu 🅞
│${setv} ${prefix}setimgmenu 🅞
│${setv} ${prefix}setvidmenu 🅞
│${setv} ${prefix}setgifmenu 🅞
│${setv} ${prefix}setreply 🅞
│${setv} ${prefix}resethit 🅞
│${setv} ${prefix}resetuser 🅞
│${setv} ${prefix}creategc 🅞
│${setv} ${prefix}setexif 🅞
│${setv} ${prefix}getexif 🅞
│${setv} ${prefix}getautoblocknumber 🅞
│${setv} ${prefix}getantiforeignnumber 🅞
│${setv} ${prefix}userjid 🅞
│${setv} ${prefix}setbotbio 🅞
│${setv} ${prefix}delppbot 🅞
│${setv} ${prefix}shutdown 🅞
│${setv} ${prefix}setppbot 🅞
│${setv} ${prefix}addprem 🅞
│${setv} ${prefix}delprem 🅞
│${setv} ${prefix}addowner 🅞
│${setv} ${prefix}delowner 🅞
│${setv} ${prefix}addvn 🅞
│${setv} ${prefix}addapk 🅞
│${setv} ${prefix}addzip 🅞
│${setv} ${prefix}addpdf 🅞
│${setv} ${prefix}delapk 🅞
│${setv} ${prefix}delzip 🅞
│${setv} ${prefix}delpdf 🅞
│${setv} ${prefix}delvn 🅞
│${setv} ${prefix}addsticker 🅞
│${setv} ${prefix}delsticker 🅞
│${setv} ${prefix}addimage 🅞
│${setv} ${prefix}delimage 🅞
│${setv} ${prefix}addvideo 🅞
│${setv} ${prefix}delvideo 🅞
│${setv} ${prefix}upswtext 🅞
│${setv} ${prefix}upswvideo 🅞
│${setv} ${prefix}upswimage 🅞
│${setv} ${prefix}upswaudio 🅞
│${setv} ${prefix}autosticker 🅞
│${setv} ${prefix}block 🅞
│${setv} ${prefix}unblock 🅞
│${setv} ${prefix}leavegc 🅞
│${setv} ${prefix}pushcontact 🅞
│${setv} ${prefix}pushcontactv2 🅞
│${setv} ${prefix}pushcontactv3 🅞
│${setv} ${prefix}jpm 🅞
│${setv} ${prefix}checkmember 🅞
│${setv} ${prefix}post 🅞
│${setv} ${prefix}clearchat 🅞
│${setv} ${prefix}setprefix 🅞
│${setv} $ 🅞
│${setv} > 🅞
│${setv} < 🅞
╰─┬────❍
╭─┴❍「 *👥 Group* 」❍
│${setv} ${prefix}antibot 🅖
│${setv} ${prefix}antiviewonce 🅖
│${setv} ${prefix}readviewonce 🅖
│${setv} ${prefix}welcome 🅖
│${setv} ${prefix}adminevent 🅖
│${setv} ${prefix}groupevent 🅖
│${setv} ${prefix}antiforeign 🅖
│${setv} ${prefix}antimedia 🅖
│${setv} ${prefix}antiaudio 🅖
│${setv} ${prefix}antivideo 🅖
│${setv} ${prefix}antiimage 🅖
│${setv} ${prefix}antidocument 🅖
│${setv} ${prefix}antilocation 🅖
│${setv} ${prefix}anticontact 🅖
│${setv} ${prefix}antisticker 🅖
│${setv} ${prefix}antipoll 🅖
│${setv} ${prefix}antilink 🅖
│${setv} ${prefix}antiemoji 🅖
│${setv} ${prefix}antipromotion 🅖
│${setv} ${prefix}antivirtex 🅖
│${setv} ${prefix}grouplink 🅖
│${setv} ${prefix}listadmin 🅖
│${setv} ${prefix}invite 🅖
│${setv} ${prefix}ephemeral 🅖
│${setv} ${prefix}delete 🅖
│${setv} ${prefix}setppgroup 🅖
│${setv} ${prefix}delppgroup 🅖
│${setv} ${prefix}setnamegc 🅖
│${setv} ${prefix}setdesc 🅖
│${setv} ${prefix}add 🅖
│${setv} ${prefix}kick 🅖
│${setv} ${prefix}promote 🅖
│${setv} ${prefix}demote 🅖
│${setv} ${prefix}kickall 🅖
│${setv} ${prefix}promoteall 🅖
│${setv} ${prefix}demoteall 🅖
│${setv} ${prefix}getcontact 🅞
│${setv} ${prefix}savecontact 🅞
│${setv} ${prefix}sendcontact 🅞
│${setv} ${prefix}contactag 🅞
│${setv} ${prefix}hidetag 🅖
│${setv} ${prefix}totag 🅖
│${setv} ${prefix}tagall 🅖
│${setv} ${prefix}editinfo 🅖
│${setv} ${prefix}opentime 🅖
│${setv} ${prefix}closetime 🅖
│${setv} ${prefix}resetlink 🅖
│${setv} ${prefix}getbio 🅖
│${setv} ${prefix}vote 🅖
│${setv} ${prefix}upvote 🅖
│${setv} ${prefix}downvote 🅖
│${setv} ${prefix}checkvote 🅖
│${setv} ${prefix}delvote 🅖
│${setv} ${prefix}antivirus 🅖
│${setv} ${prefix}antibadword 🅖
│${setv} ${prefix}nsfw 🅖
│${setv} ${prefix}react 🅖
│${setv} ${prefix}getjoinrequest 🅖
╰─┬────❍
╭─┴❍「 *🔍 Search* 」❍
│${setv} ${prefix}google 🅕
│${setv} ${prefix}wikipedia 🅕
│${setv} ${prefix}ytsearch 🅕
│${setv} ${prefix}apksearch 🅕
│${setv} ${prefix}stickersearch 🅕
│${setv} ${prefix}imdb 🅕
│${setv} ${prefix}wanumber 🅕
│${setv} ${prefix}friend 🅕
│${setv} ${prefix}lyrics 🅕
│${setv} ${prefix}pixiv 🅕
╰─┬────❍
╭─┴❍「 *📥 Download* 」❍
│${setv} ${prefix}itunes 🅕
│${setv} ${prefix}play 🅕
│${setv} ${prefix}play2 🅕
│${setv} ${prefix}ytplay - termux 🅕
│${setv} ${prefix}ytmp3 - termux 🅕
│${setv} ${prefix}ytmp4 - termux 🅕
│${setv} ${prefix}yta 🅕
│${setv} ${prefix}ytv 🅕
│${setv} ${prefix}yta2 🅕
│${setv} ${prefix}ytv2 🅕
│${setv} ${prefix}image 🅕
│${setv} ${prefix}gimage 🅕
│${setv} ${prefix}live-wallpaper 🅕
│${setv} ${prefix}tiktok 🅕
│${setv} ${prefix}tiktokaudio 🅕
│${setv} ${prefix}tiktokvideo 🅕
│${setv} ${prefix}likee 🅕
│${setv} ${prefix}capcut 🅕
│${setv} ${prefix}instagram 🅕
│${setv} ${prefix}igimg 🅕
│${setv} ${prefix}facebook 🅕
│${setv} ${prefix}twitter 🅕
│${setv} ${prefix}apk 🅕
│${setv} ${prefix}bilibili 🅕
│${setv} ${prefix}dailymotion 🅕
│${setv} ${prefix}mega 🅕
│${setv} ${prefix}mediafire 🅕
│${setv} ${prefix}searchsoundcloud 🅕
│${setv} ${prefix}soundcloud 🅕
│${setv} ${prefix}google 🅕
│${setv} ${prefix}gimage 🅕
│${setv} ${prefix}weather 🅕
│${setv} ${prefix} 🅟
│${setv} ${prefix}gitclone 🅕
│${setv} ${prefix}happymod 🅕
│${setv} ${prefix}gdrive 🅕
│${setv} ${prefix}pinterest 🅕
│${setv} ${prefix}pindl 🅕
│${setv} ${prefix}ringtone 🅕
│${setv} ${prefix}autodownload 🅞
╰─┬────❍
╭─┴❍「 *🔨 Tool Menu* 」❍
│${setv} ${prefix}obfuscate 🅕
│${setv} ${prefix}styletext 🅕
│${setv} ${prefix}fliptext 🅕
│${setv} ${prefix}tts 🅕
│${setv} ${prefix}say 🅕
│${setv} ${prefix}togif 🅕
│${setv} ${prefix}toqr 🅕
│${setv} ${prefix}bass 🅕
│${setv} ${prefix}blown 🅕
│${setv} ${prefix}deep 🅕
│${setv} ${prefix}earrape 🅕
│${setv} ${prefix}fast 🅕
│${setv} ${prefix}fat 🅕
│${setv} ${prefix}nightcore 🅕
│${setv} ${prefix}reverse 🅕
│${setv} ${prefix}robot 🅕
│${setv} ${prefix}slow 🅕
│${setv} ${prefix}smooth 🅕
│${setv} ${prefix}squirrel 🅕
│${setv} ${prefix}tinyurl 🅕
│${setv} ${prefix}tovn 🅕
│${setv} ${prefix}t 🅕
│${setv} ${prefix}toaudio 🅕
│${setv} ${prefix}tomp3 🅕
│${setv} ${prefix}tomp4🅕
│${setv} ${prefix}toimg 🅕
│${setv} ${prefix}toonce 🅕
│${setv} ${prefix}toptv 🅕
│${setv} ${prefix}sticker 🅕
│${setv} ${prefix}smeme 🅕
│${setv} ${prefix}smeta 🅕
│${setv} ${prefix}take 🅟
│${setv} ${prefix}emojimix 🅕
│${setv} ${prefix}volaudio 🅕
│${setv} ${prefix}volvideo 🅕
│${setv} ${prefix}ebinary 🅕
│${setv} ${prefix}dbinary 🅕
│${setv} ${prefix}ssweb 🅕
│${setv} ${prefix}quoted 🅕
│${setv} ${prefix}translate 🅕
│${setv} ${prefix}get 🅕
│${setv} ${prefix}tourl 🅕
│${setv} ${prefix}write 🅕
╰─┬────❍
╭─┴❍「 *📃 List Menu* 」❍
│${setv} ${prefix}listprem 🅕
│${setv} ${prefix}listowner 🅕
│${setv} ${prefix}liststicker 🅕
│${setv} ${prefix}listimage 🅕
│${setv} ${prefix}listvideo 🅕
│${setv} ${prefix}listvn 🅕
│${setv} ${prefix}listapk 🅕
│${setv} ${prefix}listzip 🅕
│${setv} ${prefix}listpdf 🅕
│${setv} ${prefix}listbadword 🅕
│${setv} ${prefix}listpc 🅕
│${setv} ${prefix}listgc 🅕
╰─┬────❍
╭─┴❍「 *🖼️ Random Photo* 」❍
│${setv} ${prefix}aesthetic 🅕
│${setv} ${prefix}coffee 🅕
│${setv} ${prefix}wikimedia 🅕
│${setv} ${prefix}wallpaper 🅕
│${setv} ${prefix}art 🅕
│${setv} ${prefix}bts 🅕
│${setv} ${prefix}dogwoof 🅕
│${setv} ${prefix}catmeow 🅕
│${setv} ${prefix}lizardpic 🅕
│${setv} ${prefix}goosebird 🅕
│${setv} ${prefix}8ballpool 🅕
│${setv} ${prefix}cosplay 🅕
│${setv} ${prefix}hacker 🅕
│${setv} ${prefix}cyber 🅕
│${setv} ${prefix}gamewallpaper 🅕
│${setv} ${prefix}islamic 🅕
│${setv} ${prefix}jennie 🅕
│${setv} ${prefix}jiso 🅕
│${setv} ${prefix}satanic 🅕
│${setv} ${prefix}justina 🅕
│${setv} ${prefix}cartoon 🅕
│${setv} ${prefix}pentol 🅕
│${setv} ${prefix}cat 🅕
│${setv} ${prefix}kpop 🅕
│${setv} ${prefix}exo 🅕
│${setv} ${prefix}lisa 🅕
│${setv} ${prefix}space 🅕
│${setv} ${prefix}car 🅕
│${setv} ${prefix}technology 🅕
│${setv} ${prefix}bike 🅕
│${setv} ${prefix}shortquote 🅕
│${setv} ${prefix}antiwork 🅕
│${setv} ${prefix}hacking 🅕
│${setv} ${prefix}boneka 🅕
│${setv} ${prefix}rose 🅕
│${setv} ${prefix}ryujin 🅕
│${setv} ${prefix}ulzzangboy 🅕
│${setv} ${prefix}ulzzanggirl 🅕
│${setv} ${prefix}wallml 🅕
│${setv} ${prefix}wallphone 🅕
│${setv} ${prefix}mountain 🅕
│${setv} ${prefix}goose 🅕
│${setv} ${prefix}profilepic 🅕
│${setv} ${prefix}couplepp 🅕
│${setv} ${prefix}programming 🅕
│${setv} ${prefix}pubg 🅕
│${setv} ${prefix}blackpink 🅕
│${setv} ${prefix}randomboy 🅕  
│${setv} ${prefix}randomgirl 🅕
│${setv} ${prefix}hijab 🅕  
│${setv} ${prefix}chinese 🅕
│${setv} ${prefix}indo 🅕
│${setv} ${prefix}japanese 🅕
│${setv} ${prefix}korean 🅕
│${setv} ${prefix}malay 🅕
│${setv} ${prefix}thai 🅕
│${setv} ${prefix}vietnamese 🅕
╰─┬────❍
╭─┴❍「 *🎥 Random Video* 」❍
│${setv} ${prefix}tiktokgirl 🅕
│${setv} ${prefix}tiktoknukthy 🅕
│${setv} ${prefix}tiktokkayes 🅕
│${setv} ${prefix}tiktokpanrika 🅕
│${setv} ${prefix}tiktoknotnot 🅕
│${setv} ${prefix}tiktokghea 🅕
│${setv} ${prefix}tiktoksantuy 🅕
│${setv} ${prefix}tiktokbocil 🅕
╰─┬────❍
╭─┴❍「 *🔍 Stalker* 」❍
│${setv} ${prefix}tiktokstalk 🅕
│${setv} ${prefix}mlstalk 🅕
│${setv} ${prefix}npmstalk 🅕
│${setv} ${prefix}ghstalk 🅕
│${setv} ${prefix}telestalk 🅕
│${setv} ${prefix}wachannelstalk 🅕
╰─┬────❍
╭─┴❍「 *🤖 OpenAI* 」❍
│${setv} ${prefix}🅕
│${setv} ${prefix}travel-assistant 🅕
│${setv} ${prefix}realistic 🅕
│${setv} ${prefix}mangaimg 🅕
│${setv} ${prefix}animeimg 🅕
│${setv} ${prefix}lexica 🅕
│${setv} ${prefix}chechkgpt 🅕
│${setv} ${prefix}3dmodel 🅕
│${setv} ${prefix}photoleap 🅕
│${setv} ${prefix}chatgpt 🅕
│${setv} ${prefix}darky 🅕
│${setv} ${prefix}bing 🅕
│${setv} ${prefix}mathsai 🅕
│${setv} ${prefix}openai 🅕
│${setv} ${prefix}dalle 🅕
│${setv} ${prefix}stablediffusion 🅕
│${setv} ${prefix}ai 🅕
│${setv} ${prefix}remini 🅕
╰─┬────❍
╭─┴❍「 *🎮 Game* 」❍
│${setv} ${prefix}truth 🅕
│${setv} ${prefix}dare 🅕
│${setv} ${prefix}suit 🅕
│${setv} ${prefix}tictactoe 🅕
│${setv} ${prefix}math 🅕
│${setv} ${prefix}playbomb 🅕
│${setv} ${prefix}casino 🅕
│${setv} ${prefix}rob 🅕
│${setv} ${prefix}slot 🅕
│${setv} ${prefix}dice 🅕 
│${setv} ${prefix}profile 🅕
│${setv} ${prefix}claim 🅕
│${setv} ${prefix}tmoney 🅕
│${setv} ${prefix}tflimit 🅕
╰─┬────❍
╭─┴❍「 *🎭 Fun* 」❍
│${setv} ${prefix}define 🅕
│${setv} ${prefix}readmore 🅕
│${setv} ${prefix}yomamajoke 🅕
│${setv} ${prefix}fact 🅕
│${setv} ${prefix}couple 🅕
│${setv} ${prefix}soulmate 🅕
│${setv} ${prefix}stupidcheck 🅕
│${setv} ${prefix}handsomecheck 🅕
│${setv} ${prefix}uncleancheck 🅕
│${setv} ${prefix}hotcheck 🅕
│${setv} ${prefix}smartcheck 🅕
│${setv} ${prefix}greatcheck 🅕
│${setv} ${prefix}evilcheck 🅕
│${setv} ${prefix}dogcheck 🅕
│${setv} ${prefix}coolcheck 🅕
│${setv} ${prefix}waifucheck 🅕
│${setv} ${prefix}awesomecheck 🅕
│${setv} ${prefix}gaycheck 🅕
│${setv} ${prefix}cutecheck 🅕
│${setv} ${prefix}lesbiancheck 🅕
│${setv} ${prefix}hornycheck 🅕
│${setv} ${prefix}prettycheck 🅕
│${setv} ${prefix}lovelycheck 🅕
│${setv} ${prefix}uglycheck 🅕
│${setv} ${prefix}pick 🅕
│${setv} ${prefix}pickupline 🅕
│${setv} ${prefix}quotes 🅕
│${setv} ${prefix}can 🅕
│${setv} ${prefix}is 🅕
│${setv} ${prefix}when 🅕
│${setv} ${prefix}where 🅕
│${setv} ${prefix}what 🅕
│${setv} ${prefix}how 🅕
│${setv} ${prefix}rate 🅕
│${setv} ${prefix}cry 🅕
│${setv} ${prefix}kill 🅕
│${setv} ${prefix}hug 🅕
│${setv} ${prefix}pat 🅕
│${setv} ${prefix}lick 🅕 
│${setv} ${prefix}kiss 🅕
│${setv} ${prefix}bite 🅕
│${setv} ${prefix}yeet 🅕
│${setv} ${prefix}bully 🅕
│${setv} ${prefix}bonk 🅕
│${setv} ${prefix}wink 🅕
│${setv} ${prefix}poke 🅕
│${setv} ${prefix}nom 🅕
│${setv} ${prefix}slap 🅕
│${setv} ${prefix}smile 🅕 
│${setv} ${prefix}wave 🅕
│${setv} ${prefix}awoo 🅕
│${setv} ${prefix}blush 🅕
│${setv} ${prefix}smug 🅕
│${setv} ${prefix}glomp 🅕 
│${setv} ${prefix}happy 🅕
│${setv} ${prefix}dance 🅕
│${setv} ${prefix}cringe 🅕
│${setv} ${prefix}cuddle 🅕
│${setv} ${prefix}highfive 🅕 
│${setv} ${prefix}handhold 🅕
│${setv} ${prefix}spank 🅕
│${setv} ${prefix}tickle 🅕
│${setv} ${prefix}feed 🅕
│${setv} ${prefix}checkme 🅕
│${setv} ${prefix}sound1 - sound161 🅕
╰─┬────❍
╭─┴❍「 *🖌️ Sticker* 」❍
│${setv} ${prefix}goose 🅕
│${setv} ${prefix}woof 🅕
│${setv} ${prefix}8ball 🅕
│${setv} ${prefix}lizard 🅕
│${setv} ${prefix}meow 🅕
│${setv} ${prefix}gura 🅕
│${setv} ${prefix}telestick 🅕
╰─┬────❍
╭─┴❍「 *🎌 Anime* 」❍
│${setv} ${prefix}searchanime 🅕
│${setv} ${prefix}animeinfo  🅕
│${setv} ${prefix}animeid 🅕
│${setv} ${prefix}animedl 🅕
│${setv} ${prefix}searchmanga 🅕
│${setv} ${prefix}amv 🅕
│${setv} ${prefix}mangainfo 🅕
│${setv} ${prefix}searchchapter 🅕
│${setv} ${prefix}mangachapter 🅕
│${setv} ${prefix}mangachapter2 🅕
│${setv} ${prefix}randommanga 🅕
│${setv} ${prefix}stickhandhold 🅕
│${setv} ${prefix}stickshinobu 🅕
│${setv} ${prefix}stickcuddle 🅕
│${setv} ${prefix}stickhighfive 🅕
│${setv} ${prefix}stickdance 🅕
│${setv} ${prefix}stickcringe 🅕
│${setv} ${prefix}stickhappy 🅕
│${setv} ${prefix}stickglomp 🅕
│${setv} ${prefix}sticksmug 🅕
│${setv} ${prefix}stickblush 🅕
│${setv} ${prefix}stickawoo 🅕
│${setv} ${prefix}stickwave 🅕
│${setv} ${prefix}sticksmile 🅕
│${setv} ${prefix}stickslap 🅕
│${setv} ${prefix}stickpoke 🅕
│${setv} ${prefix}stickwink 🅕
│${setv} ${prefix}stickbonk 🅕
│${setv} ${prefix}stickbully 🅕
│${setv} ${prefix}stickyeet 🅕
│${setv} ${prefix}stickbike 🅕
│${setv} ${prefix}stickkiss 🅕
│${setv} ${prefix}sticklick 🅕
│${setv} ${prefix}stickpat 🅕
│${setv} ${prefix}stickhug 🅕
│${setv} ${prefix}stickkill 🅕
│${setv} ${prefix}stickcry 🅕
│${setv} ${prefix}stickspank 🅕
│${setv} ${prefix}sticktickle 🅕
│${setv} ${prefix}traceanime 🅕
│${setv} ${prefix}akira 🅕
│${setv} ${prefix}akiyama 🅕
│${setv} ${prefix}ana 🅕
│${setv} ${prefix}asuna 🅕
│${setv} ${prefix}ayuzawa 🅕
│${setv} ${prefix}boruto 🅕
│${setv} ${prefix}chiho 🅕
│${setv} ${prefix}chitoge 🅕
│${setv} ${prefix}cosplayloli 🅕
│${setv} ${prefix}cosplaysagiri 🅕
│${setv} ${prefix}deidara 🅕
│${setv} ${prefix}doraemon 🅕
│${setv} ${prefix}elaina 🅕
│${setv} ${prefix}emilia 🅕
│${setv} ${prefix}erza 🅕
│${setv} ${prefix}gremory 🅕
│${setv} ${prefix}hestia 🅕
│${setv} ${prefix}husbu 🅕
│${setv} ${prefix}inori 🅕
│${setv} ${prefix}isuzu 🅕
│${setv} ${prefix}itachi 🅕
│${setv} ${prefix}itori 🅕
│${setv} ${prefix}kaga 🅕
│${setv} ${prefix}kagura 🅕
│${setv} ${prefix}kakasih 🅕
│${setv} ${prefix}kaori 🅕
│${setv} ${prefix}keneki 🅕
│${setv} ${prefix}kotori 🅕
│${setv} ${prefix}kurumi 🅕
│${setv} ${prefix}loli 🅕
│${setv} ${prefix}loli2 🅕
│${setv} ${prefix}madara 🅕
│${setv} ${prefix}megumin 🅕
│${setv} ${prefix}mikasa 🅕
│${setv} ${prefix}mikey 🅕
│${setv} ${prefix}miku 🅕
│${setv} ${prefix}minato 🅕
│${setv} ${prefix}naruto 🅕
│${setv} ${prefix}neko 🅕
│${setv} ${prefix}nekonime 🅕
│${setv} ${prefix}nezuko 🅕
│${setv} ${prefix}onepiece 🅕
│${setv} ${prefix}pokemon 🅕
│${setv} ${prefix}randomnime 🅕
│${setv} ${prefix}randomnime2 🅕
│${setv} ${prefix}rize 🅕
│${setv} ${prefix}sagiri 🅕
│${setv} ${prefix}sakura 🅕
│${setv} ${prefix}sasuke 🅕
│${setv} ${prefix}shina 🅕
│${setv} ${prefix}shinka 🅕
│${setv} ${prefix}shinomiya 🅕
│${setv} ${prefix}shizuka 🅕
│${setv} ${prefix}shota 🅕
│${setv} ${prefix}tejina 🅕
│${setv} ${prefix}toukachan 🅕
│${setv} ${prefix}tsunade 🅕
│${setv} ${prefix}waifu 🅕
│${setv} ${prefix}waifu2 🅕
│${setv} ${prefix}animewall 🅕
│${setv} ${prefix}yotsuba 🅕
│${setv} ${prefix}yuki 🅕
│${setv} ${prefix}yulibocil 🅕
│${setv} ${prefix}yumeko 🅕
│${setv} ${prefix}8ball 🅕
│${setv} ${prefix}animeawoo 🅕
│${setv} ${prefix}animemegumin 🅕
│${setv} ${prefix}animeshinobu 🅕
│${setv} ${prefix}animehandhold 🅕
│${setv} ${prefix}animehighfive 🅕
│${setv} ${prefix}animecringe 🅕
│${setv} ${prefix}animedance 🅕
│${setv} ${prefix}animehappy 🅕
│${setv} ${prefix}animeglomp 🅕
│${setv} ${prefix}animeblush 🅕
│${setv} ${prefix}animesmug 🅕
│${setv} ${prefix}animewave 🅕
│${setv} ${prefix}animesmille 🅕
│${setv} ${prefix}animepoke 🅕
│${setv} ${prefix}animewink 🅕
│${setv} ${prefix}animebonk 🅕
│${setv} ${prefix}animebully 🅕
│${setv} ${prefix}animeyeet 🅕
│${setv} ${prefix}animebite 🅕
│${setv} ${prefix}animelick 🅕
│${setv} ${prefix}animekill 🅕
│${setv} ${prefix}animecry 🅕
│${setv} ${prefix}animewlp 🅕
│${setv} ${prefix}animekiss 🅕
│${setv} ${prefix}animehug 🅕
│${setv} ${prefix}animeneko 🅕
│${setv} ${prefix}animepat 🅕
│${setv} ${prefix}animeslap 🅕
│${setv} ${prefix}animecuddle 🅕
│${setv} ${prefix}animewaifu 🅕
│${setv} ${prefix}animenom 🅕
│${setv} ${prefix}animefoxgirl 🅕
│${setv} ${prefix}animegecg 🅕
│${setv} ${prefix}animetickle 🅕
│${setv} ${prefix}animefeed 🅕
│${setv} ${prefix}animeavatar 🅕
│${setv} ${prefix}anime 🅕
│${setv} ${prefix}avatar 🅕
│${setv} ${prefix}shinobu 🅕
│${setv} ${prefix}fox_girl 🅕
│${setv} ${prefix}gecg 🅕 
╰─┬────❍
╭─┴❍「 *Anime NSFW* 」❍
│ *_Sorry USERS_*
│ > NO NSFW MENU AVAILABLE
╰─┬────❍
╭─┴❍「 *💾 Database* 」❍
│${setv} ${prefix}setcmd 🅞
│${setv} ${prefix}delcmd 🅞
│${setv} ${prefix}listcmd 🅕
│${setv} ${prefix}lockcmd 🅞
│${setv} ${prefix}addmsg 🅞
│${setv} ${prefix}delmsg 🅞
│${setv} ${prefix}getmsg 🅕
│${setv} ${prefix}listmsg 🅕
╰─┬────❍
╭─┴❍「 *🛍️ Store* 」❍
│${setv} ${prefix}list 🅕
│${setv} ${prefix}store 🅕
│${setv} ${prefix}shop 🅕
│${setv} ${prefix}addlist 🅞
│${setv} ${prefix}dellist 🅞
╰─┬────❍
╭─┴❍「 *🛐 Religon* 」❍
│${setv} ${prefix}bible 🅕
│${setv} ${prefix}quran 🅕
│${setv} ${prefix}gita 🅕
│${setv} ${prefix}namazchk 🅕
│${setv} ${prefix}prophetname 🅕
│${setv} ${prefix}prayertime 🅕
│${setv} ${prefix}sahihbukhari 🅕
│${setv} ${prefix}jamiattirmidhi 🅕
│${setv} ${prefix}sunanannasai 🅕
│${setv} ${prefix}sunanibnmajah 🅕
│${setv} ${prefix}sunanabudawud 🅕
│${setv} ${prefix}kisahnabi 🅕
│${setv} ${prefix}asmaulhusna 🅕
│${setv} ${prefix}duas 🅕
│${setv} ${prefix}namaz 🅕
│${setv} ${prefix}masnoonduas 🅕
│${setv} ${prefix}ayatalkursi 🅕
│${setv} ${prefix}niyatnamaz 🅕
│${setv} ${prefix}quotesislami 🅕
│${setv} ${prefix}assalamualaikum 🅕
╰─┬────❍
╭─┴❍「 *⚙️ Other* 」❍
│${setv} ${prefix}update 🅕
│${setv} ${prefix}cricket 🅕
│${setv} ${prefix}score 🅕
│${setv} ${prefix}ping 🅕
│${setv} ${prefix}menu 🅕
│${setv} ${prefix}myip 🅕
│${setv} ${prefix}repo 🅕
│${setv} ${prefix}reportbug 🅕
│${setv} ${prefix}idgroup 🅕
│${setv} ${prefix}owner 🅕
│${setv} ${prefix}rentbot 🅕
│${setv} ${prefix}donate 🅕
│${setv} ${prefix}runtime 🅕
│${setv} ${prefix}confess 🅕
│${setv} ${prefix}react 🅕
│${setv} ${prefix}q 🅕
│${setv} ${prefix}inspect 🅕
│${setv} ${prefix}tagme 🅕
│${setv} ${prefix}nowa 🅕
│${setv} ${prefix}truecaller 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'ownermenu': {
let xmenu_oh = `
╭───❍「 *🤖 GREETING* 」
│ ✨ *Hi!* 👋
│ 🏷️ *Name* : ${m.pushName || 'No Name'}
│ 🎉 *${xliconytimewisher}* 😄
╰─┬───────❍ ${readmore}
╭─┴──❍「 *🅞 GUIDE* 」❍
│ 👑 *For Owner* = 🅞
│ 💸 *For Free User* = 🅕
│ 🌟 *For Premium User* = 🅟
╰──┬──────❍
╭──┴─❍「 *👑 OWNER MENU* 」❍
│${setv} ${prefix}delsession 🅞
│${setv} ${prefix}update-repo 🅞
│ ${setv} ${prefix}addbadword 🅞
│ ${setv} ${prefix}delbadword 🅞
│ ${setv} ${prefix}autoread 🅞
│ ${setv} ${prefix}autobio 🅞
│ ${setv} ${prefix}autotype 🅞
│ ${setv} ${prefix}unavailable 🅞
│ ${setv} ${prefix}autorecord 🅞
│ ${setv} ${prefix}autorecordtype 🅞
│ ${setv} ${prefix}autoswview 🅞
│ ${setv} ${prefix}setautoblock 🅞
│ ${setv} ${prefix}setantiforeign 🅞
│ ${setv} ${prefix}autoblock 🅞
│ ${setv} ${prefix}onlygc 🅞
│ ${setv} ${prefix}onlypc 🅞
│ ${setv} ${prefix}onlyindia 🅞
│ ${setv} ${prefix}onlyindo 🅞
│ ${setv} ${prefix}anticall 🅞
│ ${setv} ${prefix}self 🅞
│ ${setv} ${prefix}public 🅞
│ ${setv} ${prefix}join 🅞
│ ${setv} ${prefix}poll 🅞
│ ${setv} ${prefix}spam 🅞
│ ${setv} ${prefix}bc 🅞
│ ${setv} ${prefix}bcgroup 🅞
│ ${setv} ${prefix}setmenu 🅞
│ ${setv} ${prefix}setimgmenu 🅞
│ ${setv} ${prefix}setvidmenu 🅞
│ ${setv} ${prefix}setgifmenu 🅞
│ ${setv} ${prefix}setreply 🅞
│ ${setv} ${prefix}resethit 🅞
│ ${setv} ${prefix}resetuser 🅞
│ ${setv} ${prefix}creategc 🅞
│ ${setv} ${prefix}setexif 🅞
│ ${setv} ${prefix}getexif 🅞
│ ${setv} ${prefix}getautoblocknumber 🅞
│ ${setv} ${prefix}getantiforeignnumber 🅞
│ ${setv} ${prefix}userjid 🅞
│ ${setv} ${prefix}setbotbio 🅞
│ ${setv} ${prefix}delppbot 🅞
│ ${setv} ${prefix}shutdown 🅞
│ ${setv} ${prefix}setppbot 🅞
│ ${setv} ${prefix}addprem 🅞
│ ${setv} ${prefix}delprem 🅞
│ ${setv} ${prefix}addowner 🅞
│ ${setv} ${prefix}delowner 🅞
│ ${setv} ${prefix}addvn 🅞
│ ${setv} ${prefix}addapk 🅞
│ ${setv} ${prefix}addzip 🅞
│ ${setv} ${prefix}addpdf 🅞
│ ${setv} ${prefix}delapk 🅞
│ ${setv} ${prefix}delzip 🅞
│ ${setv} ${prefix}delpdf 🅞
│ ${setv} ${prefix}delvn 🅞
│ ${setv} ${prefix}addsticker 🅞
│ ${setv} ${prefix}delsticker 🅞
│ ${setv} ${prefix}addimage 🅞
│ ${setv} ${prefix}delimage 🅞
│ ${setv} ${prefix}addvideo 🅞
│ ${setv} ${prefix}delvideo 🅞
│ ${setv} ${prefix}upswtext 🅞
│ ${setv} ${prefix}upswvideo 🅞
│ ${setv} ${prefix}upswimage 🅞
│ ${setv} ${prefix}upswaudio 🅞
│ ${setv} ${prefix}autosticker 🅞
│ ${setv} ${prefix}block 🅞
│ ${setv} ${prefix}unblock 🅞
│ ${setv} ${prefix}leavegc 🅞
│ ${setv} ${prefix}pushcontact 🅞
│ ${setv} ${prefix}pushcontactv2 🅞
│ ${setv} ${prefix}pushcontactv3 🅞
│ ${setv} ${prefix}jpm 🅞
│ ${setv} ${prefix}checkmember 🅞
│ ${setv} ${prefix}post 🅞
│ ${setv} ${prefix}clearchat 🅞
│ ${setv} ${prefix}setprefix 🅞
│ ${setv} $ 🅞
│ ${setv} > 🅞
│ ${setv} < 🅞
╰───────────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'groupmenu': {
let xmenu_oh = `
╭──❍「 🤖 GREETING 」❍
│ ✨ Hi! 👋
│ 🏷️ Name : ${m.pushName || 'No Name'}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 GUIDE 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
| *🛡️ For Group* = 🅖 
╰─┬────❍
╭─┴❍「 🛡️ GROUP 」❍
│ ${setv} ${prefix}antibot 🅖
│ ${setv} ${prefix}antiviewonce 🅖
│ ${setv} ${prefix}readviewonce 🅖
│ ${setv} ${prefix}welcome 🅖
│ ${setv} ${prefix}adminevent 🅖
│ ${setv} ${prefix}groupevent 🅖
│ ${setv} ${prefix}antiforeign 🅖
│ ${setv} ${prefix}antimedia 🅖
│ ${setv} ${prefix}antiaudio 🅖
│ ${setv} ${prefix}antivideo 🅖
│ ${setv} ${prefix}antiimage 🅖
│ ${setv} ${prefix}antidocument 🅖
│ ${setv} ${prefix}antilocation 🅖
│ ${setv} ${prefix}anticontact 🅖
│ ${setv} ${prefix}antisticker 🅖
│ ${setv} ${prefix}antipoll 🅖
│ ${setv} ${prefix}antilink 🅖
│ ${setv} ${prefix}antipromotion 🅖
│ ${setv} ${prefix}antivirtex 🅖
│ ${setv} ${prefix}grouplink 🅖
│ ${setv} ${prefix}listadmin 🅖
│ ${setv} ${prefix}invite 🅖
│ ${setv} ${prefix}ephemeral 🅖
│ ${setv} ${prefix}delete 🅖
│ ${setv} ${prefix}setppgroup 🅖
│ ${setv} ${prefix}delppgroup 🅖
│ ${setv} ${prefix}setnamegc 🅖
│ ${setv} ${prefix}setdesc 🅖
│ ${setv} ${prefix}add 🅖
│ ${setv} ${prefix}kick 🅖
│ ${setv} ${prefix}promote 🅖
│ ${setv} ${prefix}demote 🅖
│ ${setv} ${prefix}kickall 🅖
│ ${setv} ${prefix}promoteall 🅖
│ ${setv} ${prefix}demoteall 🅖
│ ${setv} ${prefix}getcontact 🅞
│ ${setv} ${prefix}savecontact 🅞
│ ${setv} ${prefix}sendcontact 🅞
│ ${setv} ${prefix}contactag 🅞
│ ${setv} ${prefix}hidetag 🅖
│ ${setv} ${prefix}totag 🅖
│ ${setv} ${prefix}tagall 🅖
│ ${setv} ${prefix}editinfo 🅖
│ ${setv} ${prefix}opentime 🅖
│ ${setv} ${prefix}closetime 🅖
│ ${setv} ${prefix}resetlink 🅖
│ ${setv} ${prefix}getbio 🅖
│ ${setv} ${prefix}vote 🅖
│ ${setv} ${prefix}upvote 🅖
│ ${setv} ${prefix}downvote 🅖
│ ${setv} ${prefix}checkvote 🅖
│ ${setv} ${prefix}delvote 🅖
│ ${setv} ${prefix}antivirus 🅖
│ ${setv} ${prefix}antibadword 🅖
│ ${setv} ${prefix}nsfw 🅖
│ ${setv} ${prefix}react 🅖
│ ${setv} ${prefix}getjoinrequest 🅖
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'searchmenu': {
let xmenu_oh = `
╭──❍「 *GREETING* 」❍
├ *Hi* 👋✨
├ *${m.pushName}* 🏷️
├ *${xliconytimewisher}* 😄🎉
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ *👑 For Owner* = 🅞 
├ *💸 For Free User* = 🅕 
├ *🌟 For Premium User* = 🅟 
╰─┬────❍
╭─┴❍「 *🔍 Search* 」❍
│${setv} ${prefix}google 🅕
│${setv} ${prefix}wikipedia 🅕
│${setv} ${prefix}ytsearch 🅕
│${setv} ${prefix}apksearch 🅕
│${setv} ${prefix}stickersearch 🅕
│${setv} ${prefix}imdb 🅕
│${setv} ${prefix}wanumber 🅕
│${setv} ${prefix}friend 🅕
│${setv} ${prefix}lyrics 🅕
│${setv} ${prefix}pixiv 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'downloadmenu': {
let xmenu_oh = `
╭──❍「 🤖 GREETING 」❍
│ ✨ Hi! 👋
│ 🏷️ Name : ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 GUIDE 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 🛡️ DOWNLOAD 」❍
│${setv} ${prefix}itunes 🅕
│${setv} ${prefix}play 🅕
│${setv} ${prefix}play2 🅕
│${setv} ${prefix}ytplay - termux 🅕
│${setv} ${prefix}ytmp3 - termux 🅕
│${setv} ${prefix}ytmp4 - termux 🅕
│${setv} ${prefix}yta 🅕
│${setv} ${prefix}ytv 🅕
│${setv} ${prefix}yta2 🅕
│${setv} ${prefix}ytv2 🅕
│${setv} ${prefix}image 🅕
│${setv} ${prefix}gimage 🅕
│${setv} ${prefix}live-wallpaper 🅕
│${setv} ${prefix}tiktok 🅕
│${setv} ${prefix}tiktokaudio 🅕
│${setv} ${prefix}tiktokvideo 🅕
│${setv} ${prefix}likee 🅕
│${setv} ${prefix}capcut 🅕
│${setv} ${prefix}instagram 🅕
│${setv} ${prefix}igimg 🅕
│${setv} ${prefix}facebook 🅕
│${setv} ${prefix}twitter 🅕
│${setv} ${prefix}apk 🅕
│${setv} ${prefix}bilibili 🅕
│${setv} ${prefix}dailymotion 🅕
│${setv} ${prefix}mega 🅕
│${setv} ${prefix}mediafire 🅕
│${setv} ${prefix}searchsoundcloud 🅕
│${setv} ${prefix}soundcloud 🅕
│${setv} ${prefix}google 🅕
│${setv} ${prefix}gimage 🅕
│${setv} ${prefix}weather 🅕
│${setv} ${prefix} 🅟
│${setv} ${prefix}gitclone 🅕
│${setv} ${prefix}happymod 🅕
│${setv} ${prefix}gdrive 🅕
│${setv} ${prefix}pinterest 🅕
│${setv} ${prefix}pindl 🅕
│${setv} ${prefix}ringtone 🅕
│${setv} ${prefix}autodownload 🅞
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break


case 'toolmenu': {
let xmenu_oh = `
╭──❍「 🤖 GREETING 」❍
│ ✨ Hi! 👋
│ 🏷️ Name : ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 GUIDE 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 🛠️ TOOL MENU 」❍
│${setv} ${prefix}obfuscate 🅕
│${setv} ${prefix}styletext 🅕
│${setv} ${prefix}fliptext 🅕
│${setv} ${prefix}tts 🅕
│${setv} ${prefix}say 🅕
│${setv} ${prefix}togif 🅕
│${setv} ${prefix}toqr 🅕
│${setv} ${prefix}bass 🅕
│${setv} ${prefix}blown 🅕
│${setv} ${prefix}deep 🅕
│${setv} ${prefix}earrape 🅕
│${setv} ${prefix}fast 🅕
│${setv} ${prefix}fat 🅕
│${setv} ${prefix}nightcore 🅕
│${setv} ${prefix}reverse 🅕
│${setv} ${prefix}robot 🅕
│${setv} ${prefix}slow 🅕
│${setv} ${prefix}smooth 🅕
│${setv} ${prefix}squirrel 🅕
│${setv} ${prefix}tinyurl 🅕
│${setv} ${prefix}tovn 🅕
│${setv} ${prefix}toptv 🅕
│${setv} ${prefix}toaudio 🅕
│${setv} ${prefix}tomp3 🅕
│${setv} ${prefix}tomp4🅕
│${setv} ${prefix}toimg 🅕
│${setv} ${prefix}toonce 🅕
│${setv} ${prefix}toptv 🅕
│${setv} ${prefix}sticker 🅕
│${setv} ${prefix}smeme 🅕
│${setv} ${prefix}smeta 🅕
│${setv} ${prefix}take 🅟
│${setv} ${prefix}emojimix 🅕
│${setv} ${prefix}volaudio 🅕
│${setv} ${prefix}volvideo 🅕
│${setv} ${prefix}ebinary 🅕
│${setv} ${prefix}dbinary 🅕
│${setv} ${prefix}ssweb 🅕
│${setv} ${prefix}quoted 🅕
│${setv} ${prefix}translate 🅕
│${setv} ${prefix}get 🅕
│${setv} ${prefix}tourl 🅕
│${setv} ${prefix}write 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'listmenu': {
let xmenu_oh = `
╭──❍「 🤖 GREETING 」❍
│ ✨ Hi! 👋
│ 🏷️ Name : ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 GUIDE 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 📋 LIST MENU 」❍
│${setv} ${prefix}listprem 🅕
│${setv} ${prefix}listowner 🅕
│${setv} ${prefix}liststicker 🅕
│${setv} ${prefix}listimage 🅕
│${setv} ${prefix}listvideo 🅕
│${setv} ${prefix}listvn 🅕
│${setv} ${prefix}listapk 🅕
│${setv} ${prefix}listzip 🅕
│${setv} ${prefix}listpdf 🅕
│${setv} ${prefix}listbadword 🅕
│${setv} ${prefix}listpc 🅕
│${setv} ${prefix}listgc 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'randomphotomenu': {
let xmenu_oh = `
╭──❍「 🤖 GREETING 」❍
│ ✨ Hi! 👋
│ 🏷️ Name : ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 GUIDE 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 📋 LIST MENU 」❍
│${setv} ${prefix}aesthetic 🅕
│${setv} ${prefix}coffee 🅕
│${setv} ${prefix}wikimedia 🅕
│${setv} ${prefix}wallpaper 🅕
│${setv} ${prefix}art 🅕
│${setv} ${prefix}bts 🅕
│${setv} ${prefix}dogwoof 🅕
│${setv} ${prefix}catmeow 🅕
│${setv} ${prefix}lizardpic 🅕
│${setv} ${prefix}goosebird 🅕
│${setv} ${prefix}8ballpool 🅕
│${setv} ${prefix}cosplay 🅕
│${setv} ${prefix}hacker 🅕
│${setv} ${prefix}cyber 🅕
│${setv} ${prefix}gamewallpaper 🅕
│${setv} ${prefix}islamic 🅕
│${setv} ${prefix}jennie 🅕
│${setv} ${prefix}jiso 🅕
│${setv} ${prefix}satanic 🅕
│${setv} ${prefix}justina 🅕
│${setv} ${prefix}cartoon 🅕
│${setv} ${prefix}pentol 🅕
│${setv} ${prefix}cat 🅕
│${setv} ${prefix}kpop 🅕
│${setv} ${prefix}exo 🅕
│${setv} ${prefix}lisa 🅕
│${setv} ${prefix}space 🅕
│${setv} ${prefix}car 🅕
│${setv} ${prefix}technology 🅕
│${setv} ${prefix}bike 🅕
│${setv} ${prefix}shortquote 🅕
│${setv} ${prefix}antiwork 🅕
│${setv} ${prefix}hacking 🅕
│${setv} ${prefix}boneka 🅕
│${setv} ${prefix}rose 🅕
│${setv} ${prefix}ryujin 🅕
│${setv} ${prefix}ulzzangboy 🅕
│${setv} ${prefix}ulzzanggirl 🅕
│${setv} ${prefix}wallml 🅕
│${setv} ${prefix}wallphone 🅕
│${setv} ${prefix}mountain 🅕
│${setv} ${prefix}goose 🅕
│${setv} ${prefix}profilepic 🅕
│${setv} ${prefix}couplepp 🅕
│${setv} ${prefix}programming 🅕
│${setv} ${prefix}pubg 🅕
│${setv} ${prefix}blackpink 🅕
│${setv} ${prefix}randomboy 🅕  
│${setv} ${prefix}randomgirl 🅕
│${setv} ${prefix}hijab 🅕  
│${setv} ${prefix}chinese 🅕
│${setv} ${prefix}indo 🅕
│${setv} ${prefix}japanese 🅕
│${setv} ${prefix}korean 🅕
│${setv} ${prefix}malay 🅕
│${setv} ${prefix}thai 🅕
│${setv} ${prefix}vietnamese 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'randomvideomenu': {
let xmenu_oh = `
╭──❍「 🤖 GREETING 」❍
│ ✨ Hi! 👋
│ 🏷️ Name : ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 GUIDE 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 🎥 RANDOM VIDEO 」❍
│${setv} ${prefix}tiktokgirl 🅕
│${setv} ${prefix}tiktoknukthy 🅕
│${setv} ${prefix}tiktokkayes 🅕
│${setv} ${prefix}tiktokpanrika 🅕
│${setv} ${prefix}tiktoknotnot 🅕
│${setv} ${prefix}tiktokghea 🅕
│${setv} ${prefix}tiktoksantuy 🅕
│${setv} ${prefix}tiktokbocil 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'stalkermenu': {
let xmenu_oh = `
╭──❍「 🤖 GREETING 」❍
│ ✨ Hi! 👋
│ 🏷️ Name : ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 GUIDE 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 🎥 RANDOM VIDEO 」❍
│${setv} ${prefix}tiktokstalk 🅕
│${setv} ${prefix}mlstalk 🅕
│${setv} ${prefix}npmstalk 🅕
│${setv} ${prefix}ghstalk 🅕
│${setv} ${prefix}telestalk 🅕
│${setv} ${prefix}wachannelstalk 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'aimenu': {
let xmenu_oh = `
╭──❍「 🤖 GREETING 」❍
│ ✨ Hi! 👋
│ 🏷️ Name : ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 GUIDE 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 🧠 OpenAI 」❍
│${setv} ${prefix}blackboxai 🅕
│${setv} ${prefix}travel-assistant 🅕
│${setv} ${prefix}realistic 🅕
│${setv} ${prefix}mangaimg 🅕
│${setv} ${prefix}animeimg 🅕
│${setv} ${prefix}lexica 🅕
│${setv} ${prefix}chechkgpt 🅕
│${setv} ${prefix}3dmodel 🅕
│${setv} ${prefix}photoleap 🅕
│${setv} ${prefix}chatgpt4 🅕
│${setv} ${prefix}darky 🅕
│${setv} ${prefix}bing 🅕
│${setv} ${prefix}mathsai 🅕
│${setv} ${prefix}openai 🅕
│${setv} ${prefix}dalle 🅕
│${setv} ${prefix}stablediffusion 🅕
│${setv} ${prefix}ai 🅕
│${setv} ${prefix}remini 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'gamemenu': {
let xmenu_oh = `
╭──❍「 🤖 GREETING 」❍
│ ✨ Hi! 👋
│ 🏷️ Name : ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 GUIDE 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 🧠 GAME 」❍
│${setv} ${prefix}truth 🅕
│${setv} ${prefix}dare 🅕
│${setv} ${prefix}suit 🅕
│${setv} ${prefix}tictactoe 🅕
│${setv} ${prefix}math 🅕
│${setv} ${prefix}playbomb 🅕
│${setv} ${prefix}casino 🅕
│${setv} ${prefix}rob 🅕
│${setv} ${prefix}slot 🅕
│${setv} ${prefix}dice 🅕 
│${setv} ${prefix} profile 🅕
│${setv} ${prefix} claim 🅕
│${setv} ${prefix} tmoney 🅕
│${setv} ${prefix} tflimit 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break


case 'funmenu': {
let xmenu_oh = `
╭──❍「 🤖 GREETING 」❍
│ ✨ Hi! 👋
│ 🏷️ Name : ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 GUIDE 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 🎉 Fun 」❍
│${setv} ${prefix}define 🅕
│${setv} ${prefix}readmore 🅕
│${setv} ${prefix}yomamajoke 🅕
│${setv} ${prefix}fact 🅕
│${setv} ${prefix}couple 🅕
│${setv} ${prefix}soulmate 🅕
│${setv} ${prefix}stupidcheck 🅕
│${setv} ${prefix}handsomecheck 🅕
│${setv} ${prefix}uncleancheck 🅕
│${setv} ${prefix}hotcheck 🅕
│${setv} ${prefix}smartcheck 🅕
│${setv} ${prefix}greatcheck 🅕
│${setv} ${prefix}evilcheck 🅕
│${setv} ${prefix}dogcheck 🅕
│${setv} ${prefix}coolcheck 🅕
│${setv} ${prefix}waifucheck 🅕
│${setv} ${prefix}awesomecheck 🅕
│${setv} ${prefix}gaycheck 🅕
│${setv} ${prefix}cutecheck 🅕
│${setv} ${prefix}lesbiancheck 🅕
│${setv} ${prefix}hornycheck 🅕
│${setv} ${prefix}prettycheck 🅕
│${setv} ${prefix}lovelycheck 🅕
│${setv} ${prefix}uglycheck 🅕
│${setv} ${prefix}pick 🅕
│${setv} ${prefix}pickupline 🅕
│${setv} ${prefix}quotes 🅕
│${setv} ${prefix}can 🅕
│${setv} ${prefix}is 🅕
│${setv} ${prefix}when 🅕
│${setv} ${prefix}where 🅕
│${setv} ${prefix}what 🅕
│${setv} ${prefix}how 🅕
│${setv} ${prefix}rate 🅕
│${setv} ${prefix}cry 🅕
│${setv} ${prefix}kill 🅕
│${setv} ${prefix}hug 🅕
│${setv} ${prefix}pat 🅕
│${setv} ${prefix}lick 🅕 
│${setv} ${prefix}kiss 🅕
│${setv} ${prefix}bite 🅕
│${setv} ${prefix}yeet 🅕
│${setv} ${prefix}bully 🅕
│${setv} ${prefix}bonk 🅕
│${setv} ${prefix}wink 🅕
│${setv} ${prefix}poke 🅕
│${setv} ${prefix}nom 🅕
│${setv} ${prefix}slap 🅕
│${setv} ${prefix}smile 🅕 
│${setv} ${prefix}wave 🅕
│${setv} ${prefix}awoo 🅕
│${setv} ${prefix}blush 🅕
│${setv} ${prefix}smug 🅕
│${setv} ${prefix}glomp 🅕 
│${setv} ${prefix}happy 🅕
│${setv} ${prefix}dance 🅕
│${setv} ${prefix}cringe 🅕
│${setv} ${prefix}cuddle 🅕
│${setv} ${prefix}highfive 🅕 
│${setv} ${prefix}handhold 🅕
│${setv} ${prefix}spank 🅕
│${setv} ${prefix}tickle 🅕
│${setv} ${prefix}feed 🅕
│${setv} ${prefix}checkme 🅕
│${setv} ${prefix}sound1 - sound161 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'stickermenu': {
let xmenu_oh = `
╭──❍「 🤖 GREETING 」❍
│ ✨ Hi! 👋
│ 🏷️ Name : ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 GUIDE 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 🖼️ Sticker 」❍
│${setv} ${prefix}goose 🅕
│${setv} ${prefix}woof 🅕
│${setv} ${prefix}8ball 🅕
│${setv} ${prefix}lizard 🅕
│${setv} ${prefix}meow 🅕
│${setv} ${prefix}gura 🅕
│${setv} ${prefix}telestick 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'animemenu': {
let xmenu_oh = `
╭──❍「 🤖 *GREETING* 」❍
│ ✨ *Hi!* 👋
│ 🏷️ *Name :* ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 *GUIDE* 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 🌸 *Anime* 」❍
│${setv} ${prefix}searchanime 🅕
│${setv} ${prefix}animeinfo 🅕
│${setv} ${prefix}animeid 🅕
│${setv} ${prefix}animedl 🅕
│${setv} ${prefix}mangainfo 🅕
│${setv} ${prefix}searchchapter 🅕
│${setv} ${prefix}mangachapter 🅕
│${setv} ${prefix}mangachapter2 🅕
│${setv} ${prefix}randommanga 🅕
│${setv} ${prefix}amv 🅕
│${setv} ${prefix}stickhandhold 🅕
│${setv} ${prefix}stickshinobu 🅕
│${setv} ${prefix}stickcuddle 🅕
│${setv} ${prefix}stickhighfive 🅕
│${setv} ${prefix}stickdance 🅕
│${setv} ${prefix}stickcringe 🅕
│${setv} ${prefix}stickhappy 🅕
│${setv} ${prefix}stickglomp 🅕
│${setv} ${prefix}sticksmug 🅕
│${setv} ${prefix}stickblush 🅕
│${setv} ${prefix}stickawoo 🅕
│${setv} ${prefix}stickwave 🅕
│${setv} ${prefix}sticksmile 🅕
│${setv} ${prefix}stickslap 🅕
│${setv} ${prefix}stickpoke 🅕
│${setv} ${prefix}stickwink 🅕
│${setv} ${prefix}stickbonk 🅕
│${setv} ${prefix}stickbully 🅕
│${setv} ${prefix}stickyeet 🅕
│${setv} ${prefix}stickbike 🅕
│${setv} ${prefix}stickkiss 🅕
│${setv} ${prefix}sticklick 🅕
│${setv} ${prefix}stickpat 🅕
│${setv} ${prefix}stickhug 🅕
│${setv} ${prefix}stickkill 🅕
│${setv} ${prefix}stickcry 🅕
│${setv} ${prefix}stickspank 🅕
│${setv} ${prefix}sticktickle 🅕
│${setv} ${prefix}traceanime 🅕
│${setv} ${prefix}akira 🅕
│${setv} ${prefix}akiyama 🅕
│${setv} ${prefix}ana 🅕
│${setv} ${prefix}asuna 🅕
│${setv} ${prefix}ayuzawa 🅕
│${setv} ${prefix}boruto 🅕
│${setv} ${prefix}chiho 🅕
│${setv} ${prefix}chitoge 🅕
│${setv} ${prefix}cosplayloli 🅕
│${setv} ${prefix}cosplaysagiri 🅕
│${setv} ${prefix}deidara 🅕
│${setv} ${prefix}doraemon 🅕
│${setv} ${prefix}elaina 🅕
│${setv} ${prefix}emilia 🅕
│${setv} ${prefix}erza 🅕
│${setv} ${prefix}gremory 🅕
│${setv} ${prefix}hestia 🅕
│${setv} ${prefix}husbu 🅕
│${setv} ${prefix}inori 🅕
│${setv} ${prefix}isuzu 🅕
│${setv} ${prefix}itachi 🅕
│${setv} ${prefix}itori 🅕
│${setv} ${prefix}kaga 🅕
│${setv} ${prefix}kagura 🅕
│${setv} ${prefix}kakasih 🅕
│${setv} ${prefix}kaori 🅕
│${setv} ${prefix}keneki 🅕
│${setv} ${prefix}kotori 🅕
│${setv} ${prefix}kurumi 🅕
│${setv} ${prefix}loli 🅕
│${setv} ${prefix}loli2 🅕
│${setv} ${prefix}madara 🅕
│${setv} ${prefix}megumin 🅕
│${setv} ${prefix}mikasa 🅕
│${setv} ${prefix}mikey 🅕
│${setv} ${prefix}miku 🅕
│${setv} ${prefix}minato 🅕
│${setv} ${prefix}naruto 🅕
│${setv} ${prefix}neko 🅕
│${setv} ${prefix}nekonime 🅕
│${setv} ${prefix}nezuko 🅕
│${setv} ${prefix}onepiece 🅕
│${setv} ${prefix}pokemon 🅕
│${setv} ${prefix}randomnime 🅕
│${setv} ${prefix}randomnime2 🅕
│${setv} ${prefix}rize 🅕
│${setv} ${prefix}sagiri 🅕
│${setv} ${prefix}sakura 🅕
│${setv} ${prefix}sasuke 🅕
│${setv} ${prefix}shina 🅕
│${setv} ${prefix}shinka 🅕
│${setv} ${prefix}shinomiya 🅕
│${setv} ${prefix}shizuka 🅕
│${setv} ${prefix}shota 🅕
│${setv} ${prefix}tejina 🅕
│${setv} ${prefix}toukachan 🅕
│${setv} ${prefix}tsunade 🅕
│${setv} ${prefix}waifu 🅕
│${setv} ${prefix}waifu2 🅕
│${setv} ${prefix}animewall 🅕
│${setv} ${prefix}yotsuba 🅕
│${setv} ${prefix}yuki 🅕
│${setv} ${prefix}yulibocil 🅕
│${setv} ${prefix}yumeko 🅕
│${setv} ${prefix}8ball 🅕
│${setv} ${prefix}animeawoo 🅕
│${setv} ${prefix}animemegumin 🅕
│${setv} ${prefix}animeshinobu 🅕
│${setv} ${prefix}animehandhold 🅕
│${setv} ${prefix}animehighfive 🅕
│${setv} ${prefix}animecringe 🅕
│${setv} ${prefix}animedance 🅕
│${setv} ${prefix}animehappy 🅕
│${setv} ${prefix}animeglomp 🅕
│${setv} ${prefix}animeblush 🅕
│${setv} ${prefix}animesmug 🅕
│${setv} ${prefix}animewave 🅕
│${setv} ${prefix}animesmille 🅕
│${setv} ${prefix}animepoke 🅕
│${setv} ${prefix}animewink 🅕
│${setv} ${prefix}animebonk 🅕
│${setv} ${prefix}animebully 🅕
│${setv} ${prefix}animeyeet 🅕
│${setv} ${prefix}animebite 🅕
│${setv} ${prefix}animelick 🅕
│${setv} ${prefix}animekill 🅕
│${setv} ${prefix}animecry 🅕
│${setv} ${prefix}animewlp 🅕
│${setv} ${prefix}animekiss 🅕
│${setv} ${prefix}animehug 🅕
│${setv} ${prefix}animeneko 🅕
│${setv} ${prefix}animepat 🅕
│${setv} ${prefix}animeslap 🅕
│${setv} ${prefix}animecuddle 🅕
│${setv} ${prefix}animewaifu 🅕
│${setv} ${prefix}animenom 🅕
│${setv} ${prefix}animefoxgirl 🅕
│${setv} ${prefix}animegecg 🅕
│${setv} ${prefix}animetickle 🅕
│${setv} ${prefix}animefeed 🅕
│${setv} ${prefix}animeavatar 🅕
│${setv} ${prefix}anime 🅕
│${setv} ${prefix}avatar 🅕
│${setv} ${prefix}shinobu 🅕
│${setv} ${prefix}fox_girl 🅕
│${setv} ${prefix}gecg 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break



case 'databasemenu': {
let xmenu_oh = `
╭──❍「 🤖 *GREETING* 」❍
│ ✨ *Hi!* 👋
│ 🏷️ *Name :* ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 *GUIDE* 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 💾 *Database* 」❍
│${setv} ${prefix}setcmd 🅞
│${setv} ${prefix}delcmd 🅞
│${setv} ${prefix}listcmd 🅕
│${setv} ${prefix}lockcmd 🅞
│${setv} ${prefix}addmsg 🅞
│${setv} ${prefix}delmsg 🅞
│${setv} ${prefix}getmsg 🅕
│${setv} ${prefix}listmsg 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break

case 'storemenu': {
let xmenu_oh = `
╭──❍「 🤖 *GREETING* 」❍
│ ✨ *Hi!* 👋
│ 🏷️ *Name :* ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 *GUIDE* 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 🛒 *Store* 」❍
│${setv} ${prefix}list 🅕
│${setv} ${prefix}store 🅕
│${setv} ${prefix}shop 🅕
│${setv} ${prefix}addlist 🅞
│${setv} ${prefix}dellist 🅞
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break


case 'religionmenu': {
let xmenu_oh = `
╭──❍「 🤖 *GREETING* 」❍
│ ✨ *Hi!* 👋
│ 🏷️ *Name :* ${m.pushName}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 *GUIDE* 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 ✝️ *Religion* 」❍
│${setv} ${prefix}bible 🅕
│${setv} ${prefix}quran 🅕
│${setv} ${prefix}gita 🅕
│${setv} ${prefix}namazchk 🅕
│${setv} ${prefix}prophetname 🅕
│${setv} ${prefix}prayertime 🅕
│${setv} ${prefix}sahihbukhari 🅕
│${setv} ${prefix}jamiattirmidhi 🅕
│${setv} ${prefix}sunanannasai 🅕
│${setv} ${prefix}sunanibnmajah 🅕
│${setv} ${prefix}sunanabudawud 🅕
│${setv} ${prefix}kisahnabi 🅕
│${setv} ${prefix}asmaulhusna 🅕
│${setv} ${prefix}duas 🅕
│${setv} ${prefix}namaz 🅕
│${setv} ${prefix}masnoonduas 🅕
│${setv} ${prefix}ayatalkursi 🅕
│${setv} ${prefix}niyatnamaz 🅕
│${setv} ${prefix}quotesislami 🅕
│${setv} ${prefix}assalamualaikum 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break



case 'othermenu': {
let xmenu_oh = `
╭──❍「 🤖 *GREETING* 」❍
│ ✨ *Hi!* 👋
│ 🏷️ *Name :* ${m.pushName || 'No Name'}
│ 🎉 ${xliconytimewisher} 😄
╰─┬────❍ ${readmore}
╭─┴❍「 🅞 *GUIDE* 」❍
│ *👑 For Owner* = 🅞
│ *💸 For Free User* = 🅕
│ *🌟 For Premium User* = 🅟
╰─┬────❍
╭─┴❍「 🛠️ *Other* 」❍
│${setv} ${prefix}update 🅕
│${setv} ${prefix}cricket 🅕
│${setv} ${prefix}score 🅕
│${setv} ${prefix}ping 🅕
│${setv} ${prefix}menu 🅕
│${setv} ${prefix}myip 🅕
│${setv} ${prefix}repo 🅕
│${setv} ${prefix}reportbug 🅕
│${setv} ${prefix}idgroup 🅕
│${setv} ${prefix}owner 🅕
│${setv} ${prefix}rentbot 🅕
│${setv} ${prefix}donate 🅕
│${setv} ${prefix}runtime 🅕
│${setv} ${prefix}confess 🅕
│${setv} ${prefix}react 🅕
│${setv} ${prefix}q 🅕
│${setv} ${prefix}inspect 🅕
│${setv} ${prefix}tagme 🅕
│${setv} ${prefix}nowa 🅕
│${setv} ${prefix}truecaller 🅕
╰──────❍`
if (typemenu === 'v1') {
  XliconBotInc.sendMessage(m.chat, {
      image: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v2') {
  XliconBotInc.sendMessage(m.chat, {
      text: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              showAdAttribution: true,
              title: botname,
              body: ownername,
              thumbnail: fs.readFileSync('./XliconMedia/theme/XliconPic.jpg'),
              sourceUrl: wagc,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v3') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh
  }, {
      quoted: m
  })
} else if (typemenu === 'v4') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true
  }, {
      quoted: m
  })
} else if (typemenu === 'v5') {
  XliconBotInc.relayMessage(m.chat, {
      requestPaymentMessage: {
          currencyCodeIso4217: 'USD',
          amount1000: '9999999900',
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: xmenu_oh,
                  contextInfo: {
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          }
      }
  }, { quoted: m })
} else if (typemenu === 'v6') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
          externalAdReply: {
              title: botname,
              body: ownername,
              thumbnailUrl: 'https://i.ibb.co/yhgtCXh/68747470733a2f2f69696c692e696f2f64455433756b582e6d642e706e67.png',
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
} else if (typemenu === 'v7') {
  XliconBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XliconMedia/theme/Xlicon-Video.mp4'),
      caption: xmenu_oh,
      gifPlayback: true,
      contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          mentionedJid: [sender],
          forwardedNewsletterMessageInfo: {
              newsletterName: ownername,
              newsletterJid: "120363232303807350@newsletter",
          },
          externalAdReply: {
              showAdAttribution: true,
              title: ownername,
              body: botname,
              thumbnailUrl: "https://i.ibb.co/y0nLDSB/XLICON-IMG.jpg",
              sourceUrl: websitex,
              mediaType: 1,
              renderLargerThumbnail: true
          }
      }
  }, {
      quoted: m
  })
}
}
break
//ALL MENUS CODE END AT HERE


default:
  if (budy.startsWith('>')) {
    if (!XliconTheCreator) return; // Ensure only the bot creator can run this command
    const codeToEvaluate = budy.slice(2).trim(); // Slice and trim the code after the '>' symbol
    if (!codeToEvaluate) return m.reply("❌ No code provided for evaluation.");
  
    try {
      let evaled = await eval(codeToEvaluate); // Evaluate the code synchronously
      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); // Ensure the result is a string
      await m.reply(evaled); // Send the evaluation result back
    } catch (err) {
      console.error(err); // Log the error for debugging
      await m.reply(`❌ Error in evaluation: ${String(err)}`); // Return the error message to the user
    }
  }
  
  if (budy.startsWith('=>')) {
    if (!XliconTheCreator) return; // Ensure only the bot creator can run this command
    const codeToEvaluate = budy.slice(2).trim(); // Slice and trim the code after the '<' symbol
    if (!codeToEvaluate) return m.reply("❌ No code provided for evaluation.");
  
    try {
      let evaled = await eval(`(async () => { ${codeToEvaluate} })()`); // Execute asynchronous code inside an async function
      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); // Ensure the result is a string
      await m.reply(evaled); // Send the evaluation result back
    } catch (err) {
      console.error(err); // Log the error for debugging
      await m.reply(`❌ Error in evaluation: ${String(err)}`); // Return the error message to the user
    }
  }
  
const { exec } = require('child_process'); // Import exec

if (budy.startsWith('$')) {
  if (!XliconTheCreator) return; // Ensure only the creator can run commands
  if (!text) return m.reply("❌ Please provide a command to execute.");

  // Slice off the '$' and any extra spaces
  const commandToRun = budy.slice(1).trim(); // trim() to remove extra spaces

  if (!commandToRun) {
    return m.reply("❌ No command provided after $");
  }

  // Execute the command
  exec(commandToRun, (err, stdout, stderr) => {
    if (err) {
      console.error(err); // Log error for debugging
      return m.reply(`❌ Error executing command: ${err.message}`);
    }

    if (stderr) {
      console.error(stderr); // Log any error output from the command
      return m.reply(`❌ Command Error: ${stderr}`);
    }

    if (stdout) {
      console.log(stdout); // Log output for debugging
      return m.reply(`\`\`\`bash\n${stdout}\n\`\`\``); // Send output with code block formatting
    }
  });
}

			if (m.message && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
XliconBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
		}
	} catch (err) {
		console.log(util.format(err))
        let e = String(err)
XliconBotInc.sendMessage(XliconBotInc.user.id, { text: "An error occured:" + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
