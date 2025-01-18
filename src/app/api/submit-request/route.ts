import { NextResponse } from "next/server";
import fetch from 'node-fetch';
import https from 'https';
type DataType = {
  model?: string;
  color?: string;
  count?: number;
  name?: string;
  contact?: string;
};

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const agent = new https.Agent({
  keepAlive: false,
  family: 4,
});
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
    agent
  });
  return response.json();
}

export async function POST(req: Request) {
  const { model, color, count, name, contact }: DataType = await req.json();
  if (!name) {
    return NextResponse.json({
      message: "Ім'я не може бути порожнім",
    });
  }
  if (!contact) {
    return NextResponse.json({
      message: "Контактні дані не можуть бути порожні",
    });
  }
  let message = `Нова заявка:\nІм'я: ${name}\nКонтакт: ${contact}\n`;
  if (model) {
    message += `Модель: ${model}\n`;
  }
  if (color) {
    message += `Колір: ${color}\n`;
  }
  if (count) {
    message += `Кількість: ${count}\n`;
  }

  try {
    await sendTelegramMessage(message);
    return NextResponse.json({
      message: "Заявка відправленна успішно",
      data: req.body,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Помилка",
      error: error,
    });
  }
}
