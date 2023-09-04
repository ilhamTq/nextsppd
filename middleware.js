export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/pegawai",
    "/golongan",
    "/jabatan",
    "/pjsppd",
    "/pjspt",
    "/sppd",
    "/spt",
    "/user",
  ],
};
