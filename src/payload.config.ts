import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import FormTransfer from "./collections/FormTransfer";
import Media from "./collections/Media";
import FormBuyMore from "./collections/FormBuyMore";
import formDangKy from "./collections/FormDKTDVDL";
import LinkAff from "./collections/LinkAff";
import FormAff from "./collections/FormAff";
import Meeting from "./collections/Meeting/SalePlanMeeting";
import Method from "./collections/Meeting/StockSaleMethod";
import MediaMeeting from "./collections/Meeting/Media_Meeting";
import Noti from "./collections/SaleAnnouncement/Create";
import Addpublic from "./collections/SaleAnnouncement/AddPublicOffering";
import PublicCompany from "./collections/SaleAnnouncement/publicCompany";
import ShareTransfer from "./collections/ShareTransfer/Create";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, FormTransfer, Media, FormBuyMore, formDangKy, LinkAff, FormAff, MediaMeeting, Noti, ShareTransfer, Addpublic],
  globals: [Meeting, Method, PublicCompany],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
    connectOptions: {
      dbName: "MBCP",
    },
  }),
});
