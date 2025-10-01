let ver = "v2.961r";
try {
  ver = version;
} catch (e) { }

fetch('https://cdn.jsdelivr.net/gh/omgbroops/mp3player@' + ver + '/index.html').then(response => response.text()).then(html => { const container = document.querySelector('body'); container.innerHTML = '<!DOCTYPE html>' + '<html>' + '<head>' + '<title>New Tab</title>' + '</head>' + '<body>' + html + '</body>' + '<script>loadSessionDB();</script></html>'; container.querySelectorAll('script').forEach(oldScript => { const newScript = document.createElement('script'); if (oldScript.src) { newScript.src = oldScript.src; newScript.async = false; } else { newScript.textContent = oldScript.textContent; } oldScript.parentNode.replaceChild(newScript, oldScript); }); });
