# siloneedsleep — Personal Profile Website

[![Visit Website](https://img.shields.io/badge/Visit-siloneedsleep.duckdns.org-316BFF?style=for-the-badge&logo=internet-explorer&logoColor=white)](https://siloneedsleep.duckdns.org/)

Trang hồ sơ cá nhân được phát triển bằng Next.js và triển khai tại: https://siloneedsleep.duckdns.org/

## Mô tả

Repository này chứa mã nguồn trang cá nhân/portfolio của tác giả. Mục tiêu: tối giản, nhanh, dễ tùy biến và dễ triển khai.

## Điểm nổi bật

- Thiết kế gọn nhẹ, thích hợp làm trang giới thiệu cá nhân và liên kết dự án.
- Dự án sử dụng Next.js (TypeScript) — có thể chạy dưới dạng ứng dụng server-side hoặc xuất tĩnh.
- Đã triển khai và hoạt động tại https://siloneedsleep.duckdns.org/.

## Ngôn ngữ & Công nghệ

- Next.js + TypeScript
- HTML, CSS
- Tĩnh/Frontend-first

(Breakdown ngôn ngữ trong repository: HTML ~86.7%, TypeScript ~7.3%, CSS ~5.7%, JavaScript ~0.3%)

## Chạy dự án (cục bộ)

1. Clone repository:

   git clone https://github.com/siloneedsleep/profile.git
   cd profile

2. Cài dependencies và chạy môi trường phát triển:

   npm install
   npm run dev

3. Mở trình duyệt tới http://localhost:3000 để xem trang.

4. Để build và chạy production:

   npm run build
   npm start

Hoặc để xuất tĩnh (nếu muốn deploy dưới dạng static):

   npm run build
   npm run export

Thao tác cụ thể có thể khác nếu repo dùng mẫu v0 — xem script trong `package.json`.

## Triển khai

Trang đang chạy tại: https://siloneedsleep.duckdns.org/

Bạn có thể triển khai lại bằng cách:

- Đẩy build lên VPS (ví dụ với nginx reverse proxy và Node service), hoặc
- Xuất tĩnh và phục vụ bằng web server tĩnh (nginx, Caddy), hoặc
- Dùng dịch vụ hosting hỗ trợ Next.js.

## Tùy biến nhanh

- Nội dung chính: chỉnh `app/page.tsx` hoặc `pages/index.*` (tùy cấu trúc dự án).
- CSS/Style: chỉnh thư mục `styles` hoặc file CSS tương ứng.
- Thêm tính năng phía client: chỉnh/viết TypeScript trong `src` hoặc `app`.

## Mạng xã hội & Liên hệ

- Website: https://siloneedsleep.duckdns.org/
- Muốn cập nhật thông tin liên hệ trên trang, chỉnh nội dung trong file giao diện tương ứng và gửi PR.

## Đóng góp

Hoan nghênh mọi đóng góp đến từ bạn và cộng đồng! Mời tạo Pull Request hoặc Issue và nêu rõ thay đổi.
