export type ReaderCreated = {
  name: string;
  email: string;
  phone: string;
  bio?: string;
};

export type ReaderFull = ReaderCreated & {
  id: number;
  publicId: string;
  loans: string[];
};
