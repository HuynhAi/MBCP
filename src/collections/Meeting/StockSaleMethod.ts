import { GlobalConfig } from "payload/types";

const SaleMethod: GlobalConfig = {
  slug: "Meeting_2",
  admin: {
    group: "SalePlanMeeting",
  },
  fields: [
    {
      name: "document",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Biên bản họp thông qua phương thức chào bán.",
      },
    },
    {
      name: "method", // required
      type: "radio", // required
      admin: {
        //placeholder: "Phương thức bán cổ phần",
        layout: "horizontal",
      },
      options: [
        // required
        {
          label: "Bán cho cổ đông",
          value: "mint",
        },
        {
          label: "Bán cho đại chúng",
          value: "dark_gray",
        },
      ],
      defaultValue: "mint",
    },
  ],
};

export default SaleMethod;
