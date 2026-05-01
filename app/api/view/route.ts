import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const field = searchParams.get("field") || "link_url"; // For scholarships which have multiple links

  if (!type || !id) {
    return new NextResponse("Missing type or id", { status: 400 });
  }

  let table = "";
  let urlField = "link_url";

  switch (type) {
    case "note":
      table = "notes";
      break;
    case "paper":
      table = "question_papers";
      break;
    case "scholarship":
      table = "scholarships";
      urlField = field === "apply" ? "apply_link" : "info_link";
      break;
    case "minor":
      table = "minor_courses";
      urlField = "syllabus_link";
      break;
    case "syllabus":
      table = "syllabus_curriculum";
      break;
    default:
      return new NextResponse("Invalid type", { status: 400 });
  }

  const { data, error } = await supabase
    .from(table)
    .select(urlField)
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error(`Error fetching redirect URL:`, error);
    return new NextResponse("Link not found", { status: 404 });
  }

  const redirectUrl = (data as any)[urlField];

  if (!redirectUrl) {
    return new NextResponse("URL not found for this record", { status: 404 });
  }

  return NextResponse.redirect(redirectUrl);
}
