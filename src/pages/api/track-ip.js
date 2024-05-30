// pages/api/track-ip.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const filePath = req.headers['referer'] || 'Direct Access'; // สมมติว่า 'referer' header ใช้เพื่อตรวจสอบชื่อไฟล์ที่ถูกเข้าถึง

    const logEntry = `IP: ${ip}, Accessed: ${filePath}, Time: ${new Date().toISOString()}\n`;

    // เขียนไฟล์ log ไปยังโฟลเดอร์ logs ที่ต้องสร้างใน root directory ของโปรเจ็กต์
    fs.appendFile(path.join(process.cwd(), 'logs', 'access.log'), logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
            res.status(500).json({ message: 'Error logging access' });
            return;
        }
        res.status(200).json({ message: 'Logged successfully', ip });
    });
}
