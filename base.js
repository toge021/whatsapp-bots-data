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
