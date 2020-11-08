import React, { memo } from "react";
// memo tương đương PureComponent bên class, mỗi lần component cha của Child render thì component Child ko bị render lại
// Child render lại khi props thay đổi

function Child() {
  console.log("Child");
  return <div>Child Component</div>;
}
export default memo(Child);
