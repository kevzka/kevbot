const edukasi = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *EDUKASI MENU* ]----- 🔰
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
┃│➸ *${prefix}wiki*
┃│➸ contoh : ${prefix}wiki ikan
┃│➸ *${prefix}brainly*
┃│➸ mencari jaeaban soal
┃│➸ *${prefix}jawaban*
┃│➸ di gunakan untuk random jawaban
┃│➸ *${prefix}calc*
┃│➸ contoh : ${prefix}calc × 2 2
┃│➸ *${prefix}kbbi*
┃│➸ contoh : ${prefix}kbbi antre
┃│➸ *${prefix}fakta*
┃│➸ random fakta
┃│➸ *${prefix}translate
┃│➸ contoh : ${prefix}translate en|id|good morning
┃│➸ *${prefix} bijak*
┃│➸ random kata" bijak
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.edukasi = edukasi