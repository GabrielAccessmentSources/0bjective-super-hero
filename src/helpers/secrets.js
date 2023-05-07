import md5 from "md5";

export const pubKey = '61fc3f25dba29681f1df46a370b8170f';
export const privKey = 'c49b9a61ba3d2a6dba83c23f6f0bac8add32a2b7';
export const ts = Number(new Date());
export const hash = md5(ts + privKey + pubKey);