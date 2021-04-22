exports.wait = () => {
	return`*「❗」chottomate~*`
}

exports.download = ()=> {
	return`*「❗」tunggu 5 menit dari sekarang ya kak*`
}

exports.afkOn = (pushname, reason) => {
return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.error = () => {
	return `*error kak maaf*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「❗」ENABLE LEVELING*`
}

exports.lvloff = () => {
	return`*「❗」DISABLE LEVELING*`
}

exports.lvlnul = () => {
	return`*「❗」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.transfer= () => {
	return'*「🤔」hmmm\ncara: !transfer tag orang|jumlah\ncontoh : !transfer @kev|50000'
}

exports.noregis = () => {
	return`*「❗」BELUM DAFTAR*\n*cara daftar ${prefix}daftar nama|umur* \n\n*contoh ${prefix}daftar Kevin|18*`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY AJA NIH BRO, TAPI KAU SUDAH KU BANNED , KALO MAU DI UNBAN BILANG OWNER https://wa.me/6283141621181 :V*`
}

exports.premium = () => {
	return`*「❗」Maaf Kamu Bukan User Premium ! hubungi owner untuk jadi premium ketik ${prefix}owner*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar kak >_<*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba ulangi lain kali kak*`
}

exports.linkga = () => {
	return`*「❗」maaf linknya tidak valid kak*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「❗」BOT HARUS JADI ADMIN*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW GAK AKTIF masuk gtou ini https://chat.whatsapp.com/E7nx3MA5ika4u2BXgOXGtF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「🤔」Teks nya mana kak?*`
}

exports.clears = () => {
	return`*「🚮」Clear all Success*`
}

exports.pc = () => {
	return`*「❗」REGISTRASI*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`*「 REGISTRASI BERHASIL 」*\nUntuk User Info :\n\n*➸ Nama : ${namaUser}*\n*➸ Nomor : wa.me/${sender.split("@")[0]}*\n*➸ Umur : ${umurUser}*\n*➸ Waktu Pendaftaran : ${time}*\n\n*「SN」: ${serialUser}*\n_NOTE : Pesan ini sangat penting :v_`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
➸ *Nama* : ${pushname}
➸ *Nomor* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

Upgrade premium bosku, biar bebas gunain bot`
}

exports.pencilend = (pushname) => {
	return`*maaf ${pushname} pensil anda sudah pada patah*\n*beli pensil untuk nulis*`
}

exports.pencilcount = (pencilCounts) => {
	return`
*「 PENCIL COUNT 」*
sisa limit anda : ${pencilCounts}

Upgrade premium bosku, biar bebas gunain bot`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi afk, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkOn = () => {
    return `Fitur AFK berhasil *diaktifkan*!`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}
exports.uangkauu = (pushname, mentioned, uangkauu) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${uangkauu}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}
