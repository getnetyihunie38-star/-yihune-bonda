import crypto from "crypto"; import {cookies} from "next/headers";
const NAME="yb_admin"; const sign=(v:string)=>crypto.createHmac("sha256",process.env.SESSION_SECRET||"").update(v).digest("hex");
export const session=()=>{const v=Date.now()+"."+crypto.randomBytes(20).toString("hex");return v+"."+sign(v)};
export const valid=(v?:string)=>{if(!v)return false;const a=v.split(".");if(a.length!==3)return false;return crypto.timingSafeEqual(Buffer.from(a[2]),Buffer.from(sign(a[0]+"."+a[1])))}; 
export async function admin(){return valid((await cookies()).get(NAME)?.value)} export {NAME};