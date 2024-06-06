import type { NextApiRequest, NextApiResponse } from "next";

type DataType = {
  model?: string;
  color?: string;
  count?: number;
  name?: string;
  contact?: string;
};

const TELEGRAM_BOT_TOKEN = "6292118007:AAF2wEBMrPUKpS5rxvl23zxfkHzBJFrmQMU";
const TELEGRAM_CHAT_ID = "524803435";

async function sendTelegramMessage(message: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    }),
  });
  return response.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(1234);
  if (req.method === "POST") {
    const { model, color, count, name, contact }: DataType = req.body;

    const message = `
      Нова заявка:
      Модель: ${model}
      Колір: ${color}
      Кількість: ${count}
      Ім'я: ${name}
      Контакт: ${contact}
    `;

    try {
      await sendTelegramMessage(message);
      return res
        .status(200)
        .json({ message: "Заявка відправленна успішно", data: req.body });
    } catch (error) {
      return res.status(500).json({
        message: "Помилка",
        error: error,
      });
    }
  }
}
