import { CollectionConfig } from "payload/types";
import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";

const FormBuyMore: CollectionConfig = {
  slug: "formBuyMore",
  fields: [
    {
      name: "PersonalInfo",
      label: "Thông tin cá nhân",
      type: "group",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "fullName",
              label: "Họ và tên",
              type: "text",
            },
            {
              name: "national",
              label: "Quốc tịch",
              type: "text",
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "normalAddress",
              label: "Địa chỉ thường trú",
              type: "text",
            },
            {
              name: "contactAddress",
              label: "Địa chỉ liên lạc",
              type: "text",
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "workplace",
              label: "Nơi công tác hiện tại",
              type: "text",
            },
            {
              name: "position",
              label: "Chức vụ hiện tại",
              type: "text",
            },
          ],
        },

        {
          type: "row",
          fields: [
            {
              name: "nationalID",
              type: "text",
              label: "Số CCCD",
            },
            {
              name: "idProvider",
              type: "text",
              label: "Nơi cấp CCCD",
            },
            {
              name: "idDate",
              type: "date",
              label: "Ngày cấp CCCD",
              admin: {
                width: "15%",
              },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "telNumber",
              type: "text",
              label: "Tel",
            },
            {
              name: "mobiNumber",
              type: "text",
              label: "Mobi",
            },
            {
              name: "email",
              type: "email",
              label: "E-mail",
              admin: {
                width: "15%",
              },
            },
          ],
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "soCPHienCo",
          label: "Số cổ phần đang sở hữu tại công ty",
          type: "number",
        },
        {
          name: "soCPDuocMua",
          label: "Số cố phần được mua thêm",
          type: "number",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "soCPDKMua",
          label: "Số cổ phần đăng ký mua",
          type: "number",
        },
        {
          name: "total",
          label: "Thành tiền",
          type: "text",
        },
        {
          name: "totalInChar",
          label: "Bằng chữ",
          type: "text",
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "paymentMethod",
          type: "text",
          label: "Phương thức nộp tiền",
        },
        {
          name: "paymentTime",
          type: "date",
          label: "Thời gian nộp tiền",
          admin: {
            width: "17%",
          }
        },
      ],
    },
    {
      name: "relevant", // required
      type: "array", // required
      label: "Những người có liên quan đang nắm giữ cổ phần",
      labels: {
        singular: "Danh sách người có liên quan",
        plural: "Danh sách những người có liên quan",
      },
      fields: [
        // required
        {
          name: "fullName",
          type: "text",
          label: "Tên tổ chức/cá nhân",
        },
        {
          type: "row",
          fields: [
            {
              name: "nationalID",
              type: "text",
              label: "Số CCCD",
            },
            {
              name: "idProvider",
              type: "text",
              label: "Nơi cấp CCCD",
            },
            {
              name: "idDate",
              type: "date",
              label: "Ngày cấp CCCD",
              admin: {
                width: "15%",
              },
            },
          ],
        },
        {
          name: "relationship",
          label: "Mối quan hệ với người khai",
          type: "text",
        },
        {
          type: "row",
          fields: [
            {
              name: "soCPHienCo",
              label: "Số lượng cổ phần đang nắm giữ",
              type: "number",
            },
            {
              name: "soCPVIS",
              label: "% cổ phiếu VIS sở hữu/Vốn điều lệ VIS",
              type: "text",
            },
          ],
        },
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }: RowLabelArgs) => {
            return (
              data?.title || `Người liên quan ${String(index).padStart(2, "0")}`
            );
          },
        },
      },
    },
    {
      name: "agreeCheck",
      type: "checkbox",
      label: "Tôi đồng ý với các điều khoản và điều kiện",
      admin: {
        width: "100%",
        description:
          "Mua đủ số cổ phần đã đăng ký; chấp nhận thực trạng tài chính và tuân thủ Điều lệ của TekNix // Chịu trách nhiệm trước Pháp luật về tính hợp pháp của nguồn vốn mua cổ phần // Các nội dung khai trên đây là đúng sự thật, nếu có bất cứ sự không trung thực nào, tôi xin hoàn toàn chịu trách nhiệm trước pháp luật // Tuân thủ các quy định trong Điều lệ TekNix, quy định nội bộ của TekNix và các quy định của pháp luật có liên quan // Thực hiện đầy đủ các thủ tục mua bán, chuyển nhượng cổ phần theo quy định của Pháp luật và của TekNix.",
      },
    },
    {
      name: "chuKySo",
      type: "upload",
      relationTo: "media",
      label: "Người đăng ký (ký và ghi rõ họ tên)",
      admin: {
        description: "Chữ ký của cổ đông hiện đăng ký mua thêm cổ phần",
      },
    },
  ],
};

export default FormBuyMore;
