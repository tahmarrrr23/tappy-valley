import type { ComponentPropsWithoutRef } from "react";

interface DeviceMockProps extends ComponentPropsWithoutRef<"div"> {}

export const DeviceMock = (props: DeviceMockProps) => {
  const { className, children, ...rest } = props;

  return (
    <div className={`w-97.5 h-211 bg-gray-50 ${className}`} {...rest}>
      {children}
    </div>
  );
};
