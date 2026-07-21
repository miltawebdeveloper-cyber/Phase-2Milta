// uk-src/layouts/UkLayout.jsx
import { Outlet } from "react-router-dom";
import UkHeader from "../uk-components/common/UkHeader";
import UkFooter from "../uk-components/common/UkFooter";

export default function UkLayout() {
  return (
    <>
      <UkHeader />
      <Outlet />   {/* THIS IS REQUIRED */}
      <UkFooter />
    </>
  );
}
