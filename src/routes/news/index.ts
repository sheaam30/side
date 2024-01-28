import * as express from 'express';
import { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/everything', async (req: Request, res: Response) => {
    try {
        let newsApiUrl = "https://newsapi.org/v2/everything?q=AI";

        const response = await axios.get(newsApiUrl, {
            headers: {
                //TODO Store this in Secrets Vault
                'X-Api-Key': `b778776fdfef48ac9cc4c31aaae89624`
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;