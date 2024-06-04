import { CollectionConfig } from "payload/types";
import {
  introduce_organize,
  stockInfo,
  aimPoint,
  Transferee,
  sellMethod,
  stockSale,
} from "../Component/title";
const AddPublicOffering: CollectionConfig = {
  slug: "AddPublicOffering",
  admin: {
    group: "SaleAnnouncement",
  },
  fields: [
    {
      name: "document",
      label: "Tải biên bản đăng ký chào bán hêm cổ phần ra công chúng",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "introduce_organize",
      type: "ui",
      admin: {
        components: {
          Field: introduce_organize,
        },
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "TTC",
          label: "Tên tổ chức phát hành (đầy đủ)",
          type: "text",
          required: true,
          admin: {
            width: "50%",
            placeholder: " ABC",
          },
        },
        {
          name: "DC",
          label: "Địa chỉ trụ sở chính",
          type: "text",
          required: true,
          admin: {
            width: "50%",
            placeholder: "120A Trần Hưng Đạo, Ninh Kiều, Cần Thơ",
          },
        },
        {
          name: "SDT",
          label: "Số điện thoại",
          type: "text",
          required: true,
          admin: {
            width: "20%",
            placeholder: "0988-979-099",
          },
        },
        {
          name: "fax",
          label: "Fax",
          type: "text",
          required: true,
          admin: {
            width: "20%",
            placeholder: "+84 (8) 3823 36xx",
          },
        },
        {
          name: "web",
          label: "Website",
          type: "text",
          required: true,
          admin: {
            width: "30%",
            placeholder: "abc.com",
          },
        },
        {
          name: "VDL",
          type: "text",
          label: "Vốn điều lệ",
          required: true,
          admin: {
            width: "50%",
            placeholder: "VNĐ",
          },
        },
        {
          name: "MCP",
          type: "text",
          label: "Mã cổ phiếu (nếu có)",
          admin: {
            width: "50%",
            placeholder: "CP945",
          },
        },
        {
          name: "DCTT",
          type: "text",
          label: "Nơi mở tài khoản thanh toán",
          admin: {
            width: "70%",
            placeholder: "36A Hòa Bình, Ninh Kiều, Cần Thơ",
          },
        },
        {
          name: "STK",
          type: "text",
          label: "Số hiệu tài khoản",
          admin: {
            width: "20%",
            placeholder: "009089829898",
          },
        },
        {
          name: "GCNDK",
          type: "number",
          label: "Mã số doanh nghiệp",
          admin: {
            width: "20%",
            placeholder: "Mã số trong giấy chứng nhận đăng ký doanh nghiệp",
          },
        },
        {
          name: "KT_DT",
          type: "text",
          label: "Do Sở Kế hoạch và Đầu tư",
          admin: {
            width: "10%",
            placeholder: "Cần Thơ",
          },
        },
        {
          name: "NLD",
          type: "date",
          label: "Cấp lần đầu ngày",
          admin: {
            width: "20%",
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },
        {
          name: "TD",
          type: "number",
          label: "Cấp thay đổi lần thứ",
          admin: {
            width: "10%",
            placeholder: "2",
          },
        },
        {
          name: "NTD",
          type: "date",
          label: "Ngày thay đổi",
          admin: {
            width: "20%",
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "d MMM yyy",
            },
          },
        },

        {
          name: "NNKD",
          type: "text",
          label: "Ngành nghề kinh doanh chính",
          admin: {
            width: "30%",
            placeholder: "Bán abc",
          },
        },
        {
          name: "MAKD",
          type: "text",
          label: "Mã ngành",
          admin: {
            width: "30%",
            placeholder: "M099",
          },
        },
        {
          name: "SP_DV",
          type: "text",
          label: "Sản phẩm/dịch vụ chính",
          admin: {
            width: "30%",
            placeholder: "Sản phẩm ABC",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "document2",
          type: "upload",
          relationTo: "media",
          label: "Tải giấy phép thành lập và kinh doanh",
          required: true,
          admin: {
            description: "Giấy phép thành lập và kinh doanh.",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "enableCoolStuff", // required
          type: "checkbox", // required
          label:
            "Tổ chức phát hành thuộc ngành, nghề kinh doanh có điều kiện mà pháp luật chuyên ngành quy định phải có chấp thuận của cơ quan quản lý nhà nước có thẩm quyền về việc phát hành",
          defaultValue: false,
        },
        {
          name: "enableCoolStuff1", // required
          type: "checkbox", // required
          label:
            "Tổ chức phát hành thuộc trường hợp cơ cấu lại (trường hợp hợp nhất) trong giai đoạn từ thời điểm bắt đầu kỳ kế toán của năm thứ hai liền trước năm đăng ký chào bán đến thời điểm đăng ký chào bán",
          defaultValue: false,
        },
        {
          name: "enableCoolStuff2", // required
          type: "checkbox", // required
          label:
            "Tổ chức phát hành thuộc trường hợp cơ cấu lại (sáp nhập, mua lại doanh nghiệp, bán tài sản), trường hợp tách công ty (với tổng giá trị tài sản các công ty được tách từ 35% tổng giá trị tài sản trở lên của công ty trước khi tách) trong giai đoạn từ thời điểm bắt đầu kỳ kế toán của năm liền trước năm đăng ký chào bán đến thời điểm đăng ký chào bán",
          defaultValue: false,
        },
      ],
    },

    {
      name: "stockInfo",
      type: "ui",
      admin: {
        components: {
          Field: stockInfo,
        },
      },
    },
    {
      type: "tabs", // required
      tabs: [
        // required
        {
          label: "Cổ phiếu phổ thông", // required
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "SLCPPH",
                  type: "number",
                  label: "Tổng số lượng cổ phiếu đã phát hành",
                  admin: {
                    width: "50%",
                    placeholder: "XX Cổ phiếu",
                  },
                },
                {
                  name: "SLCPLH",
                  type: "text",
                  label: "Tổng số lượng cổ phiếu đang lưu hành",
                  admin: {
                    width: "50%",
                    placeholder: "XX Cổ phiếu",
                  },
                },

                {
                  name: "GTCPLH",
                  type: "text",
                  label: "Tổng giá trị cổ phiếu đang lưu hành",
                  admin: {
                    width: "50%",
                    placeholder: "XXX VNĐ",
                  },
                },
                {
                  name: "DD",
                  type: "text",
                  label: "Đặc điểm",
                  admin: {
                    width: "50%",
                    placeholder: "Đặc điểm đi kèm abc",
                  },
                },

                {
                  name: "TSCPQ",
                  type: "number",
                  label: "Tổng số sổ phiếu quỹ",
                  admin: {
                    width: "20%",
                    placeholder: "XX Cổ phiếu",
                  },
                },
                {
                  name: "LMGN",
                  type: "date",
                  label: "Lần mua lại cổ phiếu gần nhất",
                  admin: {
                    date: {
                      pickerAppearance: "dayOnly",
                      displayFormat: "d MMM yyy",
                    },
                  },
                },
                {
                  name: "SLCPML",
                  type: "number",
                  label: "Số lượng cổ phiếu mua lại",
                  admin: {
                    width: "20%",
                    placeholder: "XX Cổ phiếu",
                  },
                },
                {
                  name: "NKTM",
                  type: "date",
                  label: "Ngày kết thúc mua lại cổ phiếu",
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
          ],
        },
        //================================
        {
          name: "tabTwo",
          label: "Cổ phiếu ưu đãi", // required
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "LoaiCoPhan", // required
                  label: "Loại cổ phiếu ưu đãi",
                  type: "select", // required
                  hasMany: true,
                  admin: {
                    width: "100%",
                    isClearable: true,
                    isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
                  },
                  options: [
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
                  name: "TONGCP",
                  type: "number",
                  label: "Tổng số cổ phiếu",
                  admin: {
                    width: "20%",
                    placeholder: "XX Cổ phiếu",
                  },
                },
                {
                  name: "TONGGTCP",
                  type: "number",
                  label: "Tổng giá trị cổ phiếu",
                  admin: {
                    width: "20%",
                    placeholder: "XXX VNĐ",
                  },
                },
                {
                  name: "DDND",
                  type: "text",
                  label: "Đặc điểm",
                  admin: {
                    width: "20%",
                    placeholder: "đặc điểm cổ phiếu....",
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "aimPoint",
      type: "ui",
      admin: {
        components: {
          Field: aimPoint,
        },
      },
    },
    {
      name: "metaDescription", // required
      type: "textarea", // required

      required: true,
    },
    ///////////
    {
      name: "sellMethod",
      type: "ui",
      admin: {
        components: {
          Field: sellMethod,
        },
      },
    },
    {
      name: "metaDescription1", // required
      type: "textarea", // required

      required: true,
    },

    {
      name: "stockSale",
      type: "ui",
      admin: {
        components: {
          Field: stockSale,
        },
      },
    },
    {
      name: "metaDescription2", // required
      type: "textarea", // required

      required: true,
    },
    {
      name: "TENCP", // required
      type: "text", // required
      label: "Tên cổ phiếu",
    },
    {
      name: "LOAICP", // required
      type: "text", // required
      label: "Loại cổ phiếu",
    },
    {
      name: "MENHGIACP", // required
      type: "text", // required
      label: "Mệnh giá cổ phiếu",
      admin: {
        placeholder: "đồng/cổ phiếu",
      },
    },
    {
      name: "GIACAONHATCP", // required
      type: "text", // required
      label: "Giá chào bán cao nhất dự kiến",
      admin: {
        placeholder: "đồng/cổ phiếu",
      },
    },
    {
      name: "GIATHAPNHATCP", // required
      type: "text", // required
      label: "Giá chào bán thấp nhất dự kiến",
      admin: {
        placeholder: "đồng/cổ phiếu",
      },
    },
    {
      name: "SOLUONGCP", // required
      type: "number", // required
      label: "Số lượng cổ phiếu đăng ký chào bán",
      admin: {
        placeholder: "cổ phiếu",
      },
    },
    {
      name: "SOLUONGCP_TOCHUC", // required
      type: "number", // required
      label: "Số lượng cổ phiếu tổ chức phát hành đăng ký chào bán",
      admin: {
        placeholder: "cổ phiếu",
      },
    },
    {
      name: "SOLUONGCP_CODONG", // required
      type: "number", // required
      label: "Số lượng cổ phiếu cổ đông/thành viên đăng ký chào bán",
      admin: {
        placeholder: "cổ phiếu",
      },
    },
    {
      name: "VONHUYDONG", // required
      type: "text", // required
      label: "Tổng giá trị vốn huy động dự kiến",
      admin: {
        placeholder: "đồng",
      },
    },
    {
      name: "THOIGIANBAN",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
      label: "Thời gian dự kiến chào bán",
    },
    {
      name: "PTPHANPHOI",
      type: "text",
      label: "Phương thức phân phối",
      admin: {
        placeholder:
          "thông qua tổ chức bảo lãnh phát hành, đại lý phát hành, đấu giá,...",
      },
    },
    //////////////////////////
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
            "Chúng tôi cam đoan các thông tin trên là trung thực và hoàn toàn chịu trách nhiệm về sự chuyển nhượng này. Bên chuyển nhượng cam kết không còn bất cứ quyền lợi và nghĩa vụ nào đối với số quyền mua cổ phần này ngay sau khi việc chuyển nhượng được hoàn tất",
          defaultValue: false,
        },
      ],
    },
  ],
};
export default AddPublicOffering;
