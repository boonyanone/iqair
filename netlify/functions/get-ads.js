const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    try {
        const dataPath = path.join(process.cwd(), 'data', 'ads.json');
        
        if (!fs.existsSync(dataPath)) {
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ads: [] })
            };
        }
        
        const data = fs.readFileSync(dataPath, 'utf8');
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: data
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message })
        };
    }
};