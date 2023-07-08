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
