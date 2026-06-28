import { prisma } from "../../../database/prisma";
import { DefaultResponse } from "../../response";

export default async (): Promise<DefaultResponse> => {
  try {
    const readers = await prisma.readers.findMany({
      select: {
        publicId: true,
        name: true,
        email: true,
        phone: true,
        bio: true,
        loans: true,
      },
    });
    return {
      statusCode: 200,
      success: true,
      timestamp: new Date().toISOString(),
      data: { readers },
    };
  } catch (erro) {
    return {
      statusCode: 500,
      success: false,
      timestamp: new Date().toISOString(),
      message: "❌ INTERNAL ERROR - 500",
    };
  }
};
