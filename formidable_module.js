var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/Users/gdogg/' + files.filetoupload.originalFilename;
            fs.renmame(oldpath, newpath, function (err) {
                if (err) throw err;
            res.write('File uploaded and moved!');
            res.emd();
            });
});
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload" accept=".csv" ></input><br>');
        res.write('<input type="submit"></input>');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);