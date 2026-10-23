# UnitedWeb — site

Site institucional da UnitedWeb e landing page da campanha PHP2Shell (Google Ads).

- `index.html` — site principal
- `php2shell/` — landing page da campanha
- `main.js` — número do WhatsApp (`WHATSAPP`) e evento `contato_whatsapp` para o Google Ads

## Antes de ligar a campanha

1. Troque `WHATSAPP` em `main.js` pelo número real (só dígitos, com 55 e DDD).
2. Cole a tag do Google Ads (`gtag.js`) no `<head>` das duas páginas.
3. No Google Ads, crie uma conversão a partir do evento `contato_whatsapp`.

HTML e CSS puros. Sem build.
