const servicesData = [
  {
    title: "วางแผนยื่นกู้สินเชื่อแบบตรงจุด",
    image: "https://i.imgur.com/IuTnf7S.png",
    description:
      "วิเคราะห์โปรไฟล์ลูกค้าให้ตรงกับเงื่อนไขของแต่ละธนาคาร และวางแผนจัดชุดเอกสารให้เหมาะสมตามเป้าหมาย เช่น สินเชื่อบุคคล / SME / รีไฟแนนซ์ ฯลฯ",
    price: "4,000 – 300,000 บาท",
    target: "เจ้าของธุรกิจ, ฟรีแลนซ์, ผู้ที่มีโปรไฟล์ไม่สมบูรณ์",
  },
  {
    title: "ดูแลเอกสารยื่นวีซ่าทุกประเภท",
    image: "https://i.imgur.com/IuTnf7S.png",
    description:
      "ตรวจสอบและจัดชุดเอกสารยื่นวีซ่าตามประเทศปลายทาง พร้อมคำนวณความสมจริงของรายรับ-รายจ่าย รับงานด่วนและรอบพิเศษได้",
    price: "เริ่มต้น 4,000 บาท",
    target: "ผู้ขอวีซ่าท่องเที่ยว / ธุรกิจ / คู่สมรส",
  },
  {
    title: "SLIBBANK – สลิปโอนเงิน/รับเงิน (ตรวจสอบได้)",
    image: "https://i.imgur.com/ybpCoKs.png",
    description:
      "สลิปสมจริง ตรวจสอบได้จริง ปรับชื่อบัญชี, เวลา, โลโก้, ยอดเงิน ตามต้องการ",
    price: "100 บาท/ใบ | 10 ใบ 500 บาท",
    target: "สร้างภาพลักษณ์การเงิน / โปรไฟล์ขอสินเชื่อ",
  },
  {
    title: "บริการเอกสาร: แก้ไข / สร้างใหม่ / จัดหา",
    image: "https://i.imgur.com/ybpCoKs.png",
    description:
      "แก้ไข PDF / Word / ภาพถ่าย หรือสร้างใหม่ทั้งหมดแบบสมจริง ใช้งานได้",
    price: "แก้ไข: 400 บาท | สร้างใหม่: 600 บาท",
    target: "ผู้ยื่นกู้ / ยื่นวีซ่า / ยืนยันสถานะต่าง ๆ",
  },
  {
    title: "ผลิตชิ้นงานจริง (บัตรแข็ง/พลาสติก/ปัดอ่อน)",
    image: "https://i.imgur.com/ybpCoKs.png",
    description:
      "บัตรจริงพร้อม hologram, QR, ส่งปลอดภัย",
    price: "เริ่มต้น 4,000 บาท",
    target: "ยื่นงาน / ยืนยันตน / แสดงเครดิต",
  },
  {
    title: "ออกแบบโลโก้ / แบนเนอร์ / ปกเพจ",
    image: "https://i.imgur.com/awWPh8v.png",
    description:
      "ออกแบบโดยเน้นตัวตนแบรนด์ ไฟล์ครบ PNG/JPG/SVG",
    price: "เริ่มต้น 300 บาท",
    target: "ธุรกิจใหม่ / branding / ปรับภาพลักษณ์เพจ",
  },
  {
    title: "ดูแลการตลาดครบวงจร + ระบบหลังบ้าน",
    image: "https://i.imgur.com/Fy1c2vn.png",
    description:
      "วางแผน content, ยิง ads, ออกแบบภาพ, ระบบ Bot, รายงานผลแบบ Dashboard",
    price: "5,000 – 500,000 บาท",
    target: "ธุรกิจที่ต้องการโตไว / ขยายตลาด",
  },
  {
    title: "โครงการ “ให้น้องได้พักผ่อน” – AI Matching",
    image: "https://i.imgur.com/5zMJP5e.png",
    description:
      "ระบบจับคู่งานอัตโนมัติผ่าน AI ผ่าน LINE/TG สำหรับฟรีแลนซ์ไม่อยากตอบแชทเอง",
    price: "เริ่มต้น 4,000 บาท",
    target: "สายเอกสาร / รับจ้างทั่วไป / บริการหลังบ้าน",
  },
];

export default function Services() {
  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">บริการของเรา</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow hover:shadow-lg transition-all"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {service.description}
            </p>
            <p className="text-sm font-medium mb-1">
              💰 <span className="text-green-600">{service.price}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              👥 {service.target}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}