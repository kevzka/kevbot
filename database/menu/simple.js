const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SIMPLE MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!✨
Jika tidak paham ketik *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}sticker*
┃│➸ membuat sticker dari gambar ato gif
┃│➸ *${prefix}ttp*
┃│➸ membuat stiker tulisan
┃│➸ *${prefix}tts*
┃│➸ mengubah teks menjadi suara google
┃│➸ contoh : ${prefix}tts id hai
┃│➸ *${prefix}toimg*
┃│➸ mengubah stiker menjadi gambar
┃│➸ *${prefix}togif*
┃│➸ mengubah stiker gif menjadi gif
┃│➸ *${prefix}stalkig*
┃│➸ contoh : ${prefix}stalkig kevin_apta_kun
┃│➸ *${prefix}tagme*
┃│➸ lu tau kan
┃│➸ *${prefix}quotes*
┃│➸ randok quotes
┃│➸ *${prefix}bikinquote*
┃│➸ buat quotes
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.simple = simple