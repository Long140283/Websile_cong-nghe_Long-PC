// src/data/index.js

export const projects = [
  {
    id: 1,
    title: "Phần mềm Bệnh viện Python",
    description: "Hệ thống quản lý bệnh viện toàn diện với tính năng quản lý bệnh nhân, hồ sơ bệnh án và lịch hẹn. Tối ưu hóa quy trình vận hành cho cơ sở y tế.",
    tech: ["Python", "Tkinter", "SQLite", "ReportLab"],
    link: "https://github.com",
    demo: "#",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "AI Automation Workflow",
    description: "Tự động hóa quy trình làm việc sử dụng LLMs (Ollama/Claude). Xử lý văn bản, phân loại dữ liệu và trích xuất thông tin tự động.",
    tech: ["Python", "LangChain", "Ollama", "FastAPI"],
    link: "https://github.com",
    demo: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Excel Data Automation Tool",
    description: "Tool chuyên dụng xử lý các file Excel khổng lồ, làm sạch dữ liệu và tạo báo cáo tự động chỉ với một click.",
    tech: ["Python", "Pandas", "Openpyxl", "PySide6"],
    link: "https://github.com",
    demo: "#",
    image: "https://images.unsplash.com/photo-1543286386-2e671302b191?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Google Sheets & Power Query Integration",
    description: "Đồng bộ hóa dữ liệu thời gian thực giữa các nền tảng khác nhau và Google Sheets thông qua API chuyên sâu.",
    tech: ["Power Query", "Google API", "JavaScript", "Excel"],
    link: "https://github.com",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  }
];

export const blogs = [
  {
    id: 1,
    title: "Hướng dẫn xây dựng AI Chatbot với Ollama và Python",
    date: "12 May, 2026",
    category: "AI",
    excerpt: "Làm thế nào để chạy các mô hình ngôn ngữ lớn ngay trên máy tính cá nhân của bạn và tích hợp chúng vào ứng dụng Python.",
    link: "#"
  },
  {
    id: 2,
    title: "Tối ưu hóa báo cáo Excel với Power Query",
    date: "05 May, 2026",
    category: "Automation",
    excerpt: "Khám phá sức mạnh của Power Query để xử lý hàng triệu dòng dữ liệu trong nháy mắt.",
    link: "#"
  },
  {
    id: 3,
    title: "Tương lai của Coding với Claude Code",
    date: "28 April, 2026",
    category: "Coding",
    excerpt: "AI đang thay đổi cách chúng ta viết code như thế nào? Trải nghiệm thực tế với Claude Code.",
    link: "#"
  }
];

export const skills = [
  { name: "Python", level: 90, category: "Language" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "AI Automation", level: 80, category: "AI" },
  { name: "Power Query", level: 95, category: "Data" }
];

export const socials = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
  { name: "Zalo", url: "https://zalo.me", icon: "message-circle" },
  { name: "Email", url: "mailto:your@email.com", icon: "mail" }
];
