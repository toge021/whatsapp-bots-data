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
