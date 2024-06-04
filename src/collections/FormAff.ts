import { CollectionConfig } from "payload/types";
import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import Layout2 from './LinkAff';
import App from '../components/App';

const FormAff: CollectionConfig = {
  slug: "formAff",
  admin: {
      components: {
          BeforeList: [App],
      },
  },
  fields: [
    // {
    //     name: 'myCustomUIField', // required
    //     type: 'ui', // required
    //     admin: {
    //       components: {
    //         Field: Layout2,
    //       },
    //     },
    //   },
    {
      type: "group",
      name: "namegroup",
      label: "Thông tin cần điền",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "national",
              type: "text",
              label: "Quốc tịch",
            },
            {
              name: "level",
              type: "text",
              label: "Cấp độ",
            },
            {
              name: "accountId",
              type: "text",
              label: "Tên tài khoản",
            },
          ],
        },
        
        {
          type: "row",
          fields: [
            {
              name: "firstName",
              type: "text",
              label: "Tên",
            },
            {
              name: "lastName",
              type: "text",
              label: "Họ và Tên đệm",
            },
            {
              name: "dateOfBirth",
              type: "date",
              label: "Ngày sinh",
              admin: {
                width: "19%",
              },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "email",
              type: "email",
              label: "Email",
            },
            {
              name: "phoneNumber",
              type: "text",
              label: "Số điện thoại",
            },
            {
              name: "address",
              type: "text",
              label: "Địa chỉ",
            },
          ],
        },
      ],
    },
    {
      type: "group",
      name: "transactionHistory",
      label: "Lịch sử giao dịch",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "coPhanSoHuu",
              type: "text",
              label: "Cổ phần sở hữu",
            },
            {
              name: "invested",
              type: "number",
              label: "Số tiền đã đầu tư (USD)",
            },
            {
              name: "doanhSo",
              type: "number",
              label: "Doanh số trực tiếp (USD)",
            },
            {
              name: "tongDoanhSo",
              type: "number",
              label: "Tổng doanh số (USD)",
            },
          ],
        },
      ],
    },
  ],
};

export default FormAff;
