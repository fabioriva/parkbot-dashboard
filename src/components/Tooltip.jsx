import React from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  // FloatingPortal,
} from "@floating-ui/react";

export default function Tooltip({ children, tooltip }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const newElement = React.cloneElement(children, {
    ref: refs.setReference,
    ...getReferenceProps(),
  });

  return (
    <React.Fragment>
      {newElement}
      {isOpen && (
        <div
          ref={refs.setFloating}
          className="bg-slate-800 text-white p-1.5 rounded-md z-10"
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: "max-content",
          }}
          {...getFloatingProps()}
        >
          {tooltip}
        </div>
      )}
    </React.Fragment>
  );
}

// import React, { useState } from "react";
// import {
//   ExtendedRefs,
//   ReferenceType,
//   Strategy,
//   autoUpdate,
//   flip,
//   offset,
//   shift,
//   useDismiss,
//   useFloating,
//   useFocus,
//   useHover,
//   useInteractions,
//   useRole,
// } from "@floating-ui/react";
// import { twMerge } from "tailwind-merge";
// import {
//   DEFAULT_COLOR,
//   borderRadius,
//   colorPalette,
//   getColorClassNames,
//   spacing,
// } from "lib";

// export const useTooltip = () => {
//   const [open, setOpen] = useState(false);

//   const { x, y, refs, strategy, context } = useFloating({
//     open,
//     onOpenChange: setOpen,
//     placement: "top",
//     whileElementsMounted: autoUpdate,
//     middleware: [
//       offset(5),
//       flip({
//         fallbackAxisSideDirection: "start",
//       }),
//       shift(),
//     ],
//   });

//   const hover = useHover(context, { move: false });
//   const focus = useFocus(context);
//   const dismiss = useDismiss(context);
//   const role = useRole(context, { role: "tooltip" });

//   const { getReferenceProps, getFloatingProps } = useInteractions([
//     hover,
//     focus,
//     dismiss,
//     role,
//   ]);

//   return {
//     tooltipProps: {
//       open,
//       x,
//       y,
//       refs,
//       strategy,
//       getFloatingProps,
//     },
//     getReferenceProps,
//   };
// };

// const Tooltip = ({ text, open, x, y, refs, strategy, getFloatingProps }) => {
//   return open && text ? (
//     <div
//       className={twMerge(
//         "w-max text-sm z-20",
//         getColorClassNames(DEFAULT_COLOR, colorPalette.darkestBackground)
//           .bgColor,
//         getColorClassNames("white").textColor,
//         borderRadius.md.all,
//         spacing.md.paddingX,
//         spacing.twoXs.paddingY
//       )}
//       ref={refs.setFloating}
//       style={{
//         position: strategy,
//         top: y ?? 0,
//         left: x ?? 0,
//       }}
//       {...getFloatingProps()}
//     >
//       {text}
//     </div>
//   ) : null;
// };

// Tooltip.displayName = "Tooltip";

// export default Tooltip;
