import { CollectionConfig } from "payload/types";
import { TransferRights, Transferee, TR_title } from "../Component/title";
const Announcement: CollectionConfig = {
  slug: "share_transfer",
  admin: {
    group: "TransferPurchaseRights",
  },
  fields: [
    {
      name: "document",
      label: "Tải biên bản đề nghị chuyển nhượng quyền mua",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Biên bản chuyển nhượng quyền mua cổ phần.",
      },
    },
    {
      name: "TransferRights",
      type: "ui",
      admin: {
        components: {
          Field: TransferRights,
        },
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "CN",
          label: "Tên CĐ chuyển nhượng",
          type: "text",
          required: true,
          admin: {
            width: "50%",
            placeholder: "Nguyễn Văn ABC",
          },
        },
        {
          name: "MS",
          label: "Mã số cổ đông",
          type: "text",
          required: true,
          admin: {
            width: "50%",
            placeholder: "CD001",
          },
        },
        {
          name: "ID_CD",
          label: "CCCD/CMND",
          type: "text",
          required: true,
          admin: {
            width: "20%",
            placeholder: "098897999775",
          },
        },
        {
          name: "day",
          type: "date",
          admin: {
            width: "30%",
            placeholder: "Ngày cấp",
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },
        {
          name: "NC",
          label: "Nơi cấp",
          type: "text",
          required: true,
          admin: {
            width: "30%",
            placeholder: "Cục cảnh sát...",
          },
        },
        {
          name: "DC",
          type: "text",
          label: "Địa chỉ",
          required: true,
          admin: {
            width: "70%",
            placeholder: "120A Hòa Bình, Ninh Kiều, Cần Thơ",
          },
        },
        {
          name: "SDT",
          type: "text",
          label: "Số điện thoại",
          required: true,
          admin: {
            width: "20%",
            placeholder: "0945-572-338",
          },
        },
        {
          name: "DDPL",
          type: "text",
          label: "Đại diện pháp lý(Nếu có)",
          admin: {
            width: "70%",
            placeholder: "abc...",
          },
        },
        {
          name: "CV",
          type: "text",
          label: "Chức vụ",
          admin: {
            width: "20%",
            placeholder: "Quản lý abc",
          },
        },
        {
          name: "SH_CP",
          type: "number",
          label: "Số cổ phần sở hữu",
          admin: {
            width: "20%",
            placeholder: "xx cổ phần",
          },
        },
        {
          name: "TU",
          type: "text",
          label: "Tương ứng",
          admin: {
            width: "20%",
            placeholder: "....",
          },
        },
        {
          name: "BC",
          type: "text",
          label: "Số cổ phần ghi bằng chữ",
          admin: {
            width: "50%",
            placeholder: ".... cổ phần",
          },
        },
      ],
    },

    {
      name: "TR_title",
      type: "ui",
      admin: {
        components: {
          Field: TR_title,
        },
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "SL1",
          type: "number",
          label: "Số lượng",
          admin: {
            width: "50%",
            placeholder: "xx quyền mua",
          },
        },
        {
          name: "SL",
          type: "text",
          label: "Bằng chữ",
          admin: {
            width: "50%",
            placeholder: "abc quyền mua",
          },
        },
      ],
    },
    {
      name: "Transferee",
      type: "ui",
      admin: {
        components: {
          Field: Transferee,
        },
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "CN1",
          label: "Tên CĐ nhận chuyển nhượng",
          type: "text",
          required: true,
          admin: {
            width: "50%",
            placeholder: "Nguyễn Thị XYZ",
          },
        },
        {
          name: "MS1",
          label: "Mã số cổ đông",
          type: "text",
          required: true,
          admin: {
            width: "50%",
            placeholder: "CD001",
          },
        },
        {
          name: "ID_CD1",
          label: "CCCD/CMND",
          type: "text",
          required: true,
          admin: {
            width: "20%",
            placeholder: "098897999775",
          },
        },
        {
          name: "day1",
          type: "date",
          admin: {
            width: "30%",
            placeholder: "Ngày cấp",
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },
        {
          name: "NC1",
          label: "Nơi cấp",
          type: "text",
          required: true,
          admin: {
            width: "30%",
            placeholder: "Cục cảnh sát...",
          },
        },
        {
          name: "DC1",
          type: "text",
          label: "Địa chỉ",
          required: true,
          admin: {
            width: "70%",
            placeholder: "120A Nguyễn Bình, Cái Răng, Cần Thơ",
          },
        },
        {
          name: "SDT1",
          type: "text",
          label: "Số điện thoại",
          required: true,
          admin: {
            width: "20%",
            placeholder: "0977-522-563",
          },
        },
        {
          name: "DDPL1",
          type: "text",
          label: "Đại diện pháp lý(Nếu có)",
          admin: {
            width: "70%",
            placeholder: "abc...",
          },
        },
        {
          name: "CV1",
          type: "text",
          label: "Chức vụ",
          admin: {
            width: "20%",
            placeholder: "Nhân sự",
          },
        },
      ],
    },

    {
      type: "row",
      required: true,
      fields: [
        {
          name: "CK",
          type: "checkbox",
          label:
            "Chúng tôi cam đoan các thông tin trên là trung thực và hoàn toàn chịu trách nhiệm về sự chuyển nhượng này.Bên chuyển nhượng cam kết không còn bất cứ quyền lợi và nghĩa vụ nào đối với số quyền mua cổ phần này ngay sau khi việc chuyển nhượng được hoàn tất",
          defaultValue: false,
        },
      ],
    },
  ],
};
export default Announcement;
