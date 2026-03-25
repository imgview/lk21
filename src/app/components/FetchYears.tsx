import axios from "axios";
import * as cheerio from "cheerio";

const FetchYears = async () => {
    try {
        const { data } = await axios.get("https://lk21.film/", { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }, timeout: 8000 });
        const $ = cheerio.load(data);
        const years = $(".dropdown-menu a[rel='category']")
            .map((_, el) => {
                const name = $(el).text().trim();
                const url = $(el).attr("href")?.split("/").filter(Boolean).pop() || "#";
                return /^\d{4}$/.test(name) ? { name, url } : null;
            }).get().filter(Boolean);
        return years;
    } catch { return []; }
};

export default FetchYears;