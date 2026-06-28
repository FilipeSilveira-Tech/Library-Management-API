import { prisma } from "../../../database/prisma";
import { DefaultResponse } from "../../response";
import { ReaderCreated } from "../reader.types";

export default async (reader_data: ReaderCreated): Promise<DefaultResponse> => {
  try {
    await prisma.readers.create({
      data: {
        name: reader_data.name,
        email: reader_data.email,
        phone: reader_data.name,
        bio: reader_data.bio || "Um entusiasta por leituras!",
      },
    });
    return {
      statusCode: 201,
      success: true,

      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("❌ ERRO INTERNO", error);
    return {
      statusCode: 500,
      message: "❌ ERRO INTERNO NA CRIAÇÃO DO USUÁRIO!",
      success: false,
      timestamp: new Date().toISOString(),
    };
  }
};
