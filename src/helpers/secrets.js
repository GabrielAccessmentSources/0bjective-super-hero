import md5 from "md5";

export const pubKey = '489c5990586b00a6eb8dba3a324f2dc2';
export const privKey = 'fa75dbec96a1353563370b3987d6a1fca5ca5e28';
export const ts = Number(new Date());
export const hash = md5(ts + privKey + pubKey);