import { CollectionConfig } from "payload/types";
import {
  Legal_Basis,
  Register,
  Time_register,
  transfer_preemptive_rights,
  address,
  payment,
} from "../Component/title";
const Announcement: CollectionConfig = {
  slug: "NotificationSale",
  admin: {
    group: "SaleAnnouncement",
  },
  fields: [
    {
      name: "document",
      label: "Biên bản chào bán",
      type: "upload",
      relationTo: "media",
      // required: true,
      admin: {
        description: "Biên bản họp thông báo chào bán cổ phần.",
      },
    },
    {
      name: "Legal_Basis",
      type: "ui",
      admin: {
        components: {
          Field: Legal_Basis,
        },
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "GiayChungNhan",
          label: "Giấy chứng nhận",
          type: "text",
          admin: {
            width: "30%",
            placeholder: "giấy chứng nhận đăng ký doanh nghiệp",
          },
        },
        {
          name: "PhongDangKy", // required
          label: "Phòng đăng ký tại",
          type: "select", // required
          hasMany: true,
          admin: {
            isClearable: true,
            isSortable: true,
          },
          options: [
            {
              label: "Thành phố Cần Thơ",
              value: "metallic_paint",
            },
            {
              label: "Thành phố Đà Nẵng",
              value: "alloy_wheels",
            },
            {
              label: "Thành phố Hà Nội",
              value: "carbon_fiber_dashboard",
            },
          ],
        },
        {
          name: "DangKyLanDau",
          type: "date",
          admin: {
            width: "30%",
            placeholder: "Đăng ký lần đầu",
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },
      ],
    },

    {
      type: "row",
      fields: [
        {
          name: "NghiQuyet",
          label: "Nghị quyết",
          type: "text",
          required: true,
          admin: {
            width: "20%",
            placeholder: "Nghị quyết ĐHĐCĐ bất thường số",
          },
        },
        {
          name: "Ngay",
          label: "Ngày",
          type: "date",
          admin: {
            width: "20%",
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },
      ],
    },
    {
      name: "Register",
      type: "ui",
      admin: {
        components: {
          Field: Register,
        },
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "TenCoPhan",
          label: "Tên cổ phần",
          type: "text",
          required: true,
          admin: {
            width: "30%",
            placeholder: "Tên cổ phần",
          },
        },
        {
          name: "LoaiCoPhan", // required
          label: "Loại cổ phần",
          type: "select", // required
          required: true,
          hasMany: true,
          admin: {
            width: "30%",
            isClearable: true,
            isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
          },
          options: [
            {
              label: "Cổ phần phổ thông",
              value: "metallic_paint",
            },
            {
              label: "Cổ phần ưu đãi Cổ tức",
              value: "alloy_wheels",
            },
            {
              label: "Cổ phần ưu đãi hoàn lại",
              value: "carbon_fiber_dashboard",
            },
            {
              label: "Cổ phần ưu đãi biểu quyết",
              value: "carbon_fiber_dashboard1",
            },
          ],
        },
        {
          name: "MenhGia",
          label: "Mệnh giá",
          type: "number",
          required: true,
          admin: {
            width: "30%",
            placeholder: "VNĐ/Cổ phần",
          },
        },
        {
          name: "TS_CP",
          required: true,
          label: "Tổng số cổ phần",
          type: "number",
          admin: {
            width: "30%",
            placeholder: "Cổ phần",
          },
        },
        {
          name: "GiaChaoBan",
          required: true,
          label: "Giá chào bán",
          type: "number",
          admin: {
            width: "30%",
            placeholder: "VNĐ/Cổ phần",
          },
        },
        {
          name: "GT_MD",
          required: true,
          label: "Giá trị chào bán theo mệnh giá",
          type: "number",
          admin: {
            width: "30%",
            placeholder: "Đồng",
          },
        },
      ],
    },
    {
      name: "Time_Register",
      type: "ui",
      admin: {
        components: {
          Field: Time_register,
        },
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "TuNgay",
          type: "date",

          label: "Từ ngày",
          required: true,
          admin: {
            width: "50%",
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },
        {
          name: "DenNgay",
          label: "Đến ngày",
          required: true,
          type: "date",
          admin: {
            width: "50%",
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },
      ],
    },
    {
      name: "transfer_preemptive_rights",
      type: "ui",
      admin: {
        components: {
          Field: transfer_preemptive_rights,
        },
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "start",
          type: "date",

          label: "Từ ngày",
          admin: {
            width: "50%",
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },
        {
          name: "end",
          label: "Đến ngày",
          type: "date",
          admin: {
            width: "50%",
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },
      ],
    },

    {
      name: "address",
      type: "ui",
      admin: {
        width: "100%",
        components: {
          Field: address,
        },
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "name_company",
          label: "Trụ sở chính",
          type: "text",
          admin: {
            width: "40%",
            placeholder: "Trụ sở chính của CÔNG TY CỔ PHẦN CÔNG NGHỆ TEKNIX",
          },
        },
        {
          name: "add_company",
          label: "Địa chỉ",
          type: "text",
          admin: {
            width: "30%",
            placeholder: "120A Đại Lộ Hòa Bình, Ninh Kiều, cần Thơ",
          },
        },
        {
          name: "phone_company",
          label: "Số điện thoại",
          type: "text",
          admin: {
            width: "20%",
            placeholder: "0902-090-982",
          },
        },
      ],
    },

    {
      name: "payment",
      type: "ui",
      admin: {
        components: {
          Field: payment,
        },
      },
    },
    {
      name: "name_cty",
      label: "Tên công ty",
      type: "relationship",
      relationTo: "users",
      required: true,
      admin: {
        description: "Chọn công ty",
      },
    },
  ],
};
export default Announcement;
