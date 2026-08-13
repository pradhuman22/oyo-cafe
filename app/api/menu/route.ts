import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1. Publish your Google Sheet to the web as CSV:
    // In Google Sheets: File > Share > Publish to web > Select CSV format and copy the link.
    const SHEET_CSV_URL = process.env.GOOGLE_SHEET_CSV_URL || "";

    if (!SHEET_CSV_URL) {
      return NextResponse.json(
        { error: "Google Sheet URL not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(SHEET_CSV_URL, { cache: "no-store" }); // Cache for 60 seconds
    const csvText = await response.text();

    // 2. Parse CSV rows (Expected columns: category, id, name, description, calories, price)
    const rows = csvText.split("\n").map((row) => {
      // Simple CSV parser handling quotes if any
      const matches =
        row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || row.split(",");
      return rowsParseClean(row);
    });

    // Better robust CSV line cleaner:
    const lines = csvText.split(/\r?\n/).filter(Boolean);
    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());

    const menuData: Record<string, any[]> = {};

    for (let i = 1; i < lines.length; i++) {
      // Handle comma separation inside quotes safely
      const currentLine =
        lines[i]
          .match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)
          ?.map((val) => val.replace(/^"|"$/g, "").trim()) ||
        lines[i].split(",");

      const item = {
        category: currentLine[0] || "Noodles",
        id: currentLine[1] || String(i),
        name: currentLine[2] || "",
        description: currentLine[3] || "",
        calories: currentLine[4] || "",
        price: currentLine[5] || "Rs. 0",
      };

      if (!menuData[item.category]) {
        menuData[item.category] = [];
      }

      menuData[item.category].push({
        id: item.id,
        name: item.name,
        description: item.description,
        calories: item.calories,
        price: item.price,
      });
    }

    return NextResponse.json(menuData);
  } catch (error) {
    console.error("Failed to fetch menu from Google Sheet:", error);
    return NextResponse.json({ error: "Failed to load menu" }, { status: 500 });
  }
}

function rowsParseClean(text: string) {
  return text.split(",").map((val) => val.trim().replace(/^"|"$/g, ""));
}
