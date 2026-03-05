const fs = require('fs');
let html = fs.readFileSync('luxe-voyages-demo.html', 'utf8');
let count = 0;
html = html.replace(/<span class="dest-badge"([^>]*)>(.*?)<\/span>([\s\S]*?)<a href="([^"]*)" class="btn-outline-gold" data-i18n="btn_read_guide">/g, (match, p1, p2, p3, p4) => {
    count++;
    return p3 + '<span class="dest-badge"' + p1 + '>' + p2 + '</span>\n                            <a href="' + p4 + '" class="btn-outline-gold" data-i18n="btn_read_guide">';
});
fs.writeFileSync('luxe-voyages-demo.html', html);
console.log('Replaced ' + count + ' instances of dest-badge.');
