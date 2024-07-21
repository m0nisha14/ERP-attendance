const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const attendanceData = [];

app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/signup.html'));
});


app.post('/signup', (req, res) => {
    const { regNo, password } = req.body;
    
    
    console.log(`Registration Number: ${regNo}`);
    console.log(`Password: ${password}`);

    
    res.redirect('/attendance.html');
});


app.get('/attendance.html', (req, res) => {
    res.sendFile(path.join(__dirname, './public/attendance.html'));
});


app.get('/attendance-table.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/attendance-table.html'));
});


app.get('/attendance-data', (req, res) => {
    res.json(attendanceData);
});


app.post('/add-attendance', (req, res) => {
    const newRecord = req.body;
    attendanceData.push(newRecord);
    res.json(attendanceData);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
