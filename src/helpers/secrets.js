import md5 from "md5";

export const pubKey = '4d606eb8d06731e5d06fa6cd42c1a5d4';
export const privKey = '3bbaf5d4c373bc8c1c26af261d08b513674b6ad1';
export const ts = Number(new Date());
export const hash = md5(ts + privKey + pubKey);