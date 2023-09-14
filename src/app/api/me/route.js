import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Jetsadawut Papherata",
    studentId: "650610753",
  });
};
