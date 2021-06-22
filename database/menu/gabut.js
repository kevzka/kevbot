const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GABUTZ MENU* ]----- 🔰
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
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}tonguetwister*
┃│➸ random tonguetwister
┃│➸ *${prefix}apakah*
┃│➸ contoh : ${prefix}apakh aku bot
┃│➸ *${prefix}bisakah*
┃│➸  contoh : ${prefix}bisakah aku menjadi bot
┃│➸ *${prefix}kapankah*
┃│➸ contoh : ${prefix}kapankah aku ban dia
┃│➸ *${prefix}hobby*
┃│➸ random hobby
┃│➸ *${prefix}rate*
┃│➸ contoh : ${prefix}rate seberapa aku bot
┃│➸ *${prefix}seberapagay*
┃│➸ persen gay
┃│➸ *${prefix}truth*
┃│➸ *${prefix}dare*
┃│➸ *${prefix}listonline*
┃│➸ *${prefix}tebakkata*
┃│➸ *${prefix}tebakin*
┃│➸ tebak gambar
┃│➸ *${prefix}cantikcek*
┃│➸ persen cantik
┃│➸ *${prefix}gantengcek*
┃│➸ persen ganteng
┃│➸ *${prefix}caklontong*
┃│➸ pertanyaan cak lontong
┃│➸ *${prefix}timer*
┃│➸ contoh : timer 1 detik
┃│➸ *${prefix}simi*
┃│➸ simi chat
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.gabut = gabut
