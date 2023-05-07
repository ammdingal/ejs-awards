let express = require('express');
let app = express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/static/index.html');
})

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/awards', function(request, response){
    response.render('awards');
})

app.get('/webfun-exam', function(request, response){
    let webfun_array = [
        {img: 'images/html.jpg', exam: 'Web Fundamentals Exam', date: 'Jan 21, 2023', awardedBy: 'Lenard Cordial', technologies: 'HTML, CSS, LESS, Bootstrap, jQuery, SQL, ERD'}
    ]
    response.render('details', {array: webfun_array});
})

app.get('/php-exam', function(request, response){
    let php_array = [
        {img: 'images/php.jpg', exam: 'PHP Exam', date: 'Feb 17, 2023', awardedBy: 'Karen Igcasan', technologies: 'PHP, OOP, ORM, CodeIgniter, Ajax'}
    ]
    response.render('details', {array: php_array});
})

app.listen(8000, function(){
    console.log('listening on port 8000');
})