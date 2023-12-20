const express = require('express');
const bodyParser = require('body-parser');
const supabaseClient = require('@supabase/supabase-js');

const app = express();
const port = 4000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
const cors = require('cors');
app.use(cors());

//supabase
const supabaseUrl = 'https://oynhaxlqqeiebrozutfk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bmhheGxxcWVpZWJyb3p1dGZrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzAyNjMzNSwiZXhwIjoyMDE4NjAyMzM1fQ.5RhWoGQDdzJv3QzsP3CBNQ9KpMRe4j8IEmGY3CXaoHA'; 
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
});

// New endpoint for metricdata
app.get('/metrics', async (req, res) => {
    console.log(`Getting metrics`);

    const { data, error } = await supabase
        .from('metrics')
        .select();

    if (error) {
        console.log(error);
    } else if (data) {
        res.send(data);
    }
});

app.post('/metrics', async (req, res) => {
    try {
        // request body get state ID
        const { state } = req.body;

        // insert into metrics table on supabase
        const { data, error } = await supabase
            .from('metrics')
            .insert([{ state }]);

        if (error) {
            console.error('Error inserting state:', error);
            res.status(500).json({ error: 'error inserting state' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'server error' });
    }
});

app.get('/help', (req, res) => {
    console.log('i am here');
    res.sendFile('public/help.html', { root: __dirname });
});

app.listen(port, () => {
    console.log('APP IS Live');
});
