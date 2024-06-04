import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    //useAsTitle: "email",
    useAsTitle: "name_cty",
  },
  fields: [
    {
      name: "name_cty",
      type: "text",
      label: "Tên cty",
      admin: {
        width: "50%",
        placeholder: "Cty ABC",
      },
    },
  ],
};

export default Users;
