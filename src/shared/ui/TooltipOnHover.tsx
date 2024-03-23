import { FC, ReactElement } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Placement } from "react-bootstrap/esm/types";

interface TooltipOnHoverProps {
  id: string;
  children: ReactElement;
  title: string;
  placement?: Placement;
}

export const TooltipOnHover: FC<TooltipOnHoverProps> = ({
  id,
  children,
  title,
  placement = "right",
}) => (
  <OverlayTrigger
    overlay={
      <Tooltip id={id} placement={placement}>
        {title}
      </Tooltip>
    }
    placement={placement}
    popperConfig={{
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, -5],
          },
        },
      ],
    }}
  >
    {children}
  </OverlayTrigger>
);
