const fs = require('fs');
const glob = require('glob');

const files = glob.sync('/Users/meorhakim/Desktop/mozek-website/src/app/pages/lib-components/**/*.html');
let count = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Regex to match our previously formatted guides
    const regex = /<span class="ts-pink">import<\/span>\s*<span class="ts-yellow">&#123;<\/span>\s*<span class="ts-emerald">([^<]+)<\/span>\s*<span class="ts-yellow">&#125;<\/span>\s*<span class="ts-pink">from<\/span>\s*<span class="ts-orange">'mozek-angular'<\/span>;<br><br>\s*&#64;<span class="ts-emerald">Component<\/span><span class="ts-yellow">\(<\/span><span class="ts-pink">&#123;<\/span><br>\s*&nbsp;&nbsp;\.\.\.<br>\s*&nbsp;&nbsp;<span class="ts-blue">(imports|providers):<\/span>\s*<span class="ts-lightblue">&#91;<\/span>\s*<span class="ts-emerald">([^<]+)<\/span>\s*<span class="ts-lightblue">&#93;<\/span><br>\s*<span class="ts-pink">&#125;<\/span><span class="ts-yellow">\)<\/span>/s;

    if (regex.test(content)) {
        content = content.replace(regex, (match, imports1, type, imports2) => {
            return `<span class="ts-pink">import</span>&nbsp;<span class="ts-yellow">&#123;</span>&nbsp;<span class="ts-blue">${imports1}</span>&nbsp;<span class="ts-yellow">&#125;</span>&nbsp;<span class="ts-pink">from</span>&nbsp;<span class="ts-orange">'mozek-angular'</span>;<br><br>
                    &#64;<span class="ts-emerald">Component</span><span class="ts-yellow">(</span><span class="ts-pink">&#123;</span><br>
                    &nbsp;&nbsp;...<br>
                    &nbsp;&nbsp;<span class="ts-blue">${type}:</span>&nbsp;<span class="ts-lightblue">&#91;</span> <span class="ts-emerald">${imports2}</span> <span class="ts-lightblue">&#93;</span><br>
                    <span class="ts-pink">&#125;</span><span class="ts-yellow">)</span>`;
        });
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
        count++;
    } else {
        // Also try to match the original non-formatted ones just in case
        const originalRegex = /import\s*\{\{\s*['"]\{['"]\s*\}\}\s*<span class="primary">([^<]+)<\/span>\s*\{\{\s*['"]\}['"]\s*\}\}\s*from\s*<span class="primary">['"]mozek-angular['"]<\/span>;<br><br>\s*&#64;Component\(\{\{\s*['"]\{['"]\s*\}\}<br>\s*&nbsp;&nbsp;\.\.\.<br>\s*&nbsp;&nbsp;(imports|providers):\s*\[\s*<span class="primary">([^<]+)<\/span>\s*\]<br>\s*\{\{\s*['"]\}['"]\s*\}\}\)/s;
        
        if (originalRegex.test(content)) {
            content = content.replace(originalRegex, (match, imports1, type, imports2) => {
                return `<span class="ts-pink">import</span>&nbsp;<span class="ts-yellow">&#123;</span>&nbsp;<span class="ts-blue">${imports1}</span>&nbsp;<span class="ts-yellow">&#125;</span>&nbsp;<span class="ts-pink">from</span>&nbsp;<span class="ts-orange">'mozek-angular'</span>;<br><br>
                        &#64;<span class="ts-emerald">Component</span><span class="ts-yellow">(</span><span class="ts-pink">&#123;</span><br>
                        &nbsp;&nbsp;...<br>
                        &nbsp;&nbsp;<span class="ts-blue">${type}:</span>&nbsp;<span class="ts-lightblue">&#91;</span> <span class="ts-emerald">${imports2}</span> <span class="ts-lightblue">&#93;</span><br>
                        <span class="ts-pink">&#125;</span><span class="ts-yellow">)</span>`;
            });
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated (from original) ${file}`);
            count++;
        } else {
             console.log(`No match in ${file}`);
        }
    }
});

console.log(`Total files updated: ${count}`);
