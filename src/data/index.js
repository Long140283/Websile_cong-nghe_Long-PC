// src/data/index.js

export const projects = [
  {
    id: 1,
    title: "Hệ thống Quản lý Bệnh viện",
    description: "Giải pháp quản lý bệnh nhân và hồ sơ bệnh án tự động hóa bằng Python. Tích hợp báo cáo và lịch hẹn thông minh.",
    tech: ["Python", "Tkinter", "SQLite", "ReportLab"],
    link: "https://github.com/Long140283/hospital-management", // Thay bằng link thật của bạn
    demo: "https://youtu.be/demo1", // Link video demo hoặc web demo
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "AI Automation Workflow",
    description: "Tự động hóa xử lý văn bản và trích xuất dữ liệu sử dụng LLMs. Giảm 80% thời gian xử lý thủ công.",
    tech: ["Python", "Ollama", "Claude API", "FastAPI"],
    link: "https://github.com/Long140283/ai-automation",
    demo: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Excel Data Professional Tool",
    description: "Công cụ xử lý Excel chuyên sâu cho báo cáo tài chính và dữ liệu lớn. Tích hợp Power Query và Python Pandas.",
    tech: ["Python", "Pandas", "Power Query", "Excel"],
    link: "https://github.com/Long140283/excel-tool",
    demo: "#",
    image: "https://images.unsplash.com/photo-1543286386-2e671302b191?q=80&w=800&auto=format&fit=crop"
  }
];

export const blogs = [
  {
    id: 1,
    title: "Làm chủ AI Coding với Antigravity",
    date: "15 May, 2026",
    category: "AI",
    excerpt: "Cách tận dụng AI để tăng tốc độ lập trình gấp 10 lần và xây dựng các dự án phức tạp một mình.",
    link: "/blog/1",
    content: `
# Cách tôi xây dựng Portfolio này trong vài giờ

Sử dụng AI như **Antigravity** không chỉ là việc nhờ nó viết code, mà là sự phối hợp giữa tư duy con người và tốc độ của máy tính.

## Tại sao nên dùng AI để lập trình?
- **Tốc độ**: Xử lý các tác vụ lặp đi lặp lại trong giây lát.
- **Sáng tạo**: Gợi ý các thư viện và phong cách thiết kế hiện đại.
- **Học tập**: Bạn có thể học cách code chuẩn thông qua các đoạn mã AI tạo ra.

### Mã nguồn mẫu
Dưới đây là cách chúng ta khởi tạo một hiệu ứng đánh chữ trong React:

\`\`\`javascript
const typingEffect = (text) => {
  console.log("Đang đánh chữ: " + text);
};
\`\`\`

> "AI sẽ không thay thế lập trình viên, nhưng lập trình viên biết dùng AI sẽ thay thế những người không biết."

Hãy bắt đầu dự án của bạn ngay hôm nay!
    `
  },
  {
    id: 2,
    title: "Tự động hóa báo cáo với Python & Power Query",
    date: "10 May, 2026",
    category: "Automation",
    excerpt: "Hướng dẫn chi tiết cách kết nối các nguồn dữ liệu phân tán và tạo báo cáo Dashboard tự động.",
    link: "/blog/automation-guide"
  }
];

export const skills = [
  { name: "Python", level: 95, category: "Core Languages" },
  { name: "AI Automation", level: 90, category: "AI & Automation" },
  { name: "Power Query", level: 95, category: "Data & Workflow" },
  { name: "ReactJS", level: 85, category: "Frontend & UI" },
  { name: "Google Sheets API", level: 90, category: "AI & Automation" }
];

export const socials = [
  { 
    name: "GitHub", 
    url: "https://github.com/Long140283", 
    icon: "github",
    description: "Mã nguồn các dự án"
  },
  { 
    name: "Facebook", 
    url: "https://www.facebook.com/profile.php?id=YOUR_ID", // Hãy thay ID của bạn vào đây
    icon: "facebook",
    description: "Kết nối cá nhân"
  },
  { 
    name: "Zalo", 
    url: "https://zalo.me/YOUR_PHONE", // Hãy thay số điện thoại vào đây
    icon: "message-circle",
    description: "Trao đổi công việc"
  },
  { 
    name: "Email", 
    url: "mailto:your-email@example.com", 
    icon: "mail",
    description: "Gửi thư trực tiếp"
  }
];

// Thêm mục Downloads cho các tài liệu hoặc Tool
export const downloads = [
  {
    title: "Curriculum Vitae (CV)",
    type: "PDF",
    url: "/downloads/Long_CV.pdf",
    description: "Hồ sơ năng lực chi tiết"
  },
  {
    title: "Excel Automation Tool",
    type: "EXE",
    url: "/downloads/tool-excel.zip",
    description: "Bản dùng thử công cụ xử lý Excel"
  }
];
