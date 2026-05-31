import express from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'SkillPulse backend is ready' });
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Welcome to SkillPulse' });
});

app.listen(port, () => {
  console.log(`Backend listening on http://0.0.0.0:${port}`);
});
