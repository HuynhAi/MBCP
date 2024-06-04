import { CollectionConfig } from "payload/types";
import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";

const formDangKy: CollectionConfig = {
  slug: "formDangKy",
  fields: [
    {
      name: "uploadBB1",
      type: "upload",
      relationTo: "media",
      required: true,
      label:
        "Tải lên Biên bản họp ĐHĐCĐ về việc chào bán cổ phần cho cổ đông hiện hữu",
      admin: {
        description:
          "(Bản sao) Biên bản họp ĐHĐCĐ về việc chào bán cổ phần cho cổ đông hiện hữu",
      },
    },
    {
      name: "uploadNQ1",
      type: "upload",
      relationTo: "media",
      required: true,
      label:
        "Tải lên Nghị quyết ĐHĐCĐ thông qua việc chào bán cổ phần cho cổ đông hiện hữu",
      admin: {
        description:
          "Nghị quyết ĐHĐCĐ thông qua việc chào bán cổ phần cho cổ đông hiện hữu",
      },
    },
    {
      name: "uploadBB2",
      type: "upload",
      relationTo: "media",
      required: true,
      label:
        "Tải lên Biên bản họp HĐQT về việc thông qua kết quả chào bán cổ phần cho cổ đông hiện hữu",
      admin: {
        description:
          "Biên bản họp HĐQT về việc thông qua kết quả chào bán cổ phần cho cổ đông hiện hữu",
      },
    },
    {
      name: "uploadNQ2",
      type: "upload",
      relationTo: "media",
      required: true,
      label:
        "Tải lên Nghị quyết HĐQT về việc thông qua chào bán cổ phần cho cổ đông hiện hữu",
      admin: {
        description:
          "Nghị quyết HĐQT về việc thông qua chào bán cổ phần cho cổ đông hiện hữu",
      },
    },
    {
      name: "uploadTB1",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Tải lên Thông báo thay đổi nội dung đăng ký doanh nghiệp",
      admin: {
        description:
          "Thông báo thay đổi nội dung đăng ký doanh nghiệp do người đại diện theo pháp luật của doanh nghiệp ký (theo mẫu tại Phụ lục II-1 Ban hành kèm theo Thông tư số 01/2021/TT-BKHĐT ngày 16 tháng 03 năm 2021 của Bộ trưởng Bộ Kế hoạch và Đầu tư)",
      },
    },
    {
      name: "uploadGUQ",
      type: "upload",
      relationTo: "media",
      label:
        "Tải lên Giấy ủy quyền thực hiện thủ tục đăng ký thay đổi nội dung đăng ký doanh nghiệp",
      admin: {
        description:
          "Giấy ủy quyền thực hiện thủ tục đăng ký thay đổi nội dung đăng ký doanh nghiệp (Trong trường hợp công ty ủy quyền cho bên thứ ba thực hiện thủ tục này)",
      },
    },
    {
      name: "uploadCCCD",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Tải lên Chứng minh nhân dân/Căn cước công dân người nộp hồ sơ",
      admin: {
        description:
          "(Bản sao chứng thực) Chứng minh nhân dân/Căn cước công dân người nộp hồ sơ.",
      },
    },
  ],
};

export default formDangKy;
