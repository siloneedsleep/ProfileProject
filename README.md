<p align="center">
  <a href="https://siloneedsleep.duckdns.org/">
    <img alt="Visit Website" src="https://img.shields.io/badge/→_Visit_siloneedsleep.duckdns.org-316BFF?style=for-the-badge&logo=google-chrome&logoColor=white" />
  </a>
  <a href="./LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-00ADEF?style=for-the-badge&logo=opensourceinitiative&logoColor=white" />
  </a>
</p>

# Profile Project — Personal Profile / Trang hồ sơ cá nhân

Author: @siloneedsleep

English | Vietnamese

---

## Overview (English)

Profile Project is a minimal, fast personal profile / portfolio built with Next.js (TypeScript). It focuses on clarity, performance, and easy customization. The live site is available at: https://siloneedsleep.duckdns.org/

Highlights
- Minimal, responsive design
- Can run as a Next.js app or be exported as static files
- Easy to customize using HTML/CSS and TypeScript

Quick stats (repository language breakdown)
- HTML — 86.7%
- TypeScript — 7.3%
- CSS — 5.7%
- JavaScript — 0.3%

Quick start (local)
1. Clone the repo:

   `git clone https://github.com/siloneedsleep/profile.git`
   `cd profile`

2. Install dependencies and run dev server:

   `npm install`
   `npm run dev`

3. Open http://localhost:3000

Build & run production

   `npm run build`
   `npm start`

Export static (if configured)

   `npm run build`
   `npm run export`

Deployment (short)
- Build on the server or locally: `npm run build`
- Run the app with a process manager (systemd, pm2, docker)
- Example nginx reverse proxy:

```
server {
  listen 80;
  server_name siloneedsleep.duckdns.org;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```
Use certbot or another ACME client to enable HTTPS.

Customization
- Edit the main content in `app/page.tsx` or `pages/index.*` (depending on project structure)
- Modify styles in the `styles` folder
- Add or replace `assets/screenshot.png` to show a demo preview in this README

License
This repository is licensed under the MIT License — see the included LICENSE file.

Contributing
Create a Pull Request or open an Issue. If you want, I can add PR/Issue templates or CI badges.

---

## Tóm tắt (Tiếng Việt)

Profile Project là trang hồ sơ/portfolio cá nhân tối giản, phát triển bằng Next.js (TypeScript). Mục tiêu là rõ ràng, tải nhanh và dễ tùy biến. Trang đang hoạt động tại: https://siloneedsleep.duckdns.org/

Tác giả: @siloneedsleep

Điểm nổi bật
- Giao diện tối giản, responsive
- Có thể chạy như ứng dụng Next.js hoặc xuất thành tệp tĩnh
- Dễ chỉnh sửa bằng HTML/CSS và TypeScript

Thống kê ngôn ngữ trong repo
- HTML — 86.7%
- TypeScript — 7.3%
- CSS — 5.7%
- JavaScript — 0.3%

Chạy nhanh (cục bộ)
1. Clone:

   `git clone https://github.com/siloneedsleep/profile.git`
   `cd profile`

2. Cài và chạy:

   `npm install`
   `npm run dev`

3. Mở http://localhost:3000

Build & chạy production

   `npm run build`
   `npm start`

Export tĩnh (nếu có cấu hình)

   `npm run build`
   `npm run export`

Triển khai (ngắn gọn)
- Build trên server hoặc local: `npm run build`
- Chạy app bằng process manager (systemd, pm2, docker)
- Ví dụ cấu hình nginx làm reverse proxy (xem phần English ở trên)
- Dùng certbot để bật HTTPS

Tùy biến
- Sửa nội dung chính tại `app/page.tsx` hoặc `pages/index.*`
- Sửa style trong thư mục `styles`
- Upload ảnh demo vào `assets/screenshot.png` để hiển thị trong README

Giấy phép
Kho này dùng MIT License — xem file LICENSE kèm theo.

Đóng góp
Tạo Pull Request hoặc Issue để đề xuất thay đổi. Hoan nghênh những thay đổi từ bạn và cộng đồng!
