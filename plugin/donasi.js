let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085837212059]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [0882016646288]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
