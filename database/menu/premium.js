const vip = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *PREMIUM MENU* ]----- 🔰
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
┃│➸ *${prefix}premiumlist*
┃│➸ list user premium
┃│➸ *${prefix}harta*
┃│➸ contoh : ${prefix}harta owner
┃│➸ *${prefix}sadtext*
┃│➸ contoh : ${prefix}sadtext owner
┃│➸ *${prefix}nulis2*
┃│➸ menulis kata
┃│➸ *${prefix}jokerlogo*
┃│➸ contoh : ${prefix}jokerlogo owner
┃│➸ *${prefix}silverplaybutton*
┃│➸ contoh : ${prefix}silverplaybutton owner
┃│➸ *${prefix}goldplaybutton*
┃│➸ contoh : ${prefix}goldplaybutton owner
┃│➸ *${prefix}mutual*
┃│➸ random no orang
┃│➸ *${prefix}next*
┃│➸ ini lanjutan nya mutual
┃│➸ *${prefix}nangis*
┃│➸ stiker nangis
┃│➸ *${prefix}cium*
┃│➸ stiker cium
┃│➸ *${prefix}peluk*
┃│➸ stiker peluk
┃│➸ *${prefix}tiktod*
┃│➸ hmmm
┃│➸ *${prefix}yutubdl*
┃│➸ hmmm
┃│➸ *${prefix}hidetag5*
┃│➸ hidetag 5 kali
┃│➸ *${prefix}hidetag10*
┃│➸ hidetag 10 kali
┃│➸ *${prefix}moddroid*
┃│➸ hmmm
┃│➸ *${prefix}happymod*
┃│➸ hmmm
┃│➸ *${prefix}ninjalogo*
┃│➸ contoh : ${prefix}ninjalogo owner&bot
┃│➸ *${prefix}halloweentext*
┃│➸ contoh : ${prefix}halloweentext owner
┃│➸ *${prefix}pornhub*
┃│➸ contoh : ${prefix}pornhub kev&bot
┃│➸ *${prefix}glitchtext*
┃│➸ contoh : ${prefix}glitchtext owner&bot
┃│➸ *${prefix}blackpink*
┃│➸ contoh : ${prefix}blackpink owner
┃│➸ *${prefix}cloudtext*
┃│➸ contoh : ${prefix}cloudtext owner
┃│➸ *${prefix}neontext*
┃│➸ contoh : ${prefix}neontext owner
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.vip = vip