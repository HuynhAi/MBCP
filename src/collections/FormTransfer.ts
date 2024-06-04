import { CollectionConfig } from "payload/types";

const FormTransfer: CollectionConfig = {
  slug: "formTransfer",
  fields: [
    {
      name: "benChuyenNhuong",
      type: "group",
      label: "Bên chuyển nhượng",
      fields: [
        {
          type: "tabs", // required
          tabs: [
            // required
            {
              label: "Cá nhân", // required
              fields: [
                // required
                {
                  type: "row",
                  fields: [
                    {
                      name: "benChuyenNhuong",
                      type: "text",
                      label: "Bên chuyển nhượng",
                      admin: {
                        width: "70%",
                      },
                    },
                    {
                      name: "maSoCoDong",
                      type: "text",
                      label: "Mã số cổ đông",
                      admin: {
                        width: "30%",
                      },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "CCCD",
                      type: "text",
                      label: "CCCD",
                    },
                    {
                      name: "ngayCap",
                      type: "date",
                      label: "Ngày cấp",
                      admin: {
                        width: "10%",
                      },
                    },
                    {
                      name: "noiCap",
                      type: "text",
                      label: "Nơi cấp",
                      admin: {
                        width: "10%",
                      },
                    },
                  ],
                },
                {
                  name: "uploadCCCD",
                  type: "upload",
                  label: "Tải CCCD lên",
                  relationTo: "media",
                  required: true,
                  admin: {
                    description: "Bản sao CCCD có chữ ký của người đăng ký",
                  },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "diaChi",
                      type: "text",
                      label: "Địa chỉ",
                    },
                    {
                      name: "dienThoai",
                      type: "text",
                      label: "Điện thoại",
                    },
                  ],
                },
              ],
            },
            {
              name: "toChuc",
              label: "Tổ chức", // required
              fields: [
                // required
                {
                  type: "row",
                  fields: [
                    {
                      name: "benChuyenNhuong",
                      type: "text",
                      label: "Bên Chuyển nhượng",
                      admin: {
                        width: "70%",
                      },
                    },
                    {
                      name: "maSoCoDong",
                      type: "text",
                      label: "Mã số cổ đông",
                      admin: {
                        width: "30%",
                      },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "CCCD",
                      type: "text",
                      label: "Giấy ĐKKD",
                    },
                    {
                      name: "ngayCap",
                      type: "date",
                      label: "Ngày cấp",
                      admin: {
                        width: "10%",
                      },
                    },
                    {
                      name: "noiCap",
                      type: "text",
                      label: "Nơi cấp",
                      admin: {
                        width: "10%",
                      },
                    },
                  ],
                },
                {
                  name: "uploadgDKKD",
                  type: "upload",
                  label: "Tải giấy ĐKKD lên",
                  relationTo: "media",
                  required: true,
                  admin: {
                    description: "Bản sao Giấy ĐKKD có chứng thực",
                  },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "diaChi",
                      type: "text",
                      label: "Địa chỉ",
                    },
                    {
                      name: "dienThoai",
                      type: "text",
                      label: "Điện thoại",
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "daiDienPhapNhan",
                      type: "text",
                      label: "Đại diện pháp nhân",
                    },
                    {
                      name: "chucVu",
                      type: "text",
                      label: "Chức vụ",
                    },
                  ],
                },
                {
                  name: "uploadBB",
                  type: "upload",
                  relationTo: "media",
                  label: "Tải Biên bản họp lên",
                  required: true,
                  admin: {
                    description:
                      "Biên bản họp Hội đồng Quản trị (Hội đồng Thành viên) về việc chuyển nhượng quyền mua cổ phần",
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
              name: "coPhanSoHuu",
              type: "number",
              label: "Số cổ phần hiện đang sở hữu",
            },
            {
              name: "soQuyenMuaHienCo",
              type: "number",
              label: "Số quyền mua hiện có",
            },
            {
              name: "soQuyenMuaHienCoBangChu",
              type: "number",
              label: "Số quyền mua hiện có bằng chữ",
            },
          ],
        },
      ],
    },
    {
      name: "benNhanChuyenNhuong",
      type: "group",
      label: "Bên nhận chuyển nhượng",
      fields: [
        {
          type: "tabs", // required
          tabs: [
            // required
            {
              label: "Cá nhân", // required
              fields: [
                // required
                {
                  type: "row",
                  fields: [
                    {
                      name: "benNhanChuyenNhuong",
                      type: "text",
                      label: "Bên nhận chuyển nhượng",
                      admin: {
                        width: "70%",
                      },
                    },
                    {
                      name: "maSoCoDong",
                      type: "text",
                      label: "Mã số cổ đông",
                      admin: {
                        width: "30%",
                      },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "CCCD",
                      type: "text",
                      label: "CCCD",
                    },
                    {
                      name: "ngayCap",
                      type: "date",
                      label: "Ngày cấp",
                      admin: {
                        width: "10%",
                      },
                    },
                    {
                      name: "noiCap",
                      type: "text",
                      label: "Nơi cấp",
                      admin: {
                        width: "10%",
                      },
                    },
                  ],
                },
                {
                  name: "uploadCCCD",
                  type: "upload",
                  label: "Tải CCCD lên",
                  relationTo: "media",
                  required: true,
                  admin: {
                    description: "Bản sao CCCD có chữ ký của người đăng ký",
                  },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "diaChi",
                      type: "text",
                      label: "Địa chỉ",
                    },
                    {
                      name: "dienThoai",
                      type: "text",
                      label: "Điện thoại",
                    },
                  ],
                },
              ],
            },
            {
              name: "toChuc",
              label: "Tổ chức", // required
              fields: [
                // required
                {
                  type: "row",
                  fields: [
                    {
                      name: "benChuyenNhuong",
                      type: "text",
                      label: "Bên Chuyển nhượng",
                      admin: {
                        width: "70%",
                      },
                    },
                    {
                      name: "maSoCoDong",
                      type: "text",
                      label: "Mã số cổ đông",
                      admin: {
                        width: "30%",
                      },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "CCCD",
                      type: "text",
                      label: "Giấy ĐKKD",
                    },
                    {
                      name: "ngayCap",
                      type: "date",
                      label: "Ngày cấp",
                      admin: {
                        width: "10%",
                      },
                    },
                    {
                      name: "noiCap",
                      type: "text",
                      label: "Nơi cấp",
                      admin: {
                        width: "10%",
                      },
                    },
                  ],
                },
                {
                  name: "uploadgDKKD",
                  type: "upload",
                  label: "Tải giấy ĐKKD lên",
                  relationTo: "media",
                  required: true,
                  admin: {
                    description: "Bản sao Giấy ĐKKD có chứng thực",
                  },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "diaChi",
                      type: "text",
                      label: "Địa chỉ",
                    },
                    {
                      name: "dienThoai",
                      type: "text",
                      label: "Điện thoại",
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "daiDienPhapNhan",
                      type: "text",
                      label: "Đại diện pháp nhân",
                    },
                    {
                      name: "chucVu",
                      type: "text",
                      label: "Chức vụ",
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "uploadBB",
                      type: "upload",
                      relationTo: "media",
                      label: "Tải Biên bản họp lên",
                      admin: {
                        description:
                          "Biên bản họp Hội đồng Quản trị về việc góp vốn mua cổ phần",
                      },
                    },
                    {
                      name: "uploadQD",
                      type: "upload",
                      relationTo: "media",
                      label: "Tải Quyết định lên",
                      admin: {
                        description:
                          "Quyết định cử người đại diện phần vốn góp",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "checkTerm",
      type: "checkbox",
      label:
        "Chúng tôi cam đoan các thông tin trên là trung thực và hoàn toàn chịu trách nhiệm về sự chuyển nhượng này. Bên chuyển nhượng cam kết không còn bất cứ quyền lợi và nghĩa vụ nào đối với số quyền mua cổ phần này ngay sau khi việc chuyển nhượng được hoàn tất (bao gồm quyền được mua cổ phần mới phát hành và các quyền, nghĩa vụ khác theo điều lệ của CTCP Đầu tư Năm Bảy Bảy đối với số quyền mua đã chuyển nhượng này). Sau khi có xác nhận của Hội đồng quản trị Công ty, giấy đề nghị này có giá trị như một hợp đồng chuyển nhượng giữa hai bên.",
    },
    {
      name: "chuKySo",
      type: "group",
      label: "Chữ ký số của các bên liên quan",
      fields: [
        {
          name: "chuKySo1",
          type: "upload",
          relationTo: "media",
          label: "Bên chuyển nhượng (ký và ghi rõ họ tên)",
          required: true,
          admin: {
            description: "Chữ ký của bên chuyển nhượng",
          },
        },
        {
          name: "chuKySo2",
          type: "upload",
          relationTo: "media",
          label: "Bên nhận chuyển nhượng (ký và ghi rõ họ tên)",
          required: true,
          admin: {
            description: "Chữ ký của bên nhận chuyển nhượng",
          },
        },
        {
          name: "chuKySo3",
          type: "upload",
          relationTo: "media",
          label: "Xác nhận của HĐQT NBB (chỉ xác nhận tính hợp lệ về thủ tục và việc đăng ký quyền sở hữu cổ phần, không xác nhận việc thanh toán của đôi bên về tiền bạc, có ghi rõ ngày xác nhận)",
          required: true,
          admin: {
            description: "Xác nhận của HĐQT NBB",
          },
        },
      ],
    },
  ],
};

export default FormTransfer;
