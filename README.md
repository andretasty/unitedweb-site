# UnitedWeb — site

Site institucional da UnitedWeb e landing page da campanha PHP2Shell (Google Ads).

- `index.html` — site principal
- `php2shell/` — landing page da campanha
- `main.js` — número do WhatsApp (`WHATSAPP`) e evento `contato_whatsapp` para o Google Ads

## Antes de ligar a campanha

1. Confira o número em `WHATSAPP` (`main.js`).
2. Cole a tag do Google Ads (`gtag.js`) no `<head>` das duas páginas.
3. No Google Ads, crie uma conversão a partir do evento `contato_whatsapp`.

HTML e CSS puros. Sem build.
