import { redirect } from "next/navigation"

// Trang cá nhân là một file HTML tĩnh duy nhất: /public/index.html
export default function Page() {
  redirect("/index.html")
}
