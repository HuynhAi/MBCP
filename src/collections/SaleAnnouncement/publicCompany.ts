import { GlobalConfig } from "payload/types";
import { file_title } from "../Component/title";
const public_company: GlobalConfig = {
  slug: "publicCompanyRegistration",
  admin: {
    group: "SaleAnnouncement",
  },
  fields: [
    {
      name: "file_title",
      type: "ui",
      admin: {
        components: {
          Field: file_title,
        },
      },
    },
    {
      name: "document1",
      type: "upload",
      relationTo: "media",
      label: "Giấy đăng ký công ty đại chúng",
      required: true,
      admin: {
        description: "File đăng ký.",
      },
    },
    {
      name: "document2",
      type: "upload",
      relationTo: "media",
      label: "Điều lệ công ty",
      required: true,
      admin: {
        description: "File điều lệ.",
      },
    },
    {
      name: "document3",
      type: "upload",
      relationTo: "media",
      label: "Giấy chứng nhận đăng ký doanh nghiệp",
      required: true,
      admin: {
        description: "File .",
      },
    },
    {
      name: "document4",
      type: "upload",
      relationTo: "media",
      label: "Mẫu tại Phụ Lục số 34",
      required: true,
      admin: {
        description: "File phụ lục số 34 .",
      },
    },
    {
      name: "document5",
      type: "upload",
      relationTo: "media",
      label: "Báo cáo tài chính năm gần nhất",
      required: true,
      admin: {
        description: "File tài chính năm gần nhất",
      },
    },
    {
      name: "document6",
      type: "upload",
      relationTo: "media",
      label: "Danh sách cổ đông công ty",
      required: true,
      admin: {
        description: "File danh sách cổ đông",
      },
    },
  ],
};

export default public_company;
