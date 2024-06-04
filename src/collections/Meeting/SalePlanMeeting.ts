import { GlobalConfig } from "payload/types";

const PlanMeeting: GlobalConfig = {
  slug: "Meeting_1",
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
        description: "Biên bản họp thông qua việc chào bán.",
      },
    },
  ],
};

export default PlanMeeting;
