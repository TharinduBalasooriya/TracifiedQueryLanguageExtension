const fs = require('fs');
let content
let allkeyWords= [];
try {
    // read contents of the file
    const data = fs.readFileSync('keywords.txt', 'UTF-8');

    // split the contents by new line
    content = data.split(/\r?\n/);

} catch (err) {
    console.error(err);
}
function lastWord(words) {
			let n = words.replace(/[\[\]?.,\/#!$%\^&\*;:{}=\\|_~()]\t/g, "").split("\t");
			return n[n.length - 1];
		}
content.forEach(function(def){
    allkeyWords.push(lastWord(def))

})


    fs.writeFileSync('snippets.code-snippets', '{\n');
    //console.log(allkeyWords)
    allkeyWords.forEach(function(keyword){
     let start = '"' + keyword+ '": {\n';
     let prefix = `\t"prefix": "${keyword}",\n`;
     let bodyStart = '\t"body": ['
     let body = `\t\t"${keyword}"\n`
     let bodyEnd = '\t],\n'
     let desc = `"description": "${keyword}"\n`
     let end = "},\n"

    
     fs.appendFileSync('snippets.code-snippets',start);
     fs.appendFileSync('snippets.code-snippets',prefix);
     fs.appendFileSync('snippets.code-snippets',bodyStart);
     fs.appendFileSync('snippets.code-snippets',body);
     fs.appendFileSync('snippets.code-snippets',bodyEnd);
     fs.appendFileSync('snippets.code-snippets',desc);
     fs.appendFileSync('snippets.code-snippets',end);

   
 })
fs.appendFileSync('test.code-snippets', '}\n');