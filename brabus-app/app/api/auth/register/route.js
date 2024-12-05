import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { name, password, email, birthYear, country } = await req.json();

    // Хеширование пароля с использованием bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Преобразуем строку в дату и сохраняем только дату без времени
    const birthDate = new Date(birthYear);
    // birthDate.setHours(0, 0, 0, 0);

    // Сохранение данных в базу данных
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        birthYear: birthDate, // Сохраняем дату как объект Date
        country,
      },
    });

    return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error registering user:", error);
    return new Response(JSON.stringify({ error: "Error registering user" }), { status: 500 });
  }
}
